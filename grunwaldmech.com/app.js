// ============================================================
// SEO Strategy Website - app.js
// Grunwald Mechanical Contractors & Engineers
// Level F: 9 keywords x 10 cities = 90 combinations
// ============================================================

const STRATEGY = {
  client_name: "Grunwald Mechanical Contractors & Engineers",
  industry: "Plumbing & HVAC",
  hq_city: "Omaha",
  state: "NE",
  service_area: "9-County Region: Eastern Nebraska & Western Iowa",
  plan_level: "Level F",
  plan_price: 2250,
  total_combinations: 90,
  total_keywords_researched: 284,
  selected_keywords: [
    "hvac contractor",
    "furnace repair",
    "ac repair",
    "boiler repair",
    "plumbing contractor",
    "water heater repair",
    "drain cleaning",
    "sewer repair",
    "commercial plumbing contractor"
  ],
  num_selected_keywords: 9,
  num_target_markets: 10,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    // Water Heater Repair family
    { keyword: "water heater repair",              monthly_searches: 201000, tier: "Tier 1", status: "selected",  family: "water heater",     variant_type: "base" },
    { keyword: "water heater repair near me",      monthly_searches: 165000, tier: "Tier 1", status: "near_me",   family: "water heater",     variant_type: "near_me" },
    { keyword: "water heater replacement near me", monthly_searches: 135000, tier: "Tier 1", status: "near_me",   family: "water heater",     variant_type: "near_me" },
    { keyword: "hot water heater repair",          monthly_searches:  74000, tier: "Tier 1", status: "not_used",  family: "water heater",     variant_type: "variant" },
    { keyword: "hot water heater repair near me",  monthly_searches:  60500, tier: "Tier 1", status: "near_me",   family: "water heater",     variant_type: "near_me" },
    { keyword: "water heater installation",        monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "water heater",     variant_type: "variant" },
    { keyword: "water heater replacement",         monthly_searches:  33100, tier: "Tier 1", status: "not_used",  family: "water heater",     variant_type: "variant" },
    // Furnace Repair family
    { keyword: "furnace repair",                   monthly_searches: 165000, tier: "Tier 1", status: "selected",  family: "furnace repair",   variant_type: "base" },
    { keyword: "furnace repair near me",           monthly_searches: 135000, tier: "Tier 1", status: "near_me",   family: "furnace repair",   variant_type: "near_me" },
    { keyword: "furnace replacement near me",      monthly_searches:  60500, tier: "Tier 1", status: "near_me",   family: "furnace repair",   variant_type: "near_me" },
    { keyword: "furnace replacement",              monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "furnace repair",   variant_type: "variant" },
    { keyword: "furnace installation",             monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "furnace repair",   variant_type: "variant" },
    { keyword: "furnace repair cost",              monthly_searches:   2400, tier: "Tier 1", status: "not_used",  family: "furnace repair",   variant_type: "variant" },
    // AC Repair family
    { keyword: "ac repair",                        monthly_searches: 135000, tier: "Tier 1", status: "selected",  family: "ac repair",        variant_type: "base" },
    { keyword: "ac repair near me",                monthly_searches: 165000, tier: "Tier 1", status: "near_me",   family: "ac repair",        variant_type: "near_me" },
    { keyword: "air conditioning repair",          monthly_searches: 110000, tier: "Tier 1", status: "not_used",  family: "ac repair",        variant_type: "variant" },
    { keyword: "air conditioning repair near me",  monthly_searches:  74000, tier: "Tier 1", status: "near_me",   family: "ac repair",        variant_type: "near_me" },
    { keyword: "ac installation",                  monthly_searches:  74000, tier: "Tier 1", status: "not_used",  family: "ac repair",        variant_type: "variant" },
    { keyword: "ac replacement",                   monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "ac repair",        variant_type: "variant" },
    // HVAC Contractor family
    { keyword: "hvac contractor",                  monthly_searches:  18100, tier: "Tier 1", status: "selected",  family: "hvac contractor",  variant_type: "base" },
    { keyword: "hvac repair",                      monthly_searches: 110000, tier: "Tier 1", status: "not_used",  family: "hvac contractor",  variant_type: "variant" },
    { keyword: "hvac repair near me",              monthly_searches: 110000, tier: "Tier 1", status: "near_me",   family: "hvac contractor",  variant_type: "near_me" },
    { keyword: "hvac service",                     monthly_searches: 201000, tier: "Tier 1", status: "not_used",  family: "hvac contractor",  variant_type: "variant" },
    { keyword: "hvac near me",                     monthly_searches:  90500, tier: "Tier 1", status: "near_me",   family: "hvac contractor",  variant_type: "near_me" },
    { keyword: "hvac company",                     monthly_searches:  60500, tier: "Tier 1", status: "not_used",  family: "hvac contractor",  variant_type: "variant" },
    { keyword: "hvac company near me",             monthly_searches:  49500, tier: "Tier 1", status: "near_me",   family: "hvac contractor",  variant_type: "near_me" },
    { keyword: "hvac companies near me",           monthly_searches:  60500, tier: "Tier 1", status: "near_me",   family: "hvac contractor",  variant_type: "near_me" },
    { keyword: "hvac installation",                monthly_searches: 110000, tier: "Tier 1", status: "not_used",  family: "hvac contractor",  variant_type: "variant" },
    { keyword: "hvac maintenance",                 monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "hvac contractor",  variant_type: "variant" },
    { keyword: "hvac technician",                  monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "hvac contractor",  variant_type: "variant" },
    // Plumbing Contractor family
    { keyword: "plumbing contractor",              monthly_searches:  27100, tier: "Tier 1", status: "selected",  family: "plumbing",         variant_type: "base" },
    { keyword: "plumbing company",                 monthly_searches: 110000, tier: "Tier 1", status: "not_used",  family: "plumbing",         variant_type: "variant" },
    { keyword: "plumbing repair",                  monthly_searches:  90500, tier: "Tier 1", status: "not_used",  family: "plumbing",         variant_type: "variant" },
    { keyword: "emergency plumbing near me",       monthly_searches: 110000, tier: "Tier 1", status: "near_me",   family: "plumbing",         variant_type: "near_me" },
    { keyword: "emergency plumber",                monthly_searches: 110000, tier: "Tier 1", status: "not_used",  family: "plumbing",         variant_type: "variant" },
    // Boiler Repair family
    { keyword: "boiler repair",                    monthly_searches:  27100, tier: "Tier 2", status: "selected",  family: "boiler",           variant_type: "base" },
    { keyword: "boiler service",                   monthly_searches:   1600, tier: "Tier 2", status: "not_used",  family: "boiler",           variant_type: "variant" },
    { keyword: "boiler replacement",               monthly_searches:   6600, tier: "Tier 2", status: "not_used",  family: "boiler",           variant_type: "variant" },
    { keyword: "boiler installation",              monthly_searches:   5400, tier: "Tier 2", status: "not_used",  family: "boiler",           variant_type: "variant" },
    { keyword: "boiler maintenance",               monthly_searches:   1300, tier: "Tier 2", status: "not_used",  family: "boiler",           variant_type: "variant" },
    { keyword: "boiler repair near me",            monthly_searches:   2900, tier: "Tier 2", status: "near_me",   family: "boiler",           variant_type: "near_me" },
    { keyword: "commercial boiler repair",         monthly_searches:    880, tier: "Tier 2", status: "not_used",  family: "boiler",           variant_type: "variant" },
    { keyword: "boiler installation near me",      monthly_searches:   2900, tier: "Tier 2", status: "near_me",   family: "boiler",           variant_type: "near_me" },
    // Drain Cleaning family
    { keyword: "drain cleaning",                   monthly_searches:  40500, tier: "Tier 2", status: "selected",  family: "drain cleaning",   variant_type: "base" },
    { keyword: "drain cleaning near me",           monthly_searches:  33100, tier: "Tier 2", status: "near_me",   family: "drain cleaning",   variant_type: "near_me" },
    { keyword: "sewer cleaning",                   monthly_searches:   8100, tier: "Tier 2", status: "not_used",  family: "drain cleaning",   variant_type: "variant" },
    { keyword: "drain unclogging",                 monthly_searches:   2400, tier: "Tier 2", status: "not_used",  family: "drain cleaning",   variant_type: "variant" },
    // Sewer Repair family
    { keyword: "sewer repair",                     monthly_searches:   9900, tier: "Tier 2", status: "selected",  family: "sewer repair",     variant_type: "base" },
    { keyword: "sewer line replacement",           monthly_searches:   8100, tier: "Tier 2", status: "not_used",  family: "sewer repair",     variant_type: "variant" },
    { keyword: "sewer line repair",                monthly_searches:   5400, tier: "Tier 2", status: "not_used",  family: "sewer repair",     variant_type: "variant" },
    // Commercial Plumbing family
    { keyword: "commercial plumbing contractor",   monthly_searches:   2400, tier: "Tier 3", status: "selected",  family: "commercial",       variant_type: "base" },
    { keyword: "commercial plumber",               monthly_searches:   3600, tier: "Tier 3", status: "not_used",  family: "commercial",       variant_type: "variant" },
    { keyword: "commercial hvac contractor",       monthly_searches:   1900, tier: "Tier 3", status: "not_used",  family: "commercial",       variant_type: "variant" },
    { keyword: "commercial hvac repair",           monthly_searches:   1300, tier: "Tier 3", status: "not_used",  family: "commercial",       variant_type: "variant" },
    // Specialty plumbing - reserved
    { keyword: "sump pump installation",           monthly_searches:  12100, tier: "Tier 2", status: "not_used",  family: "sump pump",        variant_type: "base" },
    { keyword: "sump pump repair",                 monthly_searches:   6600, tier: "Tier 2", status: "not_used",  family: "sump pump",        variant_type: "variant" },
    { keyword: "gas line repair",                  monthly_searches:   5400, tier: "Tier 2", status: "not_used",  family: "gas line",         variant_type: "base" },
    { keyword: "gas line installation",            monthly_searches:   4400, tier: "Tier 2", status: "not_used",  family: "gas line",         variant_type: "variant" },
    { keyword: "septic tank repair",               monthly_searches:   8100, tier: "Tier 2", status: "not_used",  family: "septic",           variant_type: "base" },
    { keyword: "septic tank installation",         monthly_searches:   4400, tier: "Tier 2", status: "not_used",  family: "septic",           variant_type: "variant" },
    { keyword: "garbage disposal installation",    monthly_searches:   8100, tier: "Tier 3", status: "not_used",  family: "garbage disposal", variant_type: "base" },
    { keyword: "garbage disposal repair",          monthly_searches:   5400, tier: "Tier 3", status: "not_used",  family: "garbage disposal", variant_type: "variant" },
    { keyword: "heat pump installation",           monthly_searches:   5400, tier: "Tier 1", status: "not_used",  family: "heat pump",        variant_type: "base" },
    { keyword: "heat pump repair",                 monthly_searches:   4400, tier: "Tier 1", status: "not_used",  family: "heat pump",        variant_type: "variant" },
    { keyword: "heating and cooling",              monthly_searches:  90500, tier: "Tier 1", status: "not_used",  family: "heating cooling",  variant_type: "variant" },
    { keyword: "heating contractor",               monthly_searches:   2900, tier: "Tier 1", status: "not_used",  family: "heating cooling",  variant_type: "variant" },
    { keyword: "heating repair",                   monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "heating cooling",  variant_type: "variant" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "HVAC & Plumbing Core Services",
      description: "Broad, high-intent keywords covering the primary HVAC and plumbing services customers search for. These terms have the highest national search volume and represent the most direct path to new customers for Grunwald Mechanical. Four of the nine selected keywords come from this tier: hvac contractor, furnace repair, ac repair, and plumbing contractor.",
      keywords: [
        { keyword: "water heater repair",      monthly_searches: 201000 },
        { keyword: "furnace repair",           monthly_searches: 165000 },
        { keyword: "ac repair",                monthly_searches: 135000 },
        { keyword: "hvac service",             monthly_searches: 201000 },
        { keyword: "hvac repair",              monthly_searches: 110000 },
        { keyword: "air conditioning repair",  monthly_searches: 110000 },
        { keyword: "emergency plumber",        monthly_searches: 110000 },
        { keyword: "plumbing company",         monthly_searches: 110000 },
        { keyword: "hvac contractor",          monthly_searches:  18100 },
        { keyword: "plumbing contractor",      monthly_searches:  27100 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Boiler, Drain & Sewer Services",
      description: "Service-specific keywords for boiler repair, drain cleaning, and sewer repair. These represent distinct service verticals with strong commercial intent and are a direct reflection of the Larry's Boiler Service brand. Three of the nine selected keywords come from this tier: boiler repair, drain cleaning, and sewer repair.",
      keywords: [
        { keyword: "boiler repair",            monthly_searches: 27100 },
        { keyword: "drain cleaning",           monthly_searches: 40500 },
        { keyword: "sewer repair",             monthly_searches:  9900 },
        { keyword: "sump pump installation",   monthly_searches: 12100 },
        { keyword: "sewer line replacement",   monthly_searches:  8100 },
        { keyword: "septic tank repair",       monthly_searches:  8100 },
        { keyword: "gas line repair",          monthly_searches:  5400 },
        { keyword: "boiler replacement",       monthly_searches:  6600 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Commercial Services",
      description: "Keywords targeting Grunwald Mechanical's commercial plumbing and HVAC services. These represent a distinct service vertical with strong B2B commercial intent. One commercial keyword is included in the current plan; additional commercial keywords are reserved for plan expansion.",
      keywords: [
        { keyword: "commercial plumbing contractor", monthly_searches: 2400 },
        { keyword: "commercial plumber",             monthly_searches: 3600 },
        { keyword: "commercial hvac contractor",     monthly_searches: 1900 },
        { keyword: "commercial boiler repair",       monthly_searches:  880 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Specialty Plumbing Services",
      description: "High-intent keywords for specialty plumbing services including garbage disposal, gas lines, and heat pumps. These represent additional revenue opportunities and are reserved for Level G and Level H plan expansion.",
      keywords: [
        { keyword: "garbage disposal installation", monthly_searches: 8100 },
        { keyword: "garbage disposal repair",       monthly_searches: 5400 },
        { keyword: "heat pump installation",        monthly_searches: 5400 },
        { keyword: "gas line installation",         monthly_searches: 4400 },
        { keyword: "heat pump repair",              monthly_searches: 4400 },
      ]
    }
  ],

  // ---- MARKET DATA ----
  market_data: [
    { rank: 1,  city: "Omaha",          state: "NE", county: "Douglas",        pop: 486051, tier: "Tier 1", selected: true,  is_hq: true,  rationale: "Grunwald Mechanical headquarters; dominant regional search hub." },
    { rank: 2,  city: "Lincoln",        state: "NE", county: "Lancaster",       pop: 295000, tier: "Tier 1", selected: true,  is_hq: false, rationale: "Second-largest city in Nebraska; dedicated Lincoln office." },
    { rank: 3,  city: "Bellevue",       state: "NE", county: "Sarpy",           pop:  65000, tier: "Tier 1", selected: true,  is_hq: false, rationale: "Largest Sarpy County city; major suburban market." },
    { rank: 4,  city: "Council Bluffs", state: "IA", county: "Pottawattamie",   pop:  62000, tier: "Tier 1", selected: true,  is_hq: false, rationale: "Largest Iowa market; directly across the Missouri River from Omaha." },
    { rank: 5,  city: "Fremont",        state: "NE", county: "Dodge",           pop:  27000, tier: "Tier 2", selected: true,  is_hq: false, rationale: "County seat of Dodge County; largest Tier 2 market." },
    { rank: 6,  city: "Papillion",      state: "NE", county: "Sarpy",           pop:  26000, tier: "Tier 2", selected: true,  is_hq: false, rationale: "County seat of Sarpy County; rapidly growing suburb." },
    { rank: 7,  city: "La Vista",       state: "NE", county: "Sarpy",           pop:  18000, tier: "Tier 2", selected: true,  is_hq: false, rationale: "Dense suburban community; high residential density." },
    { rank: 8,  city: "Gretna",         state: "NE", county: "Sarpy",           pop:  15000, tier: "Tier 2", selected: true,  is_hq: false, rationale: "One of Nebraska's fastest-growing communities." },
    { rank: 9,  city: "Elkhorn",        state: "NE", county: "Douglas",         pop:  11000, tier: "Tier 2", selected: true,  is_hq: false, rationale: "Affluent western Omaha suburb; high-income homeowners." },
    { rank: 10, city: "Blair",          state: "NE", county: "Washington",      pop:   8000, tier: "Tier 2", selected: true,  is_hq: false, rationale: "County seat of Washington County; ensures northern coverage." },
    { rank: 11, city: "Wahoo",          state: "NE", county: "Saunders",        pop:   4700, tier: "Tier 2", selected: false, is_hq: false, rationale: "County seat of Saunders County. Level G candidate." },
    { rank: 12, city: "Glenwood",       state: "IA", county: "Mills",           pop:   5200, tier: "Tier 2", selected: false, is_hq: false, rationale: "County seat of Mills County. Level G candidate." },
    { rank: 13, city: "Bennington",     state: "NE", county: "Douglas",         pop:   3000, tier: "Tier 3", selected: false, is_hq: false, rationale: "Fast-growing Douglas County suburb. Future expansion." },
    { rank: 14, city: "Carter Lake",    state: "IA", county: "Pottawattamie",   pop:   4000, tier: "Tier 3", selected: false, is_hq: false, rationale: "Suburb of Council Bluffs; largely covered by Council Bluffs targeting." },
    { rank: 15, city: "Missouri Valley",state: "IA", county: "Harrison",        pop:   2700, tier: "Tier 3", selected: false, is_hq: false, rationale: "Harrison County seat. Long-term expansion target." },
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      group_label: "Reserved for Level G Expansion",
      reason: "These high-value keywords represent the most natural next step for plan expansion. Each covers a distinct service line that Grunwald Mechanical actively offers. Adding these 4 keywords at Level G would add 40 additional combinations.",
      keywords: [
        { keyword: "furnace installation",     monthly_searches: 40500 },
        { keyword: "ac installation",          monthly_searches: 74000 },
        { keyword: "sump pump installation",   monthly_searches: 12100 },
        { keyword: "emergency plumber",        monthly_searches: 110000 },
      ]
    },
    {
      group_label: "Specialty Plumbing - Reserved for Level H",
      reason: "These specialty plumbing service keywords are strong candidates for Level H expansion. Each represents a distinct service that Grunwald Mechanical offers and that customers actively search for.",
      keywords: [
        { keyword: "gas line repair",              monthly_searches: 5400 },
        { keyword: "septic tank repair",           monthly_searches: 8100 },
        { keyword: "garbage disposal installation",monthly_searches: 8100 },
        { keyword: "heat pump installation",       monthly_searches: 5400 },
      ]
    },
    {
      group_label: "Commercial Services - Reserved for Level G",
      reason: "These commercial-intent keywords are reserved for a dedicated commercial services expansion. Adding commercial HVAC and plumbing keywords would significantly expand Grunwald Mechanical's B2B visibility.",
      keywords: [
        { keyword: "commercial plumber",          monthly_searches: 3600 },
        { keyword: "commercial hvac contractor",  monthly_searches: 1900 },
        { keyword: "commercial boiler repair",    monthly_searches:  880 },
        { keyword: "commercial hvac repair",      monthly_searches: 1300 },
      ]
    },
    {
      group_label: "Near Me Variants - Covered by City Targeting",
      reason: "Near me variants are excluded from the matrix because appending a city name to each keyword serves the same geographic function. These variants are listed here for reference only.",
      keywords: [
        { keyword: "hvac repair near me",          monthly_searches: 110000 },
        { keyword: "furnace repair near me",       monthly_searches: 135000 },
        { keyword: "ac repair near me",            monthly_searches: 165000 },
        { keyword: "drain cleaning near me",       monthly_searches:  33100 },
        { keyword: "boiler repair near me",        monthly_searches:   2900 },
      ]
    }
  ],

  // ---- OPPORTUNITIES ----
  opportunities: [
    {
      label: "Level G Upgrade",
      combinations: 130,
      description: "Add 4 high-volume keywords (furnace installation, ac installation, sump pump installation, emergency plumber) and 4 new markets (Wahoo NE, Glenwood IA, Bennington NE, Carter Lake IA) for a total of 130 combinations. This upgrade significantly expands HVAC installation coverage and adds all remaining county seats to the strategy.",
      icon: "&#128200;"
    },
    {
      label: "Level H Upgrade",
      combinations: 180,
      description: "Add specialty plumbing keywords (gas line repair, septic tank repair, garbage disposal installation, heat pump installation) and expand into Harrison and Mills county markets. This upgrade ensures comprehensive coverage of every service line on both the Grunwald Mechanical and Larry's Boiler Service websites.",
      icon: "&#128640;"
    },
    {
      label: "Commercial Services Expansion",
      combinations: 50,
      description: "Build a dedicated commercial services keyword track covering commercial plumbing, commercial HVAC, commercial boiler repair, and design-build construction. This expansion targets the B2B segment and positions Grunwald Mechanical as the go-to commercial mechanical contractor in the Omaha-Lincoln corridor.",
      icon: "&#127970;"
    }
  ]
};

// ============================================================
// UTILITY
// ============================================================
function fmt(n) {
  if (n === null || n === undefined) return '';
  return n.toLocaleString();
}

// ============================================================
// BUILD KEYWORD TABLE
// ============================================================
function buildKeywordTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;
  const rows = STRATEGY.keyword_table.map(kw => {
    let statusClass = '';
    let statusLabel = '';
    if (kw.status === 'selected') { statusClass = 'status-selected'; statusLabel = 'Selected'; }
    else if (kw.status === 'near_me') { statusClass = 'status-near-me'; statusLabel = 'Near Me Variant'; }
    else { statusClass = 'status-not-used'; statusLabel = 'Not Used'; }
    const tierCls = kw.tier === 'Tier 1' ? 't1' : kw.tier === 'Tier 2' ? 't2' : kw.tier === 'Tier 3' ? 't3' : 't4';
    const rowCls = kw.status === 'selected' ? 'row-selected' : '';
    return `<tr class="${rowCls}">
      <td>${kw.keyword}</td>
      <td class="num-col">${fmt(kw.monthly_searches)}</td>
      <td><span class="tier-pill ${tierCls}">${kw.tier.toUpperCase()}</span></td>
      <td><span class="status-badge ${statusClass}">${statusLabel}</span></td>
    </tr>`;
  }).join('');
  tbody.innerHTML = rows;
}

// ============================================================
// BUILD KEYWORD TIER CARDS
// ============================================================
function buildKeywordTierCards() {
  const grid = document.getElementById('kw-tier-grid');
  if (!grid) return;
  const cards = STRATEGY.keyword_tiers.map(tier => {
    const tierNum = tier.tier_label.replace('Tier ', '');
    const tierCls = 't' + tierNum;
    const kwItems = tier.keywords.map(kw =>
      `<div class="tier-kw-item"><span class="tier-kw-name">${kw.keyword}</span><span class="tier-kw-vol">${fmt(kw.monthly_searches)}/mo</span></div>`
    ).join('');
    return `<div class="kw-tier-card">
      <div class="kw-tier-card-header">
        <span class="tier-pill ${tierCls}">${tier.tier_label.toUpperCase()}</span>
        <h4 class="kw-tier-name">${tier.tier_name}</h4>
      </div>
      <p class="kw-tier-desc">${tier.description}</p>
      <div class="tier-kw-list">${kwItems}</div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
  // Set grid columns dynamically
  grid.style.gridTemplateColumns = 'repeat(' + STRATEGY.keyword_tiers.length + ', 1fr)';
}

// ============================================================
// BUILD MATRIX
// ============================================================
function buildMatrix() {
  const grid = document.getElementById('matrix-city-grid');
  const totalEl = document.getElementById('matrix-grand-total');
  if (!grid) return;

  const markets = [
    { city: 'Omaha',          state: 'NE', tier: 'Tier 1', pop: 486051, is_hq: true  },
    { city: 'Lincoln',        state: 'NE', tier: 'Tier 1', pop: 295000, is_hq: false },
    { city: 'Bellevue',       state: 'NE', tier: 'Tier 1', pop:  65000, is_hq: false },
    { city: 'Council Bluffs', state: 'IA', tier: 'Tier 1', pop:  62000, is_hq: false },
    { city: 'Fremont',        state: 'NE', tier: 'Tier 2', pop:  27000, is_hq: false },
    { city: 'Papillion',      state: 'NE', tier: 'Tier 2', pop:  26000, is_hq: false },
    { city: 'La Vista',       state: 'NE', tier: 'Tier 2', pop:  18000, is_hq: false },
    { city: 'Gretna',         state: 'NE', tier: 'Tier 2', pop:  15000, is_hq: false },
    { city: 'Elkhorn',        state: 'NE', tier: 'Tier 2', pop:  11000, is_hq: false },
    { city: 'Blair',          state: 'NE', tier: 'Tier 2', pop:   8000, is_hq: false },
  ];

  const keywords = STRATEGY.selected_keywords;

  const cards = markets.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : 't2';
    const hqTag = m.is_hq ? ' <span class="hq-tag">HQ</span>' : '';
    const cityLabel = `${m.city}, ${m.state}${hqTag}`;
    const kwItems = keywords.map(kw =>
      `<div class="matrix-kw-item"><span class="matrix-check">&#10003;</span><span class="matrix-kw-text">${kw}</span></div>`
    ).join('');
    return `<div class="matrix-city-card">
      <div class="matrix-city-header">
        <span class="matrix-city-name">${cityLabel}</span>
        <span class="matrix-city-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp; Pop. ${fmt(m.pop)}</span>
      </div>
      <div class="matrix-kw-list">${kwItems}</div>
      <div class="matrix-city-total">${keywords.length} combinations</div>
    </div>`;
  }).join('');

  grid.innerHTML = cards;
  if (totalEl) {
    totalEl.innerHTML = `<div class="matrix-grand-total-box">Grand Total: <strong>${keywords.length * markets.length} Keyword-City Combinations</strong></div>`;
  }
}

// ============================================================
// BUILD MOBILE MARKET LIST
// ============================================================
function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = STRATEGY.market_data.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const cityLabel = m.is_hq ? `${m.city}, ${m.state} (HQ)` : `${m.city}, ${m.state}`;
    const selIcon = m.selected ? '<span class="mob-sel check">&#10003;</span>' : '<span class="mob-sel dash">&#8212;</span>';
    const rowCls = m.selected ? 'mob-mkt-row selected' : 'mob-mkt-row';
    return `<div class="${rowCls}">
      <span class="mob-rank">${m.rank}</span>
      <span class="mob-city">${m.selected ? '<strong>' : ''}${cityLabel}${m.selected ? '</strong>' : ''}</span>
      <span class="mob-pop">${fmt(m.pop)}</span>
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
// BUILD NOT USED
// ============================================================
function buildNotUsed() {
  const grid = document.getElementById('not-used-grid');
  if (!grid) return;
  const cards = STRATEGY.not_used_groups.map(group => {
    const kwItems = group.keywords.map(kw =>
      `<div class="not-used-kw"><span class="not-used-kw-name">${kw.keyword}</span><span class="not-used-kw-vol">${fmt(kw.monthly_searches)}/mo</span></div>`
    ).join('');
    return `<div class="not-used-card">
      <h4 class="not-used-group-label">${group.group_label}</h4>
      <p class="not-used-reason">${group.reason}</p>
      <div class="not-used-kw-list">${kwItems}</div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// BUILD OPPORTUNITIES
// ============================================================
function buildOpportunities() {
  const grid = document.getElementById('opportunities-grid');
  if (!grid) return;
  const cards = STRATEGY.opportunities.map(opp => {
    return `<div class="opportunity-card">
      <div class="opp-icon">${opp.icon}</div>
      <h4 class="opp-label">${opp.label}</h4>
      <div class="opp-combos">${opp.combinations} Combinations</div>
      <p class="opp-desc">${opp.description}</p>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildMobileMarketList();
  buildNotUsed();
  buildOpportunities();
});
