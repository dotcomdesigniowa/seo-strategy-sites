// SEO Strategy Website — App.js
// ABC Bilco / Heathrow Construction Corp. | Dotcom Design
// Strategy: Go Deep — 4 keywords across 8 confirmed service
// area markets = 20 combinations (Plan Level A)
// Keyword selection rules applied:
//   - One slot per variant family
//   - Always highest-volume family member
//   - No near me variants in matrix
//   - Bilco brand terms anchor the strategy (dominant local authority)
//   - Remodeling included as 4th tier (bathroom remodeling contractor)
// ============================================================

const STRATEGY = {
  client_name: "ABC Bilco / Heathrow Construction Corp.",
  industry: "Access Products Installation and Remodeling",
  hq_city: "Ozone Park",
  state: "NY",
  service_area: "NYC Metro, Long Island, Westchester, Northern NJ, Southern CT",
  plan_level: "Level A",
  plan_price: 600,
  total_combinations: 20,
  total_keywords_researched: 28,
  strategy_type: "Go Deep",
  strategy_note: "ABC Bilco's strongest competitive advantage is their status as an authorized Bilco installer in the NYC metro area. The Bilco brand name drives nearly 18,000 searches per month nationally and faces almost no local competition (Difficulty 2). The strategy leads with brand-anchored access product terms, adds a cellar door keyword (a Northeast-specific term with strong local intent), a commercial roof hatch keyword, and a remodeling keyword targeting the highest-density markets.",
  selected_keywords: [
    "bilco door installer",
    "cellar door installation",
    "roof hatch installation",
    "bathroom remodeling contractor"
  ],
  num_selected_keywords: 4,
  num_target_markets: 8,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [

    // Bilco door installer family
    { keyword: "bilco door installer",          monthly_searches:  590, tier: "Tier 1", status: "selected",  family: "bilco-installer",       variant_type: "base",    note: "" },
    { keyword: "bilco door installation",       monthly_searches:  590, tier: "Tier 1", status: "not_used",  family: "bilco-installer",       variant_type: "variant", note: "Same family as 'bilco door installer'. The installer form is preferred for hire-intent targeting." },
    { keyword: "bilco door installer near me",  monthly_searches:  210, tier: "Tier 1", status: "near_me",   family: "bilco-installer",       variant_type: "near_me", note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },

    // Bilco door informational family
    { keyword: "bilco door",                    monthly_searches: 8100, tier: "Tier 1", status: "not_used",  family: "bilco-informational",   variant_type: "base",    note: "High-volume informational term. Searchers looking up 'bilco door' are researching the product, not hiring an installer. Will be captured organically as the 'bilco door installer' pages rank." },
    { keyword: "bilco doors",                   monthly_searches: 9900, tier: "Tier 1", status: "not_used",  family: "bilco-informational",   variant_type: "variant", note: "Plural informational variant of 'bilco door'. Same reasoning: product research intent, not hire intent." },

    // Cellar door family
    { keyword: "cellar door installation",      monthly_searches:  210, tier: "Tier 2", status: "selected",  family: "cellar-door",           variant_type: "base",    note: "" },
    { keyword: "cellar door installer",         monthly_searches:  140, tier: "Tier 2", status: "not_used",  family: "cellar-door",           variant_type: "variant", note: "Same family as 'cellar door installation'. Lower volume variant of the same hire-intent root phrase." },
    { keyword: "install cellar door",           monthly_searches:  110, tier: "Tier 2", status: "not_used",  family: "cellar-door",           variant_type: "variant", note: "Same family as 'cellar door installation'. Inverted phrasing; lower volume." },
    { keyword: "cellar door near me",           monthly_searches:   90, tier: "Tier 2", status: "near_me",   family: "cellar-door",           variant_type: "near_me", note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },

    // Roof hatch family
    { keyword: "roof hatch installation",       monthly_searches:  110, tier: "Tier 3", status: "selected",  family: "roof-hatch",            variant_type: "base",    note: "" },
    { keyword: "roof hatch installer",          monthly_searches:   90, tier: "Tier 3", status: "not_used",  family: "roof-hatch",            variant_type: "variant", note: "Same family as 'roof hatch installation'. Lower volume hire-intent variant." },
    { keyword: "commercial roof hatch",         monthly_searches:   70, tier: "Tier 3", status: "not_used",  family: "roof-hatch",            variant_type: "variant", note: "Same family as 'roof hatch installation'. Modifier variant targeting commercial projects; lower volume." },
    { keyword: "roof hatch near me",            monthly_searches:   50, tier: "Tier 3", status: "near_me",   family: "roof-hatch",            variant_type: "near_me", note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },

    // Bathroom remodeling family
    { keyword: "bathroom remodeling contractor",     monthly_searches: 49500, tier: "Tier 4", status: "selected",  family: "bathroom-remodeling",  variant_type: "base",    note: "" },
    { keyword: "bathroom remodel contractors",       monthly_searches: 60500, tier: "Tier 4", status: "not_used",  family: "bathroom-remodeling",  variant_type: "variant", note: "Higher-volume plural variant. The singular 'contractor' form is preferred for local page targeting as it reads more naturally in page titles and URL slugs." },
    { keyword: "bathroom remodeling contractors near me", monthly_searches: 8100, tier: "Tier 4", status: "near_me",  family: "bathroom-remodeling",  variant_type: "near_me", note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },

    // Kitchen remodeling family
    { keyword: "kitchen remodeling contractor", monthly_searches: 40500, tier: "Tier 4", status: "not_used",  family: "kitchen-remodeling",   variant_type: "base",    note: "High volume but Difficulty 39. Bathroom remodeling is selected as the remodeling anchor due to lower difficulty. Kitchen remodeling is reserved for plan expansion." },

    // Low-volume access product services
    { keyword: "egress window well installation",  monthly_searches: 30, tier: "Tier 2", status: "not_used",  family: "egress-window-well",   variant_type: "base",    note: "Legitimate Bilco product service but very low search volume (30/mo nationally). Not viable as a standalone matrix keyword at this plan level. Will be captured as supporting content on access product pages." },
    { keyword: "floor access door installation",   monthly_searches: 20, tier: "Tier 3", status: "not_used",  family: "floor-access-door",    variant_type: "base",    note: "Commercial Bilco product service but extremely low search volume (20/mo nationally). Will be covered as supporting content on commercial-focused pages." },
    { keyword: "basement door installation",       monthly_searches: 10, tier: "Tier 1", status: "not_used",  family: "basement-door",        variant_type: "base",    note: "Generic term for the same product as 'bilco door'. Extremely low volume (10/mo nationally). The Bilco brand name is the dominant search term for this product category." },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Bilco Brand Access Products",
      description: "The Bilco brand name is the dominant search term for basement and cellar access doors, generating nearly 18,000 monthly searches nationally. ABC Bilco's status as an authorized Bilco installer in the NYC metro area is a powerful competitive differentiator. This tier anchors the strategy with hire-intent terms that directly connect searchers to the installer, not just the product manufacturer.",
      keywords: [
        { keyword: "bilco door installer",    monthly_searches: 590 },
        { keyword: "bilco door installation", monthly_searches: 590 },
        { keyword: "bilco door",              monthly_searches: 8100 },
        { keyword: "bilco doors",             monthly_searches: 9900 },
        { keyword: "basement door installation", monthly_searches: 10 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Cellar Door and Egress Products",
      description: "In the Northeast, the term 'cellar door' is the dominant regional phrase for what the rest of the country calls a basement door or bulkhead door. Customers in Queens, Brooklyn, Long Island, and New Jersey use this term instinctively. Targeting 'cellar door installation' captures this local search behavior and gives ABC Bilco a strong regional advantage over national competitors who may not optimize for this term. Egress window well installation is also included in this tier as a supporting Bilco product service.",
      keywords: [
        { keyword: "cellar door installation",        monthly_searches: 210 },
        { keyword: "cellar door installer",           monthly_searches: 140 },
        { keyword: "install cellar door",             monthly_searches: 110 },
        { keyword: "egress window well installation", monthly_searches: 30 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Commercial Access: Roof Hatches and Floor Doors",
      description: "Bilco's commercial product line includes roof hatches, floor access doors, fire-rated floor doors, and automatic smoke vents. These products serve property managers, general contractors, and commercial building owners across the NYC metro area. 'Roof hatch installation' is the highest-volume commercial access keyword and serves as the entry point for this service line. Floor access door and smoke vent terms are reserved for plan expansion.",
      keywords: [
        { keyword: "roof hatch installation",        monthly_searches: 110 },
        { keyword: "roof hatch installer",           monthly_searches: 90 },
        { keyword: "commercial roof hatch",          monthly_searches: 70 },
        { keyword: "floor access door installation", monthly_searches: 20 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Remodeling Services",
      description: "ABC Bilco / Heathrow Construction Corp. has been providing residential and commercial remodeling services since 1962, covering bathrooms, kitchens, roofing, siding, concrete, driveways, windows, and more. 'Bathroom remodeling contractor' is selected as the remodeling anchor keyword because it has a lower difficulty score than kitchen remodeling and targets a high-conversion service. This tier is targeted at the two highest-density markets in the service area, where the client's established reputation carries the most weight.",
      keywords: [
        { keyword: "bathroom remodeling contractor",  monthly_searches: 49500 },
        { keyword: "bathroom remodel contractors",    monthly_searches: 60500 },
        { keyword: "kitchen remodeling contractor",   monthly_searches: 40500 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Informational Product Research Terms",
      description: "These high-volume Bilco brand terms are searched by people researching the product, not hiring an installer. 'Bilco door' (8,100/mo) and 'bilco doors' (9,900/mo) together generate nearly 18,000 searches per month, but the searcher intent is to learn about the product or find a retailer. These terms will be captured organically as the 'bilco door installer' pages rank and gain authority.",
      keywords: [
        { keyword: "bilco door",  monthly_searches: 8100 },
        { keyword: "bilco doors", monthly_searches: 9900 },
      ]
    },
    {
      reason: "Remodeling Services: Reserved for Targeted Expansion",
      description: "ABC Bilco offers a full range of remodeling services including kitchens, roofing, siding, concrete, driveways, windows, and more. Kitchen remodeling is the highest-volume remodeling keyword at 40,500 searches per month but carries a Difficulty score of 39. These terms are reserved for a dedicated expansion tier where they can receive proper, focused content coverage across additional markets.",
      keywords: [
        { keyword: "kitchen remodeling contractor", monthly_searches: 40500 },
      ]
    },
    {
      reason: "Low-Volume Bilco Product Services",
      description: "These keywords represent legitimate Bilco product installation services that ABC Bilco offers, but their national search volumes are too low to justify standalone matrix slots at the current plan level. They will be covered as supporting content on the access product pages and are strong candidates for inclusion in a future plan expansion targeting commercial property managers and contractors.",
      keywords: [
        { keyword: "egress window well installation",  monthly_searches: 30 },
        { keyword: "floor access door installation",   monthly_searches: 20 },
        { keyword: "basement door installation",       monthly_searches: 10 },
      ]
    },
    {
      reason: "Near Me Variants: Covered by City Targeting",
      description: "These 'near me' variants are not included in the matrix because the city name appended to each keyword in the URL slug and page title serves the exact same geographic function. Including both would create redundant content targeting the same search intent.",
      keywords: [
        { keyword: "bilco door installer near me",            monthly_searches: 210 },
        { keyword: "cellar door near me",                     monthly_searches: 90 },
        { keyword: "roof hatch near me",                      monthly_searches: 50 },
        { keyword: "bathroom remodeling contractors near me", monthly_searches: 8100 },
      ]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Level B",
      combinations: 30,
      price: 900,
      additional_combinations: 10,
      headline: "Add Remodeling Coverage Across All Five Boroughs",
      description: "Upgrading to Level B adds 10 additional keyword-city combinations. The most strategic next step is expanding 'bathroom remodeling contractor' across all five NYC boroughs and introducing 'kitchen remodeling contractor' (40,500/mo) as a dedicated keyword in the two highest-density markets. This gives ABC Bilco a strong remodeling presence across the entire city.",
      keywords: [
        { keyword: "bathroom remodeling contractor", monthly_searches: 49500 },
        { keyword: "kitchen remodeling contractor",  monthly_searches: 40500 },
      ]
    },
    {
      plan: "Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 20,
      headline: "Expand into Long Island and Add Commercial Access Keywords",
      description: "Level C adds 20 combinations, enabling a push into Nassau and Suffolk counties on Long Island while also introducing dedicated commercial access product coverage. Adding 'roof hatch installation' across Long Island markets and introducing 'floor access door installation' targets the commercial property managers and general contractors who are the highest-value customers for Bilco's commercial product line.",
      keywords: [
        { keyword: "roof hatch installation",        monthly_searches: 110 },
        { keyword: "floor access door installation", monthly_searches: 20 },
        { keyword: "Nassau County, NY",              monthly_searches: null, new_market: true },
        { keyword: "Suffolk County, NY",             monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 30,
      headline: "Dominate the NYC Metro with Full Service Coverage",
      description: "Level D provides the coverage needed to target every major market in the 2.5-hour service radius with a full suite of keywords. Adding Westchester County and Northern New Jersey markets, combined with deeper keyword coverage for all Bilco product lines and remodeling services, positions ABC Bilco as the dominant access product installer and remodeling contractor across the entire NYC metro area.",
      keywords: [
        { keyword: "kitchen remodeling contractor",   monthly_searches: 40500 },
        { keyword: "egress window well installation", monthly_searches: 30 },
        { keyword: "Westchester County, NY",          monthly_searches: null, new_market: true },
        { keyword: "Newark, NJ",                      monthly_searches: null, new_market: true },
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
// Go Deep: city-as-rows layout (keywords = columns, cities = rows)
// bilco door installer = 8 cities
// cellar door installation = 6 cities
// roof hatch installation = 4 cities
// bathroom remodeling contractor = 2 cities
// Total = 20 combinations
// ============================================================
function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  const allCities = [
    { city: "Queens",         tier: "Tier 1", population: 2405464, is_hq: true  },
    { city: "Brooklyn",       tier: "Tier 1", population: 2736074, is_hq: false },
    { city: "Manhattan",      tier: "Tier 1", population: 1694251, is_hq: false },
    { city: "The Bronx",      tier: "Tier 1", population: 1472654, is_hq: false },
    { city: "Staten Island",  tier: "Tier 1", population:  495747, is_hq: false },
    { city: "Nassau County",  tier: "Tier 2", population: 1395774, is_hq: false },
    { city: "Suffolk County", tier: "Tier 2", population: 1525920, is_hq: false },
    { city: "Westchester Co.",tier: "Tier 3", population: 1004457, is_hq: false },
  ];

  const keywords = STRATEGY.selected_keywords;

  const keywordCities = {
    "bilco door installer":           allCities.slice(0, 8),
    "cellar door installation":       allCities.slice(0, 6),
    "roof hatch installation":        allCities.slice(0, 4),
    "bathroom remodeling contractor": allCities.slice(0, 2),
  };

  // Header: keyword names as columns
  const kwHeaders = keywords.map(kw =>
    `<th class="city-header">${kw}</th>`
  ).join('');
  thead.innerHTML = `<tr><th class="kw-col-header">Market</th>${kwHeaders}<th class="total-header">Total</th></tr>`;

  // City rows
  let grandTotal = 0;
  const rows = allCities.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const cityLabel = `${m.city}${m.is_hq ? ' <span class="hq-star">&#9733;</span>' : ''}<br><span class="city-pop-small city-tier-inline"><span class="tier-pill ${tierCls} tier-pill-sm">${m.tier.toUpperCase()}</span> Pop. ${fmt(m.population)}</span>`;
    const kwCells = keywords.map(kw => {
      const inPlan = keywordCities[kw].some(c => c.city === m.city);
      return inPlan
        ? `<td class="check-cell matrix-check">&#10003;</td>`
        : `<td class="check-cell check-na">&#8212;</td>`;
    }).join('');
    const cityTotal = keywords.filter(kw => keywordCities[kw].some(c => c.city === m.city)).length;
    grandTotal += cityTotal;
    return `<tr><td class="city-row-label">${cityLabel}</td>${kwCells}<td class="total-cell city-total-cell">${cityTotal}</td></tr>`;
  }).join('');

  const kwTotals = keywords.map(kw => `<td class="total-cell">${keywordCities[kw].length}</td>`).join('');
  tbody.innerHTML = rows
    + `<tr class="total-row"><td class="total-label">Total Combinations</td>${kwTotals}<td class="total-cell">${grandTotal}</td></tr>`
    + `<tr class="grand-total-row"><td colspan="${keywords.length + 2}" class="grand-total">Grand Total: <strong>${grandTotal} Combinations</strong></td></tr>`;
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
        ${kw.monthly_searches ? `<span class="opp-vol">${fmt(kw.monthly_searches)}</span>` : kw.new_market ? `<span class="opp-vol opp-new-market-badge">New Market</span>` : ''}
      </li>`
    ).join('');
    const highlight = i === 0 ? 'opp-card-highlight' : '';
    const hasNewMarket = opp.keywords.some(k => k.new_market);
    const newMarketDiv = hasNewMarket
      ? `<div class="opp-new-market">Adds new markets to your coverage area.</div>`
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
  { rank: 1,  city: 'Brooklyn',        pop: 2736074, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2,  city: 'Queens',          pop: 2405464, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 3,  city: 'Manhattan',       pop: 1694251, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'The Bronx',       pop: 1472654, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 5,  city: 'Suffolk County',  pop: 1525920, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 6,  city: 'Nassau County',   pop: 1395774, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 7,  city: 'Westchester Co.', pop: 1004457, tier: 'Tier 3', selected: true,  hq: false },
  { rank: 8,  city: 'Staten Island',   pop:  495747, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 9,  city: 'Newark, NJ',      pop:  311549, tier: 'Tier 3', selected: false, hq: false },
  { rank: 10, city: 'Jersey City, NJ', pop:  292449, tier: 'Tier 3', selected: false, hq: false },
  { rank: 11, city: 'Bridgeport, CT',  pop:  148654, tier: 'Tier 3', selected: false, hq: false },
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

  const keywordCities = {
    "bilco door installer":           ["Queens","Brooklyn","Manhattan","The Bronx","Staten Island","Nassau County","Suffolk County","Westchester Co."],
    "cellar door installation":       ["Queens","Brooklyn","Manhattan","The Bronx","Staten Island","Nassau County"],
    "roof hatch installation":        ["Queens","Brooklyn","Manhattan","The Bronx"],
    "bathroom remodeling contractor": ["Queens","Brooklyn"],
  };

  const allCities = [
    { city: "Queens",         tier: "Tier 1", pop: 2405464, is_hq: true  },
    { city: "Brooklyn",       tier: "Tier 1", pop: 2736074, is_hq: false },
    { city: "Manhattan",      tier: "Tier 1", pop: 1694251, is_hq: false },
    { city: "The Bronx",      tier: "Tier 1", pop: 1472654, is_hq: false },
    { city: "Staten Island",  tier: "Tier 1", pop:  495747, is_hq: false },
    { city: "Nassau County",  tier: "Tier 2", pop: 1395774, is_hq: false },
    { city: "Suffolk County", tier: "Tier 2", pop: 1525920, is_hq: false },
    { city: "Westchester Co.",tier: "Tier 3", pop: 1004457, is_hq: false },
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
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const el = id => document.getElementById(id);
  if (el('hero-client'))       el('hero-client').textContent       = STRATEGY.client_name;
  if (el('hero-plan'))         el('hero-plan').textContent         = 'Plan Level A: 20 Keyword-City Combinations';
  if (el('hero-industry'))     el('hero-industry').textContent     = STRATEGY.industry;
  if (el('hero-hq'))           el('hero-hq').textContent           = `${STRATEGY.hq_city}, ${STRATEGY.state}`;
  if (el('hero-service-area')) el('hero-service-area').textContent = STRATEGY.service_area;
  if (el('stat-combos'))       el('stat-combos').textContent       = STRATEGY.total_combinations;
  if (el('stat-keywords'))     el('stat-keywords').textContent     = STRATEGY.num_selected_keywords;
  if (el('stat-markets'))      el('stat-markets').textContent      = STRATEGY.num_target_markets;
  if (el('stat-researched'))   el('stat-researched').textContent   = STRATEGY.total_keywords_researched;

  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildNotUsed();
  buildOpportunities();
  buildMobileMarketList();
  buildMobileMatrix();
});
