// DOTCOM DESIGN - SEO Strategy Data
// Cathy Sink Insurance Agency | Plan Level A | 20 Combinations | $600/mo
// Fort Myers, FL | Insurance (Personal Lines - Florida Specialty)

const STRATEGY = {
  client: {
    name: "Cathy Sink Insurance Agency",
    website: "https://www.cathysinkagency.com/",
    industry: "Insurance",
    hq: "Fort Myers, FL",
    phone: "(239) 561-8600",
    address: "13111 Paul J. Doherty Pkwy #110, Fort Myers, FL 33913",
    description: "Southwest Florida's trusted independent insurance agency, proudly serving SWFL residents since 1997 with home, flood, auto, boat, and specialty insurance.",
    stats: {
      homesInsured: "11,458",
      associates: "12",
      yearsServing: "29",
      googleRating: "4.8",
      googleReviews: "602"
    }
  },
  plan: {
    level: "A",
    price: 600,
    combinations: 20,
    keywordsCount: 4,
    marketsCount: 5
  },

  // ---- KEYWORD TABLE (full research list with tiers and status) ----
  keyword_table: [
    // Florida Specialty Lines - base keywords
    { keyword: "condo insurance",           monthly_searches:  8100, tier: "Tier 1", family: "condo insurance",           variant_type: "base",    status: "selected" },
    { keyword: "flood insurance agent",     monthly_searches:  1900, tier: "Tier 1", family: "flood insurance agent",     variant_type: "base",    status: "selected" },
    // Marine & Recreational - base keywords
    { keyword: "boat insurance",            monthly_searches:  5400, tier: "Tier 1", family: "boat insurance",            variant_type: "base",    status: "selected" },
    { keyword: "golf cart insurance",       monthly_searches:  2900, tier: "Tier 1", family: "golf cart insurance",       variant_type: "base",    status: "selected" },
    // Agency Discovery
    { keyword: "insurance agency near me",  monthly_searches:  8100, tier: "Tier 2", family: "insurance agency near me",  variant_type: "near_me", status: "near_me",  note: "Near Me variant; treated as base keyword in matrix" },
    { keyword: "independent insurance agent",monthly_searches: 2400, tier: "Tier 2", family: "independent insurance agent",variant_type: "base",   status: "not_used" },
    // Property Lines
    { keyword: "renters insurance",         monthly_searches: 40500, tier: "Tier 2", family: "renters insurance",         variant_type: "base",    status: "not_used" },
    { keyword: "landlord insurance",        monthly_searches:  4400, tier: "Tier 2", family: "landlord insurance",        variant_type: "base",    status: "not_used" },
    { keyword: "homeowners insurance agent",monthly_searches:  1900, tier: "Tier 2", family: "homeowners insurance agent",variant_type: "base",    status: "not_used" },
    // Recreational & Specialty
    { keyword: "motorcycle insurance",      monthly_searches:  5400, tier: "Tier 2", family: "motorcycle insurance",      variant_type: "base",    status: "not_used" },
    // Flood Variants
    { keyword: "flood insurance quote",     monthly_searches:  3600, tier: "Tier 3", family: "flood insurance quote",     variant_type: "variant", status: "not_used" },
    { keyword: "private flood insurance",   monthly_searches:  1300, tier: "Tier 3", family: "private flood insurance",   variant_type: "variant", status: "not_used" },
    // Marine Variants
    { keyword: "marine insurance",          monthly_searches:  2900, tier: "Tier 3", family: "marine insurance",          variant_type: "variant", status: "not_used" },
    { keyword: "boat insurance agent",      monthly_searches:   590, tier: "Tier 3", family: "boat insurance agent",      variant_type: "variant", status: "not_used" },
    // Liability Lines
    { keyword: "personal umbrella insurance",monthly_searches: 1600, tier: "Tier 3", family: "personal umbrella insurance",variant_type: "base",   status: "not_used" },
  ],

  // ---- KEYWORD TIERS (for the colored tier cards) ----
  keyword_tiers: [
    {
      tier_label: "TIER 1",
      tier_name: "Florida Specialty Lines",
      description: "Florida-specific insurance products with strong local demand and significantly lower competition than national brand-dominated terms. Flood insurance is mandatory for many Lee County properties, and the massive condo market creates consistent search volume for condo coverage. These are the ideal entry-point keywords for an independent local agency.",
      keywords: [
        { keyword: "Condo Insurance",       monthly_searches: 8100 },
        { keyword: "Boat Insurance",        monthly_searches: 5400 },
        { keyword: "Golf Cart Insurance",   monthly_searches: 2900 },
        { keyword: "Flood Insurance Agent", monthly_searches: 1900 },
      ]
    },
    {
      tier_label: "TIER 2",
      tier_name: "Agency Discovery & Property Lines",
      description: "High-intent terms used by people actively searching for a local insurance agent. Renters and landlord insurance carry strong volume but face more competition than specialty lines. These are the top candidates for Level B and Level C expansion as Cathy Sink's domain authority grows.",
      keywords: [
        { keyword: "Renters Insurance",          monthly_searches: 40500 },
        { keyword: "Insurance Agency Near Me",   monthly_searches:  8100 },
        { keyword: "Motorcycle Insurance",       monthly_searches:  5400 },
        { keyword: "Landlord Insurance",         monthly_searches:  4400 },
        { keyword: "Independent Insurance Agent",monthly_searches:  2400 },
        { keyword: "Homeowners Insurance Agent", monthly_searches:  1900 },
      ]
    },
    {
      tier_label: "TIER 3",
      tier_name: "Flood & Marine Variants",
      description: "Deeper coverage variants for flood and marine insurance. These terms are closely related to the core Tier 1 keywords and represent natural expansion opportunities once the primary keywords are established. Flood Insurance Quote and Private Flood Insurance are particularly strong candidates for Level D targeting.",
      keywords: [
        { keyword: "Flood Insurance Quote",       monthly_searches: 3600 },
        { keyword: "Marine Insurance",            monthly_searches: 2900 },
        { keyword: "Personal Umbrella Insurance", monthly_searches: 1600 },
        { keyword: "Private Flood Insurance",     monthly_searches: 1300 },
        { keyword: "Boat Insurance Agent",        monthly_searches:  590 },
      ]
    }
  ],

  // ---- SELECTED KEYWORDS (for the matrix) ----
  selected_keywords: [
    "Condo Insurance",
    "Boat Insurance",
    "Golf Cart Insurance",
    "Flood Insurance Agent",
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Property Lines: Available for Level B and C Expansion",
      description: "These property insurance terms carry strong volume but face more competition from national brands than the specialty lines in the current plan. They are the top candidates for inclusion as Cathy Sink's domain authority grows, and are prioritized for Level B and Level C upgrades.",
      keywords: [
        { keyword: "Renters Insurance",          monthly_searches: 40500 },
        { keyword: "Landlord Insurance",         monthly_searches:  4400 },
        { keyword: "Homeowners Insurance Agent", monthly_searches:  1900 },
      ]
    },
    {
      reason: "Agency Discovery: Reserved for Level B Expansion",
      description: "High-intent agency-finding terms used by consumers actively searching for a local independent agent. Insurance Agency Near Me is a near-me variant and is treated as equivalent to a base keyword in the matrix. These terms are the first candidates for inclusion upon upgrading to Level B.",
      keywords: [
        { keyword: "Insurance Agency Near Me",   monthly_searches: 8100 },
        { keyword: "Independent Insurance Agent",monthly_searches: 2400 },
      ]
    },
    {
      reason: "Recreational and Specialty Lines: Reserved for Level C Expansion",
      description: "Motorcycle insurance carries strong volume and low national brand competition in the SWFL market. This term is a strong fit for Cathy Sink's existing service offerings and is reserved for Level C targeting once the core specialty lines are established.",
      keywords: [
        { keyword: "Motorcycle Insurance", monthly_searches: 5400 },
      ]
    },
    {
      reason: "Flood and Marine Variants: Reserved for Advanced Levels",
      description: "These deeper variants of the core flood and marine keywords are best served with dedicated content pages. They are prioritized for Level D and beyond, where dedicated coverage can be built around each term.",
      keywords: [
        { keyword: "Flood Insurance Quote",       monthly_searches: 3600 },
        { keyword: "Marine Insurance",            monthly_searches: 2900 },
        { keyword: "Personal Umbrella Insurance", monthly_searches: 1600 },
        { keyword: "Private Flood Insurance",     monthly_searches: 1300 },
        { keyword: "Boat Insurance Agent",        monthly_searches:  590 },
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
      headline: "Add Agency Discovery and Renters Insurance Across All Markets",
      description: "Level B adds 10 new combinations by layering in two high-intent keywords across all 5 markets. Insurance Agency Near Me targets clients actively searching for a local independent agent, and Renters Insurance reaches the large renter population across Lee County. Both terms are underserved by national brand SEO.",
      keywords: [
        { keyword: "Insurance Agency Near Me", monthly_searches: 8100 },
        { keyword: "Renters Insurance",        monthly_searches: 40500 },
      ]
    },
    {
      plan: "Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 10,
      headline: "Add Landlord and Motorcycle Insurance Coverage",
      description: "Level C adds Landlord Insurance and Motorcycle Insurance across all 5 markets. Lee County has a large rental property market and a strong motorcycle riding community. Both terms are well within Cathy Sink's existing service offerings and are underserved by national brand SEO.",
      keywords: [
        { keyword: "Landlord Insurance",   monthly_searches: 4400 },
        { keyword: "Motorcycle Insurance", monthly_searches: 5400 },
      ]
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 10,
      headline: "Expand into Two New Markets and Add Umbrella Coverage",
      description: "Level D expands into two new markets and adds Personal Umbrella Insurance and Flood Insurance Quote across all 7 markets. Marco Island is a high-value coastal community with strong flood and umbrella insurance demand, and Lehigh Acres is Lee County's fastest-growing community.",
      keywords: [
        { keyword: "Personal Umbrella Insurance", monthly_searches: 1600 },
        { keyword: "Flood Insurance Quote",       monthly_searches: 3600 },
        { keyword: "Marco Island, FL",  monthly_searches: null, new_market: true },
        { keyword: "Lehigh Acres, FL",  monthly_searches: null, new_market: true },
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
      { city: "Fort Myers",     tier: "Tier 1", population: 106233, is_hq: true  },
      { city: "Cape Coral",     tier: "Tier 1", population: 251819, is_hq: false },
      { city: "Bonita Springs", tier: "Tier 1", population:  58724, is_hq: false },
      { city: "Estero",         tier: "Tier 2", population:  39137, is_hq: false },
      { city: "Naples",         tier: "Tier 2", population:  22000, is_hq: false },
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
    // Check if any keyword in this card is a new_market
    const hasNewMarket = opp.keywords.some(kw => kw.new_market);
    const newMarketKws = opp.keywords.filter(kw => kw.new_market);
    const newMarketDiv = hasNewMarket
      ? `<div class="opp-new-market">+ New Market: ${newMarketKws.map(k => k.keyword.replace(', FL', '')).join(' and ')}, FL</div>`
      : `<div class="opp-new-market" style="visibility:hidden">placeholder</div>`;
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
  { rank: 1,  city: 'Cape Coral',     pop: 251819, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2,  city: 'Fort Myers',     pop: 106233, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 3,  city: 'Bonita Springs', pop:  58724, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Estero',         pop:  39137, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 5,  city: 'Naples',         pop:  22000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 6,  city: 'Marco Island',   pop:  17000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 7,  city: 'Lehigh Acres',   pop:  15000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 8,  city: 'Fort Myers Beach',pop:  5170, tier: 'Tier 3', selected: false, hq: false },
  { rank: 9,  city: 'Sanibel',        pop:   6342, tier: 'Tier 3', selected: false, hq: false },
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
    { city: 'Fort Myers',     tier: 'Tier 1', pop: 106233, is_hq: true  },
    { city: 'Cape Coral',     tier: 'Tier 1', pop: 251819, is_hq: false },
    { city: 'Bonita Springs', tier: 'Tier 1', pop:  58724, is_hq: false },
    { city: 'Estero',         tier: 'Tier 2', pop:  39137, is_hq: false },
    { city: 'Naples',         tier: 'Tier 2', pop:  22000, is_hq: false },
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
