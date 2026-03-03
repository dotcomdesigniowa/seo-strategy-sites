// ============================================================
// SEO Strategy Website — App.js
// Texas Building Center | Dotcom Design
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================

const STRATEGY = {
  client_name: "Texas Building Center",
  industry: "Barndominium & Custom Builder",
  hq_city: "Burnet",
  state: "TX",
  service_area: "Texas Hill Country",
  plan_level: "Level C",
  plan_price: 499,
  total_combinations: 40,
  total_keywords_researched: 149,
  selected_keywords: [
    "barndominium builders",
    "barndominium contractor",
    "barndominium construction",
    "barndo",
    "barndo builders",
    "barndo floor plans",
    "custom home builder",
    "custom home builders near me",
    "metal buildings",
    "pole barn builder"
  ],
  num_selected_keywords: 10,
  num_target_markets: 4,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    { keyword: "barndominium",                      monthly_searches: 246000, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium plans",                monthly_searches:  60500, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium kits",                 monthly_searches:  40500, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium floor plans",          monthly_searches:  33100, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "pole barn",                         monthly_searches:  33100, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "metal buildings",                   monthly_searches:  33100, tier: "Tier 4", status: "selected",  note: "" },
    { keyword: "barndo",                            monthly_searches:  14800, tier: "Tier 2", status: "selected",  note: "" },
    { keyword: "custom home builder",               monthly_searches:  14800, tier: "Tier 3", status: "selected",  note: "" },
    { keyword: "barndominium homes",                monthly_searches:  12100, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "metal building",                    monthly_searches:  12100, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "custom home builders",              monthly_searches:  12100, tier: "Tier 3", status: "not_used",  note: "" },
    { keyword: "barndominium builders",             monthly_searches:   8100, tier: "Tier 1", status: "selected",  note: "" },
    { keyword: "barndominium builders near me",     monthly_searches:   8100, tier: "Tier 1", status: "near_me",   note: "Equivalent to 'barndominium builders'" },
    { keyword: "custom homes",                      monthly_searches:   8100, tier: "Tier 3", status: "not_used",  note: "" },
    { keyword: "pole barns",                        monthly_searches:   8100, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "barndo plans",                      monthly_searches:   4400, tier: "Tier 2", status: "not_used",  note: "" },
    { keyword: "shop house",                        monthly_searches:   4400, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "barndominium kit",                  monthly_searches:   4400, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "metal shop",                        monthly_searches:   4400, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "custom home builders near me",      monthly_searches:   9900, tier: "Tier 3", status: "selected",  note: "" },
    { keyword: "custom home builder near me",       monthly_searches:   4400, tier: "Tier 3", status: "near_me",   note: "Equivalent to 'custom home builder'" },
    { keyword: "barndo floor plans",                monthly_searches:   2400, tier: "Tier 2", status: "selected",  note: "" },
    { keyword: "post frame construction",           monthly_searches:   3600, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "post frame building",               monthly_searches:   3600, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "pole barn construction",            monthly_searches:   2900, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "pole barn houses",                  monthly_searches:   2900, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "pole barn homes",                   monthly_searches:   2900, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "metal building near me",            monthly_searches:   2900, tier: "Tier 4", status: "near_me",   note: "Equivalent to 'metal building'" },
    { keyword: "pole barn builders",                monthly_searches:   2400, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "barndo homes",                      monthly_searches:    880, tier: "Tier 2", status: "not_used",  note: "" },
    { keyword: "barndo builders",                   monthly_searches:    880, tier: "Tier 2", status: "selected",  note: "" },
    { keyword: "barndominium contractors",          monthly_searches:    880, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium builder near me",      monthly_searches:    880, tier: "Tier 1", status: "near_me",   note: "Equivalent to 'barndominium builders'" },
    { keyword: "custom barndominium builders",      monthly_searches:    140, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "residential contractor",            monthly_searches:   1900, tier: "Tier 3", status: "not_used",  note: "" },
    { keyword: "metal building cost",               monthly_searches:   1900, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "building a barndominium",           monthly_searches:   1900, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "pole barn near me",                 monthly_searches:   1600, tier: "Tier 4", status: "near_me",   note: "Equivalent to 'pole barn builder'" },
    { keyword: "steel building contractors",        monthly_searches:   1600, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "metal building contractors",        monthly_searches:   1600, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "post frame buildings",              monthly_searches:   1600, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "custom home construction",          monthly_searches:   1600, tier: "Tier 3", status: "not_used",  note: "" },
    { keyword: "barndominium near me",              monthly_searches:   1600, tier: "Tier 1", status: "near_me",   note: "Equivalent to 'barndominium builders'" },
    { keyword: "agricultural building",             monthly_searches:   1600, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "barndominium company",              monthly_searches:   1300, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "commercial metal buildings",        monthly_searches:   1300, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "pole barn builder",                 monthly_searches:   1300, tier: "Tier 4", status: "selected",  note: "" },
    { keyword: "barndominium with shop",            monthly_searches:   1000, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium builder",              monthly_searches:   1000, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "build a barndominium",              monthly_searches:   1000, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndo builders near me",           monthly_searches:   1000, tier: "Tier 2", status: "near_me",   note: "Equivalent to 'barndo builders'" },
    { keyword: "barndominium contractor",           monthly_searches:    210, tier: "Tier 1", status: "selected",  note: "" },
    { keyword: "barndominium construction",         monthly_searches:    590, tier: "Tier 1", status: "selected",  note: "" },
    { keyword: "barndominium contractors",          monthly_searches:    880, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium contractor near me",   monthly_searches:    210, tier: "Tier 1", status: "near_me",   note: "Equivalent to 'barndominium contractor'" },
    { keyword: "barndominium construction near me", monthly_searches:     20, tier: "Tier 1", status: "near_me",   note: "Equivalent to 'barndominium construction'" },
    { keyword: "pole barn house",                   monthly_searches:   5400, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "steel buildings",                   monthly_searches:  14800, tier: "Tier 4", status: "not_used",  note: "" },
    { keyword: "barndominium cost",                 monthly_searches:   5400, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndo cost",                       monthly_searches:    390, tier: "Tier 2", status: "not_used",  note: "" },
    { keyword: "custom home contractor",            monthly_searches:    880, tier: "Tier 3", status: "not_used",  note: "" },
    { keyword: "barndominium shell",                monthly_searches:    720, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium companies",            monthly_searches:    590, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium price",                monthly_searches:    590, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium construction cost",    monthly_searches:    260, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium packages",             monthly_searches:    390, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "turnkey barndominium",              monthly_searches:    390, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium home builders",        monthly_searches:    170, tier: "Tier 1", status: "not_used",  note: "" },
    { keyword: "barndominium general contractor",   monthly_searches:     30, tier: "Tier 1", status: "not_used",  note: "" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Barndominium Builders",
      description: "The highest-intent keywords in the barndominium space. Customers searching these terms are actively looking to hire a builder. These are the primary terms for Texas Building Center and form the backbone of the strategy. The barndominium category alone represents over 246,000 monthly searches nationally.",
      keywords: [
        { keyword: "barndominium builders",          monthly_searches: 8100 },
        { keyword: "barndominium contractor",        monthly_searches:  210 },
        { keyword: "barndominium construction",      monthly_searches:  590 },
        { keyword: "barndominium contractors",       monthly_searches:  880 },
        { keyword: "barndominium construction company", monthly_searches: 140 },
        { keyword: "custom barndominium builders",   monthly_searches:  140 },
        { keyword: "barndominium builder",           monthly_searches: 1000 },
        { keyword: "barndominium company",           monthly_searches: 1300 },
        { keyword: "barndominium general contractor",monthly_searches:   30 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Barndo (Short Form)",
      description: "The shortened 'barndo' form is widely used across Texas and carries strong local intent. Buyers who search 'barndo' are already familiar with the product and are closer to a purchase decision. Targeting both the full and short forms maximizes coverage of the entire barndominium search landscape.",
      keywords: [
        { keyword: "barndo",             monthly_searches: 14800 },
        { keyword: "barndo floor plans", monthly_searches:  2400 },
        { keyword: "barndo plans",       monthly_searches:  4400 },
        { keyword: "barndo builders",    monthly_searches:   880 },
        { keyword: "barndo homes",       monthly_searches:   880 },
        { keyword: "barndo cost",        monthly_searches:   390 },
        { keyword: "barndo builder",     monthly_searches:    70 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Custom Home Builders",
      description: "Custom home builder keywords represent a distinct service line with strong commercial intent. These terms capture buyers who may not yet know about barndominiums but are actively searching for a trusted local builder. Coverage of this service line ensures Texas Building Center captures the full spectrum of custom building demand.",
      keywords: [
        { keyword: "custom home builder",           monthly_searches: 14800 },
        { keyword: "custom home builders",          monthly_searches: 12100 },
        { keyword: "custom home builders near me",  monthly_searches:  9900 },
        { keyword: "custom homes",                  monthly_searches:  8100 },
        { keyword: "custom home construction",      monthly_searches:  1600 },
        { keyword: "custom home contractor",        monthly_searches:   880 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Metal Buildings & Pole Barns",
      description: "Metal building and pole barn keywords represent a third distinct service vertical, targeting commercial, agricultural, and residential buyers. These terms capture a broad range of building demand in the Hill Country and ensure Texas Building Center is visible across all of its core service offerings.",
      keywords: [
        { keyword: "metal buildings",          monthly_searches: 33100 },
        { keyword: "pole barn",                monthly_searches: 33100 },
        { keyword: "metal building",           monthly_searches: 12100 },
        { keyword: "pole barns",               monthly_searches:  8100 },
        { keyword: "pole barn house",          monthly_searches:  5400 },
        { keyword: "post frame construction",  monthly_searches:  3600 },
        { keyword: "pole barn construction",   monthly_searches:  2900 },
        { keyword: "pole barn builders",       monthly_searches:  2400 },
        { keyword: "pole barn builder",        monthly_searches:  1300 },
        { keyword: "metal building contractors",monthly_searches: 1600 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Exceeds Current Plan Capacity",
      description: "These high-value keywords were identified and validated but could not be included within the 40-combination limit of the Level C plan. They are the first candidates for inclusion upon upgrading to Level D or higher.",
      keywords: [
        { keyword: "barndominium",             monthly_searches: 246000 },
        { keyword: "barndominium plans",       monthly_searches:  60500 },
        { keyword: "barndominium floor plans", monthly_searches:  33100 },
        { keyword: "pole barn",                monthly_searches:  33100 },
        { keyword: "barndominium homes",       monthly_searches:  12100 },
        { keyword: "custom home builders",     monthly_searches:  12100 },
        { keyword: "barndo plans",             monthly_searches:   4400 },
        { keyword: "barndominium cost",        monthly_searches:   5400 },
        { keyword: "custom homes",             monthly_searches:   8100 },
        { keyword: "metal building",           monthly_searches:  12100 },
        { keyword: "pole barn builders",       monthly_searches:   2400 },
        { keyword: "pole barn construction",   monthly_searches:   2900 },
      ]
    },
    {
      reason: "Near Me Variants: Covered by City Targeting",
      description: "These 'near me' variants are not included in the matrix because the city name appended to each keyword serves the same geographic function. Including both would create redundant content targeting the same search intent.",
      keywords: [
        { keyword: "barndominium builders near me",     monthly_searches: 8100 },
        { keyword: "barndominium builder near me",      monthly_searches:  880 },
        { keyword: "barndominium contractor near me",   monthly_searches:  210 },
        { keyword: "barndominium near me",              monthly_searches: 1600 },
        { keyword: "barndo builders near me",           monthly_searches: 1000 },
        { keyword: "custom home builders near me",      monthly_searches: 9900 },
        { keyword: "custom home builder near me",       monthly_searches: 4400 },
        { keyword: "metal building near me",            monthly_searches: 2900 },
        { keyword: "pole barn near me",                 monthly_searches: 1600 },
      ]
    },
    {
      reason: "Metal Building Sub-Terms: Reserved for Targeted Expansion",
      description: "These metal building, steel building, and post-frame sub-terms represent strong expansion opportunities. They are best served with dedicated content pages and are prioritized for the next plan upgrade when additional combinations become available.",
      keywords: [
        { keyword: "steel buildings",          monthly_searches: 14800 },
        { keyword: "post frame construction",  monthly_searches:  3600 },
        { keyword: "post frame building",      monthly_searches:  3600 },
        { keyword: "metal building cost",      monthly_searches:  1900 },
        { keyword: "metal building contractors",monthly_searches: 1600 },
        { keyword: "shop house",               monthly_searches:  4400 },
        { keyword: "commercial metal buildings",monthly_searches: 1300 },
        { keyword: "agricultural building",    monthly_searches:  1600 },
      ]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Level D",
      combinations: 50,
      price: 599,
      additional_combinations: 10,
      headline: "Add Granite Shoals and Deeper Barndominium Coverage",
      description: "Upgrading to Level D adds 10 additional keyword-city combinations. The most strategic next step is adding Granite Shoals (pop. 5,200), the Lake LBJ corridor community adjacent to Marble Falls, and introducing the high-volume 'barndominium' and 'barndominium plans' keywords into the existing markets.",
      keywords: [
        { keyword: "barndominium",           monthly_searches: 246000 },
        { keyword: "barndominium plans",     monthly_searches:  60500 },
        { keyword: "Granite Shoals, TX",     monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level E",
      combinations: 60,
      price: 699,
      additional_combinations: 20,
      headline: "Add Horseshoe Bay and Llano with Broader Keyword Coverage",
      description: "Level E opens the door to two additional markets: Horseshoe Bay (pop. 4,700), the upscale Lake LBJ community with high-income custom home buyers, and Llano (pop. 3,232), the Llano County seat at the heart of the Hill Country. This tier also adds dedicated barndominium floor plan and cost keywords across all existing markets.",
      keywords: [
        { keyword: "barndominium floor plans", monthly_searches: 33100 },
        { keyword: "barndominium cost",        monthly_searches:  5400 },
        { keyword: "Horseshoe Bay, TX",        monthly_searches: null, new_market: true },
        { keyword: "Llano, TX",                monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level F",
      combinations: 90,
      price: 999,
      additional_combinations: 50,
      headline: "Full Hill Country Service Area Domination",
      description: "Level F provides the coverage needed to dominate every significant market in Texas Building Center's service area. With 90 total combinations, Texas Building Center can target up to 9 cities with a full suite of barndominium, custom home, and metal building keywords, achieving comprehensive visibility across the entire Lake LBJ corridor and Hill Country region.",
      keywords: [
        { keyword: "Johnson City, TX",       monthly_searches: null, new_market: true },
        { keyword: "Cottonwood Shores, TX",  monthly_searches: null, new_market: true },
        { keyword: "barndominium homes",     monthly_searches: 12100 },
        { keyword: "barndominium floor plans",monthly_searches: 33100 },
        { keyword: "custom home builders",   monthly_searches: 12100 },
        { keyword: "barndominium kits",      monthly_searches: 40500 },
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
  // Sort by search volume descending, deduplicate
  const seen = new Set();
  const unique = STRATEGY.keyword_table.filter(kw => {
    if (seen.has(kw.keyword)) return false;
    seen.add(kw.keyword);
    return true;
  });
  unique.sort((a, b) => b.monthly_searches - a.monthly_searches);
  const rows = unique.map(kw => {
    const rowClass = kw.status === 'selected' ? 'row-selected' : kw.status === 'near_me' ? 'row-near-me' : '';
    return `<tr class="${rowClass}">
      <td>${kw.keyword}</td>
      <td class="num-col">${fmt(kw.monthly_searches)}</td>
      <td>${tierPill(kw.tier)}</td>
      <td>${statusBadge(kw.status, kw.note)}</td>
    </tr>`;
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
      <div class="kw-tier-divider"></div>
      <div class="kw-tier-table">
        <div class="kw-row kw-header">
          <span class="kw-name">Keyword</span>
          <span class="kw-vol">Monthly Searches</span>
        </div>
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
    { city: "Marble Falls", tier: "Tier 1", population: 10581, is_hq: false },
    { city: "Lampasas",     tier: "Tier 1", population:  8250, is_hq: false },
    { city: "Kingsland",    tier: "Tier 1", population:  7527, is_hq: false },
    { city: "Burnet",       tier: "Tier 1", population:  7065, is_hq: true  },
  ];
  const keywords = STRATEGY.selected_keywords;

  // Header row 1: tier pills
  const tierCells = markets.map(m => {
    const cls = m.tier === 'Tier 1' ? 't1' : 't2';
    return `<th><span class="tier-pill ${cls} nowrap">${m.tier.toUpperCase()}</span></th>`;
  }).join('');

  // Header row 2: city names
  const cityCells = markets.map(m =>
    `<th class="city-header">${m.city}${m.is_hq ? ' <span class="hq-star">&#9733;</span>' : ''}<br><span class="city-pop-small">Pop. ${fmt(m.population)}</span></th>`
  ).join('');

  thead.innerHTML = `<tr><th class="kw-col-header">Keyword</th>${tierCells}</tr><tr><th></th>${cityCells}</tr>`;

  // Keyword rows
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
      <div class="nu-divider"></div>
      <div class="nu-kw-table">
        <div class="nu-kw-row nu-header">
          <span class="nu-kw-name">Keyword</span>
          <span class="nu-kw-vol">Monthly Searches</span>
        </div>
        ${kwRows}
      </div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// POPULATE OPPORTUNITIES SECTION
// ============================================================
function buildOpportunities() {
  const grid = document.getElementById('opportunities-grid');
  if (!grid) return;
  const cards = STRATEGY.additional_opportunities.map((opp, i) => {
    const kwHeader = `<li class="opp-kw-header">
        <span class="opp-kw-col-label">KEYWORD / MARKET</span>
        <span class="opp-kw-col-label" style="text-align:right">MONTHLY SEARCHES</span>
      </li>`;
    const kwList = kwHeader + opp.keywords.map(kw =>
      `<li>
        <span class="opp-kw">${kw.keyword}</span>
        ${kw.monthly_searches ? `<span class="opp-vol">${fmt(kw.monthly_searches)}</span>` : kw.new_market ? `<span class="opp-vol opp-new-market">New Market</span>` : ''}
      </li>`
    ).join('');
    const highlight = i === 0 ? 'opp-card-highlight' : '';
    return `<div class="opp-card ${highlight}">
      ${i === 0 ? '<div class="opp-recommended">RECOMMENDED NEXT STEP</div>' : '<div class="opp-recommended-spacer"></div>'}
      <div class="opp-plan-label">${opp.plan}</div>
      <div class="opp-price">$${fmt(opp.price)}<span class="opp-price-mo">/mo</span></div>
      <div class="opp-combos">${opp.combinations} total combinations<br><span class="opp-add">(+${opp.additional_combinations} from current plan)</span></div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <ul class="opp-kw-list">${kwList}</ul>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// BUILD MOBILE MARKET LIST
// ============================================================
const MARKET_DATA = [
  { rank: 1,  city: 'Marble Falls',         pop:  10581, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2,  city: 'Lampasas',             pop:   8250, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Kingsland',            pop:   7527, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Burnet',               pop:   7065, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 5,  city: 'Granite Shoals',       pop:   5200, tier: 'Tier 1', selected: false, hq: false },
  { rank: 6,  city: 'Horseshoe Bay',        pop:   4700, tier: 'Tier 2', selected: false, hq: false },
  { rank: 7,  city: 'Llano',               pop:   3232, tier: 'Tier 2', selected: false, hq: false },
  { rank: 8,  city: 'Cottonwood Shores',    pop:   2200, tier: 'Tier 2', selected: false, hq: false },
  { rank: 9,  city: 'Johnson City',         pop:   1800, tier: 'Tier 2', selected: false, hq: false },
  { rank: 10, city: 'Sunrise Beach',        pop:   1200, tier: 'Tier 2', selected: false, hq: false },
  { rank: '11-29', city: 'Buchanan Lake Village, Bertram, Briggs, Bluffton, Round Mountain, Willow City, Adamsville, Castell, Cherokee, Eckert, Joppa, Lake Victor, Mahomet, Naruna, Oakalla, Oatmeal, Rumley, Smithwick, Tow', pop: null, tier: 'Tier 3', selected: false, hq: false },
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
    { city: 'Marble Falls', tier: 'Tier 1', pop: 10581, is_hq: false },
    { city: 'Lampasas',     tier: 'Tier 1', pop:  8250, is_hq: false },
    { city: 'Kingsland',    tier: 'Tier 1', pop:  7527, is_hq: false },
    { city: 'Burnet',       tier: 'Tier 1', pop:  7065, is_hq: true  },
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
