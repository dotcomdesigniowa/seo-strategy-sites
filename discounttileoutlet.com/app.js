// ============================================================
// SEO STRATEGY DATA — Discount Tile Outlet | Bellevue, WA
// Plan Level B | 30 Keyword-City Combinations
// 4 Keywords x 9 Markets (8 + 8 + 7 + 7)
// Matrix: Cities as rows (9 markets >= 6 threshold)
// ============================================================
const STRATEGY = {
  client_name: "Discount Tile Outlet",
  plan_level: "B",
  plan_price: 900,
  total_combinations: 30,
  selected_keywords: ["tile store", "tile flooring near me", "tile showroom near me", "hardwood flooring near me"],

  // ---- KEYWORD TABLE ----
  keyword_table: [
    // Broad Tile family
    { keyword: "porcelain tile",                  monthly_searches: 450000, tier: null,     status: "not_used", family: "broad tile",     variant_type: "base"    },
    { keyword: "ceramic tile",                    monthly_searches: 301000, tier: null,     status: "not_used", family: "broad tile",     variant_type: "variant" },
    { keyword: "tile flooring",                   monthly_searches: 135000, tier: null,     status: "not_used", family: "broad tile",     variant_type: "variant" },
    // Tile Store family
    { keyword: "tile store",                      monthly_searches: 183000, tier: "Tier 1", status: "selected", family: "tile store",     variant_type: "base"    },
    { keyword: "tile shop near me",               monthly_searches:  40500, tier: null,     status: "not_used", family: "tile store",     variant_type: "near_me" },
    { keyword: "tile outlet",                     monthly_searches:  22200, tier: null,     status: "not_used", family: "tile store",     variant_type: "variant" },
    { keyword: "discount tile store near me",     monthly_searches:   1600, tier: null,     status: "not_used", family: "tile store",     variant_type: "variant" },
    { keyword: "discount tile near me",           monthly_searches:    210, tier: null,     status: "not_used", family: "tile store",     variant_type: "variant" },
    // Tile Flooring family
    { keyword: "tile flooring near me",           monthly_searches:  22200, tier: "Tier 2", status: "selected", family: "tile flooring",  variant_type: "base"    },
    { keyword: "floor tile store near me",        monthly_searches:   5400, tier: null,     status: "not_used", family: "tile flooring",  variant_type: "near_me" },
    { keyword: "tile and flooring store near me", monthly_searches:   1900, tier: null,     status: "not_used", family: "tile flooring",  variant_type: "variant" },
    // Tile Showroom family
    { keyword: "tile showroom near me",           monthly_searches:   9900, tier: "Tier 3", status: "selected", family: "tile showroom",  variant_type: "base"    },
    // Hardwood Flooring family
    { keyword: "hardwood flooring near me",       monthly_searches:  22200, tier: "Tier 4", status: "selected", family: "hardwood flooring", variant_type: "near_me" },
    { keyword: "hardwood flooring",               monthly_searches: 135000, tier: "Tier 4", status: "not_used", family: "hardwood flooring", variant_type: "base"    },
    { keyword: "hardwood flooring store near me", monthly_searches:   5400, tier: "Tier 4", status: "not_used", family: "hardwood flooring", variant_type: "near_me" },
    { keyword: "wood flooring near me",           monthly_searches:   4400, tier: "Tier 4", status: "not_used", family: "hardwood flooring", variant_type: "near_me" },
    // Specialty Tile family
    { keyword: "porcelain tile store",            monthly_searches:  12100, tier: null,     status: "not_used", family: "specialty tile", variant_type: "base"    },
    { keyword: "ceramic tile store near me",      monthly_searches:   2900, tier: null,     status: "not_used", family: "specialty tile", variant_type: "variant" },
    { keyword: "natural stone tile store",        monthly_searches:   1300, tier: null,     status: "not_used", family: "specialty tile", variant_type: "variant" },
    { keyword: "mosaic tile store near me",       monthly_searches:    720, tier: null,     status: "not_used", family: "specialty tile", variant_type: "variant" },
    { keyword: "ceramic tile shop near me",       monthly_searches:    590, tier: null,     status: "not_used", family: "specialty tile", variant_type: "variant" },
    { keyword: "glass tile store near me",        monthly_searches:    390, tier: null,     status: "not_used", family: "specialty tile", variant_type: "variant" },
    // Tile Supply family
    { keyword: "tile supply near me",             monthly_searches:   3600, tier: null,     status: "not_used", family: "tile supply",    variant_type: "base"    },
    { keyword: "tile warehouse near me",          monthly_searches:   2400, tier: null,     status: "not_used", family: "tile supply",    variant_type: "variant" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Destination Shoppers",
      description: "High-volume, broad search terms used by customers actively looking for a physical tile store to visit. These keywords capture the largest possible audience of local shoppers and are the primary driver of foot traffic to the Bellevue showroom.",
      keywords: [
        { keyword: "tile store", monthly_searches: 183000 }
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Ready-to-Buy Shoppers",
      description: "Mid-volume keywords with strong purchase intent. These customers have a specific flooring project in mind and are actively looking for a local supplier. The city name replaces 'near me' in the final matrix, serving the same geographic function.",
      keywords: [
        { keyword: "tile flooring near me", monthly_searches: 22200 }
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Design-Focused Shoppers",
      description: "Customers seeking a curated showroom experience with professional design guidance. These are often higher-value customers in the earlier stages of a renovation project, concentrated in the most affluent Eastside communities.",
      keywords: [
        { keyword: "tile showroom near me", monthly_searches: 9900 }
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Hardwood Flooring Shoppers",
      description: "Customers actively searching for a local hardwood flooring retailer. Hardwood flooring is explicitly offered by Discount Tile Outlet and listed on their website. At 22,200 monthly searches nationally, this keyword opens a distinct product category and captures homeowners who may not initially think to search for a tile store when shopping for hardwood.",
      keywords: [
        { keyword: "hardwood flooring near me",       monthly_searches: 22200 },
        { keyword: "hardwood flooring store near me", monthly_searches:  5400 },
        { keyword: "wood flooring near me",           monthly_searches:  4400 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Broad National Terms: Dominated by Manufacturers and Big-Box Retailers",
      description: "These terms are dominated by national manufacturers, big-box retailers like Home Depot and Lowe's, and content farms. A local showroom cannot realistically compete for these keywords without years of domain authority building and significant content investment.",
      keywords: [
        { keyword: "porcelain tile",  monthly_searches: 450000 },
        { keyword: "ceramic tile",    monthly_searches: 301000 },
        { keyword: "tile flooring",   monthly_searches: 135000 }
      ]
    },
    {
      reason: "Redundant or Overlapping Terms: Covered by Selected Keywords",
      description: "These terms are functionally covered by the selected 'tile store' and 'tile flooring near me' keywords. Including them separately would dilute SEO efforts without adding meaningful incremental reach.",
      keywords: [
        { keyword: "tile shop near me",               monthly_searches: 40500 },
        { keyword: "tile outlet",                     monthly_searches: 22200 },
        { keyword: "floor tile store near me",        monthly_searches:  5400 },
        { keyword: "tile and flooring store near me", monthly_searches:  1900 }
      ]
    },
    {
      reason: "Commercial and Trade Supply Terms: Wrong Audience",
      description: "These terms are primarily used by contractors and trade professionals sourcing materials in bulk, not by retail homeowners. They do not align with Discount Tile Outlet's core retail customer audience and would attract the wrong traffic.",
      keywords: [
        { keyword: "tile supply near me",    monthly_searches: 3600 },
        { keyword: "tile warehouse near me", monthly_searches: 2400 }
      ]
    },
    {
      reason: "Specific Product Terms: Reserved for Plan Expansion",
      description: "Highly specific product keywords are valuable but best suited for dedicated product landing pages. These are the top candidates for inclusion in a Level C or D plan expansion once the foundation keywords are established.",
      keywords: [
        { keyword: "porcelain tile store",        monthly_searches: 12100 },
        { keyword: "hardwood flooring store near me", monthly_searches: 5400 },
        { keyword: "ceramic tile store near me",  monthly_searches:  2900 },
        { keyword: "wood flooring near me",       monthly_searches:  4400 },
        { keyword: "discount tile store near me", monthly_searches:  1600 },
        { keyword: "natural stone tile store",    monthly_searches:  1300 },
        { keyword: "mosaic tile store near me",   monthly_searches:   720 },
        { keyword: "glass tile store near me",    monthly_searches:   390 },
        { keyword: "discount tile near me",       monthly_searches:   210 }
      ]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 10,
      headline: "Add Porcelain Tile Coverage and Expand into Kenmore",
      description: "Introduces 'porcelain tile store' (12,100/mo) as a dedicated product keyword across core markets, and expands geographic reach into Kenmore, a growing community with strong residential renovation demand and easy access to the Bellevue showroom.",
      keywords: [
        { keyword: "porcelain tile store", monthly_searches: 12100 },
        { keyword: "Kenmore, WA",          monthly_searches: null, new_market: true }
      ]
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 20,
      headline: "Add Ceramic Tile and Natural Stone Coverage",
      description: "Adds 'ceramic tile store near me' (2,900/mo) and 'natural stone tile store' (1,300/mo) as dedicated product keywords, capturing customers searching for specific tile materials and establishing Discount Tile Outlet as the dominant specialty tile destination across the Eastside.",
      keywords: [
        { keyword: "ceramic tile store near me", monthly_searches: 2900 },
        { keyword: "natural stone tile store",   monthly_searches: 1300 },
        { keyword: "Maple Valley, WA",           monthly_searches: null, new_market: true }
      ]
    }
  ]
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================
function fmt(n) {
  if (n === null || n === undefined) return '';
  return n.toLocaleString();
}
function statusBadge(status, note) {
  if (status === 'selected') return '<span class="status-badge status-selected">Selected</span>';
  if (status === 'near_me') return `<span class="status-badge status-near-me" title="${note || ''}">Near Me Variant</span>`;
  return '<span class="status-badge status-not-used">Not Used</span>';
}
function tierPill(label) {
  if (!label) return '<span style="color:#999;font-size:0.8rem;">&#8212;</span>';
  const cls = label === 'Tier 1' ? 't1' : label === 'Tier 2' ? 't2' : label === 'Tier 3' ? 't3' : 't4';
  return `<span class="tier-pill ${cls}">${label.toUpperCase()}</span>`;
}

// ============================================================
// POPULATE KEYWORD TABLE
// ============================================================
function buildKeywordTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;
  const familyOrder = [];
  const familyMap = {};
  STRATEGY.keyword_table.forEach(kw => {
    if (!familyMap[kw.family]) {
      familyMap[kw.family] = [];
      familyOrder.push(kw.family);
    }
    familyMap[kw.family].push(kw);
  });
  const variantLabel = { variant: 'Variant', plural: 'Plural Variant', near_me: 'Near Me Variant', short_form: 'Short-Form Variant' };
  const rows = familyOrder.map(family => {
    const members = familyMap[family].slice().sort((a, b) => {
      const rankType = t => t === 'base' ? 0 : 1;
      if (rankType(a.variant_type) !== rankType(b.variant_type)) return rankType(a.variant_type) - rankType(b.variant_type);
      return b.monthly_searches - a.monthly_searches;
    });
    return members.map(kw => {
      const isBase = kw.variant_type === 'base';
      const isNearMe = kw.variant_type === 'near_me';
      const rowClass = isBase
        ? (kw.status === 'selected' ? 'row-base row-selected' : 'row-base')
        : (isNearMe ? 'row-variant row-near-me' : 'row-variant');
      const kwCell = isBase
        ? `<td>${kw.keyword}</td>`
        : `<td class="kw-variant-cell"><span class="kw-variant-indent">&#8627;</span>${kw.keyword} <span class="kw-variant-badge">${variantLabel[kw.variant_type] || 'Variant'}</span></td>`;
      return `<tr class="${rowClass}">
        ${kwCell}
        <td class="num-col">${fmt(kw.monthly_searches)}</td>
        <td>${tierPill(kw.tier)}</td>
        <td>${statusBadge(kw.status, kw.note)}</td>
      </tr>`;
    }).join('');
  }).join('');
  tbody.innerHTML = rows;
}

// ============================================================
// POPULATE KEYWORD TIER CARDS
// ============================================================
function buildKeywordTierCards() {
  const grid = document.getElementById('kw-tier-grid');
  if (!grid) return;
  const tierColors = ['kw-tier-1', 'kw-tier-2', 'kw-tier-3', 'kw-tier-4'];
  const cards = STRATEGY.keyword_tiers.map((tier, i) => {
    const kwRows = tier.keywords.map(kw =>
      `<div class="kw-row">
        <span class="kw-name">${kw.keyword}</span>
        <span class="kw-vol">${fmt(kw.monthly_searches)}</span>
      </div>`
    ).join('');
    return `<div class="kw-tier-card ${tierColors[i] || 'kw-tier-4'}">
      <div class="kw-tier-label">${tier.tier_label}</div>
      <h4 class="kw-tier-name">${tier.tier_name}</h4>
      <p class="kw-tier-desc">${tier.description}</p>
      <div class="kw-tier-table">
        <div class="kw-header"><span>Keyword</span><span>Mo. Searches</span></div>
        ${kwRows}
      </div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// POPULATE MATRIX TABLE
// Cities as rows layout — 9 markets >= 6 threshold
// tile store:              8 markets (all except Woodinville)
// tile flooring near me:   8 markets (all except Mercer Island)
// tile showroom near me:   7 markets (all except Woodinville and Renton)
// hardwood flooring near me: 7 markets (all except Woodinville and Mercer Island)
// Total: 8 + 8 + 7 + 7 = 30 combinations
// ============================================================
function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  const allCities = [
    { city: "Bellevue",      tier: "Tier 1", population: 151854, is_hq: true  },
    { city: "Renton",        tier: "Tier 1", population: 108429, is_hq: false },
    { city: "Kirkland",      tier: "Tier 1", population:  92175, is_hq: false },
    { city: "Redmond",       tier: "Tier 1", population:  73256, is_hq: false },
    { city: "Sammamish",     tier: "Tier 1", population:  69438, is_hq: false },
    { city: "Bothell",       tier: "Tier 1", population:  53200, is_hq: false },
    { city: "Issaquah",      tier: "Tier 1", population:  40290, is_hq: false },
    { city: "Mercer Island", tier: "Tier 2", population:  25990, is_hq: false },
    { city: "Woodinville",   tier: "Tier 2", population:  14000, is_hq: false }
  ];

  const cityMatrix = {
    "Bellevue":      [true,  true,  true,  true ],
    "Renton":        [true,  true,  false, true ],
    "Kirkland":      [true,  true,  true,  true ],
    "Redmond":       [true,  true,  true,  true ],
    "Sammamish":     [true,  true,  true,  true ],
    "Bothell":       [true,  true,  false, true ],
    "Issaquah":      [true,  true,  true,  true ],
    "Mercer Island": [true,  false, true,  false],
    "Woodinville":   [false, true,  false, false]
  };

  const keywords = STRATEGY.selected_keywords;

  // Header row
  let headerHtml = '<tr><th class="city-row-label">CITY / MARKET</th>';
  keywords.forEach(kw => { headerHtml += `<th class="total-header">${kw}</th>`; });
  headerHtml += '<th class="total-header">TOTAL</th></tr>';
  thead.innerHTML = headerHtml;

  // Data rows
  let totalCombinations = 0;
  const colTotals = keywords.map(() => 0);
  let rowsHtml = '';

  allCities.forEach(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-star">&#9733;</span>` : m.city;
    const assigned = cityMatrix[m.city] || keywords.map(() => false);
    const rowTotal = assigned.filter(Boolean).length;
    totalCombinations += rowTotal;

    let rowHtml = `<tr>
      <td class="city-row-label">
        <span class="city-tier-inline"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span></span>
        <strong>${cityLabel}</strong>
        <span class="city-pop-small">Pop. ${fmt(m.population)}</span>
      </td>`;
    assigned.forEach((a, ki) => {
      if (a) colTotals[ki]++;
      rowHtml += a ? `<td class="matrix-check">&#10003;</td>` : `<td class="check-na">&#8212;</td>`;
    });
    rowHtml += `<td class="city-total-cell">${rowTotal}</td></tr>`;
    rowsHtml += rowHtml;
  });

  // Totals row
  let totalsRow = '<tr class="grand-total-row"><td class="city-row-label"><strong>Total Combinations</strong></td>';
  colTotals.forEach(t => { totalsRow += `<td class="city-total-cell">${t}</td>`; });
  totalsRow += `<td class="city-total-cell"><strong>${totalCombinations}</strong></td></tr>`;
  tbody.innerHTML = rowsHtml + totalsRow;

  // Grand total bar
  const grandBar = document.getElementById('matrix-grand-total');
  if (grandBar) grandBar.innerHTML = `Grand Total: <strong>${totalCombinations} Combinations</strong>`;
}

// ============================================================
// POPULATE NOT USED SECTION
// ============================================================
function buildNotUsed() {
  const grid = document.getElementById('not-used-grid');
  if (!grid) return;
  const cards = STRATEGY.not_used_groups.map(group => {
    const kwRows = group.keywords.map(kw =>
      `<div class="nu-kw-row">
        <span class="nu-kw-name">${kw.keyword}</span>
        <span class="nu-kw-vol">${fmt(kw.monthly_searches)}</span>
      </div>`
    ).join('');
    return `<div class="not-used-card">
      <div class="nu-reason">${group.reason}</div>
      <p class="nu-desc">${group.description}</p>
      <div class="nu-kw-table">
        <div class="nu-header"><span>Keyword</span><span>Mo. Searches</span></div>
        ${kwRows}
      </div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
  if (STRATEGY.not_used_groups.length === 4) {
    grid.classList.add('grid-2col');
  } else {
    grid.classList.remove('grid-2col');
  }
}

// ============================================================
// POPULATE OPPORTUNITIES SECTION
// ============================================================
function buildOpportunities() {
  const grid = document.getElementById('opportunities-grid');
  if (!grid) return;
  const cards = STRATEGY.additional_opportunities.map((opp, i) => {
    const kwList = opp.keywords.map(kw =>
      `<li>
        <span class="opp-kw">${kw.keyword}</span>
        ${kw.monthly_searches ? `<span class="opp-vol">${fmt(kw.monthly_searches)}</span>` : kw.new_market ? `<span class="opp-vol opp-new-market">New Market</span>` : ''}
      </li>`
    ).join('');
    const highlight = i === 0 ? 'opp-card-highlight' : '';
    return `<div class="opp-card ${highlight}">
      <div class="opp-plan-label">${opp.plan}</div>
      ${opp.price ? `<div class="opp-price">$${fmt(opp.price)}<span class="opp-price-label">/mo</span></div>` : ''}
      <div class="opp-combos-large">${opp.combinations} <span class="opp-combos-label">total combinations</span></div>
      <div class="opp-combos">${opp.additional_combinations} additional combinations from current plan</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <ul class="opp-kw-list"><li class="opp-kw-header"><span>Keyword / Market</span><span>Mo. Searches</span></li>${kwList}</ul>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// BUILD MOBILE MARKET LIST
// ============================================================
const MARKET_DATA = [
  { rank: 1,  city: 'Bellevue',      pop: 151854, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 2,  city: 'Kirkland',      pop:  92175, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Redmond',       pop:  73256, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Sammamish',     pop:  69438, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 5,  city: 'Bothell',       pop:  53200, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 6,  city: 'Issaquah',      pop:  40290, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 7,  city: 'Mercer Island', pop:  25990, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 8,  city: 'Woodinville',   pop:  14000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 9,  city: 'Renton',        pop: 106785, tier: 'Tier 1', selected: false, hq: false },
  { rank: 10, city: 'Kenmore',       pop:  23590, tier: 'Tier 2', selected: false, hq: false },
  { rank: 11, city: 'Maple Valley',  pop:  30000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 12, city: 'Kent',          pop: 136588, tier: 'Tier 1', selected: false, hq: false },
  { rank: 13, city: 'Auburn',        pop:  87256, tier: 'Tier 1', selected: false, hq: false },
  { rank: 14, city: 'Federal Way',   pop:  97701, tier: 'Tier 1', selected: false, hq: false },
  { rank: 15, city: 'Burien',        pop:  52066, tier: 'Tier 2', selected: false, hq: false }
];

function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = MARKET_DATA.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const rowCls = m.selected ? 'mob-mkt-row selected' : 'mob-mkt-row';
    return `<div class="${rowCls}">
      <span class="mob-rank">${m.rank}</span>
      <span class="mob-city">${m.selected ? '<strong>' : ''}${cityLabel}${m.selected ? '</strong>' : ''}</span>
      <span class="mob-pop">${fmt(m.pop)}</span>
      <span class="mob-tier"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span></span>
      ${selIcon}
    </div>`;
  }).join('');
  el.innerHTML = `<div class="mob-mkt-header">
    <span class="mob-rank">#</span>
    <span class="mob-city">Market</span>
    <span class="mob-pop">Pop.</span>
    <span class="mob-tier">Tier</span>
    <span class="mob-sel">&#10003;</span>
  </div>${rows}`;
}

// ============================================================
// BUILD MOBILE MATRIX
// ============================================================
function buildMobileMatrix() {
  const el = document.getElementById('mobile-matrix');
  if (!el) return;
  const keywordCities = {
    "tile store":            ["Bellevue","Kirkland","Redmond","Sammamish","Bothell","Issaquah","Mercer Island"],
    "tile flooring near me": ["Bellevue","Kirkland","Redmond","Sammamish","Bothell","Issaquah","Woodinville"],
    "tile showroom near me": ["Bellevue","Kirkland","Redmond","Sammamish","Issaquah","Mercer Island"]
  };
  const allCities = [
    { city: "Bellevue",      tier: "Tier 1", pop: 151854, is_hq: true  },
    { city: "Kirkland",      tier: "Tier 1", pop:  92175, is_hq: false },
    { city: "Redmond",       tier: "Tier 1", pop:  73256, is_hq: false },
    { city: "Sammamish",     tier: "Tier 1", pop:  69438, is_hq: false },
    { city: "Bothell",       tier: "Tier 1", pop:  53200, is_hq: false },
    { city: "Issaquah",      tier: "Tier 1", pop:  40290, is_hq: false },
    { city: "Mercer Island", tier: "Tier 2", pop:  25990, is_hq: false },
    { city: "Woodinville",   tier: "Tier 2", pop:  14000, is_hq: false }
  ];
  const cards = allCities.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const kwList = Object.entries(keywordCities)
      .filter(([, cities]) => cities.includes(m.city))
      .map(([kw]) => `<div class="mob-matrix-kw"><span class="mob-matrix-check">&#10003;</span><span>${kw}</span></div>`)
      .join('');
    const count = Object.values(keywordCities).filter(cities => cities.includes(m.city)).length;
    return `<div class="mob-matrix-card">
      <div class="mob-matrix-city">
        <span class="mob-matrix-city-name">${cityLabel}</span>
        <span class="mob-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp; Pop. ${fmt(m.pop)}</span>
      </div>
      <div class="mob-matrix-kws">${kwList}</div>
      <div class="mob-matrix-total">${count} combination${count !== 1 ? 's' : ''}</div>
    </div>`;
  }).join('');
  el.innerHTML = cards + `<div class="mob-matrix-grand-total">Grand Total: <strong>20 Combinations</strong></div>`;
}

// ============================================================
// STICKY NAV ACTIVE STATE
// ============================================================
function initStickyNav() {
  const nav = document.getElementById('section-nav');
  if (!nav) return;
  const links = nav.querySelectorAll('a');
  const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-sticky', window.scrollY > 400);
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) current = '#' + section.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === current);
    });
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildMobileMarketList();
  buildMobileMatrix();
  buildNotUsed();
  buildOpportunities();
  initStickyNav();
});
