(function () {
  const srSource = new WeakMap();
  const LANG_KEY = "lang";     // "sr" | "en"
  const DEFAULT_LANG = "sr";
  const DEFAULT_THEME = "dark";

  function getLang() {
    const v = localStorage.getItem(LANG_KEY);
    return (v === "sr" || v === "en") ? v : DEFAULT_LANG;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  function isBrokenLabelOnly(value) {
    const normalized = (value || "").trim().toLowerCase();
    return normalized === "threshold:" ||
      normalized === "quick test:" ||
      normalized === "test:" ||
      normalized === "warning:" ||
      normalized === "model:";
  }

  function normalizeEnglishValue(value) {
    if (!value || value[0] !== "'") return value;

    const quoteCount = (value.match(/'/g) || []).length;
    if (quoteCount === 1) return value.slice(1);
    if (value.endsWith("'.")) return value.slice(1, -2) + ".";
    if (value.endsWith("'")) return value.slice(1, -1);
    return value;
  }

  function cleanupPunctuation(value) {
    if (!value) return value;
    return value
      .replace(/\?\./g, "?")
      .replace(/!\./g, "!")
      .replace(/,,/g, ",")
      .replace(/(^|[^.])\.\.(?!\.)/g, "$1.");
  }

  function normalizeSerbianValue(value) {
    if (!value) return value;
    let out = value;

    out = out.replace(/(→\s*[^()]+?)\s*\(([A-Za-z][^)]*)\)/g, "$1");

    const replacements = [
      [/\btalas recovery prevara\b/gi, "talas prevara povraćaja"],
      [/\bmoguć talas recovery prevara\b/gi, "moguć talas prevara povraćaja"],
      [/\brecovery prevaranti\b/gi, "prevaranti povraćaja"],
      [/\brecovery prevare\b/gi, "prevare povraćaja"],
      [/\brecovery prevara\b/gi, "prevara povraćaja"],
      [/\bCEO prevare\b/gi, "prevare u ime direktora"],
      [/\bCEO prevara\b/gi, "prevara u ime direktora"],
      [/\bHR\b/g, "kadrovska služba"],
      [/\bdeepfake\b/gi, "lažni snimak"],
      [/\bcopyright strike\b/gi, "prijava autorskih prava"],
      [/\bchargeback\b/gi, "povraćaj plaćanja"],
      [/\bonboarding\b/gi, "uvođenje u posao"],
      [/\bbrowser sesije\b/gi, "sesije u pregledaču"],
      [/\bbrowser dodatak\b/gi, "dodatak za pregledač"],
      [/\bbrowser obaveštenjima\b/gi, "obaveštenjima pregledača"],
      [/\bbrowser obaveštenja\b/gi, "obaveštenja pregledača"],
      [/\bbrowser\b/gi, "pregledač"],
      [/\bcloud naloga\b/gi, "naloga u oblaku"],
      [/\bcloud nalog\b/gi, "nalog u oblaku"],
      [/\bwallet\s*connect\b/gi, "povezivanje novčanika"],
      [/\bsoft rug pull\b/gi, "postepeno izvlačenje novca"],
      [/\bhard rug pull\b/gi, "naglo gašenje projekta i nestanak"],
      [/\brug pull\b/gi, "izvlačenje novca i gašenje projekta"],
      [/\bprocessing fee\b/gi, "naknada za obradu"],
      [/\blawyer fee\b/gi, "advokatska naknada"],
      [/\bbank charges\b/gi, "bankarska naknada"],
      [/\bclaim fee\b/gi, "naknada za preuzimanje"],
      [/\btax payment\b/gi, "uplata poreza"],
      [/\bfinal tax\b/gi, "završni porez"],
      [/\bverification deposit\b/gi, "verifikacioni depozit"],
      [/\bdirect payment\b/gi, "direktna uplata"],
      [/\bgift cards\b/gi, "poklon kartice"],
      [/\bwhitepaper\b/gi, "opis projekta"],
      [/\broadmap\b/gi, "plan razvoja"],
      [/\bhype\b/gi, "veštačka pompa"],
      [/\bdrainer\b/gi, "alat za pražnjenje novčanika"],
      [/\bfunds\b/gi, "sredstva"],
      [/\bclaim\b/gi, "preuzimanje"],
      [/\bmint\b/gi, "kreiranje tokena"],
      [/\bcourier\b/gi, "kurir"],
      [/\binsurance\b/gi, "osiguranje"],
      [/\brefund\b/gi, "povraćaj novca"]
    ];

    replacements.forEach(([rx, rep]) => {
      out = out.replace(rx, rep);
    });

    return out;
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-sr][data-en]").forEach((el) => {
      if (!srSource.has(el) && el.tagName !== "TITLE" && el.tagName !== "META") {
        srSource.set(el, el.innerHTML);
      }

      const primary = el.dataset[lang];
      const fallback = el.dataset.sr || el.dataset.en;
      let value = (primary && primary.trim()) ? primary : (fallback || "");

      if (lang === "sr" && isBrokenLabelOnly(value) && srSource.has(el)) {
        value = srSource.get(el) || value;
      }

      if (lang === "en") {
        value = normalizeEnglishValue(value);
      }
      if (lang === "sr") {
        value = normalizeSerbianValue(value);
      }
      value = cleanupPunctuation(value);

      if (!value) return;

      if (el.tagName === "TITLE") { document.title = value; return; }
      if (el.tagName === "META" && el.getAttribute("name") === "description") {
        el.setAttribute("content", value);
        return;
      }

      const hasHtml = /<[^>]+>/.test(value);
      if (hasHtml) el.innerHTML = value;
      else el.textContent = value;
    });

    localStorage.setItem(LANG_KEY, lang);
    syncLangUI(lang);

    document.dispatchEvent(new CustomEvent("lang:changed", { detail: { lang } }));
  }

  function toggleLang() {
    const current = getLang();
    const next = current === "sr" ? "en" : "sr";
    applyLang(next);
  }

  function syncLangUI(lang) {
    const t = document.getElementById("langToggle");
    if (t) {
      t.textContent = lang === "sr" ? "SR" : "EN";
    }
    
    // Update active state for .lang-btn buttons
    document.querySelectorAll(".lang-btn[data-lang]").forEach((btn) => {
      if (btn.dataset.lang === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function ensureControlsExist() {
    const hasLangSingle = !!document.getElementById("langToggle") || !!document.querySelector(".ui-toggle[data-action='lang']");
    const hasLangPair = !!document.querySelector(".lang-btn[data-lang]");

    if (hasLangSingle || hasLangPair) return;

    const topbar = document.querySelector(".topbar");
    if (!topbar) return;

    const wrap = document.createElement("div");
    wrap.className = "ui-toggles";
    wrap.setAttribute("aria-label", "SR EN");

    if (!hasLangSingle && !hasLangPair) {
      // Create 2 separate language buttons
      const languages = [
        { code: "sr", label: "SR" },
        { code: "en", label: "EN" }
      ];
      
      const currentLang = getLang();
      
      languages.forEach(({ code, label }) => {
        const btn = document.createElement("button");
        btn.className = "lang-btn ui-toggle";
        btn.type = "button";
        btn.dataset.lang = code;
        btn.setAttribute("aria-label", label);
        btn.textContent = label;
        if (code === currentLang) {
          btn.classList.add("active");
        }
        wrap.appendChild(btn);
      });
    }

    if (wrap.children.length) topbar.appendChild(wrap);
  }

  function syncMobileTopbar() {
    const topbar = document.querySelector(".topbar");
    const controls = document.querySelector(".ui-toggles");
    if (!topbar || !controls) return;

    let mobileHost = document.querySelector(".mobile-topbar-controls");

    if (window.innerWidth <= 768) {
      if (!mobileHost) {
        mobileHost = document.createElement("div");
        mobileHost.className = "mobile-topbar-controls";
        topbar.insertAdjacentElement("afterend", mobileHost);
      }

      if (controls.parentElement !== mobileHost) {
        mobileHost.appendChild(controls);
      }
      return;
    }

    if (controls.parentElement !== topbar) {
      topbar.appendChild(controls);
    }

    if (mobileHost) {
      mobileHost.remove();
    }
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("#langToggle")) { e.preventDefault(); toggleLang(); return; }

    const langBtn = e.target.closest(".lang-btn[data-lang]");
    if (langBtn) { e.preventDefault(); applyLang(langBtn.dataset.lang); return; }

    const ui = e.target.closest(".ui-toggle[data-action]");
    if (ui) {
      e.preventDefault();
      if (ui.dataset.action === "lang") toggleLang();
      return;
    }
  });

  document.addEventListener("scam:content-rendered", () => {
    applyLang(getLang());
  });

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(DEFAULT_THEME);
    applyLang(getLang());

    ensureControlsExist();
    syncLangUI(getLang());
    syncMobileTopbar();
  });

  window.addEventListener("resize", syncMobileTopbar);
})();
