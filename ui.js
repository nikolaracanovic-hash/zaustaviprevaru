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

    // ✅ KLJUČNO: render.js bira jezik preko html[data-lang]
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-sr][data-en]").forEach((el) => {
      const primary = el.dataset[lang];
      const fallback = el.dataset[lang === "sr" ? "en" : "sr"];
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

    // Signal render.js to re-render dynamic blocks that do not have data-sr/data-en
    // (meta subtitle, generated tags, index cards, etc.).
    document.dispatchEvent(new CustomEvent("lang:changed", { detail: { lang } }));
  }

  function toggleLang() {
    applyLang(getLang() === "sr" ? "en" : "sr");
  }

  // --- UI sync (works with multiple possible button layouts) ---
  function syncLangUI(lang) {
    const pair = Array.from(document.querySelectorAll(".lang-btn[data-lang]"));

    // Ako postoje 2 SR/EN dugmeta – sakrij ih i koristi toggle
    if (pair.length >= 2) {
      pair.forEach(btn => { btn.style.display = "none"; });

      const parent =
        pair[0].parentElement ||
        document.querySelector(".topbar") ||
        document.body;

      let toggle = parent.querySelector("#langToggle");
      if (!toggle) {
        toggle = document.createElement("button");
        toggle.className = "ui-toggle";
        toggle.type = "button";
        toggle.id = "langToggle";
        toggle.setAttribute("aria-label", "Toggle language");
        parent.appendChild(toggle);
      } else {
        toggle.classList.add("ui-toggle");
      }

      toggle.textContent = (lang === "sr") ? "SR" : "EN";
      return;
    }

    // Ako postoji samo toggle
    const t = document.getElementById("langToggle");
    if (t) t.textContent = (lang === "sr") ? "SR" : "EN";
  }

  // --- OPTIONAL: auto-inject controls if they don't exist ---
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
      const langBtn = document.createElement("button");
      langBtn.className = "ui-toggle";
      langBtn.type = "button";
      langBtn.id = "langToggle";
      langBtn.setAttribute("aria-label", "Toggle language");
      langBtn.textContent = (getLang() === "sr") ? "SR" : "EN";
      wrap.appendChild(langBtn);
    }

    if (wrap.children.length) topbar.appendChild(wrap);
  }

  // --- Click routing: supports ANY existing markup ---
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

  // ✅ NOVO: kad render.js ubaci raw_html, ponovo primeni jezik
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
