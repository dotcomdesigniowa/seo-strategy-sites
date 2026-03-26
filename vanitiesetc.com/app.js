// ============================================================
// SEO Strategy Website — App.js
// Loads strategy data and populates all dynamic sections
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================

const STRATEGY = {
  client_name: "Vanities Etc",
  industry: "Bathroom Vanity Showroom",
  hq_city: "Bellevue",
  state: "WA",
  service_area: "Bellevue, WA and Surrounding Communities",
  plan_level: "SEO Booster",
  plan_price: 399,
  total_combinations: 10,
  total_keywords_researched: 35,
  selected_keywords: [
    "bathroom vanity near me"
  ],
  num_selected_keywords: 1,
  num_target_markets: 10,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    // Bathroom Vanity family
    { keyword: "bathroom vanity",               monthly_searches: 49500, tier: "Tier 1", status: "not_used", family: "bathroom vanity",   variant_type: "base" },
    { keyword: "bathroom vanity near me",       monthly_searches: 33100, tier: "Tier 1", status: "selected", family: "bathroom vanity",   variant_type: "near_me" },
    { keyword: "bathroom vanities near me",     monthly_searches: 22200, tier: "Tier 1", status: "not_used", family: "bathroom vanity",   variant_type: "near_me" },
    { keyword: "custom bathroom vanity",        monthly_searches:  8100, tier: "Tier 1", status: "not_used", family: "bathroom vanity",   variant_type: "variant" },
    { keyword: "bathroom vanity store",         monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "bathroom vanity",   variant_type: "variant" },
    { keyword: "bathroom vanity showroom",      monthly_searches:  2400, tier: "Tier 1", status: "not_used", family: "bathroom vanity",   variant_type: "variant" },
    { keyword: "bathroom vanity companies near me", monthly_searches: 1600, tier: "Tier 1", status: "not_used", family: "bathroom vanity", variant_type: "near_me" },
    { keyword: "bathroom vanity shop",          monthly_searches:  1300, tier: "Tier 1", status: "not_used", family: "bathroom vanity",   variant_type: "variant" },

    // Bathroom Cabinets family
    { keyword: "bathroom cabinets",             monthly_searches: 33100, tier: "Tier 1", status: "not_used", family: "bathroom cabinets", variant_type: "base" },
    { keyword: "bathroom cabinets near me",     monthly_searches: 12100, tier: "Tier 1", status: "not_used", family: "bathroom cabinets", variant_type: "near_me" },
    { keyword: "custom bathroom cabinets",      monthly_searches:  2900, tier: "Tier 1", status: "not_used", family: "bathroom cabinets", variant_type: "variant" },
    { keyword: "bathroom cabinet store",        monthly_searches:  1900, tier: "Tier 1", status: "not_used", family: "bathroom cabinets", variant_type: "variant" },
    { keyword: "bathroom cabinet showroom",     monthly_searches:   880, tier: "Tier 1", status: "not_used", family: "bathroom cabinets", variant_type: "variant" },

    // Bathroom Countertops family
    { keyword: "bathroom countertops",          monthly_searches: 14800, tier: "Tier 2", status: "not_used", family: "bathroom countertops", variant_type: "base" },
    { keyword: "bathroom countertops near me",  monthly_searches:  4400, tier: "Tier 2", status: "not_used", family: "bathroom countertops", variant_type: "near_me" },
    { keyword: "bathroom countertop store",     monthly_searches:   590, tier: "Tier 2", status: "not_used", family: "bathroom countertops", variant_type: "variant" },

    // Bathroom Hardware family
    { keyword: "bathroom hardware",             monthly_searches: 12100, tier: "Tier 2", status: "not_used", family: "bathroom hardware", variant_type: "base" },
    { keyword: "bathroom hardware near me",     monthly_searches:  1600, tier: "Tier 2", status: "not_used", family: "bathroom hardware", variant_type: "near_me" },
    { keyword: "bathroom hardware store",       monthly_searches:  1300, tier: "Tier 2", status: "not_used", family: "bathroom hardware", variant_type: "variant" },

    // Cabinet Hardware family
    { keyword: "cabinet hardware",              monthly_searches: 22200, tier: "Tier 2", status: "not_used", family: "cabinet hardware",  variant_type: "base" },
    { keyword: "cabinet hardware near me",      monthly_searches:  3600, tier: "Tier 2", status: "not_used", family: "cabinet hardware",  variant_type: "near_me" },
    { keyword: "cabinet hardware store",        monthly_searches:  2400, tier: "Tier 2", status: "not_used", family: "cabinet hardware",  variant_type: "variant" },

    // Drawer Pulls family
    { keyword: "drawer pulls",                  monthly_searches: 27100, tier: "Tier 3", status: "not_used", family: "drawer pulls",      variant_type: "base" },
    { keyword: "drawer pulls near me",          monthly_searches:  1900, tier: "Tier 3", status: "not_used", family: "drawer pulls",      variant_type: "near_me" },

    // Cabinet Handles family
    { keyword: "cabinet handles",               monthly_searches: 22200, tier: "Tier 3", status: "not_used", family: "cabinet handles",   variant_type: "base" },
    { keyword: "cabinet handles near me",       monthly_searches:  1600, tier: "Tier 3", status: "not_used", family: "cabinet handles",   variant_type: "near_me" },

    // Quartz Countertops family
    { keyword: "quartz countertops",            monthly_searches: 49500, tier: "Tier 3", status: "not_used", family: "quartz countertops", variant_type: "base" },
    { keyword: "quartz countertops near me",    monthly_searches: 22200, tier: "Tier 3", status: "not_used", family: "quartz countertops", variant_type: "near_me" },
    { keyword: "quartz bathroom countertops",   monthly_searches:  2400, tier: "Tier 3", status: "not_used", family: "quartz countertops", variant_type: "variant" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Bathroom Vanities and Cabinets",
      description: "The single highest-priority service line for Vanities Etc. Bathroom vanity near me commands 33,100 monthly searches nationally and directly reflects the core product the showroom was built around. This keyword is selected for the SEO Booster plan and deployed across all 10 markets. Bathroom cabinets near me (12,100/mo) is the top candidate for Plan Level A expansion.",
      keywords: [
        { keyword: "bathroom vanity near me",   monthly_searches: 33100 },
        { keyword: "bathroom vanity",           monthly_searches: 49500 },
        { keyword: "bathroom vanities near me", monthly_searches: 22200 },
        { keyword: "bathroom cabinets near me", monthly_searches: 12100 },
        { keyword: "bathroom cabinets",         monthly_searches: 33100 },
        { keyword: "custom bathroom vanity",    monthly_searches:  8100 },
        { keyword: "bathroom vanity store",     monthly_searches:  5400 },
        { keyword: "custom bathroom cabinets",  monthly_searches:  2900 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Countertops and Hardware",
      description: "Supporting service lines that Vanities Etc offers in their showroom. Bathroom countertops (14,800/mo) and cabinet hardware (22,200/mo) represent strong expansion opportunities. These keywords are reserved for Plan A and Plan B upgrades, where additional combinations allow dedicated coverage for each service line.",
      keywords: [
        { keyword: "bathroom countertops",          monthly_searches: 14800 },
        { keyword: "cabinet hardware",              monthly_searches: 22200 },
        { keyword: "bathroom hardware",             monthly_searches: 12100 },
        { keyword: "bathroom countertops near me",  monthly_searches:  4400 },
        { keyword: "cabinet hardware near me",      monthly_searches:  3600 },
        { keyword: "bathroom hardware near me",     monthly_searches:  1600 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Specialty Hardware and Stone",
      description: "Niche but relevant product categories available in the showroom. Drawer pulls (27,100/mo) and cabinet handles (22,200/mo) have strong national volume but are secondary to the core vanity and cabinet service lines. Quartz countertops is noted but carries predominantly kitchen-intent nationally and is deprioritized for this bathroom-focused showroom.",
      keywords: [
        { keyword: "drawer pulls",              monthly_searches: 27100 },
        { keyword: "cabinet handles",           monthly_searches: 22200 },
        { keyword: "quartz countertops",        monthly_searches: 49500 },
        { keyword: "quartz countertops near me",monthly_searches: 22200 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Reserved for Plan A: Second Keyword Expansion",
      description: "These vanity-adjacent keywords represent the strongest candidates for adding a second keyword slot at Plan Level A. Bathroom cabinets near me (12,100/mo) is the top priority, as it covers a distinct product line available in the showroom. Bathroom vanity showroom and bathroom countertops near me are also strong Plan A additions.",
      keywords: [
        { keyword: "bathroom cabinets near me",    monthly_searches: 12100 },
        { keyword: "bathroom vanity showroom",     monthly_searches:  2400 },
        { keyword: "bathroom countertops near me", monthly_searches:  4400 },
      ]
    },
    {
      reason: "Reserved for Plan B: Hardware and Countertop Expansion",
      description: "Cabinet hardware and bathroom hardware represent product categories available in the showroom. These keywords are best introduced at Plan B when additional combinations allow dedicated coverage alongside the core vanity keyword.",
      keywords: [
        { keyword: "cabinet hardware near me",  monthly_searches: 3600 },
        { keyword: "bathroom hardware near me", monthly_searches: 1600 },
        { keyword: "drawer pulls near me",      monthly_searches: 1900 },
        { keyword: "cabinet handles near me",   monthly_searches: 1600 },
      ]
    },
    {
      reason: "Kitchen-Intent Dominated: Not Aligned with Bathroom Showroom",
      description: "These countertop keywords carry very high national search volume, but the majority of searchers are looking for kitchen countertops, not bathroom. Vanities Etc is a bathroom-focused showroom. Targeting these terms would drive mismatched traffic and dilute the strategy.",
      keywords: [
        { keyword: "quartz countertops near me",  monthly_searches: 22200 },
        { keyword: "quartz countertops",          monthly_searches: 49500 },
        { keyword: "countertops near me",         monthly_searches: 12100 },
        { keyword: "granite countertops near me", monthly_searches: 33100 },
      ]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Plan Level A",
      combinations: 20,
      price: 600,
      additional_combinations: 10,
      headline: "Add a Second Keyword Across All 10 Markets",
      description: "Upgrading to Plan Level A adds a second keyword slot, allowing Vanities Etc to target bathroom cabinets near me (12,100/mo) across all 10 existing markets. This directly opens a second service line while maintaining full geographic coverage, doubling the total combination count without adding any new markets.",
      new_market: false,
      keywords: [
        { keyword: "bathroom cabinets near me", monthly_searches: 12100 },
      ]
    },
    {
      plan: "Plan Level B",
      combinations: 30,
      price: 900,
      additional_combinations: 20,
      headline: "Add a Third Keyword and Deeper Service Coverage",
      description: "Plan Level B introduces a third keyword, bathroom countertops near me (4,400/mo), targeting the stone and quartz countertop service line prominently featured in the showroom. With 30 total combinations, Vanities Etc covers 3 distinct product lines across 10 markets.",
      new_market: false,
      keywords: [
        { keyword: "bathroom countertops near me", monthly_searches: 4400 },
        { keyword: "bathroom vanity showroom",     monthly_searches: 2400 },
      ]
    },
    {
      plan: "Plan Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 30,
      headline: "Add Hardware Keywords and Full Product Category Coverage",
      description: "Plan Level C introduces cabinet hardware near me and bathroom hardware near me, capturing customers searching for the decorative hardware products available in the showroom. With 40 total combinations, Vanities Etc achieves comprehensive visibility across all core product categories for every market in the strategy.",
      new_market: false,
      keywords: [
        { keyword: "cabinet hardware near me",  monthly_searches: 3600 },
        { keyword: "bathroom hardware near me", monthly_searches: 1600 },
        { keyword: "drawer pulls near me",      monthly_searches: 1900 },
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
  if (status === 'near_me') return `<span class="status-badge status-near-me" title="${note}">Near Me Variant</span>`;
  return '<span class="status-badge status-not-used">Not Used</span>';
}

function tierPill(label) {
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
      if (rankType(a.variant_type) !== rankType(b.variant_type)) {
        return rankType(a.variant_type) - rankType(b.variant_type);
      }
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
// Markets <= 5: keywords as rows, cities as columns
// ============================================================
function buildMatrix() {
  const markets = [
      { city: "Bellevue",      tier: "Tier 1", population: 151854, is_hq: true  },
      { city: "Renton",        tier: "Tier 1", population: 108429, is_hq: false },
      { city: "Kirkland",      tier: "Tier 1", population:  92175, is_hq: false },
      { city: "Redmond",       tier: "Tier 1", population:  73256, is_hq: false },
      { city: "Sammamish",     tier: "Tier 1", population:  69224, is_hq: false },
      { city: "Shoreline",     tier: "Tier 1", population:  57027, is_hq: false },
      { city: "Issaquah",      tier: "Tier 1", population:  40051, is_hq: false },
      { city: "Bothell",       tier: "Tier 2", population:  26920, is_hq: false },
      { city: "Mercer Island", tier: "Tier 2", population:  26320, is_hq: false },
      { city: "Kenmore",       tier: "Tier 2", population:  24189, is_hq: false },
    ];
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
          ${hqStar}<span class="city-matrix-name">${cityLabel}</span>
          <span class="city-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> Pop. ${fmt(m.population)}</span>
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
          ${hqStar}<span class="city-matrix-name">${cityLabel}</span>
          <span class="city-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> Pop. ${fmt(m.population)}</span>
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
    const kwList = opp.keywords.map(kw =>
      `<li>
        <span class="opp-kw">${kw.keyword}</span>
        ${kw.monthly_searches ? `<span class="opp-vol">${fmt(kw.monthly_searches)}</span>` : kw.new_market ? `<span class="opp-vol opp-new-market">New Market</span>` : ''}
      </li>`
    ).join('');
    const highlight = i === 0 ? 'opp-card-highlight' : '';
    const newMarketDiv = opp.new_market
      ? `<div class="opp-new-market">+ New Market Added</div>`
      : `<div class="opp-new-market" style="visibility:hidden"></div>`;
    return `<div class="opp-card ${highlight}">
      <div class="opp-plan-label">${opp.plan}</div>
      <div class="opp-price">$${fmt(opp.price)}<span class="opp-price-label">/mo</span></div>
      <div class="opp-combos-large">${opp.combinations} <span class="opp-combos-label">total combinations</span></div>
      <div class="opp-combos">${opp.additional_combinations} additional combinations from current plan</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      ${newMarketDiv}
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
  { rank: 2,  city: 'Renton',        pop: 108429, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Kirkland',      pop:  92175, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Redmond',       pop:  73256, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 5,  city: 'Sammamish',     pop:  69224, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 6,  city: 'Shoreline',     pop:  57027, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 7,  city: 'Issaquah',      pop:  40051, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 8,  city: 'Bothell',       pop:  26920, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 9,  city: 'Mercer Island', pop:  26320, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 10, city: 'Kenmore',       pop:  24189, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 11, city: 'Woodinville',   pop:  13341, tier: 'Tier 2', selected: false, hq: false },
];

function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = MARKET_DATA.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const popStr = m.pop ? fmt(m.pop) : '<10,000';
    const rowCls = m.selected ? 'mob-mkt-row selected' : 'mob-mkt-row';
    return `<div class="${rowCls}">
      <span class="mob-rank">${m.rank}</span>
      <span class="mob-city">${m.selected ? '<strong>' : ''}${cityLabel}${m.selected ? '</strong>' : ''}</span>
      <span class="mob-pop">${m.pop !== null ? popStr : ''}</span>
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
  const markets = [
    { city: 'Bellevue',      tier: 'Tier 1', pop: 151854, is_hq: true  },
    { city: 'Renton',        tier: 'Tier 1', pop: 108429, is_hq: false },
    { city: 'Kirkland',      tier: 'Tier 1', pop:  92175, is_hq: false },
    { city: 'Redmond',       tier: 'Tier 1', pop:  73256, is_hq: false },
    { city: 'Sammamish',     tier: 'Tier 1', pop:  69224, is_hq: false },
    { city: 'Shoreline',     tier: 'Tier 1', pop:  57027, is_hq: false },
    { city: 'Issaquah',      tier: 'Tier 1', pop:  40051, is_hq: false },
    { city: 'Bothell',       tier: 'Tier 2', pop:  26920, is_hq: false },
    { city: 'Mercer Island', tier: 'Tier 2', pop:  26320, is_hq: false },
    { city: 'Kenmore',       tier: 'Tier 2', pop:  24189, is_hq: false },
  ];
  const keywords = STRATEGY.selected_keywords;
  const cards = markets.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : 't2';
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const kwList = keywords.map(kw =>
      `<div class="mob-matrix-kw"><span class="mob-matrix-check">&#10003;</span><span>${kw}</span></div>`
    ).join('');
    return `<div class="mob-matrix-card">
      <div class="mob-matrix-city">
        <span class="mob-matrix-city-name">${cityLabel}</span>
        <span class="mob-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp; Pop. ${fmt(m.pop)}</span>
      </div>
      <div class="mob-matrix-kws">${kwList}</div>
      <div class="mob-matrix-total">${keywords.length} combinations</div>
    </div>`;
  }).join('');
  el.innerHTML = cards + `<div class="mob-matrix-grand-total">Grand Total: <strong>${keywords.length * markets.length} Combinations</strong></div>`;
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
    if (window.scrollY > 400) {
      nav.classList.add('nav-sticky');
    } else {
      nav.classList.remove('nav-sticky');
    }
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = '#' + section.id;
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

  (function() {
    var grid = document.querySelector('.kw-tier-grid');
    if (!grid) return;
    var count = grid.querySelectorAll('.kw-tier-card').length;
    if (count > 0) grid.style.gridTemplateColumns = 'repeat(' + count + ', 1fr)';
  })();
});
