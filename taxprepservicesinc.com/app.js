// ============================================================
// SEO Strategy Website — App.js
// Tax Prep Services Inc. | Plan Level A | 20 Combinations
// Rancho Cucamonga, CA | Riverside + San Bernardino Counties
// ============================================================

const STRATEGY = {
  client_name: "Tax Prep Services Inc.",
  industry: "Tax Services",
  hq_city: "Rancho Cucamonga",
  state: "CA",
  service_area: "Riverside County and San Bernardino County, CA",
  plan_level: "Level A",
  total_combinations: 20,
  total_keywords_researched: 135,

  // Selected keywords: 4 core keywords covering all 3 client focus areas
  selected_keywords: [
    "tax preparer",
    "tax preparation",
    "tax services",
    "tax planning"
  ],
  num_selected_keywords: 4,
  num_target_markets: 5,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    // Tax Preparer family
    { keyword: "tax preparer near me",        monthly_searches: 60500, tier: "Tier 1", status: "near_me",  family: "tax preparer",    variant_type: "near_me" },
    { keyword: "tax preparer",                monthly_searches: 22200, tier: "Tier 1", status: "selected", family: "tax preparer",    variant_type: "base" },
    { keyword: "tax preparers near me",       monthly_searches: 18100, tier: "Tier 1", status: "near_me",  family: "tax preparer",    variant_type: "near_me" },
    { keyword: "tax preparers",               monthly_searches:  6600, tier: "Tier 1", status: "not_used", family: "tax preparer",    variant_type: "plural" },
    { keyword: "top tax preparer near me",    monthly_searches:  2900, tier: "Tier 1", status: "not_used", family: "tax preparer",    variant_type: "variant" },
    { keyword: "local tax preparers",         monthly_searches:  1300, tier: "Tier 1", status: "not_used", family: "tax preparer",    variant_type: "variant" },
    { keyword: "certified tax preparer",      monthly_searches:  1300, tier: "Tier 1", status: "not_used", family: "tax preparer",    variant_type: "variant" },
    { keyword: "local tax preparer",          monthly_searches:   170, tier: "Tier 1", status: "not_used", family: "tax preparer",    variant_type: "variant" },
    // Tax Preparation family
    { keyword: "tax services near me",        monthly_searches: 33100, tier: "Tier 2", status: "near_me",  family: "tax services",    variant_type: "near_me" },
    { keyword: "tax preparation near me",     monthly_searches: 18100, tier: "Tier 1", status: "near_me",  family: "tax preparation", variant_type: "near_me" },
    { keyword: "tax preparation",             monthly_searches: 22200, tier: "Tier 1", status: "selected", family: "tax preparation", variant_type: "base" },
    { keyword: "tax preparation service",     monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "tax preparation", variant_type: "variant" },
    { keyword: "tax preparation service near me", monthly_searches: 2400, tier: "Tier 1", status: "near_me", family: "tax preparation", variant_type: "near_me" },
    { keyword: "income tax preparation",      monthly_searches:  1300, tier: "Tier 1", status: "not_used", family: "tax preparation", variant_type: "variant" },
    { keyword: "business tax preparation",    monthly_searches:  1900, tier: "Tier 1", status: "not_used", family: "tax preparation", variant_type: "variant" },
    { keyword: "personal tax preparation",    monthly_searches:   480, tier: "Tier 1", status: "not_used", family: "tax preparation", variant_type: "variant" },
    { keyword: "tax return preparation",      monthly_searches:   720, tier: "Tier 1", status: "not_used", family: "tax preparation", variant_type: "variant" },
    { keyword: "affordable tax preparation",  monthly_searches:   260, tier: "Tier 1", status: "not_used", family: "tax preparation", variant_type: "variant" },
    // Tax Services family
    { keyword: "tax services",               monthly_searches: 22200, tier: "Tier 2", status: "selected", family: "tax services",    variant_type: "base" },
    { keyword: "tax professional",           monthly_searches:  5400, tier: "Tier 2", status: "not_used", family: "tax services",    variant_type: "variant" },
    { keyword: "tax help",                   monthly_searches:  5400, tier: "Tier 2", status: "not_used", family: "tax services",    variant_type: "variant" },
    { keyword: "tax specialist",             monthly_searches:  1900, tier: "Tier 2", status: "not_used", family: "tax services",    variant_type: "variant" },
    { keyword: "local tax services",         monthly_searches:   260, tier: "Tier 2", status: "not_used", family: "tax services",    variant_type: "variant" },
    { keyword: "tax preparation company",    monthly_searches:   110, tier: "Tier 2", status: "not_used", family: "tax services",    variant_type: "variant" },
    // Tax Consultant family
    { keyword: "tax consultant near me",     monthly_searches:  9900, tier: "Tier 2", status: "near_me",  family: "tax consultant",  variant_type: "near_me" },
    { keyword: "tax consultant",             monthly_searches:  9900, tier: "Tier 2", status: "not_used", family: "tax consultant",  variant_type: "base" },
    { keyword: "tax consultants near me",    monthly_searches:  3600, tier: "Tier 2", status: "near_me",  family: "tax consultant",  variant_type: "near_me" },
    // Tax Advisor family
    { keyword: "tax advisor near me",        monthly_searches:  9900, tier: "Tier 2", status: "near_me",  family: "tax advisor",     variant_type: "near_me" },
    { keyword: "tax advisor",               monthly_searches:  8100, tier: "Tier 2", status: "not_used", family: "tax advisor",     variant_type: "base" },
    // Tax Planning family
    { keyword: "tax planning",              monthly_searches:  9900, tier: "Tier 3", status: "selected", family: "tax planning",    variant_type: "base" },
    { keyword: "tax planning near me",      monthly_searches:  1000, tier: "Tier 3", status: "near_me",  family: "tax planning",    variant_type: "near_me" },
    { keyword: "tax planning services",     monthly_searches:  2900, tier: "Tier 3", status: "not_used", family: "tax planning",    variant_type: "variant" },
    { keyword: "tax plan",                  monthly_searches:  2900, tier: "Tier 3", status: "not_used", family: "tax planning",    variant_type: "variant" },
    { keyword: "tax planning strategies",   monthly_searches:  1900, tier: "Tier 3", status: "not_used", family: "tax planning",    variant_type: "variant" },
    { keyword: "tax planner",               monthly_searches:  1900, tier: "Tier 3", status: "not_used", family: "tax planning",    variant_type: "variant" },
    { keyword: "tax strategy",              monthly_searches:  1300, tier: "Tier 3", status: "not_used", family: "tax planning",    variant_type: "variant" },
    { keyword: "tax strategies",            monthly_searches:  1900, tier: "Tier 3", status: "not_used", family: "tax planning",    variant_type: "variant" },
    { keyword: "tax strategist near me",    monthly_searches:  2400, tier: "Tier 3", status: "near_me",  family: "tax planning",    variant_type: "near_me" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Core Tax Preparation",
      description: "The highest-volume, highest-intent keywords in the tax services space. These terms are used by individuals and businesses actively seeking a local professional to handle their tax filing. 'Tax preparer' and 'tax preparation' are the dominant search terms in this category and form the core of the strategy.",
      keywords: [
        { keyword: "tax preparer",             monthly_searches: 22200 },
        { keyword: "tax preparation",          monthly_searches: 22200 },
        { keyword: "tax preparers",            monthly_searches:  6600 },
        { keyword: "tax preparation service",  monthly_searches:  5400 },
        { keyword: "business tax preparation", monthly_searches:  1900 },
        { keyword: "income tax preparation",   monthly_searches:  1300 },
        { keyword: "certified tax preparer",   monthly_searches:  1300 },
        { keyword: "tax return preparation",   monthly_searches:   720 },
        { keyword: "personal tax preparation", monthly_searches:   480 },
        { keyword: "affordable tax preparation",monthly_searches:  260 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Tax Services",
      description: "Broader tax service terms that capture searchers looking for a full-service tax professional rather than a specific type of filing. 'Tax services' is the most commercially versatile keyword in the research pool, covering both individual and business tax needs across all markets.",
      keywords: [
        { keyword: "tax services",         monthly_searches: 22200 },
        { keyword: "tax consultant",       monthly_searches:  9900 },
        { keyword: "tax advisor",          monthly_searches:  8100 },
        { keyword: "tax professional",     monthly_searches:  5400 },
        { keyword: "tax help",             monthly_searches:  5400 },
        { keyword: "tax specialist",       monthly_searches:  1900 },
        { keyword: "local tax services",   monthly_searches:   260 },
        { keyword: "tax preparation company",monthly_searches: 110 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Tax Planning",
      description: "Keywords targeting clients who are looking beyond annual filing to proactive, year-round tax strategy. This tier directly supports the client's stated focus on tax planning and captures high-value clients seeking ongoing advisory relationships rather than one-time filing services.",
      keywords: [
        { keyword: "tax planning",           monthly_searches: 9900 },
        { keyword: "tax planning services",  monthly_searches: 2900 },
        { keyword: "tax plan",               monthly_searches: 2900 },
        { keyword: "tax strategist near me", monthly_searches: 2400 },
        { keyword: "tax planning strategies",monthly_searches: 1900 },
        { keyword: "tax planner",            monthly_searches: 1900 },
        { keyword: "tax strategies",         monthly_searches: 1900 },
        { keyword: "tax strategy",           monthly_searches: 1300 },
      ]
    },
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Near-Me Variants Captured Organically by Keyword-City Pages",
      description: "High-volume 'near me' and modifier variants are excluded from the matrix because keyword-city combination pages naturally rank for these intent-modified queries. Adding them as separate matrix entries would create redundant content without additional strategic value. These terms will be captured organically as the keyword-city pages gain authority.",
      keywords: [
        { keyword: "tax preparer near me",         monthly_searches: 60500 },
        { keyword: "tax services near me",          monthly_searches: 33100 },
        { keyword: "tax preparation near me",       monthly_searches: 18100 },
        { keyword: "tax consultant near me",        monthly_searches:  9900 },
        { keyword: "tax advisor near me",           monthly_searches:  9900 },
        { keyword: "tax planning near me",          monthly_searches:  1000 },
      ]
    },
    {
      reason: "Broad or Informational Terms Without Local Commercial Intent",
      description: "These terms have high search volume but lack the local commercial intent needed for keyword-city pages. Searchers using these terms are typically researching general tax topics, using tax software, or navigating to brand websites rather than seeking a local tax professional.",
      keywords: [
        { keyword: "taxes",            monthly_searches: 135000 },
        { keyword: "income tax",       monthly_searches:  74000 },
        { keyword: "tax return",       monthly_searches:  60500 },
        { keyword: "tax filing",       monthly_searches:  12100 },
        { keyword: "tax accountant",   monthly_searches:  14800 },
      ]
    },
    {
      reason: "Secondary Service Lines Reserved for Plan Expansion",
      description: "These keywords represent real services offered by Tax Prep Services Inc. but fall outside the client's stated focus on Tax Services, Tax Preparation, and Tax Planning. They are strong candidates for a future plan upgrade targeting business tax preparation, income tax preparation, and tax advisory services.",
      keywords: [
        { keyword: "tax consultant",           monthly_searches:  9900 },
        { keyword: "tax advisor",              monthly_searches:  8100 },
        { keyword: "income tax preparation",   monthly_searches:  1300 },
        { keyword: "business tax preparation", monthly_searches:  1900 },
        { keyword: "tax planning services",    monthly_searches:  2900 },
      ]
    },
    {
      reason: "Brand and Software Terms — Not Actionable for Local SEO",
      description: "These are competitor brand names and tax software product terms. They cannot be targeted by a local tax preparation business and have no value in a local SEO keyword-city strategy. They were filtered from the research pool during data cleaning.",
      keywords: [
        { keyword: "turbotax",        monthly_searches: 823000 },
        { keyword: "h&r block",       monthly_searches: 301000 },
        { keyword: "taxact",          monthly_searches: 201000 },
        { keyword: "liberty tax",     monthly_searches:  60500 },
        { keyword: "jackson hewitt",  monthly_searches:  40500 },
      ]
    },
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  // RULE: Only list items that are NEW at this plan level.
  // Never list keywords already selected in the current plan matrix.
  // Always include the plan price from the plan levels table in the skill.
  additional_opportunities: [
    {
      plan: "LEVEL B",
      price: "$900/mo",
      combinations: 30,
      additional_combinations: 10,
      headline: "Expand to 5 New High-Value Markets",
      description: "Level B adds 10 new combinations by extending the same 4 core keywords into 5 additional high-population markets across both counties. This level targets Ontario, Corona, Murrieta, Temecula, and Victorville — each with strong residential and small business populations actively searching for local tax professionals. No new keywords are needed; the existing strategy simply reaches further.",
      keywords: [
        { keyword: "Ontario, CA",     monthly_searches: null, new_market: true },
        { keyword: "Corona, CA",      monthly_searches: null, new_market: true },
        { keyword: "Murrieta, CA",    monthly_searches: null, new_market: true },
        { keyword: "Temecula, CA",    monthly_searches: null, new_market: true },
        { keyword: "Victorville, CA", monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "LEVEL C",
      price: "$1,200/mo",
      combinations: 40,
      additional_combinations: 20,
      headline: "Add Business Tax and Tax Consultant Keywords",
      description: "Level C introduces two new high-value keywords not in the current plan, bringing total coverage to 6 keywords across 7 markets. Adding 'business tax preparation' and 'tax consultant' captures the distinct search intent of small business owners and individuals seeking advisory-level tax help, opening a second layer of keyword-city pages that complement the core strategy.",
      keywords: [
        { keyword: "business tax preparation", monthly_searches: 1900 },
        { keyword: "tax consultant",           monthly_searches: 9900 },
        { keyword: "Chino, CA",               monthly_searches: null, new_market: true },
        { keyword: "Rialto, CA",              monthly_searches: null, new_market: true },
      ]
    },
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
    // Sort: base keyword first, then all variants by descending monthly_searches
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
// ============================================================
function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  const markets = [
    { city: "Riverside",         tier: "Tier 1", population: 314998, is_hq: false },
    { city: "San Bernardino",    tier: "Tier 1", population: 222101, is_hq: false },
    { city: "Fontana",           tier: "Tier 1", population: 214547, is_hq: false },
    { city: "Moreno Valley",     tier: "Tier 1", population: 213055, is_hq: false },
    { city: "Rancho Cucamonga",  tier: "Tier 1", population: 177542, is_hq: true  },
  ];
  const keywords = STRATEGY.selected_keywords;

  // Build header row 1: tier pills
  const tierCells = markets.map(m => {
    const cls = m.tier === 'Tier 1' ? 't1' : 't2';
    return `<th><span class="tier-pill ${cls} nowrap">${m.tier.toUpperCase()}</span></th>`;
  }).join('');

  // Build header row 2: city names + population
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
      <div class="nu-kw-table">
        <div class="nu-header"><span>Keyword</span><span>Mo. Searches</span></div>
        ${kwRows}
      </div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
  // 4 cards: use 2x2 grid
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
      ${opp.price ? `<div class="opp-price">${opp.price}</div>` : ''}
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
  { rank: 1,  city: 'Riverside',        pop: 314998, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2,  city: 'San Bernardino',   pop: 222101, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Fontana',          pop: 214547, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Moreno Valley',    pop: 213055, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 5,  city: 'Rancho Cucamonga', pop: 177542, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 6,  city: 'Ontario',          pop: 175265, tier: 'Tier 1', selected: false, hq: false },
  { rank: 7,  city: 'Corona',           pop: 168019, tier: 'Tier 1', selected: false, hq: false },
  { rank: 8,  city: 'Victorville',      pop: 134810, tier: 'Tier 1', selected: false, hq: false },
  { rank: 9,  city: 'Murrieta',         pop: 119415, tier: 'Tier 1', selected: false, hq: false },
  { rank: 10, city: 'Temecula',         pop: 113330, tier: 'Tier 1', selected: false, hq: false },
  { rank: 11, city: 'Jurupa Valley',    pop: 106549, tier: 'Tier 1', selected: false, hq: false },
  { rank: 12, city: 'Rialto',           pop: 103526, tier: 'Tier 1', selected: false, hq: false },
  { rank: 13, city: 'Menifee',          pop: 103143, tier: 'Tier 1', selected: false, hq: false },
  { rank: 14, city: 'Hesperia',         pop:  99818, tier: 'Tier 1', selected: false, hq: false },
  { rank: 15, city: 'Chino',            pop:  91403, tier: 'Tier 1', selected: false, hq: false },
  { rank: '16-45', city: 'Indio, Hemet, Perris, Chino Hills, Upland, Apple Valley, Lake Elsinore, Redlands + 22 more', pop: null, tier: 'Tier 1', selected: false, hq: false },
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
  const markets = [
    { city: 'Riverside',        tier: 'Tier 1', pop: 314998, is_hq: false },
    { city: 'San Bernardino',   tier: 'Tier 1', pop: 222101, is_hq: false },
    { city: 'Fontana',          tier: 'Tier 1', pop: 214547, is_hq: false },
    { city: 'Moreno Valley',    tier: 'Tier 1', pop: 213055, is_hq: false },
    { city: 'Rancho Cucamonga', tier: 'Tier 1', pop: 177542, is_hq: true  },
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

// Dynamically set kw-tier-grid column count based on number of cards
(function() {
  const grid = document.querySelector('.kw-tier-grid');
  if (!grid) return;
  const cards = grid.querySelectorAll('.kw-tier-card');
  const count = cards.length;
  if (count === 4) {
    grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
  } else if (count === 3) {
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
  } else if (count === 2) {
    grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
  } else if (count === 1) {
    grid.style.gridTemplateColumns = '1fr';
  }
})();


  // Dynamic kw-tier-grid column count: set based on actual card count
  (function() {
    var grid = document.querySelector('.kw-tier-grid');
    if (!grid) return;
    var count = grid.querySelectorAll('.kw-tier-card').length;
    if (count > 0) grid.style.gridTemplateColumns = 'repeat(' + count + ', 1fr)';
  })();

});
