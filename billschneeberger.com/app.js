// ============================================================
// SEO Strategy Website - Bill Schneeberger Painting & Decorating
// billschneeberger.com | Plan Level A | 20 Combinations
// ============================================================

const STRATEGY = {
  client_name: "Bill Schneeberger Painting & Decorating",
  industry: "Painting & Decorating",
  hq_city: "Northbrook",
  state: "IL",
  service_area: "North Shore, Chicago, IL",
  plan_level: "Level A",
  plan_price: 600,
  total_combinations: 20,
  total_keywords_researched: 68,

  selected_keywords: [
    "interior painters",
    "exterior painters",
    "wallpaper installation",
    "interior decorator"
  ],
  num_selected_keywords: 4,
  num_target_markets: 5,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    // Interior Painting family
    { keyword: "interior painters near me",          monthly_searches: 18100, tier: "Tier 1", status: "selected", family: "interior painters",    variant_type: "base" },
    { keyword: "interior painting near me",          monthly_searches: 22200, tier: "Tier 1", status: "near_me",  family: "interior painters",    variant_type: "near_me" },
    { keyword: "interior painting contractor",       monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "interior painters",    variant_type: "variant" },
    { keyword: "interior painting companies near me",monthly_searches:  4400, tier: "Tier 1", status: "not_used", family: "interior painters",    variant_type: "near_me" },
    { keyword: "interior painting services",         monthly_searches:  8100, tier: "Tier 1", status: "not_used", family: "interior painters",    variant_type: "variant" },
    { keyword: "residential painters near me",       monthly_searches:  8100, tier: "Tier 1", status: "not_used", family: "interior painters",    variant_type: "near_me" },
    { keyword: "house painters near me",             monthly_searches: 33100, tier: "Tier 1", status: "not_used", family: "interior painters",    variant_type: "near_me" },
    { keyword: "home painters near me",              monthly_searches: 14800, tier: "Tier 1", status: "not_used", family: "interior painters",    variant_type: "near_me" },
    { keyword: "painting contractors near me",       monthly_searches: 22200, tier: "Tier 1", status: "not_used", family: "interior painters",    variant_type: "near_me" },
    { keyword: "interior house painters near me",    monthly_searches:  9900, tier: "Tier 1", status: "not_used", family: "interior painters",    variant_type: "near_me" },
    // Exterior Painting family
    { keyword: "exterior painters near me",          monthly_searches: 14800, tier: "Tier 2", status: "selected", family: "exterior painters",    variant_type: "base" },
    { keyword: "exterior painting near me",          monthly_searches: 18100, tier: "Tier 2", status: "near_me",  family: "exterior painters",    variant_type: "near_me" },
    { keyword: "exterior house painting near me",    monthly_searches:  9900, tier: "Tier 2", status: "not_used", family: "exterior painters",    variant_type: "near_me" },
    { keyword: "house painting near me",             monthly_searches: 27100, tier: "Tier 2", status: "not_used", family: "exterior painters",    variant_type: "near_me" },
    { keyword: "exterior painting contractor",       monthly_searches:  4400, tier: "Tier 2", status: "not_used", family: "exterior painters",    variant_type: "variant" },
    { keyword: "exterior painting companies near me",monthly_searches:  3600, tier: "Tier 2", status: "not_used", family: "exterior painters",    variant_type: "near_me" },
    { keyword: "exterior house painters",            monthly_searches:  9900, tier: "Tier 2", status: "not_used", family: "exterior painters",    variant_type: "variant" },
    // Wallpaper Installation family
    { keyword: "wallpaper installation near me",     monthly_searches: 12100, tier: "Tier 3", status: "selected", family: "wallpaper",            variant_type: "base" },
    { keyword: "wallpaper installer near me",        monthly_searches:  9900, tier: "Tier 3", status: "not_used", family: "wallpaper",            variant_type: "near_me" },
    { keyword: "wallpaper hanger near me",           monthly_searches:  6600, tier: "Tier 3", status: "not_used", family: "wallpaper",            variant_type: "near_me" },
    { keyword: "wallpaper removal near me",          monthly_searches:  8100, tier: "Tier 3", status: "not_used", family: "wallpaper",            variant_type: "near_me" },
    { keyword: "wallpaper hanging service",          monthly_searches:  4400, tier: "Tier 3", status: "not_used", family: "wallpaper",            variant_type: "variant" },
    { keyword: "wallpaper contractor near me",       monthly_searches:  2900, tier: "Tier 3", status: "not_used", family: "wallpaper",            variant_type: "near_me" },
    // Interior Decorator family
    { keyword: "interior decorator near me",         monthly_searches: 22200, tier: "Tier 4", status: "selected", family: "interior decorator",   variant_type: "base" },
    { keyword: "interior design near me",            monthly_searches: 33100, tier: "Tier 4", status: "not_used", family: "interior decorator",   variant_type: "near_me" },
    { keyword: "home decorator near me",             monthly_searches:  5400, tier: "Tier 4", status: "not_used", family: "interior decorator",   variant_type: "near_me" },
    { keyword: "interior decorating services",       monthly_searches:  8100, tier: "Tier 4", status: "not_used", family: "interior decorator",   variant_type: "variant" },
    { keyword: "residential interior designer near me",monthly_searches: 4400,tier: "Tier 4", status: "not_used", family: "interior decorator",   variant_type: "near_me" },
    { keyword: "interior color consultant near me",  monthly_searches:  2900, tier: "Tier 4", status: "not_used", family: "interior decorator",   variant_type: "near_me" },
    // Out of scope
    { keyword: "commercial painters near me",        monthly_searches:  9900, tier: "Tier 1", status: "not_used", family: "out of scope",         variant_type: "variant" },
    { keyword: "cabinet painting near me",           monthly_searches:  8100, tier: "Tier 1", status: "not_used", family: "out of scope",         variant_type: "variant" },
    { keyword: "deck painting near me",              monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "out of scope",         variant_type: "variant" },
    { keyword: "painting classes near me",           monthly_searches: 12100, tier: "Tier 1", status: "not_used", family: "out of scope",         variant_type: "variant" },
    { keyword: "paint store near me",                monthly_searches: 49500, tier: "Tier 1", status: "not_used", family: "out of scope",         variant_type: "variant" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Interior Painting Services",
      description: "High-intent keywords targeting homeowners actively searching for interior painting contractors. These are the highest-volume, highest-conversion terms in the painting industry. Customers searching these terms are ready to hire and represent the core revenue driver for Bill Schneeberger Painting & Decorating. These keywords are distributed across all 5 markets to maximize local visibility.",
      keywords: [
        { keyword: "interior painters near me",           monthly_searches: 18100 },
        { keyword: "interior painting near me",           monthly_searches: 22200 },
        { keyword: "house painters near me",              monthly_searches: 33100 },
        { keyword: "painting contractors near me",        monthly_searches: 22200 },
        { keyword: "home painters near me",               monthly_searches: 14800 },
        { keyword: "interior house painters near me",     monthly_searches:  9900 },
        { keyword: "interior painting services",          monthly_searches:  8100 },
        { keyword: "residential painters near me",        monthly_searches:  8100 },
        { keyword: "interior painting contractor",        monthly_searches:  5400 },
        { keyword: "interior painting companies near me", monthly_searches:  4400 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Exterior Painting Services",
      description: "High-intent keywords for exterior and house painting services. Exterior painting is a major revenue category for Bill Schneeberger, particularly during spring and summer seasons. These terms target homeowners ready to refresh their home's curb appeal and represent a distinct service vertical with strong commercial intent across the North Shore.",
      keywords: [
        { keyword: "house painting near me",              monthly_searches: 27100 },
        { keyword: "exterior painting near me",           monthly_searches: 18100 },
        { keyword: "exterior painters near me",           monthly_searches: 14800 },
        { keyword: "exterior house painters",             monthly_searches:  9900 },
        { keyword: "exterior house painting near me",     monthly_searches:  9900 },
        { keyword: "exterior painting contractor",        monthly_searches:  4400 },
        { keyword: "exterior painting companies near me", monthly_searches:  3600 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Wallpaper Installation",
      description: "Specialty keywords targeting homeowners seeking professional wallpaper installation and removal. This is a distinct service line that sets Bill Schneeberger apart from general painting contractors. The North Shore market has strong demand for wallpaper services given the prevalence of older, high-value homes. One keyword is included in the current plan to establish initial visibility in this niche.",
      keywords: [
        { keyword: "wallpaper installation near me",  monthly_searches: 12100 },
        { keyword: "wallpaper installer near me",     monthly_searches:  9900 },
        { keyword: "wallpaper removal near me",       monthly_searches:  8100 },
        { keyword: "wallpaper hanger near me",        monthly_searches:  6600 },
        { keyword: "wallpaper hanging service",       monthly_searches:  4400 },
        { keyword: "wallpaper contractor near me",    monthly_searches:  2900 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Interior Design & Decorating",
      description: "High-volume keywords targeting homeowners seeking interior design and decorating consultation. Bill Schneeberger's 50-year history and expertise in color selection and decorating positions the company uniquely in this category. These terms attract customers at an earlier stage of the buying journey who are planning a full interior refresh, representing a strong upsell opportunity for painting and wallpaper services.",
      keywords: [
        { keyword: "interior design near me",              monthly_searches: 33100 },
        { keyword: "interior decorator near me",           monthly_searches: 22200 },
        { keyword: "interior decorating services",         monthly_searches:  8100 },
        { keyword: "home decorator near me",               monthly_searches:  5400 },
        { keyword: "residential interior designer near me",monthly_searches:  4400 },
        { keyword: "interior color consultant near me",    monthly_searches:  2900 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Consolidated Under Selected Keywords",
      description: "These keywords share the same core search intent as the selected keywords and would target the same pages. Including them as separate keyword targets would dilute SEO efforts without adding meaningful coverage. The selected base keywords already capture the search demand from these variants.",
      keywords: [
        { keyword: "house painters near me",          monthly_searches: 33100 },
        { keyword: "painting contractors near me",    monthly_searches: 22200 },
        { keyword: "interior painting near me",       monthly_searches: 22200 },
        { keyword: "house painting near me",          monthly_searches: 27100 },
        { keyword: "exterior painting near me",       monthly_searches: 18100 },
        { keyword: "home painters near me",           monthly_searches: 14800 },
      ]
    },
    {
      reason: "Reserved for Plan Expansion",
      description: "These are strong keywords representing distinct service lines or higher-specificity variants. They are not included in the current 20-combination plan because the plan's combination budget is fully allocated to the four core service lines. These terms are strong candidates for Level B or Level C expansion.",
      keywords: [
        { keyword: "wallpaper installer near me",          monthly_searches:  9900 },
        { keyword: "wallpaper removal near me",            monthly_searches:  8100 },
        { keyword: "wallpaper hanger near me",             monthly_searches:  6600 },
        { keyword: "interior design near me",              monthly_searches: 33100 },
        { keyword: "residential painters near me",         monthly_searches:  8100 },
        { keyword: "interior decorating services",         monthly_searches:  8100 },
      ]
    },
    {
      reason: "Outside Service Scope",
      description: "These keywords represent services that Bill Schneeberger Painting & Decorating does not offer, or that fall outside the residential painting and decorating focus of the business. Including them would attract unqualified traffic and misrepresent the company's offerings.",
      keywords: [
        { keyword: "commercial painters near me", monthly_searches:  9900 },
        { keyword: "cabinet painting near me",    monthly_searches:  8100 },
        { keyword: "deck painting near me",       monthly_searches:  5400 },
        { keyword: "painting classes near me",    monthly_searches: 12100 },
        { keyword: "paint store near me",         monthly_searches: 49500 },
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
      headline: "Expand to More North Shore Markets",
      description: "Level B adds 10 more keyword-city combinations, extending coverage into Buffalo Grove, Lake Forest, and Winnetka. These three affluent communities represent high-value residential painting markets with strong demand for premium interior and exterior services. Level B also introduces a fifth keyword targeting the wallpaper removal service line.",
      new_market: true,
      keywords: [
        { keyword: "Buffalo Grove, IL",    monthly_searches: null, new_market: true },
        { keyword: "Lake Forest, IL",      monthly_searches: null, new_market: true },
        { keyword: "Winnetka, IL",         monthly_searches: null, new_market: true },
        { keyword: "wallpaper removal near me", monthly_searches: 8100 },
      ]
    },
    {
      plan: "Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 20,
      headline: "Add Specialty Keywords and Expand Coverage",
      description: "Level C introduces wallpaper installer and interior design as standalone keyword targets, capturing customers searching for these specialty services. Coverage expands into Evanston and Libertyville, two high-population markets adjacent to the current service area. This level establishes Bill Schneeberger as the dominant specialty painting and decorating company across the entire North Shore.",
      new_market: true,
      keywords: [
        { keyword: "Evanston, IL",            monthly_searches: null, new_market: true },
        { keyword: "Libertyville, IL",        monthly_searches: null, new_market: true },
        { keyword: "wallpaper installer near me", monthly_searches: 9900 },
        { keyword: "interior design near me",    monthly_searches: 33100 },
      ]
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 30,
      headline: "Dominate Interior Design Search Across the North Shore",
      description: "Level D adds interior design and home decorator keywords across all markets, capturing homeowners at the planning stage of a full interior refresh. This level also expands into Vernon Hills and Mundelein, extending reach into the western Lake County corridor. At Level D, Bill Schneeberger achieves comprehensive visibility across every major North Shore community.",
      new_market: true,
      keywords: [
        { keyword: "Vernon Hills, IL",        monthly_searches: null, new_market: true },
        { keyword: "Mundelein, IL",           monthly_searches: null, new_market: true },
        { keyword: "interior design near me", monthly_searches: 33100 },
        { keyword: "home decorator near me",  monthly_searches:  5400 },
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
// POPULATE KEYWORD TIER CARDS — Approach C: flat section tables
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
        <span class="flat-tier-count">${tier.keywords.length} keyword${tier.keywords.length !== 1 ? 's' : ''} in tier</span>
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
// POPULATE MATRIX — Approach C: one card per city
// ============================================================
function buildMatrix() {
  const markets = [
    { city: "Northbrook", state: "IL", tier: "Tier 1", population: 35222, is_hq: true  },
    { city: "Glenview",   state: "IL", tier: "Tier 1", population: 47000, is_hq: false },
    { city: "Highland Park", state: "IL", tier: "Tier 2", population: 31112, is_hq: false },
    { city: "Wilmette",   state: "IL", tier: "Tier 2", population: 28000, is_hq: false },
    { city: "Deerfield",  state: "IL", tier: "Tier 2", population: 19142, is_hq: false },
  ];
  const keywords = STRATEGY.selected_keywords;
  const el = document.getElementById('matrix-city-grid');
  if (!el) return;

  let cards = '';
  let grandTotal = 0;

  markets.forEach(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const cityLabel = m.city + ', ' + m.state;
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

  el.innerHTML = cards;
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
  { rank: 1,  city: 'Northbrook',    pop:  35222, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 2,  city: 'Glenview',      pop:  47000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Highland Park', pop:  31112, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 4,  city: 'Wilmette',      pop:  28000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 5,  city: 'Deerfield',     pop:  19142, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 6,  city: 'Buffalo Grove', pop:  43061, tier: 'Tier 2', selected: false, hq: false },
  { rank: 7,  city: 'Lake Forest',   pop:  19788, tier: 'Tier 2', selected: false, hq: false },
  { rank: 8,  city: 'Winnetka',      pop:  12500, tier: 'Tier 2', selected: false, hq: false },
  { rank: 9,  city: 'Libertyville',  pop:  20683, tier: 'Tier 2', selected: false, hq: false },
  { rank: 10, city: 'Evanston',      pop:  78110, tier: 'Tier 1', selected: false, hq: false },
  { rank: '11+', city: 'Waukegan, Gurnee, Vernon Hills, Lake Zurich + more', pop: null, tier: 'Tier 3', selected: false, hq: false },
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
    { city: 'Northbrook',    state: 'IL', tier: 'Tier 1', pop: 35222, is_hq: true  },
    { city: 'Glenview',      state: 'IL', tier: 'Tier 1', pop: 47000, is_hq: false },
    { city: 'Highland Park', state: 'IL', tier: 'Tier 2', pop: 31112, is_hq: false },
    { city: 'Wilmette',      state: 'IL', tier: 'Tier 2', pop: 28000, is_hq: false },
    { city: 'Deerfield',     state: 'IL', tier: 'Tier 2', pop: 19142, is_hq: false },
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
});
