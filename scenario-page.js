(function () {
  function getSlug() {
    var meta = document.getElementById("scenario-meta");
    if (!meta) return "";
    return String(meta.getAttribute("data-scenario") || "").trim();
  }

  function getContent(slug) {
    var db = (window.SCENARIO_CONTENT && typeof window.SCENARIO_CONTENT === "object") ? window.SCENARIO_CONTENT : {};
    return db[slug] || null;
  }

  function renderScenarioPage() {
    var slug = getSlug();
    if (!slug) return;

    var host = document.querySelector("[data-scenario-longform]");
    if (!host) return;

    var content = getContent(slug);
    if (!content || typeof content.raw_html !== "string" || !content.raw_html.trim()) {
      host.innerHTML = "";
      return;
    }

    host.innerHTML = '<section class="longform" id="scenario-raw">' + content.raw_html.trim() + "</section>";
    document.dispatchEvent(new Event("scam:content-rendered"));
  }

  document.addEventListener("DOMContentLoaded", renderScenarioPage);
})();
