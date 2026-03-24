// ============================================================
// SEO Strategy Website — App.js
// Kitchen Cabinets Etc | Bellevue, WA | Plan Level A | 20 Combos
// Permanent rules: no em-dashes, full client name always,
// cities-as-rows matrix when markets >= 6
// ============================================================

const STRATEGY = {
  client_name: "Kitchen Cabinets Etc",
  industry: "Cabinets, Countertops & Window Treatments",
  hq_city: "Bellevue",
  state: "WA",
  service_area: "Eastside King County, WA",
  plan_level: "Level A",
  plan_price: 900,
  total_combinations: 20,
  total_keywords_researched: 22,
  selected_keywords: [
    "cabinet makers near me",
    "countertop store",
    "window treatment company near me"
  ],
  num_selected_keywords: 3,
  num_target_markets: 8,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    // Cabinet family
    { keyword: "cabinet makers near me",         monthly_searches: 14800, tier: "Tier 1", status: "selected", family: "cabinet makers",    variant_type: "base" },
    { keyword: "cabinet makers",                 monthly_searches: 12100, tier: "Tier 1", status: "near_me",  family: "cabinet makers",    variant_type: "near_me" },
    { keyword: "custom cabinet makers near me",  monthly_searches:  4400, tier: "Tier 1", status: "not_used", family: "cabinet makers",    variant_type: "variant" },
    { keyword: "kitchen cabinet makers",         monthly_searches:  2400, tier: "Tier 1", status: "not_used", family: "cabinet makers",    variant_type: "variant" },
    { keyword: "cabinet refacing near me",       monthly_searches:  2900, tier: "Tier 1", status: "not_used", family: "cabinet makers",    variant_type: "variant" },
    { keyword: "custom kitchen cabinets",        monthly_searches:  8100, tier: "Tier 1", status: "not_used", family: "cabinet makers",    variant_type: "variant" },
    { keyword: "kitchen cabinet installation",   monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "cabinet makers",    variant_type: "variant" },
    { keyword: "bathroom cabinet makers",        monthly_searches:   880, tier: "Tier 1", status: "not_used", family: "cabinet makers",    variant_type: "variant" },
    // Countertop family
    { keyword: "countertop store",               monthly_searches:  9900, tier: "Tier 2", status: "selected", family: "countertops",       variant_type: "base" },
    { keyword: "countertop stores near me",      monthly_searches:  4400, tier: "Tier 2", status: "near_me",  family: "countertops",       variant_type: "near_me" },
    { keyword: "granite countertops near me",    monthly_searches: 22200, tier: "Tier 2", status: "not_used", family: "countertops",       variant_type: "variant" },
    { keyword: "quartz countertops near me",     monthly_searches: 14800, tier: "Tier 2", status: "not_used", family: "countertops",       variant_type: "variant" },
    { keyword: "marble countertops near me",     monthly_searches:  6600, tier: "Tier 2", status: "not_used", family: "countertops",       variant_type: "variant" },
    { keyword: "countertop installation",        monthly_searches:  5400, tier: "Tier 2", status: "not_used", family: "countertops",       variant_type: "variant" },
    { keyword: "countertop fabricators near me", monthly_searches:  2900, tier: "Tier 2", status: "not_used", family: "countertops",       variant_type: "variant" },
    // Window treatment family
    { keyword: "window treatment company near me",monthly_searches: 5400, tier: "Tier 3", status: "selected", family: "window treatments", variant_type: "base" },
    { keyword: "window treatments near me",      monthly_searches:  9900, tier: "Tier 3", status: "near_me",  family: "window treatments", variant_type: "near_me" },
    { keyword: "blinds and shutters near me",    monthly_searches:  2400, tier: "Tier 3", status: "not_used", family: "window treatments", variant_type: "variant" },
    { keyword: "window blinds near me",          monthly_searches:  6600, tier: "Tier 3", status: "not_used", family: "window treatments", variant_type: "variant" },
    { keyword: "motorized blinds installation",  monthly_searches:  1300, tier: "Tier 3", status: "not_used", family: "window treatments", variant_type: "variant" },
    { keyword: "roman shades near me",           monthly_searches:  1600, tier: "Tier 3", status: "not_used", family: "window treatments", variant_type: "variant" },
    { keyword: "cellular shades near me",        monthly_searches:   720, tier: "Tier 3", status: "not_used", family: "window treatments", variant_type: "variant" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Custom Cabinets",
      description: "The primary service pillar for Kitchen Cabinets Etc. Cabinet-related keywords carry the highest search volume and the strongest commercial intent. Customers searching these terms are actively planning a kitchen or bathroom remodel and are ready to engage with a showroom. This tier anchors the strategy and receives the widest market coverage across all eight Eastside communities.",
      keywords: [
        { keyword: "cabinet makers near me",        monthly_searches: 14800 },
        { keyword: "cabinet makers",                monthly_searches: 12100 },
        { keyword: "custom kitchen cabinets",       monthly_searches:  8100 },
        { keyword: "kitchen cabinet installation",  monthly_searches:  5400 },
        { keyword: "custom cabinet makers near me", monthly_searches:  4400 },
        { keyword: "cabinet refacing near me",      monthly_searches:  2900 },
        { keyword: "kitchen cabinet makers",        monthly_searches:  2400 },
        { keyword: "bathroom cabinet makers",       monthly_searches:   880 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Countertops",
      description: "Countertop keywords represent the second major service pillar. Customers searching for countertop stores are often in the active buying phase of a kitchen remodel, making these terms highly valuable for driving showroom visits. The countertop store keyword is targeted across all eight markets to maximize visibility for this service line.",
      keywords: [
        { keyword: "granite countertops near me",    monthly_searches: 22200 },
        { keyword: "quartz countertops near me",     monthly_searches: 14800 },
        { keyword: "marble countertops near me",     monthly_searches:  6600 },
        { keyword: "countertop store",               monthly_searches:  9900 },
        { keyword: "countertop stores near me",      monthly_searches:  4400 },
        { keyword: "countertop installation",        monthly_searches:  5400 },
        { keyword: "countertop fabricators near me", monthly_searches:  2900 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Window Treatments",
      description: "Window treatment keywords represent the third service pillar. While lower in volume than cabinet and countertop terms, these keywords target a distinct customer segment with a specific need. The window treatment company keyword is targeted in the four most affluent Eastside markets, where demand for premium motorized and specialty window treatments is highest.",
      keywords: [
        { keyword: "window treatments near me",       monthly_searches:  9900 },
        { keyword: "window blinds near me",           monthly_searches:  6600 },
        { keyword: "window treatment company near me",monthly_searches:  5400 },
        { keyword: "roman shades near me",            monthly_searches:  1600 },
        { keyword: "blinds and shutters near me",     monthly_searches:  2400 },
        { keyword: "motorized blinds installation",   monthly_searches:  1300 },
        { keyword: "cellular shades near me",         monthly_searches:   720 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Redundant with Selected Keywords",
      description: "These keywords capture the same search intent as the selected keywords and would compete with them for the same rankings. Including both would dilute the strategy without adding meaningful incremental reach. The selected keyword in each case captures the broadest, highest-intent version of the search.",
      keywords: [
        { keyword: "cabinet makers",                monthly_searches: 12100 },
        { keyword: "countertop stores near me",     monthly_searches:  4400 },
        { keyword: "window treatments near me",     monthly_searches:  9900 },
      ]
    },
    {
      reason: "High Volume, High Competition: Reserved for Expansion",
      description: "These keywords have strong search volume but carry medium-to-high competition scores. They are best introduced once the domain has established authority through the current plan. They are the primary drivers for the Level B and Level C upgrade tiers.",
      keywords: [
        { keyword: "granite countertops near me",    monthly_searches: 22200 },
        { keyword: "quartz countertops near me",     monthly_searches: 14800 },
        { keyword: "custom kitchen cabinets",        monthly_searches:  8100 },
        { keyword: "window blinds near me",          monthly_searches:  6600 },
        { keyword: "kitchen cabinet installation",   monthly_searches:  5400 },
        { keyword: "marble countertops near me",     monthly_searches:  6600 },
        { keyword: "countertop installation",        monthly_searches:  5400 },
        { keyword: "custom cabinet makers near me",  monthly_searches:  4400 },
      ]
    },
    {
      reason: "Below Volume Threshold for Current Plan Level",
      description: "These keywords are valid service-line terms but fall below the search volume threshold appropriate for a Level A plan. They become viable additions at Level C or higher, where the plan has sufficient combinations to justify targeting lower-volume specialty terms.",
      keywords: [
        { keyword: "cabinet refacing near me",       monthly_searches:  2900 },
        { keyword: "countertop fabricators near me", monthly_searches:  2900 },
        { keyword: "kitchen cabinet makers",         monthly_searches:  2400 },
        { keyword: "blinds and shutters near me",    monthly_searches:  2400 },
        { keyword: "roman shades near me",           monthly_searches:  1600 },
        { keyword: "motorized blinds installation",  monthly_searches:  1300 },
        { keyword: "bathroom cabinet makers",        monthly_searches:   880 },
        { keyword: "cellular shades near me",        monthly_searches:   720 },
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
      headline: "Add Granite and Quartz Countertop Keywords Across Top Markets",
      description: "Upgrading to Level B adds 10 additional combinations by introducing the two highest-volume countertop keywords. Granite and quartz countertop searches represent customers in the active buying phase of a remodel, making these terms among the highest-conversion additions available.",
      keywords: [
        { keyword: "granite countertops near me", monthly_searches: 22200 },
        { keyword: "quartz countertops near me",  monthly_searches: 14800 },
        { keyword: "Renton, WA",                  monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 20,
      headline: "Expand Cabinet Coverage and Add Kenmore and Newcastle",
      description: "Level C adds dedicated coverage for custom kitchen cabinet keywords and introduces two new markets: Kenmore and Newcastle. This tier is designed to deepen the cabinet service line while extending geographic reach into the northern and southern Eastside corridor.",
      keywords: [
        { keyword: "custom kitchen cabinets",       monthly_searches:  8100 },
        { keyword: "kitchen cabinet installation",  monthly_searches:  5400 },
        { keyword: "Kenmore, WA",                   monthly_searches: null, new_market: true },
        { keyword: "Newcastle, WA",                 monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 30,
      headline: "Full Eastside Domination: All Three Service Lines at Scale",
      description: "Level D delivers comprehensive coverage for all three service pillars across the full Eastside corridor. Window blind and specialty countertop keywords are added across all markets, and the plan expands into Renton, Kenmore, and Newcastle for full South and North King County reach.",
      keywords: [
        { keyword: "window blinds near me",          monthly_searches:  6600 },
        { keyword: "marble countertops near me",     monthly_searches:  6600 },
        { keyword: "cabinet refacing near me",       monthly_searches:  2900 },
        { keyword: "Renton, WA",                     monthly_searches: null, new_market: true },
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
// POPULATE MATRIX TABLE (cities as rows, keywords as columns)
// Rule: always use cities-as-rows when markets >= 6
// ============================================================
function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  const markets = [
    { city: "Bellevue",      tier: "Tier 1", population: 151854, is_hq: true  },
    { city: "Kirkland",      tier: "Tier 1", population:  92175, is_hq: false },
    { city: "Redmond",       tier: "Tier 1", population:  73256, is_hq: false },
    { city: "Sammamish",     tier: "Tier 1", population:  69942, is_hq: false },
    { city: "Bothell",       tier: "Tier 1", population:  52767, is_hq: false },
    { city: "Issaquah",      tier: "Tier 1", population:  40051, is_hq: false },
    { city: "Mercer Island", tier: "Tier 2", population:  26320, is_hq: false },
    { city: "Woodinville",   tier: "Tier 2", population:  14107, is_hq: false },
  ];

  // cityMatrix: which keywords are assigned to each city
  // cabinet makers near me: all 8 markets
  // countertop store: all 8 markets
  // window treatment company near me: top 4 affluent markets only (Bellevue, Kirkland, Mercer Island, Sammamish)
  const cityMatrix = {
    "Bellevue":      ["cabinet makers near me", "countertop store", "window treatment company near me"],
    "Kirkland":      ["cabinet makers near me", "countertop store", "window treatment company near me"],
    "Redmond":       ["cabinet makers near me", "countertop store"],
    "Sammamish":     ["cabinet makers near me", "countertop store", "window treatment company near me"],
    "Bothell":       ["cabinet makers near me", "countertop store"],
    "Issaquah":      ["cabinet makers near me", "countertop store"],
    "Mercer Island": ["cabinet makers near me", "countertop store", "window treatment company near me"],
    "Woodinville":   ["cabinet makers near me", "countertop store"],
  };

  const keywords = STRATEGY.selected_keywords;

  // Header row: keyword columns
  const kwHeaders = keywords.map(kw => `<th class="city-header">${kw}</th>`).join('');
  thead.innerHTML = `<tr><th class="kw-col-header">City / Market</th>${kwHeaders}<th class="city-header">Total</th></tr>`;

  // City rows
  const rows = markets.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : 't2';
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-star">&#9733;</span>` : m.city;
    const assigned = cityMatrix[m.city] || [];
    const cells = keywords.map(kw =>
      assigned.includes(kw)
        ? `<td class="check-cell matrix-check">&#10003;</td>`
        : `<td class="check-cell check-na">&#8212;</td>`
    ).join('');
    const rowTotal = assigned.length;
    return `<tr>
      <td class="city-row-label">
        <span class="city-name-main">${cityLabel}</span>
        <span class="city-meta-row"><span class="tier-pill ${tierCls} nowrap">${m.tier.toUpperCase()}</span> <span class="city-pop-sm">Pop. ${fmt(m.population)}</span></span>
      </td>
      ${cells}
      <td class="city-total-cell">${rowTotal}</td>
    </tr>`;
  }).join('');

  const grandTotal = markets.reduce((sum, m) => sum + (cityMatrix[m.city] || []).length, 0);
  tbody.innerHTML = rows
    + `<tr class="total-row"><td class="total-label">Total Combinations</td>${keywords.map(kw => {
        const count = markets.filter(m => (cityMatrix[m.city] || []).includes(kw)).length;
        return `<td class="total-cell">${count}</td>`;
      }).join('')}<td class="total-cell">${grandTotal}</td></tr>`
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
  { rank: 1, city: 'Bellevue',      pop: 151854, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 2, city: 'Kirkland',      pop:  92175, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3, city: 'Redmond',       pop:  73256, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4, city: 'Sammamish',     pop:  69942, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 5, city: 'Bothell',       pop:  52767, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 6, city: 'Issaquah',      pop:  40051, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 7, city: 'Mercer Island', pop:  26320, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 8, city: 'Woodinville',   pop:  14107, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 9, city: 'Renton',        pop: 106785, tier: 'Tier 2', selected: false, hq: false },
  { rank: 10, city: 'Kenmore',      pop:  23000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 11, city: 'Newcastle',    pop:  12000, tier: 'Tier 2', selected: false, hq: false },
  { rank: '12+', city: 'Shoreline, Burien, Kent, Auburn, Federal Way + others (Seattle excluded)', pop: null, tier: 'Tier 3', selected: false, hq: false },
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
    { city: 'Bellevue',      tier: 'Tier 1', pop: 151854, is_hq: true  },
    { city: 'Kirkland',      tier: 'Tier 1', pop:  92175, is_hq: false },
    { city: 'Redmond',       tier: 'Tier 1', pop:  73256, is_hq: false },
    { city: 'Sammamish',     tier: 'Tier 1', pop:  69942, is_hq: false },
    { city: 'Bothell',       tier: 'Tier 1', pop:  52767, is_hq: false },
    { city: 'Issaquah',      tier: 'Tier 1', pop:  40051, is_hq: false },
    { city: 'Mercer Island', tier: 'Tier 2', pop:  26320, is_hq: false },
    { city: 'Woodinville',   tier: 'Tier 2', pop:  14107, is_hq: false },
  ];
  const cityMatrix = {
    "Bellevue":      ["cabinet makers near me", "countertop store", "window treatment company near me"],
    "Kirkland":      ["cabinet makers near me", "countertop store", "window treatment company near me"],
    "Redmond":       ["cabinet makers near me", "countertop store"],
    "Sammamish":     ["cabinet makers near me", "countertop store", "window treatment company near me"],
    "Bothell":       ["cabinet makers near me", "countertop store"],
    "Issaquah":      ["cabinet makers near me", "countertop store"],
    "Mercer Island": ["cabinet makers near me", "countertop store", "window treatment company near me"],
    "Woodinville":   ["cabinet makers near me", "countertop store"],
  };
  const cards = markets.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : 't2';
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const assigned = cityMatrix[m.city] || [];
    const kwList = assigned.map(kw =>
      `<div class="mob-matrix-kw"><span class="mob-matrix-check">&#10003;</span><span>${kw}</span></div>`
    ).join('');
    return `<div class="mob-matrix-card">
      <div class="mob-matrix-city">
        <span class="mob-matrix-city-name">${cityLabel}</span>
        <span class="mob-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp; Pop. ${fmt(m.pop)}</span>
      </div>
      <div class="mob-matrix-kws">${kwList}</div>
      <div class="mob-matrix-total">${assigned.length} combinations</div>
    </div>`;
  }).join('');
  const grandTotal = markets.reduce((sum, m) => sum + (cityMatrix[m.city] || []).length, 0);
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
