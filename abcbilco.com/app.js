// ============================================================
// SEO Strategy Website — App.js
// ABC Bilco / Heathrow Construction Corp.
// Plan Level A: 20 Keyword-City Combinations
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================

const STRATEGY = {
  client_name: "ABC Bilco / Heathrow Construction Corp.",
  industry: "Residential and Commercial Remodeling",
  hq_city: "Ozone Park",
  state: "NY",
  service_area: "NYC Metro, Long Island, Westchester, Northern NJ, Southern CT",
  plan_level: "Plan Level A",
  plan_price: 600,
  total_combinations: 20,
  total_keywords_researched: 20,
  selected_keywords: [
    "bilco door installer",
    "cellar door installation",
    "roof hatch installation"
  ],
  num_selected_keywords: 3,
  num_target_markets: 8,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    // Bilco door family
    { keyword: "bilco door",               monthly_searches: 8100, tier: "Tier 1", status: "related",   family: "bilco door", variant_type: "base" },
    { keyword: "bilco doors",              monthly_searches: 9900, tier: "Tier 1", status: "related",   family: "bilco door", variant_type: "plural" },
    { keyword: "bilco door installer",     monthly_searches:  590, tier: "Tier 1", status: "selected",  family: "bilco door", variant_type: "variant" },
    { keyword: "bilco door installation",  monthly_searches:  590, tier: "Tier 1", status: "not_used",  family: "bilco door", variant_type: "variant" },
    { keyword: "bilco door installer near me", monthly_searches: 110, tier: "Tier 1", status: "near_me", family: "bilco door", variant_type: "near_me" },
    // Cellar door family
    { keyword: "cellar door installation",      monthly_searches: 210, tier: "Tier 2", status: "selected", family: "cellar door", variant_type: "base" },
    { keyword: "install cellar door",           monthly_searches: 210, tier: "Tier 2", status: "not_used", family: "cellar door", variant_type: "variant" },
    { keyword: "cellar doors installation",     monthly_searches: 210, tier: "Tier 2", status: "not_used", family: "cellar door", variant_type: "plural" },
    { keyword: "bilco cellar door installation",monthly_searches:  90, tier: "Tier 2", status: "not_used", family: "cellar door", variant_type: "variant" },
    // Roof hatch family
    { keyword: "roof hatch installation",            monthly_searches: 110, tier: "Tier 3", status: "selected",  family: "roof hatch", variant_type: "base" },
    { keyword: "roof access hatch installation",     monthly_searches:  40, tier: "Tier 3", status: "not_used",  family: "roof hatch", variant_type: "variant" },
    { keyword: "bilco roof hatch installation",      monthly_searches:  20, tier: "Tier 3", status: "not_used",  family: "roof hatch", variant_type: "variant" },
    // Other access products
    { keyword: "basement door installation",         monthly_searches:  10, tier: "Tier 2", status: "not_used", family: "basement door", variant_type: "base" },
    { keyword: "bulkhead door installation",         monthly_searches:  50, tier: "Tier 2", status: "not_used", family: "basement door", variant_type: "variant" },
    { keyword: "egress window well installation",    monthly_searches:  30, tier: "Tier 2", status: "not_used", family: "egress window", variant_type: "base" },
    { keyword: "floor access door installation",     monthly_searches:  20, tier: "Tier 3", status: "not_used", family: "floor door",    variant_type: "base" },
    { keyword: "sidewalk door installation",         monthly_searches:  30, tier: "Tier 2", status: "not_used", family: "basement door", variant_type: "variant" },
    { keyword: "bilco door repair",                  monthly_searches:  50, tier: "Tier 1", status: "not_used", family: "bilco door",    variant_type: "variant" },
    { keyword: "basement door replacement",          monthly_searches:  50, tier: "Tier 2", status: "not_used", family: "basement door", variant_type: "variant" },
    { keyword: "bilco door installation cost",       monthly_searches:  30, tier: "Tier 1", status: "not_used", family: "bilco door",    variant_type: "variant" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Bilco Brand Access Products",
      description: "The Bilco brand IS the search term. People searching for a Bilco door installer have extremely high purchase intent. ABC Bilco's status as an authorized installer makes this their strongest differentiator. Very low competition (Difficulty: 2/100) means quick ranking wins across the NYC metro.",
      keywords: [
        { keyword: "bilco door installer",    monthly_searches: 590 },
        { keyword: "bilco door installation", monthly_searches: 590 },
        { keyword: "bilco door",              monthly_searches: 8100 },
        { keyword: "bilco doors",             monthly_searches: 9900 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Cellar Door Installation",
      description: "\"Cellar door\" is the NYC and Northeast regional term for what the rest of the country calls a basement door or bulkhead door. This is a hyper-local, high-intent term with near-zero competition (Difficulty: 3/100). Targeting it allows ABC Bilco to connect with customers using the exact local vernacular.",
      keywords: [
        { keyword: "cellar door installation",       monthly_searches: 210 },
        { keyword: "install cellar door",            monthly_searches: 210 },
        { keyword: "bilco cellar door installation", monthly_searches:  90 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Roof Hatch Installation",
      description: "The commercial segment (roof hatches, floor doors) is a distinct revenue stream. Building owners, property managers, and commercial contractors search for this. Low competition (Difficulty: 6/100) and a strong CPC of $4.26 signals clear commercial intent. Concentrated in Manhattan and other commercial hubs.",
      keywords: [
        { keyword: "roof hatch installation",        monthly_searches: 110 },
        { keyword: "roof access hatch installation", monthly_searches:  40 },
        { keyword: "bilco roof hatch installation",  monthly_searches:  20 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Exceeds Current Plan Capacity",
      description: "These high-value keywords were identified and validated but could not be included within the 20-combination limit of the Plan Level A strategy. They are the first candidates for inclusion upon upgrading to Plan Level B or higher.",
      keywords: [
        { keyword: "bilco door installation",         monthly_searches: 590 },
        { keyword: "bilco door repair",               monthly_searches:  50 },
        { keyword: "bulkhead door installation",      monthly_searches:  50 },
        { keyword: "basement door replacement",       monthly_searches:  50 },
        { keyword: "egress window well installation", monthly_searches:  30 },
        { keyword: "sidewalk door installation",      monthly_searches:  30 },
        { keyword: "floor access door installation",  monthly_searches:  20 },
        { keyword: "basement door installation",      monthly_searches:  10 },
      ]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Plan Level B",
      combinations: 30,
      price: 900,
      additional_combinations: 10,
      headline: "Expand Commercial Coverage with Roof Hatch",
      description: "Upgrading to Plan Level B adds 10 additional keyword-city combinations, allowing ABC Bilco to introduce dedicated roof hatch installation coverage for high-density commercial markets currently outside the plan's capacity. Given the very low competition, this is the most strategic next step for expanding commercial lead generation.",
      keywords: [
        { keyword: "roof hatch installation",  monthly_searches: 110 },
        { keyword: "Manhattan",                monthly_searches: null, new_market: true },
        { keyword: "The Bronx",                monthly_searches: null, new_market: true },
        { keyword: "Westchester County",       monthly_searches: null, new_market: true },
        { keyword: "Newark, NJ",               monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Plan Level B",
      combinations: 30,
      price: 900,
      additional_combinations: 10,
      headline: "Add Bilco Door Installer to NJ Markets",
      description: "Expand \"bilco door installer\" to Hoboken NJ, Asbury Park NJ, Middletown NJ, and Newark NJ. Northern and Central NJ has significant residential density and falls within the full service radius, representing an untapped geographic opportunity for the highest-volume keyword in the plan.",
      keywords: [
        { keyword: "bilco door installer", monthly_searches: 590 },
        { keyword: "Hoboken, NJ",          monthly_searches: null, new_market: true },
        { keyword: "Asbury Park, NJ",      monthly_searches: null, new_market: true },
        { keyword: "Middletown, NJ",       monthly_searches: null, new_market: true },
        { keyword: "Newark, NJ",           monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Plan Level B",
      combinations: 30,
      price: 900,
      additional_combinations: 10,
      headline: "Add Connecticut Markets",
      description: "Add \"bilco door installer\" and \"cellar door installation\" to Stamford CT and Greenwich CT. Southern Connecticut is within the full service radius and contains high-income residential markets with strong demand for access product installations.",
      keywords: [
        { keyword: "bilco door installer",     monthly_searches: 590 },
        { keyword: "cellar door installation", monthly_searches: 210 },
        { keyword: "Stamford, CT",             monthly_searches: null, new_market: true },
        { keyword: "Greenwich, CT",            monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Plan Level B",
      combinations: 30,
      price: 900,
      additional_combinations: 10,
      headline: "Add Egress Window Well Installation Keyword",
      description: "As a distinct Bilco product with growing code-compliance demand, egress window wells warrant their own keyword tier. Building codes increasingly require egress windows in basement conversions, creating a steady stream of high-intent searches. Targeting NYC, Brooklyn, Queens, Long Island, and Staten Island would capture this demand directly.",
      keywords: [
        { keyword: "egress window well installation", monthly_searches: 30 },
        { keyword: "New York City",                   monthly_searches: null, new_market: true },
        { keyword: "Brooklyn",                        monthly_searches: null, new_market: true },
        { keyword: "Queens",                          monthly_searches: null, new_market: true },
        { keyword: "Long Island",                     monthly_searches: null, new_market: true },
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
  if (status === 'related') return '<span class="status-badge status-not-used">Related Term</span>';
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
// POPULATE MATRIX TABLE (ASYMMETRIC)
// ============================================================
function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  const bilcoDoorMarkets = [
    { city: "New York City",    tier: "Tier 1", population: 8335897, is_hq: true  },
    { city: "Brooklyn",         tier: "Tier 1", population: 2590516, is_hq: false },
    { city: "Queens",           tier: "Tier 1", population: 2278906, is_hq: true  },
    { city: "Long Island",      tier: "Tier 1", population: 7830000, is_hq: false },
    { city: "Staten Island",    tier: "Tier 1", population:  491133, is_hq: false },
    { city: "Westchester Co.",  tier: "Tier 2", population: 1004457, is_hq: false },
    { city: "Jersey City, NJ",  tier: "Tier 2", population:  292449, is_hq: false },
    { city: "The Bronx",        tier: "Tier 1", population: 1446788, is_hq: false },
  ];
  const cellarDoorMarkets = [
    { city: "New York City",    tier: "Tier 1", population: 8335897, is_hq: true  },
    { city: "Brooklyn",         tier: "Tier 1", population: 2590516, is_hq: false },
    { city: "Queens",           tier: "Tier 1", population: 2278906, is_hq: true  },
    { city: "Long Island",      tier: "Tier 1", population: 7830000, is_hq: false },
    { city: "Staten Island",    tier: "Tier 1", population:  491133, is_hq: false },
    { city: "Westchester Co.",  tier: "Tier 2", population: 1004457, is_hq: false },
    { city: "Newark, NJ",       tier: "Tier 2", population:  307220, is_hq: false },
  ];
  const roofHatchMarkets = [
    { city: "New York City",    tier: "Tier 1", population: 8335897, is_hq: true  },
    { city: "Manhattan",        tier: "Tier 1", population: 1632000, is_hq: false },
    { city: "Brooklyn",         tier: "Tier 1", population: 2590516, is_hq: false },
    { city: "Long Island",      tier: "Tier 1", population: 7830000, is_hq: false },
    { city: "Jersey City, NJ",  tier: "Tier 2", population:  292449, is_hq: false },
  ];

  const matrixRows = [
    { keyword: "bilco door installer",     markets: bilcoDoorMarkets,  count: 8 },
    { keyword: "cellar door installation", markets: cellarDoorMarkets, count: 7 },
    { keyword: "roof hatch installation",  markets: roofHatchMarkets,  count: 5 },
  ];

  // Build unified market list for header
  const allMarkets = [];
  const seenCities = new Set();
  matrixRows.forEach(row => {
    row.markets.forEach(m => {
      if (!seenCities.has(m.city)) {
        seenCities.add(m.city);
        allMarkets.push(m);
      }
    });
  });

  const tierCells = allMarkets.map(m => {
    const cls = m.tier === 'Tier 1' ? 't1' : 't2';
    return `<th><span class="tier-pill ${cls} nowrap">${m.tier.toUpperCase()}</span></th>`;
  }).join('');

  const cityCells = allMarkets.map(m =>
    `<th class="city-header">${m.city}${m.is_hq ? ' <span class="hq-star">&#9733;</span>' : ''}<br><span class="city-pop-small">Pop. ${fmt(m.population)}</span></th>`
  ).join('');

  thead.innerHTML = `<tr><th class="kw-col-header">Keyword</th>${tierCells}</tr><tr><th></th>${cityCells}</tr>`;

  const rows = matrixRows.map(row => {
    const marketSet = new Set(row.markets.map(m => m.city));
    const cells = allMarkets.map(m =>
      marketSet.has(m.city)
        ? '<td class="check-cell">&#10003;</td>'
        : '<td class="check-cell" style="color:#ccc;">&#8212;</td>'
    ).join('');
    return `<tr><td class="kw-cell">${row.keyword}</td>${cells}</tr>`;
  }).join('');

  const totalCells = allMarkets.map(m => {
    const count = matrixRows.filter(row => row.markets.some(rm => rm.city === m.city)).length;
    return `<td class="total-cell">${count}</td>`;
  }).join('');

  const grandTotal = matrixRows.reduce((sum, row) => sum + row.count, 0);
  tbody.innerHTML = rows
    + `<tr class="total-row"><td class="total-label">Total Combinations</td>${totalCells}</tr>`
    + `<tr class="grand-total-row"><td colspan="${allMarkets.length + 1}" class="grand-total">Grand Total: <strong>${grandTotal} Combinations</strong></td></tr>`;
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
      <div class="opp-new-market" style="visibility:hidden"></div>
      <ul class="opp-kw-list"><li class="opp-kw-header"><span>Keyword / Market</span><span>Mo. Searches</span></li>${kwList}</ul>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// BUILD MOBILE MARKET LIST
// ============================================================
const MARKET_DATA = [
  { rank: 1,    city: 'New York City',    pop: 8335897, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 2,    city: 'Long Island',      pop: 7830000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,    city: 'Brooklyn',         pop: 2590516, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,    city: 'Queens',           pop: 2278906, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 5,    city: 'The Bronx',        pop: 1446788, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 6,    city: 'Manhattan',        pop: 1632000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 7,    city: 'Westchester Co.',  pop: 1004457, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 8,    city: 'Staten Island',    pop:  491133, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 9,    city: 'Newark, NJ',       pop:  307220, tier: 'Tier 2', selected: false, hq: false },
  { rank: 10,   city: 'Jersey City, NJ',  pop:  292449, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 11,   city: 'Hoboken, NJ',      pop:   60000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 12,   city: 'Asbury Park, NJ',  pop:   16000, tier: 'Tier 2', selected: false, hq: false },
  { rank: '13+', city: 'Stamford CT, Greenwich CT, White Plains NY, New Rochelle NY, Middletown NJ + more', pop: null, tier: 'Tier 3', selected: false, hq: false },
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

  const mobileMarkets = [
    { city: 'New York City',   tier: 'Tier 1', pop: 8335897, is_hq: true  },
    { city: 'Brooklyn',        tier: 'Tier 1', pop: 2590516, is_hq: false },
    { city: 'Queens',          tier: 'Tier 1', pop: 2278906, is_hq: true  },
    { city: 'Long Island',     tier: 'Tier 1', pop: 7830000, is_hq: false },
    { city: 'Staten Island',   tier: 'Tier 1', pop:  491133, is_hq: false },
    { city: 'The Bronx',       tier: 'Tier 1', pop: 1446788, is_hq: false },
    { city: 'Westchester Co.', tier: 'Tier 2', pop: 1004457, is_hq: false },
    { city: 'Jersey City, NJ', tier: 'Tier 2', pop:  292449, is_hq: false },
  ];

  const bilcoCities    = new Set(["New York City","Brooklyn","Queens","Long Island","Staten Island","The Bronx","Westchester Co.","Jersey City, NJ"]);
  const cellarCities   = new Set(["New York City","Brooklyn","Queens","Long Island","Staten Island","Westchester Co."]);
  const roofHatchCities = new Set(["New York City","Brooklyn","Long Island","Jersey City, NJ"]);

  const cards = mobileMarkets.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : 't2';
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const kwsForMarket = [];
    if (bilcoCities.has(m.city))    kwsForMarket.push("bilco door installer");
    if (cellarCities.has(m.city))   kwsForMarket.push("cellar door installation");
    if (roofHatchCities.has(m.city)) kwsForMarket.push("roof hatch installation");
    const kwList = kwsForMarket.map(kw =>
      `<div class="mob-matrix-kw"><span class="mob-matrix-check">&#10003;</span><span>${kw}</span></div>`
    ).join('');
    return `<div class="mob-matrix-card">
      <div class="mob-matrix-city">
        <span class="mob-matrix-city-name">${cityLabel}</span>
        <span class="mob-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp; Pop. ${fmt(m.pop)}</span>
      </div>
      <div class="mob-matrix-kws">${kwList}</div>
      <div class="mob-matrix-total">${kwsForMarket.length} combination${kwsForMarket.length !== 1 ? 's' : ''}</div>
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
