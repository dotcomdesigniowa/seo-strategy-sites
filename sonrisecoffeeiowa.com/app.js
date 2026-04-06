// ============================================================
// SEO Strategy Website — App.js
// SonRise Coffee (sonrisecoffeeiowa.com) | Plan Level E | 60 Combinations
// Loads strategy data and populates all dynamic sections
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================
const STRATEGY = {
  client_name: "SonRise Coffee",
  industry: "Coffee Shop, Ice Cream, Cafe & Event Venue",
  hq_city: "Riverside",
  state: "IA",
  service_area: "Riverside, Iowa City, Coralville, North Liberty, Washington, Kalona, and surrounding communities",
  plan_level: "Level E",
  plan_price: 2000,
  total_combinations: 60,
  total_keywords_researched: 99,
  selected_keywords: [
    "coffee shop",
    "cafe",
    "ice cream shop",
    "event venue",
    "birthday party venue"
  ],
  // ---- KEYWORD TABLE ----
  keyword_table: [
    // Coffee Shop family
    { keyword: "coffee shop near me",          monthly_searches: 246000, tier: "Tier 1", status: "near_me",   family: "coffee shop",   variant_type: "near_me", near_me_note: "Treated as equivalent to 'coffee shop [city]' in the final matrix" },
    { keyword: "coffee shop",                  monthly_searches: 201000, tier: "Tier 1", status: "selected",  family: "coffee shop",   variant_type: "base"    },
    { keyword: "coffee shops near me",         monthly_searches:  74000, tier: "Tier 1", status: "not_used",  family: "coffee shop",   variant_type: "near_me" },
    { keyword: "coffee house near me",         monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "coffee shop",   variant_type: "near_me" },
    { keyword: "coffee house",                 monthly_searches:  22200, tier: "Tier 1", status: "not_used",  family: "coffee shop",   variant_type: "variant" },
    { keyword: "local coffee shop",            monthly_searches:   1900, tier: "Tier 1", status: "not_used",  family: "coffee shop",   variant_type: "variant" },
    { keyword: "best coffee shop",             monthly_searches:   3600, tier: "Tier 1", status: "not_used",  family: "coffee shop",   variant_type: "variant" },
    { keyword: "cozy coffee shop",             monthly_searches:   2900, tier: "Tier 1", status: "not_used",  family: "coffee shop",   variant_type: "variant" },
    { keyword: "cute coffee shop near me",     monthly_searches:    880, tier: "Tier 1", status: "not_used",  family: "coffee shop",   variant_type: "near_me" },
    { keyword: "small coffee shop near me",    monthly_searches:     90, tier: "Tier 1", status: "not_used",  family: "coffee shop",   variant_type: "near_me" },
    // Cafe family
    { keyword: "cafe near me",                 monthly_searches: 165000, tier: "Tier 2", status: "near_me",   family: "cafe",          variant_type: "near_me", near_me_note: "Treated as equivalent to 'cafe [city]' in the final matrix" },
    { keyword: "cafe",                         monthly_searches:  90500, tier: "Tier 2", status: "selected",  family: "cafe",          variant_type: "base"    },
    { keyword: "coffee cafe near me",          monthly_searches:   8100, tier: "Tier 2", status: "not_used",  family: "cafe",          variant_type: "near_me" },
    { keyword: "coffee cafe",                  monthly_searches:   5400, tier: "Tier 2", status: "not_used",  family: "cafe",          variant_type: "variant" },
    { keyword: "coffee bar near me",           monthly_searches:   6600, tier: "Tier 2", status: "not_used",  family: "cafe",          variant_type: "near_me" },
    { keyword: "coffee bar",                   monthly_searches:   4400, tier: "Tier 2", status: "not_used",  family: "cafe",          variant_type: "variant" },
    { keyword: "espresso bar near me",         monthly_searches:   1600, tier: "Tier 2", status: "not_used",  family: "cafe",          variant_type: "near_me" },
    { keyword: "espresso bar",                 monthly_searches:   1300, tier: "Tier 2", status: "not_used",  family: "cafe",          variant_type: "variant" },
    { keyword: "local cafe",                   monthly_searches:   1300, tier: "Tier 2", status: "not_used",  family: "cafe",          variant_type: "variant" },
    { keyword: "cozy cafe near me",            monthly_searches:   1600, tier: "Tier 2", status: "not_used",  family: "cafe",          variant_type: "near_me" },
    // Ice Cream Shop family
    { keyword: "ice cream near me",            monthly_searches: 1500000, tier: "Tier 3", status: "not_used",  family: "ice cream shop", variant_type: "near_me" },
    { keyword: "ice cream shop near me",       monthly_searches:  27100, tier: "Tier 3", status: "near_me",   family: "ice cream shop", variant_type: "near_me", near_me_note: "Treated as equivalent to 'ice cream shop [city]' in the final matrix" },
    { keyword: "ice cream shop",               monthly_searches:  22200, tier: "Tier 3", status: "selected",  family: "ice cream shop", variant_type: "base"    },
    { keyword: "ice cream places near me",     monthly_searches:  49500, tier: "Tier 3", status: "not_used",  family: "ice cream shop", variant_type: "near_me" },
    { keyword: "best ice cream near me",       monthly_searches:  22200, tier: "Tier 3", status: "not_used",  family: "ice cream shop", variant_type: "near_me" },
    { keyword: "soft serve ice cream near me", monthly_searches:  33100, tier: "Tier 3", status: "not_used",  family: "ice cream shop", variant_type: "near_me" },
    { keyword: "ice cream parlor near me",     monthly_searches:   6600, tier: "Tier 3", status: "not_used",  family: "ice cream shop", variant_type: "near_me" },
    { keyword: "ice cream parlor",             monthly_searches:  14800, tier: "Tier 3", status: "not_used",  family: "ice cream shop", variant_type: "variant" },
    { keyword: "ice cream place near me",      monthly_searches:   6600, tier: "Tier 3", status: "not_used",  family: "ice cream shop", variant_type: "near_me" },
    { keyword: "ice cream store near me",      monthly_searches:   5400, tier: "Tier 3", status: "not_used",  family: "ice cream shop", variant_type: "near_me" },
    { keyword: "ice cream cafe",               monthly_searches:   1300, tier: "Tier 3", status: "not_used",  family: "ice cream shop", variant_type: "variant" },
    { keyword: "local ice cream shop",         monthly_searches:    170, tier: "Tier 3", status: "not_used",  family: "ice cream shop", variant_type: "variant" },
    // Event Venue family
    { keyword: "event venue",                  monthly_searches:  18100, tier: "Tier 4", status: "selected",  family: "event venue",   variant_type: "base"    },
    { keyword: "event venue near me",          monthly_searches:   5400, tier: "Tier 4", status: "near_me",   family: "event venue",   variant_type: "near_me", near_me_note: "Treated as equivalent to 'event venue [city]' in the final matrix" },
    { keyword: "event space near me",          monthly_searches:   8100, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    { keyword: "event space rental",           monthly_searches:   5400, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "variant" },
    { keyword: "event space for rent",         monthly_searches:   2900, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "variant" },
    { keyword: "small event venue near me",    monthly_searches:    260, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    { keyword: "small event space near me",    monthly_searches:    720, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    { keyword: "private event space near me",  monthly_searches:    720, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    { keyword: "venue rental near me",         monthly_searches:    880, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    { keyword: "party venue near me",          monthly_searches:   2900, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    { keyword: "party room for rent",          monthly_searches:    320, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "variant" },
    { keyword: "party room rental near me",    monthly_searches:    720, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    { keyword: "private party room near me",   monthly_searches:    170, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    { keyword: "meeting room rental near me",  monthly_searches:   1300, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    { keyword: "meeting room for rent",        monthly_searches:   1000, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "variant" },
    { keyword: "meeting space for rent",       monthly_searches:   1000, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "variant" },
    { keyword: "workshop space for rent near me", monthly_searches: 720, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    { keyword: "conference room rental near me",  monthly_searches: 1300, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    { keyword: "coworking space near me",      monthly_searches:  18100, tier: "Tier 4", status: "not_used",  family: "event venue",   variant_type: "near_me" },
    // Birthday Party Venue family
    { keyword: "birthday party places near me",monthly_searches:  18100, tier: "Tier 5", status: "near_me",   family: "birthday party venue", variant_type: "near_me", near_me_note: "Treated as equivalent to 'birthday party places [city]' in the final matrix" },
    { keyword: "birthday party places",        monthly_searches:  12100, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "variant" },
    { keyword: "birthday party venue",         monthly_searches:   2400, tier: "Tier 5", status: "selected",  family: "birthday party venue", variant_type: "base"    },
    { keyword: "kids birthday party places near me", monthly_searches: 8100, tier: "Tier 5", status: "not_used", family: "birthday party venue", variant_type: "near_me" },
    { keyword: "places for birthday parties near me", monthly_searches: 3600, tier: "Tier 5", status: "not_used", family: "birthday party venue", variant_type: "near_me" },
    { keyword: "birthday party venue near me",monthly_searches:   1300, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "near_me" },
    { keyword: "birthday party space near me",monthly_searches:    320, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "near_me" },
    { keyword: "baby shower venues near me",   monthly_searches:   6600, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "near_me" },
    { keyword: "bridal shower venues near me", monthly_searches:   5400, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "near_me" },
    { keyword: "bridal shower places near me", monthly_searches:   1900, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "near_me" },
    { keyword: "graduation party places near me", monthly_searches: 590, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "near_me" },
    { keyword: "private party room near me",   monthly_searches:    170, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "near_me" },
    { keyword: "anniversary party venue near me", monthly_searches: 170, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "near_me" },
    { keyword: "engagement party venue near me",  monthly_searches: 140, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "near_me" },
    { keyword: "church event space near me",   monthly_searches:     20, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "near_me" },
    { keyword: "small group meeting space",    monthly_searches:     20, tier: "Tier 5", status: "not_used",  family: "birthday party venue", variant_type: "variant" },
  ],
  // ---- KEYWORD TIER CARDS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Coffee Shop",
      description: "The anchor keyword for SonRise Coffee's strategy, with 246,000 monthly searches for 'coffee shop near me' nationally. 'Coffee shop' is the dominant search term used by consumers looking for a place to grab a drink and sit down. SonRise Coffee's warm, community-focused atmosphere and handcrafted beverages make this the highest-priority keyword, and the foundation for all 12 target markets.",
      keywords: [
        { keyword: "coffee shop near me",    monthly_searches: 246000 },
        { keyword: "coffee shop",            monthly_searches: 201000 },
        { keyword: "coffee shops near me",   monthly_searches:  74000 },
        { keyword: "coffee house near me",   monthly_searches:  40500 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Cafe",
      description: "A distinct and high-volume search audience separate from 'coffee shop.' With 165,000 monthly searches for 'cafe near me,' many consumers use 'cafe' to describe a place for coffee, light food, and a relaxed atmosphere. SonRise Coffee's full menu of pastries, fresh meals, and handcrafted drinks positions it perfectly to capture this audience alongside the coffee shop keyword.",
      keywords: [
        { keyword: "cafe near me",           monthly_searches: 165000 },
        { keyword: "cafe",                   monthly_searches:  90500 },
        { keyword: "coffee cafe near me",    monthly_searches:   8100 },
        { keyword: "coffee bar near me",     monthly_searches:   6600 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Ice Cream Shop",
      description: "SonRise Coffee offers ice cream as a distinct service line, and 'ice cream shop near me' generates 27,100 monthly searches nationally. Ice cream customers are a separate audience from coffee customers and represent a significant incremental revenue opportunity. Targeting 'ice cream shop' across all 12 markets ensures SonRise captures both the morning coffee crowd and the afternoon ice cream crowd.",
      keywords: [
        { keyword: "ice cream shop near me", monthly_searches:  27100 },
        { keyword: "ice cream shop",         monthly_searches:  22200 },
        { keyword: "ice cream places near me", monthly_searches: 49500 },
        { keyword: "ice cream parlor near me", monthly_searches:  6600 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Event Venue",
      description: "SonRise Coffee's two flexible rooms accommodate up to 50 people, making it a genuine event venue for the Iowa City region. 'Event venue near me' generates 5,400 monthly searches, and the broader 'event venue' term generates 18,100. Targeting this keyword across all 12 markets, including Iowa City, Coralville, and North Liberty, positions SonRise as the go-to intimate event space in the region.",
      keywords: [
        { keyword: "event venue",            monthly_searches:  18100 },
        { keyword: "event venue near me",    monthly_searches:   5400 },
        { keyword: "event space near me",    monthly_searches:   8100 },
        { keyword: "party venue near me",    monthly_searches:   2900 },
      ]
    },
    {
      tier_label: "Tier 5",
      tier_name: "Birthday Party Venue",
      description: "Birthday party venue keywords are the highest-volume event-specific terms in SonRise Coffee's portfolio. 'Birthday party places near me' generates 18,100 monthly searches nationally, making it the dominant event keyword. SonRise's cozy, welcoming atmosphere is ideal for birthday celebrations, and targeting this keyword alongside the broader event venue keyword ensures maximum coverage of the event rental audience.",
      keywords: [
        { keyword: "birthday party places near me", monthly_searches: 18100 },
        { keyword: "birthday party places",         monthly_searches: 12100 },
        { keyword: "kids birthday party places near me", monthly_searches: 8100 },
        { keyword: "baby shower venues near me",    monthly_searches:  6600 },
      ]
    }
  ],
  // ---- STRATEGY MATRIX (5 keywords x 12 cities = 60 combinations) ----
  matrix: [
    { city: "Iowa City",    state: "IA", tier: "Tier 1", population: 74000, is_hq: false, keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
    { city: "Coralville",   state: "IA", tier: "Tier 2", population: 22000, is_hq: false, keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
    { city: "North Liberty",state: "IA", tier: "Tier 2", population: 21000, is_hq: false, keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
    { city: "Washington",   state: "IA", tier: "Tier 3", population:  7400, is_hq: false, keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
    { city: "Solon",        state: "IA", tier: "Tier 3", population:  2700, is_hq: false, keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
    { city: "Kalona",       state: "IA", tier: "Tier 3", population:  2600, is_hq: false, keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
    { city: "Sigourney",    state: "IA", tier: "Tier 3", population:  2000, is_hq: false, keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
    { city: "Wellman",      state: "IA", tier: "Tier 3", population:  1500, is_hq: false, keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
    { city: "Lone Tree",    state: "IA", tier: "Tier 3", population:  1300, is_hq: false, keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
    { city: "Riverside",    state: "IA", tier: "Tier 3", population:  1000, is_hq: true,  keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
    { city: "Keota",        state: "IA", tier: "Tier 3", population:   950, is_hq: false, keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
    { city: "Hills",        state: "IA", tier: "Tier 3", population:   800, is_hq: false, keywords: ["coffee shop", "cafe", "ice cream shop", "event venue", "birthday party venue"] },
  ],
  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Ice Cream Broad Terms: Too Generic for Local SEO Pages",
      description: "The 'ice cream near me' keyword generates 1.5 million monthly searches nationally, but this volume is dominated by Google Maps results and large chain brands. The actionable keyword for SonRise Coffee is 'ice cream shop near me' (27,100 searches), which is already selected. Similarly, 'soft serve ice cream near me' (33,100) and 'ice cream places near me' (49,500) are broad discovery terms that convert less reliably than the specific 'ice cream shop' keyword.",
      keywords: [
        { keyword: "ice cream near me",            monthly_searches: 1500000 },
        { keyword: "ice cream places near me",     monthly_searches:   49500 },
        { keyword: "soft serve ice cream near me", monthly_searches:   33100 },
        { keyword: "best ice cream near me",       monthly_searches:   22200 },
        { keyword: "ice cream parlor",             monthly_searches:   14800 },
      ]
    },
    {
      reason: "Coffee Bar / Espresso Bar: Niche Audience, Lower Priority",
      description: "Coffee bar (4,400 searches) and espresso bar (1,300 searches) are niche terms used by consumers specifically seeking a bar-style coffee experience. While SonRise Coffee serves espresso drinks, the broader 'coffee shop' and 'cafe' keywords already capture this audience. These terms are lower priority because the search volume is significantly lower and the audience overlap with the selected keywords is high.",
      keywords: [
        { keyword: "coffee bar near me",     monthly_searches: 6600 },
        { keyword: "coffee bar",             monthly_searches: 4400 },
        { keyword: "espresso bar near me",   monthly_searches: 1600 },
        { keyword: "espresso bar",           monthly_searches: 1300 },
        { keyword: "cozy cafe near me",      monthly_searches: 1600 },
      ]
    },
    {
      reason: "Meeting Room / Coworking: Commercial Focus, Not SonRise's Core Audience",
      description: "Meeting room rental (1,300 searches) and coworking space (18,100 searches) target a professional, commercial audience seeking dedicated workspace. While SonRise Coffee can host business meetings, its primary event audience is personal celebrations, community gatherings, and faith-based events. The 'event venue' keyword already captures business meeting inquiries, and targeting coworking keywords would attract an audience that expects dedicated workspace amenities beyond what a cafe offers.",
      keywords: [
        { keyword: "coworking space near me",       monthly_searches: 18100 },
        { keyword: "meeting room rental near me",   monthly_searches:  1300 },
        { keyword: "conference room rental near me",monthly_searches:  1300 },
        { keyword: "meeting room for rent",         monthly_searches:  1000 },
        { keyword: "meeting space for rent",        monthly_searches:  1000 },
      ]
    },
    {
      reason: "Shower / Graduation / Anniversary Venues: Lower Volume, Covered by Broader Terms",
      description: "Bridal shower venues (5,400 searches), baby shower venues (6,600 searches), graduation party places (590 searches), and anniversary party venues (170 searches) are all event types that SonRise Coffee can host. However, these searches are captured by the broader 'event venue' and 'birthday party venue' keywords already in the plan. Targeting these individually would require additional keyword-city pages without meaningfully expanding the audience.",
      keywords: [
        { keyword: "baby shower venues near me",    monthly_searches: 6600 },
        { keyword: "bridal shower venues near me",  monthly_searches: 5400 },
        { keyword: "bridal shower places near me",  monthly_searches: 1900 },
        { keyword: "graduation party places near me", monthly_searches: 590 },
        { keyword: "engagement party venue near me",  monthly_searches: 140 },
      ]
    }
  ],
  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Level F",
      combinations: 90,
      price: 3000,
      additional_combinations: 30,
      headline: "Add Bridal Shower Venues and Expand into 6 New Markets",
      description: "Level F adds 30 keyword-city combinations, opening two major strategic opportunities. First, it introduces 'bridal shower venue' as a sixth keyword, capturing the 5,400 monthly searches for 'bridal shower venues near me' and 6,600 for 'baby shower venues near me' that are currently outside the plan. Second, it adds 6 new communities in the Iowa City and Washington County areas, extending SonRise Coffee's geographic footprint into additional high-value markets.",
      keywords: [
        { keyword: "bridal shower venue",     monthly_searches: 5400 },
        { keyword: "Fairfield, IA",           monthly_searches: null, new_market: true },
        { keyword: "Mount Pleasant, IA",      monthly_searches: null, new_market: true },
        { keyword: "Williamsburg, IA",        monthly_searches: null, new_market: true },
        { keyword: "Oxford, IA",              monthly_searches: null, new_market: true },
        { keyword: "Ainsworth, IA",           monthly_searches: null, new_market: true },
        { keyword: "Brighton, IA",            monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level G",
      combinations: 120,
      price: 4000,
      additional_combinations: 60,
      headline: "Full Regional Dominance Across Southeast Iowa",
      description: "Level G delivers 120 total combinations, enabling SonRise Coffee to achieve dominant visibility across the entire southeast Iowa region. This tier introduces 'baby shower venue' as a seventh keyword, adds 'cafe with event space' as a unique combined-service keyword, and extends coverage to the full roster of communities within a 45-minute drive of Riverside. This plan positions SonRise Coffee as the premier destination for coffee, ice cream, and events in the region.",
      keywords: [
        { keyword: "baby shower venue",       monthly_searches: 6600 },
        { keyword: "cafe with event space",   monthly_searches: null },
        { keyword: "Ottumwa, IA",             monthly_searches: null, new_market: true },
        { keyword: "Burlington, IA",          monthly_searches: null, new_market: true },
        { keyword: "Keokuk, IA",              monthly_searches: null, new_market: true },
        { keyword: "Muscatine, IA",           monthly_searches: null, new_market: true },
      ]
    }
  ]
};

// ============================================================
// HELPER UTILITIES
// ============================================================
function fmt(n) {
  if (n == null) return "N/A";
  return n.toLocaleString();
}

function el(id) {
  return document.getElementById(id);
}

// ============================================================
// POPULATE OVERVIEW STATS
// ============================================================
function populateOverview() {
  if (el('stat-combinations')) el('stat-combinations').textContent = STRATEGY.total_combinations;
  if (el('stat-markets'))      el('stat-markets').textContent      = STRATEGY.matrix.length;
  if (el('stat-keywords'))     el('stat-keywords').textContent     = STRATEGY.selected_keywords.length;
  if (el('stat-researched'))   el('stat-researched').textContent   = STRATEGY.total_keywords_researched;
  if (el('plan-level'))        el('plan-level').textContent        = STRATEGY.plan_level;
  if (el('plan-price'))        el('plan-price').textContent        = '$' + STRATEGY.plan_price.toLocaleString() + '/mo';
  if (el('client-name'))       el('client-name').textContent       = STRATEGY.client_name;
  if (el('client-industry'))   el('client-industry').textContent   = STRATEGY.industry;
  if (el('client-hq'))         el('client-hq').textContent         = STRATEGY.hq_city + ', ' + STRATEGY.state;
  if (el('client-service-area')) el('client-service-area').textContent = STRATEGY.service_area;
}

// ============================================================
// POPULATE KEYWORD TABLE
// ============================================================
function buildKeywordTable() {
  const tbody = el('kw-table-body');
  if (!tbody) return;

  let html = '';
  let lastFamily = null;

  STRATEGY.keyword_table.forEach(row => {
    const isNewFamily = row.family !== lastFamily;
    lastFamily = row.family;

    let rowClass = '';
    let kwCell = '';

    if (row.variant_type === 'base') {
      rowClass = 'row-base row-selected';
      kwCell = `<strong>${row.keyword}</strong>`;
    } else if (row.variant_type === 'near_me') {
      if (row.status === 'near_me') {
        rowClass = 'row-near-me';
        kwCell = `<span class="kw-variant-indent">&#8627;</span> ${row.keyword}`;
      } else {
        rowClass = 'row-variant';
        kwCell = `<span class="kw-variant-indent">&#8627;</span> ${row.keyword}`;
      }
    } else {
      rowClass = 'row-variant';
      kwCell = `<span class="kw-variant-indent">&#8627;</span> ${row.keyword}`;
    }

    let statusBadge = '';
    if (row.status === 'selected') {
      statusBadge = '<span class="status-badge status-selected">Selected</span>';
    } else if (row.status === 'near_me') {
      statusBadge = '<span class="status-badge status-near-me">Near Me Variant</span>';
    } else {
      statusBadge = '<span class="status-badge status-not-used">Not Used</span>';
    }

    const vol = row.monthly_searches != null ? row.monthly_searches.toLocaleString() : '--';
    const tierCell = row.tier ? `<span class="tier-pill-sm ${row.tier.toLowerCase().replace(' ', '')}">${row.tier}</span>` : '<span class="tier-pill-sm" style="opacity:0.3">--</span>';

    html += `<tr class="${rowClass}">
      <td class="kw-cell">${kwCell}</td>
      <td class="vol-cell">${vol}</td>
      <td class="tier-cell">${tierCell}</td>
      <td class="status-cell">${statusBadge}</td>
    </tr>`;
  });

  tbody.innerHTML = html;
}

// ============================================================
// POPULATE KEYWORD TIER CARDS (flat-tier-block pattern)
// ============================================================
function buildKeywordTiers() {
  const grid = el('kw-tier-grid');
  if (!grid) return;

  let html = '';
  STRATEGY.keyword_tiers.forEach(tier => {
    const tierNum = tier.tier_label.replace('Tier ', '');
    const tierClass = `kw-tier-${tierNum}`;

    const kwList = tier.keywords.map(k =>
      `<div class="flat-kw-row">
        <span class="flat-kw-name">${k.keyword}</span>
        <span class="flat-kw-vol">${k.monthly_searches.toLocaleString()}/mo</span>
      </div>`
    ).join('');

    html += `<div class="flat-tier-block ${tierClass}">
      <div class="flat-tier-heading">
        <span class="flat-tier-label">${tier.tier_label}</span>
        <span class="flat-tier-name">${tier.tier_name}</span>
      </div>
      <p class="flat-tier-desc">${tier.description}</p>
      <div class="flat-kw-list">${kwList}</div>
    </div>`;
  });

  grid.innerHTML = html;
}

// ============================================================
// POPULATE STRATEGY MATRIX (city-matrix-card pattern)
// ============================================================
function buildMatrix() {
  const el = document.getElementById('matrix-city-grid');
  if (!el) return;

  let cards = '';
  STRATEGY.matrix.forEach(m => {
    const hqStar = m.is_hq ? '<span class="hq-star">★</span>' : '';
    const cityLabel = m.city + ', ' + m.state;
    const tierCls = 't' + m.tier.replace('Tier ', '');

    const kwItems = m.keywords.map(k =>
      `<div class="city-kw-item"><span class="city-kw-check">&#10003;</span>${k}</div>`
    ).join('');

    cards += `<div class="city-matrix-card">
      <div class="city-matrix-header">
        ${hqStar}<span class="city-matrix-name">${cityLabel}</span>
        <span class="city-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> Pop. ${fmt(m.population)}</span>
      </div>
      <div class="city-kw-list">${kwItems}</div>
      <div class="city-matrix-footer">${m.keywords.length} combination${m.keywords.length !== 1 ? 's' : ''}</div>
    </div>`;
  });

  el.innerHTML = cards;

  const gt = document.getElementById('matrix-grand-total');
  if (gt) {
    const total = STRATEGY.matrix.reduce((sum, m) => sum + m.keywords.length, 0);
    gt.textContent = total + ' total keyword-city combinations';
  }
}

// ============================================================
// POPULATE NOT USED SECTION
// ============================================================
function buildNotUsed() {
  const grid = el('not-used-grid');
  if (!grid) return;

  const cards = STRATEGY.not_used_groups.map(group => {
    const kwRows = group.keywords.map(k =>
      `<div class="nu-kw-row">
        <span class="nu-kw-name">${k.keyword}</span>
        <span class="nu-kw-vol">${k.monthly_searches.toLocaleString()}/mo</span>
      </div>`
    ).join('');

    return `<div class="not-used-card">
      <div class="not-used-reason">${group.reason}</div>
      <p class="not-used-desc">${group.description}</p>
      <div class="nu-kw-list">${kwRows}</div>
    </div>`;
  }).join('');

  grid.innerHTML = cards;

  if (STRATEGY.not_used_groups.length === 4) {
    grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
  }
}

// ============================================================
// POPULATE OPPORTUNITIES SECTION
// ============================================================
function buildOpportunities() {
  const grid = document.getElementById('opportunities-grid');
  if (!grid) return;

  const cards = STRATEGY.additional_opportunities.map((opp, i) => {
    const kwItems = opp.keywords.map(k => {
      if (k.new_market) {
        return `<div class="opp-kw-row"><span class="opp-kw-dot new-market"></span><span class="opp-kw-name">${k.keyword}</span><span class="opp-kw-tag">New Market</span></div>`;
      }
      const vol = k.monthly_searches ? k.monthly_searches.toLocaleString() + '/mo' : 'New Keyword';
      return `<div class="opp-kw-row"><span class="opp-kw-dot"></span><span class="opp-kw-name">${k.keyword}</span><span class="opp-kw-vol">${vol}</span></div>`;
    }).join('');

    return `<div class="opp-card opp-card-${i + 1}">
      <div class="opp-plan">${opp.plan}</div>
      <div class="opp-price">$${opp.price.toLocaleString()}<span class="opp-price-unit">/mo</span></div>
      <div class="opp-combos">+${opp.additional_combinations} additional combinations from current plan</div>
      <div class="opp-total-combos">${opp.combinations} total combinations</div>
      <h3 class="opp-headline">${opp.headline}</h3>
      <p class="opp-desc">${opp.description}</p>
      <div class="opp-kw-list">${kwItems}</div>
    </div>`;
  }).join('');

  grid.innerHTML = cards;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  populateOverview();
  buildKeywordTable();
  buildKeywordTiers();
  buildMatrix();
  buildNotUsed();
  buildOpportunities();

  // Populate client name in hero
  document.querySelectorAll('.js-client-name').forEach(el => {
    el.textContent = STRATEGY.client_name;
  });
  document.querySelectorAll('.js-plan-level').forEach(el => {
    el.textContent = STRATEGY.plan_level;
  });
  document.querySelectorAll('.js-plan-price').forEach(el => {
    el.textContent = '$' + STRATEGY.plan_price.toLocaleString() + '/mo';
  });
});
