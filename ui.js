(function () {
  const LANG_KEY = "lang";     // "sr" | "en"
  const THEME_KEY = "theme";   // "dark" | "light"
  const DEFAULT_LANG = "sr";
  const DEFAULT_THEME = "dark";

  function getLang() {
    const v = localStorage.getItem(LANG_KEY);
    return (v === "sr" || v === "en") ? v : DEFAULT_LANG;
  }

  function getTheme() {
    const v = localStorage.getItem(THEME_KEY);
    return (v === "dark" || v === "light") ? v : DEFAULT_THEME;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  function toggleTheme() {
    applyTheme(getTheme() === "dark" ? "light" : "dark");
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-sr][data-en]").forEach((el) => {
      const primary = el.dataset[lang];
      const fallback = el.dataset.sr || el.dataset.en;
      const value = (primary && primary.trim()) ? primary : (fallback || "");
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
    const hasTheme = !!document.getElementById("themeToggle") || !!document.querySelector(".ui-toggle[data-action='theme']");
    const hasLangSingle = !!document.getElementById("langToggle") || !!document.querySelector(".ui-toggle[data-action='lang']");
    const hasLangPair = !!document.querySelector(".lang-btn[data-lang]");

    if ((hasLangSingle || hasLangPair) && hasTheme) return;

    const topbar = document.querySelector(".topbar");
    if (!topbar) return;

    const wrap = document.createElement("div");
    wrap.className = "ui-toggles";
    wrap.setAttribute("aria-label", "Theme and language");

    if (!hasTheme) {
      const themeBtn = document.createElement("button");
      themeBtn.className = "ui-toggle";
      themeBtn.type = "button";
      themeBtn.id = "themeToggle";
      themeBtn.setAttribute("aria-label", "Toggle theme");
      themeBtn.textContent = "Theme";
      wrap.appendChild(themeBtn);
    }

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
        btn.setAttribute("aria-label", `Switch to ${label}`);
        btn.textContent = label;
        if (code === currentLang) {
          btn.classList.add("active");
        }
        wrap.appendChild(btn);
      });
    }

    if (wrap.children.length) topbar.appendChild(wrap);
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("#themeToggle")) { e.preventDefault(); toggleTheme(); return; }
    if (e.target.closest("#langToggle")) { e.preventDefault(); toggleLang(); return; }

    const langBtn = e.target.closest(".lang-btn[data-lang]");
    if (langBtn) { e.preventDefault(); applyLang(langBtn.dataset.lang); return; }

    const ui = e.target.closest(".ui-toggle[data-action]");
    if (ui) {
      e.preventDefault();
      if (ui.dataset.action === "theme") toggleTheme();
      if (ui.dataset.action === "lang") toggleLang();
      return;
    }
  });

  document.addEventListener("scam:content-rendered", () => {
    applyLang(getLang());
  });

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(getTheme());
    applyLang(getLang());

    ensureControlsExist();
    syncLangUI(getLang());
  });
})();
