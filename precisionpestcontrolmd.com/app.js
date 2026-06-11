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
  keyword_families: [
    {
      base: "pest control company",
      volume: 9900,
      tier: "Tier 1",
      status: "selected",
      variants: [
        { kw: "pest control companies", type: "Plural Variant" },
        { kw: "pest control company near me", type: "Near Me Variant" },
        { kw: "local pest control company", type: "Variant" }
      ]
    },
    {
      base: "exterminator",
      volume: 8100,
      tier: "Tier 1",
      status: "selected",
      variants: [
        { kw: "exterminators near me", type: "Near Me Variant" },
        { kw: "local exterminator", type: "Variant" },
        { kw: "exterminators", type: "Plural Variant" }
      ]
    },
    {
      base: "pest control service",
      volume: 6600,
      tier: "Tier 1",
      status: "not_used",
      not_used_reason: "Covered by pest control company selection",
      variants: [
        { kw: "pest control services", type: "Plural Variant" },
        { kw: "pest control service near me", type: "Near Me Variant" }
      ]
    },
    {
      base: "termite company",
      volume: 4400,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Specialty keyword - reserved for Level C upgrade",
      variants: [
        { kw: "termite companies", type: "Plural Variant" },
        { kw: "termite company near me", type: "Near Me Variant" }
      ]
    },
    {
      base: "termite control",
      volume: 4400,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Specialty keyword - reserved for Level C upgrade",
      variants: [
        { kw: "termite control near me", type: "Near Me Variant" },
        { kw: "termite treatment", type: "Variant" },
        { kw: "termite inspection", type: "Variant" }
      ]
    },
    {
      base: "bug exterminator",
      volume: 3600,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Covered by exterminator selection",
      variants: [
        { kw: "bug exterminators near me", type: "Near Me Variant" }
      ]
    },
    {
      base: "pest exterminator",
      volume: 2900,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Covered by exterminator selection",
      variants: [
        { kw: "pest exterminators near me", type: "Near Me Variant" }
      ]
    },
    {
      base: "rodent control",
      volume: 2400,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Specialty keyword - reserved for Level B upgrade",
      variants: [
        { kw: "rodent control near me", type: "Near Me Variant" },
        { kw: "rodent exterminator", type: "Variant" }
      ]
    },
    {
      base: "bed bug exterminator",
      volume: 2400,
      tier: "Tier 2",
      status: "not_used",
      not_used_reason: "Specialty keyword - reserved for Level C upgrade",
      variants: [
        { kw: "bed bug exterminators near me", type: "Near Me Variant" },
        { kw: "bed bug treatment", type: "Variant" }
      ]
    },
    {
      base: "ant exterminator",
      volume: 1900,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "ant exterminators near me", type: "Near Me Variant" }
      ]
    },
    {
      base: "roach exterminator",
      volume: 1900,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "roach exterminators near me", type: "Near Me Variant" },
        { kw: "cockroach exterminator", type: "Variant" }
      ]
    },
    {
      base: "spider exterminator",
      volume: 1600,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "spider exterminators near me", type: "Near Me Variant" }
      ]
    },
    {
      base: "bee exterminator",
      volume: 1600,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "bee exterminators near me", type: "Near Me Variant" },
        { kw: "wasp exterminator", type: "Variant" }
      ]
    },
    {
      base: "flea exterminator",
      volume: 1300,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "flea exterminators near me", type: "Near Me Variant" }
      ]
    },
    {
      base: "stink bug exterminator",
      volume: 880,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "stink bug control", type: "Variant" }
      ]
    },
    {
      base: "mouse exterminator",
      volume: 1600,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "mouse exterminators near me", type: "Near Me Variant" },
        { kw: "mice exterminator", type: "Variant" }
      ]
    },
    {
      base: "rat exterminator",
      volume: 1300,
      tier: "Tier 3",
      status: "not_used",
      not_used_reason: "Single-pest keyword - Level D upgrade",
      variants: [
        { kw: "rat exterminators near me", type: "Near Me Variant" },
        { kw: "rat control", type: "Variant" }
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
      name: "Tier 1: Provider Intent",
      description: "High-volume searches from homeowners actively looking for a pest control provider. These are the most valuable keywords in the strategy - someone searching 'pest control company' or 'exterminator' is ready to call.",
      keywords: ["pest control company", "exterminator"]
    },
    {
      name: "Tier 2: Service and Specialty",
      description: "Mid-volume searches targeting specific services or pest types. These keywords represent strong upgrade opportunities - termite control and bed bug exterminator are high-ticket services that justify deeper keyword coverage at Level C.",
      keywords: ["pest control service", "termite company", "termite control", "rodent control", "bed bug exterminator", "bug exterminator", "pest exterminator"]
    },
    {
      name: "Tier 3: Single-Pest Keywords",
      description: "Lower-volume searches targeting specific pest types. These are ideal for Level D expansion - each keyword targets a distinct customer with a specific problem, creating a comprehensive coverage map across all pest types PPC treats.",
      keywords: ["ant exterminator", "roach exterminator", "spider exterminator", "bee exterminator", "flea exterminator", "mouse exterminator", "rat exterminator", "stink bug exterminator"]
    }
  ],

  // ---- STRATEGY MATRIX ----
  matrix: [
    {
      city: "Port Deposit",
      state: "MD",
      county: "Cecil County",
      population: 1000,
      tier: "Tier 1",
      is_hq: true,
      keywords: ["pest control company", "exterminator"],
      combinations: 2
    },
    {
      city: "Edgewood",
      state: "MD",
      county: "Harford County",
      population: 28000,
      tier: "Tier 1",
      is_hq: false,
      keywords: ["pest control company", "exterminator"],
      combinations: 2
    },
    {
      city: "Forest Hill",
      state: "MD",
      county: "Harford County",
      population: 26000,
      tier: "Tier 1",
      is_hq: false,
      keywords: ["pest control company", "exterminator"],
      combinations: 2
    },
    {
      city: "Abingdon",
      state: "MD",
      county: "Harford County",
      population: 25000,
      tier: "Tier 1",
      is_hq: false,
      keywords: ["pest control company", "exterminator"],
      combinations: 2
    },
    {
      city: "Nottingham",
      state: "MD",
      county: "Baltimore County",
      population: 22000,
      tier: "Tier 1",
      is_hq: false,
      keywords: ["pest control company", "exterminator"],
      combinations: 2
    },
    {
      city: "White Marsh",
      state: "MD",
      county: "Baltimore County",
      population: 22000,
      tier: "Tier 1",
      is_hq: false,
      keywords: ["pest control company", "exterminator"],
      combinations: 2
    },
    {
      city: "Aberdeen",
      state: "MD",
      county: "Harford County",
      population: 16000,
      tier: "Tier 2",
      is_hq: false,
      keywords: ["pest control company", "exterminator"],
      combinations: 2
    },
    {
      city: "Elkton",
      state: "MD",
      county: "Cecil County",
      population: 16000,
      tier: "Tier 2",
      is_hq: false,
      keywords: ["pest control company", "exterminator"],
      combinations: 2
    },
    {
      city: "Havre De Grace",
      state: "MD",
      county: "Harford County",
      population: 14000,
      tier: "Tier 2",
      is_hq: false,
      keywords: ["pest control company", "exterminator"],
      combinations: 2
    },
    {
      city: "Joppa",
      state: "MD",
      county: "Harford County",
      population: 13000,
      tier: "Tier 2",
      is_hq: false,
      keywords: ["pest control company", "exterminator"],
      combinations: 2
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      group: "Service Keywords",
      reason: "Covered by the selected 'pest control company' keyword. These terms target the same provider-intent searcher and would create redundant pages. Reserved for Level B if additional keyword depth is needed.",
      keywords: ["pest control service", "pest control services", "bug exterminator", "pest exterminator"]
    },
    {
      group: "Specialty Service Keywords",
      reason: "High-value specialty keywords targeting termite and bed bug customers - two of PPC's highest-ticket services. These are the strongest Level C upgrade candidates. Adding termite control and bed bug exterminator across the top 10 markets would create 20 new high-intent pages.",
      keywords: ["termite company", "termite control", "termite treatment", "termite inspection", "bed bug exterminator", "bed bug treatment", "rodent control", "rodent exterminator"]
    },
    {
      group: "Single-Pest Keywords",
      reason: "Individual pest-type keywords that target customers with a specific active infestation. Lower volume individually but collectively represent comprehensive coverage of PPC's full service menu. Ideal for Level D expansion - 8 additional keywords across 10 markets = 80 new combinations.",
      keywords: ["ant exterminator", "roach exterminator", "cockroach exterminator", "spider exterminator", "bee exterminator", "wasp exterminator", "flea exterminator", "mouse exterminator", "mice exterminator", "rat exterminator", "rat control", "stink bug exterminator", "stink bug control"]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      level: "B",
      price: 999,
      title: "Level B - Expand to 12 Markets",
      description: "Add Bel Air and Fallston to the existing 10-market footprint, bringing the strategy to 24 total combinations. Bel Air is the Harford County seat and one of the most searched communities in the region. Fallston is a high-income residential community with strong homeownership rates - exactly the profile that drives pest control demand.",
      new_combinations: 4,
      total_combinations: 24,
      keywords_added: [],
      markets_added: ["Bel Air, MD", "Fallston, MD"]
    },
    {
      level: "C",
      price: 1499,
      title: "Level C - Add Specialty Keywords",
      description: "Add termite control and bed bug exterminator across the top 10 markets. These are PPC's two highest-ticket service categories - a termite treatment or bed bug remediation job is 3x to 5x the revenue of a standard pest control visit. Capturing these searchers with dedicated keyword-city pages is the highest-ROI upgrade available.",
      new_combinations: 20,
      total_combinations: 44,
      keywords_added: ["termite control", "bed bug exterminator"],
      markets_added: []
    },
    {
      level: "D",
      price: 1999,
      title: "Level D - Full Single-Pest Coverage",
      description: "Add rodent control, ant exterminator, and roach exterminator across all 10 markets. Rodents and ants are the two most common pest complaints in Maryland, and roach infestations are a high-urgency search. These three keywords alone would add 30 new pages targeting customers with active infestations - the highest-conversion traffic in pest control.",
      new_combinations: 30,
      total_combinations: 74,
      keywords_added: ["rodent control", "ant exterminator", "roach exterminator"],
      markets_added: []
    }
  ]
};

// ============================================================
// MARKET DATA (all 22 client-listed cities)
// ============================================================
const MARKET_DATA = [
  { city: "Edgewood",       county: "Harford County",    pop: 28000, selected: true  },
  { city: "Forest Hill",    county: "Harford County",    pop: 26000, selected: true  },
  { city: "Abingdon",       county: "Harford County",    pop: 25000, selected: true  },
  { city: "Nottingham",     county: "Baltimore County",  pop: 22000, selected: true  },
  { city: "White Marsh",    county: "Baltimore County",  pop: 22000, selected: true  },
  { city: "Aberdeen",       county: "Harford County",    pop: 16000, selected: true  },
  { city: "Elkton",         county: "Cecil County",      pop: 16000, selected: true  },
  { city: "Havre De Grace", county: "Harford County",    pop: 14000, selected: true  },
  { city: "Joppa",          county: "Harford County",    pop: 13000, selected: true  },
  { city: "Port Deposit",   county: "Cecil County",      pop:  1000, selected: true  },
  { city: "Bel Air",        county: "Harford County",    pop: 11000, selected: false },
  { city: "Fallston",       county: "Harford County",    pop:  9000, selected: false },
  { city: "Perryville",     county: "Cecil County",      pop:  9000, selected: false },
  { city: "Kingsville",     county: "Baltimore County",  pop:  5000, selected: false },
  { city: "Glen Arm",       county: "Baltimore County",  pop:  3500, selected: false },
  { city: "Jarrettsville",  county: "Harford County",    pop:  3500, selected: false },
  { city: "White Hall",     county: "Baltimore County",  pop:  3000, selected: false },
  { city: "Perryman",       county: "Harford County",    pop:  2500, selected: false },
  { city: "Conowingo",      county: "Cecil County",      pop:  1200, selected: false },
  { city: "Whiteford",      county: "Harford County",    pop:  1200, selected: false },
  { city: "Colora",         county: "Cecil County",      pop:   700, selected: false },
  { city: "Darlington",     county: "Harford County",    pop:   500, selected: false }
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

function buildKeywordTable() {
  const tbody = document.getElementById("kw-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";
  STRATEGY.keyword_families.forEach(fam => {
    const statusClass = fam.status === "selected" ? "status-selected" : "status-not-used";
    const statusLabel = fam.status === "selected" ? "Selected" : "Not Used";
    const tierClass   = fam.tier === "Tier 1" ? "tier-1" : fam.tier === "Tier 2" ? "tier-2" : "tier-3";

    const baseRow = document.createElement("tr");
    baseRow.className = "kw-base-row";
    baseRow.innerHTML = `
      <td class="kw-name">${fam.base}</td>
      <td class="kw-volume">${fmt(fam.volume)}</td>
      <td><span class="tier-badge ${tierClass}">${fam.tier}</span></td>
      <td><span class="status-badge ${statusClass}">${statusLabel}</span></td>
    `;
    tbody.appendChild(baseRow);

    fam.variants.forEach(v => {
      const varRow = document.createElement("tr");
      varRow.className = "kw-variant-row";
      varRow.innerHTML = `
        <td class="kw-variant-name"><span class="variant-indent">&#8627;</span> ${v.kw} <span class="variant-type">${v.type}</span></td>
        <td class="kw-volume muted">-</td>
        <td></td>
        <td></td>
      `;
      tbody.appendChild(varRow);
    });
  });
}

function buildKeywordTierCards() {
  const container = document.getElementById("kw-tier-grid");
  if (!container) return;
  container.innerHTML = "";
  STRATEGY.keyword_tiers.forEach((tier, i) => {
    const tierClass = i === 0 ? "tier-card-1" : i === 1 ? "tier-card-2" : "tier-card-3";
    const card = document.createElement("div");
    card.className = `tier-card ${tierClass}`;
    card.innerHTML = `
      <div class="tier-card-header">${tier.name}</div>
      <p class="tier-card-desc">${tier.description}</p>
      <ul class="tier-kw-list">
        ${tier.keywords.map(k => `<li>${k}</li>`).join("")}
      </ul>
    `;
    container.appendChild(card);
  });
}

function buildMatrix() {
  const grid = document.getElementById("matrix-city-grid");
  if (!grid) return;
  grid.innerHTML = "";

  STRATEGY.matrix.forEach(m => {
    const card = document.createElement("div");
    card.className = "matrix-city-card";

    const hqBadge = m.is_hq ? '<span class="hq-badge">HQ</span>' : "";
    const tierClass = m.tier === "Tier 1" ? "tier-badge-1" : "tier-badge-2";
    const popDisplay = m.population ? fmt(m.population) : "Regional Market";

    card.innerHTML = `
      <div class="city-card-header">
        <span class="city-name">${m.city.toUpperCase()}, ${m.state} ${hqBadge}</span>
        <span class="city-meta"><span class="tier-pill ${tierClass}">${m.tier}</span> Pop. ${popDisplay}</span>
      </div>
      <div class="city-card-body">
        <ul class="city-kw-list">
          ${m.keywords.map(k => `<li><span class="check-icon">&#10003;</span> ${k}</li>`).join("")}
        </ul>
      </div>
      <div class="city-card-footer">${m.combinations} combination${m.combinations !== 1 ? "s" : ""}</div>
    `;
    grid.appendChild(card);
  });

  const grandTotal = document.getElementById("matrix-grand-total");
  if (grandTotal) {
    grandTotal.textContent = `Grand Total: ${STRATEGY.total_combinations} Combinations`;
  }
}

function buildNotUsed() {
  const container = document.getElementById("not-used-grid");
  if (!container) return;
  container.innerHTML = "";
  STRATEGY.not_used_groups.forEach(group => {
    const block = document.createElement("div");
    block.className = "not-used-block";
    block.innerHTML = `
      <div class="not-used-header">${group.group}</div>
      <p class="not-used-reason">${group.reason}</p>
      <div class="not-used-kw-list">
        ${group.keywords.map(k => `<span class="not-used-kw">${k}</span>`).join("")}
      </div>
    `;
    container.appendChild(block);
  });
}

function buildOpportunities() {
  const container = document.getElementById("opportunities-grid");
  if (!container) return;
  container.innerHTML = "";
  STRATEGY.additional_opportunities.forEach(opp => {
    const card = document.createElement("div");
    card.className = "opp-card";

    const kwList = opp.keywords_added.length
      ? `<div class="opp-detail"><strong>Keywords Added:</strong> ${opp.keywords_added.join(", ")}</div>`
      : "";
    const mktList = opp.markets_added.length
      ? `<div class="opp-detail"><strong>Markets Added:</strong> ${opp.markets_added.join(", ")}</div>`
      : "";

    card.innerHTML = `
      <div class="opp-card-header">
        <span class="opp-level">Level ${opp.level}</span>
        <span class="opp-price">$${opp.price.toLocaleString()}/mo</span>
      </div>
      <div class="opp-title">${opp.title}</div>
      <p class="opp-desc">${opp.description}</p>
      ${kwList}
      ${mktList}
      <div class="opp-totals">
        <span>+${opp.new_combinations} new combinations</span>
        <span>${opp.total_combinations} total combinations</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function buildMarketTable() {
  const tbody = document.getElementById("market-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";
  MARKET_DATA.forEach((m, i) => {
    const row = document.createElement("tr");
    row.className = m.selected ? "market-row-selected" : "market-row-unselected";
    const statusIcon = m.selected
      ? '<span class="market-selected-icon">&#10003;</span>'
      : '<span class="market-unselected-icon">&#8212;</span>';
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${m.city}, MD</td>
      <td>${m.county}</td>
      <td>${fmt(m.pop)}</td>
      <td>${statusIcon}</td>
    `;
    tbody.appendChild(row);
  });
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
});
