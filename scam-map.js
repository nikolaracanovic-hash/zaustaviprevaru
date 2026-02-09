// scam-map.js — Grid-based flowchart (poster style)

(function() {
  'use strict';

  // Scam categories and order (matching poster flow)
  const scamOrder = [
    // Entry points
    { slug: 'phishing', cat: 'entry' },
    { slug: 'smishing', cat: 'entry' },
    { slug: 'vishing', cat: 'entry' },
    { slug: 'scareware', cat: 'entry' },
    { slug: 'fake-delivery', cat: 'entry' },
    
    // Authority/Pressure
    { slug: 'fake-call-scam', cat: 'authority' },
    { slug: 'tech-support-scam', cat: 'authority' },
    { slug: 'impersonation-scam', cat: 'authority' },
    
    // Relationship
    { slug: 'romantic-scam', cat: 'relationship' },
    { slug: 'pig-butchering', cat: 'relationship' },
    { slug: 'sextortion-scam', cat: 'relationship' },
    
    // Investment
    { slug: 'crypto-scam', cat: 'investment' },
    { slug: 'investment-seminar', cat: 'investment' },
    { slug: 'ponzi-scheme', cat: 'investment' },
    { slug: 'pyramid-scheme', cat: 'investment' },
    { slug: 'pump-dump', cat: 'investment' },
    { slug: 'ai-deepfake', cat: 'investment' },
    
    // Fee-based
    { slug: 'advance-fee-fraud', cat: 'fee' },
    { slug: 'loan-scam', cat: 'fee' },
    { slug: 'job-scam', cat: 'fee' },
    { slug: 'rental-scam', cat: 'fee' },
    { slug: 'marketplace-scam', cat: 'fee' },
    { slug: 'giveaway-scam', cat: 'fee' },
    { slug: 'charity-scam', cat: 'fee' },
    
    // Outcomes
    { slug: 'account-takeover', cat: 'outcome' },
    { slug: 'recovery-scam', cat: 'outcome' }
  ];

  const gridContainer = document.querySelector('.map-wrapper');
  const detailPanel = document.getElementById('detail-panel');

  if (!gridContainer || !window.SCAM_DB) return;

  const DB = window.SCAM_DB;
  let currentLang = document.documentElement.getAttribute('data-lang') || 'sr';
  let selectedSlug = null;

  // Get localized text
  function getText(item, field) {
    if (!item || !item[field]) return '';
    const val = item[field];
    if (typeof val === 'string') return val;
    return val[currentLang] || val.sr || val.en || '';
  }

  // Get page URL
  function getPageUrl(slug) {
    const item = DB[slug];
    if (!item || !item.hasPage) return null;
    const fileMap = {
      'romantic-scam': 'romantic-scam.html',
      'crypto-scam': 'crypto-scam.html',
      'fake-call-scam': 'fake-call-scam.html',
      'marketplace-scam': 'marketplace-scam.html',
      'phishing': 'phishing.html',
      'smishing': 'smishing.html',
      'vishing': 'vishing.html',
      'account-takeover': 'account-takeover.html',
      'tech-support-scam': 'tech-support-scam.html',
      'scareware': 'scareware.html',
      'advance-fee-fraud': 'advance-fee-fraud.html',
      'pig-butchering': 'pig-butchering.html',
      'recovery-scam': 'recovery-scam.html',
      'impersonation-scam': 'impersonation-scam.html',
      'job-scam': 'job-scam.html',
      'investment-seminar': 'investment-seminar.html',
      'fake-delivery': 'fake-delivery.html',
      'rental-scam': 'rental-scam.html',
      'charity-scam': 'charity-scam.html',
      'giveaway-scam': 'giveaway-scam.html',
      'loan-scam': 'loan-scam.html',
      'sextortion-scam': 'sextortion-scam.html',
      'pyramid-scheme': 'pyramid-scheme.html',
      'ponzi-scheme': 'ponzi-scheme.html',
      'pump-dump': 'pump-dump.html',
      'ai-deepfake': 'ai-deepfake.html'
    };
    return fileMap[slug] || (slug + '.html');
  }

  // Render grid
  function renderGrid() {
    gridContainer.innerHTML = '<div class="scam-grid"></div>';
    const grid = gridContainer.querySelector('.scam-grid');
    
    scamOrder.forEach(({ slug, cat }) => {
      const item = DB[slug];
      if (!item) return;
      
      const title = getText(item, 'title');
      const subtitle = getText(item, 'subtitle');
      
      const card = document.createElement('div');
      card.className = `scam-card ${cat}`;
      card.dataset.slug = slug;
      
      card.innerHTML = `
        <div class="scam-card-title">${title}</div>
        <div class="scam-card-label">${subtitle.substring(0, 80)}${subtitle.length > 80 ? '...' : ''}</div>
      `;
      
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        showDetails(slug, item);
      });
      
      grid.appendChild(card);
    });
  }

  // Show detail panel
  function showDetails(slug, item) {
    if (!detailPanel) return;
    
    // Update selection
    document.querySelectorAll('.scam-card').forEach(c => c.classList.remove('selected'));
    const card = document.querySelector(`.scam-card[data-slug="${slug}"]`);
    if (card) card.classList.add('selected');
    selectedSlug = slug;
    
    const title = getText(item, 'title');
    const subtitle = getText(item, 'subtitle');
    const overlaps = item.overlaps || [];
    const url = getPageUrl(slug);
    
    // Build related scams
    let relatedHtml = '';
    if (overlaps.length > 0) {
      const relatedItems = overlaps
        .filter(s => DB[s])
        .slice(0, 5)
        .map(s => {
          const t = getText(DB[s], 'title');
          return `<span class="related-tag" data-slug="${s}">${t}</span>`;
        });
      if (relatedItems.length > 0) {
        const relLabel = currentLang === 'sr' ? 'Povezano:' : 'Related:';
        relatedHtml = `<div class="detail-related"><strong>${relLabel}</strong> ${relatedItems.join(' ')}</div>`;
      }
    }
    
    const btnText = currentLang === 'sr' ? 'Otvori detalje →' : 'View details →';
    
    detailPanel.innerHTML = `
      <button class="detail-close" aria-label="Close">×</button>
      <h3 class="detail-title">${title}</h3>
      <p class="detail-desc">${subtitle}</p>
      ${relatedHtml}
      <a href="${url}" class="detail-btn">${btnText}</a>
    `;
    
    detailPanel.classList.add('visible');
    
    // Events
    detailPanel.querySelector('.detail-close').addEventListener('click', hideDetails);
    detailPanel.querySelectorAll('.related-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const s = tag.dataset.slug;
        if (DB[s]) showDetails(s, DB[s]);
      });
    });
  }

  // Hide detail panel
  function hideDetails() {
    if (!detailPanel) return;
    detailPanel.classList.remove('visible');
    document.querySelectorAll('.scam-card').forEach(c => c.classList.remove('selected'));
    selectedSlug = null;
  }

  // Initialize
  function init() {
    renderGrid();
    
    // Click outside to close
    document.addEventListener('click', (e) => {
      if (detailPanel && detailPanel.classList.contains('visible') && 
          !detailPanel.contains(e.target) && !e.target.closest('.scam-card')) {
        hideDetails();
      }
    });
    
    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') hideDetails();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Update on language change
  document.addEventListener('lang:changed', (e) => {
    currentLang = e.detail?.lang || document.documentElement.getAttribute('data-lang') || 'sr';
    hideDetails();
    renderGrid();
  });

})();
