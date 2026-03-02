// ============================================================
// SEO Strategy Website — App.js
// Loads strategy data and populates all dynamic sections
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================

const STRATEGY = {
  client_name: "Durham's Tree Service",
  industry: "Tree Service",
  hq_city: "Winter Haven",
  state: "FL",
  service_area: "Polk County, FL",
  plan_level: "Level C",
  plan_price: 1200,
  total_combinations: 40,
  total_keywords_researched: 189,
  // Selected keywords: one from each service line enforced
  // Core tree service, trimming/pruning, stump, demolition, emergency
  selected_keywords: [
    "tree service",
    "tree removal",
    "tree trimming",
    "stump removal",
    "stump grinding",
    "demolition contractors",
    "emergency tree removal",
    "tree pruning"
  ],
  num_selected_keywords: 8,
  num_target_markets: 5,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    { keyword: "tree service near me",       monthly_searches: 49500, tier: "Tier 1", status: "near_me",  note: "Equivalent to 'tree service'" },
    { keyword: "tree removal near me",        monthly_searches: 33100, tier: "Tier 1", status: "near_me",  note: "Equivalent to 'tree removal'" },
    { keyword: "tree removal",               monthly_searches: 33100, tier: "Tier 1", status: "selected", note: "" },
    { keyword: "tree service",               monthly_searches: 33100, tier: "Tier 1", status: "selected", note: "" },
    { keyword: "tree trimming near me",      monthly_searches: 22200, tier: "Tier 1", status: "near_me",  note: "Equivalent to 'tree trimming'" },
    { keyword: "tree trimming",              monthly_searches: 22200, tier: "Tier 1", status: "selected", note: "" },
    { keyword: "tree pruning",               monthly_searches: 14800, tier: "Tier 1", status: "selected", note: "" },
    { keyword: "stump removal",              monthly_searches: 14800, tier: "Tier 2", status: "selected", note: "" },
    { keyword: "stump grinding",             monthly_searches: 14800, tier: "Tier 2", status: "selected", note: "" },
    { keyword: "tree stump removal",         monthly_searches: 14800, tier: "Tier 2", status: "not_used", note: "" },
    { keyword: "tree removal service",       monthly_searches: 14800, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "tree care",                  monthly_searches: 12100, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "tree cutting service",       monthly_searches: 12100, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "stump grinding near me",     monthly_searches: 12100, tier: "Tier 2", status: "near_me",  note: "Equivalent to 'stump grinding'" },
    { keyword: "tree care services",         monthly_searches:  9900, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "tree trimming service",      monthly_searches:  9900, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "tree removal cost",          monthly_searches:  8100, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "emergency tree removal",     monthly_searches:  8100, tier: "Tier 4", status: "selected", note: "" },
    { keyword: "tree removers",              monthly_searches:  8100, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "stump removal near me",      monthly_searches:  6600, tier: "Tier 2", status: "near_me",  note: "Equivalent to 'stump removal'" },
    { keyword: "tree removal companies",     monthly_searches:  6600, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "demolition contractors",     monthly_searches:  6600, tier: "Tier 3", status: "selected", note: "" },
    { keyword: "tree trimmers near me",      monthly_searches:  6600, tier: "Tier 1", status: "near_me",  note: "Equivalent to 'tree trimming'" },
    { keyword: "tree trimming services",     monthly_searches:  5400, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "tree removal services",      monthly_searches:  5400, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "tree pruning near me",       monthly_searches:  5400, tier: "Tier 1", status: "near_me",  note: "Equivalent to 'tree pruning'" },
    { keyword: "emergency tree service",     monthly_searches:  4400, tier: "Tier 4", status: "not_used", note: "" },
    { keyword: "tree care near me",          monthly_searches:  4400, tier: "Tier 1", status: "near_me",  note: "Equivalent to 'tree care'" },
    { keyword: "tree pruning service",       monthly_searches:  3600, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "stump removal cost",         monthly_searches:  3600, tier: "Tier 2", status: "not_used", note: "" },
    { keyword: "demolition services",        monthly_searches:  2900, tier: "Tier 3", status: "not_used", note: "" },
    { keyword: "tree care service",          monthly_searches:  2900, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "tree removal company",       monthly_searches:  2900, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "tree trimmers",              monthly_searches:  2400, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "tree companies",             monthly_searches:  1900, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "tree service companies",     monthly_searches:  1600, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "fallen tree removal",        monthly_searches:  1600, tier: "Tier 4", status: "not_used", note: "" },
    { keyword: "tree cutters",              monthly_searches:  1300, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "storm damage tree removal",  monthly_searches:  1000, tier: "Tier 4", status: "not_used", note: "" },
    { keyword: "tree removers near me",      monthly_searches:   880, tier: "Tier 1", status: "near_me",  note: "Equivalent to 'tree removers'" },
    { keyword: "tree service contractors",   monthly_searches:   720, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "tree removal contractors",   monthly_searches:   590, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "limb removal",               monthly_searches:   140, tier: "Tier 1", status: "not_used", note: "" },
    { keyword: "bucket truck tree service",  monthly_searches:   110, tier: "Tier 1", status: "not_used", note: "" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Core Tree & Pruning Services",
      description: "Broad, high-intent keywords that reflect the primary services customers search for when looking to hire a tree service provider. These are the bread-and-butter terms: high volume, high conversion, and versatile across all markets. We prioritize these across the majority of cities in the final strategy.",
      keywords: [
        { keyword: "tree service",          monthly_searches: 33100 },
        { keyword: "tree removal",          monthly_searches: 33100 },
        { keyword: "tree trimming",         monthly_searches: 22200 },
        { keyword: "tree pruning",          monthly_searches: 14800 },
        { keyword: "tree removal service",  monthly_searches: 14800 },
        { keyword: "tree cutting service",  monthly_searches: 12100 },
        { keyword: "tree removal companies",monthly_searches:  6600 },
        { keyword: "tree removal company",  monthly_searches:  2900 },
        { keyword: "tree trimmers",         monthly_searches:  2400 },
        { keyword: "tree service companies",monthly_searches:  1600 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Stump Removal & Grinding",
      description: "Service-specific keywords for stump removal and grinding. Customers searching these terms have a very specific, immediate need: high conversion potential. These keywords are distinct enough from general tree service terms to warrant their own tier and dedicated content.",
      keywords: [
        { keyword: "stump removal",      monthly_searches: 14800 },
        { keyword: "stump grinding",     monthly_searches: 14800 },
        { keyword: "tree stump removal", monthly_searches: 14800 },
        { keyword: "stump removal cost", monthly_searches:  3600 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Demolition Services",
      description: "Keywords targeting Durham's Tree Service's structural demolition services. These represent a distinct service vertical with strong commercial intent. One demolition keyword is included in the current plan to establish initial visibility; additional coverage is reserved for plan expansion.",
      keywords: [
        { keyword: "demolition contractors", monthly_searches: 6600 },
        { keyword: "demolition services",    monthly_searches: 2900 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Emergency & Storm Services",
      description: "High-urgency, high-intent keywords for emergency tree removal and storm damage cleanup. These terms target customers with immediate needs and a strong propensity to call. One emergency keyword is included in the current plan; dedicated content pages for the full emergency service line are prioritized for the next plan upgrade.",
      keywords: [
        { keyword: "emergency tree removal",    monthly_searches: 8100 },
        { keyword: "emergency tree service",    monthly_searches: 4400 },
        { keyword: "fallen tree removal",       monthly_searches: 1600 },
        { keyword: "storm damage tree removal", monthly_searches: 1000 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Exceeds Current Plan Capacity",
      description: "These high-value keywords were identified and validated but could not be included within the 40-combination limit of the Level C plan. They are the first candidates for inclusion upon upgrading to Level D or higher.",
      keywords: [
        { keyword: "tree stump removal",     monthly_searches: 14800 },
        { keyword: "tree removal service",   monthly_searches: 14800 },
        { keyword: "tree care",              monthly_searches: 12100 },
        { keyword: "tree cutting service",   monthly_searches: 12100 },
        { keyword: "tree removal cost",      monthly_searches:  8100 },
        { keyword: "tree removers",          monthly_searches:  8100 },
        { keyword: "tree removal companies", monthly_searches:  6600 },
        { keyword: "tree trimming services", monthly_searches:  5400 },
        { keyword: "tree removal services",  monthly_searches:  5400 },
        { keyword: "tree pruning service",   monthly_searches:  3600 },
        { keyword: "stump removal cost",     monthly_searches:  3600 },
        { keyword: "tree removal company",   monthly_searches:  2900 },
        { keyword: "tree trimmers",          monthly_searches:  2400 },
        { keyword: "tree service companies", monthly_searches:  1600 },
        { keyword: "tree service contractors",monthly_searches:  720 },
      ]
    },
    {
      reason: "Demolition Services: Reserved for Targeted Expansion",
      description: "Demolition-related keywords represent a distinct service vertical. One keyword has been included in the current plan to establish initial visibility. The remaining terms are reserved for a dedicated expansion tier where they can receive proper, focused coverage.",
      keywords: [
        { keyword: "demolition services", monthly_searches: 2900 },
      ]
    },
    {
      reason: "Emergency and Storm Services: Reserved for Targeted Expansion",
      description: "Emergency and storm-related keywords carry high urgency and conversion potential. One keyword has been included in the current plan. The remaining terms are best served with dedicated content pages and are prioritized for the next plan upgrade.",
      keywords: [
        { keyword: "emergency tree service",    monthly_searches: 4400 },
        { keyword: "fallen tree removal",       monthly_searches: 1600 },
        { keyword: "storm damage tree removal", monthly_searches: 1000 },
      ]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 10,
      headline: "Deeper Service Coverage Across All Markets",
      description: "Upgrading to Level D adds 10 additional keyword-city combinations, allowing Durham's Tree Service to introduce dedicated coverage for high-value keywords currently outside the plan's capacity. This is the most strategic next step for expanding reach without adding new markets.",
      keywords: [
        { keyword: "tree stump removal",   monthly_searches: 14800 },
        { keyword: "tree cutting service", monthly_searches: 12100 },
        { keyword: "tree removal cost",    monthly_searches:  8100 },
        { keyword: "demolition services",  monthly_searches:  2900 },
      ]
    },
    {
      plan: "Level E",
      combinations: 60,
      price: 2000,
      additional_combinations: 20,
      headline: "Add a Sixth Market and Broader Keyword Coverage",
      description: "Level E opens the door to a sixth target market, Bartow (pop. 19,801), the Polk County seat, while also adding deeper coverage for emergency services and additional tree care keywords across all existing markets.",
      keywords: [
        { keyword: "emergency tree service",  monthly_searches: 4400 },
        { keyword: "tree removal companies",  monthly_searches: 6600 },
        { keyword: "tree removal service",    monthly_searches: 14800 },
        { keyword: "Bartow, FL", monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level F",
      combinations: 90,
      price: 3000,
      additional_combinations: 50,
      headline: "Full Polk County Domination",
      description: "Level F provides the coverage needed to dominate all major Polk County markets. With 90 total combinations, Durham's Tree Service can target up to 9 cities with a full suite of keywords, achieving comprehensive visibility across the entire county for every core service offered.",
      keywords: [
        { keyword: "Auburndale, FL",    monthly_searches: null, new_market: true },
        { keyword: "Lake Wales, FL",     monthly_searches: null, new_market: true },
        { keyword: "Highland City, FL",  monthly_searches: null, new_market: true },
        { keyword: "tree removal companies",  monthly_searches: 6600 },
        { keyword: "tree trimmers",           monthly_searches: 2400 },
        { keyword: "tree service contractors",monthly_searches:  720 },
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
  const rows = STRATEGY.keyword_table.map(kw => {
    const rowClass = kw.status === 'selected' ? 'row-selected' : kw.status === 'near_me' ? 'row-near-me' : '';
    return `<tr class="${rowClass}">
      <td>${kw.keyword}</td>
      <td class="num-col">${fmt(kw.monthly_searches)}</td>
      <td>${tierPill(kw.tier)}</td>
      <td>${statusBadge(kw.status, kw.note)}</td>
    </tr>`;
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
      <div class="kw-tier-divider"></div>
      <div class="kw-tier-table">
        <div class="kw-row kw-header">
          <span class="kw-name">Keyword</span>
          <span class="kw-vol">Monthly Searches</span>
        </div>
        ${kwRows}
      </div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// POPULATE MATRIX TABLE
// ============================================================
function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  const markets = [
    { city: "Lakeland",      tier: "Tier 1", population: 112142, is_hq: false },
    { city: "Poinciana",     tier: "Tier 1", population:  72545, is_hq: false },
    { city: "Fuller Heights",tier: "Tier 1", population:  60443, is_hq: false },
    { city: "Winter Haven",  tier: "Tier 1", population:  52846, is_hq: true  },
    { city: "Haines City",   tier: "Tier 2", population:  31156, is_hq: false },
  ];
  const keywords = STRATEGY.selected_keywords;

  // Build header row 1: tier pills
  const tierCells = markets.map(m => {
    const cls = m.tier === 'Tier 1' ? 't1' : 't2';
    return `<th><span class="tier-pill ${cls} nowrap">${m.tier.toUpperCase()}</span></th>`;
  }).join('');

  // Build header row 2: city names
  const cityCells = markets.map(m =>
    `<th class="city-header">${m.city}${m.is_hq ? ' <span class="hq-star">&#9733;</span>' : ''}<br><span class="city-pop-small">Pop. ${fmt(m.population)}</span></th>`
  ).join('');

  thead.innerHTML = `<tr><th class="kw-col-header">Keyword</th>${tierCells}</tr><tr><th></th>${cityCells}</tr>`;

  // Build keyword rows
  const rows = keywords.map(kw => {
    const cells = markets.map(() => '<td class="check-cell">&#10003;</td>').join('');
    return `<tr><td class="kw-cell">${kw}</td>${cells}</tr>`;
  }).join('');

  // Total row
  const totalCells = markets.map(() => `<td class="total-cell">${keywords.length}</td>`).join('');
  const grandTotal = keywords.length * markets.length;
  tbody.innerHTML = rows
    + `<tr class="total-row"><td class="total-label">Total Combinations</td>${totalCells}</tr>`
    + `<tr class="grand-total-row"><td colspan="${markets.length + 1}" class="grand-total">Grand Total: <strong>${grandTotal} Combinations</strong></td></tr>`;
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
      <div class="nu-divider"></div>
      <div class="nu-kw-table">
        <div class="nu-kw-row nu-header">
          <span class="nu-kw-name">Keyword</span>
          <span class="nu-kw-vol">Monthly Searches</span>
        </div>
        ${kwRows}
      </div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// POPULATE OPPORTUNITIES SECTION
// ============================================================
function buildOpportunities() {
  const grid = document.getElementById('opportunities-grid');
  if (!grid) return;
  const cards = STRATEGY.additional_opportunities.map((opp, i) => {
    const kwHeader = `<li class="opp-kw-header">
        <span class="opp-kw-col-label">KEYWORD</span>
        <span class="opp-kw-col-label" style="text-align:right">MONTHLY SEARCHES</span>
      </li>`;
    const kwList = kwHeader + opp.keywords.map(kw =>
      `<li>
        <span class="opp-kw">${kw.keyword}</span>
        ${kw.monthly_searches ? `<span class="opp-vol">${fmt(kw.monthly_searches)}</span>` : kw.new_market ? `<span class="opp-vol opp-new-market">New Market</span>` : ''}
      </li>`
    ).join('');
    const highlight = i === 0 ? 'opp-card-highlight' : '';
    return `<div class="opp-card ${highlight}">
      ${i === 0 ? '<div class="opp-recommended">RECOMMENDED NEXT STEP</div>' : '<div class="opp-recommended-spacer"></div>'}
      <div class="opp-plan-label">${opp.plan}</div>
      <div class="opp-price">$${fmt(opp.price)}<span class="opp-price-mo">/mo</span></div>
      <div class="opp-combos">${opp.combinations} total combinations<br><span class="opp-add">(+${opp.additional_combinations} from current plan)</span></div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <ul class="opp-kw-list">${kwList}</ul>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// BUILD MOBILE MARKET LIST
// ============================================================
const MARKET_DATA = [
  { rank: 1,  city: 'Lakeland',         pop: 112142, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2,  city: 'Poinciana',        pop:  72545, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Fuller Heights',   pop:  60443, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Winter Haven',     pop:  52846, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 5,  city: 'Haines City',      pop:  31156, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 6,  city: 'Bartow',           pop:  19801, tier: 'Tier 2', selected: false, hq: false },
  { rank: 7,  city: 'Auburndale',       pop:  17438, tier: 'Tier 2', selected: false, hq: false },
  { rank: 8,  city: 'Lake Wales',       pop:  16365, tier: 'Tier 2', selected: false, hq: false },
  { rank: 9,  city: 'Highland City',    pop:  12732, tier: 'Tier 2', selected: false, hq: false },
  { rank: 10, city: 'Medulla',          pop:  11712, tier: 'Tier 2', selected: false, hq: false },
  { rank: 11, city: 'Lakeland Highlands',pop: 11669, tier: 'Tier 2', selected: false, hq: false },
  { rank: 12, city: 'Davenport',        pop:  11660, tier: 'Tier 2', selected: false, hq: false },
  { rank: 13, city: 'Cypress Gardens',  pop:  10013, tier: 'Tier 2', selected: false, hq: false },
  { rank: '14-35', city: 'Winston, Loughman, Lake Alfred, Kathleen, Dundee, Fort Meade, Mulberry, Eagle Lake, Frostproof + 13 more', pop: null, tier: 'Tier 3', selected: false, hq: false },
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
    { city: 'Lakeland',       tier: 'Tier 1', pop: 112142, is_hq: false },
    { city: 'Poinciana',      tier: 'Tier 1', pop:  72545, is_hq: false },
    { city: 'Fuller Heights', tier: 'Tier 1', pop:  60443, is_hq: false },
    { city: 'Winter Haven',   tier: 'Tier 1', pop:  52846, is_hq: true  },
    { city: 'Haines City',    tier: 'Tier 2', pop:  31156, is_hq: false },
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
});
