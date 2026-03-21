(function () {
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getLang() {
    return document.documentElement.lang === "en" ? "en" : "sr";
  }

  function systemData() {
    return (window.SCENARIO_SYSTEM && typeof window.SCENARIO_SYSTEM === "object") ? window.SCENARIO_SYSTEM : { categories: [], entries: [] };
  }

  function scenarioEntries() {
    return Array.isArray(systemData().entries) ? systemData().entries.slice() : [];
  }

  function categories() {
    return Array.isArray(systemData().categories) ? systemData().categories.slice() : [];
  }

  function getCategoryLabel(catId, lang) {
    var defs = categories();
    for (var i = 0; i < defs.length; i += 1) {
      if (defs[i].id === catId) return lang === "en" ? defs[i].en : defs[i].sr;
    }
    return lang === "en" ? "Other" : "Ostalo";
  }

  function getScamTitle(slug, lang) {
    var db = window.SCAM_DB || {};
    var entry = db[slug] || {};
    if (lang === "en") return entry.title_en || entry.title_sr || slug;
    return entry.title_sr || entry.title_en || slug;
  }

  function renderSummary(groups, lang) {
    var host = document.getElementById("scenario-summary");
    if (!host) return;

    host.innerHTML = groups.map(function (group) {
      return '<span class="hub-chip scenario-summary-chip" data-cat="' + esc(group.id) + '">' +
        esc(getCategoryLabel(group.id, lang)) + " (" + group.items.length + ")" +
      "</span>";
    }).join("");
  }

  function renderScenarios() {
    var host = document.getElementById("scenario-list");
    if (!host) return;

    var lang = getLang();
    var entries = scenarioEntries();

    entries.sort(function (a, b) {
      return String(b.date || "").localeCompare(String(a.date || ""));
    });

    var grouped = {};
    entries.forEach(function (entry) {
      var catId = entry.category || "other";
      if (!grouped[catId]) grouped[catId] = [];
      grouped[catId].push(entry);
    });

    var defs = categories();
    var groups = defs.map(function (def) {
      return { id: def.id, items: grouped[def.id] || [] };
    }).filter(function (group) {
      return group.items.length > 0;
    });

    renderSummary(groups, lang);

    var labelRelated = lang === "en" ? "Related scam" : "Povezana prevara";

    host.innerHTML = groups.map(function (group) {
      var cards = group.items.map(function (entry) {
        var title = lang === "en" ? entry.title_en : entry.title_sr;
        var summary = lang === "en" ? entry.summary_en : entry.summary_sr;
        var related = getScamTitle(entry.related_scam, lang);

        return '<article class="scenario-card scenario-index-card" data-cat="' + esc(group.id) + '">' +
          '<div class="scenario-meta">' +
            '<span class="scenario-chip" data-cat="' + esc(group.id) + '">' + esc(getCategoryLabel(group.id, lang)) + '</span>' +
            '<span class="scenario-date">' + esc(entry.date || "") + '</span>' +
          '</div>' +
          '<h2 class="scenario-title"><a class="scenario-card-link" href="' + esc(entry.url) + '">' + esc(title) + '</a></h2>' +
          '<p class="scenario-card-summary">' + esc(summary) + '</p>' +
          '<div class="scenario-scam"><strong>' + esc(labelRelated) + ":</strong> " + esc(related) + '</div>' +
        '</article>';
      }).join("");

      return '<section class="scenario-section">' +
        '<div class="scenario-section-head">' +
          '<span class="scenario-chip large" data-cat="' + esc(group.id) + '">' + esc(getCategoryLabel(group.id, lang)) + '</span>' +
          '<span class="muted">' + group.items.length + '</span>' +
        '</div>' +
        '<div class="scenario-grid">' + cards + '</div>' +
      '</section>';
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", renderScenarios);
  document.addEventListener("lang:changed", renderScenarios);
})();
