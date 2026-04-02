// ============================================================
// SEO Strategy Website — Markuson Construction Inc.
// Industry: Masonry and Concrete
// HQ: Omaha, NE | Service Area: Omaha Metro + Council Bluffs, IA
// Plan Level: C — 40 combinations (8 keywords x 5 cities)
// ============================================================

const STRATEGY = {
  client_name: "Markuson Construction Inc.",
  industry: "Masonry and Concrete",
  hq_city: "Omaha",
  state: "NE",
  service_area: "Omaha Metro, NE & Council Bluffs, IA",
  plan_level: "Level C",
  plan_price: 1200,
  total_combinations: 40,
  total_keywords_researched: 459,
  selected_keywords: [
    "concrete contractor",
    "masonry contractor",
    "concrete driveway",
    "retaining wall contractor",
    "chimney repair",
    "concrete patio",
    "tuckpointing",
    "stucco contractor"
  ],
  num_selected_keywords: 8,
  num_target_markets: 5,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    // Concrete Contractor family
    { keyword: "concrete contractor",           monthly_searches: 18100, tier: "Tier 1", status: "selected", family: "concrete contractor",    variant_type: "base" },
    { keyword: "concrete contractor near me",   monthly_searches:  5400, tier: "Tier 1", status: "near_me",  family: "concrete contractor",    variant_type: "near_me" },
    { keyword: "concrete contractors",          monthly_searches:  4400, tier: "Tier 1", status: "not_used", family: "concrete contractor",    variant_type: "plural" },
    { keyword: "concrete company",              monthly_searches:  8100, tier: "Tier 1", status: "not_used", family: "concrete contractor",    variant_type: "variant" },
    { keyword: "concrete company near me",      monthly_searches:  5400, tier: "Tier 1", status: "near_me",  family: "concrete contractor",    variant_type: "near_me" },
    { keyword: "concrete services",             monthly_searches:  3600, tier: "Tier 1", status: "not_used", family: "concrete contractor",    variant_type: "variant" },
    // Masonry Contractor family
    { keyword: "masonry contractor",            monthly_searches:  6600, tier: "Tier 1", status: "selected", family: "masonry contractor",     variant_type: "base" },
    { keyword: "masonry near me",               monthly_searches:  8100, tier: "Tier 1", status: "near_me",  family: "masonry contractor",     variant_type: "near_me" },
    { keyword: "masonry contractors",           monthly_searches:  4400, tier: "Tier 1", status: "not_used", family: "masonry contractor",     variant_type: "plural" },
    { keyword: "masonry work",                  monthly_searches:  3600, tier: "Tier 1", status: "not_used", family: "masonry contractor",     variant_type: "variant" },
    { keyword: "masonry repair",                monthly_searches:  2400, tier: "Tier 1", status: "not_used", family: "masonry contractor",     variant_type: "variant" },
    { keyword: "masonry restoration",           monthly_searches:  2400, tier: "Tier 1", status: "not_used", family: "masonry contractor",     variant_type: "variant" },
    // Concrete Driveway family
    { keyword: "concrete driveway",             monthly_searches: 12100, tier: "Tier 1", status: "selected", family: "concrete driveway",      variant_type: "base" },
    { keyword: "concrete driveway contractors", monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "concrete driveway",      variant_type: "variant" },
    { keyword: "concrete driveway cost",        monthly_searches:  4400, tier: "Tier 1", status: "not_used", family: "concrete driveway",      variant_type: "variant" },
    { keyword: "driveway installation",         monthly_searches:  2900, tier: "Tier 1", status: "not_used", family: "concrete driveway",      variant_type: "variant" },
    { keyword: "driveway contractor",           monthly_searches:  2900, tier: "Tier 1", status: "not_used", family: "concrete driveway",      variant_type: "variant" },
    // Retaining Wall family
    { keyword: "retaining wall contractor",     monthly_searches:  1600, tier: "Tier 2", status: "selected", family: "retaining wall",         variant_type: "base" },
    { keyword: "retaining wall",                monthly_searches: 27100, tier: "Tier 1", status: "not_used", family: "retaining wall",         variant_type: "variant" },
    { keyword: "retaining wall contractors",    monthly_searches:  4400, tier: "Tier 1", status: "not_used", family: "retaining wall",         variant_type: "plural" },
    { keyword: "retaining wall installation",   monthly_searches:  2900, tier: "Tier 1", status: "not_used", family: "retaining wall",         variant_type: "variant" },
    { keyword: "retaining wall cost",           monthly_searches:  2400, tier: "Tier 1", status: "not_used", family: "retaining wall",         variant_type: "variant" },
    // Chimney Repair family
    { keyword: "chimney repair",                monthly_searches: 12100, tier: "Tier 1", status: "selected", family: "chimney repair",         variant_type: "base" },
    { keyword: "chimney repair near me",        monthly_searches: 14800, tier: "Tier 1", status: "near_me",  family: "chimney repair",         variant_type: "near_me" },
    { keyword: "chimney restoration",           monthly_searches:   590, tier: "Tier 3", status: "not_used", family: "chimney repair",         variant_type: "variant" },
    { keyword: "chimney rebuild",               monthly_searches:   590, tier: "Tier 3", status: "not_used", family: "chimney repair",         variant_type: "variant" },
    { keyword: "chimney tuckpointing",          monthly_searches:   590, tier: "Tier 3", status: "not_used", family: "chimney repair",         variant_type: "variant" },
    // Concrete Patio family
    { keyword: "concrete patio",                monthly_searches: 12100, tier: "Tier 1", status: "selected", family: "concrete patio",         variant_type: "base" },
    { keyword: "concrete patio contractors",    monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "concrete patio",         variant_type: "variant" },
    { keyword: "patio installation",            monthly_searches:  8100, tier: "Tier 1", status: "not_used", family: "concrete patio",         variant_type: "variant" },
    { keyword: "patio contractor",              monthly_searches:  2900, tier: "Tier 1", status: "not_used", family: "concrete patio",         variant_type: "variant" },
    { keyword: "concrete patio cost",           monthly_searches:  2900, tier: "Tier 1", status: "not_used", family: "concrete patio",         variant_type: "variant" },
    // Tuckpointing family
    { keyword: "tuckpointing",                  monthly_searches:  5400, tier: "Tier 1", status: "selected", family: "tuckpointing",           variant_type: "base" },
    { keyword: "tuck pointing",                 monthly_searches:  4400, tier: "Tier 1", status: "not_used", family: "tuckpointing",           variant_type: "variant" },
    { keyword: "repointing",                    monthly_searches:   880, tier: "Tier 3", status: "not_used", family: "tuckpointing",           variant_type: "variant" },
    { keyword: "tuckpointing contractors",      monthly_searches:   720, tier: "Tier 3", status: "not_used", family: "tuckpointing",           variant_type: "variant" },
    { keyword: "tuckpointing cost",             monthly_searches:   390, tier: "Tier 3", status: "not_used", family: "tuckpointing",           variant_type: "variant" },
    // Stucco Contractor family
    { keyword: "stucco contractor",             monthly_searches:  1600, tier: "Tier 2", status: "selected", family: "stucco contractor",      variant_type: "base" },
    { keyword: "stucco repair",                 monthly_searches: 27100, tier: "Tier 1", status: "not_used", family: "stucco contractor",      variant_type: "variant" },
    { keyword: "stucco repair near me",         monthly_searches:  8100, tier: "Tier 1", status: "near_me",  family: "stucco contractor",      variant_type: "near_me" },
    { keyword: "stucco contractors",            monthly_searches:  2900, tier: "Tier 1", status: "not_used", family: "stucco contractor",      variant_type: "plural" },
    { keyword: "stucco installation",           monthly_searches:  2400, tier: "Tier 1", status: "not_used", family: "stucco contractor",      variant_type: "variant" },
    { keyword: "stucco cost",                   monthly_searches:   480, tier: "Tier 3", status: "not_used", family: "stucco contractor",      variant_type: "variant" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Concrete Services",
      description: "High-volume keywords targeting Markuson Construction's concrete vertical. These terms capture customers actively searching for concrete work across driveways, patios, and general contracting. With search volumes reaching 18,100/mo, these keywords form the backbone of the strategy and are deployed across all five target markets.",
      keywords: [
        { keyword: "concrete contractor",           monthly_searches: 18100 },
        { keyword: "concrete driveway",             monthly_searches: 12100 },
        { keyword: "concrete patio",                monthly_searches: 12100 },
        { keyword: "concrete company",              monthly_searches:  8100 },
        { keyword: "patio installation",            monthly_searches:  8100 },
        { keyword: "concrete driveway contractors", monthly_searches:  5400 },
        { keyword: "concrete patio contractors",    monthly_searches:  5400 },
        { keyword: "concrete services",             monthly_searches:  3600 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Masonry Services",
      description: "Keywords targeting Markuson Construction's masonry vertical, including brickwork, blockwork, and general masonry contracting. These terms attract customers looking for skilled craftsmen for structural and decorative masonry work. The 'masonry near me' variant at 8,100/mo signals strong local intent in the Omaha metro market.",
      keywords: [
        { keyword: "masonry near me",            monthly_searches:  8100 },
        { keyword: "masonry contractor",         monthly_searches:  6600 },
        { keyword: "masonry contractors",        monthly_searches:  4400 },
        { keyword: "masonry work",               monthly_searches:  3600 },
        { keyword: "masonry repair",             monthly_searches:  2400 },
        { keyword: "masonry restoration",        monthly_searches:  2400 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Specialty Masonry Services",
      description: "High-intent keywords for Markuson Construction's specialty masonry services: tuckpointing, retaining walls, chimney repair, and stucco. These terms attract customers with specific, immediate needs and represent the highest conversion potential in the strategy. Chimney repair alone generates 12,100 monthly searches nationally.",
      keywords: [
        { keyword: "retaining wall",             monthly_searches: 27100 },
        { keyword: "stucco repair",              monthly_searches: 27100 },
        { keyword: "chimney repair near me",     monthly_searches: 14800 },
        { keyword: "chimney repair",             monthly_searches: 12100 },
        { keyword: "tuckpointing",               monthly_searches:  5400 },
        { keyword: "retaining wall contractors", monthly_searches:  4400 },
        { keyword: "tuck pointing",              monthly_searches:  4400 },
        { keyword: "stucco contractors",         monthly_searches:  2900 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Waterproofing and Foundations",
      description: "High-volume opportunity keywords for basement waterproofing and foundation work. With 'basement waterproofing' generating 60,500 monthly searches nationally, this represents a significant untapped opportunity for Markuson Construction. These keywords are reserved for plan expansion given their distinct service focus and the dedicated content investment they require.",
      keywords: [
        { keyword: "basement waterproofing",          monthly_searches: 60500 },
        { keyword: "basement waterproofing near me",  monthly_searches: 22200 },
        { keyword: "basement waterproofing cost",     monthly_searches:  5400 },
        { keyword: "concrete waterproofing",          monthly_searches:  2900 },
        { keyword: "foundation contractor",           monthly_searches:  2900 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Exceeds Current Plan Capacity",
      description: "These high-value keywords were identified and validated in SEMrush research but could not be included within the 40-combination limit of the Level C plan. They are the strongest candidates for inclusion upon upgrading to Level D or higher, with combined search volume exceeding 80,000 monthly searches.",
      keywords: [
        { keyword: "retaining wall",             monthly_searches: 27100 },
        { keyword: "stucco repair",              monthly_searches: 27100 },
        { keyword: "concrete repair",            monthly_searches: 22200 },
        { keyword: "concrete resurfacing",       monthly_searches: 12100 },
        { keyword: "patio installation",         monthly_searches:  8100 },
        { keyword: "masonry near me",            monthly_searches:  8100 },
        { keyword: "concrete company",           monthly_searches:  8100 },
        { keyword: "retaining wall contractors", monthly_searches:  4400 },
        { keyword: "tuck pointing",              monthly_searches:  4400 },
        { keyword: "masonry contractors",        monthly_searches:  4400 },
        { keyword: "concrete driveway cost",     monthly_searches:  4400 },
        { keyword: "masonry work",               monthly_searches:  3600 },
        { keyword: "concrete foundation",        monthly_searches:  3600 },
        { keyword: "concrete services",          monthly_searches:  3600 },
        { keyword: "stucco contractors",         monthly_searches:  2900 },
      ]
    },
    {
      reason: "Chimney and Fireplace Services: Reserved for Targeted Expansion",
      description: "Chimney and fireplace keywords represent a distinct, high-value service vertical with strong local intent. One keyword has been included in the current plan to establish initial visibility. The remaining terms are best served with dedicated content pages and are prioritized for the next plan upgrade.",
      keywords: [
        { keyword: "chimney repair near me",     monthly_searches: 14800 },
        { keyword: "fireplace repair",           monthly_searches:  6600 },
        { keyword: "fireplace repair near me",   monthly_searches:  6600 },
        { keyword: "chimney restoration",        monthly_searches:   590 },
        { keyword: "chimney rebuild",            monthly_searches:   590 },
        { keyword: "chimney tuckpointing",       monthly_searches:   590 },
      ]
    },
    {
      reason: "Waterproofing and Foundation: Reserved for Targeted Expansion",
      description: "Basement waterproofing is the single highest-volume keyword in the entire research set at 60,500 monthly searches. This represents a major growth opportunity for Markuson Construction, but requires dedicated landing pages and a focused content strategy to compete effectively. These keywords are reserved for a dedicated expansion tier.",
      keywords: [
        { keyword: "basement waterproofing",          monthly_searches: 60500 },
        { keyword: "basement waterproofing near me",  monthly_searches: 22200 },
        { keyword: "basement waterproofing cost",     monthly_searches:  5400 },
        { keyword: "concrete waterproofing",          monthly_searches:  2900 },
        { keyword: "foundation contractor",           monthly_searches:  2900 },
        { keyword: "concrete foundation",             monthly_searches:  3600 },
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
      headline: "Deeper Coverage for High-Value Specialty Services",
      description: "Level D adds 10 new combinations by extending coverage for retaining walls, stucco repair, and concrete repair across all five existing markets. These keywords carry combined search volumes exceeding 70,000 monthly searches nationally and represent the most immediate growth opportunity within the current market footprint.",
      keywords: [
        { keyword: "retaining wall",             monthly_searches: 27100 },
        { keyword: "stucco repair",              monthly_searches: 27100 },
        { keyword: "concrete repair",            monthly_searches: 22200 },
        { keyword: "concrete resurfacing",       monthly_searches: 12100 },
      ]
    },
    {
      plan: "Level E",
      combinations: 60,
      price: 2000,
      additional_combinations: 20,
      headline: "Add Gretna and Elkhorn Plus Waterproofing Coverage",
      description: "Level E introduces two growing Omaha suburbs, Gretna (pop. 16,000) and Elkhorn (pop. 14,000), while also adding dedicated coverage for basement waterproofing, the highest-volume keyword in the research set at 60,500 monthly searches. This level positions Markuson Construction for significant growth in the fastest-growing parts of the metro.",
      keywords: [
        { keyword: "basement waterproofing",     monthly_searches: 60500 },
        { keyword: "concrete foundation",        monthly_searches:  3600 },
        { keyword: "Gretna, NE",                 monthly_searches: null, new_market: true },
        { keyword: "Elkhorn, NE",                monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level F",
      combinations: 90,
      price: 3000,
      additional_combinations: 50,
      headline: "Full Omaha Metro Domination",
      description: "Level F delivers comprehensive coverage across the entire Omaha metro area. With 90 total combinations, Markuson Construction can target up to 9 cities with a full suite of keywords, achieving dominant visibility for every core service across both the Nebraska and Iowa sides of the market.",
      keywords: [
        { keyword: "Millard, NE",                monthly_searches: null, new_market: true },
        { keyword: "Ralston, NE",                monthly_searches: null, new_market: true },
        { keyword: "Carter Lake, IA",            monthly_searches: null, new_market: true },
        { keyword: "fireplace repair",           monthly_searches:  6600 },
        { keyword: "concrete resurfacing",       monthly_searches: 12100 },
        { keyword: "masonry restoration",        monthly_searches:  2400 },
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
// ============================================================
function buildMatrix() {
  const markets = [
      { city: "Omaha",          state: "NE", tier: "Tier 1", population: 487506, is_hq: true  },
      { city: "Bellevue",       state: "NE", tier: "Tier 1", population:  67000, is_hq: false },
      { city: "Council Bluffs", state: "IA", tier: "Tier 1", population:  62605, is_hq: false },
      { city: "Papillion",      state: "NE", tier: "Tier 2", population:  27000, is_hq: false },
      { city: "La Vista",       state: "NE", tier: "Tier 2", population:  20000, is_hq: false },
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
  { rank: 1,  city: 'Omaha',          state: 'NE', pop: 487506, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 2,  city: 'Bellevue',       state: 'NE', pop:  67000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Council Bluffs', state: 'IA', pop:  62605, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Papillion',      state: 'NE', pop:  27000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 5,  city: 'La Vista',       state: 'NE', pop:  20000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 6,  city: 'Gretna',         state: 'NE', pop:  16000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 7,  city: 'Elkhorn',        state: 'NE', pop:  14000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 8,  city: 'Millard',        state: 'NE', pop:  12000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 9,  city: 'Blair',          state: 'NE', pop:   8000, tier: 'Tier 3', selected: false, hq: false },
  { rank: 10, city: 'Ralston',        state: 'NE', pop:   6422, tier: 'Tier 3', selected: false, hq: false },
  { rank: 11, city: 'Carter Lake',    state: 'IA', pop:   3733, tier: 'Tier 3', selected: false, hq: false },
  { rank: 12, city: 'Valley',         state: 'NE', pop:   3480, tier: 'Tier 3', selected: false, hq: false },
  { rank: '13+', city: 'Bennington, Avoca, Oakland, Treynor, Underwood, Crescent + 12 more', state: '', pop: null, tier: 'Tier 3', selected: false, hq: false },
];

function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = MARKET_DATA.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.hq ? `${m.city}, ${m.state} <span class="hq-tag">HQ</span>` : (m.state ? `${m.city}, ${m.state}` : m.city);
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
    { city: 'Omaha',          state: 'NE', tier: 'Tier 1', pop: 487506, is_hq: true  },
    { city: 'Bellevue',       state: 'NE', tier: 'Tier 1', pop:  67000, is_hq: false },
    { city: 'Council Bluffs', state: 'IA', tier: 'Tier 1', pop:  62605, is_hq: false },
    { city: 'Papillion',      state: 'NE', tier: 'Tier 2', pop:  27000, is_hq: false },
    { city: 'La Vista',       state: 'NE', tier: 'Tier 2', pop:  20000, is_hq: false },
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
