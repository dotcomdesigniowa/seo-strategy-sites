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
    "bathroom vanity near me",
    "bathroom cabinets near me"
  ],
  num_selected_keywords: 2,
  num_target_markets: 5,

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
    { keyword: "bathroom cabinets near me",     monthly_searches: 12100, tier: "Tier 1", status: "selected", family: "bathroom cabinets", variant_type: "near_me" },
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
      description: "The two highest-priority service lines for Vanities Etc. Bathroom vanity near me commands 33,100 monthly searches nationally and directly reflects the core product the showroom was built around. Bathroom cabinets near me adds a distinct second service line at 12,100 monthly searches, capturing customers shopping for cabinetry solutions. Both keywords are selected for the SEO Booster plan.",
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
      reason: "Kitchen-Intent Dominated: Not Aligned with Bathroom Showroom",
      description: "These countertop keywords carry very high national search volume, but the majority of searchers are looking for kitchen countertops, not bathroom. Vanities Etc is a bathroom-focused showroom. Targeting these terms would drive mismatched traffic and dilute the strategy. They are excluded to keep the plan tightly aligned with the client's actual customer.",
      keywords: [
        { keyword: "quartz countertops near me",   monthly_searches: 22200 },
        { keyword: "quartz countertops",           monthly_searches: 49500 },
        { keyword: "countertops near me",          monthly_searches: 12100 },
        { keyword: "granite countertops near me",  monthly_searches: 33100 },
      ]
    },
    {
      reason: "Reserved for Plan A: Countertops and Hardware Expansion",
      description: "These high-value keywords represent service lines the client offers but that fall outside the 10-combination limit of the SEO Booster plan. Bathroom countertops and cabinet hardware are the highest-priority additions for a Plan A upgrade, adding 2 new keywords and 10 new combinations.",
      keywords: [
        { keyword: "bathroom countertops near me", monthly_searches:  4400 },
        { keyword: "bathroom vanity showroom",     monthly_searches:  2400 },
        { keyword: "cabinet hardware near me",     monthly_searches:  3600 },
        { keyword: "bathroom hardware near me",    monthly_searches:  1600 },
      ]
    },
    {
      reason: "Reserved for Plan B: Specialty Hardware and Deeper Coverage",
      description: "Drawer pulls and cabinet handles have meaningful search volume but are product-level searches rather than service-line searches. They are best introduced at Plan B when additional combinations allow for dedicated, focused coverage alongside the core vanity and countertop keywords.",
      keywords: [
        { keyword: "drawer pulls near me",     monthly_searches: 1900 },
        { keyword: "cabinet handles near me",  monthly_searches: 1600 },
        { keyword: "bathroom hardware store",  monthly_searches: 1300 },
        { keyword: "cabinet hardware store",   monthly_searches: 2400 },
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
      headline: "Add Countertops and Hardware Across All 5 Markets",
      description: "Upgrading to Plan Level A doubles the combination count to 20, allowing Vanities Etc to add bathroom countertops near me and bathroom vanity showroom as dedicated keywords across all 5 existing markets. This directly targets the showroom's stone and quartz countertop service line, which is prominently featured on the website.",
      new_market: false,
      keywords: [
        { keyword: "bathroom countertops near me", monthly_searches:  4400 },
        { keyword: "bathroom vanity showroom",     monthly_searches:  2400 },
      ]
    },
    {
      plan: "Plan Level B",
      combinations: 30,
      price: 900,
      additional_combinations: 20,
      headline: "Expand to 6 Markets and Add Hardware Coverage",
      description: "Plan Level B adds a sixth market, Shoreline (pop. 57,027), the next largest Eastside community, while also introducing cabinet hardware near me and bathroom hardware near me to capture customers searching for the decorative hardware products available in the showroom.",
      new_market: true,
      keywords: [
        { keyword: "Shoreline, WA",            monthly_searches: null, new_market: true },
        { keyword: "cabinet hardware near me", monthly_searches: 3600 },
        { keyword: "bathroom hardware near me",monthly_searches: 1600 },
      ]
    },
    {
      plan: "Plan Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 30,
      headline: "Full Eastside Market Domination",
      description: "Plan Level C provides the combination count needed to cover all major Eastside communities and introduce specialty hardware keywords. With 40 total combinations, Vanities Etc can target up to 8 cities with a comprehensive keyword suite, achieving dominant visibility across the entire Bellevue Eastside corridor for every core product category offered.",
      new_market: true,
      keywords: [
        { keyword: "Issaquah, WA",             monthly_searches: null, new_market: true },
        { keyword: "Bothell, WA",              monthly_searches: null, new_market: true },
        { keyword: "drawer pulls near me",     monthly_searches: 1900 },
        { keyword: "cabinet handles near me",  monthly_searches: 1600 },
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
  const cards = STRATEGY.keyword_tiers.map((tier, i) => {
    const kwRows = tier.keywords.map(kw =>
      `<div class="kw-row">
        <span class="kw-name">${kw.keyword}</span>
        <span class="kw-vol">${fmt(kw.monthly_searches)}</span>
      </div>`
    ).join('');
    return `<div class="kw-tier-card ${tierColors[i]}">
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
// Markets <= 5: keywords as rows, cities as columns
// ============================================================
function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  const markets = [
    { city: "Bellevue",   tier: "Tier 1", population: 151854, is_hq: true  },
    { city: "Renton",     tier: "Tier 1", population: 108429, is_hq: false },
    { city: "Kirkland",   tier: "Tier 1", population:  92175, is_hq: false },
    { city: "Redmond",    tier: "Tier 1", population:  73256, is_hq: false },
    { city: "Sammamish",  tier: "Tier 1", population:  69224, is_hq: false },
  ];
  const keywords = STRATEGY.selected_keywords;

  // KEYWORDS AS ROWS, CITIES AS COLUMNS (markets <= 5)
  const cityHeaders = markets.map(m =>
    `<th class="total-header" style="text-align:center;">${m.city}${m.is_hq ? ' <span class="hq-tag">HQ</span>' : ''}</th>`
  ).join('');
  thead.innerHTML = `<tr>
    <th style="text-align:left; padding-left:16px; min-width:220px;">Keyword</th>
    ${cityHeaders}
    <th class="total-header">Total</th>
  </tr>`;

  const rows = keywords.map(kw => {
    const checkCells = markets.map(() =>
      `<td style="text-align:center; color:#2ecc71; font-size:1.1rem;">&#10003;</td>`
    ).join('');
    return `<tr>
      <td style="padding-left:16px; font-weight:600;">${kw}</td>
      ${checkCells}
      <td class="city-total-cell">${markets.length}</td>
    </tr>`;
  }).join('');

  const grandTotal = keywords.length * markets.length;
  tbody.innerHTML = rows
    + `<tr class="grand-total-row"><td colspan="${markets.length + 2}" class="grand-total">Grand Total: <strong>${grandTotal} Combinations</strong></td></tr>`;
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
  { rank: 6,  city: 'Shoreline',     pop:  57027, tier: 'Tier 1', selected: false, hq: false },
  { rank: 7,  city: 'Issaquah',      pop:  40051, tier: 'Tier 1', selected: false, hq: false },
  { rank: 8,  city: 'Bothell',       pop:  26920, tier: 'Tier 2', selected: false, hq: false },
  { rank: 9,  city: 'Mercer Island', pop:  26320, tier: 'Tier 2', selected: false, hq: false },
  { rank: 10, city: 'Kenmore',       pop:  24189, tier: 'Tier 2', selected: false, hq: false },
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
    { city: 'Bellevue',   tier: 'Tier 1', pop: 151854, is_hq: true  },
    { city: 'Renton',     tier: 'Tier 1', pop: 108429, is_hq: false },
    { city: 'Kirkland',   tier: 'Tier 1', pop:  92175, is_hq: false },
    { city: 'Redmond',    tier: 'Tier 1', pop:  73256, is_hq: false },
    { city: 'Sammamish',  tier: 'Tier 1', pop:  69224, is_hq: false },
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
