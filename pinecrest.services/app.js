// ============================================================
// SEO Strategy Website -- App.js
// Pinecrest Services | Philadelphia, PA | Plan G (120 combinations)
// Loads strategy data and populates all dynamic sections
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================

const STRATEGY = {
  client_name: "Pinecrest Services",
  industry: "Tree Service & Fence Company",
  hq_city: "Philadelphia",
  state: "PA",
  service_area: "Philadelphia County, Montgomery County, Camden County, Chester County, and Bucks County",
  plan_level: "Plan G",
  plan_price: 4000,
  total_combinations: 120,
  total_keywords_researched: 412,
  num_selected_keywords: 10,
  num_target_markets: 12,

  // ---- FULL KEYWORD LIST (for the keyword table) ----
  full_keyword_list: [
    // Fence keywords
    { keyword: "fence company near me",          monthly_searches: 60500, tier: "Tier 2", status: "near_me"  },
    { keyword: "fence installation",             monthly_searches: 49500, tier: "Tier 2", status: "selected" },
    { keyword: "privacy fence",                  monthly_searches: 49500, tier: "Tier 2", status: "not_used" },
    { keyword: "chain link fence",               monthly_searches: 49500, tier: "Tier 2", status: "not_used" },
    { keyword: "tree service near me",           monthly_searches: 49500, tier: "Tier 1", status: "near_me"  },
    { keyword: "stump grinder",                  monthly_searches: 40500, tier: "Tier 1", status: "not_used" },
    { keyword: "fence companies near me",        monthly_searches: 40500, tier: "Tier 2", status: "near_me"  },
    { keyword: "tree service",                   monthly_searches: 33100, tier: "Tier 1", status: "selected" },
    { keyword: "tree removal near me",           monthly_searches: 33100, tier: "Tier 1", status: "near_me"  },
    { keyword: "arborist",                       monthly_searches: 33100, tier: "Tier 1", status: "not_used" },
    { keyword: "fence company",                  monthly_searches: 33100, tier: "Tier 2", status: "selected" },
    { keyword: "tree removal",                   monthly_searches: 33100, tier: "Tier 1", status: "selected" },
    { keyword: "vinyl fence",                    monthly_searches: 27100, tier: "Tier 2", status: "not_used" },
    { keyword: "fence installation near me",     monthly_searches: 27100, tier: "Tier 2", status: "near_me"  },
    { keyword: "arborist near me",               monthly_searches: 22200, tier: "Tier 1", status: "near_me"  },
    { keyword: "tree trimming",                  monthly_searches: 22200, tier: "Tier 1", status: "selected" },
    { keyword: "tree trimming near me",          monthly_searches: 22200, tier: "Tier 1", status: "near_me"  },
    { keyword: "tree services near me",          monthly_searches: 22200, tier: "Tier 1", status: "near_me"  },
    { keyword: "fencing companies near me",      monthly_searches: 22200, tier: "Tier 2", status: "near_me"  },
    { keyword: "fence contractor",               monthly_searches: 18100, tier: "Tier 2", status: "not_used" },
    { keyword: "tree stump removal",             monthly_searches: 14800, tier: "Tier 1", status: "not_used" },
    { keyword: "tree removal service",           monthly_searches: 14800, tier: "Tier 1", status: "not_used" },
    { keyword: "tree pruning",                   monthly_searches: 14800, tier: "Tier 1", status: "not_used" },
    { keyword: "stump grinding",                 monthly_searches: 14800, tier: "Tier 1", status: "selected" },
    { keyword: "wood fence",                     monthly_searches: 14800, tier: "Tier 2", status: "not_used" },
    { keyword: "stump removal",                  monthly_searches: 14800, tier: "Tier 1", status: "not_used" },
    { keyword: "vinyl fencing",                  monthly_searches: 14800, tier: "Tier 2", status: "not_used" },
    { keyword: "tree removal service near me",   monthly_searches: 12100, tier: "Tier 1", status: "near_me"  },
    { keyword: "tree trimmer",                   monthly_searches: 12100, tier: "Tier 1", status: "not_used" },
    { keyword: "fence contractors near me",      monthly_searches: 12100, tier: "Tier 2", status: "near_me"  },
    { keyword: "temporary fence",                monthly_searches: 12100, tier: "Tier 2", status: "selected" },
    { keyword: "tree care",                      monthly_searches: 12100, tier: "Tier 1", status: "not_used" },
    { keyword: "fence repair near me",           monthly_searches: 12100, tier: "Tier 2", status: "near_me"  },
    { keyword: "tree cutting service",           monthly_searches: 12100, tier: "Tier 1", status: "not_used" },
    { keyword: "tree trimming service near me",  monthly_searches: 12100, tier: "Tier 1", status: "near_me"  },
    { keyword: "stump grinding near me",         monthly_searches: 12100, tier: "Tier 1", status: "near_me"  },
    { keyword: "tree cutting service near me",   monthly_searches:  9900, tier: "Tier 1", status: "near_me"  },
    { keyword: "tree trimming service",          monthly_searches:  9900, tier: "Tier 1", status: "not_used" },
    { keyword: "fence repair",                   monthly_searches:  9900, tier: "Tier 2", status: "not_used" },
    { keyword: "emergency tree removal",         monthly_searches:  8100, tier: "Tier 3", status: "selected" },
    { keyword: "tree stump removal near me",     monthly_searches:  8100, tier: "Tier 1", status: "near_me"  },
    { keyword: "chain link fence cost",          monthly_searches:  8100, tier: "Tier 2", status: "not_used" },
    { keyword: "fence contractors",              monthly_searches:  8100, tier: "Tier 2", status: "not_used" },
    { keyword: "jersey barrier",                 monthly_searches:  8100, tier: "Tier 3", status: "not_used" },
    { keyword: "fencing company near me",        monthly_searches:  8100, tier: "Tier 2", status: "near_me"  },
    { keyword: "tree removers near me",          monthly_searches:  8100, tier: "Tier 1", status: "near_me"  },
    { keyword: "fence companies",                monthly_searches:  8100, tier: "Tier 2", status: "not_used" },
    { keyword: "tree removal cost",              monthly_searches:  8100, tier: "Tier 1", status: "not_used" },
    { keyword: "tree trimmers near me",          monthly_searches:  6600, tier: "Tier 1", status: "near_me"  },
    { keyword: "tree removal companies",         monthly_searches:  6600, tier: "Tier 1", status: "not_used" },
    { keyword: "fencing company",                monthly_searches:  6600, tier: "Tier 2", status: "not_used" },
    { keyword: "wood fencing",                   monthly_searches:  6600, tier: "Tier 2", status: "not_used" },
    { keyword: "stump grinder near me",          monthly_searches:  6600, tier: "Tier 1", status: "near_me"  },
    { keyword: "fence installers near me",       monthly_searches:  6600, tier: "Tier 2", status: "near_me"  },
    { keyword: "chain link fencing",             monthly_searches:  6600, tier: "Tier 2", status: "not_used" },
    { keyword: "stump removal near me",          monthly_searches:  6600, tier: "Tier 1", status: "near_me"  },
    { keyword: "tree companies near me",         monthly_searches:  6600, tier: "Tier 1", status: "near_me"  },
    { keyword: "tree removal services",          monthly_searches:  5400, tier: "Tier 1", status: "not_used" },
    { keyword: "commercial fencing",             monthly_searches:  5400, tier: "Tier 2", status: "selected" },
    { keyword: "temporary fencing",              monthly_searches:  5400, tier: "Tier 2", status: "not_used" },
    { keyword: "residential fencing",            monthly_searches:  5400, tier: "Tier 2", status: "not_used" },
    { keyword: "jersey barriers",                monthly_searches:  4400, tier: "Tier 3", status: "not_used" },
    { keyword: "construction fence",             monthly_searches:  2400, tier: "Tier 3", status: "selected" },
    { keyword: "concrete barrier",               monthly_searches:  2400, tier: "Tier 3", status: "not_used" },
    { keyword: "concrete barriers",              monthly_searches:  2400, tier: "Tier 3", status: "not_used" },
    { keyword: "construction fencing",           monthly_searches:  1600, tier: "Tier 3", status: "not_used" },
    { keyword: "construction fence rental",      monthly_searches:  1300, tier: "Tier 3", status: "not_used" },
    { keyword: "temporary fence rental",         monthly_searches:  2400, tier: "Tier 2", status: "not_used" },
    { keyword: "traffic barrier",                monthly_searches:   880, tier: "Tier 3", status: "not_used" },
    { keyword: "temporary fencing rental",       monthly_searches:   880, tier: "Tier 2", status: "not_used" },
    { keyword: "event fencing",                  monthly_searches:   480, tier: "Tier 2", status: "not_used" },
    { keyword: "construction site fencing",      monthly_searches:   390, tier: "Tier 3", status: "not_used" },
    { keyword: "crowd control fencing",          monthly_searches:   170, tier: "Tier 3", status: "not_used" },
    { keyword: "water filled barrier",           monthly_searches:   210, tier: "Tier 3", status: "not_used" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Core Tree Care",
      description: "Broad, high-intent keywords that reflect Pinecrest Services' primary tree care offerings. These are the highest-volume terms customers search when they need immediate tree work: removal, trimming, and stump grinding. Deploying these across all 12 markets ensures Pinecrest captures the largest share of local search demand for its core service line.",
      keywords: [
        { keyword: "tree service",    monthly_searches: 33100 },
        { keyword: "tree removal",    monthly_searches: 33100 },
        { keyword: "tree trimming",   monthly_searches: 22200 },
        { keyword: "stump grinding",  monthly_searches: 14800 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Fencing Solutions",
      description: "Keywords covering Pinecrest Services' full fencing portfolio: residential, commercial, and temporary fencing. This tier captures both homeowners seeking privacy and security fencing and commercial clients needing temporary or construction fencing. The inclusion of 'temporary fence' reflects the client's strategic priority for this high-value service line.",
      keywords: [
        { keyword: "fence installation",  monthly_searches: 49500 },
        { keyword: "fence company",       monthly_searches: 33100 },
        { keyword: "temporary fence",     monthly_searches: 12100 },
        { keyword: "commercial fencing",  monthly_searches:  5400 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Specialty & Emergency",
      description: "High-intent specialty keywords targeting urgent and commercial-grade service needs. 'Emergency tree removal' captures customers in immediate distress after storms or hazardous tree situations. 'Construction fence' targets commercial contractors and project managers seeking temporary site security solutions, a niche where Pinecrest Services has a competitive advantage in the Philadelphia market.",
      keywords: [
        { keyword: "emergency tree removal", monthly_searches: 8100 },
        { keyword: "construction fence",     monthly_searches: 2400 },
      ]
    },
  ],

  // ---- MATRIX ----
  matrix: [
    { city: "Philadelphia",    state: "PA", tier: "Tier 1", population: 1603797, is_hq: true,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
    { city: "Cherry Hill",     state: "NJ", tier: "Tier 1", population:   74566, is_hq: false,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
    { city: "Camden",          state: "NJ", tier: "Tier 1", population:   73562, is_hq: false,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
    { city: "Abington",        state: "PA", tier: "Tier 1", population:   55310, is_hq: false,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
    { city: "Levittown",       state: "PA", tier: "Tier 1", population:   52983, is_hq: false,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
    { city: "Norristown",      state: "PA", tier: "Tier 2", population:   34324, is_hq: false,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
    { city: "Warminster",      state: "PA", tier: "Tier 2", population:   32682, is_hq: false,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
    { city: "West Chester",    state: "PA", tier: "Tier 2", population:   21000, is_hq: false,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
    { city: "King of Prussia", state: "PA", tier: "Tier 2", population:   19936, is_hq: false,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
    { city: "Phoenixville",    state: "PA", tier: "Tier 2", population:   16440, is_hq: false,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
    { city: "Lansdale",        state: "PA", tier: "Tier 2", population:   16269, is_hq: false,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
    { city: "Doylestown",      state: "PA", tier: "Tier 3", population:    8380, is_hq: false,
      keywords: ["tree service","tree removal","tree trimming","stump grinding","fence company","fence installation","temporary fence","commercial fencing","emergency tree removal","construction fence"], total: 10 },
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Near-Me Variants Captured Organically by Keyword-City Pages",
      description: "High-volume 'near me' and modifier variants are excluded from the matrix because keyword-city combination pages naturally rank for these intent-modified queries. Adding them as separate matrix entries would create redundant content without additional strategic value. These terms will be captured organically as the keyword-city pages gain authority.",
      keywords: [
        { keyword: "fence company near me",       monthly_searches: 60500 },
        { keyword: "tree service near me",        monthly_searches: 49500 },
        { keyword: "fence installation near me",  monthly_searches: 27100 },
        { keyword: "fence companies near me",     monthly_searches: 40500 },
        { keyword: "tree removal near me",        monthly_searches: 33100 },
        { keyword: "fencing companies near me",   monthly_searches: 22200 },
        { keyword: "tree trimming near me",       monthly_searches: 22200 },
        { keyword: "stump grinding near me",      monthly_searches: 12100 },
      ]
    },
    {
      reason: "Residential Fence Specialties Reserved for Targeted Expansion",
      description: "Residential fencing keywords (privacy fence, chain link fence, vinyl fence, wood fence) represent a strong sub-category with significant search volume. At Plan G capacity, the broader 'fence installation' and 'fence company' keywords capture this intent across all 12 markets. A dedicated residential fencing expansion targeting these specific fence types would be ideal at Plan H.",
      keywords: [
        { keyword: "privacy fence",       monthly_searches: 49500 },
        { keyword: "chain link fence",    monthly_searches: 49500 },
        { keyword: "vinyl fence",         monthly_searches: 27100 },
        { keyword: "wood fence",          monthly_searches: 14800 },
        { keyword: "vinyl fencing",       monthly_searches: 14800 },
        { keyword: "chain link fencing",  monthly_searches:  6600 },
        { keyword: "wood fencing",        monthly_searches:  6600 },
        { keyword: "residential fencing", monthly_searches:  5400 },
      ]
    },
    {
      reason: "Stump Removal and Arborist Keywords Reserved for Deeper Tree Service Expansion",
      description: "Stump removal, arborist, and tree care keywords carry meaningful volume but overlap heavily with the selected 'stump grinding' and 'tree service' matrix keywords. These are best deployed in a dedicated expansion phase targeting the highest-volume markets with additional keyword depth.",
      keywords: [
        { keyword: "stump grinder",        monthly_searches: 40500 },
        { keyword: "arborist",             monthly_searches: 33100 },
        { keyword: "tree stump removal",   monthly_searches: 14800 },
        { keyword: "stump removal",        monthly_searches: 14800 },
        { keyword: "tree pruning",         monthly_searches: 14800 },
        { keyword: "tree removal service", monthly_searches: 14800 },
        { keyword: "tree care",            monthly_searches: 12100 },
        { keyword: "tree cutting service", monthly_searches: 12100 },
      ]
    },
    {
      reason: "Jersey Barrier and Specialty Barrier Keywords Reserved for Commercial Expansion",
      description: "Jersey barrier and concrete barrier keywords represent a specialized commercial vertical that Pinecrest Services offers. These are best targeted in a dedicated commercial and construction services expansion rather than mixed into the general fencing matrix. This vertical has strong B2B conversion potential and deserves its own dedicated content strategy.",
      keywords: [
        { keyword: "jersey barrier",    monthly_searches: 8100 },
        { keyword: "jersey barriers",   monthly_searches: 4400 },
        { keyword: "concrete barrier",  monthly_searches: 2400 },
        { keyword: "concrete barriers", monthly_searches: 2400 },
        { keyword: "traffic barrier",   monthly_searches:  880 },
        { keyword: "water filled barrier", monthly_searches: 210 },
      ]
    },
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Plan H",
      combinations: 150,
      price: 5000,
      additional_combinations: 30,
      headline: "Expand Into Residential Fence Specialties and Deeper Tree Coverage",
      description: "Upgrading to Plan H adds 30 additional keyword-city combinations, enabling dedicated coverage for high-volume residential fence keywords (privacy fence, chain link fence, vinyl fence) and deeper tree service keywords (arborist, stump removal, tree pruning) across the top markets. This expansion would capture an estimated 150,000+ additional monthly searches.",
      keywords: [
        { keyword: "privacy fence",    monthly_searches: 49500 },
        { keyword: "chain link fence", monthly_searches: 49500 },
        { keyword: "arborist",         monthly_searches: 33100 },
        { keyword: "stump removal",    monthly_searches: 14800 },
      ]
    },
    {
      plan: "Jersey Barrier Expansion",
      combinations: 150,
      price: 5000,
      additional_combinations: 30,
      headline: "Capture the Commercial Construction Market with Jersey Barriers",
      description: "Pinecrest Services is one of the few companies in the Philadelphia region offering jersey barriers alongside fencing. A dedicated jersey barrier and construction barrier keyword expansion would capture high-value commercial construction contracts that competitors are not targeting with SEO. This B2B vertical commands premium pricing and has minimal online competition.",
      keywords: [
        { keyword: "jersey barrier",           monthly_searches: 8100 },
        { keyword: "jersey barriers",          monthly_searches: 4400 },
        { keyword: "concrete barrier",         monthly_searches: 2400 },
        { keyword: "construction fence rental",monthly_searches: 1300 },
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
  if (status === 'selected') return '<span class="status-badge status-selected">SELECTED</span>';
  if (status === 'near_me')  return '<span class="status-badge status-nearme">NEAR ME</span>';
  return '<span class="status-badge status-notused">NOT USED</span>';
}

function tierPill(label) {
  const cls = label === 'Tier 1' ? 't1' : label === 'Tier 2' ? 't2' : 't3';
  return `<span class="tier-pill ${cls}">${label.toUpperCase()}</span>`;
}

// ============================================================
// POPULATE KEYWORD TABLE
// ============================================================
function buildKeywordTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;

  // Build a map of selected keywords
  const selectedKws = new Set(STRATEGY.matrix[0].keywords.map(k => k.toLowerCase()));

  const rows = STRATEGY.full_keyword_list.map(kw => {
    const isSelected = kw.status === 'selected';
    const rowCls = isSelected ? 'row-selected' : '';
    return `<tr class="${rowCls}">
      <td>${isSelected ? '<strong>' : ''}${kw.keyword}${isSelected ? '</strong>' : ''}</td>
      <td class="num-col">${fmt(kw.monthly_searches)}</td>
      <td>${tierPill(kw.tier)}</td>
      <td>${statusBadge(kw.status)}</td>
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

  const markets = STRATEGY.matrix;
  const keywords = STRATEGY.matrix[0].keywords;

  // Build header row 1: tier pills
  const tierCells = markets.map(m => {
    const cls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    return `<th><span class="tier-pill ${cls} nowrap">${m.tier.toUpperCase()}</span></th>`;
  }).join('');

  // Build header row 2: city names with population
  const cityCells = markets.map(m =>
    `<th class="city-header">${m.city}${m.is_hq ? ' <span class="hq-star">&#9733;</span>' : ''}<br><span class="city-pop-small">Pop. ${fmt(m.population)}</span></th>`
  ).join('');

  thead.innerHTML = `<tr><th class="kw-col-header">Keyword</th>${tierCells}</tr><tr><th></th>${cityCells}</tr>`;

  // Build keyword rows (keywords as rows, markets as columns)
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
  // If exactly 4 cards, use 2x2 grid so no card sits alone on a row
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
      ${opp.price ? `<div class="opp-price">$${fmt(opp.price)}<span class="opp-price-label">/mo</span></div>` : ''}
      <div class="opp-combos-large">${opp.combinations} <span class="opp-combos-label">total combinations</span></div>
      <div class="opp-combos">${opp.additional_combinations} additional combinations from current plan</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <ul class="opp-kw-list">${kwList}</ul>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// BUILD MARKET TABLE (desktop)
// ============================================================
const FULL_MARKET_LIST = [
  { rank: 1,  city: "Philadelphia",    state: "PA", county: "Philadelphia", pop: 1603797, tier: "Tier 1", selected: true,  hq: true,  rationale: "Pinecrest Services headquarters; largest city in the region with the highest search volume and broadest customer base for both tree and fence services." },
  { rank: 2,  city: "Cherry Hill",     state: "NJ", county: "Camden",       pop:   74566, tier: "Tier 1", selected: true,  hq: false, rationale: "Largest market in Camden County; major suburban hub directly across the Delaware River with high residential density and strong demand for both tree and fence services." },
  { rank: 3,  city: "Camden",          state: "NJ", county: "Camden",       pop:   73562, tier: "Tier 1", selected: true,  hq: false, rationale: "Camden County seat; major urban market with significant commercial fencing and temporary fencing demand from construction and development projects." },
  { rank: 4,  city: "Abington",        state: "PA", county: "Montgomery",   pop:   55310, tier: "Tier 1", selected: true,  hq: false, rationale: "Large Montgomery County township with established residential neighborhoods; high homeowner density drives strong demand for tree care and residential fencing." },
  { rank: 5,  city: "Levittown",       state: "PA", county: "Bucks",        pop:   52983, tier: "Tier 1", selected: true,  hq: false, rationale: "Largest community in Bucks County; classic suburban neighborhood with mature trees and aging fences creating consistent service demand." },
  { rank: 6,  city: "Cheltenham",      state: "PA", county: "Montgomery",   pop:   37100, tier: "Tier 2", selected: false, hq: false, rationale: "Strong Tier 2 market adjacent to Philadelphia; recommended for next upgrade phase." },
  { rank: 7,  city: "Pennsauken",      state: "NJ", county: "Camden",       pop:   35885, tier: "Tier 2", selected: false, hq: false, rationale: "Large Camden County township; strong candidate for expansion once core markets are established." },
  { rank: 8,  city: "Norristown",      state: "PA", county: "Montgomery",   pop:   34324, tier: "Tier 2", selected: true,  hq: false, rationale: "Montgomery County seat; strong commercial and residential market with active development creating demand for temporary and construction fencing." },
  { rank: 9,  city: "Warminster",      state: "PA", county: "Bucks",        pop:   32682, tier: "Tier 2", selected: true,  hq: false, rationale: "Major Bucks County township with a strong mix of residential and commercial properties; high demand for both tree services and fencing solutions." },
  { rank: 10, city: "Voorhees",        state: "NJ", county: "Camden",       pop:   29131, tier: "Tier 2", selected: false, hq: false, rationale: "Affluent Camden County community; high residential fencing demand; ideal for Plan H expansion." },
  { rank: 11, city: "Warrington",      state: "PA", county: "Bucks",        pop:   23000, tier: "Tier 2", selected: false, hq: false, rationale: "Growing Bucks County township; recommended for expansion as domain authority grows." },
  { rank: 12, city: "West Chester",    state: "PA", county: "Chester",      pop:   21000, tier: "Tier 2", selected: true,  hq: false, rationale: "Chester County seat; affluent community with mature tree canopy and premium residential fencing demand; high conversion potential." },
  { rank: 13, city: "King of Prussia", state: "PA", county: "Montgomery",   pop:   19936, tier: "Tier 2", selected: true,  hq: false, rationale: "Major commercial hub in Montgomery County; significant commercial fencing and temporary fencing demand from retail, office, and construction projects." },
  { rank: 14, city: "Newtown",         state: "PA", county: "Bucks",        pop:   18206, tier: "Tier 2", selected: false, hq: false, rationale: "Affluent Bucks County community; strong residential fencing demand; future expansion candidate." },
  { rank: 15, city: "Phoenixville",    state: "PA", county: "Chester",      pop:   16440, tier: "Tier 2", selected: true,  hq: false, rationale: "Growing Chester County community with active residential development; strong demand for fence installation and tree services." },
  { rank: 16, city: "Lansdale",        state: "PA", county: "Montgomery",   pop:   16269, tier: "Tier 2", selected: true,  hq: false, rationale: "Established Montgomery County borough with a dense residential base; consistent demand for tree trimming and residential fencing services." },
  { rank: 17, city: "Lindenwold",      state: "NJ", county: "Camden",       pop:   17613, tier: "Tier 2", selected: false, hq: false, rationale: "Camden County community; recommended for Phase 2 expansion." },
  { rank: 18, city: "Collingswood",    state: "NJ", county: "Camden",       pop:   13926, tier: "Tier 2", selected: false, hq: false, rationale: "Dense Camden County borough; strong residential market for fencing and tree services." },
  { rank: 19, city: "Coatesville",     state: "PA", county: "Chester",      pop:   13100, tier: "Tier 2", selected: false, hq: false, rationale: "Chester County city; good candidate for expansion as domain authority grows." },
  { rank: 20, city: "Montgomeryville", state: "PA", county: "Montgomery",   pop:   12000, tier: "Tier 2", selected: false, hq: false, rationale: "Montgomery County community; future expansion target." },
  { rank: 21, city: "Haddonfield",     state: "NJ", county: "Camden",       pop:   11593, tier: "Tier 2", selected: false, hq: false, rationale: "Affluent Camden County borough; high residential fencing demand; future expansion candidate." },
  { rank: 22, city: "Gloucester City", state: "NJ", county: "Camden",       pop:   11456, tier: "Tier 2", selected: false, hq: false, rationale: "Camden County city; future expansion target." },
  { rank: 23, city: "Langhorne",       state: "PA", county: "Bucks",        pop:   10000, tier: "Tier 2", selected: false, hq: false, rationale: "Bucks County community; future expansion target." },
  { rank: "24+", city: "Bristol, Conshohocken, Perkasie, Quakertown, Downingtown, Hatboro + 9 more", state: "", county: "Various", pop: null, tier: "Tier 3", selected: false, hq: false, rationale: "Smaller communities (under 10,000 pop.); long-term expansion as domain authority grows." },
  { rank: "Doylestown", city: "Doylestown",  state: "PA", county: "Bucks", pop: 8380, tier: "Tier 3", selected: true, hq: false, rationale: "Bucks County seat; included despite smaller population due to its role as the county commercial center and disproportionate search demand relative to population size." },
];

function buildMarketTable() {
  const tbody = document.getElementById('market-table-body');
  if (!tbody) return;

  const rows = FULL_MARKET_LIST.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const isSelected = m.selected;
    const rowCls = isSelected ? (m.hq ? 'row-selected row-hq' : 'row-selected') : (m.tier === 'Tier 3' ? 'row-tier3' : '');
    const cityLabel = m.hq
      ? `<strong>${m.city}, ${m.state} &#9733; HQ</strong>`
      : (isSelected ? `<strong>${m.city}${m.state ? ', ' + m.state : ''}</strong>` : `${m.city}${m.state ? ', ' + m.state : ''}`);
    const selIcon = isSelected ? '<td class="check">&#10003;</td>' : '<td class="dash">&#8212;</td>';
    const popStr = m.pop ? fmt(m.pop) : '&lt;10,000';
    return `<tr class="${rowCls}">
      <td>${m.rank}</td>
      <td>${cityLabel}</td>
      <td>${m.county}</td>
      <td class="num-col">${popStr}</td>
      <td><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span></td>
      ${selIcon}
      <td class="rationale-cell">${m.rationale}</td>
    </tr>`;
  }).join('');
  tbody.innerHTML = rows;
}

// ============================================================
// BUILD MOBILE MARKET LIST
// ============================================================
function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = FULL_MARKET_LIST.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.hq ? `${m.city} <span class="hq-tag">HQ</span>` : (m.city.includes(',') ? m.city : `${m.city}${m.state ? ', ' + m.state : ''}`);
    const popStr = m.pop ? fmt(m.pop) : '&lt;10K';
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
  const keywords = STRATEGY.matrix[0].keywords;
  const cards = STRATEGY.matrix.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const cityLabel = m.is_hq ? `${m.city}, ${m.state} <span class="hq-tag">HQ</span>` : `${m.city}, ${m.state}`;
    const kwList = keywords.map(kw =>
      `<div class="mob-matrix-kw"><span class="mob-matrix-check">&#10003;</span><span>${kw}</span></div>`
    ).join('');
    return `<div class="mob-matrix-card">
      <div class="mob-matrix-city">
        <span class="mob-matrix-city-name">${cityLabel}</span>
        <span class="mob-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp; Pop. ${fmt(m.population)}</span>
      </div>
      <div class="mob-matrix-kws">${kwList}</div>
      <div class="mob-matrix-total">${keywords.length} combinations</div>
    </div>`;
  }).join('');
  el.innerHTML = cards + `<div class="mob-matrix-grand-total">Grand Total: <strong>${keywords.length * STRATEGY.matrix.length} Combinations</strong></div>`;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  buildMarketTable();
  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildMobileMarketList();
  buildMobileMatrix();
  buildNotUsed();
  buildOpportunities();
});
