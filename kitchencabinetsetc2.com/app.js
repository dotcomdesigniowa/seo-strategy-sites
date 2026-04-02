// ============================================================
// SEO Strategy Website - App.js
// Kitchen Cabinets Etc 2 | Gold Canyon, AZ | Plan Level A
// Permanent rules: no em-dashes, full client name always,
// strict bucket logic (same core term = same family),
// keyword selection prioritizes highest volume per service line,
// market selection is deterministic top-down by population
// ============================================================

const STRATEGY = {
  client_name: "Kitchen Cabinets Etc 2",
  industry: "Cabinets, Countertops, Vanities, Closets, Laundry Rooms",
  hq_city: "Gold Canyon",
  state: "AZ",
  service_area: "Gold Canyon, AZ and Surrounding Areas",
  plan_level: "Level A",
  plan_price: 600,
  total_combinations: 20,
  total_keywords_researched: 57,

  // 4 keywords x 5 markets = 20 combinations
  // Each keyword represents a distinct service line
  // Selected by: highest volume base keyword per service line
  selected_keywords: [
    "kitchen cabinets near me",
    "bathroom vanity near me",
    "bathroom cabinets near me",
    "custom closets near me"
  ],
  num_selected_keywords: 4,
  num_target_markets: 5,

  // ---- KEYWORD TABLE DATA ----
  // Strict bucket rule: same core term = same family. Different words = different family.
  // kitchen cabinets != outdoor kitchen != bathroom vanity != bathroom cabinets != custom closets
  keyword_table: [
    // FAMILY 1: kitchen cabinets
    { keyword: "kitchen cabinets near me",        monthly_searches: 74000, tier: "Tier 1", status: "selected", family: "kitchen cabinets", variant_type: "near_me" },
    { keyword: "kitchen cabinets",                monthly_searches: 74000, tier: "Tier 1", status: "not_used", family: "kitchen cabinets", variant_type: "base" },
    { keyword: "custom kitchen cabinets",         monthly_searches: 90500, tier: "Tier 1", status: "not_used", family: "kitchen cabinets", variant_type: "variant" },
    { keyword: "kitchen cabinet design",          monthly_searches:  8100, tier: "Tier 1", status: "not_used", family: "kitchen cabinets", variant_type: "variant" },
    { keyword: "kitchen cabinet store",           monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "kitchen cabinets", variant_type: "variant" },
    { keyword: "kitchen cabinet companies near me",monthly_searches: 3600, tier: "Tier 1", status: "not_used", family: "kitchen cabinets", variant_type: "near_me" },
    { keyword: "kitchen cabinet showroom",        monthly_searches:  1900, tier: "Tier 1", status: "not_used", family: "kitchen cabinets", variant_type: "variant" },

    // FAMILY 2: outdoor kitchen (discontinued by client - all not_used)
    { keyword: "outdoor kitchen near me",         monthly_searches: 14800, tier: "Tier 1", status: "not_used", family: "outdoor kitchen", variant_type: "near_me" },
    { keyword: "outdoor kitchen",                 monthly_searches:135000, tier: "Tier 1", status: "not_used", family: "outdoor kitchen", variant_type: "base" },
    { keyword: "outdoor kitchen design",          monthly_searches: 22200, tier: "Tier 1", status: "not_used", family: "outdoor kitchen", variant_type: "variant" },
    { keyword: "outdoor kitchen cabinets",        monthly_searches:  9900, tier: "Tier 1", status: "not_used", family: "outdoor kitchen", variant_type: "variant" },
    { keyword: "custom outdoor kitchen",          monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "outdoor kitchen", variant_type: "variant" },
    { keyword: "outdoor kitchen company",         monthly_searches:  2400, tier: "Tier 1", status: "not_used", family: "outdoor kitchen", variant_type: "variant" },
    { keyword: "outdoor kitchen companies near me",monthly_searches: 1600, tier: "Tier 1", status: "not_used", family: "outdoor kitchen", variant_type: "near_me" },

    // FAMILY 3: bathroom vanity
    { keyword: "bathroom vanity near me",         monthly_searches: 33100, tier: "Tier 2", status: "selected", family: "bathroom vanity", variant_type: "near_me" },
    { keyword: "bathroom vanities near me",       monthly_searches: 22200, tier: "Tier 2", status: "not_used", family: "bathroom vanity", variant_type: "near_me" },
    { keyword: "bathroom vanity",                 monthly_searches: 49500, tier: "Tier 2", status: "not_used", family: "bathroom vanity", variant_type: "base" },
    { keyword: "custom bathroom vanity",          monthly_searches:  8100, tier: "Tier 2", status: "not_used", family: "bathroom vanity", variant_type: "variant" },
    { keyword: "bathroom vanity store",           monthly_searches:  3600, tier: "Tier 2", status: "not_used", family: "bathroom vanity", variant_type: "variant" },
    { keyword: "bathroom vanity showroom",        monthly_searches:  1300, tier: "Tier 2", status: "not_used", family: "bathroom vanity", variant_type: "variant" },

    // FAMILY 4: bathroom cabinets (separate family - different core term from bathroom vanity)
    { keyword: "bathroom cabinets near me",       monthly_searches: 12100, tier: "Tier 2", status: "selected", family: "bathroom cabinets", variant_type: "near_me" },
    { keyword: "bathroom cabinets",               monthly_searches: 40500, tier: "Tier 2", status: "not_used", family: "bathroom cabinets", variant_type: "base" },
    { keyword: "custom bathroom cabinets",        monthly_searches:  2900, tier: "Tier 2", status: "not_used", family: "bathroom cabinets", variant_type: "variant" },

    // FAMILY 5: custom closets
    { keyword: "custom closets near me",          monthly_searches: 27100, tier: "Tier 2", status: "selected", family: "custom closets", variant_type: "near_me" },
    { keyword: "custom closets",                  monthly_searches: 74000, tier: "Tier 2", status: "not_used", family: "custom closets", variant_type: "base" },
    { keyword: "custom closet design",            monthly_searches:  9900, tier: "Tier 2", status: "not_used", family: "custom closets", variant_type: "variant" },
    { keyword: "custom closet companies near me", monthly_searches:  3600, tier: "Tier 2", status: "not_used", family: "custom closets", variant_type: "near_me" },

    // FAMILY 6: laundry room cabinets (separate family - distinct core term)
    { keyword: "laundry room cabinets near me",   monthly_searches:  4400, tier: "Tier 3", status: "not_used", family: "laundry room cabinets", variant_type: "near_me" },
    { keyword: "laundry room cabinets",           monthly_searches: 18100, tier: "Tier 3", status: "not_used", family: "laundry room cabinets", variant_type: "base" },
    { keyword: "custom laundry room cabinets",    monthly_searches:  1300, tier: "Tier 3", status: "not_used", family: "laundry room cabinets", variant_type: "variant" },

    // FAMILY 7: countertops (separate family - distinct core term)
    { keyword: "countertops",                     monthly_searches: 60500, tier: "Tier 3", status: "not_used", family: "countertops", variant_type: "base" },
    { keyword: "countertops near me",             monthly_searches: 12100, tier: "Tier 3", status: "not_used", family: "countertops", variant_type: "near_me" },
    { keyword: "countertop stores near me",       monthly_searches:  8100, tier: "Tier 3", status: "not_used", family: "countertops", variant_type: "near_me" },

    // FAMILY 8: granite countertops (separate family - different core term from countertops)
    { keyword: "granite countertops",             monthly_searches: 40500, tier: "Tier 3", status: "not_used", family: "granite countertops", variant_type: "base" },
    { keyword: "granite countertops near me",     monthly_searches: 33100, tier: "Tier 3", status: "not_used", family: "granite countertops", variant_type: "near_me" },

    // FAMILY 9: quartz countertops (separate family)
    { keyword: "quartz countertops",              monthly_searches: 49500, tier: "Tier 3", status: "not_used", family: "quartz countertops", variant_type: "base" },
    { keyword: "quartz countertops near me",      monthly_searches: 22200, tier: "Tier 3", status: "not_used", family: "quartz countertops", variant_type: "near_me" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Kitchen Cabinets",
      description: "The highest-priority service line for Kitchen Cabinets Etc 2. Kitchen cabinets near me commands 74,000 monthly searches nationally and represents the core product the business was built on. Custom kitchen cabinets (90,500 searches) is a high-volume variant reserved for plan expansion.",
      keywords: [
        { keyword: "kitchen cabinets near me",   monthly_searches: 74000 },
        { keyword: "custom kitchen cabinets",    monthly_searches: 90500 },
        { keyword: "kitchen cabinet design",     monthly_searches:  8100 },
        { keyword: "kitchen cabinet store",      monthly_searches:  5400 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Bathroom Vanities, Bathroom Cabinets, and Custom Closets",
      description: "Three high-volume service lines covering the client's bathroom and storage offerings. Bathroom vanity near me (33,100 searches), bathroom cabinets near me (12,100 searches), and custom closets near me (27,100 searches) are all selected for Plan A. Note that bathroom vanity and bathroom cabinets are separate buckets - different core terms, different products.",
      keywords: [
        { keyword: "bathroom vanity near me",    monthly_searches: 33100 },
        { keyword: "bathroom vanities near me",  monthly_searches: 22200 },
        { keyword: "custom closets near me",     monthly_searches: 27100 },
        { keyword: "bathroom cabinets near me",  monthly_searches: 12100 },
        { keyword: "custom closet design",       monthly_searches:  9900 },
        { keyword: "custom bathroom vanity",     monthly_searches:  8100 },
        { keyword: "bathroom vanity store",      monthly_searches:  3600 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Countertops and Laundry Rooms",
      description: "Supporting service lines with strong search volume that are reserved for plan expansion. Granite countertops near me (33,100) and quartz countertops near me (22,200) are high-value targets. Laundry room cabinets near me (4,400) is a lower-volume but distinct service the client explicitly offers. These are the first candidates for inclusion in a Plan B upgrade.",
      keywords: [
        { keyword: "granite countertops near me",  monthly_searches: 33100 },
        { keyword: "quartz countertops near me",   monthly_searches: 22200 },
        { keyword: "laundry room cabinets",        monthly_searches: 18100 },
        { keyword: "countertops near me",          monthly_searches: 12100 },
        { keyword: "countertop stores near me",    monthly_searches:  8100 },
        { keyword: "laundry room cabinets near me",monthly_searches:  4400 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Discontinued Service Line",
      description: "The outdoor kitchen category has been discontinued by the client. These keywords are removed from the strategy entirely and are not candidates for future plan expansion.",
      keywords: [
        { keyword: "outdoor kitchen near me",          monthly_searches: 14800 },
        { keyword: "outdoor kitchen",                  monthly_searches: 135000 },
        { keyword: "outdoor kitchen design",           monthly_searches: 22200 },
        { keyword: "outdoor kitchen cabinets",         monthly_searches:  9900 },
        { keyword: "custom outdoor kitchen",           monthly_searches:  5400 },
        { keyword: "outdoor kitchen company",          monthly_searches:  2400 },
      ]
    },
    {
      reason: "Incorrect Business Model",
      description: "These keywords imply a general contractor, remodeler, or construction company - not a cabinet design showroom. Kitchen Cabinets Etc 2 offers one-on-one design consultations and sells/installs cabinetry. Customers searching these terms are looking for a different type of business.",
      keywords: [
        { keyword: "outdoor kitchen builders near me", monthly_searches: 8100 },
        { keyword: "kitchen remodeling near me",       monthly_searches: 22200 },
        { keyword: "kitchen renovation near me",       monthly_searches: 9900 },
        { keyword: "kitchen remodel near me",          monthly_searches: 33100 },
      ]
    },
    {
      reason: "Reserved for Plan B - Countertops and Laundry",
      description: "High-value keywords for service lines the client offers but that fall outside the 20-combination limit of Plan A. Countertops and laundry room cabinets are the highest-priority additions for a Plan B upgrade, adding 2 new keywords and 10 new combinations.",
      keywords: [
        { keyword: "granite countertops near me",  monthly_searches: 33100 },
        { keyword: "quartz countertops near me",   monthly_searches: 22200 },
        { keyword: "countertops near me",          monthly_searches: 12100 },
        { keyword: "laundry room cabinets near me",monthly_searches:  4400 },
      ]
    },
    {
      reason: "Reserved for Plan C - Custom Variants and Expansion",
      description: "Custom kitchen cabinets (90,500 searches) and custom closets (74,000 searches) are high-volume variants of already-selected keywords. They are reserved for Plan C when dedicated keyword slots become available.",
      keywords: [
        { keyword: "custom kitchen cabinets",    monthly_searches: 90500 },
        { keyword: "custom bathroom cabinets",   monthly_searches:  2900 },
        { keyword: "custom closets",             monthly_searches: 74000 },
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
      new_market: true,
      headline: "Expand into Scottsdale and Tempe",
      description: "Level B extends all 4 current keywords into two of the largest and most affluent markets in the Phoenix metro: Scottsdale (Pop. 258,000) and Tempe (Pop. 192,000). Both cities have strong residential remodeling demand and are within easy reach of the Gold Canyon showroom.",
      markets: [
        { city: "Scottsdale, AZ", pop: 258000, tier: "Tier 1" },
        { city: "Tempe, AZ",      pop: 192000, tier: "Tier 1" },
      ]
    },
    {
      plan: "Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 10,
      new_market: true,
      headline: "Add Chandler and Gilbert",
      description: "Level C pushes into Chandler (Pop. 275,000) and Gilbert (Pop. 267,000), two of the fastest-growing cities in the East Valley. With 40 total combinations, Kitchen Cabinets Etc 2 achieves broad visibility across the core Phoenix East Valley market for all four service lines.",
      markets: [
        { city: "Chandler, AZ", pop: 275000, tier: "Tier 1" },
        { city: "Gilbert, AZ",  pop: 267000, tier: "Tier 1" },
      ]
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 10,
      new_market: true,
      headline: "Full East Valley Coverage",
      description: "Level D completes the East Valley footprint by adding Mesa (Pop. 504,000) and Fountain Hills (Pop. 24,000). With 50 total combinations across 9 markets, Kitchen Cabinets Etc 2 achieves comprehensive visibility across every major community in the Phoenix East Valley service area.",
      markets: [
        { city: "Mesa, AZ",          pop: 504000, tier: "Tier 1" },
        { city: "Fountain Hills, AZ", pop:  24000, tier: "Tier 2" },
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
        <span class="flat-tier-count">${tier.keywords.length} keyword${tier.keywords.length !== 1 ? 's' : ''} researched</span>
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
// markets = 5, keywords = 4 => keywords as rows, cities as columns
// ============================================================
function buildMatrix() {
  const markets = [
      { city: "Mesa",             tier: "Tier 1", population: 524892, is_hq: false },
      { city: "Gilbert",          tier: "Tier 1", population: 292116, is_hq: false },
      { city: "Chandler",         tier: "Tier 1", population: 286342, is_hq: false },
      { city: "Queen Creek",      tier: "Tier 1", population:  81778, is_hq: false },
      { city: "Apache Junction",  tier: "Tier 1", population:  41240, is_hq: false },
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
          <div class="city-matrix-header-top">${hqStar}<span class="city-matrix-name">${cityLabel}</span></div>
          <div class="city-matrix-header-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span><span class="city-matrix-pop">Pop. ${fmt(m.population)}</span></div>
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
    const marketRows = (opp.markets || []).map(m => {
      const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
      return `<li>
        <span class="opp-kw">${m.city}</span>
        <span class="opp-vol"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp;Pop. ${fmt(m.pop)}</span>
      </li>`;
    }).join('');
    const highlight = i === 0 ? 'opp-card-highlight' : '';
    return `<div class="opp-card ${highlight}">
      <div class="opp-plan-label">${opp.plan}</div>
      <div class="opp-price">$${fmt(opp.price)}<span class="opp-price-label">/mo</span></div>
      <div class="opp-combos-large">${opp.combinations} <span class="opp-combos-label">total combinations</span></div>
      <div class="opp-combos">+${opp.additional_combinations} combinations from current plan</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <ul class="opp-kw-list"><li class="opp-kw-header"><span>Market Added</span><span>Tier &amp; Population</span></li>${marketRows}</ul>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// BUILD MOBILE MARKET LIST
// ============================================================
const MARKET_DATA = [
  { rank: 1,  city: 'Mesa',             pop: 524892, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2,  city: 'Gilbert',          pop: 292116, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Chandler',         pop: 286342, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Scottsdale',       pop: 246435, tier: 'Tier 1', selected: false, hq: false },
  { rank: 5,  city: 'Tempe',            pop: 193336, tier: 'Tier 1', selected: false, hq: false },
  { rank: 6,  city: 'Queen Creek',      pop:  81778, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 7,  city: 'Apache Junction',  pop:  41240, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 8,  city: 'Gold Canyon',      pop:  15370, tier: 'Tier 2', selected: false, hq: true  },
  { rank: 9,  city: 'Fountain Hills',   pop:  24163, tier: 'Tier 2', selected: false, hq: false },
  { rank: 10, city: 'Florence',         pop:  24175, tier: 'Tier 2', selected: false, hq: false },
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
    { city: 'Mesa',             tier: 'Tier 1', pop: 524892, is_hq: false },
    { city: 'Gilbert',          tier: 'Tier 1', pop: 292116, is_hq: false },
    { city: 'Chandler',         tier: 'Tier 1', pop: 286342, is_hq: false },
    { city: 'Queen Creek',      tier: 'Tier 1', pop:  81778, is_hq: false },
    { city: 'Apache Junction',  tier: 'Tier 1', pop:  41240, is_hq: false },
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

  (function() {
    var grid = document.querySelector('.kw-tier-grid');
    if (!grid) return;
    var count = grid.querySelectorAll('.kw-tier-card').length;
    if (count > 0) grid.style.gridTemplateColumns = 'repeat(' + count + ', 1fr)';
  })();
});
