(function () {
  /* -----------------------------
     Helpers
  ----------------------------- */
  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));
  }

  function db() {
    return (window.SCAM_DB && typeof window.SCAM_DB === "object") ? window.SCAM_DB : {};
  }

  function branches() {
    return Array.isArray(window.SCAM_BRANCHES) ? window.SCAM_BRANCHES : [];
  }

  function casesDb() {
    return Array.isArray(window.SCAM_CASES) ? window.SCAM_CASES : [];
  }

  function getSlugFromMeta() {
    const meta = document.getElementById("scam-meta");
    if (!meta) return null;
    const slug = meta.getAttribute("data-scam");
    return slug ? slug.trim() : null;
  }

  function getItem(slug) {
    const D = db();
    return (slug && D[slug]) ? D[slug] : null;
  }

  // SR/EN aware (string OR {sr,en})
  function currentLang() {
    // PRIMARY: html[data-lang]
    const v = document.documentElement.getAttribute("data-lang");
    if (v === "en" || v === "sr") return v;

    // FALLBACK: html.lang (ui.js currently sets this)
    const l = (document.documentElement.lang || "").toLowerCase();
    if (l === "en" || l === "sr") return l;

    return "sr";
  }

  function pickLang(v) {
    if (typeof v === "string") return v;
    if (v && typeof v === "object") {
      const lang = currentLang();
      const a = (lang === "en") ? (v.en ?? v.sr) : (v.sr ?? v.en);
      return (typeof a === "string") ? a : "";
    }
    return "";
  }

  function pickLangForced(v, lang) {
    if (typeof v === "string") return v;
    if (v && typeof v === "object") {
      const a = (lang === "en") ? (v.en ?? v.sr) : (v.sr ?? v.en);
      return (typeof a === "string") ? a : "";
    }
    return "";
  }

  function pairAttrs(sr, en) {
    return `data-sr="${esc(sr)}" data-en="${esc(en)}"`;
  }

  function labelFor(slug) {
    const it = getItem(slug);
    const t = it ? it.title : null;
    const out = pickLang(t);
    return out || slug;
  }

  function subtitleFor(slug) {
    const it = getItem(slug);
    const s = it ? it.subtitle : null;
    return pickLang(s) || "";
  }

  function labelForLang(slug, lang) {
    const it = getItem(slug);
    const t = it ? it.title : null;
    const out = pickLangForced(t, lang);
    return out || slug;
  }

  function subtitleForLang(slug, lang) {
    const it = getItem(slug);
    const s = it ? it.subtitle : null;
    return pickLangForced(s, lang) || "";
  }

  function fileFor(slug) {
    const it = getItem(slug);
    if (it && it.url) return it.url;
    if (it && it.hasPage) return `${slug}.html`;
    return null;
  }

  function findHost(selector) {
    return document.querySelector(selector);
  }

  function insertBeforeFooter(node) {
    const footer = document.querySelector("footer");
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(node, footer);
      return true;
    }
    return false;
  }

  function ensureInsertedOnce(id) {
    return !!document.getElementById(id);
  }

  /* -----------------------------
     Merge SCAM_CONTENT into SCAM_DB
  ----------------------------- */
  function mergeContentIntoDB() {
    const D = db();
    const C = (window.SCAM_CONTENT && typeof window.SCAM_CONTENT === "object") ? window.SCAM_CONTENT : null;
    if (!C) return;

    for (const slug of Object.keys(C)) {
      if (!D[slug] || typeof D[slug] !== "object") continue;

      const extra = C[slug];
      if (!extra || typeof extra !== "object") continue;

      if (typeof extra.raw_html === "string" && extra.raw_html.trim()) {
        D[slug].raw_html = extra.raw_html;
      }

      if (Array.isArray(extra.overview)) D[slug].overview = extra.overview;
      if (Array.isArray(extra.steps)) D[slug].steps = extra.steps;
      if (extra.scammer_view && typeof extra.scammer_view === "object") D[slug].scammer_view = extra.scammer_view;
      if (Array.isArray(extra.sources)) D[slug].sources = extra.sources;

      if (Array.isArray(extra.links)) D[slug].links = extra.links;
      if (extra.subtitle && typeof extra.subtitle === "string") D[slug].subtitle = extra.subtitle;
      if (extra.title && typeof extra.title === "string") D[slug].title = extra.title;
    }
  }

  /* -----------------------------
     META BOX
  ----------------------------- */
  function renderMeta() {
    const meta = document.getElementById("scam-meta");
    if (!meta) return;

    const slug = getSlugFromMeta();
    if (!slug) return;

    const it = getItem(slug);
    if (!it) return;

    const overlaps = (it.overlaps || [])
      .slice(0, 10)
      .map((s) => {
        const href = fileFor(s);
        const sr = labelForLang(s, "sr");
        const en = labelForLang(s, "en");
        const attrs = pairAttrs(sr, en);
        const label = esc(labelFor(s));
        if (!href) return `<span class="tag" ${attrs}>${label}</span>`;
        return `<a class="tag" href="${esc(href)}" ${attrs}>${label}</a>`;
      })
      .join(" ");

    const srTitle = labelForLang(slug, "sr");
    const enTitle = labelForLang(slug, "en");
    const srSub = subtitleForLang(slug, "sr");
    const enSub = subtitleForLang(slug, "en");
    const titleText = esc(labelFor(slug));
    const subText = esc(subtitleFor(slug));

    meta.innerHTML = `
      <div class="meta-box">
        <div class="meta-title" ${pairAttrs(srTitle, enTitle)}>${titleText}</div>
        ${(srSub || enSub) ? `<div class="meta-sub" ${pairAttrs(srSub, enSub)}>${subText}</div>` : ""}
        ${overlaps ? `<div class="meta-tags">${overlaps}</div>` : ""}
      </div>
    `;
  }

  // Re-render dynamic blocks when the language is changed.
  // ui.js updates html[data-lang] and emits "lang:changed", but blocks rendered here
  // (meta subtitle, generated tags, index cards, related lists) are plain HTML.
  function rerenderOnLangChange() {
    renderMeta();
    // If we're on prevare.html, re-render the index list
    if (document.getElementById("scam-index")) {
      renderIndex();
    }
    // If we're on a scam page, re-render related/sources blocks
    if (document.querySelector("[data-related]")) {
      renderRelated();
    }
    if (document.querySelector("[data-sources]")) {
      renderSources();
    }
  }

  /* -----------------------------
     INDEX (prevare.html)
  ----------------------------- */
  function getIndexItems() {
    const D = db();
    const items = Object.keys(D).map((slug) => ({
      slug,
      ...(D[slug] || {})
    }));

    items.sort((a, b) => {
      const ap = a.hasPage ? 0 : 1;
      const bp = b.hasPage ? 0 : 1;
      if (ap !== bp) return ap - bp;

      const at = pickLang(a.title) || a.slug;
      const bt = pickLang(b.title) || b.slug;
      return String(at).localeCompare(String(bt), "sr");
    });

    return items;
  }

  function renderIndexList(items) {
    const container = document.getElementById("scam-index");
    if (!container) return;

    const pages = items.filter(x => x.hasPage);
    const others = items.filter(x => !x.hasPage);

    function card(it) {
      const href = it.hasPage ? (it.url || `${it.slug}.html`) : null;

      const overlaps = (it.overlaps || [])
        .slice(0, 6)
        .map((s) => {
          const h = fileFor(s);
          if (h) return `<a class="tag" href="${esc(h)}">${esc(labelFor(s))}</a>`;
          return `<span class="tag">${esc(labelFor(s))}</span>`;
        })
        .join(" ");

      const t = pickLang(it.title) || it.slug;
      const sub = pickLang(it.subtitle);

      return `
        <div class="index-card">
          <div class="index-title">
            ${href ? `<a href="${esc(href)}">${esc(t)}</a>` : `${esc(t)}`}
          </div>
          ${sub ? `<div class="index-sub muted">${esc(sub)}</div>` : ""}
          ${overlaps ? `<div class="meta-tags">${overlaps}</div>` : ""}
        </div>
      `;
    }

    function block(title, list) {
      if (!list.length) return "";
      return `
        <section class="index-block">
          <h2>${esc(title)}</h2>
          <div class="index-grid">
            ${list.map(card).join("")}
          </div>
        </section>
      `;
    }

    container.innerHTML = `
      ${block("Stranice", pages)}
      ${block("Biblioteka", others)}
    `;
  }

  function renderIndex() {
    const container = document.getElementById("scam-index");
    if (!container) return;

    const all = getIndexItems();
    renderIndexList(all);

    const input = document.getElementById("scam-search");
    if (!input) return;

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        renderIndexList(all);
        return;
      }

      const filtered = all.filter(it => {
        const hay = [
          it.slug,
          pickLang(it.title),
          pickLang(it.subtitle),
          ...(it.tags || []),
          ...((it.overlaps || []).map(labelFor))
        ].join(" ").toLowerCase();

        return hay.includes(q);
      });

      renderIndexList(filtered);
    });
  }

  /* -----------------------------
     BRANCHES (by scam, no steps required)
  ----------------------------- */
  function renderBranchesByScam() {
    const slug = getSlugFromMeta();
    if (!slug) return;

    const host = findHost("[data-branches]");
    if (!host) return;

    const list = branches().filter(b => b && b.from_scam === slug && b.to_scam);
    if (!list.length) {
      host.innerHTML = "";
      return;
    }

    const seen = new Set();
    const rows = [];
    for (const b of list) {
      const to = String(b.to_scam);
      if (seen.has(to)) continue;
      seen.add(to);
      rows.push(b);
      if (rows.length >= 16) break;
    }

    const items = rows.map(b => {
      const to = String(b.to_scam);
      const href = fileFor(to);
      const title = labelFor(to);
      const note = b.note ? String(b.note) : "";

      const link = href
        ? `<a href="${esc(href)}">${esc(title)}</a>`
        : `<span>${esc(title)}</span>`;

      return `
        <li>
          ${link}
          ${note ? `<div class="muted">${esc(note)}</div>` : ""}
        </li>
      `;
    }).join("");

    host.innerHTML = `
      <section class="card">
        <h2>Kako prelazi u druge prevare</h2>
        <p class="muted">Grananja na osnovu tipičnih pragova: link/forma, kapara, dostava, naknadne takse i recovery talas.</p>
        <div class="branch-box">
          <div class="branch-title">Može da preraste u</div>
          <ul class="branch-list">${items}</ul>
        </div>
      </section>
    `;
  }

  /* -----------------------------
     RAW HTML Injection (no content loss)
     Priority: [data-longform] -> [data-overview] -> [data-steps] -> before footer
  ----------------------------- */
  function renderRawHTML() {
    const slug = getSlugFromMeta();
    if (!slug) return false;

    const it = getItem(slug);
    if (!it) return false;

    const raw = (typeof it.raw_html === "string") ? it.raw_html.trim() : "";
    if (!raw) return false;

    if (ensureInsertedOnce("scam-raw")) return true;

    const section = document.createElement("section");
    section.id = "scam-raw";
    section.className = "longform";
    section.innerHTML = raw;

    const host =
      findHost("[data-longform]") ||
      findHost("[data-overview]") ||
      findHost("[data-steps]") ||
      null;

    if (host) {
      host.innerHTML = "";
      host.appendChild(section);
    } else {
      insertBeforeFooter(section);
    }

    // tell ui.js to re-apply language on dynamically injected nodes
    document.dispatchEvent(new Event("scam:content-rendered"));

    return true;
  }

  /* -----------------------------
     OVERVIEW (structured)
  ----------------------------- */
  function renderOverview() {
    const slug = getSlugFromMeta();
    if (!slug) return;

    const it = getItem(slug);
    if (!it) return;

    const paras = Array.isArray(it.overview) ? it.overview.filter(Boolean) : [];
    if (!paras.length) return;

    if (ensureInsertedOnce("scam-overview")) return;

    const section = document.createElement("section");
    section.className = "card overview";
    section.id = "scam-overview";

    section.innerHTML = `
      <h2>Kako i zašto radi</h2>
      ${paras.map(p => `<p>${esc(p)}</p>`).join("")}
    `;

    const host = findHost("[data-overview]");
    if (host) { host.innerHTML = ""; host.appendChild(section); return; }

    const stepsHost = findHost("[data-steps]");
    if (stepsHost && stepsHost.parentNode) {
      stepsHost.parentNode.insertBefore(section, stepsHost);
      return;
    }

    insertBeforeFooter(section);
  }

  /* -----------------------------
     STEPS + BRANCHES (structured)
     If raw_html exists, skip (raw_html contains full content)
  ----------------------------- */
  function renderStepsAndBranches() {
    const slug = getSlugFromMeta();
    if (!slug) return;

    const it = getItem(slug);
    if (!it) return;

    if (typeof it.raw_html === "string" && it.raw_html.trim()) return;

    const steps = Array.isArray(it.steps) ? it.steps : [];
    if (!steps.length) return;

    if (ensureInsertedOnce("scam-steps")) return;

    const allBranches = branches();
    const byStep = new Map();
    for (const b of allBranches) {
      if (!b || b.from_scam !== slug) continue;
      if (!b.from_step || !b.to_scam) continue;
      if (!byStep.has(b.from_step)) byStep.set(b.from_step, []);
      byStep.get(b.from_step).push(b);
    }

    function renderSignals(step) {
      const signals = Array.isArray(step.signals) ? step.signals.filter(Boolean) : [];
      if (!signals.length) return "";
      return `
        <div class="signals">
          <div class="signals-title">Šta ljudi obično primete</div>
          <ul class="signals-list">${signals.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
      `;
    }

    function branchList(stepId) {
      const list = byStep.get(stepId) || [];
      if (!list.length) return "";

      const items = list.map(b => {
        const to = String(b.to_scam);
        const href = fileFor(to);
        const title = labelFor(to);
        const note = b.note ? String(b.note) : "";

        const link = href
          ? `<a href="${esc(href)}">${esc(title)}</a>`
          : `<span>${esc(title)}</span>`;

        return `
          <li>
            ${link}
            ${note ? `<div class="muted">${esc(note)}</div>` : ""}
          </li>
        `;
      }).join("");

      return `
        <div class="branch-box">
          <div class="branch-title">Može da preraste u</div>
          <ul class="branch-list">${items}</ul>
        </div>
      `;
    }

    const section = document.createElement("section");
    section.className = "card steps";
    section.id = "scam-steps";

    const html = steps.map((s, idx) => {
      const sid = s.id ? String(s.id) : `step-${idx + 1}`;
      const title = s.title ? String(s.title) : `Korak ${idx + 1}`;
      const text = s.text ? String(s.text) : "";

      return `
        <div class="step" data-step="${esc(sid)}">
          <div class="step-head">
            <div class="step-num">${idx + 1}</div>
            <div class="step-title">${esc(title)}</div>
          </div>
          ${text ? `<div class="step-text">${esc(text)}</div>` : ""}
          ${renderSignals(s)}
          ${branchList(sid)}
        </div>
      `;
    }).join("");

    section.innerHTML = `
      <h2>Hronološki tok</h2>
      <div class="steps-list">${html}</div>
    `;

    const host = findHost("[data-steps]");
    if (host) { host.innerHTML = ""; host.appendChild(section); return; }

    insertBeforeFooter(section);
  }

  /* -----------------------------
     SCAMMER VIEW (structured)
  ----------------------------- */
  function renderScammerView() {
    const slug = getSlugFromMeta();
    if (!slug) return;

    const it = getItem(slug);
    if (!it) return;

    if (typeof it.raw_html === "string" && it.raw_html.trim()) return;

    const sv = it.scammer_view && typeof it.scammer_view === "object" ? it.scammer_view : null;
    if (!sv) return;

    const goals = Array.isArray(sv.goals) ? sv.goals.filter(Boolean) : [];
    const workflow = Array.isArray(sv.workflow) ? sv.workflow.filter(Boolean) : [];
    const measurement = Array.isArray(sv.measurement) ? sv.measurement.filter(Boolean) : [];
    const handoff = Array.isArray(sv.handoff) ? sv.handoff.filter(Boolean) : [];

    if (!goals.length && !workflow.length && !measurement.length && !handoff.length) return;
    if (ensureInsertedOnce("scam-scammer-view")) return;

    function block(title, arr) {
      if (!arr.length) return "";
      return `
        <div class="sv-block">
          <h3>${esc(title)}</h3>
          <ul class="bullets">
            ${arr.map(x => `<li>${esc(x)}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    const section = document.createElement("section");
    section.className = "card scammer-view";
    section.id = "scam-scammer-view";

    section.innerHTML = `
      <h2>Perspektiva scammera</h2>
      <p class="muted">Kako se tok vodi “sa njihove strane”: rutine, pragovi i prelazi.</p>
      ${block("Ciljevi", goals)}
      ${block("Kako rade", workflow)}
      ${block("Šta prate kod mete", measurement)}
      ${block("Prelaz u druge šeme", handoff)}
    `;

    const host = findHost("[data-scammer-view]");
    if (host) { host.innerHTML = ""; host.appendChild(section); return; }

    const stepsSection = document.getElementById("scam-steps");
    if (stepsSection && stepsSection.parentNode) {
      if (stepsSection.nextSibling) stepsSection.parentNode.insertBefore(section, stepsSection.nextSibling);
      else stepsSection.parentNode.appendChild(section);
      return;
    }

    insertBeforeFooter(section);
  }

  /* -----------------------------
     CASES
  ----------------------------- */
  function renderCases() {
    const slug = getSlugFromMeta();
    if (!slug) return;

    const host = findHost("[data-cases]");
    if (!host) return;

    const all = casesDb().filter(c => c && c.scam === slug);
    if (!all.length) {
      host.innerHTML = ``;
      return;
    }

    function renderArtifact(a) {
      if (!a || !a.type) return "";
      const label = a.label ? `<strong>${esc(a.label)}:</strong> ` : "";
      const v = a.value ? String(a.value) : "";
      if (a.type === "link" && v) {
        return `<li>${label}<a href="${esc(v)}" target="_blank" rel="noopener noreferrer">${esc(v)}</a></li>`;
      }
      if (v) return `<li>${label}${esc(v)}</li>`;
      return "";
    }

    function renderTranscript(t) {
      const rows = Array.isArray(t) ? t : [];
      if (!rows.length) return `<div class="muted">Nema transkripta.</div>`;
      return `
        <div class="transcript">
          ${rows.map(m => {
            const side = m.side === "me" ? "me" : "them";
            const who = side === "me" ? "Ti" : "Scammer";
            return `<div class="msg ${side}"><div class="who">${esc(who)}</div><div class="text">${esc(m.text || "")}</div></div>`;
          }).join("")}
        </div>
      `;
    }

    host.innerHTML = `
      <div class="cases">
        ${all.map(c => `
          <details class="case">
            <summary>
              <span class="case-title">${esc(c.title || c.id)}</span>
              <!-- obriši ceo span -->
            </summary>

            ${Array.isArray(c.summary) && c.summary.length ? `
              <div class="case-block">
                <div class="case-block-title">Sažetak</div>
                <ul class="bullets">${c.summary.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
              </div>
            ` : ""}

            ${Array.isArray(c.artifacts) && c.artifacts.length ? `
              <div class="case-block">
                <div class="case-block-title">Dokazi / meta</div>
                <ul class="bullets">${c.artifacts.map(renderArtifact).filter(Boolean).join("")}</ul>
              </div>
            ` : ""}

            <div class="case-block">
              <div class="case-block-title">Transkript</div>
              ${renderTranscript(c.transcript)}
            </div>
          </details>
        `).join("")}
      </div>
    `;
  }

  /* -----------------------------
     RELATED (based on overlaps)
  ----------------------------- */
  function renderRelated() {
    const slug = getSlugFromMeta();
    if (!slug) return;

    const it = getItem(slug);
    if (!it) return;

    const overlaps = (it.overlaps || [])
      .map(s => ({ slug: s, href: fileFor(s) }))
      .filter(x => x.href);

    if (!overlaps.length) return;

    const section = document.createElement("section");
    section.className = "card related";
    section.id = "related-scams";

    const hSr = "Povezane prevare";
    const hEn = "Related scams";
    const hText = (currentLang() === "en") ? hEn : hSr;

    section.innerHTML = `
      <h2 ${pairAttrs(hSr, hEn)}>${esc(hText)}</h2>
      <div class="meta-tags">
        ${overlaps.slice(0, 12).map(x => {
          const sr = labelForLang(x.slug, "sr");
          const en = labelForLang(x.slug, "en");
          const attrs = pairAttrs(sr, en);
          const label = esc(labelFor(x.slug));
          return `<a class="tag" href="${esc(x.href)}" ${attrs}>${label}</a>`;
        }).join("")}
      </div>
    `;


    const host = findHost("[data-related]") || document.getElementById("scam-related");
    if (host) { host.innerHTML = ""; host.appendChild(section); return; }

    insertBeforeFooter(section);
  }

  /* -----------------------------
     SOURCES (structured)
     If raw_html exists and already includes sources, skip to avoid duplication.
  ----------------------------- */
  function renderSources() {
    const slug = getSlugFromMeta();
    if (!slug) return;

    const it = getItem(slug);
    if (!it) return;

    if (typeof it.raw_html === "string" && it.raw_html.trim()) return;

    const sources = Array.isArray(it.sources) ? it.sources : [];
    if (!sources.length) return;

    if (ensureInsertedOnce("sources")) return;

    const section = document.createElement("section");
    section.className = "card sources";
    section.id = "sources";

    const list = sources.map(src => {
      const name = src && src.name ? String(src.name) : "";
      const url = src && src.url ? String(src.url) : "";
      if (!name) return "";
      if (url) {
        return `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(name)}</a></li>`;
      }
      return `<li>${esc(name)}</li>`;
    }).filter(Boolean).join("");

    const hSr = "Izvori";
    const hEn = "Sources";
    const hText = (currentLang() === "en") ? hEn : hSr;
    section.innerHTML = `
      <h2 ${pairAttrs(hSr, hEn)}>${esc(hText)}</h2>
      <ul>${list}</ul>
    `;

    const host = findHost("[data-sources]");
    if (host) { host.innerHTML = ""; host.appendChild(section); return; }

    insertBeforeFooter(section);
  }

  /* -----------------------------
     Boot
  ----------------------------- */
  mergeContentIntoDB();

  // When ui.js toggles language it updates html[data-lang] and emits this event.
  // Re-render blocks generated here so titles/subtitles/tags switch live.
  document.addEventListener("lang:changed", rerenderOnLangChange);

  document.addEventListener("DOMContentLoaded", () => {
    renderMeta();
    renderIndex();
    renderBranchesByScam();

    const rawRendered = renderRawHTML();

    if (!rawRendered) {
      renderOverview();
      renderStepsAndBranches();
      renderScammerView();
      renderSources();
    }

    renderCases();
    renderRelated();
  });
})();
