// ============================================================
// SEO Strategy Website - App.js
// Builders Overhead Door | buildersoverhead.net
// Plan Level A: 20 keyword-city combinations
// 4 keywords x 5 markets
// ============================================================

const STRATEGY = {
  client_name: "Builders Overhead Door",
  industry: "Overhead Door & Garage Door",
  hq_city: "Blue Springs",
  state: "MO",
  service_area: "Kansas City Metro, MO/KS",
  plan_level: "Level A",
  plan_price: 600,
  total_combinations: 20,
  total_keywords_researched: 66,
  selected_keywords: [
    "garage door repair",
    "garage door installation",
    "garage door opener installation",
    "garage door replacement"
  ],
  num_selected_keywords: 4,
  num_target_markets: 5,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    // Garage Door Repair family
    { keyword: "garage door repair near me",            monthly_searches: 74000, tier: "Tier 1", status: "near_me",  family: "garage door repair",       variant_type: "near_me" },
    { keyword: "garage door repair",                    monthly_searches: 60500, tier: "Tier 1", status: "selected", family: "garage door repair",       variant_type: "base" },
    { keyword: "garage door spring repair",             monthly_searches: 18100, tier: "Tier 1", status: "not_used", family: "garage door repair",       variant_type: "variant" },
    { keyword: "garage door repair service",            monthly_searches: 22200, tier: "Tier 1", status: "not_used", family: "garage door repair",       variant_type: "variant" },
    { keyword: "garage door spring repair near me",     monthly_searches:  9900, tier: "Tier 1", status: "near_me",  family: "garage door repair",       variant_type: "near_me" },
    { keyword: "garage door repair company",            monthly_searches: 14800, tier: "Tier 1", status: "not_used", family: "garage door repair",       variant_type: "variant" },
    { keyword: "garage door repair companies near me",  monthly_searches:  9900, tier: "Tier 1", status: "near_me",  family: "garage door repair",       variant_type: "near_me" },
    { keyword: "broken garage door repair",             monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "garage door repair",       variant_type: "variant" },
    { keyword: "emergency garage door repair",          monthly_searches:  4400, tier: "Tier 1", status: "not_used", family: "garage door repair",       variant_type: "variant" },
    { keyword: "garage door cable repair",              monthly_searches:  6600, tier: "Tier 1", status: "not_used", family: "garage door repair",       variant_type: "variant" },
    { keyword: "garage door panel repair",              monthly_searches:  4400, tier: "Tier 1", status: "not_used", family: "garage door repair",       variant_type: "variant" },
    { keyword: "garage door track repair",              monthly_searches:  3600, tier: "Tier 1", status: "not_used", family: "garage door repair",       variant_type: "variant" },
    { keyword: "same day garage door repair",           monthly_searches:  2900, tier: "Tier 1", status: "not_used", family: "garage door repair",       variant_type: "variant" },
    // Garage Door Installation family
    { keyword: "garage door installation near me",      monthly_searches: 33100, tier: "Tier 2", status: "near_me",  family: "garage door installation", variant_type: "near_me" },
    { keyword: "garage door installation",              monthly_searches: 27100, tier: "Tier 2", status: "selected", family: "garage door installation", variant_type: "base" },
    { keyword: "new garage door installation",          monthly_searches:  6600, tier: "Tier 2", status: "not_used", family: "garage door installation", variant_type: "variant" },
    { keyword: "garage door installation service",      monthly_searches:  8100, tier: "Tier 2", status: "not_used", family: "garage door installation", variant_type: "variant" },
    { keyword: "garage door installation company",      monthly_searches:  4400, tier: "Tier 2", status: "not_used", family: "garage door installation", variant_type: "variant" },
    { keyword: "garage door installation companies near me", monthly_searches: 2900, tier: "Tier 2", status: "near_me", family: "garage door installation", variant_type: "near_me" },
    // Garage Door Opener Installation family
    { keyword: "garage door opener installation near me", monthly_searches: 22200, tier: "Tier 3", status: "near_me",  family: "garage door opener installation", variant_type: "near_me" },
    { keyword: "garage door opener installation",       monthly_searches: 18100, tier: "Tier 3", status: "selected", family: "garage door opener installation", variant_type: "base" },
    { keyword: "garage door opener repair near me",     monthly_searches: 14800, tier: "Tier 3", status: "near_me",  family: "garage door opener installation", variant_type: "near_me" },
    { keyword: "garage door opener repair",             monthly_searches: 12100, tier: "Tier 3", status: "not_used", family: "garage door opener installation", variant_type: "variant" },
    { keyword: "garage door opener replacement near me",monthly_searches:  6600, tier: "Tier 3", status: "near_me",  family: "garage door opener installation", variant_type: "near_me" },
    { keyword: "garage door opener replacement",        monthly_searches:  9900, tier: "Tier 3", status: "not_used", family: "garage door opener installation", variant_type: "variant" },
    { keyword: "garage door opener service",            monthly_searches:  5400, tier: "Tier 3", status: "not_used", family: "garage door opener installation", variant_type: "variant" },
    { keyword: "liftmaster garage door opener installation", monthly_searches: 4400, tier: "Tier 3", status: "not_used", family: "garage door opener installation", variant_type: "variant" },
    { keyword: "smart garage door opener installation", monthly_searches:  3600, tier: "Tier 3", status: "not_used", family: "garage door opener installation", variant_type: "variant" },
    // Garage Door Replacement family
    { keyword: "garage door replacement near me",       monthly_searches: 27100, tier: "Tier 4", status: "near_me",  family: "garage door replacement",  variant_type: "near_me" },
    { keyword: "garage door replacement",               monthly_searches: 22200, tier: "Tier 4", status: "selected", family: "garage door replacement",  variant_type: "base" },
    { keyword: "residential garage door replacement",   monthly_searches:  5400, tier: "Tier 4", status: "not_used", family: "garage door replacement",  variant_type: "variant" },
    { keyword: "garage door replacement service",       monthly_searches:  6600, tier: "Tier 4", status: "not_used", family: "garage door replacement",  variant_type: "variant" },
    { keyword: "garage door replacement company",       monthly_searches:  4400, tier: "Tier 4", status: "not_used", family: "garage door replacement",  variant_type: "variant" },
    { keyword: "garage door replacement companies near me", monthly_searches: 3600, tier: "Tier 4", status: "near_me", family: "garage door replacement", variant_type: "near_me" },
    // Overhead Door family
    { keyword: "overhead door near me",                  monthly_searches: 33100, tier: "Tier 5", status: "not_used", family: "overhead door",             variant_type: "near_me" },
    { keyword: "overhead door",                          monthly_searches: 27100, tier: "Tier 5", status: "not_used", family: "overhead door",             variant_type: "base" },
    { keyword: "overhead doors",                         monthly_searches: 18100, tier: "Tier 5", status: "not_used", family: "overhead door",             variant_type: "variant" },
    { keyword: "overhead door repair",                   monthly_searches:  8100, tier: "Tier 5", status: "not_used", family: "overhead door",             variant_type: "variant" },
    { keyword: "overhead door installation",             monthly_searches:  6600, tier: "Tier 5", status: "not_used", family: "overhead door",             variant_type: "variant" },
    { keyword: "overhead door company",                  monthly_searches:  5400, tier: "Tier 5", status: "not_used", family: "overhead door",             variant_type: "variant" },
    { keyword: "overhead door opener",                   monthly_searches:  4400, tier: "Tier 5", status: "not_used", family: "overhead door",             variant_type: "variant" },
    { keyword: "overhead door replacement",              monthly_searches:  3600, tier: "Tier 5", status: "not_used", family: "overhead door",             variant_type: "variant" },
    // Out of scope
    { keyword: "residential garage doors near me",      monthly_searches: 12100, tier: "Tier 1", status: "not_used", family: "out of scope",             variant_type: "base" },
    { keyword: "commercial garage doors near me",       monthly_searches:  9900, tier: "Tier 1", status: "not_used", family: "out of scope",             variant_type: "base" },
    { keyword: "garage door companies near me",         monthly_searches:  6600, tier: "Tier 1", status: "not_used", family: "out of scope",             variant_type: "base" },
    { keyword: "garage door service near me",           monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "out of scope",             variant_type: "base" },
    { keyword: "garage door cost",                      monthly_searches:  9900, tier: "Tier 1", status: "not_used", family: "out of scope",             variant_type: "base" },
    { keyword: "how to fix garage door",                monthly_searches:  8100, tier: "Tier 1", status: "not_used", family: "out of scope",             variant_type: "base" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Garage Door Repair",
      description: "The highest-volume, highest-intent service category for garage door companies. Customers searching these terms have an immediate, urgent need and a strong propensity to call. Garage door repair is the bread-and-butter term for this industry: high volume, high conversion, and versatile across all markets. We prioritize this keyword across all 5 cities in the final strategy.",
      keywords: [
        { keyword: "garage door repair",          monthly_searches: 60500 },
        { keyword: "garage door repair service",  monthly_searches: 22200 },
        { keyword: "garage door spring repair",   monthly_searches: 18100 },
        { keyword: "garage door repair company",  monthly_searches: 14800 },
        { keyword: "garage door cable repair",    monthly_searches:  6600 },
        { keyword: "broken garage door repair",   monthly_searches:  5400 },
        { keyword: "emergency garage door repair",monthly_searches:  4400 },
        { keyword: "garage door panel repair",    monthly_searches:  4400 },
        { keyword: "garage door track repair",    monthly_searches:  3600 },
        { keyword: "same day garage door repair", monthly_searches:  2900 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Garage Door Installation",
      description: "High-intent keywords targeting customers who need a new garage door installed. These searches represent a distinct, high-value service with strong commercial intent and a higher average ticket than repair. Customers searching these terms are ready to invest in a new door and are actively comparing local providers.",
      keywords: [
        { keyword: "garage door installation",          monthly_searches: 27100 },
        { keyword: "garage door installation service",  monthly_searches:  8100 },
        { keyword: "new garage door installation",      monthly_searches:  6600 },
        { keyword: "garage door installation company",  monthly_searches:  4400 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Garage Door Opener Installation",
      description: "Service-specific keywords for garage door opener installation, repair, and replacement. Customers searching these terms have a very specific, immediate need. Opener services are a distinct and growing revenue line as smart home technology drives demand for new opener upgrades. These keywords are distinct enough from general garage door terms to warrant their own tier and dedicated content.",
      keywords: [
        { keyword: "garage door opener installation",   monthly_searches: 18100 },
        { keyword: "garage door opener repair",         monthly_searches: 12100 },
        { keyword: "garage door opener replacement",    monthly_searches:  9900 },
        { keyword: "garage door opener service",        monthly_searches:  5400 },
        { keyword: "liftmaster garage door opener installation", monthly_searches: 4400 },
        { keyword: "smart garage door opener installation", monthly_searches: 3600 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Garage Door Replacement",
      description: "Keywords targeting customers who need a full garage door replacement rather than a repair. These represent a distinct, high-ticket service vertical with strong commercial intent. One replacement keyword is included in the current plan to establish initial visibility; additional coverage for residential and commercial replacement is reserved for plan expansion.",
      keywords: [
        { keyword: "garage door replacement",           monthly_searches: 22200 },
        { keyword: "garage door replacement service",   monthly_searches:  6600 },
        { keyword: "residential garage door replacement",monthly_searches: 5400 },
        { keyword: "garage door replacement company",   monthly_searches:  4400 },
      ]
    },
    {
      tier_label: "Tier 5",
      tier_name: "Overhead Door",
      description: "High-volume brand-category keywords that customers use interchangeably with 'garage door.' Overhead door and overhead doors together represent over 45,000 monthly searches nationally and are a significant untapped opportunity for Builders Overhead Door specifically, given the company name directly matches this search term. These keywords are reserved for plan expansion and would provide a strong brand-alignment SEO advantage.",
      keywords: [
        { keyword: "overhead door",                    monthly_searches: 27100 },
        { keyword: "overhead doors",                   monthly_searches: 18100 },
        { keyword: "overhead door repair",             monthly_searches:  8100 },
        { keyword: "overhead door installation",       monthly_searches:  6600 },
        { keyword: "overhead door company",            monthly_searches:  5400 },
        { keyword: "overhead door opener",             monthly_searches:  4400 },
        { keyword: "overhead door replacement",        monthly_searches:  3600 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Exceeds Current Plan Capacity",
      description: "These high-value keywords were identified and validated but could not be included within the 20-combination limit of the Level A plan. They are the first candidates for inclusion upon upgrading to Level B or higher.",
      keywords: [
        { keyword: "garage door repair service",    monthly_searches: 22200 },
        { keyword: "garage door spring repair",     monthly_searches: 18100 },
        { keyword: "garage door repair company",    monthly_searches: 14800 },
        { keyword: "garage door opener repair",     monthly_searches: 12100 },
        { keyword: "garage door opener replacement",monthly_searches:  9900 },
        { keyword: "garage door cable repair",      monthly_searches:  6600 },
        { keyword: "garage door replacement service",monthly_searches: 6600 },
        { keyword: "new garage door installation",  monthly_searches:  6600 },
        { keyword: "broken garage door repair",     monthly_searches:  5400 },
        { keyword: "garage door opener service",    monthly_searches:  5400 },
        { keyword: "residential garage door replacement", monthly_searches: 5400 },
        { keyword: "emergency garage door repair",  monthly_searches:  4400 },
        { keyword: "garage door panel repair",      monthly_searches:  4400 },
        { keyword: "garage door replacement company",monthly_searches: 4400 },
        { keyword: "garage door installation company",monthly_searches: 4400 },
        { keyword: "liftmaster garage door opener installation", monthly_searches: 4400 },
      ]
    },
    {
      reason: "Opener Services: Reserved for Targeted Expansion",
      description: "Opener-related keywords represent a distinct and growing service vertical. One opener installation keyword has been included in the current plan. The remaining terms are best served with dedicated content pages and are prioritized for the next plan upgrade.",
      keywords: [
        { keyword: "garage door track repair",              monthly_searches: 3600 },
        { keyword: "smart garage door opener installation", monthly_searches: 3600 },
        { keyword: "same day garage door repair",           monthly_searches: 2900 },
      ]
    },
    {
      reason: "Overhead Door: Reserved for Brand-Alignment Expansion",
      description: "These keywords directly match the company name and represent a significant brand-alignment SEO opportunity. Customers searching 'overhead door' and 'overhead doors' are looking for exactly what Builders Overhead Door provides. These terms are reserved for a dedicated expansion tier given their high volume and strategic brand value.",
      keywords: [
        { keyword: "overhead door",                    monthly_searches: 27100 },
        { keyword: "overhead doors",                   monthly_searches: 18100 },
        { keyword: "overhead door repair",             monthly_searches:  8100 },
        { keyword: "overhead door installation",       monthly_searches:  6600 },
        { keyword: "overhead door company",            monthly_searches:  5400 },
        { keyword: "overhead door opener",             monthly_searches:  4400 },
        { keyword: "overhead door replacement",        monthly_searches:  3600 },
      ]
    },
    {
      reason: "Outside Service Scope or Too Generic",
      description: "These keywords are either too generic to drive qualified local traffic, are informational in nature (DIY intent), or represent service lines not offered by Builders Overhead Door. They are excluded from all current and future plan tiers.",
      keywords: [
        { keyword: "residential garage doors near me", monthly_searches: 12100 },
        { keyword: "commercial garage doors near me",  monthly_searches:  9900 },
        { keyword: "overhead door repair",             monthly_searches:  8100 },
        { keyword: "how to fix garage door",           monthly_searches:  8100 },
        { keyword: "garage door companies near me",    monthly_searches:  6600 },
        { keyword: "garage door service near me",      monthly_searches:  5400 },
        { keyword: "garage door cost",                 monthly_searches:  9900 },
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
      headline: "Deeper Service Coverage Across All Markets",
      description: "Upgrading to Level B increases the keyword-city combinations to 30, allowing Builders Overhead Door to introduce dedicated coverage for high-value keywords currently outside the plan's capacity. Adding garage door repair service, spring repair, and opener repair across all 5 markets is the most strategic next step for expanding reach without adding new cities.",
      keywords: [
        { keyword: "garage door repair service",    monthly_searches: 22200 },
        { keyword: "garage door spring repair",     monthly_searches: 18100 },
        { keyword: "garage door opener repair",     monthly_searches: 12100 },
        { keyword: "garage door opener replacement",monthly_searches:  9900 },
      ]
    },
    {
      plan: "Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 10,
      headline: "Add Olathe and Lenexa Markets",
      description: "Level C opens the door to two additional high-value Kansas markets: Olathe (pop. 152,772) and Lenexa (pop. 58,536). These are the two largest untapped markets in the service region and represent a significant opportunity to capture Kansas-side search traffic that is currently going to competitors.",
      keywords: [
        { keyword: "Olathe, KS",  monthly_searches: null, new_market: true },
        { keyword: "Lenexa, KS",  monthly_searches: null, new_market: true },
        { keyword: "garage door cable repair",    monthly_searches: 6600 },
        { keyword: "garage door replacement service", monthly_searches: 6600 },
      ]
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 10,
      headline: "Full Kansas City Metro Domination",
      description: "Level D provides the coverage needed to dominate the entire Kansas City metro. With 50 total combinations, Builders Overhead Door can target all 9 specified service area cities with a full suite of keywords, achieving comprehensive visibility across both the Missouri and Kansas sides of the metro for every core service offered.",
      keywords: [
        { keyword: "Liberty, MO",   monthly_searches: null, new_market: true },
        { keyword: "Kearney, MO",   monthly_searches: null, new_market: true },
        { keyword: "emergency garage door repair", monthly_searches: 4400 },
        { keyword: "liftmaster garage door opener installation", monthly_searches: 4400 },
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
      // Out of scope family: never indent, always plain row
      const isOutOfScope = kw.family === 'out of scope';
      const rowClass = isBase || isOutOfScope
        ? (kw.status === 'selected' ? 'row-base row-selected' : 'row-base')
        : (isNearMe ? 'row-variant row-near-me' : 'row-variant');
      const kwCell = (isBase || isOutOfScope)
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
// POPULATE MATRIX - Approach C: one card per city
// ============================================================
function buildMatrix() {
  const markets = [
    { city: "Kansas City",   state: "MO", tier: "Tier 1", population: 508090, is_hq: false },
    { city: "Overland Park", state: "KS", tier: "Tier 1", population: 200306, is_hq: false },
    { city: "Independence",  state: "MO", tier: "Tier 1", population: 121740, is_hq: false },
    { city: "Lee's Summit",  state: "MO", tier: "Tier 1", population: 103656, is_hq: false },
    { city: "Blue Springs",  state: "MO", tier: "Tier 1", population:  61246, is_hq: true  },
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
        <div class="city-matrix-header-top">${hqStar}<span class="city-matrix-name">${cityLabel}</span></div>
        <div class="city-matrix-header-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span><span class="city-matrix-pop">Pop. ${fmt(m.population)}</span></div>
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
  { rank: 1, city: 'Kansas City',   state: 'MO', pop: 508090, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2, city: 'Overland Park', state: 'KS', pop: 200306, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3, city: 'Olathe',        state: 'KS', pop: 152772, tier: 'Tier 1', selected: false, hq: false },
  { rank: 4, city: 'Independence',  state: 'MO', pop: 121740, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 5, city: "Lee's Summit",  state: 'MO', pop: 103656, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 6, city: 'Blue Springs',  state: 'MO', pop:  61246, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 7, city: 'Lenexa',        state: 'KS', pop:  58536, tier: 'Tier 1', selected: false, hq: false },
  { rank: 8, city: 'Liberty',       state: 'MO', pop:  32000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 9, city: 'Kearney',       state: 'MO', pop:  12500, tier: 'Tier 2', selected: false, hq: false },
];

function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = MARKET_DATA.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.hq ? `${m.city}, ${m.state} <span class="hq-tag">HQ</span>` : `${m.city}, ${m.state}`;
    const popStr = m.pop ? fmt(m.pop) : '<10,000';
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
    { city: 'Kansas City',   state: 'MO', tier: 'Tier 1', pop: 508090, is_hq: false },
    { city: 'Overland Park', state: 'KS', tier: 'Tier 1', pop: 200306, is_hq: false },
    { city: 'Independence',  state: 'MO', tier: 'Tier 1', pop: 121740, is_hq: false },
    { city: "Lee's Summit",  state: 'MO', tier: 'Tier 1', pop: 103656, is_hq: false },
    { city: 'Blue Springs',  state: 'MO', tier: 'Tier 1', pop:  61246, is_hq: true  },
  ];
  const keywords = STRATEGY.selected_keywords;
  const cards = markets.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : 't2';
    const cityLabel = m.is_hq ? `${m.city}, ${m.state} <span class="hq-tag">HQ</span>` : `${m.city}, ${m.state}`;
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
