(function () {
  "use strict";

  function getCardCategoryIds(card) {
    var own = (card.getAttribute("data-group-id") || "").trim();
    var overlapsRaw = (card.getAttribute("data-overlaps") || "").trim();
    var overlaps = overlapsRaw
      ? overlapsRaw.split(",").map(function (x) { return x.trim(); }).filter(Boolean)
      : [];
    var all = [];
    if (own) all.push(own);
    overlaps.forEach(function (id) {
      if (all.indexOf(id) === -1) all.push(id);
    });
    return all;
  }

  function applyFilter(filterId) {
    var cards = Array.prototype.slice.call(document.querySelectorAll("#prevention-guide-grid .guide-card-link"));
    cards.forEach(function (card) {
      if (!filterId) {
        card.style.display = "";
        return;
      }
      var ids = getCardCategoryIds(card);
      card.style.display = ids.indexOf(filterId) >= 0 ? "" : "none";
    });
  }

  function setActiveChip(filterId) {
    var chips = Array.prototype.slice.call(document.querySelectorAll("#prevention-filter-bar .group-chip"));
    chips.forEach(function (chip) {
      var id = chip.getAttribute("data-filter-id") || "";
      chip.classList.toggle("active", id === filterId);
    });
  }

  function init() {
    var bar = document.getElementById("prevention-filter-bar");
    if (!bar) return;

    bar.querySelectorAll(".group-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var filterId = chip.getAttribute("data-filter-id") || "";
        setActiveChip(filterId);
        applyFilter(filterId);
      });
    });

    setActiveChip("");
    applyFilter("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
