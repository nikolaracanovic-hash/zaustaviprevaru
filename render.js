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

  function cleanDisplayTitle(text, lang) {
    var out = String(text || "").trim();
    if (lang === "sr") {
      out = out.replace(/^Prevara:\s*/i, "");
      if (out) out = out.charAt(0).toLocaleUpperCase("sr") + out.slice(1);
    }
    return out;
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
      const a = (lang === "sr")
        ? (v.sr ?? v.cyr ?? "")
        : (v.en ?? "");
      return (typeof a === "string") ? a : "";
    }
    return "";
  }

  function pickLangForced(v, lang) {
    if (typeof v === "string") return v;
    if (v && typeof v === "object") {
      const a = (lang === "sr")
        ? (v.sr ?? v.cyr ?? "")
        : (v.en ?? "");
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
    return cleanDisplayTitle(it.title_sr || pickLangForced(it.title, "sr") || "", "sr");
  }

  function labelFor(slug) {
    const it = getItem(slug);
    const t = it ? it.title : null;
    const out = pickLang(t);
    return cleanDisplayTitle(out || "", currentLang());
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
    return cleanDisplayTitle(out || "", lang);
  }

  function subtitleForLang(slug, lang) {
    const it = getItem(slug);
    const s = it ? it.subtitle : null;
    return pickLangForced(s, lang) || "";
  }

  function composeDualTitle(sr, en, lang) {
    const srText = (sr || "").trim();
    const enText = (en || "").trim();
    if (!srText && !enText) return "";
    if (!srText) return enText;
    if (!enText) return srText;
    if (isDup(srText, enText)) return lang === "en" ? enText : srText;
    return lang === "en" ? `${enText} (${srText})` : `${srText} (${enText})`;
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
      "[data-related]"
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

    const srTitleEffective = (!h1EnglishOnly && h1Sr) ? h1Sr : (srTitle || h1Sr || "");
    const titleText = (currentLang() === "sr")
      ? (srTitleEffective || "")
      : (enTitle || slug);

    const overlaps = (it.overlaps || [])
      .slice(0, 10)
      .map((s) => {
        const href = fileFor(s);
        const sr = srTitleFor(s) || labelForLang(s, "sr");
        const en = enTitleFor(s) || labelForLang(s, "en");
        const attrs = pairAttrs(sr, en);
        const labelText = currentLang() === "sr" ? sr : en;
        const label = esc(labelText || "");
        if (!labelText) return "";
        if (!href) return `<span class="tag" ${attrs}>${label}</span>`;
        return `<a class="tag" href="${esc(href)}" ${attrs}>${label}</a>`;
      })
      .filter(Boolean)
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

    const lang = currentLang();
    const hero = document.querySelector(".hero");
    if (hero) {
      const h1 = hero.querySelector("h1");
      if (h1) {
        const dsSr = (typeof h1.dataset?.sr === "string") ? cleanDisplayTitle(h1.dataset.sr.trim(), "sr") : "";
        const dsEn = (typeof h1.dataset?.en === "string") ? h1.dataset.en.trim() : "";
        if (srTitle && typeof h1.dataset?.sr === "string") h1.dataset.sr = srTitle;
        if (enTitle && typeof h1.dataset?.en === "string") h1.dataset.en = enTitle;

        const finalSr = srTitle || dsSr || "";
        const finalEn = enTitle || dsEn || slug || "";
        const primaryTitle = lang === "en" ? finalEn : finalSr;
        h1.textContent = primaryTitle || h1.textContent;
      }
    }

    const titleEl = document.querySelector("head title");
    if (titleEl && titleEl.dataset) {
      const tSr = (typeof titleEl.dataset.sr === "string") ? cleanDisplayTitle(titleEl.dataset.sr.trim(), "sr") : "";
      const tEn = (typeof titleEl.dataset.en === "string") ? titleEl.dataset.en.trim() : "";
      if (srTitle && typeof titleEl.dataset.sr === "string") titleEl.dataset.sr = srTitle;
      if (enTitle && typeof titleEl.dataset.en === "string") titleEl.dataset.en = enTitle;
      const finalSr = srTitle || tSr || "";
      const finalEn = enTitle || tEn || slug || "";
      const primaryTitle = lang === "en" ? finalEn : finalSr;
      document.title = primaryTitle || document.title;
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
    // Sources are intentionally disabled for this release pass.
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

  var CATALOG_SPECIAL_FILTERS = [
    {
      id: "most-common",
      sr: "Najčešće prevare",
      en: "Most common scams",
      entries: [
        { slug: "phishing" },
        { slug: "smishing" },
        { slug: "vishing" },
        { slug: "bank-impersonation" },
        { slug: "safe-account-scam" },
        { slug: "fake-delivery" },
        { slug: "parcel-scam" },
        { slug: "package-redelivery-scam" },
        { slug: "payment-link-scam" },
        { slug: "marketplace-scam" },
        { slug: "marketplace-buyer-protection-scam" },
        { slug: "social-media-shop-scam" },
        { slug: "fake-webshop" },
        { slug: "qr-payment-scam" },
        { slug: "quishing" },
        { slug: "investment-fraud" },
        { slug: "crypto-scam" },
        { slug: "pig-butchering" },
        { slug: "romantic-scam" },
        { slug: "military-romance-scam" },
        { slug: "job-scam" },
        { slug: "work-from-home-scam" },
        { slug: "task-scam" },
        { slug: "identity-theft" },
        { slug: "account-takeover" },
        { slug: "whatsapp-takeover" },
        { slug: "tech-support-scam" },
        { slug: "scareware" },
        { slug: "government-impersonation" },
        { slug: "fake-call-scam" }
      ]
    },
    {
      id: "artificial-intelligence",
      sr: "Veštačka inteligencija",
      en: "Artificial Intelligence",
      intro: {
        headingSr: "Veštačka inteligencija i savremene prevare",
        headingEn: "Artificial intelligence and modern scams",
        leadSr: "Veštačka inteligencija sama po sebi nije prevara. Problem je u tome što prevarantima omogućava da stare obrasce obmane učine ubedljivijim, bržim i težim za prepoznavanje na prvi pogled. Ono što je ranije često delovalo trapavo, kratko ili neubedljivo, sada može da stigne kao miran glas, uredna poruka, lažni video ili vrlo ubedljivo predstavljanje identiteta. Zbog toga prvi utisak više nije dobar oslonac, jer prevara može izgledati ozbiljno i smisleno već u prvom kontaktu.",
        leadEn: "Artificial intelligence is not a scam by itself. The problem is that scammers now use it to make older fraud patterns more convincing, faster, and harder to spot at first glance. What once looked clumsy, short, or obviously suspicious can now arrive as a calm voice, a polished message, a fake video, or a highly convincing identity claim. That is why first impressions are no longer a safe guide, because a scam can already look serious and coherent in the very first contact.",
        bodySr: "Danas se lažiraju glas, lice, video, poruke, potvrde, identitet i stil komunikacije. Zato više nije dovoljno da nešto zvuči stvarno ili izgleda stvarno. Osnovna logika prevare ostaje ista: poverenje, panika, autoritet, hitnost, izolacija, pritisak, uplata, predaja podataka ili preuzimanje naloga.",
        bodyEn: "Today scammers can fake a voice, a face, a video, a message, a document, an identity, and even someone’s style of communication. That is why sounding real or looking real is no longer enough. The underlying scam logic is still the same: trust, panic, authority, urgency, isolation, pressure, payment, data handover, or account takeover.",
        blocks: [
          {
            sr: "Šta znači prevara uz pomoć veštačke inteligencije?",
            en: "What does a scam using artificial intelligence mean?",
            pointsSr: [
              "Prevaranti mogu da naprave glas koji liči na člana porodice, direktora, bankarskog službenika ili drugog autoriteta.",
              "Mogu da koriste lažan ili izmenjen video da stvore utisak da osoba zaista govori pred kamerom.",
              "Mogu da napišu poruke koje zvuče prirodnije, urednije i profesionalnije nego ranije.",
              "Veštačka inteligencija ne menja cilj prevare, već pojačava utisak da je zahtev stvaran."
            ],
            pointsEn: [
              "Scammers can create a voice that sounds like a family member, an executive, a bank employee, or an official.",
              "They can use fake or altered video to make it look as if a real person is speaking on camera.",
              "They can write messages that sound more natural, polished, and professional than before.",
              "Artificial intelligence does not change the goal of the scam; it increases the feeling that the request is real."
            ]
          },
          {
            sr: "Zašto su ove prevare opasnije nego ranije?",
            en: "Why are these scams more dangerous than before?",
            pointsSr: [
              "Glas može zvučati poznato baš u trenutku kada se traži hitna uplata ili kod.",
              "Video može delovati kao dokaz iako nije nezavisna potvrda identiteta.",
              "Poruke više ne moraju imati očigledne greške da bi bile lažne.",
              "Jedan prevarant može brže voditi više razgovora, na više jezika, uz manje vidljivih propusta."
            ],
            pointsEn: [
              "A voice can sound familiar exactly when someone is asking for an urgent payment or code.",
              "A video can feel like proof even when it is not an independent identity check.",
              "Messages no longer need obvious mistakes in order to be fake.",
              "One scammer can run more conversations at once, in more languages, with fewer visible errors."
            ]
          },
          {
            sr: "Šta ostaje isto kao kod klasičnih prevara?",
            en: "What stays the same as in classic scams?",
            pointsSr: [
              "I dalje se traže hitnost, tajnost, autoritet ili emotivna reakcija.",
              "I dalje sledi ista ključna radnja: uplata, slanje koda, slanje dokumenta, prijava na lažni sajt ili potvrda u aplikaciji.",
              "I dalje pokušavaju da vas odvoje od nezavisne provere drugim kanalom.",
              "Ne morate savršeno da prepoznate deepfake da biste se zaštitili; važnije je da prepoznate obrazac prevare."
            ],
            pointsEn: [
              "The same pressure points still appear: urgency, secrecy, authority, or emotional shock.",
              "The same key action still follows: payment, code sharing, sending documents, logging in to a fake site, or approving something in an app.",
              "The scam still tries to cut you off from independent verification through another channel.",
              "You do not need perfect deepfake detection to protect yourself; it is more important to recognize the scam pattern."
            ]
          },
          {
            sr: "Kako je uređena ova kategorija?",
            en: "How is this category organized?",
            pointsSr: [
              "Prvi deo čine prevare gde je veštačka inteligencija glavni alat obmane, kao što su kloniran glas ili lažni video poziv.",
              "Drugi deo čine klasične prevare koje su sada samo pojačane veštačkom inteligencijom, kao što su porodična hitna situacija, CEO prevara ili romantična prevara.",
              "Kod svake stavke gledajte dve stvari: gde je upotrebljena veštačka inteligencija i koja se radnja traži od žrtve.",
              "Najvažnije pravilo ostaje isto: ne verujte samo glasu, slici, videu ili dobro napisanoj poruci; proverite zahtev drugim kanalom."
            ],
            pointsEn: [
              "The first section covers scams where artificial intelligence is the main deception tool, such as a cloned voice or a fake video call.",
              "The second section covers classic scams that are now amplified by artificial intelligence, such as a family emergency scam, CEO fraud, or a romance scam.",
              "For each entry, look at two things: where artificial intelligence is used and what action the scammer wants from the victim.",
              "The most important rule stays the same: do not trust only a voice, an image, a video, or a well-written message; verify the request through another channel."
            ]
          }
        ]
      },
      groups: [
        {
          id: "ai-core",
          sr: "Veštačka inteligencija kao glavni alat obmane",
          en: "Artificial intelligence as the main deception tool",
          descSr: "Ovde su prevare gde lažni glas, lice, snimak ili automatizovana persona nose glavni teret obmane.",
          descEn: "These are scams where a fake voice, face, clip, or automated persona does most of the deceptive work.",
          entries: [
            { slug: "ai-voice-clone-scam" },
            { slug: "ai-family-emergency-voice-scam" },
            { slug: "ai-lawyer-police-callback-scam" },
            { slug: "ai-multilingual-authority-scam" },
            { slug: "ai-executive-voice-payment-scam" },
            { slug: "ai-invoice-approval-scam" },
            { slug: "ai-invoice-voice-confirmation-scam" },
            { slug: "ai-romance-verification-scam" },
            { slug: "ai-deepfake" },
            { slug: "deepfake-executive-video-call-scam" },
            { slug: "deepfake-celebrity-endorsement-scam" },
            { slug: "deepfake-job-interview-scam" },
            { slug: "ai-trading-bot-scam" }
          ]
        },
        {
          id: "ai-enhanced",
          sr: "Klasične prevare pojačane veštačkom inteligencijom",
          en: "Classic scams amplified by artificial intelligence",
          descSr: "Ovde je obrazac prevare već poznat, ali veštačka inteligencija pravi ubedljiviji glas, video, poruku ili identitet.",
          descEn: "These are already familiar scam patterns, but artificial intelligence makes the voice, video, message, or identity more convincing.",
          entries: [
            { slug: "family-emergency-scam" },
            { slug: "grandparent-scam" },
            { slug: "ceo-fraud" },
            { slug: "invoice-fraud" },
            { slug: "vendor-email-compromise" },
            { slug: "payment-diversion" },
            { slug: "bank-impersonation" },
            { slug: "vishing" },
            { slug: "phishing" },
            { slug: "romantic-scam" },
            { slug: "wrong-number-romance-scam" },
            { slug: "investment-fraud" },
            { slug: "fake-broker-scam" },
            { slug: "fake-trading-platform-scam" },
            { slug: "pig-butchering" },
            { slug: "sextortion-scam" },
            { slug: "recovery-scam" },
            { slug: "job-scam" },
            { slug: "recruitment-scam" },
            { slug: "identity-theft" },
            { slug: "account-takeover" },
            { slug: "online-dating-verification-fee-scam" },
            { slug: "hr-file-verification-phishing" },
            { slug: "tech-support-scam" },
            { slug: "social-media-hijack-scam" },
            { slug: "government-impersonation" },
            { slug: "police-impersonation" },
            { slug: "fake-call-scam" },
            { slug: "charity-scam" }
          ]
        }
      ],
      entries: [
        { slug: "family-emergency-scam" },
        { slug: "grandparent-scam" },
        { slug: "ceo-fraud" },
        { slug: "invoice-fraud" },
        { slug: "vendor-email-compromise" },
        { slug: "payment-diversion" },
        { slug: "bank-impersonation" },
        { slug: "vishing" },
        { slug: "phishing" },
        { slug: "romantic-scam" },
        { slug: "wrong-number-romance-scam" },
        { slug: "investment-fraud" },
        { slug: "fake-broker-scam" },
        { slug: "fake-trading-platform-scam" },
        { slug: "pig-butchering" },
        { slug: "sextortion-scam" },
        { slug: "recovery-scam" },
        { slug: "job-scam" },
        { slug: "recruitment-scam" },
        { slug: "deepfake-job-interview-scam" },
        { slug: "identity-theft" },
        { slug: "account-takeover" },
        { slug: "online-dating-verification-fee-scam" },
        { slug: "hr-file-verification-phishing" },
        { slug: "tech-support-scam" },
        { slug: "social-media-hijack-scam" },
        { slug: "government-impersonation" },
        { slug: "police-impersonation" },
        { slug: "fake-call-scam" },
        { slug: "charity-scam" },
        { slug: "ai-family-emergency-voice-scam" },
        { slug: "ai-romance-verification-scam" },
        { slug: "ai-deepfake" },
        { slug: "ai-voice-clone-scam" },
        { slug: "ai-executive-voice-payment-scam" },
        { slug: "ai-invoice-approval-scam" },
        { slug: "ai-invoice-voice-confirmation-scam" },
        { slug: "ai-lawyer-police-callback-scam" },
        { slug: "ai-multilingual-authority-scam" },
        { slug: "ai-trading-bot-scam" },
        { slug: "deepfake-executive-video-call-scam" },
        { slug: "deepfake-celebrity-endorsement-scam" }
      ]
    },
    {
      id: "active-in-serbia",
      sr: "Aktuelno u Srbiji",
      en: "Active in Serbia",
      entries: [
        { slug: "smishing" },
        { slug: "phishing" },
        { slug: "fake-delivery" },
        { slug: "parcel-scam" },
        { slug: "package-redelivery-scam" },
        { slug: "bank-impersonation" },
        { slug: "government-impersonation" },
        { slug: "fake-call-scam" },
        { slug: "fake-fine-scam" },
        { slug: "utility-bill-scam" },
        { slug: "health-card-renewal-scam", titleEn: "Fake health card renewal scam" },
        { slug: "fake-delivery" },
        { slug: "qr-payment-scam" },
        { slug: "payment-link-scam" }
      ]
    },
    {
      id: "impersonation",
      sr: "Lažno predstavljanje",
      en: "Impersonation",
      entries: [
        { slug: "bank-impersonation" },
        { slug: "government-impersonation" },
        { slug: "police-impersonation" },
        { slug: "tax-authority-impersonation" },
        { slug: "healthcare-impersonation", titleEn: "Health insurance impersonation" },
        { slug: "pension-impersonation" },
        { slug: "utility-impersonation" },
        { slug: "fake-hr-scam" },
        { slug: "fake-call-scam" },
        { slug: "ai-voice-clone-scam" },
        { slug: "ai-deepfake" },
        { slug: "fake-celebrity-scam" }
      ]
    },
    {
      id: "jobs-easy-money",
      sr: "Posao i laka zarada",
      en: "Jobs & easy money",
      entries: [
        { slug: "job-scam" },
        { slug: "work-from-home-scam" },
        { slug: "task-scam" },
        { slug: "recruitment-scam" },
        { slug: "equipment-reimbursement-scam" },
        { slug: "background-check-fee-scam" },
        { slug: "security-clearance-job-scam" },
        { slug: "seasonal-work-placement-scam" },
        { slug: "employment-visa-job-scam" },
        { slug: "money-mule-recruitment" },
        { slug: "reshipping-scam" },
        { slug: "mystery-shopper-scam" }
      ]
    }
  ];

  function getSpecialCatalogFilter(id) {
    return CATALOG_SPECIAL_FILTERS.find(function(f) { return f.id === id; }) || null;
  }

  function getSpecialFilterEntries(filter) {
    if (!filter) return [];
    return Array.isArray(filter.entries)
      ? filter.entries
      : Array.isArray(filter.slugs)
        ? filter.slugs.map(function(slug) { return { slug: slug }; })
        : [];
  }

  function resolveSpecialFilterSlugs(filter, items) {
    var entries = getSpecialFilterEntries(filter);
    var bySlug = new Map((items || []).map(function(it) { return [it.slug, it]; }));
    var byTitleEn = new Map((items || []).map(function(it) {
      return [String(it.title_en || pickLangForced(it.title, "en") || ""), it];
    }));
    var resolved = [];
    var seen = new Set();

    entries.forEach(function(entry) {
      var ref = (typeof entry === "string") ? { slug: entry } : (entry || {});
      var item = null;

      if (ref.slug && bySlug.has(ref.slug)) item = bySlug.get(ref.slug);
      else if (ref.titleEn && byTitleEn.has(ref.titleEn)) item = byTitleEn.get(ref.titleEn);

      if (!item || seen.has(item.slug)) return;
      seen.add(item.slug);
      resolved.push(item.slug);
    });

    return resolved;
  }

  function renderSpecialFilterIntro(filter) {
    if (!filter || !filter.intro) return "";
    const lang = currentLang();
    const intro = filter.intro;
    const heading = lang === "en" ? intro.headingEn : intro.headingSr;
    const lead = lang === "en" ? intro.leadEn : intro.leadSr;
    const body = lang === "en" ? intro.bodyEn : intro.bodySr;
    const blocks = Array.isArray(intro.blocks) ? intro.blocks : [];

    const blocksHtml = blocks.map(function(block) {
      const titleSr = block.sr || "";
      const titleEn = block.en || "";
      const points = lang === "en" ? (block.pointsEn || []) : (block.pointsSr || []);
      const otherPoints = lang === "en" ? (block.pointsSr || []) : (block.pointsEn || []);
      return `<div class="phase">
        <div class="label" ${pairAttrs(titleSr, titleEn)}>${esc(lang === "en" ? titleEn : titleSr)}</div>
        <ul class="bullets">${points.map(function(point, idx) {
          const srPoint = lang === "en" ? (otherPoints[idx] || "") : (point || "");
          const enPoint = lang === "en" ? (point || "") : (otherPoints[idx] || "");
          return `<li ${pairAttrs(srPoint, enPoint)}>${esc(point || "")}</li>`;
        }).join("")}</ul>
      </div>`;
    }).join("");

    return `<section class="card special-filter-intro">
      ${heading ? `<h2 ${pairAttrs(intro.headingSr || "", intro.headingEn || "")}>${esc(heading)}</h2>` : ""}
      ${lead ? `<p ${pairAttrs(intro.leadSr || "", intro.leadEn || "")}>${esc(lead)}</p>` : ""}
      ${body ? `<p ${pairAttrs(intro.bodySr || "", intro.bodyEn || "")}>${esc(body)}</p>` : ""}
      ${blocksHtml ? `<div class="grid-2">${blocksHtml}</div>` : ""}
    </section>`;
  }

  function renderSpecialFilterGroups(filter, allItems, filteredItems) {
    if (!filter || !Array.isArray(filter.groups) || !filter.groups.length) return "";
    const lang = currentLang();
    const filteredBySlug = new Map((filteredItems || []).map(function(it) { return [it.slug, it]; }));

    return filter.groups.map(function(group) {
      const groupSlugs = resolveSpecialFilterSlugs({ entries: group.entries || [] }, allItems);
      const list = groupSlugs
        .filter(function(slug) { return filteredBySlug.has(slug); })
        .map(function(slug) { return filteredBySlug.get(slug); });
      if (!list.length) return "";

      const label = lang === "en" ? group.en : group.sr;
      const desc = lang === "en" ? group.descEn : group.descSr;
      return `<section class="index-block cat-section" data-catid="${esc(filter.id)}-${esc(group.id || label)}">
        <h3 class="cat-section-head"><span class="cat-label">${esc(label)}</span> <span class="cat-count">(${list.length})</span></h3>
        ${desc ? `<p class="muted" ${pairAttrs(group.descSr || "", group.descEn || "")}>${esc(desc)}</p>` : ""}
        <div class="index-grid">${list.map(makeCard).join("")}</div>
      </section>`;
    }).join("");
  }

  var CATEGORY_DEFAULTS_EXPANDED = ["payments", "identity", "business"];

  function getCategoryId(slug) {
    var s = slug.toLowerCase();

    if (/whatsapp.?screen.?sharing.?bank|viber.?bank.?impersonation|qr.?fine.?payment/.test(s)) return "payments";
    if (/viber.?courier.?phishing/.test(s)) return "delivery";
    if (/whatsapp.?apk.?attachment|linked.?device.?support|browser.?notification.?phishing/.test(s)) return "tech";
    if (/deepfake.?celebrity.?endorsement/.test(s)) return "investment";
    if (/deepfake.?executive.?video|ai.?invoice.?approval/.test(s)) return "business";
    if (/ai.?romance.?verification/.test(s)) return "seniors";
    if (/ai.?lawyer.?police|ai.?multilingual.?authority/.test(s)) return "identity";
    if (/whatsapp|viber/.test(s)) return "identity";

    if (/phishing|smishing|vishing|account.?takeover|identity.?theft|email.?account.?compromise|otp|sim.?swap|port.?out|account.?recovery|social.?media.?hijack|spear.?phishing|whaling|quishing|mfa.?fatigue|mfa.?seed|tabnapp|qr.?code.?sticker|evil.?twin|cloud.?account.?compromise|saas.?admin|session.?cookie|browser.?session|otp.?bot|search.?engine.?ad|banking.?app.?screen|whatsapp.?takeover|telegram.?admin|discord.?moderator|number.?verification|sim.?registration|esim.?activation|tax.?refund.?phish|egovernment/.test(s)) return "identity";

    if (/payment.?link|qr.?payment|instant.?payment|safe.?account|courier.?fraud|cash.?to.?gold|card.?skimming|atm.?skimming|pos.?skimming|contactless.?card|card.?not.?present|chargeback|overpayment|bank.?transfer.?diversion|bank.?impersonation|port.?out|sim.?swap|otp.?interception|kyc.?aml|authorized.?push|push.?payment|merchant.?terminal|terminal.?replacement|card.?swap|shoulder.?surfing|friendly.?helper.?atm|cash.?trapping|card.?trapping|atm.?assistance|tap.?to.?pay.?relay|nfc.?relay/.test(s)) return "payments";

    if (/business.?email|invoice.?fraud|iban|sepa|psd2|swift|acquirer|gateway|microcharge|wallet|direct.?debit|debit.?mandate|payment.?reversal|refund.?capture|instant.?transfer|mandate.?fraud|payment.?diversion|payroll|procurement|supplier.?onboarding|fake.?audit|fake.?award|fake.?seo|domain.?renewal|directory.?listing|invoice.?collection|bid.?bond|performance.?bond|advance.?payment.?guarantee|co.?financing|project.?partnership|consultant.?guarantee|fake.?training.?cert|invoice.?factoring|sponsorship.?event|compliance.?fee|grant.?intermediary|fake.?government.?tender|public.?procurement|procurement.?award|fake.?audit.?inspection|executive.?voice|invoice.?voice|vendor|sanctions|aml.?clearance|customs.?broker|import.?license|export.?compliance|trademark.?renewal|patent.?registration|iso.?certification|ce.?marking|haccp|gdpr.?compliance|accessibility.?compliance|fire.?safety|workplace.?safety|eu.?tender|portal.?clone|bid.?clarification|signature.?release|project.?amendment|deliverable|ngo.?consortium/.test(s)) return "business";

    if (/crypto|investment.?fraud|fake.?broker|clone.?firm|forex|binary.?options|ponzi|pyramid|pump.?and.?dump|pig.?butchering|wallet.?drainer|livestream|airdrop|nft|rug.?pull|fake.?crypto.?exchange|romantic.?scam|romance|online.?dating|seed.?phrase|wallet.?approval|trading.?platform|task.?scam|web3.?job|wallet.?drain|cold.?wallet|mining|defi|copy.?trading|copy.?signal|signal.?group|insider|managed.?account|account.?manager|wealth.?advisor|pre.?ipo|trading.?bot|binary.?robot|staking|masternode|presale|meme.?coin|stablecoin|arbitrage|otc|tax.?unlock|compliance.?unlock|recovery.?wallet|liquidity/.test(s)) return "investment";

    if (/marketplace|middleman|fake.?webshop|social.?media.?shop|counterfeit|refund.?scam|fake.?returns|subscription.?trap|free.?trial|giveaway|fake.?insurance|lost-pet|modeling|casting|return.?label/.test(s)) return "marketplace";

    if (/fake.?delivery|parcel|package.?redelivery|travel.?booking|airline.?refund|ticket.?scam|escrow|real.?estate.?purchase|rental|moving.?scam|deposit.?scam|real.?estate.?invest|home.?improvement|mortgage|vehicle|history.?report|test.?drive|dealership|flight|rebooking|compensation.?claim|event.?pass|resale.?clone/.test(s)) return "delivery";

    if (/tech.?support|scareware|remote.?access|malicious.?app|app.?clone|fake.?update|browser.?extension|browser.?push|push.?malware|captcha|sideload|usb.?baiting/.test(s)) return "tech";

    if (/sextortion|ddos|ransomware|data.?breach|extortion/.test(s) || s === "recovery-scam") return "extortion";

    if (/charity|crowdfunding|disaster.?relief|donation.?crypto|grant.?fund|grant|compliance.?fee|fake.?eu.?program|fake.?ngo|advance.?fee.?fraud|social.?benefits|pension|healthcare.?impersonation|education.?ministry/.test(s)) return "charity";

    if (/grandparent|family.?emergency|lottery|sweepstakes|prize.?scam|gift.?card|fake.?medical|fake.?medicine|tech.?support.?remote/.test(s)) return "seniors";

    if (/tow-truck|parking-attendant|counterfeit-cash|fake-banknote|wallet-swap|bag-switch|fake-raffle|staged-accident|car-mirror|flat-tire|spill-on-clothes|broken-phone|fake-roadside|fake-mechanic-inspection|street-performer-distraction|jewelry-cleaning|gem-swap|marketplace-meetup|fake-donation-box|restaurant-bill-distraction|menu-switch|weighing-scale|pigeon-drop|distraction-theft|street-gold-ring/.test(s)) return "marketplace";

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
    const tSr = cleanDisplayTitle(it.title_sr || pickLangForced(it.title, "sr") || "", "sr");
    const tEn = it.title_en || pickLangForced(it.title, "en") || it.slug;
    const mainTitle = lang === "en" ? (tEn || tSr || it.slug) : (tSr || tEn || it.slug);
    const desc = (lang === "sr")
      ? (it.summary_sr || pickLangForced(it.subtitle, "sr") || "")
      : (it.summary_en || pickLangForced(it.subtitle, "en") || "");

    return `<div class="index-card">
      <div class="index-title">${href ? `<a href="${esc(href)}">${esc(mainTitle)}</a>` : esc(mainTitle)}</div>
      ${desc ? `<div class="index-sub">${esc(desc)}</div>` : ""}
    </div>`;
  }

  function renderCategoryBar(activeCatId) {
    const lang = currentLang();
    const allSr = "Sve";
    const allEn = "All";
    const allLabel = lang === "en" ? allEn : allSr;
    const specialChips = CATALOG_SPECIAL_FILTERS.map(function(f) {
      const label = lang === "en" ? f.en : f.sr;
      const active = activeCatId === f.id ? ' class="cat-chip active"' : ' class="cat-chip"';
      return `<button${active} data-catid="${esc(f.id)}" data-sr="${esc(f.sr)}" data-en="${esc(f.en)}" type="button">${esc(label)}</button>`;
    }).join("");
    const chips = CATALOG_CATEGORIES.map(function(c) {
      const label = lang === "en" ? c.en : c.sr;
      const active = activeCatId === c.id ? ' class="cat-chip active"' : ' class="cat-chip"';
      return `<button${active} data-catid="${esc(c.id)}" data-sr="${esc(c.sr)}" data-en="${esc(c.en)}" type="button">${esc(label)}</button>`;
    }).join("");
    const allActive = !activeCatId ? ' class="cat-chip active"' : ' class="cat-chip"';
    return `<div class="cat-bar" role="tablist" aria-label="${lang === 'en' ? 'Scam categories' : 'Kategorije prevara'}">
      <button${allActive} data-catid="" data-sr="${esc(allSr)}" data-en="${esc(allEn)}" type="button">${esc(allLabel)}</button>
      ${specialChips}
      ${chips}
    </div>`;
  }

  function renderIndexCategorized(items, activeCatId, searchQuery) {
    const container = document.getElementById("scam-index");
    if (!container) return;
    const lang = currentLang();
    const collapseState = loadCollapseState();
    const specialFilter = getSpecialCatalogFilter(activeCatId);

    // Filter by special preset or category if single-filter view
    let filteredItems = items;
    if (specialFilter) {
      const specialSlugs = resolveSpecialFilterSlugs(specialFilter, items);
      const allowed = new Set(specialSlugs);
      const order = new Map(specialSlugs.map(function(slug, idx) { return [slug, idx]; }));
      filteredItems = items
        .filter(function(it) { return allowed.has(it.slug); })
        .sort(function(a, b) { return order.get(a.slug) - order.get(b.slug); });
    } else if (activeCatId) {
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
      // Single category or preset view — show expanded, no collapse toggle
      const catDef = CATALOG_CATEGORIES.find(function(c) { return c.id === activeCatId; });
      const catLabel = specialFilter
        ? (lang === "en" ? specialFilter.en : specialFilter.sr)
        : (catDef ? (lang === "en" ? catDef.en : catDef.sr) : activeCatId);
      if (specialFilter) html += renderSpecialFilterIntro(specialFilter);
      const groupedHtml = specialFilter ? renderSpecialFilterGroups(specialFilter, items, filteredItems) : "";
      if (groupedHtml) {
        html += groupedHtml;
      } else {
        html += `<section class="index-block cat-section" data-catid="${esc(activeCatId)}">
          <h2 class="cat-section-head"><span class="cat-label">${esc(catLabel)}</span> <span class="cat-count">(${filteredItems.length})</span></h2>
          <div class="index-grid">${filteredItems.map(makeCard).join("")}</div>
        </section>`;
      }
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
      <p class="muted">Kako se tok vodi sa njihove strane: rutine, pragovi i prelazi.</p>
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
      // Sources are intentionally disabled for this release pass.
    }

    renderCases();
    renderRelated();
    dedupeFirstCardHeading();
  });
})();
