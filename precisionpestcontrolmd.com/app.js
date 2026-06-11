// ============================================================
// PRECISION PEST CONTROL, LLC - SEO STRATEGY DATA
// Plan Level A | 20 Keyword-City Combinations
// HQ: Port Deposit, MD | Cecil, Harford & Baltimore Counties
// ============================================================

const STRATEGY = {
  client_name: "Precision Pest Control, LLC",
  client_url: "https://www.precisionpestcontrolmd.com/",
  hq_city: "Port Deposit",
  hq_state: "MD",
  industry: "Pest Control",
  plan_level: "A",
  plan_price: 599,
  total_combinations: 20,
  num_target_markets: 10,
  num_selected_keywords: 2,
  total_keywords_researched: 68,
  service_area: "Cecil County, Harford County, and Baltimore County, MD",

  // ---- KEYWORD TABLE ----
  // Each family: base keyword + volume + tier + status + variants with volumes
  keyword_families: [
    {
      base: "pest control",
      volume: 49500,
      tier: "Tier 1",
      status: "not_used",
      not_used_reason: "Broadest head term; reserved as Level B first add",
      variants: [
        { kw: "pest control near me",    volume: 40500, type: "Near Me Variant" },
        { kw: "pest control services",   volume: 14800, type: "Plural Variant" }
      ]
    },
    {
      base: "pest control company",
      volume: 9900,
      tier: "Tier 1",
      status: "selected",
      variants: [
        { kw: "pest control companies",          volume: 5400, type: "Plural Variant" },
        { kw: "pest control company near me",    volume: 4400, type: "Near Me Variant" },
        { kw: "local pest control company",      volume: 1600, type: "Variant" }
      ]
    },
    {
      base: "exterminator",
      volume: 8100,
      tier: "Tier 1",
      status: "selected",
      variants: [
        { kw: "exterminators near me",  volume: 9900, type: "Near Me Variant" },
        { kw: "local exterminator",     volume: 2400, type: "Variant" },
        { kw: "exterminators",          volume: 6600, type: "Plural Variant" }
      ]
    },
    {
      base: "pest control service",
      volume: 6600,
      tier: "Tier 1",
      status: "not_used",
      not_used_reason: "Covered by pest control company selection",
      variants: [
        { kw: "pest control service near me", volume: 2900, type: "Near Me Variant" }
      ]
    },
    {
      base: "termite company",
      volume: 4400,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Specialty keyword - reserved for Level C upgrade",
      variants: [
        { kw: "termite companies",          volume: 1900, type: "Plural Variant" },
        { kw: "termite company near me",    volume: 1300, type: "Near Me Variant" }
      ]
    },
    {
      base: "termite control",
      volume: 4400,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Specialty keyword - reserved for Level C upgrade",
      variants: [
        { kw: "termite control near me",  volume: 1600, type: "Near Me Variant" },
        { kw: "termite treatment",        volume: 3600, type: "Variant" },
        { kw: "termite inspection",       volume: 2900, type: "Variant" }
      ]
    },
    {
      base: "bug exterminator",
      volume: 3600,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Covered by exterminator selection",
      variants: [
        { kw: "bug exterminators near me", volume: 1000, type: "Near Me Variant" }
      ]
    },
    {
      base: "pest exterminator",
      volume: 2900,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Covered by exterminator selection",
      variants: [
        { kw: "pest exterminators near me", volume: 880, type: "Near Me Variant" }
      ]
    },
    {
      base: "rodent control",
      volume: 2400,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Specialty keyword - reserved for Level B upgrade",
      variants: [
        { kw: "rodent control near me",  volume: 720, type: "Near Me Variant" },
        { kw: "rodent exterminator",     volume: 1300, type: "Variant" }
      ]
    },
    {
      base: "bed bug exterminator",
      volume: 2400,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Specialty keyword - reserved for Level C upgrade",
      variants: [
        { kw: "bed bug exterminators near me", volume: 1000, type: "Near Me Variant" },
        { kw: "bed bug treatment",             volume: 1900, type: "Variant" }
      ]
    },
    {
      base: "ant exterminator",
      volume: 1900,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "ant exterminators near me", volume: 590, type: "Near Me Variant" }
      ]
    },
    {
      base: "roach exterminator",
      volume: 1900,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "roach exterminators near me",  volume: 590, type: "Near Me Variant" },
        { kw: "cockroach exterminator",       volume: 1300, type: "Variant" }
      ]
    },
    {
      base: "spider exterminator",
      volume: 1600,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "spider exterminators near me", volume: 480, type: "Near Me Variant" }
      ]
    },
    {
      base: "bee exterminator",
      volume: 1600,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "bee exterminators near me", volume: 480, type: "Near Me Variant" },
        { kw: "wasp exterminator",         volume: 1300, type: "Variant" }
      ]
    },
    {
      base: "mouse exterminator",
      volume: 1600,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "mouse exterminators near me", volume: 480, type: "Near Me Variant" },
        { kw: "mice exterminator",           volume: 880, type: "Variant" }
      ]
    },
    {
      base: "flea exterminator",
      volume: 1300,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "flea exterminators near me", volume: 390, type: "Near Me Variant" }
      ]
    },
    {
      base: "rat exterminator",
      volume: 1300,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "rat exterminators near me", volume: 390, type: "Near Me Variant" },
        { kw: "rat control",               volume: 720, type: "Variant" }
      ]
    },
    {
      base: "stink bug exterminator",
      volume: 880,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "stink bug control", volume: 480, type: "Variant" }
      ]
    }
  ],

  // ---- SELECTED KEYWORDS ----
  selected_keywords: [
    "pest control company",
    "exterminator"
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Provider Intent",
      description: "High-volume searches from homeowners actively looking for a pest control provider. These are the most valuable keywords in the strategy -- someone searching 'pest control company' or 'exterminator' is ready to call. 'Pest control' is the broadest head term in this tier and is the first keyword added at Level B.",
      keywords: [
        { keyword: "pest control",         monthly_searches: 49500 },
        { keyword: "pest control company", monthly_searches:  9900 },
        { keyword: "exterminator",         monthly_searches:  8100 },
        { keyword: "pest control service", monthly_searches:  6600 }
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Service and Specialty",
      description: "Mid-volume searches targeting specific services or pest types. These keywords represent strong upgrade opportunities -- termite control and bed bug exterminator are high-ticket services that justify deeper keyword coverage at Level C.",
      keywords: [
        { keyword: "termite company",       monthly_searches: 4400 },
        { keyword: "termite control",       monthly_searches: 4400 },
        { keyword: "bug exterminator",      monthly_searches: 3600 },
        { keyword: "pest exterminator",     monthly_searches: 2900 },
        { keyword: "rodent control",        monthly_searches: 2400 },
        { keyword: "bed bug exterminator",  monthly_searches: 2400 }
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Single-Pest Keywords",
      description: "Lower-volume searches targeting specific pest types. These are ideal for Level D expansion -- each keyword targets a distinct customer with a specific problem, creating a comprehensive coverage map across all pest types PPC treats.",
      keywords: [
        { keyword: "ant exterminator",      monthly_searches: 1900 },
        { keyword: "roach exterminator",    monthly_searches: 1900 },
        { keyword: "spider exterminator",   monthly_searches: 1600 },
        { keyword: "bee exterminator",      monthly_searches: 1600 },
        { keyword: "mouse exterminator",    monthly_searches: 1600 },
        { keyword: "flea exterminator",     monthly_searches: 1300 },
        { keyword: "rat exterminator",      monthly_searches: 1300 },
        { keyword: "stink bug exterminator",monthly_searches:  880 }
      ]
    }
  ],

  // ---- STRATEGY MATRIX ----
  matrix: [
    {
      city: "Edgewood",       state: "MD", county: "Harford County",
      population: 28000, tier: "Tier 1", is_hq: false,
      keywords: ["pest control company", "exterminator"], combinations: 2
    },
    {
      city: "Forest Hill",    state: "MD", county: "Harford County",
      population: 26000, tier: "Tier 1", is_hq: false,
      keywords: ["pest control company", "exterminator"], combinations: 2
    },
    {
      city: "Abingdon",       state: "MD", county: "Harford County",
      population: 25000, tier: "Tier 1", is_hq: false,
      keywords: ["pest control company", "exterminator"], combinations: 2
    },
    {
      city: "Nottingham",     state: "MD", county: "Baltimore County",
      population: 22000, tier: "Tier 1", is_hq: false,
      keywords: ["pest control company", "exterminator"], combinations: 2
    },
    {
      city: "White Marsh",    state: "MD", county: "Baltimore County",
      population: 22000, tier: "Tier 1", is_hq: false,
      keywords: ["pest control company", "exterminator"], combinations: 2
    },
    {
      city: "Aberdeen",       state: "MD", county: "Harford County",
      population: 16000, tier: "Tier 2", is_hq: false,
      keywords: ["pest control company", "exterminator"], combinations: 2
    },
    {
      city: "Elkton",         state: "MD", county: "Cecil County",
      population: 16000, tier: "Tier 2", is_hq: false,
      keywords: ["pest control company", "exterminator"], combinations: 2
    },
    {
      city: "Havre De Grace", state: "MD", county: "Harford County",
      population: 14000, tier: "Tier 2", is_hq: false,
      keywords: ["pest control company", "exterminator"], combinations: 2
    },
    {
      city: "Joppa",          state: "MD", county: "Harford County",
      population: 13000, tier: "Tier 2", is_hq: false,
      keywords: ["pest control company", "exterminator"], combinations: 2
    },
    {
      city: "Port Deposit",   state: "MD", county: "Cecil County",
      population: 1000,  tier: "Tier 1", is_hq: true,
      keywords: ["pest control company", "exterminator"], combinations: 2
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Broadest Head Term: Reserved for Level B",
      description: "At Level A the strategy focuses on the two highest-intent provider keywords. 'Pest control' is the highest-volume term in the industry but, as a head term, it attracts a wider range of searchers and requires more domain authority to rank competitively. It is the first keyword added at Level B, where it will be paired across all 10 markets for 20 additional combinations.",
      keywords: [
        { keyword: "pest control",         monthly_searches: 49500 },
        { keyword: "pest control near me", monthly_searches: 40500 }
      ]
    },
    {
      reason: "Covered by Selected Keywords",
      description: "These terms target the same provider-intent searcher as the two selected keywords and would create redundant pages. They are semantically captured by the 'pest control company' and 'exterminator' selections.",
      keywords: [
        { keyword: "pest control service",  monthly_searches: 6600 },
        { keyword: "pest control services", monthly_searches: 4400 },
        { keyword: "bug exterminator",      monthly_searches: 3600 },
        { keyword: "pest exterminator",     monthly_searches: 2900 }
      ]
    },
    {
      reason: "Specialty Service Keywords: Reserved for Level C",
      description: "High-value specialty keywords targeting termite and bed bug customers -- two of PPC's highest-ticket services. These are the strongest Level C upgrade candidates. Adding termite control and bed bug exterminator across the top 10 markets would create 20 new high-intent pages.",
      keywords: [
        { keyword: "termite company",       monthly_searches: 4400 },
        { keyword: "termite control",       monthly_searches: 4400 },
        { keyword: "termite treatment",     monthly_searches: 3600 },
        { keyword: "termite inspection",    monthly_searches: 2900 },
        { keyword: "bed bug exterminator",  monthly_searches: 2400 },
        { keyword: "bed bug treatment",     monthly_searches: 1900 },
        { keyword: "rodent control",        monthly_searches: 2400 },
        { keyword: "rodent exterminator",   monthly_searches: 1300 }
      ]
    },
    {
      reason: "Single-Pest Keywords: Reserved for Level D",
      description: "Individual pest-type keywords that target customers with a specific active infestation. Lower volume individually but collectively represent comprehensive coverage of PPC's full service menu. Ideal for Level D expansion -- 8 additional keywords across 10 markets = 80 new combinations.",
      keywords: [
        { keyword: "ant exterminator",       monthly_searches: 1900 },
        { keyword: "roach exterminator",     monthly_searches: 1900 },
        { keyword: "cockroach exterminator", monthly_searches: 1300 },
        { keyword: "spider exterminator",    monthly_searches: 1600 },
        { keyword: "bee exterminator",       monthly_searches: 1600 },
        { keyword: "wasp exterminator",      monthly_searches: 1300 },
        { keyword: "mouse exterminator",     monthly_searches: 1600 },
        { keyword: "mice exterminator",      monthly_searches:  880 },
        { keyword: "flea exterminator",      monthly_searches: 1300 },
        { keyword: "rat exterminator",       monthly_searches: 1300 },
        { keyword: "rat control",            monthly_searches:  720 },
        { keyword: "stink bug exterminator", monthly_searches:  880 },
        { keyword: "stink bug control",      monthly_searches:  480 }
      ]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      level: "B",
      price: 999,
      headline: "Add Pest Control + 2 New Markets",
      description: "Add 'pest control' (49,500/mo) across all 10 existing markets, plus expand into Bel Air and Fallston -- bringing the strategy to 32 total combinations. Bel Air is the Harford County seat and one of the most searched communities in the region. Fallston is a high-income residential community with strong homeownership rates, exactly the profile that drives pest control demand.",
      new_combinations: 12,
      total_combinations: 32,
      keywords_added: [
        { keyword: "pest control", monthly_searches: 49500 }
      ],
      markets_added: [
        { keyword: "Bel Air, MD",   monthly_searches: null, new_market: true },
        { keyword: "Fallston, MD",  monthly_searches: null, new_market: true }
      ]
    },
    {
      level: "C",
      price: 1499,
      headline: "Add Specialty Keywords",
      description: "Add termite control and bed bug exterminator across the top 10 markets. These are PPC's two highest-ticket service categories -- a termite treatment or bed bug remediation job is 3x to 5x the revenue of a standard pest control visit. Capturing these searchers with dedicated keyword-city pages is the highest-ROI upgrade available.",
      new_combinations: 20,
      total_combinations: 52,
      keywords_added: [
        { keyword: "termite control",       monthly_searches: 4400 },
        { keyword: "bed bug exterminator",  monthly_searches: 2400 }
      ],
      markets_added: []
    },
    {
      level: "D",
      price: 1999,
      headline: "Full Single-Pest Coverage",
      description: "Add rodent control, ant exterminator, and roach exterminator across all 10 markets. Rodents and ants are the two most common pest complaints in Maryland, and roach infestations are a high-urgency search. These three keywords alone would add 30 new pages targeting customers with active infestations -- the highest-conversion traffic in pest control.",
      new_combinations: 30,
      total_combinations: 82,
      keywords_added: [
        { keyword: "rodent control",     monthly_searches: 2400 },
        { keyword: "ant exterminator",   monthly_searches: 1900 },
        { keyword: "roach exterminator", monthly_searches: 1900 }
      ],
      markets_added: []
    }
  ]
};

// ============================================================
// MARKET DATA (all 22 client-listed cities)
// ============================================================
const MARKET_DATA = [
  { city: "Edgewood",       county: "Harford County",    pop: 28000, tier: "Tier 1", selected: true,  is_hq: false, rationale: "Largest Harford County community in the service area; highest search volume opportunity." },
  { city: "Forest Hill",    county: "Harford County",    pop: 26000, tier: "Tier 1", selected: true,  is_hq: false, rationale: "Strong residential base with high homeownership rates; ideal pest control demand profile." },
  { city: "Abingdon",       county: "Harford County",    pop: 25000, tier: "Tier 1", selected: true,  is_hq: false, rationale: "Major suburban community; consistently high search activity for pest control services." },
  { city: "Nottingham",     county: "Baltimore County",  pop: 22000, tier: "Tier 1", selected: true,  is_hq: false, rationale: "Largest Baltimore County market in the service corridor; strong residential demand." },
  { city: "White Marsh",    county: "Baltimore County",  pop: 22000, tier: "Tier 1", selected: true,  is_hq: false, rationale: "High-traffic suburban hub; strong mix of residential and commercial pest control demand." },
  { city: "Aberdeen",       county: "Harford County",    pop: 16000, tier: "Tier 2", selected: true,  is_hq: false, rationale: "Harford County seat; established community with strong local search activity." },
  { city: "Elkton",         county: "Cecil County",      pop: 16000, tier: "Tier 2", selected: true,  is_hq: false, rationale: "Cecil County seat; largest city in PPC's home county and a high-priority local target." },
  { city: "Havre De Grace", county: "Harford County",    pop: 14000, tier: "Tier 2", selected: true,  is_hq: false, rationale: "Waterfront community with strong residential growth; solid pest control demand." },
  { city: "Joppa",          county: "Harford County",    pop: 13000, tier: "Tier 2", selected: true,  is_hq: false, rationale: "Suburban Harford community with established neighborhoods; good local search opportunity." },
  { city: "Port Deposit",   county: "Cecil County",      pop:  1000, tier: "Tier 1", selected: true,  is_hq: true,  rationale: "Precision Pest Control headquarters; highest local relevance and proximity advantage." },
  { city: "Bel Air",        county: "Harford County",    pop: 11000, tier: "Tier 2", selected: false, is_hq: false, rationale: "Harford County seat; one of the most-searched communities in the region. Level B first add." },
  { city: "Fallston",       county: "Harford County",    pop:  9000, tier: "Tier 2", selected: false, is_hq: false, rationale: "High-income residential community with strong homeownership; ideal pest control profile." },
  { city: "Perryville",     county: "Cecil County",      pop:  9000, tier: "Tier 2", selected: false, is_hq: false, rationale: "Growing Cecil County community; recommended for expansion as domain authority increases." },
  { city: "Kingsville",     county: "Baltimore County",  pop:  5000, tier: "Tier 3", selected: false, is_hq: false, rationale: "Smaller Baltimore County community; long-term target as SEO footprint grows." },
  { city: "Glen Arm",       county: "Baltimore County",  pop:  3500, tier: "Tier 3", selected: false, is_hq: false, rationale: "Rural Baltimore County community; lower priority given population size." },
  { city: "Jarrettsville",  county: "Harford County",    pop:  3500, tier: "Tier 3", selected: false, is_hq: false, rationale: "Small Harford County community; partially covered by Aberdeen and Bel Air targeting." },
  { city: "White Hall",     county: "Baltimore County",  pop:  3000, tier: "Tier 3", selected: false, is_hq: false, rationale: "Small rural community; long-term expansion target." },
  { city: "Perryman",       county: "Harford County",    pop:  2500, tier: "Tier 3", selected: false, is_hq: false, rationale: "Small Harford community; largely covered by Aberdeen and Edgewood targeting." },
  { city: "Conowingo",      county: "Cecil County",      pop:  1200, tier: "Tier 3", selected: false, is_hq: false, rationale: "Small Cecil County community; covered by Port Deposit and Elkton targeting." },
  { city: "Whiteford",      county: "Harford County",    pop:  1200, tier: "Tier 3", selected: false, is_hq: false, rationale: "Small rural community; long-term expansion as domain authority grows." },
  { city: "Colora",         county: "Cecil County",      pop:   700, tier: "Tier 3", selected: false, is_hq: false, rationale: "Very small community; lower priority given population size." },
  { city: "Darlington",     county: "Harford County",    pop:   500, tier: "Tier 3", selected: false, is_hq: false, rationale: "Very small community; long-term expansion target." }
];

// ============================================================
// RENDERING FUNCTIONS
// ============================================================

function fmt(n) {
  if (n === null || n === undefined) return "Regional Market";
  return n.toLocaleString();
}

function buildStats() {
  const el = (id) => document.getElementById(id);
  if (el("stat-combinations")) el("stat-combinations").textContent = STRATEGY.total_combinations;
  if (el("stat-markets"))      el("stat-markets").textContent      = STRATEGY.num_target_markets;
  if (el("stat-keywords"))     el("stat-keywords").textContent     = STRATEGY.num_selected_keywords;
  if (el("stat-researched"))   el("stat-researched").textContent   = STRATEGY.total_keywords_researched;
}

// ============================================================
// KEYWORD TABLE — base rows bold + selected highlight,
// variant rows show actual monthly search volumes
// ============================================================
function buildKeywordTable() {
  const tbody = document.getElementById("kw-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  STRATEGY.keyword_families.forEach(fam => {
    const isSelected = fam.status === "selected";
    const statusClass = isSelected ? "status-selected" : "status-not-used";
    const statusLabel = isSelected ? "Selected" : "Not Used";
    const tierCls = fam.tier === "Tier 1" ? "t1" : fam.tier === "Tier 2" ? "t2" : "t3";

    // Base row
    const baseRow = document.createElement("tr");
    baseRow.className = isSelected ? "row-base row-selected" : "row-base";
    baseRow.innerHTML = `
      <td class="kw-name">${fam.base}</td>
      <td class="kw-volume num-col">${fmt(fam.volume)}</td>
      <td><span class="tier-pill ${tierCls}">${fam.tier.toUpperCase()}</span></td>
      <td><span class="status-badge ${statusClass}">${statusLabel}</span></td>
    `;
    tbody.appendChild(baseRow);

    // Variant rows — show actual volumes
    fam.variants.forEach(v => {
      const isNearMe = v.type === "Near Me Variant";
      const varRow = document.createElement("tr");
      varRow.className = isNearMe ? "row-variant row-near-me" : "row-variant";
      varRow.innerHTML = `
        <td class="kw-variant-cell"><span class="kw-variant-indent">&#8627;</span>${v.kw} <span class="kw-variant-badge">${v.type}</span></td>
        <td class="kw-volume num-col">${fmt(v.volume)}</td>
        <td></td>
        <td></td>
      `;
      tbody.appendChild(varRow);
    });
  });
}

// ============================================================
// KEYWORD TIER CARDS — Durham-style flat blocks with table
// ============================================================
function buildKeywordTierCards() {
  const grid = document.getElementById("kw-tier-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const tierColors = ["kw-tier-1", "kw-tier-2", "kw-tier-3"];

  STRATEGY.keyword_tiers.forEach((tier, i) => {
    const colorCls = tierColors[i] || "kw-tier-1";
    const pillCls  = colorCls.replace("kw-tier-", "t");
    const kwRows = tier.keywords.map(kw =>
      `<tr>
        <td class="flat-kw-name">${kw.keyword}</td>
        <td class="flat-kw-vol">${fmt(kw.monthly_searches)}</td>
      </tr>`
    ).join("");

    const block = document.createElement("div");
    block.className = `flat-tier-block ${colorCls}`;
    block.innerHTML = `
      <div class="flat-tier-heading">
        <span class="tier-pill ${pillCls}">${tier.tier_label.toUpperCase()}</span>
        <span class="flat-tier-name">${tier.tier_name}</span>
        <span class="flat-tier-count">${tier.keywords.length} keyword${tier.keywords.length !== 1 ? "s" : ""} researched</span>
      </div>
      <div class="flat-tier-desc">${tier.description}</div>
      <table class="flat-kw-table">
        <thead><tr><th>Keyword</th><th>Monthly Searches</th></tr></thead>
        <tbody>${kwRows}</tbody>
      </table>
    `;
    grid.appendChild(block);
  });
}

// ============================================================
// STRATEGY MATRIX CARDS
// ============================================================
function buildMatrix() {
  const grid = document.getElementById("matrix-city-grid");
  if (!grid) return;
  grid.innerHTML = "";

  let grandTotal = 0;
  STRATEGY.matrix.forEach(m => {
    const tierCls = m.tier === "Tier 1" ? "t1" : "t2";
    const hqStar  = m.is_hq ? '<span class="city-card-hq">&#9733;</span>' : "";
    const kwItems = m.keywords.map(k =>
      `<div class="city-kw-item"><span class="city-kw-check">&#10003;</span><span class="city-kw-name">${k}</span></div>`
    ).join("");
    grandTotal += m.keywords.length;

    const card = document.createElement("div");
    card.className = "city-matrix-card";
    card.innerHTML = `
      <div class="city-matrix-header">
        ${hqStar}<span class="city-matrix-name">${m.city}, ${m.state}</span>
        <span class="city-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> Pop. ${fmt(m.population)}</span>
      </div>
      <div class="city-kw-list">${kwItems}</div>
      <div class="city-matrix-footer">${m.combinations} combination${m.combinations !== 1 ? "s" : ""}</div>
    `;
    grid.appendChild(card);
  });

  const gt = document.getElementById("matrix-grand-total");
  if (gt) gt.textContent = `Grand Total: ${grandTotal} Combinations`;
}

// ============================================================
// NOT USED CARDS — Durham-style with KEYWORD / MO. SEARCHES table
// ============================================================
function buildNotUsed() {
  const grid = document.getElementById("not-used-grid");
  if (!grid) return;
  grid.innerHTML = "";

  STRATEGY.not_used_groups.forEach(group => {
    const kwRows = group.keywords.map(kw =>
      `<div class="nu-kw-row">
        <span class="nu-kw-name">${kw.keyword}</span>
        <span class="nu-kw-vol">${fmt(kw.monthly_searches)}</span>
      </div>`
    ).join("");

    const card = document.createElement("div");
    card.className = "not-used-card";
    card.innerHTML = `
      <div class="nu-reason">${group.reason}</div>
      <p class="nu-desc">${group.description}</p>
      <div class="nu-kw-table">
        <div class="nu-header"><span>Keyword</span><span>Mo. Searches</span></div>
        ${kwRows}
      </div>
    `;
    grid.appendChild(card);
  });

  // 4 cards: use 2x2 grid
  if (STRATEGY.not_used_groups.length === 4) {
    grid.classList.add("grid-2col");
  } else {
    grid.classList.remove("grid-2col");
  }
}

// ============================================================
// OPPORTUNITIES CARDS — Durham-style with keyword/market table
// ============================================================
function buildOpportunities() {
  const grid = document.getElementById("opportunities-grid");
  if (!grid) return;
  grid.innerHTML = "";

  STRATEGY.additional_opportunities.forEach((opp, i) => {
    // Build keyword rows
    const allItems = [
      ...opp.keywords_added.map(k => ({ keyword: k.keyword, monthly_searches: k.monthly_searches, new_market: false })),
      ...opp.markets_added.map(k => ({ keyword: k.keyword, monthly_searches: k.monthly_searches, new_market: true }))
    ];

    const kwList = allItems.map(item => {
      const volCell = item.new_market
        ? `<span class="opp-vol opp-new-market">New Market</span>`
        : `<span class="opp-vol">${fmt(item.monthly_searches)}</span>`;
      return `<li><span class="opp-kw">${item.keyword}</span>${volCell}</li>`;
    }).join("");

    const highlight = i === 0 ? "opp-card-highlight" : "";
    const card = document.createElement("div");
    card.className = `opp-card ${highlight}`;
    card.innerHTML = `
      <div class="opp-plan-label">Level ${opp.level}</div>
      <div class="opp-price">$${opp.price.toLocaleString()}<span class="opp-price-label">/mo</span></div>
      <div class="opp-combos-large">${opp.total_combinations} <span class="opp-combos-label">total combinations</span></div>
      <div class="opp-combos">+${opp.new_combinations} additional combinations from current plan</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <ul class="opp-kw-list">
        <li class="opp-kw-header"><span>Keyword / Market</span><span>Mo. Searches</span></li>
        ${kwList}
      </ul>
    `;
    grid.appendChild(card);
  });
}

// ============================================================
// MARKET TABLE — Durham-style with Tier + Selection Rationale columns
// ============================================================
function buildMarketTable() {
  const tbody = document.getElementById("market-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  MARKET_DATA.forEach((m, i) => {
    const tierCls = m.tier === "Tier 1" ? "t1" : m.tier === "Tier 2" ? "t2" : "t3";
    const isSelected = m.selected;
    const rowCls = isSelected ? (m.is_hq ? "row-selected row-hq" : "row-selected") : "";
    const nameCell = isSelected
      ? `<strong>${m.city}${m.is_hq ? " &#9733; HQ" : ""}, MD</strong>`
      : `${m.city}, MD`;
    const checkCell = isSelected
      ? `<td class="check">&#10003;</td>`
      : `<td class="dash">&#8212;</td>`;

    const row = document.createElement("tr");
    row.className = rowCls;
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${nameCell}</td>
      <td>${m.county}</td>
      <td class="num-col">${fmt(m.pop)}</td>
      <td><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span></td>
      ${checkCell}
      <td class="rationale-cell">${m.rationale}</td>
    `;
    tbody.appendChild(row);
  });
}

// ============================================================
// MOBILE MARKET LIST
// ============================================================
function buildMobileMarketList() {
  const el = document.getElementById("mobile-market-list");
  if (!el) return;

  const rows = MARKET_DATA.map((m, i) => {
    const tierCls = m.tier === "Tier 1" ? "t1" : m.tier === "Tier 2" ? "t2" : "t3";
    const selIcon = m.selected
      ? '<span class="mob-check">&#10003;</span>'
      : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const rowCls = m.selected ? "mob-mkt-row selected" : "mob-mkt-row";
    return `<div class="${rowCls}">
      <span class="mob-rank">${i + 1}</span>
      <span class="mob-city">${m.selected ? "<strong>" : ""}${cityLabel}${m.selected ? "</strong>" : ""}</span>
      <span class="mob-pop">${fmt(m.pop)}</span>
      <span class="mob-tier"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span></span>
      ${selIcon}
    </div>`;
  }).join("");

  el.innerHTML = `<div class="mob-mkt-header">
    <span class="mob-rank">#</span>
    <span class="mob-city">Market</span>
    <span class="mob-pop">Pop.</span>
    <span class="mob-tier">Tier</span>
    <span class="mob-sel">&#10003;</span>
  </div>${rows}`;
}

// ============================================================
// MOBILE MATRIX
// ============================================================
function buildMobileMatrix() {
  const el = document.getElementById("mobile-matrix");
  if (!el) return;

  let grandTotal = 0;
  const cards = STRATEGY.matrix.map(m => {
    const tierCls = m.tier === "Tier 1" ? "t1" : "t2";
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const kwList = m.keywords.map(k =>
      `<div class="mob-matrix-kw"><span class="mob-matrix-check">&#10003;</span><span>${k}</span></div>`
    ).join("");
    grandTotal += m.keywords.length;
    return `<div class="mob-matrix-card">
      <div class="mob-matrix-city">
        <span class="mob-matrix-city-name">${cityLabel}</span>
        <span class="mob-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp; Pop. ${fmt(m.population)}</span>
      </div>
      <div class="mob-matrix-kws">${kwList}</div>
      <div class="mob-matrix-total">${m.keywords.length} combinations</div>
    </div>`;
  }).join("");

  el.innerHTML = cards + `<div class="mob-matrix-grand-total">Grand Total: <strong>${grandTotal} Combinations</strong></div>`;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  buildStats();
  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildNotUsed();
  buildOpportunities();
  buildMarketTable();
  buildMobileMarketList();
  buildMobileMatrix();
});
