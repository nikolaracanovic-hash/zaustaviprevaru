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

  function norm(s){
    return (s||"")
      .toLowerCase()
      .trim()
      .replace(/^[\(\[\{]+|[\)\]\}]+$/g,"")   // skini spoljne zagrade
      .replace(/[“”"']/g,"")                 // skini navodnike
      .replace(/\s+/g," ");                  // collapse whitespace
  }
  function isDup(a,b){ return norm(a) && norm(a) === norm(b); }

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

  // SR/CYR/EN aware (string OR {sr,cyr,en})
  function currentLang() {
    // PRIMARY: html[data-lang]
    const v = document.documentElement.getAttribute("data-lang");
    if (v === "en" || v === "sr") return v;
    if (v === "cyr") return "sr";

    // FALLBACK: html.lang (ui.js currently sets this)
    const l = (document.documentElement.lang || "").toLowerCase();
    if (l === "en" || l === "sr") return l;
    if (l === "cyr") return "sr";

    return "sr";
  }

  function pickLang(v) {
    if (typeof v === "string") return v;
    if (v && typeof v === "object") {
      const lang = currentLang();
      const a = v[lang] ?? v.sr ?? v.en;
      return (typeof a === "string") ? a : "";
    }
    return "";
  }

  function pickLangForced(v, lang) {
    if (typeof v === "string") return v;
    if (v && typeof v === "object") {
      const a = v[lang] ?? v.sr ?? v.en;
      return (typeof a === "string") ? a : "";
    }
    return "";
  }

  function pairAttrs(sr, en) {
    return `data-sr="${esc(sr)}" data-en="${esc(en)}"`;
  }

  function enTitleFor(slug) {
    const it = getItem(slug);
    if (!it) return slug;
    return String(it.title_en || pickLangForced(it.title, "en") || slug);
  }

  function srTitleFor(slug) {
    const it = getItem(slug);
    if (!it) return "";
    return String(it.title_sr || pickLangForced(it.title, "sr") || "");
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

  function ensureScamHosts() {
    const slug = getSlugFromMeta();
    if (!slug) return;

    let main = document.querySelector("main");
    if (!main) {
      main = document.createElement("main");
      main.className = "container";
      const footer = document.querySelector("footer");
      if (footer && footer.parentNode) footer.parentNode.insertBefore(main, footer);
      else document.body.appendChild(main);
    }

    if (!main.classList.contains("container")) main.classList.add("container");

    const want = [
      "[data-longform]",
      "[data-overview]",
      "[data-steps]",
      "[data-scammer-view]",
      "[data-related]",
      "[data-sources]"
    ];

    for (const sel of want) {
      if (document.querySelector(sel)) continue;
      const el = document.createElement("div");
      el.setAttribute(sel.slice(1, -1), "");
      main.appendChild(el);
    }
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
    let meta = document.getElementById("scam-meta");
    const slug = getSlugFromMeta();
    if (!slug) return;
    if (!meta) return;

    // If scam-meta is a <meta> tag in <head>, replace with a visible div.
    const isHeadMeta = meta.tagName === "META" || !!meta.closest("head");
    if (isHeadMeta) {
      const old = meta;
      const div = document.createElement("div");
      div.id = "scam-meta";
      div.setAttribute("data-scam", slug);
      old.removeAttribute("id");

      const hero = document.querySelector(".hero");
      if (hero) hero.appendChild(div);
      else {
        const main = document.querySelector("main");
        if (main) main.insertBefore(div, main.firstChild);
        else insertBeforeFooter(div);
      }
      meta = div;
    }

    const it = getItem(slug);
    if (!it) return;

    const enTitle = enTitleFor(slug);
    const srTitle = srTitleFor(slug);

    const heroH1 = document.querySelector(".hero h1");
    const h1Sr = (heroH1 && typeof heroH1.dataset?.sr === "string") ? heroH1.dataset.sr.trim() : "";
    const h1En = (heroH1 && typeof heroH1.dataset?.en === "string") ? heroH1.dataset.en.trim() : "";
    const h1EnglishOnly = !!h1Sr && !!h1En && h1Sr === h1En;

    const srTitleEffective = (!h1EnglishOnly && h1Sr) ? h1Sr : (srTitle || h1Sr || slug);
    const titleText = (currentLang() === "sr")
      ? (srTitleEffective || enTitle || slug)
      : (enTitle || srTitleEffective || slug);

    const overlaps = (it.overlaps || [])
      .slice(0, 10)
      .map((s) => {
        const href = fileFor(s);
        const sr = srTitleFor(s) || labelForLang(s, "sr");
        const en = enTitleFor(s) || labelForLang(s, "en");
        const attrs = pairAttrs(sr, en);
        const label = esc(currentLang() === "sr" ? (sr || labelFor(s)) : (en || labelFor(s)));
        if (!href) return `<span class="tag" ${attrs}>${label}</span>`;
        return `<a class="tag" href="${esc(href)}" ${attrs}>${label}</a>`;
      })
      .join(" ");

    const srSub = subtitleForLang(slug, "sr");
    const enSub = subtitleForLang(slug, "en");
    const subText = esc(subtitleFor(slug));

    const heroTitleText = (heroH1 && heroH1.textContent) ? heroH1.textContent : "";
    const showMetaTitle = !(heroTitleText && isDup(titleText, heroTitleText));

    meta.innerHTML = `
      <div class="meta-box">
        ${showMetaTitle ? `<div class="meta-title" ${pairAttrs(srTitleEffective, enTitle)}>${esc(titleText)}</div>` : ""}
        ${(srSub || enSub) ? `<div class="meta-sub" ${pairAttrs(srSub, enSub)}>${subText}</div>` : ""}
        ${overlaps ? `<div class="meta-tags">${overlaps}</div>` : ""}
      </div>
    `;
  }

  function dedupeHeroSubtitle() {
    const slug = getSlugFromMeta();
    if (!slug) return;
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const h1 = hero.querySelector("h1");
    if (!h1) return;
    const title = h1.textContent || "";
    const subs = Array.from(hero.querySelectorAll(".hero-sub"));
    for (const el of subs) {
      const t = el ? (el.textContent || "") : "";
      if (isDup(t, title)) el.remove();
    }
  }

  function dedupeFirstCardHeading() {
    const slug = getSlugFromMeta();
    if (!slug) return;
    const heroTitle = (document.querySelector(".hero h1")?.textContent) || "";
    if (!heroTitle) return;
    const main = document.querySelector("main");
    if (!main) return;
    const first = main.querySelector(".card, section.card, .longform, #scam-raw");
    if (!first) return;
    const h = first.querySelector("h2, h3");
    if (!h) return;
    if (isDup(h.textContent || "", heroTitle)) h.remove();
  }

  /* -----------------------------
     HERO/TITLE normalization (scam pages)
  ----------------------------- */
  function normalizeScamTitles() {
    const slug = getSlugFromMeta();
    if (!slug) return;

    const srTitle = srTitleFor(slug);
    const enTitle = enTitleFor(slug);
    if (!srTitle && !enTitle) return;

    const hero = document.querySelector(".hero");
    if (hero) {
      const h1 = hero.querySelector("h1");
      if (h1) {
        const dsSr = (typeof h1.dataset?.sr === "string") ? h1.dataset.sr.trim() : "";
        const dsEn = (typeof h1.dataset?.en === "string") ? h1.dataset.en.trim() : "";
        const englishOnlyInSr = !!dsSr && !!dsEn && dsSr === dsEn;

        // Only override SR title when SR is effectively EN-only.
        if (englishOnlyInSr && typeof h1.dataset?.sr === "string") h1.dataset.sr = srTitle || h1.dataset.sr;
        if (typeof h1.dataset?.en === "string") h1.dataset.en = enTitle || h1.dataset.en;

        h1.textContent = (currentLang() === "sr")
          ? ((englishOnlyInSr ? (srTitle || enTitle) : (dsSr || srTitle || enTitle)) || h1.textContent)
          : ((enTitle || dsEn || srTitle) || h1.textContent);
      }
    }

    const titleEl = document.querySelector("head title");
    if (titleEl && titleEl.dataset) {
      const tSr = (typeof titleEl.dataset.sr === "string") ? titleEl.dataset.sr.trim() : "";
      const tEn = (typeof titleEl.dataset.en === "string") ? titleEl.dataset.en.trim() : "";
      const englishOnlyInSr = !!tSr && !!tEn && tSr === tEn;

      if (englishOnlyInSr && typeof titleEl.dataset.sr === "string") titleEl.dataset.sr = srTitle || titleEl.dataset.sr;
      if (typeof titleEl.dataset.en === "string") titleEl.dataset.en = enTitle || titleEl.dataset.en;
      document.title = (currentLang() === "sr")
        ? ((englishOnlyInSr ? (srTitle || enTitle) : (tSr || srTitle || enTitle)) || document.title)
        : ((enTitle || tEn || srTitle) || document.title);
    }
  }

  // Re-render dynamic blocks when the language is changed.
  // ui.js updates html[data-lang] and emits "lang:changed", but blocks rendered here
  // (meta subtitle, generated tags, index cards, related lists) are plain HTML.
  function rerenderOnLangChange() {
    normalizeScamTitles();
    renderMeta();
    dedupeHeroSubtitle();
    dedupeFirstCardHeading();
    // If we're on prevare.html, re-render the index list
    if (document.getElementById("scam-index")) {
      updateCatalogHeroCount();
      var input = document.getElementById("scam-search");
      var q = input ? input.value.trim() : "";
      renderIndexCategorized(getIndexItems(), _activeCatId, q);
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
     CATALOG COUNT HELPER
  ----------------------------- */
  function srCountPhrase(n) {
    var mod100 = n % 100;
    var mod10  = n % 10;
    if (mod100 >= 11 && mod100 <= 20) return String(n);
    if (mod10 === 1)                  return String(n);
    if (mod10 >= 2 && mod10 <= 4)     return String(n);
    return String(n);
  }

  function enCountPhrase(n) {
    return String(n);
  }

  function updateCatalogHeroCount() {
    var el = document.getElementById("catalog-hero-sub");
    if (!el) return;
    var D = db();
    var count = Object.keys(D).filter(function(s) { return s !== "template-scam" && D[s].hasPage; }).length;
    var lang = currentLang();
    var tplAttr = lang === "en" ? "data-en-tpl" : "data-sr-tpl";
    var tpl = el.getAttribute(tplAttr) || "";
    var phrase = lang === "en" ? enCountPhrase(count) : srCountPhrase(count);
    var text = tpl.replace("{COUNT}", phrase);
    el.setAttribute("data-sr", (el.getAttribute("data-sr-tpl") || "").replace("{COUNT}", srCountPhrase(count)));
    el.setAttribute("data-en", (el.getAttribute("data-en-tpl") || "").replace("{COUNT}", enCountPhrase(count)));
    el.textContent = text;
  }
  var CATALOG_CATEGORIES = [
    { id: "identity",    sr: "Identitet i nalozi",          en: "Identity & Accounts" },
    { id: "payments",    sr: "Pla\u0107anja i banke",       en: "Payments & Banking" },
    { id: "business",    sr: "Biznis i nabavke",            en: "Business & Procurement" },
    { id: "investment",  sr: "Investicije i kripto",        en: "Investment & Crypto" },
    { id: "marketplace", sr: "Oglasi i kupovina",           en: "Marketplace & Shopping" },
    { id: "delivery",    sr: "Dostava i putovanja",         en: "Delivery & Travel" },
    { id: "tech",        sr: "Tehni\u010dka podr\u0161ka i malware", en: "Tech Support & Malware" },
    { id: "extortion",   sr: "Ucene i pretnje",             en: "Extortion & Threats" },
    { id: "charity",     sr: "Donacije i fondovi",          en: "Charity & Grants" },
    { id: "seniors",     sr: "Stariji i porodica",          en: "Seniors & Family" },
    { id: "other",       sr: "Ostalo",                      en: "Other" }
  ];

  var CATEGORY_DEFAULTS_EXPANDED = ["payments", "identity", "business"];

  function getCategoryId(slug) {
    var s = slug.toLowerCase();

    if (/phishing|smishing|vishing|account.?takeover|identity.?theft|email.?account.?compromise|otp|sim.?swap|port.?out|account.?recovery|social.?media.?hijack|spear.?phishing|whaling|quishing|qr.?code.?sticker/.test(s)) return "identity";

    if (/payment.?link|qr.?payment|instant.?payment|safe.?account|courier.?fraud|cash.?to.?gold|card.?skimming|atm.?skimming|pos.?skimming|contactless.?card|card.?not.?present|chargeback|overpayment|bank.?transfer.?diversion|bank.?impersonation|port.?out|sim.?swap|otp.?interception|kyc.?aml/.test(s)) return "payments";

    if (/business.?email|invoice.?fraud|mandate.?fraud|payment.?diversion|payroll|procurement|supplier.?onboarding|fake.?audit|fake.?award|fake.?seo|domain.?renewal|directory.?listing|invoice.?collection|bid.?bond|performance.?bond|advance.?payment.?guarantee|co.?financing|project.?partnership|consultant.?guarantee|fake.?training.?cert|invoice.?factoring|sponsorship.?event|compliance.?fee|grant.?intermediary|fake.?government.?tender|public.?procurement|procurement.?award|fake.?audit.?inspection/.test(s)) return "business";

    if (/crypto|investment.?fraud|fake.?broker|clone.?firm|forex|binary.?options|ponzi|pyramid|pump.?and.?dump|pig.?butchering|wallet.?drainer|airdrop|nft|rug.?pull|fake.?crypto.?exchange|romantic.?scam|romance/.test(s)) return "investment";

    if (/marketplace|fake.?webshop|social.?media.?shop|counterfeit|refund.?scam|fake.?returns|subscription.?trap|free.?trial|giveaway|fake.?insurance/.test(s)) return "marketplace";

    if (/fake.?delivery|parcel|package.?redelivery|travel.?booking|airline.?refund|ticket.?scam|escrow|real.?estate.?purchase|rental|moving.?scam|deposit.?scam|real.?estate.?invest|home.?improvement|mortgage/.test(s)) return "delivery";

    if (/tech.?support|scareware|remote.?access|malicious.?app|app.?clone|fake.?update|browser.?extension/.test(s)) return "tech";

    if (/sextortion|recovery.?scam|ddos|ransomware|data.?breach|extortion/.test(s)) return "extortion";

    if (/charity|crowdfunding|disaster.?relief|donation.?crypto|grant.?fund|grant|compliance.?fee|fake.?eu.?program|fake.?ngo|advance.?fee.?fraud|social.?benefits|pension|healthcare.?impersonation|education.?ministry/.test(s)) return "charity";

    if (/grandparent|family.?emergency|lottery|sweepstakes|prize.?scam|gift.?card|fake.?medical|fake.?medicine|tech.?support.?remote/.test(s)) return "seniors";

    return "other";
  }

  var _catalogCollapseState = null;

  function loadCollapseState() {
    if (_catalogCollapseState) return _catalogCollapseState;
    try {
      var stored = localStorage.getItem("catalog_collapse");
      if (stored) { _catalogCollapseState = JSON.parse(stored); return _catalogCollapseState; }
    } catch(e) {}
    var state = {};
    CATALOG_CATEGORIES.forEach(function(c) {
      state[c.id] = CATEGORY_DEFAULTS_EXPANDED.indexOf(c.id) >= 0;
    });
    _catalogCollapseState = state;
    return state;
  }

  function saveCollapseState(state) {
    _catalogCollapseState = state;
    try { localStorage.setItem("catalog_collapse", JSON.stringify(state)); } catch(e) {}
  }

  /* -----------------------------
     INDEX (prevare.html)
  ----------------------------- */
  function getIndexItems() {
    const D = db();
    const items = Object.keys(D)
      .filter((slug) => slug !== "template-scam")
      .map((slug) => ({
      slug,
      ...(D[slug] || {})
    }));

    items.sort((a, b) => {
      const at = (a.title_en || pickLangForced(a.title, "en") || a.slug).toLowerCase();
      const bt = (b.title_en || pickLangForced(b.title, "en") || b.slug).toLowerCase();
      return at.localeCompare(bt, "en");
    });

    return items;
  }

  function makeCard(it) {
    const href = it.hasPage ? (it.url || `${it.slug}.html`) : null;
    const lang = currentLang();
    const tMain = esc(it.title_en || pickLangForced(it.title, "en") || it.slug);
    const tSr = it.title_sr || pickLangForced(it.title, "sr") || "";
    const tSecondary = (lang === "sr" && tSr && tSr !== (it.title_en || "")) ? `(${tSr})` : "";
    const desc = (lang === "sr")
      ? (it.summary_sr || pickLangForced(it.subtitle, "sr") || "")
      : (it.summary_en || pickLangForced(it.subtitle, "en") || "");

    return `<div class="index-card">
      <div class="index-title">${href ? `<a href="${esc(href)}">${tMain}</a>` : tMain}</div>
      ${tSecondary ? `<div class="index-sub muted">${esc(tSecondary)}</div>` : ""}
      ${desc ? `<div class="index-sub">${esc(desc)}</div>` : ""}
    </div>`;
  }

  function renderCategoryBar(activeCatId) {
    const lang = currentLang();
    const allSr = "Sve";
    const allEn = "All";
    const allLabel = lang === "en" ? allEn : allSr;
    const chips = CATALOG_CATEGORIES.map(function(c) {
      const label = lang === "en" ? c.en : c.sr;
      const active = activeCatId === c.id ? ' class="cat-chip active"' : ' class="cat-chip"';
      return `<button${active} data-catid="${esc(c.id)}" data-sr="${esc(c.sr)}" data-en="${esc(c.en)}" type="button">${esc(label)}</button>`;
    }).join("");
    const allActive = !activeCatId ? ' class="cat-chip active"' : ' class="cat-chip"';
    return `<div class="cat-bar" role="tablist" aria-label="${lang === 'en' ? 'Scam categories' : 'Kategorije prevara'}">
      <button${allActive} data-catid="" data-sr="${esc(allSr)}" data-en="${esc(allEn)}" type="button">${esc(allLabel)}</button>
      ${chips}
    </div>`;
  }

  function renderIndexCategorized(items, activeCatId, searchQuery) {
    const container = document.getElementById("scam-index");
    if (!container) return;
    const lang = currentLang();
    const collapseState = loadCollapseState();

    // Filter by category if single-cat view
    let filteredItems = items;
    if (activeCatId) {
      filteredItems = items.filter(function(it) { return getCategoryId(it.slug) === activeCatId; });
    }

    // Apply search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filteredItems = filteredItems.filter(function(it) {
        const hay = [
          it.slug, it.title_en, it.title_sr, it.summary_en, it.summary_sr,
          pickLangForced(it.title, "en"), pickLangForced(it.title, "sr"),
          pickLangForced(it.subtitle, "en"), pickLangForced(it.subtitle, "sr"),
          ...(it.tags || []), ...((it.overlaps || []).map(labelFor))
        ].filter(Boolean).join(" ").toLowerCase();
        return hay.includes(q);
      });
    }

    let html = renderCategoryBar(activeCatId);

    if (activeCatId) {
      // Single category view — show expanded, no collapse toggle
      const catDef = CATALOG_CATEGORIES.find(function(c) { return c.id === activeCatId; });
      const catLabel = catDef ? (lang === "en" ? catDef.en : catDef.sr) : activeCatId;
      html += `<section class="index-block cat-section" data-catid="${esc(activeCatId)}">
        <h2 class="cat-section-head"><span class="cat-label">${esc(catLabel)}</span> <span class="cat-count">(${filteredItems.length})</span></h2>
        <div class="index-grid">${filteredItems.map(makeCard).join("")}</div>
      </section>`;
    } else {
      // All view — group by category, each collapsible
      const byCategory = {};
      CATALOG_CATEGORIES.forEach(function(c) { byCategory[c.id] = []; });
      filteredItems.forEach(function(it) {
        const cid = getCategoryId(it.slug);
        if (!byCategory[cid]) byCategory[cid] = [];
        byCategory[cid].push(it);
      });

      CATALOG_CATEGORIES.forEach(function(c) {
        const list = byCategory[c.id] || [];
        if (!list.length) return;
        const catLabel = lang === "en" ? c.en : c.sr;
        const isExpanded = searchQuery ? true : !!collapseState[c.id];
        const gridStyle = isExpanded ? "" : ' style="display:none"';
        const chevron = isExpanded ? "\u25be" : "\u25b8";

        html += `<section class="index-block cat-section" data-catid="${esc(c.id)}">
          <button class="cat-toggle" type="button" aria-expanded="${isExpanded}" data-catid="${esc(c.id)}" data-sr="${esc(c.sr)}" data-en="${esc(c.en)}">
            <span class="cat-label">${esc(catLabel)}</span>
            <span class="cat-count">(${list.length})</span>
            <span class="cat-chevron" aria-hidden="true">${chevron}</span>
          </button>
          <div class="index-grid"${gridStyle}>${list.map(makeCard).join("")}</div>
        </section>`;
      });
    }

    container.innerHTML = html;

    // Attach collapse toggle listeners
    container.querySelectorAll(".cat-toggle").forEach(function(btn) {
      btn.addEventListener("click", function() {
        const cid = btn.getAttribute("data-catid");
        const grid = btn.parentElement.querySelector(".index-grid");
        if (!grid) return;
        const nowExpanded = btn.getAttribute("aria-expanded") === "true";
        const nextExpanded = !nowExpanded;
        btn.setAttribute("aria-expanded", String(nextExpanded));
        btn.querySelector(".cat-chevron").textContent = nextExpanded ? "\u25be" : "\u25b8";
        grid.style.display = nextExpanded ? "" : "none";
        const state = loadCollapseState();
        state[cid] = nextExpanded;
        saveCollapseState(state);
      });
    });

    // Attach category chip listeners
    container.querySelectorAll(".cat-chip").forEach(function(chip) {
      chip.addEventListener("click", function() {
        const cid = chip.getAttribute("data-catid") || "";
        const input = document.getElementById("scam-search");
        const q = input ? input.value.trim() : "";
        renderIndexCategorized(getIndexItems(), cid, q);
        // store active cat in module-level var
        _activeCatId = cid;
      });
    });
  }

  var _activeCatId = "";

  function renderIndex() {
    const container = document.getElementById("scam-index");
    if (!container) return;

    updateCatalogHeroCount();
    renderIndexCategorized(getIndexItems(), _activeCatId, "");

    const input = document.getElementById("scam-search");
    if (!input) return;

    // Remove any previous listener by replacing input
    const newInput = input.cloneNode(true);
    input.parentNode.replaceChild(newInput, input);

    newInput.addEventListener("input", function() {
      const q = newInput.value.trim();
      renderIndexCategorized(getIndexItems(), _activeCatId, q);
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
      const title = (currentLang() === "sr")
        ? (srTitleFor(to) || labelForLang(to, "sr") || labelFor(to))
        : (enTitleFor(to) || labelForLang(to, "en") || labelFor(to));
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
        const title = (currentLang() === "sr")
          ? (srTitleFor(to) || labelForLang(to, "sr") || labelFor(to))
          : (enTitleFor(to) || labelForLang(to, "en") || labelFor(to));
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

    const section = host.closest("section");
    if (section) { section.remove(); return; }

    host.innerHTML = ``;
    return;

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
          const sr = srTitleFor(x.slug) || labelForLang(x.slug, "sr");
          const en = enTitleFor(x.slug) || labelForLang(x.slug, "en");
          const attrs = pairAttrs(sr, en);
          const label = esc(currentLang() === "sr" ? (sr || labelFor(x.slug)) : (en || labelFor(x.slug)));
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
  document.addEventListener("scam:content-rendered", () => {
    dedupeFirstCardHeading();
  });

  document.addEventListener("DOMContentLoaded", () => {
    ensureScamHosts();
    normalizeScamTitles();
    renderMeta();
    dedupeHeroSubtitle();
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
    dedupeFirstCardHeading();
  });
})();
