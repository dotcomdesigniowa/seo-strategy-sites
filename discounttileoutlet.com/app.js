// ============================================================
// Discount Tile Outlet | SEO Strategy | Plan A | 20 Combos
// Bellevue, WA | Eastside King County | March 2026
// Keywords: tile store | tile flooring | tile showroom
// Markets: 8 (Bellevue, Kirkland, Redmond, Sammamish, Bothell, Issaquah, Mercer Island, Woodinville)
// Matrix: Cities as rows (8 markets >= 6 threshold), Keywords as columns
// ============================================================

const client_name = "Discount Tile Outlet";
const client_industry = "Tile Flooring";
const client_hq = "Bellevue, WA";
const plan_level = "A";
const plan_combos = 20;

// ---- SELECTED KEYWORDS ----
const selected_keywords = [
  { kw: "tile store",     volume: 183000, tier: 1 },
  { kw: "tile flooring",  volume: 22200,  tier: 2 },
  { kw: "tile showroom",  volume: 9900,   tier: 3 }
];

// ---- KEYWORD TABLE ----
const keyword_table = [
  { kw: "porcelain tile",                  volume: 450000, tier: null, selected: false },
  { kw: "ceramic tile",                    volume: 301000, tier: null, selected: false },
  { kw: "tile store",                      volume: 183000, tier: 1,    selected: true  },
  { kw: "tile flooring",                   volume: 135000, tier: null, selected: false },
  { kw: "tile shop near me",               volume: 40500,  tier: null, selected: false },
  { kw: "tile flooring near me",           volume: 22200,  tier: 2,    selected: true  },
  { kw: "tile outlet",                     volume: 22200,  tier: null, selected: false },
  { kw: "porcelain tile store",            volume: 12100,  tier: null, selected: false },
  { kw: "tile showroom near me",           volume: 9900,   tier: 3,    selected: true  },
  { kw: "floor tile store near me",        volume: 5400,   tier: null, selected: false },
  { kw: "tile supply near me",             volume: 3600,   tier: null, selected: false },
  { kw: "ceramic tile store near me",      volume: 2900,   tier: null, selected: false },
  { kw: "tile warehouse near me",          volume: 2400,   tier: null, selected: false },
  { kw: "tile and flooring store near me", volume: 1900,   tier: null, selected: false },
  { kw: "discount tile store near me",     volume: 1600,   tier: null, selected: false },
  { kw: "natural stone tile store",        volume: 1300,   tier: null, selected: false },
  { kw: "mosaic tile store near me",       volume: 720,    tier: null, selected: false },
  { kw: "ceramic tile shop near me",       volume: 590,    tier: null, selected: false },
  { kw: "glass tile store near me",        volume: 390,    tier: null, selected: false },
  { kw: "discount tile near me",           volume: 210,    tier: null, selected: false }
];

// ---- KEYWORD TIERS ----
const keyword_tiers = [
  {
    tier: 1,
    name: "Destination Shoppers",
    color: "#1a3a5c",
    description: "High-volume, broad search terms used by customers actively looking for a physical tile store to visit. These keywords capture the largest possible audience of local shoppers and are the primary driver of foot traffic.",
    keywords: [
      { kw: "tile store", volume: 183000, note: "183,000 monthly searches nationally. The dominant local retail intent keyword for tile. Deployed across 7 of 8 markets." }
    ]
  },
  {
    tier: 2,
    name: "Ready-to-Buy Shoppers",
    color: "#2e7d32",
    description: "Mid-volume keywords with strong purchase intent. These customers have a specific flooring project in mind and are looking for a local supplier. The 'near me' variant is shown here for reference; the city name replaces it in the final matrix.",
    keywords: [
      { kw: "tile flooring near me", volume: 22200, note: "22,200 monthly searches. Strong local purchase intent. City name appended in the matrix replaces 'near me.' Deployed across 7 of 8 markets." }
    ]
  },
  {
    tier: 3,
    name: "Design-Focused Shoppers",
    color: "#b71c1c",
    description: "Customers seeking a curated showroom experience with professional design guidance. These are often higher-value customers in the earlier stages of a renovation project, and they are concentrated in the most affluent Eastside communities.",
    keywords: [
      { kw: "tile showroom near me", volume: 9900, note: "9,900 monthly searches. Low competition. Targets affluent Eastside customers seeking design consultation. Deployed across 6 of 8 markets." }
    ]
  }
];

// ---- MARKETS ----
const markets = [
  { city: "Bellevue",      state: "WA", pop: 151854, tier: 1, hq: true  },
  { city: "Kirkland",      state: "WA", pop: 92175,  tier: 1, hq: false },
  { city: "Redmond",       state: "WA", pop: 73256,  tier: 1, hq: false },
  { city: "Sammamish",     state: "WA", pop: 69438,  tier: 1, hq: false },
  { city: "Bothell",       state: "WA", pop: 53200,  tier: 1, hq: false },
  { city: "Issaquah",      state: "WA", pop: 40290,  tier: 1, hq: false },
  { city: "Mercer Island", state: "WA", pop: 25990,  tier: 2, hq: false },
  { city: "Woodinville",   state: "WA", pop: 14000,  tier: 2, hq: false }
];

// ---- MATRIX: Cities as rows, Keywords as columns ----
// tile store: 7 markets (all except Woodinville)
// tile flooring: 7 markets (all except Mercer Island)
// tile showroom: 6 markets (Bellevue, Kirkland, Redmond, Sammamish, Issaquah, Mercer Island)
// Total: 7 + 7 + 6 = 20 ✓
const matrix = [
  { city: "Bellevue",      kws: [true,  true,  true]  },
  { city: "Kirkland",      kws: [true,  true,  true]  },
  { city: "Redmond",       kws: [true,  true,  true]  },
  { city: "Sammamish",     kws: [true,  true,  true]  },
  { city: "Bothell",       kws: [true,  true,  false] },
  { city: "Issaquah",      kws: [true,  true,  true]  },
  { city: "Mercer Island", kws: [true,  false, true]  },
  { city: "Woodinville",   kws: [false, true,  false] }
];

// ---- NOT USED GROUPS ----
const not_used_groups = [
  {
    title: "Broad National Terms",
    reason: "These terms are dominated by national manufacturers, big-box retailers, and content farms. A local showroom cannot realistically compete for these keywords without years of domain authority building.",
    keywords: ["porcelain tile (450,000/mo)", "ceramic tile (301,000/mo)", "tile flooring (135,000/mo)"]
  },
  {
    title: "Redundant or Overlapping Terms",
    reason: "These terms are functionally covered by the selected 'tile store' keyword. Including them separately would dilute SEO efforts without adding meaningful incremental reach.",
    keywords: ["tile shop near me (40,500/mo)", "tile outlet (22,200/mo)", "floor tile store near me (5,400/mo)", "tile and flooring store near me (1,900/mo)"]
  },
  {
    title: "Commercial and Contractor Intent",
    reason: "These terms are primarily used by contractors and trade professionals sourcing materials in bulk, not by retail homeowners. They do not align with Discount Tile Outlet's core retail customer audience.",
    keywords: ["tile supply near me (3,600/mo)", "tile warehouse near me (2,400/mo)"]
  },
  {
    title: "Specific Product Terms: Reserved for Plan Expansion",
    reason: "Highly specific product keywords are valuable but best suited for dedicated product landing pages. These are the top candidates for inclusion in a Level B or C plan expansion.",
    keywords: ["porcelain tile store (12,100/mo)", "ceramic tile store near me (2,900/mo)", "discount tile store near me (1,600/mo)", "natural stone tile store (1,300/mo)", "mosaic tile store near me (720/mo)", "glass tile store near me (390/mo)", "discount tile near me (210/mo)"]
  }
];

// ---- ADDITIONAL OPPORTUNITIES ----
const additional_opportunities = [
  {
    plan_level: "B",
    plan_price: "$900/mo",
    plan_combos: 30,
    headline: "Add Porcelain Tile Keyword and Expand into Renton and Kenmore",
    description: "Introduces 'porcelain tile store' (12,100/mo) across five core markets and expands the existing tile store and tile flooring keywords into Renton and Kenmore, two growing communities with strong residential renovation demand and easy access to the Bellevue showroom.",
    new_keywords: [
      { kw: "porcelain tile store", volume: 12100 }
    ],
    new_markets: ["Renton, WA", "Kenmore, WA"],
    has_new_markets: true
  },
  {
    plan_level: "C",
    plan_price: "$1,200/mo",
    plan_combos: 40,
    headline: "Target Trade Professionals and Add Ceramic Tile Coverage",
    description: "Adds contractor-adjacent keywords including 'ceramic tile store near me' (2,900/mo) and 'tile supply near me' (3,600/mo) to capture the trade professional audience, while expanding geographic reach into Maple Valley and strengthening coverage across all existing markets.",
    new_keywords: [
      { kw: "ceramic tile store near me", volume: 2900 },
      { kw: "tile supply near me",        volume: 3600 }
    ],
    new_markets: ["Maple Valley, WA"],
    has_new_markets: true
  },
  {
    plan_level: "D",
    plan_price: "$1,600/mo",
    plan_combos: 50,
    headline: "Full Eastside Domination: Natural Stone, Mosaic, and South King County",
    description: "Expands into premium product categories with 'natural stone tile store' (1,300/mo) and 'mosaic tile store near me' (720/mo), while extending geographic reach into Kent and Auburn, establishing Discount Tile Outlet as the dominant tile destination across all of King County.",
    new_keywords: [
      { kw: "natural stone tile store",   volume: 1300 },
      { kw: "mosaic tile store near me",  volume: 720  }
    ],
    new_markets: ["Kent, WA", "Auburn, WA"],
    has_new_markets: true
  }
];

// ============================================================
// RENDERING FUNCTIONS
// ============================================================

function formatVolume(v) {
  if (!v && v !== 0) return 'N/A';
  if (v >= 1000000) return (v / 1000000).toFixed(1) + 'M';
  if (v >= 1000) return (v / 1000).toFixed(0) + 'K';
  return v.toString();
}

function tierColor(t) {
  if (t === 1) return '#1a3a5c';
  if (t === 2) return '#2e7d32';
  if (t === 3) return '#b71c1c';
  return '#555';
}

function tierLabel(t) {
  if (t === 1) return 'TIER 1';
  if (t === 2) return 'TIER 2';
  if (t === 3) return 'TIER 3';
  return '';
}

// ---- Keyword Table ----
function buildKwTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;
  const sorted = [...keyword_table].sort((a, b) => b.volume - a.volume);
  sorted.forEach(row => {
    const tr = document.createElement('tr');
    if (row.selected) tr.classList.add('row-selected');
    const tierHtml = row.tier
      ? `<span class="tier-pill t${row.tier}">${tierLabel(row.tier)}</span>`
      : '<span style="color:#999;font-size:0.8rem;">&#8212;</span>';
    const statusHtml = row.selected
      ? '<span class="kw-selected-badge">SELECTED</span>'
      : '<span class="kw-not-used-badge">NOT USED</span>';
    tr.innerHTML = `
      <td>${row.selected ? '<strong>' + row.kw + '</strong>' : row.kw}</td>
      <td class="num-col">${formatVolume(row.volume)}</td>
      <td>${tierHtml}</td>
      <td>${statusHtml}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ---- Keyword Tier Cards ----
function buildKwTierCards() {
  const grid = document.getElementById('kw-tier-grid');
  if (!grid) return;
  keyword_tiers.forEach(tier => {
    const card = document.createElement('div');
    card.className = 'kw-tier-card';
    card.style.borderTopColor = tier.color;
    const kwRows = tier.keywords.map(k => `
      <div class="kw-tier-row">
        <span class="kw-tier-name">${k.kw}</span>
        <span class="kw-tier-vol" style="color:${tier.color}">${formatVolume(k.volume)}<span class="kw-tier-vol-label">/mo</span></span>
        <p class="kw-tier-note">${k.note}</p>
      </div>
    `).join('');
    card.innerHTML = `
      <div class="kw-tier-header">
        <span class="kw-tier-badge" style="background:${tier.color}">TIER ${tier.tier}</span>
        <h4 class="kw-tier-title">${tier.name}</h4>
      </div>
      <p class="kw-tier-desc">${tier.description}</p>
      ${kwRows}
    `;
    grid.appendChild(card);
  });
}

// ---- Matrix: Cities as Rows, Keywords as Columns ----
function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  const kwLabels = selected_keywords.map(k => k.kw);

  // Header row
  let headerHtml = '<tr><th class="city-row-label">CITY / MARKET</th>';
  kwLabels.forEach(kw => {
    headerHtml += `<th class="total-header">${kw}</th>`;
  });
  headerHtml += '<th class="total-header">TOTAL</th></tr>';
  thead.innerHTML = headerHtml;

  // Tier pill sub-header
  let subHeaderHtml = '<tr><th></th>';
  selected_keywords.forEach(k => {
    subHeaderHtml += `<th><span class="tier-pill-sm t${k.tier}">TIER ${k.tier}</span></th>`;
  });
  subHeaderHtml += '<th></th></tr>';
  thead.innerHTML += subHeaderHtml;

  // Data rows
  let grandTotal = 0;
  matrix.forEach(row => {
    const market = markets.find(m => m.city === row.city);
    const tierNum = market ? market.tier : 1;
    const isHQ = market ? market.hq : false;
    const pop = market ? market.pop.toLocaleString() : '';
    const rowTotal = row.kws.filter(Boolean).length;
    grandTotal += rowTotal;

    let rowHtml = `<tr>`;
    rowHtml += `<td class="city-row-label">
      <span class="city-name-main">${row.city}${isHQ ? ' <span class="hq-star">&#9733; HQ</span>' : ''}</span>
      <span class="city-tier-inline"><span class="tier-pill-sm t${tierNum}">TIER ${tierNum}</span></span>
      <span class="city-pop-inline">Pop. ${pop}</span>
    </td>`;
    row.kws.forEach(assigned => {
      rowHtml += assigned
        ? `<td class="matrix-check"><span class="check-icon">&#10003;</span></td>`
        : `<td class="check-na">&#8212;</td>`;
    });
    rowHtml += `<td class="city-total-cell">${rowTotal}</td>`;
    rowHtml += `</tr>`;
    tbody.innerHTML += rowHtml;
  });

  // Totals row
  let totalsHtml = '<tr class="grand-total-row"><td class="city-row-label"><strong>Total Combinations</strong></td>';
  selected_keywords.forEach((k, i) => {
    const colTotal = matrix.filter(r => r.kws[i]).length;
    totalsHtml += `<td class="city-total-cell">${colTotal}</td>`;
  });
  totalsHtml += `<td class="city-total-cell"><strong>${grandTotal}</strong></td></tr>`;
  tbody.innerHTML += totalsHtml;

  // Grand total bar
  const wrapper = document.getElementById('matrix-table-wrapper');
  if (wrapper) {
    const bar = document.createElement('div');
    bar.className = 'grand-total-bar';
    bar.innerHTML = `Grand Total: <strong>${grandTotal} Combinations</strong>`;
    wrapper.appendChild(bar);
  }
}

// ---- Mobile Matrix ----
function buildMobileMatrix() {
  const container = document.getElementById('mobile-matrix');
  if (!container) return;
  const kwLabels = selected_keywords.map(k => k.kw);
  matrix.forEach(row => {
    const market = markets.find(m => m.city === row.city);
    const tierNum = market ? market.tier : 1;
    const isHQ = market ? market.hq : false;
    const pop = market ? market.pop.toLocaleString() : '';
    const rowTotal = row.kws.filter(Boolean).length;
    const card = document.createElement('div');
    card.className = 'mobile-matrix-card';
    let kwRows = '';
    row.kws.forEach((assigned, i) => {
      kwRows += `<div class="mobile-kw-row ${assigned ? 'assigned' : 'not-assigned'}">
        <span class="mobile-kw-label">${kwLabels[i]}</span>
        <span class="mobile-kw-status">${assigned ? '&#10003;' : '&#8212;'}</span>
      </div>`;
    });
    card.innerHTML = `
      <div class="mobile-matrix-header">
        <span class="mobile-city-name">${row.city}${isHQ ? ' &#9733;' : ''}</span>
        <span class="tier-pill-sm t${tierNum}">TIER ${tierNum}</span>
        <span class="mobile-city-pop">Pop. ${pop}</span>
        <span class="mobile-combo-count">${rowTotal} combo${rowTotal !== 1 ? 's' : ''}</span>
      </div>
      ${kwRows}
    `;
    container.appendChild(card);
  });
  const totalCard = document.createElement('div');
  totalCard.className = 'mobile-matrix-total';
  totalCard.innerHTML = `<strong>Grand Total: ${plan_combos} Combinations</strong>`;
  container.appendChild(totalCard);
}

// ---- Mobile Market List ----
function buildMobileMarketList() {
  const container = document.getElementById('mobile-market-list');
  if (!container) return;
  const allMarkets = [
    { city: "Bellevue",      pop: 151854, tier: 1, selected: true,  hq: true,  note: "HQ city; highest priority target." },
    { city: "Kirkland",      pop: 92175,  tier: 1, selected: true,  hq: false, note: "Affluent Eastside; strong renovation demand." },
    { city: "Redmond",       pop: 73256,  tier: 1, selected: true,  hq: false, note: "Tech corridor; high-income homeowners." },
    { city: "Sammamish",     pop: 69438,  tier: 1, selected: true,  hq: false, note: "Fastest-growing Eastside suburb." },
    { city: "Bothell",       pop: 53200,  tier: 1, selected: true,  hq: false, note: "Growing North Eastside market." },
    { city: "Issaquah",      pop: 40290,  tier: 1, selected: true,  hq: false, note: "Affluent Eastside community." },
    { city: "Mercer Island", pop: 25990,  tier: 2, selected: true,  hq: false, note: "Highly affluent island community." },
    { city: "Woodinville",   pop: 14000,  tier: 2, selected: true,  hq: false, note: "Wine country; luxury homeowners." },
    { city: "Renton",        pop: 106785, tier: 1, selected: false, hq: false, note: "Large; recommended for Level B expansion." },
    { city: "Kenmore",       pop: 23590,  tier: 2, selected: false, hq: false, note: "North Lake Washington; Level B candidate." },
    { city: "Maple Valley",  pop: 30000,  tier: 2, selected: false, hq: false, note: "Southeast King County; future expansion." }
  ];
  allMarkets.forEach(m => {
    const item = document.createElement('div');
    item.className = `mobile-market-item ${m.selected ? 'market-selected' : ''}`;
    item.innerHTML = `
      <div class="mobile-market-header">
        <span class="mobile-market-name">${m.selected ? '&#9733; ' : ''}${m.city}${m.hq ? ' (HQ)' : ''}</span>
        <span class="tier-pill-sm t${m.tier}">TIER ${m.tier}</span>
      </div>
      <div class="mobile-market-detail">Pop. ${m.pop.toLocaleString()} &bull; ${m.note}</div>
    `;
    container.appendChild(item);
  });
}

// ---- Not Used Groups ----
function buildNotUsed() {
  const grid = document.getElementById('not-used-grid');
  if (!grid) return;
  not_used_groups.forEach(group => {
    const card = document.createElement('div');
    card.className = 'not-used-card';
    const kwList = group.keywords.map(k => `<li>${k}</li>`).join('');
    card.innerHTML = `
      <h4 class="not-used-title">${group.title}</h4>
      <p class="not-used-reason">${group.reason}</p>
      <ul class="not-used-kw-list">${kwList}</ul>
    `;
    grid.appendChild(card);
  });
}

// ---- Opportunities ----
function buildOpportunities() {
  const grid = document.getElementById('opportunities-grid');
  if (!grid) return;
  additional_opportunities.forEach(opp => {
    const card = document.createElement('div');
    card.className = 'opp-card';

    const newKwRows = opp.new_keywords.map(k =>
      `<li class="opp-kw-row"><span class="opp-kw-name">${k.kw}</span><span class="opp-kw-vol">${formatVolume(k.volume)}</span></li>`
    ).join('');

    const newMarketRows = opp.has_new_markets && opp.new_markets.length > 0
      ? opp.new_markets.map(m => `<li class="opp-kw-row"><span class="opp-kw-name">${m}</span><span class="opp-new-market-badge">NEW MARKET</span></li>`).join('')
      : '';

    const newMarketDiv = opp.has_new_markets && opp.new_markets.length > 0
      ? `<div class="opp-new-market"><em>Adds new markets to your coverage area.</em></div>`
      : `<div class="opp-new-market" style="visibility:hidden"><em>&nbsp;</em></div>`;

    card.innerHTML = `
      <div class="opp-plan-label">PLAN ${opp.plan_level}</div>
      <div class="opp-price">${opp.plan_price}</div>
      <div class="opp-combos-large">${opp.plan_combos}</div>
      <div class="opp-combos-label">keyword-city combinations</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      ${newMarketDiv}
      <ul class="opp-kw-list">
        <li class="opp-kw-header"><span>KEYWORD / MARKET</span><span>MO. SEARCHES</span></li>
        ${newKwRows}
        ${newMarketRows}
      </ul>
    `;
    grid.appendChild(card);
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', function() {
  buildKwTable();
  buildKwTierCards();
  buildMatrix();
  buildMobileMatrix();
  buildMobileMarketList();
  buildNotUsed();
  buildOpportunities();
});
