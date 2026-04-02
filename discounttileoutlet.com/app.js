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

  // ---- STRATEGY MATRIX (variable per-city keyword assignments, total = 30) ----
  matrix: [
    { city: "Bellevue",      state: null, tier: "Tier 1", population: 151854, is_hq: true,  keywords: ["tile store", "tile flooring near me", "tile showroom near me", "hardwood flooring near me"] },
    { city: "Kirkland",      state: null, tier: "Tier 1", population:  92175, is_hq: false, keywords: ["tile store", "tile flooring near me", "tile showroom near me", "hardwood flooring near me"] },
    { city: "Redmond",       state: null, tier: "Tier 1", population:  73256, is_hq: false, keywords: ["tile store", "tile flooring near me", "tile showroom near me", "hardwood flooring near me"] },
    { city: "Sammamish",     state: null, tier: "Tier 1", population:  69438, is_hq: false, keywords: ["tile store", "tile flooring near me", "tile showroom near me", "hardwood flooring near me"] },
    { city: "Bothell",       state: null, tier: "Tier 1", population:  53200, is_hq: false, keywords: ["tile store", "tile flooring near me", "tile showroom near me", "hardwood flooring near me"] },
    { city: "Issaquah",      state: null, tier: "Tier 1", population:  40290, is_hq: false, keywords: ["tile store", "tile flooring near me", "tile showroom near me", "hardwood flooring near me"] },
    { city: "Renton",        state: null, tier: "Tier 1", population: 108429, is_hq: false, keywords: ["tile store", "hardwood flooring near me"] },
    { city: "Mercer Island", state: null, tier: "Tier 2", population:  25990, is_hq: false, keywords: ["tile store", "tile flooring near me", "tile showroom near me"] },
    { city: "Woodinville",   state: null, tier: "Tier 2", population:  14000, is_hq: false, keywords: ["tile flooring near me"] },
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
      headline: "Expand into Kenmore and Maple Valley",
      description: "Adds two growing South King County communities to the strategy. Kenmore sits on the north shore of Lake Washington with a strong residential market and easy access to the Bellevue showroom. Maple Valley is a fast-growing Southeast King County suburb with significant new home construction and renovation demand.",
      markets: [
        { city: "Kenmore, WA",      tier: "Tier 2", population: 23590 },
        { city: "Maple Valley, WA", tier: "Tier 2", population: 30000 }
      ]
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 10,
      headline: "Expand into Kent and Auburn",
      description: "Adds two of King County's largest cities to the strategy. Kent (136,000+) and Auburn (87,000+) represent a massive combined population with strong residential renovation demand. These markets extend Discount Tile Outlet's reach into the South King County corridor and significantly increase the total addressable market.",
      markets: [
        { city: "Kent, WA",   tier: "Tier 1", population: 136588 },
        { city: "Auburn, WA", tier: "Tier 1", population: 87256  }
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
  const blocks = STRATEGY.keyword_tiers.map((tier, i) => {
    const kwRows = tier.keywords.map(kw =>
      `<tr>
        <td class="flat-kw-name">${kw.keyword}</td>
        <td class="flat-kw-vol">${fmt(kw.monthly_searches)}</td>
      </tr>`
    ).join('');
    const colorCls = tierColors[i] || 'kw-tier-1';
    return `<div class="flat-tier-block ${colorCls}">
      <div class="flat-tier-heading">
        <span class="tier-pill ${colorCls.replace('kw-tier-','t')}">${tier.tier_label}</span>
        <span class="flat-tier-name">${tier.tier_name}</span>
        <span class="flat-tier-count">${tier.keywords.length} keyword${tier.keywords.length !== 1 ? 's' : ''} selected</span>
      </div>
      <div class="flat-tier-desc">${tier.description}</div>
      <table class="flat-kw-table">
        <thead><tr><th>Keyword</th><th>Monthly Searches</th></tr></thead>
        <tbody>${kwRows}</tbody>
      </table>
    </div>`;
  }).join('');
  grid.innerHTML = blocks;
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
  const keywords = STRATEGY.selected_keywords;
  const el = document.getElementById('matrix-city-grid');
  if (!el) return;
  // Support both data shapes:
  // Shape A: inline markets[] + STRATEGY.selected_keywords
  // Shape B: STRATEGY.matrix (per-city keyword arrays)
  let cards = '';
  let grandTotal = 0;
  if (typeof STRATEGY.matrix !== 'undefined' && STRATEGY.matrix.length > 0 && STRATEGY.matrix[0].keywords) {
    // Shape B (pinecrest-style)
    STRATEGY.matrix.forEach(m => {
      const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
      const cityLabel = m.city + (m.state ? ', ' + m.state : '');
      const hqStar = m.is_hq ? '<span class="city-card-hq">&#9733;</span>' : '';
      const kwItems = m.keywords.map(kw =>
        `<div class="city-kw-item"><span class="city-kw-check">&#10003;</span><span class="city-kw-name">${kw}</span></div>`
      ).join('');
      grandTotal += m.keywords.length;
      cards += `<div class="city-matrix-card">
        <div class="city-matrix-header">
          <div class="city-matrix-header-top">${hqStar}<span class="city-matrix-name">${cityLabel}</span></div>
          <div class="city-matrix-header-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span><span class="city-matrix-pop">Pop. ${fmt(m.population)}</span></div>
        </div>
        <div class="city-kw-list">${kwItems}</div>
        <div class="city-matrix-footer">${m.keywords.length} combination${m.keywords.length !== 1 ? 's' : ''}</div>
      </div>`;
    });
  } else {
    // Shape A (all other sites) — markets defined inline in buildMatrix
    markets.forEach(m => {
      const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
      const cityLabel = m.city + (m.state ? ', ' + m.state : '');
      const hqStar = m.is_hq ? '<span class="city-card-hq">&#9733;</span>' : '';
      const kwItems = keywords.map(kw =>
        `<div class="city-kw-item"><span class="city-kw-check">&#10003;</span><span class="city-kw-name">${kw}</span></div>`
      ).join('');
      grandTotal += keywords.length;
      cards += `<div class="city-matrix-card">
        <div class="city-matrix-header">
          <div class="city-matrix-header-top">${hqStar}<span class="city-matrix-name">${cityLabel}</span></div>
          <div class="city-matrix-header-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span><span class="city-matrix-pop">Pop. ${fmt(m.population)}</span></div>
        </div>
        <div class="city-kw-list">${kwItems}</div>
        <div class="city-matrix-footer">${keywords.length} combination${keywords.length !== 1 ? 's' : ''}</div>
      </div>`;
    });
  }
  el.innerHTML = cards;
  // Grand total bar
  const gt = document.getElementById('matrix-grand-total');
  if (gt) gt.textContent = 'Grand Total: ' + grandTotal + ' Combinations';
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
    const highlight = i === 0 ? 'opp-card-highlight' : '';
    const marketRows = opp.markets.map(m => {
      const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
      return `<li>
        <span class="opp-kw">${m.city}</span>
        <span class="opp-vol opp-new-market"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp; Pop. ${fmt(m.population)}</span>
      </li>`;
    }).join('');
    return `<div class="opp-card ${highlight}">
      <div class="opp-plan-label">${opp.plan}</div>
      <div class="opp-price">$${fmt(opp.price)}<span class="opp-price-label">/mo</span></div>
      <div class="opp-combos-large">${opp.combinations} <span class="opp-combos-label">total combinations</span></div>
      <div class="opp-combos">${opp.additional_combinations} additional combinations from current plan</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <ul class="opp-kw-list"><li class="opp-kw-header"><span>Market Added</span><span>Tier &amp; Population</span></li>${marketRows}</ul>
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
  { rank: 9,  city: 'Renton',        pop: 108429, tier: 'Tier 1', selected: true,  hq: false },
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
  // Use STRATEGY.matrix directly so mobile and desktop are always in sync
  const cities = STRATEGY.matrix;
  let grandTotal = 0;
  const cards = cities.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const kwList = m.keywords.map(kw =>
      `<div class="mob-matrix-kw"><span class="mob-matrix-check">&#10003;</span><span>${kw}</span></div>`
    ).join('');
    grandTotal += m.keywords.length;
    return `<div class="mob-matrix-card">
      <div class="mob-matrix-city">
        <span class="mob-matrix-city-name">${cityLabel}</span>
        <span class="mob-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp; Pop. ${fmt(m.population)}</span>
      </div>
      <div class="mob-matrix-kws">${kwList}</div>
      <div class="mob-matrix-total">${m.keywords.length} combination${m.keywords.length !== 1 ? 's' : ''}</div>
    </div>`;
  }).join('');
  el.innerHTML = cards + `<div class="mob-matrix-grand-total">Grand Total: <strong>${grandTotal} Combinations</strong></div>`;
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
