// ============================================================
// Capital City Car Wash — SEO Strategy App.js
// Plan Level C | 40 Combinations | Camp Hill, PA
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================

const STRATEGY = {
  client_name: "Capital City Car Wash",
  industry: "Car Wash & Auto Detailing",
  hq_city: "Camp Hill",
  state: "PA",
  service_area: "Camp Hill, PA & Surrounding Communities",
  plan_level: "Level C",
  plan_price: 1200,
  total_combinations: 40,
  total_keywords_researched: 18,
  selected_keywords: [
    "car wash",
    "car detailing",
    "auto detailing",
    "car detailing near me"
  ],
  num_selected_keywords: 4,
  num_target_markets: 10,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    // Car Wash family
    { keyword: "car wash near me",          monthly_searches: 1830000, tier: "Tier 1", status: "near_me",  family: "car wash",      variant_type: "near_me" },
    { keyword: "car wash",                  monthly_searches:  823000, tier: "Tier 1", status: "selected", family: "car wash",      variant_type: "base" },
    { keyword: "car washes near me",        monthly_searches:  201000, tier: "Tier 1", status: "near_me",  family: "car wash",      variant_type: "near_me" },
    { keyword: "best car wash near me",     monthly_searches:   90500, tier: "Tier 1", status: "not_used", family: "car wash",      variant_type: "variant" },
    { keyword: "car wash near me open now", monthly_searches:   74000, tier: "Tier 1", status: "not_used", family: "car wash",      variant_type: "variant" },
    { keyword: "full service car wash",     monthly_searches:   40500, tier: "Tier 1", status: "not_used", family: "car wash",      variant_type: "variant" },
    { keyword: "hand car wash near me",     monthly_searches:   22200, tier: "Tier 1", status: "near_me",  family: "car wash",      variant_type: "near_me" },
    { keyword: "touchless car wash",        monthly_searches:   18100, tier: "Tier 1", status: "not_used", family: "car wash",      variant_type: "variant" },
    { keyword: "automatic car wash near me",monthly_searches:   14800, tier: "Tier 1", status: "near_me",  family: "car wash",      variant_type: "near_me" },
    { keyword: "self service car wash",     monthly_searches:   12100, tier: "Tier 1", status: "not_used", family: "car wash",      variant_type: "variant" },
    // Car Detailing family
    { keyword: "car detailing near me",     monthly_searches:  450000, tier: "Tier 2", status: "selected", family: "car detailing", variant_type: "base" },
    { keyword: "car detailing",             monthly_searches:  201000, tier: "Tier 2", status: "selected", family: "car detailing", variant_type: "variant" },
    { keyword: "car detail near me",        monthly_searches:   74000, tier: "Tier 2", status: "near_me",  family: "car detailing", variant_type: "near_me" },
    { keyword: "mobile car detailing",      monthly_searches:   49500, tier: "Tier 2", status: "not_used", family: "car detailing", variant_type: "variant" },
    { keyword: "car detailing prices",      monthly_searches:   40500, tier: "Tier 2", status: "not_used", family: "car detailing", variant_type: "variant" },
    // Auto Detailing family
    { keyword: "auto detailing near me",    monthly_searches:  246000, tier: "Tier 2", status: "near_me",  family: "auto detailing",variant_type: "near_me" },
    { keyword: "auto detailing",            monthly_searches:  165000, tier: "Tier 2", status: "selected", family: "auto detailing",variant_type: "base" },
    { keyword: "auto detail near me",       monthly_searches:   60500, tier: "Tier 2", status: "near_me",  family: "auto detailing",variant_type: "near_me" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Car Wash Services",
      description: "The highest-volume keyword category in the car care industry. 'Car wash near me' alone generates over 1.8 million monthly searches nationally, making it one of the most searched local service terms in any industry. The base keyword 'car wash' is selected for the strategy, capturing customers at every stage of the search journey across all ten markets.",
      keywords: [
        { keyword: "car wash near me",           monthly_searches: 1830000 },
        { keyword: "car wash",                   monthly_searches:  823000 },
        { keyword: "car washes near me",         monthly_searches:  201000 },
        { keyword: "best car wash near me",      monthly_searches:   90500 },
        { keyword: "car wash near me open now",  monthly_searches:   74000 },
        { keyword: "full service car wash",      monthly_searches:   40500 },
        { keyword: "touchless car wash",         monthly_searches:   18100 },
        { keyword: "self service car wash",      monthly_searches:   12100 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Auto Detailing Services",
      description: "Premium detailing keywords represent Capital City Car Wash's highest-margin service category. 'Car detailing near me' generates 450,000 monthly searches nationally, and 'auto detailing near me' adds another 246,000. Three detailing keywords are selected for the strategy to ensure comprehensive coverage of customers searching for both interior and exterior detailing services across the Harrisburg metro.",
      keywords: [
        { keyword: "car detailing near me",   monthly_searches: 450000 },
        { keyword: "auto detailing near me",  monthly_searches: 246000 },
        { keyword: "car detailing",           monthly_searches: 201000 },
        { keyword: "auto detailing",          monthly_searches: 165000 },
        { keyword: "car detail near me",      monthly_searches:  74000 },
        { keyword: "mobile car detailing",    monthly_searches:  49500 },
        { keyword: "car detailing prices",    monthly_searches:  40500 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Exceeds Current Plan Capacity",
      description: "These high-value keywords were identified and validated but could not be included within the 40-combination limit of the Level C plan. They are the first candidates for inclusion upon upgrading to Level D or higher. 'Best car wash near me' and 'full service car wash' in particular represent strong conversion-intent terms that would perform well across the Tier 1 markets.",
      keywords: [
        { keyword: "best car wash near me",      monthly_searches:  90500 },
        { keyword: "car wash near me open now",  monthly_searches:  74000 },
        { keyword: "full service car wash",      monthly_searches:  40500 },
        { keyword: "car detail near me",         monthly_searches:  74000 },
        { keyword: "mobile car detailing",       monthly_searches:  49500 },
        { keyword: "car detailing prices",       monthly_searches:  40500 },
      ]
    },
    {
      reason: "Touchless and Self-Serve: Specialty Format Terms",
      description: "These keywords target customers searching specifically for touchless or self-serve wash formats. While Capital City Car Wash offers both formats, these terms attract a narrower audience than the broader 'car wash' keyword. They are strong candidates for a dedicated content expansion once the foundational strategy is established.",
      keywords: [
        { keyword: "touchless car wash",     monthly_searches: 18100 },
        { keyword: "self service car wash",  monthly_searches: 12100 },
        { keyword: "automatic car wash near me", monthly_searches: 14800 },
      ]
    },
    {
      reason: "Mobile Detailing: Service Model Mismatch",
      description: "Mobile detailing keywords attract customers looking for a detailer who comes to their location. Capital City Car Wash operates from a fixed facility in Camp Hill. Targeting 'mobile car detailing' would generate inquiries for a service the business does not offer, resulting in poor conversion rates and wasted ranking effort.",
      keywords: [
        { keyword: "mobile car detailing",   monthly_searches: 49500 },
        { keyword: "mobile auto detailing",  monthly_searches: 22200 },
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
      headline: "Add Premium Detailing Keywords Across Top Markets",
      description: "Upgrading to Level D adds 10 additional keyword-city combinations, allowing Capital City Car Wash to introduce 'best car wash near me' and 'full service car wash' across the five highest-population markets. These conversion-intent terms attract customers who are actively comparing options and ready to commit.",
      keywords: [
        { keyword: "best car wash near me",   monthly_searches: 90500 },
        { keyword: "full service car wash",   monthly_searches: 40500 },
        { keyword: "car detailing prices",    monthly_searches: 40500 },
      ]
    },
    {
      plan: "Level E",
      combinations: 60,
      price: 2000,
      additional_combinations: 20,
      headline: "Expand into Specialty Format and Membership Keywords",
      description: "Level E opens coverage for touchless car wash and self-serve keywords while also adding deeper detailing coverage across the Tier 2 markets. This tier is ideal for capturing customers who are specifically seeking Capital City Car Wash's unique multi-format facility.",
      keywords: [
        { keyword: "touchless car wash",      monthly_searches: 18100 },
        { keyword: "self service car wash",   monthly_searches: 12100 },
        { keyword: "car wash near me open now", monthly_searches: 74000 },
        { keyword: "Middletown, PA",          monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level F",
      combinations: 90,
      price: 3000,
      additional_combinations: 50,
      headline: "Full Central PA Domination Across All Service Lines",
      description: "Level F delivers comprehensive coverage across all service lines and all major Central Pennsylvania markets. With 90 total combinations, Capital City Car Wash can target every high-value keyword across every community in Cumberland, Dauphin, and York counties, achieving complete regional dominance in the car wash and auto detailing market.",
      keywords: [
        { keyword: "Enola, PA",              monthly_searches: null, new_market: true },
        { keyword: "Shippensburg, PA",        monthly_searches: null, new_market: true },
        { keyword: "Steelton, PA",            monthly_searches: null, new_market: true },
        { keyword: "hand car wash near me",   monthly_searches: 22200 },
        { keyword: "car detailing prices",    monthly_searches: 40500 },
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
// Cities as rows, keywords as columns
// Used when markets >= 6 to prevent column header overflow
// ============================================================
function buildMatrix() {
  const markets = [
      { city: "Harrisburg",        tier: "Tier 1", population:  50099, is_hq: false },
      { city: "York",              tier: "Tier 1", population:  44569, is_hq: false },
      { city: "Hampden Twp.",      tier: "Tier 2", population:  28000, is_hq: false },
      { city: "Carlisle",          tier: "Tier 2", population:  19188, is_hq: false },
      { city: "Lower Allen Twp.",  tier: "Tier 2", population:  18000, is_hq: false },
      { city: "Hershey",           tier: "Tier 2", population:  14257, is_hq: false },
      { city: "Mechanicsburg",     tier: "Tier 3", population:   9340, is_hq: false },
      { city: "Camp Hill",         tier: "Tier 3", population:   7888, is_hq: true  },
      { city: "New Cumberland",    tier: "Tier 3", population:   7277, is_hq: false },
      { city: "Lemoyne",           tier: "Tier 3", population:   4553, is_hq: false },
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
    const newMarketItems = opp.keywords.filter(kw => kw.new_market);
    const kwItems = opp.keywords.filter(kw => !kw.new_market);
    const newMarketDiv = newMarketItems.length > 0
      ? `<div class="opp-new-market"><em>Adds new markets to your coverage area.</em></div>`
      : `<div class="opp-new-market" style="visibility:hidden"><em>&nbsp;</em></div>`;
    const kwList = opp.keywords.map(kw =>
      `<li>
        <span class="opp-kw">${kw.keyword}</span>
        ${kw.monthly_searches ? `<span class="opp-vol">${fmt(kw.monthly_searches)}</span>` : kw.new_market ? `<span class="opp-vol opp-new-market-badge">New Market</span>` : ''}
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
  { rank: 1,  city: 'Harrisburg',        pop:  50099, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2,  city: 'York',              pop:  44569, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Hampden Township',  pop:  28000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 4,  city: 'Carlisle',          pop:  19188, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 5,  city: 'Lower Allen Twp.',  pop:  18000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 6,  city: 'Hershey',           pop:  14257, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 7,  city: 'Mechanicsburg',     pop:   9340, tier: 'Tier 3', selected: true,  hq: false },
  { rank: 8,  city: 'Camp Hill',         pop:   7888, tier: 'Tier 3', selected: true,  hq: true  },
  { rank: 9,  city: 'New Cumberland',    pop:   7277, tier: 'Tier 3', selected: true,  hq: false },
  { rank: 10, city: 'Lemoyne',           pop:   4553, tier: 'Tier 3', selected: true,  hq: false },
  { rank: 11, city: 'Middletown',        pop:   9268, tier: 'Tier 3', selected: false, hq: false },
  { rank: 12, city: 'Enola',             pop:   6000, tier: 'Tier 3', selected: false, hq: false },
  { rank: 13, city: 'Shippensburg',      pop:   5492, tier: 'Tier 3', selected: false, hq: false },
  { rank: '14+', city: 'Steelton, Hummelstown, Penbrook, Wormleysburg + others', pop: null, tier: 'Tier 3', selected: false, hq: false },
];

function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = MARKET_DATA.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const popStr = m.pop ? fmt(m.pop) : '';
    const rowCls = m.selected ? 'mob-mkt-row selected' : 'mob-mkt-row';
    return `<div class="${rowCls}">
      <span class="mob-rank">${m.rank}</span>
      <span class="mob-city">${m.selected ? '<strong>' : ''}${cityLabel}${m.selected ? '</strong>' : ''}</span>
      <span class="mob-pop">${popStr}</span>
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
    { city: 'Harrisburg',        tier: 'Tier 1', pop:  50099, is_hq: false },
    { city: 'York',              tier: 'Tier 1', pop:  44569, is_hq: false },
    { city: 'Hampden Twp.',      tier: 'Tier 2', pop:  28000, is_hq: false },
    { city: 'Carlisle',          tier: 'Tier 2', pop:  19188, is_hq: false },
    { city: 'Lower Allen Twp.',  tier: 'Tier 2', pop:  18000, is_hq: false },
    { city: 'Hershey',           tier: 'Tier 2', pop:  14257, is_hq: false },
    { city: 'Mechanicsburg',     tier: 'Tier 3', pop:   9340, is_hq: false },
    { city: 'Camp Hill',         tier: 'Tier 3', pop:   7888, is_hq: true  },
    { city: 'New Cumberland',    tier: 'Tier 3', pop:   7277, is_hq: false },
    { city: 'Lemoyne',           tier: 'Tier 3', pop:   4553, is_hq: false },
  ];
  const keywords = STRATEGY.selected_keywords;
  const cards = markets.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
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
