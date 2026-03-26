// ============================================================
// SEO Strategy Website — App.js
// Insurance Prep Solutions — Plan Level C (40 Combinations)
// Loads strategy data and populates all dynamic sections
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================

const STRATEGY = {
  client_name: "Insurance Prep Solutions",
  industry: "Insurance",
  hq_city: "Rancho Cucamonga",
  state: "CA",
  service_area: "San Bernardino County & Riverside County, CA",
  plan_level: "Level C",
  plan_price: 1200,
  total_combinations: 40,
  total_keywords_researched: 248,
  // Selected keywords: covering personal lines, commercial lines, life insurance, agent/broker
  selected_keywords: [
    "Insurance Agent",
    "Homeowners Insurance",
    "Business Insurance",
    "Life Insurance",
    "Insurance Agency",
    "Renters Insurance",
    "Auto Insurance Agent",
    "Commercial Insurance"
  ],
  num_selected_keywords: 8,
  num_target_markets: 5,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    // Insurance Agent family
    { keyword: "insurance agent",                 monthly_searches: 74000, tier: "Tier 1", status: "selected", family: "insurance agent",      variant_type: "base" },
    { keyword: "insurance agent near me",         monthly_searches: 33100, tier: "Tier 1", status: "near_me",  family: "insurance agent",      variant_type: "near_me" },
    { keyword: "insurance agents near me",        monthly_searches: 22200, tier: "Tier 1", status: "near_me",  family: "insurance agent",      variant_type: "near_me" },
    { keyword: "independent insurance agent",     monthly_searches:  4400, tier: "Tier 1", status: "not_used", family: "insurance agent",      variant_type: "variant" },
    { keyword: "independent insurance agent near me", monthly_searches: 2400, tier: "Tier 1", status: "not_used", family: "insurance agent", variant_type: "near_me" },
    { keyword: "life insurance agent",            monthly_searches:  6600, tier: "Tier 1", status: "not_used", family: "insurance agent",      variant_type: "variant" },
    { keyword: "life insurance agent near me",    monthly_searches:  1600, tier: "Tier 1", status: "not_used", family: "insurance agent",      variant_type: "near_me" },
    // Insurance Agency family
    { keyword: "insurance agency",                monthly_searches: 90500, tier: "Tier 1", status: "selected", family: "insurance agency",     variant_type: "base" },
    { keyword: "insurance agency near me",        monthly_searches: 22200, tier: "Tier 1", status: "near_me",  family: "insurance agency",     variant_type: "near_me" },
    { keyword: "insurance broker",                monthly_searches: 49500, tier: "Tier 1", status: "not_used", family: "insurance agency",     variant_type: "variant" },
    { keyword: "insurance broker near me",        monthly_searches: 22200, tier: "Tier 1", status: "near_me",  family: "insurance agency",     variant_type: "near_me" },
    // Homeowners Insurance family
    { keyword: "homeowners insurance",            monthly_searches: 246000, tier: "Tier 1", status: "selected", family: "homeowners insurance", variant_type: "base" },
    { keyword: "homeowners insurance near me",    monthly_searches:  33100, tier: "Tier 1", status: "near_me",  family: "homeowners insurance", variant_type: "near_me" },
    { keyword: "home insurance",                  monthly_searches: 201000, tier: "Tier 1", status: "not_used", family: "homeowners insurance", variant_type: "variant" },
    { keyword: "home insurance near me",          monthly_searches:  22200, tier: "Tier 1", status: "near_me",  family: "homeowners insurance", variant_type: "near_me" },
    { keyword: "homeowners insurance agent",      monthly_searches:   1600, tier: "Tier 1", status: "not_used", family: "homeowners insurance", variant_type: "variant" },
    // Renters Insurance family
    { keyword: "renters insurance",               monthly_searches: 90500, tier: "Tier 2", status: "selected", family: "renters insurance",    variant_type: "base" },
    { keyword: "renters insurance near me",       monthly_searches: 12100, tier: "Tier 2", status: "near_me",  family: "renters insurance",    variant_type: "near_me" },
    { keyword: "renters insurance agent",         monthly_searches:   880, tier: "Tier 2", status: "not_used", family: "renters insurance",    variant_type: "variant" },
    // Auto Insurance Agent family
    { keyword: "auto insurance agent",            monthly_searches:  6600, tier: "Tier 2", status: "selected", family: "auto insurance agent", variant_type: "base" },
    { keyword: "auto insurance agent near me",    monthly_searches:  5400, tier: "Tier 2", status: "near_me",  family: "auto insurance agent", variant_type: "near_me" },
    { keyword: "car insurance agent",             monthly_searches:  6600, tier: "Tier 2", status: "not_used", family: "auto insurance agent", variant_type: "variant" },
    { keyword: "car insurance agent near me",     monthly_searches:  4400, tier: "Tier 2", status: "near_me",  family: "auto insurance agent", variant_type: "near_me" },
    // Business Insurance family
    { keyword: "business insurance",              monthly_searches: 33100, tier: "Tier 1", status: "selected", family: "business insurance",   variant_type: "base" },
    { keyword: "business insurance near me",      monthly_searches: 33100, tier: "Tier 1", status: "near_me",  family: "business insurance",   variant_type: "near_me" },
    { keyword: "small business insurance",        monthly_searches: 33100, tier: "Tier 1", status: "not_used", family: "business insurance",   variant_type: "variant" },
    { keyword: "small business insurance near me",monthly_searches:  1900, tier: "Tier 1", status: "not_used", family: "business insurance",   variant_type: "near_me" },
    { keyword: "business insurance agent",        monthly_searches:  1000, tier: "Tier 1", status: "not_used", family: "business insurance",   variant_type: "variant" },
    // Commercial Insurance family
    { keyword: "commercial insurance",            monthly_searches: 27100, tier: "Tier 2", status: "selected", family: "commercial insurance", variant_type: "base" },
    { keyword: "commercial insurance near me",    monthly_searches:  5400, tier: "Tier 2", status: "near_me",  family: "commercial insurance", variant_type: "near_me" },
    { keyword: "commercial auto insurance",       monthly_searches: 18100, tier: "Tier 2", status: "not_used", family: "commercial insurance", variant_type: "variant" },
    { keyword: "commercial auto insurance near me",monthly_searches: 1600, tier: "Tier 2", status: "near_me",  family: "commercial insurance", variant_type: "near_me" },
    { keyword: "general liability insurance near me", monthly_searches: 880, tier: "Tier 2", status: "not_used", family: "commercial insurance", variant_type: "variant" },
    { keyword: "workers comp insurance near me",  monthly_searches:  1000, tier: "Tier 2", status: "not_used", family: "commercial insurance", variant_type: "variant" },
    // Life Insurance family
    { keyword: "life insurance",                  monthly_searches: 33100, tier: "Tier 1", status: "selected", family: "life insurance",       variant_type: "base" },
    { keyword: "life insurance near me",          monthly_searches: 33100, tier: "Tier 1", status: "near_me",  family: "life insurance",       variant_type: "near_me" },
    { keyword: "term life insurance near me",     monthly_searches:   390, tier: "Tier 1", status: "not_used", family: "life insurance",       variant_type: "variant" },
    { keyword: "whole life insurance near me",    monthly_searches:   480, tier: "Tier 1", status: "not_used", family: "life insurance",       variant_type: "variant" },
    // Specialty lines (low volume, reserved for upgrades)
    { keyword: "motorcycle insurance near me",    monthly_searches:  2900, tier: "Tier 3", status: "not_used", family: "motorcycle insurance", variant_type: "near_me" },
    { keyword: "flood insurance near me",         monthly_searches:   590, tier: "Tier 3", status: "not_used", family: "flood insurance",      variant_type: "near_me" },
    { keyword: "surety bonds near me",            monthly_searches:  1300, tier: "Tier 3", status: "not_used", family: "surety bonds",         variant_type: "near_me" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Agent, Agency & Core Personal Lines",
      description: "The highest-value keywords for Insurance Prep Solutions: searches for local insurance agents, agencies, and the two most-searched personal lines products -- homeowners and life insurance. These terms carry the strongest local commercial intent and the broadest reach across all customer segments. They form the backbone of the Level C strategy.",
      keywords: [
        { keyword: "insurance agent",       monthly_searches: 74000 },
        { keyword: "insurance agency",      monthly_searches: 90500 },
        { keyword: "homeowners insurance",  monthly_searches: 246000 },
        { keyword: "life insurance",        monthly_searches: 33100 },
        { keyword: "business insurance",    monthly_searches: 33100 },
        { keyword: "insurance broker",      monthly_searches: 49500 },
        { keyword: "home insurance",        monthly_searches: 201000 },
        { keyword: "small business insurance", monthly_searches: 33100 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Personal Lines & Commercial Expansion",
      description: "Mid-tier keywords targeting specific personal and commercial insurance products. Renters insurance is a high-priority term for the Inland Empire's large renter population. Auto insurance agent and commercial insurance capture customers who are specifically seeking an agent or broker rather than a direct carrier -- a key differentiator for Insurance Prep Solutions.",
      keywords: [
        { keyword: "renters insurance",        monthly_searches: 90500 },
        { keyword: "commercial insurance",     monthly_searches: 27100 },
        { keyword: "auto insurance agent",     monthly_searches:  6600 },
        { keyword: "commercial auto insurance",monthly_searches: 18100 },
        { keyword: "motorcycle insurance",     monthly_searches:  2900 },
        { keyword: "workers comp insurance near me", monthly_searches: 1000 },
        { keyword: "general liability insurance near me", monthly_searches: 880 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Specialty Lines",
      description: "Specialty insurance products offered by Insurance Prep Solutions that carry lower search volume but high conversion value. Customers searching for flood insurance, surety bonds, or motorcycle insurance have a very specific, immediate need. These keywords are reserved for targeted expansion in Level D and beyond.",
      keywords: [
        { keyword: "motorcycle insurance near me", monthly_searches: 2900 },
        { keyword: "surety bonds near me",         monthly_searches: 1300 },
        { keyword: "flood insurance near me",      monthly_searches:  590 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Brand-Dominated: Not Suitable for Local SEO Pages",
      description: "These are the highest-volume insurance keywords nationally, but they are completely dominated by major carriers (Progressive, Allstate, Geico, State Farm) in paid and organic results. Building local SEO pages targeting these broad terms would not produce competitive rankings. The agent-specific and near-me variants selected in this plan are the correct approach for an independent agency.",
      keywords: [
        { keyword: "auto insurance",         monthly_searches: 550000 },
        { keyword: "car insurance",          monthly_searches: 246000 },
        { keyword: "home insurance",         monthly_searches: 201000 },
        { keyword: "insurance broker",       monthly_searches:  49500 },
        { keyword: "small business insurance", monthly_searches: 33100 },
      ]
    },
    {
      reason: "Covered by Selected Keywords",
      description: "These keywords are closely related to selected terms and would create redundant content pages. The selected keywords already capture this search intent. Including both would dilute SEO authority rather than strengthen it.",
      keywords: [
        { keyword: "life insurance agent",          monthly_searches: 6600 },
        { keyword: "independent insurance agent",   monthly_searches: 4400 },
        { keyword: "car insurance agent",           monthly_searches: 6600 },
        { keyword: "homeowners insurance agent",    monthly_searches: 1600 },
        { keyword: "business insurance agent",      monthly_searches: 1000 },
      ]
    },
    {
      reason: "Specialty Lines: Reserved for Targeted Expansion",
      description: "These specialty insurance keywords represent distinct product lines offered by Insurance Prep Solutions. They carry lower volume but high conversion value. They are reserved for Level D and Level E expansion where they can receive dedicated, focused coverage pages.",
      keywords: [
        { keyword: "motorcycle insurance near me",  monthly_searches: 2900 },
        { keyword: "general liability insurance near me", monthly_searches: 880 },
        { keyword: "workers comp insurance near me",monthly_searches: 1000 },
        { keyword: "flood insurance near me",       monthly_searches:  590 },
        { keyword: "surety bonds near me",          monthly_searches: 1300 },
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
      headline: "Add Commercial-Specific Keywords Across All 5 Markets",
      description: "Upgrading to Level D adds 10 new combinations by introducing General Liability Insurance and Workers' Comp Insurance across all 5 existing markets. These terms target business owners actively searching for coverage -- a high-value commercial segment with strong conversion potential.",
      keywords: [
        { keyword: "General Liability Insurance", monthly_searches: 880 },
        { keyword: "Workers Comp Insurance",      monthly_searches: 1000 },
        { keyword: "Motorcycle Insurance",        monthly_searches: 2900 },
      ]
    },
    {
      plan: "Level E",
      combinations: 60,
      price: 2000,
      additional_combinations: 20,
      headline: "Expand into Moreno Valley and San Bernardino",
      description: "Level E adds Moreno Valley (pop. 216,447) and San Bernardino (pop. 226,103) -- two of the largest Inland Empire cities -- plus Motorcycle Insurance and Flood Insurance across existing markets. This level significantly expands the addressable market footprint.",
      keywords: [
        { keyword: "Moreno Valley, CA",   monthly_searches: null, new_market: true },
        { keyword: "San Bernardino, CA",  monthly_searches: null, new_market: true },
        { keyword: "Flood Insurance",     monthly_searches: 590 },
        { keyword: "Surety Bonds",        monthly_searches: 1300 },
      ]
    },
    {
      plan: "Level F",
      combinations: 90,
      price: 3000,
      additional_combinations: 50,
      headline: "Full Inland Empire Domination",
      description: "Level F delivers comprehensive coverage across the entire Inland Empire -- 9 cities spanning both San Bernardino and Riverside Counties -- with all 8 core keywords plus specialty lines. This is the complete market domination strategy for Insurance Prep Solutions.",
      keywords: [
        { keyword: "Temecula, CA",       monthly_searches: null, new_market: true },
        { keyword: "Murrieta, CA",       monthly_searches: null, new_market: true },
        { keyword: "Victorville, CA",    monthly_searches: null, new_market: true },
        { keyword: "Chino, CA",          monthly_searches: null, new_market: true },
        { keyword: "Flood Insurance",    monthly_searches: 590 },
        { keyword: "Surety Bonds",       monthly_searches: 1300 },
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
// ============================================================
function buildMatrix() {
  const markets = [
      { city: "Rancho Cucamonga", tier: "Tier 1", population: 177673, is_hq: true  },
      { city: "Ontario",          tier: "Tier 1", population: 190066, is_hq: false },
      { city: "Riverside",        tier: "Tier 1", population: 327868, is_hq: false },
      { city: "Fontana",          tier: "Tier 2", population: 223089, is_hq: false },
      { city: "Corona",           tier: "Tier 2", population: 163635, is_hq: false },
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
  { rank: 1,  city: 'Riverside',         pop: 327868, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2,  city: 'Fontana',           pop: 223089, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 3,  city: 'Ontario',           pop: 190066, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Rancho Cucamonga',  pop: 177673, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 5,  city: 'Corona',            pop: 163635, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 6,  city: 'Moreno Valley',     pop: 216447, tier: 'Tier 2', selected: false, hq: false },
  { rank: 7,  city: 'San Bernardino',    pop: 226103, tier: 'Tier 2', selected: false, hq: false },
  { rank: 8,  city: 'Victorville',       pop: 143721, tier: 'Tier 2', selected: false, hq: false },
  { rank: 9,  city: 'Chino',             pop:  95492, tier: 'Tier 2', selected: false, hq: false },
  { rank: 10, city: 'Upland',            pop:  80002, tier: 'Tier 2', selected: false, hq: false },
  { rank: 11, city: 'Temecula',          pop: 113604, tier: 'Tier 2', selected: false, hq: false },
  { rank: 12, city: 'Murrieta',          pop: 113237, tier: 'Tier 2', selected: false, hq: false },
  { rank: '13+', city: 'Rialto, Hesperia, Menifee, Chino Hills, Redlands + more', pop: null, tier: 'Tier 3', selected: false, hq: false },
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
    { city: 'Rancho Cucamonga', tier: 'Tier 1', pop: 177673, is_hq: true  },
    { city: 'Ontario',          tier: 'Tier 1', pop: 190066, is_hq: false },
    { city: 'Riverside',        tier: 'Tier 1', pop: 327868, is_hq: false },
    { city: 'Fontana',          tier: 'Tier 2', pop: 223089, is_hq: false },
    { city: 'Corona',           tier: 'Tier 2', pop: 163635, is_hq: false },
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

  // Dynamic kw-tier-grid column count
  (function() {
    var grid = document.querySelector('.kw-tier-grid');
    if (!grid) return;
    var count = grid.querySelectorAll('.kw-tier-card').length;
    if (count > 0) grid.style.gridTemplateColumns = 'repeat(' + count + ', 1fr)';
  })();
});
