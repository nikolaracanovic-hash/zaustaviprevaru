import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parent.parent


KEY_SELECTORS = [
    ("html", "html"),
    ("body", "body"),
    ("header_container", "header.page-header .container"),
    ("hero", "header.page-header .hero"),
    ("h1", "header.page-header .hero h1"),
    ("main", "main"),
    ("main_container", "main.container"),
    ("meta_box", "#scam-meta .meta-box"),
    ("meta_title", "#scam-meta .meta-title"),
    ("first_card", "main .card, main section.card, main .longform, #main-content .card, #main-content .longform"),
]

KEY_STYLE_PROPS = [
    "font-size",
    "line-height",
    "margin-top",
    "margin-bottom",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "max-width",
    "width",
]


def read_soup(p: Path) -> BeautifulSoup:
    return BeautifulSoup(p.read_text(encoding="utf-8"), "lxml")


def list_html_files() -> List[Path]:
    return sorted([p for p in ROOT.glob("*.html")], key=lambda p: p.name)


def is_scam_page(soup: BeautifulSoup) -> bool:
    s = str(soup)
    return bool(
        re.search(r'data-scam="[^"]+"', s)
        or re.search(r'<meta[^>]+name="scam-slug"[^>]+content="[^"]+"', s)
        or re.search(r'<meta[^>]+id="scam-meta"[^>]+data-scam="[^"]+"', s)
    )


def scam_slug(soup: BeautifulSoup) -> Optional[str]:
    s = str(soup)
    m = re.search(r'data-scam="([^"]+)"', s)
    if m:
        return m.group(1)
    m = re.search(r'<meta[^>]+id="scam-meta"[^>]+data-scam="([^"]+)"', s)
    if m:
        return m.group(1)
    m = re.search(r'<meta[^>]+name="scam-slug"[^>]+content="([^"]+)"', s)
    if m:
        return m.group(1)
    return None


def template_kind(soup: BeautifulSoup) -> str:
    h1 = soup.select_one("header.page-header .hero h1")
    if not h1:
        return "unknown"
    if h1.get("id") == "page-title":
        return "page-title"
    return "hero-h1"


def includes(soup: BeautifulSoup) -> Dict[str, List[str]]:
    styles = [l.get("href", "") for l in soup.find_all("link", rel=lambda v: v and "stylesheet" in v) if l.get("href")]
    scripts = [s.get("src", "") for s in soup.find_all("script", src=True) if s.get("src")]
    return {"css": styles, "js": scripts}

def include_breakdown(inc: Dict[str, List[str]]) -> Dict[str, object]:
    css = inc.get("css") or []
    js = inc.get("js") or []

    content_js = [x for x in js if x.endswith(".content.js")]
    shared_names = ("ui.js", "data.js", "branches.js", "cases.js", "render.js")
    shared_js = [x for x in js if x in shared_names]
    other_js = [x for x in js if (x not in shared_js and x not in content_js)]

    return {
        "css": css,
        "css_has_style": ("style.css" in css),
        "shared_js": shared_js,
        "content_js": content_js,
        "other_js": other_js,
    }


def wrapper_snapshot(soup: BeautifulSoup) -> Dict[str, object]:
    def classes(sel: str) -> List[str]:
        el = soup.select_one(sel)
        if not el:
            return []
        c = el.get("class") or []
        return list(c) if isinstance(c, list) else str(c).split()

    header = soup.select_one("header")
    main = soup.select_one("main")
    hero = soup.select_one("header.page-header .hero")
    return {
        "header_tag": header.name if header else None,
        "header_classes": classes("header"),
        "has_header_container": bool(soup.select_one("header.page-header .container")),
        "hero_classes": classes("header.page-header .hero"),
        "main_tag": main.name if main else None,
        "main_classes": list(main.get("class") or []) if main else [],
        "main_id": main.get("id") if main else None,
        "hero_h1_id": (soup.select_one("header.page-header .hero h1") or {}).get("id") if hero else None,
    }


def inline_styles(soup: BeautifulSoup) -> Dict[str, object]:
    style_tags = soup.find_all("style")
    inline_attrs = soup.find_all(style=True)
    return {
        "style_tags": len(style_tags),
        "style_attr_count": len(inline_attrs),
    }


def heading_structure(soup: BeautifulSoup) -> Dict[str, object]:
    hero_h = soup.select_one("header.page-header .hero h1")
    if not hero_h:
        return {"hero_heading": None}
    return {
        "hero_heading": hero_h.name,
        "hero_heading_id": hero_h.get("id"),
        "hero_heading_class": " ".join(hero_h.get("class") or []),
    }


def audit_static(page_path: Path) -> Dict[str, object]:
    soup = read_soup(page_path)
    inc = includes(soup)
    return {
        "file": page_path.name,
        "slug": scam_slug(soup),
        "template": template_kind(soup),
        "includes": inc,
        "include_breakdown": include_breakdown(inc),
        "wrappers": wrapper_snapshot(soup),
        "inline": inline_styles(soup),
        "heading": heading_structure(soup),
    }


def computed_for_page(file_url: str) -> Dict[str, object]:
    # Run in page context so we can compute winning selector for a property.
    js = r"""
    (payload) => {
      const selPairs = payload.selPairs;
      const props = payload.props;
      function norm(s){
        return (s||"")
          .toLowerCase()
          .trim()
          .replace(/^[\(\[\{]+|[\)\]\}]+$/g,"")
          .replace(/[“”"']/g,"")
          .replace(/\s+/g," ");
      }
      function isDup(a,b){ return norm(a) && norm(a) === norm(b); }
      function safeQS(selector) {
        try { return document.querySelector(selector); } catch (e) { return null; }
      }
      function specificity(selector) {
        // rough specificity: [ids, classes/attrs/pseudos, elements]
        const s = selector
          .replace(/:not\(([^)]*)\)/g, ' $1 ')
          .replace(/::?[\w-]+(\([^)]*\))?/g, m => m.startsWith('::') ? ' ' : m); // keep pseudo-classes as class-bucket
        const ids = (s.match(/#[\w-]+/g) || []).length;
        const cls = (s.match(/\.[\w-]+/g) || []).length
          + (s.match(/\[[^\]]+\]/g) || []).length
          + (s.match(/:[\w-]+(\([^)]*\))?/g) || []).length;
        // elements: tag names
        const el = (s.match(/(^|[\s>+~,(])([a-zA-Z][\w-]*)/g) || []).length;
        return [ids, cls, el];
      }
      function cmpSpec(a, b) {
        for (let i=0;i<3;i++){ if (a[i] !== b[i]) return a[i]-b[i]; }
        return 0;
      }
      function winningRule(el, prop) {
        // inline style wins if sets prop
        if (el && el.style) {
          const v = el.style.getPropertyValue(prop);
          if (v) return {source: "inline", selector: "style attribute", value: v.trim()};
        }
        const matches = [];
        const sheets = Array.from(document.styleSheets || []);
        for (let si = 0; si < sheets.length; si++) {
          const sh = sheets[si];
          let rules;
          try { rules = sh.cssRules; } catch (e) { continue; }
          if (!rules) continue;
          for (let ri = 0; ri < rules.length; ri++) {
            const r = rules[ri];
            if (!r || !r.selectorText || !r.style) continue;
            const v = r.style.getPropertyValue(prop);
            if (!v) continue;
            let ok = false;
            try { ok = el.matches(r.selectorText); } catch (e) { ok = false; }
            if (!ok) continue;
            matches.push({
              selector: r.selectorText,
              value: v.trim(),
              spec: specificity(r.selectorText),
              sheet: sh.href || "inline <style>",
              order: [si, ri]
            });
          }
        }
        if (!matches.length) return null;
        matches.sort((a,b) => {
          const s = cmpSpec(a.spec, b.spec);
          if (s !== 0) return s;
          if (a.order[0] !== b.order[0]) return a.order[0]-b.order[0];
          return a.order[1]-b.order[1];
        });
        const w = matches[matches.length - 1];
        return {source: w.sheet, selector: w.selector, value: w.value, spec: w.spec};
      }
      const out = {};
      for (const [key, selector] of selPairs) {
        const el = safeQS(selector);
        const entry = {selector, found: !!el};
        if (!el) { out[key] = entry; continue; }
        const cs = getComputedStyle(el);
        entry.computed = {};
        for (const p of props) entry.computed[p] = cs.getPropertyValue(p);
        const r = el.getBoundingClientRect();
        entry.box = {x: r.x, y: r.y, w: r.width, h: r.height};
        out[key] = entry;
      }
      out.__viewport = {w: window.innerWidth, h: window.innerHeight, dpr: window.devicePixelRatio};
      // Provide rule traces for properties we care about on key elements
      out.__winners = {};
      const traceTargets = [
        ["h1", "header.page-header .hero h1"],
        ["main_container", "main.container"],
        ["meta_box", "#scam-meta .meta-box"],
        ["first_card", "main .card, main section.card, main .longform, #main-content .card, #main-content .longform"]
      ];
      for (const [tkey, tsel] of traceTargets) {
        const el = safeQS(tsel);
        if (!el) continue;
        out.__winners[tkey] = {};
        for (const p of ["font-size","padding-left","padding-right","margin-top","margin-bottom"]) {
          const w = winningRule(el, p);
          if (w) out.__winners[tkey][p] = w;
        }
      }

      // Title de-duplication audit (runtime DOM)
      const heroH1 = safeQS(".hero h1");
      const heroTitle = heroH1 ? (heroH1.textContent || "") : "";
      const heroSubs = Array.from(document.querySelectorAll(".hero .hero-sub")).map(el => el.textContent || "");
      const metaTitleEl = safeQS("#scam-meta .meta-title");
      const metaTitle = metaTitleEl ? (metaTitleEl.textContent || "") : "";
      const main = safeQS("main");
      const firstCard = main ? (main.querySelector(".card, section.card, .longform, #scam-raw") || null) : null;
      const firstCardHeadingEl = firstCard ? (firstCard.querySelector("h2, h3") || null) : null;
      const firstCardHeading = firstCardHeadingEl ? (firstCardHeadingEl.textContent || "") : "";

      out.__titleDedupe = {
        heroTitle,
        heroSubs,
        metaTitle,
        firstCardHeading,
        heroSubtitleDup: heroSubs.some(s => isDup(s, heroTitle)),
        metaTitleDup: isDup(metaTitle, heroTitle),
        firstCardHeadingDup: isDup(firstCardHeading, heroTitle),
      };

      return out;
    }
    """
    return {"__eval__": js, "selPairs": KEY_SELECTORS, "props": KEY_STYLE_PROPS}


def audit_computed(file_urls: Dict[str, str]) -> Dict[str, Dict[str, object]]:
    out: Dict[str, Dict[str, object]] = {}
    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--allow-file-access-from-files"])
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        for name, url in file_urls.items():
            page.goto(url)
            page.wait_for_timeout(300)
            payload = computed_for_page(url)
            res = page.evaluate(payload["__eval__"], {"selPairs": payload["selPairs"], "props": payload["props"]})
            out[name] = res
        browser.close()
    return out


def diff_includes(ref: Dict[str, List[str]], cur: Dict[str, List[str]]) -> bool:
    return ref != cur


def main():
    html_files = list_html_files()
    scam_files = []
    for p in html_files:
        if p.name in ("index.html", "prevare.html"):
            continue
        soup = read_soup(p)
        if is_scam_page(soup):
            scam_files.append(p)

    static = [audit_static(p) for p in scam_files]

    # define the "22" as hero-h1 template pages (common template)
    scam22 = [x for x in static if x["template"] == "hero-h1"]
    other_templates = [x for x in static if x["template"] != "hero-h1"]

    ref_file = "fake-call-scam.html"
    ref = next((x for x in scam22 if x["file"] == ref_file), scam22[0] if scam22 else None)
    if not ref:
        print(json.dumps({"error": "no scam pages found"}, ensure_ascii=False, indent=2))
        return

    base_url = f"file:///{ROOT.as_posix()}"
    file_urls = {x["file"]: f"{base_url}/{x['file']}" for x in static}
    computed = audit_computed(file_urls)

    ref_comp = computed[ref["file"]]

    rows = []
    ref_shared_js = ref.get("include_breakdown", {}).get("shared_js", [])
    for x in static:
        f = x["file"]
        incb = x.get("include_breakdown", {})
        inc_ok = bool(incb.get("css_has_style")) and (incb.get("shared_js") == ref_shared_js)
        wrap_ok = (x["wrappers"]["has_header_container"] == ref["wrappers"]["has_header_container"]
                   and x["wrappers"]["hero_classes"] == ref["wrappers"]["hero_classes"]
                   and ("container" in (x["wrappers"]["main_classes"] or ["container"]) or True))
        head_ok = x["heading"] == ref["heading"]
        inline_found = (x["inline"]["style_tags"] > 0) or (x["inline"]["style_attr_count"] > 0)

        # compare a small set of computed values
        diffs = []
        for key in ("h1", "main_container", "meta_box", "first_card"):
            rc = ref_comp.get(key, {})
            cc = computed[f].get(key, {})
            if not rc.get("found") or not cc.get("found"):
                if rc.get("found") != cc.get("found"):
                    diffs.append(f"{key}:found")
                continue
            for prop in ("font-size", "padding-left", "padding-right", "margin-top", "margin-bottom"):
                rv = rc.get("computed", {}).get(prop)
                cv = cc.get("computed", {}).get(prop)
                if rv != cv:
                    diffs.append(f"{key}.{prop}")
        rows.append({
            "file": f,
            "css_js_includes": "OK" if inc_ok else "DIFF",
            "wrappers": "OK" if wrap_ok else "DIFF",
            "heading": "OK" if head_ok else "DIFF",
            "inline_styles": "FOUND" if inline_found else "NO",
            "computed_diff_keys": diffs[:6],
        })

    out = {
        "ref": ref["file"],
        "scam_pages": [x["file"] for x in static],
        "scam22": [x["file"] for x in scam22],
        "excluded_templates": [{"file": x["file"], "template": x["template"]} for x in other_templates],
        "table": rows,
        "title_dedupe": [
            {
                "file": r["file"],
                **(computed.get(r["file"], {}).get("__titleDedupe", {}) or {}),
            }
            for r in rows
            if (
                (computed.get(r["file"], {}).get("__titleDedupe", {}) or {}).get("heroSubtitleDup")
                or (computed.get(r["file"], {}).get("__titleDedupe", {}) or {}).get("metaTitleDup")
                or (computed.get(r["file"], {}).get("__titleDedupe", {}) or {}).get("firstCardHeadingDup")
            )
        ],
        "computed": {
            # keep only pages with computed diffs vs ref to reduce output
            r["file"]: {
                "diffs": r["computed_diff_keys"],
                "winners": computed[r["file"]].get("__winners", {}),
                "snap": {k: computed[r["file"]].get(k, {}) for k in ("h1","main_container","meta_box","first_card")}
            }
            for r in rows if r["computed_diff_keys"]
        },
        "ref_snapshot": {
            "winners": ref_comp.get("__winners", {}),
            "snap": {k: ref_comp.get(k, {}) for k in ("h1","main_container","meta_box","first_card")}
        }
    }

    print(json.dumps(out, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

