// ============================================================
// SEO Strategy Website — App.js
// Grunwald Mechanical Contractors & Engineers | Plan Level F | 90 Combinations
// Loads strategy data and populates all dynamic sections
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================
const STRATEGY = {
  client_name: "Grunwald Mechanical Contractors & Engineers",
  industry: "Plumbing & HVAC",
  hq_city: "Omaha",
  state: "NE",
  service_area: "Omaha, Lincoln, Bellevue, Council Bluffs, Fremont, Papillion, La Vista, Gretna, Elkhorn, Blair, and surrounding areas",
  plan_level: "Level F",
  plan_price: 2250,
  total_combinations: 90,
  total_keywords_researched: 284,
  selected_keywords: [
    "hvac contractor",
    "furnace repair",
    "ac repair",
    "plumbing contractor",
    "water heater repair",
    "boiler repair",
    "drain cleaning",
    "sewer repair",
    "commercial plumbing contractor"
  ],
  // ---- KEYWORD TABLE ----
  keyword_table: [
    // Water Heater Repair family
    { keyword: "water heater repair",              monthly_searches: 201000, tier: "Tier 1", status: "selected",  family: "water heater repair",  variant_type: "base"    },
    { keyword: "water heater repair near me",      monthly_searches: 165000, tier: "Tier 1", status: "near_me",   family: "water heater repair",  variant_type: "near_me", near_me_note: "Treated as equivalent to 'water heater repair [city]' in the final matrix" },
    { keyword: "water heater replacement near me", monthly_searches: 135000, tier: "Tier 1", status: "near_me",   family: "water heater repair",  variant_type: "near_me", near_me_note: "Treated as equivalent to 'water heater replacement [city]' in the final matrix" },
    { keyword: "hot water heater repair",          monthly_searches:  74000, tier: "Tier 1", status: "not_used",  family: "water heater repair",  variant_type: "variant" },
    { keyword: "hot water heater repair near me",  monthly_searches:  60500, tier: "Tier 1", status: "near_me",   family: "water heater repair",  variant_type: "near_me" },
    { keyword: "water heater installation",        monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "water heater repair",  variant_type: "variant" },
    { keyword: "water heater replacement",         monthly_searches:  33100, tier: "Tier 1", status: "not_used",  family: "water heater repair",  variant_type: "variant" },
    // Furnace Repair family
    { keyword: "furnace repair",                   monthly_searches: 165000, tier: "Tier 1", status: "selected",  family: "furnace repair",       variant_type: "base"    },
    { keyword: "furnace repair near me",           monthly_searches: 135000, tier: "Tier 1", status: "near_me",   family: "furnace repair",       variant_type: "near_me", near_me_note: "Treated as equivalent to 'furnace repair [city]' in the final matrix" },
    { keyword: "furnace replacement near me",      monthly_searches:  60500, tier: "Tier 1", status: "near_me",   family: "furnace repair",       variant_type: "near_me" },
    { keyword: "furnace replacement",              monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "furnace repair",       variant_type: "variant" },
    { keyword: "furnace installation",             monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "furnace repair",       variant_type: "variant" },
    { keyword: "furnace repair cost",              monthly_searches:   2400, tier: "Tier 1", status: "not_used",  family: "furnace repair",       variant_type: "variant" },
    // AC Repair family
    { keyword: "ac repair",                        monthly_searches: 135000, tier: "Tier 1", status: "selected",  family: "ac repair",            variant_type: "base"    },
    { keyword: "ac repair near me",                monthly_searches: 165000, tier: "Tier 1", status: "near_me",   family: "ac repair",            variant_type: "near_me", near_me_note: "Treated as equivalent to 'ac repair [city]' in the final matrix" },
    { keyword: "air conditioning repair",          monthly_searches: 110000, tier: "Tier 1", status: "not_used",  family: "ac repair",            variant_type: "variant" },
    { keyword: "air conditioning repair near me",  monthly_searches:  74000, tier: "Tier 1", status: "near_me",   family: "ac repair",            variant_type: "near_me" },
    { keyword: "ac installation",                  monthly_searches:  74000, tier: "Tier 1", status: "not_used",  family: "ac repair",            variant_type: "variant" },
    { keyword: "ac replacement",                   monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "ac repair",            variant_type: "variant" },
    // HVAC Contractor family
    { keyword: "hvac contractor",                  monthly_searches:  18100, tier: "Tier 1", status: "selected",  family: "hvac contractor",      variant_type: "base"    },
    { keyword: "hvac service",                     monthly_searches: 201000, tier: "Tier 1", status: "not_used",  family: "hvac contractor",      variant_type: "variant" },
    { keyword: "hvac repair",                      monthly_searches: 110000, tier: "Tier 1", status: "not_used",  family: "hvac contractor",      variant_type: "variant" },
    { keyword: "hvac repair near me",              monthly_searches: 110000, tier: "Tier 1", status: "near_me",   family: "hvac contractor",      variant_type: "near_me" },
    { keyword: "hvac near me",                     monthly_searches:  90500, tier: "Tier 1", status: "near_me",   family: "hvac contractor",      variant_type: "near_me" },
    { keyword: "hvac company",                     monthly_searches:  60500, tier: "Tier 1", status: "not_used",  family: "hvac contractor",      variant_type: "variant" },
    { keyword: "hvac company near me",             monthly_searches:  49500, tier: "Tier 1", status: "near_me",   family: "hvac contractor",      variant_type: "near_me" },
    { keyword: "hvac companies near me",           monthly_searches:  60500, tier: "Tier 1", status: "near_me",   family: "hvac contractor",      variant_type: "near_me" },
    { keyword: "hvac installation",                monthly_searches: 110000, tier: "Tier 1", status: "not_used",  family: "hvac contractor",      variant_type: "variant" },
    { keyword: "hvac maintenance",                 monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "hvac contractor",      variant_type: "variant" },
    { keyword: "hvac technician",                  monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "hvac contractor",      variant_type: "variant" },
    // Plumbing Contractor family
    { keyword: "plumbing contractor",              monthly_searches:  27100, tier: "Tier 1", status: "selected",  family: "plumbing contractor",  variant_type: "base"    },
    { keyword: "plumbing company",                 monthly_searches: 110000, tier: "Tier 1", status: "not_used",  family: "plumbing contractor",  variant_type: "variant" },
    { keyword: "plumbing repair",                  monthly_searches:  90500, tier: "Tier 1", status: "not_used",  family: "plumbing contractor",  variant_type: "variant" },
    { keyword: "emergency plumbing near me",       monthly_searches: 110000, tier: "Tier 1", status: "near_me",   family: "plumbing contractor",  variant_type: "near_me" },
    { keyword: "emergency plumber",                monthly_searches: 110000, tier: "Tier 1", status: "not_used",  family: "plumbing contractor",  variant_type: "variant" },
    // Boiler Repair family
    { keyword: "boiler repair",                    monthly_searches:  27100, tier: "Tier 2", status: "selected",  family: "boiler repair",        variant_type: "base"    },
    { keyword: "boiler repair near me",            monthly_searches:   2900, tier: "Tier 2", status: "near_me",   family: "boiler repair",        variant_type: "near_me", near_me_note: "Treated as equivalent to 'boiler repair [city]' in the final matrix" },
    { keyword: "boiler service",                   monthly_searches:   1600, tier: "Tier 2", status: "not_used",  family: "boiler repair",        variant_type: "variant" },
    { keyword: "boiler replacement",               monthly_searches:   6600, tier: "Tier 2", status: "not_used",  family: "boiler repair",        variant_type: "variant" },
    { keyword: "boiler installation",              monthly_searches:   5400, tier: "Tier 2", status: "not_used",  family: "boiler repair",        variant_type: "variant" },
    { keyword: "boiler maintenance",               monthly_searches:   1300, tier: "Tier 2", status: "not_used",  family: "boiler repair",        variant_type: "variant" },
    { keyword: "commercial boiler repair",         monthly_searches:    880, tier: "Tier 2", status: "not_used",  family: "boiler repair",        variant_type: "variant" },
    { keyword: "boiler installation near me",      monthly_searches:   2900, tier: "Tier 2", status: "near_me",   family: "boiler repair",        variant_type: "near_me" },
    // Drain Cleaning family
    { keyword: "drain cleaning",                   monthly_searches:  40500, tier: "Tier 2", status: "selected",  family: "drain cleaning",       variant_type: "base"    },
    { keyword: "drain cleaning near me",           monthly_searches:  33100, tier: "Tier 2", status: "near_me",   family: "drain cleaning",       variant_type: "near_me", near_me_note: "Treated as equivalent to 'drain cleaning [city]' in the final matrix" },
    { keyword: "sewer cleaning",                   monthly_searches:   8100, tier: "Tier 2", status: "not_used",  family: "drain cleaning",       variant_type: "variant" },
    { keyword: "drain unclogging",                 monthly_searches:   2400, tier: "Tier 2", status: "not_used",  family: "drain cleaning",       variant_type: "variant" },
    // Sewer Repair family
    { keyword: "sewer repair",                     monthly_searches:   9900, tier: "Tier 2", status: "selected",  family: "sewer repair",         variant_type: "base"    },
    { keyword: "sewer line replacement",           monthly_searches:   8100, tier: "Tier 2", status: "not_used",  family: "sewer repair",         variant_type: "variant" },
    { keyword: "sewer line repair",                monthly_searches:   5400, tier: "Tier 2", status: "not_used",  family: "sewer repair",         variant_type: "variant" },
    // Commercial Plumbing family
    { keyword: "commercial plumbing contractor",   monthly_searches:   2400, tier: "Tier 3", status: "selected",  family: "commercial plumbing",  variant_type: "base"    },
    { keyword: "commercial plumber",               monthly_searches:   3600, tier: "Tier 3", status: "not_used",  family: "commercial plumbing",  variant_type: "variant" },
    { keyword: "commercial hvac contractor",       monthly_searches:   1900, tier: "Tier 3", status: "not_used",  family: "commercial plumbing",  variant_type: "variant" },
    { keyword: "commercial hvac repair",           monthly_searches:   1300, tier: "Tier 3", status: "not_used",  family: "commercial plumbing",  variant_type: "variant" },
    // Specialty Plumbing - reserved
    { keyword: "sump pump installation",           monthly_searches:  12100, tier: "Tier 2", status: "not_used",  family: "sump pump",            variant_type: "base"    },
    { keyword: "sump pump repair",                 monthly_searches:   6600, tier: "Tier 2", status: "not_used",  family: "sump pump",            variant_type: "variant" },
    { keyword: "gas line repair",                  monthly_searches:   5400, tier: "Tier 2", status: "not_used",  family: "gas line",             variant_type: "base"    },
    { keyword: "gas line installation",            monthly_searches:   4400, tier: "Tier 2", status: "not_used",  family: "gas line",             variant_type: "variant" },
    { keyword: "septic tank repair",               monthly_searches:   8100, tier: "Tier 2", status: "not_used",  family: "septic",               variant_type: "base"    },
    { keyword: "septic tank installation",         monthly_searches:   4400, tier: "Tier 2", status: "not_used",  family: "septic",               variant_type: "variant" },
    { keyword: "garbage disposal installation",    monthly_searches:   8100, tier: "Tier 3", status: "not_used",  family: "garbage disposal",     variant_type: "base"    },
    { keyword: "garbage disposal repair",          monthly_searches:   5400, tier: "Tier 3", status: "not_used",  family: "garbage disposal",     variant_type: "variant" },
    { keyword: "heat pump installation",           monthly_searches:   5400, tier: "Tier 1", status: "not_used",  family: "heat pump",            variant_type: "base"    },
    { keyword: "heat pump repair",                 monthly_searches:   4400, tier: "Tier 1", status: "not_used",  family: "heat pump",            variant_type: "variant" },
    { keyword: "heating and cooling",              monthly_searches:  90500, tier: "Tier 1", status: "not_used",  family: "heating cooling",      variant_type: "variant" },
    { keyword: "heating contractor",               monthly_searches:   2900, tier: "Tier 1", status: "not_used",  family: "heating cooling",      variant_type: "variant" },
    { keyword: "heating repair",                   monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "heating cooling",      variant_type: "variant" },
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
        { keyword: "ac repair",               monthly_searches: 135000 },
        { keyword: "hvac service",            monthly_searches: 201000 },
        { keyword: "hvac repair",             monthly_searches: 110000 },
        { keyword: "air conditioning repair", monthly_searches: 110000 },
        { keyword: "emergency plumber",       monthly_searches: 110000 },
        { keyword: "plumbing company",        monthly_searches: 110000 },
        { keyword: "hvac contractor",         monthly_searches:  18100 },
        { keyword: "plumbing contractor",     monthly_searches:  27100 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Boiler, Drain & Sewer Services",
      description: "Service-specific keywords for boiler repair, drain cleaning, and sewer repair. These represent distinct service verticals with strong commercial intent and are a direct reflection of the Larry's Boiler Service brand. Three of the nine selected keywords come from this tier: boiler repair, drain cleaning, and sewer repair.",
      keywords: [
        { keyword: "boiler repair",          monthly_searches: 27100 },
        { keyword: "drain cleaning",         monthly_searches: 40500 },
        { keyword: "sewer repair",           monthly_searches:  9900 },
        { keyword: "sump pump installation", monthly_searches: 12100 },
        { keyword: "sewer line replacement", monthly_searches:  8100 },
        { keyword: "septic tank repair",     monthly_searches:  8100 },
        { keyword: "gas line repair",        monthly_searches:  5400 },
        { keyword: "boiler replacement",     monthly_searches:  6600 },
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
  // ---- MATRIX ----
  matrix: [
    { city: "Omaha",          state: "NE", tier: "Tier 1", population: 486051, is_hq: true,  keywords: ["hvac contractor","furnace repair","ac repair","plumbing contractor","water heater repair","boiler repair","drain cleaning","sewer repair","commercial plumbing contractor"] },
    { city: "Lincoln",        state: "NE", tier: "Tier 1", population: 295000, is_hq: false, keywords: ["hvac contractor","furnace repair","ac repair","plumbing contractor","water heater repair","boiler repair","drain cleaning","sewer repair","commercial plumbing contractor"] },
    { city: "Bellevue",       state: "NE", tier: "Tier 1", population:  65000, is_hq: false, keywords: ["hvac contractor","furnace repair","ac repair","plumbing contractor","water heater repair","boiler repair","drain cleaning","sewer repair","commercial plumbing contractor"] },
    { city: "Council Bluffs", state: "IA", tier: "Tier 1", population:  62000, is_hq: false, keywords: ["hvac contractor","furnace repair","ac repair","plumbing contractor","water heater repair","boiler repair","drain cleaning","sewer repair","commercial plumbing contractor"] },
    { city: "Fremont",        state: "NE", tier: "Tier 2", population:  27000, is_hq: false, keywords: ["hvac contractor","furnace repair","ac repair","plumbing contractor","water heater repair","boiler repair","drain cleaning","sewer repair","commercial plumbing contractor"] },
    { city: "Papillion",      state: "NE", tier: "Tier 2", population:  26000, is_hq: false, keywords: ["hvac contractor","furnace repair","ac repair","plumbing contractor","water heater repair","boiler repair","drain cleaning","sewer repair","commercial plumbing contractor"] },
    { city: "La Vista",       state: "NE", tier: "Tier 2", population:  18000, is_hq: false, keywords: ["hvac contractor","furnace repair","ac repair","plumbing contractor","water heater repair","boiler repair","drain cleaning","sewer repair","commercial plumbing contractor"] },
    { city: "Gretna",         state: "NE", tier: "Tier 2", population:  15000, is_hq: false, keywords: ["hvac contractor","furnace repair","ac repair","plumbing contractor","water heater repair","boiler repair","drain cleaning","sewer repair","commercial plumbing contractor"] },
    { city: "Elkhorn",        state: "NE", tier: "Tier 2", population:  11000, is_hq: false, keywords: ["hvac contractor","furnace repair","ac repair","plumbing contractor","water heater repair","boiler repair","drain cleaning","sewer repair","commercial plumbing contractor"] },
    { city: "Blair",          state: "NE", tier: "Tier 2", population:   8000, is_hq: false, keywords: ["hvac contractor","furnace repair","ac repair","plumbing contractor","water heater repair","boiler repair","drain cleaning","sewer repair","commercial plumbing contractor"] },
  ],
  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Reserved for Level G Expansion",
      description: "These high-value keywords represent the most natural next step for plan expansion. Each covers a distinct service line that Grunwald Mechanical actively offers. Adding these 4 keywords at Level G would add 40 additional combinations.",
      keywords: [
        { keyword: "furnace installation",     monthly_searches: 40500 },
        { keyword: "ac installation",          monthly_searches: 74000 },
        { keyword: "sump pump installation",   monthly_searches: 12100 },
        { keyword: "emergency plumber",        monthly_searches: 110000 },
      ]
    },
    {
      reason: "Specialty Plumbing - Reserved for Level H",
      description: "These specialty plumbing service keywords are strong candidates for Level H expansion. Each represents a distinct service that Grunwald Mechanical offers and that customers actively search for.",
      keywords: [
        { keyword: "gas line repair",               monthly_searches: 5400 },
        { keyword: "septic tank repair",            monthly_searches: 8100 },
        { keyword: "garbage disposal installation", monthly_searches: 8100 },
        { keyword: "heat pump installation",        monthly_searches: 5400 },
      ]
    },
    {
      reason: "Commercial Services - Reserved for Level G",
      description: "These commercial-intent keywords are reserved for a dedicated commercial services expansion. Adding commercial HVAC and plumbing keywords would significantly expand Grunwald Mechanical's B2B visibility.",
      keywords: [
        { keyword: "commercial plumber",         monthly_searches: 3600 },
        { keyword: "commercial hvac contractor", monthly_searches: 1900 },
        { keyword: "commercial boiler repair",   monthly_searches:  880 },
        { keyword: "commercial hvac repair",     monthly_searches: 1300 },
      ]
    },
    {
      reason: "Near Me Variants - Covered by City Targeting",
      description: "Near me variants are excluded from the matrix because appending a city name to each keyword serves the same geographic function. These variants are listed here for reference only.",
      keywords: [
        { keyword: "hvac repair near me",      monthly_searches: 110000 },
        { keyword: "furnace repair near me",   monthly_searches: 135000 },
        { keyword: "ac repair near me",        monthly_searches: 165000 },
        { keyword: "drain cleaning near me",   monthly_searches:  33100 },
        { keyword: "boiler repair near me",    monthly_searches:   2900 },
      ]
    }
  ],
  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Level G",
      price: 4000,
      combinations: 120,
      additional_combinations: 30,
      headline: "Add HVAC Installation Keywords + Remaining County Seats",
      description: "Level G adds 30 keyword-city combinations by introducing 3 high-volume HVAC installation keywords (furnace installation, ac installation, emergency plumber) across all 10 current markets. This upgrade significantly expands HVAC coverage to capture homeowners actively searching for installation services, not just repairs, and adds Wahoo NE and Glenwood IA as dedicated county-seat targets.",
      keywords: [
        { keyword: "furnace installation",   monthly_searches: 40500 },
        { keyword: "ac installation",        monthly_searches: 74000 },
        { keyword: "emergency plumber",      monthly_searches: 110000 },
        { keyword: "Wahoo, NE",              new_market: true },
        { keyword: "Glenwood, IA",           new_market: true },
      ]
    },
    {
      plan: "Level H",
      price: 5000,
      combinations: 150,
      additional_combinations: 60,
      headline: "Add Specialty Plumbing Keywords + Iowa County Expansion",
      description: "Level H adds 30 more keyword-city combinations by introducing 3 specialty plumbing keywords (gas line repair, septic tank repair, heat pump installation) across all 12 Level G markets, and expanding into Missouri Valley IA and Glenwood IA to complete coverage of Harrison and Mills counties. This upgrade ensures comprehensive coverage of every service line on both the Grunwald Mechanical and Larry's Boiler Service websites.",
      keywords: [
        { keyword: "gas line repair",               monthly_searches: 5400 },
        { keyword: "septic tank repair",            monthly_searches: 8100 },
        { keyword: "garbage disposal installation", monthly_searches: 8100 },
        { keyword: "heat pump installation",        monthly_searches: 5400 },
        { keyword: "Missouri Valley, IA",           new_market: true },
        { keyword: "Glenwood, IA",                  new_market: true },
      ]
    },
    {
      plan: "Commercial Track",
      price: null,
      combinations: 50,
      additional_combinations: 50,
      headline: "Build a Dedicated Commercial Services Keyword Track",
      description: "Build a dedicated commercial services keyword track covering commercial plumbing, commercial HVAC, commercial boiler repair, and design-build construction. This expansion targets the B2B segment and positions Grunwald Mechanical as the go-to commercial mechanical contractor in the Omaha-Lincoln corridor.",
      keywords: [
        { keyword: "commercial plumber",         monthly_searches: 3600 },
        { keyword: "commercial hvac contractor", monthly_searches: 1900 },
        { keyword: "commercial boiler repair",   monthly_searches:  880 },
        { keyword: "commercial hvac repair",     monthly_searches: 1300 },
      ]
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
function tierPill(tier) {
  if (!tier) return '';
  const cls = tier === 'Tier 1' ? 't1' : tier === 'Tier 2' ? 't2' : tier === 'Tier 3' ? 't3' : 't4';
  return `<span class="tier-pill ${cls}">${tier.toUpperCase()}</span>`;
}
function statusBadge(status, note) {
  if (status === 'selected') return `<span class="status-badge status-selected">Selected</span>`;
  if (status === 'near_me')  return `<span class="status-badge status-near-me" title="${note || ''}">Near Me Variant</span>`;
  return `<span class="status-badge status-not-used">Not Used</span>`;
}

// ============================================================
// POPULATE KEYWORD TABLE (family-grouped with variant indentation)
// ============================================================
function buildKeywordTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;
  const variantLabel = { base: '', variant: 'Synonym', near_me: 'Near Me' };
  // Group by family, preserving order
  const families = [];
  const seen = {};
  STRATEGY.keyword_table.forEach(kw => {
    if (!seen[kw.family]) { seen[kw.family] = true; families.push(kw.family); }
  });
  let html = '';
  families.forEach(fam => {
    const group = STRATEGY.keyword_table.filter(k => k.family === fam);
    group.forEach(kw => {
      const isBase   = kw.variant_type === 'base';
      const isNearMe = kw.variant_type === 'near_me';
      const rowClass = isBase
        ? (kw.status === 'selected' ? 'row-base row-selected' : 'row-base')
        : (isNearMe ? 'row-variant row-near-me' : 'row-variant');
      const kwCell = isBase
        ? `<td>${kw.keyword}</td>`
        : `<td class="kw-variant-cell"><span class="kw-variant-indent">&#8627;</span>${kw.keyword} <span class="kw-variant-badge">${variantLabel[kw.variant_type] || 'Variant'}</span></td>`;
      const note = kw.near_me_note || '';
      html += `<tr class="${rowClass}">
        ${kwCell}
        <td class="num-col">${fmt(kw.monthly_searches)}</td>
        <td>${tierPill(kw.tier)}</td>
        <td>${statusBadge(kw.status, note)}</td>
      </tr>`;
    });
  });
  tbody.innerHTML = html;
}

// ============================================================
// POPULATE KEYWORD TIER CARDS (flat-tier-block pattern)
// ============================================================
function buildKeywordTierCards() {
  const grid = document.getElementById('kw-tier-grid');
  if (!grid) return;
  const tierColors = ['kw-tier-1', 'kw-tier-2', 'kw-tier-3', 'kw-tier-4', 'kw-tier-5'];
  const blocks = STRATEGY.keyword_tiers.map((tier, i) => {
    const kwRows = tier.keywords.map(kw =>
      `<tr>
        <td class="flat-kw-name">${kw.keyword}</td>
        <td class="flat-kw-vol">${fmt(kw.monthly_searches)}</td>
      </tr>`
    ).join('');
    const colorCls = tierColors[i] || 'kw-tier-1';
    const tierPillCls = colorCls.replace('kw-tier-', 't');
    return `<div class="flat-tier-block ${colorCls}">
      <div class="flat-tier-heading">
        <span class="tier-pill ${tierPillCls}">${tier.tier_label}</span>
        <span class="flat-tier-name">${tier.tier_name}</span>
        <span class="flat-tier-count">${tier.keywords.length} keywords researched</span>
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
// POPULATE STRATEGY MATRIX (city-matrix-card pattern)
// ============================================================
function buildMatrix() {
  const el = document.getElementById('matrix-city-grid');
  if (!el) return;
  let cards = '';
  let grandTotal = 0;
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
    return `<div class="opp-card ${highlight}">
      <div class="opp-plan-label">${opp.plan}</div>
      ${opp.price ? `<div class="opp-price">$${fmt(opp.price)}<span class="opp-price-label">/mo</span></div>` : ''}
      <div class="opp-combos-large">${opp.combinations} <span class="opp-combos-label">total combinations</span></div>
      <div class="opp-combos">+${opp.additional_combinations} additional combinations from current plan</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <ul class="opp-kw-list"><li class="opp-kw-header"><span>Keyword / Market</span><span>Mo. Searches</span></li>${kwList}</ul>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// POPULATE MOBILE MARKET LIST
// ============================================================
const MARKET_DATA = [
  { rank: 1,  city: 'Omaha',          state: 'NE', pop: 486051, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 2,  city: 'Lincoln',        state: 'NE', pop: 295000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Bellevue',       state: 'NE', pop:  65000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Council Bluffs', state: 'IA', pop:  62000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 5,  city: 'Fremont',        state: 'NE', pop:  27000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 6,  city: 'Papillion',      state: 'NE', pop:  26000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 7,  city: 'La Vista',       state: 'NE', pop:  18000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 8,  city: 'Gretna',         state: 'NE', pop:  15000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 9,  city: 'Elkhorn',        state: 'NE', pop:  11000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 10, city: 'Blair',          state: 'NE', pop:   8000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 11, city: 'Wahoo',          state: 'NE', pop:   4700, tier: 'Tier 2', selected: false, hq: false },
  { rank: 12, city: 'Glenwood',       state: 'IA', pop:   5200, tier: 'Tier 2', selected: false, hq: false },
  { rank: 13, city: 'Bennington',     state: 'NE', pop:   3000, tier: 'Tier 3', selected: false, hq: false },
  { rank: 14, city: 'Carter Lake',    state: 'IA', pop:   4000, tier: 'Tier 3', selected: false, hq: false },
  { rank: 15, city: 'Missouri Valley',state: 'IA', pop:   2700, tier: 'Tier 3', selected: false, hq: false },
];
function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = MARKET_DATA.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.retired
      ? '<span class="mob-retired">Retired</span>'
      : m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.hq ? `${m.city}, ${m.state} <span class="hq-tag">HQ</span>` : `${m.city}, ${m.state}`;
    const popStr = m.pop ? fmt(m.pop) : '';
    const rowCls = m.retired ? 'mob-mkt-row retired' : m.selected ? 'mob-mkt-row selected' : 'mob-mkt-row';
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
// POPULATE STAT CARDS
// ============================================================
function buildStats() {
  const el = id => document.getElementById(id);
  if (el('stat-combos'))    el('stat-combos').textContent    = STRATEGY.total_combinations;
  if (el('stat-markets'))   el('stat-markets').textContent   = STRATEGY.matrix.length;
  if (el('stat-keywords'))  el('stat-keywords').textContent  = STRATEGY.selected_keywords.length;
  if (el('stat-researched'))el('stat-researched').textContent= STRATEGY.total_keywords_researched;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  buildStats();
  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildNotUsed();
  buildOpportunities();
  buildMobileMarketList();
});
