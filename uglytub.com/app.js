// ============================================================
// SEO Strategy Website — App.js
// Bath Magic (uglytub.com) | Plan Level E | 60 Combinations
// Loads strategy data and populates all dynamic sections
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================
const STRATEGY = {
  client_name: "Bath Magic",
  industry: "Bathtub & Surface Refinishing",
  hq_city: "Dayton",
  state: "OH",
  service_area: "Dayton, Cincinnati, Columbus, Toledo, Louisville, Detroit, Rockford, Madison, Hamilton, Springfield, and surrounding areas",
  plan_level: "Level E",
  plan_price: 2000,
  total_combinations: 60,
  total_keywords_researched: 145,
  selected_keywords: [
    "bathtub refinishing",
    "bathtub reglazing",
    "tub resurfacing",
    "shower refinishing",
    "tile refinishing",
    "sink refinishing"
  ],
  // ---- KEYWORD TABLE ----
  keyword_table: [
    // Bathtub Refinishing family
    { keyword: "bathtub refinishing",              monthly_searches:  9900, tier: "Tier 1", status: "selected",  family: "bathtub refinishing",  variant_type: "base"    },
    { keyword: "bathtub refinishing near me",      monthly_searches:  6600, tier: "Tier 1", status: "near_me",   family: "bathtub refinishing",  variant_type: "near_me", near_me_note: "Treated as equivalent to 'bathtub refinishing [city]' in the final matrix" },
    { keyword: "tub refinishing",                  monthly_searches:  5400, tier: "Tier 1", status: "not_used",  family: "bathtub refinishing",  variant_type: "variant" },
    { keyword: "tub refinishing near me",          monthly_searches:  2400, tier: "Tier 1", status: "not_used",  family: "bathtub refinishing",  variant_type: "near_me" },
    { keyword: "bathtub refinishing cost",         monthly_searches:  1600, tier: "Tier 1", status: "not_used",  family: "bathtub refinishing",  variant_type: "variant" },
    { keyword: "bathtub refinishing prices",       monthly_searches:   880, tier: "Tier 1", status: "not_used",  family: "bathtub refinishing",  variant_type: "variant" },
    { keyword: "tub refinishing prices",           monthly_searches:   480, tier: "Tier 1", status: "not_used",  family: "bathtub refinishing",  variant_type: "variant" },
    { keyword: "bathtub refinishing services",     monthly_searches:   590, tier: "Tier 1", status: "not_used",  family: "bathtub refinishing",  variant_type: "variant" },
    { keyword: "bathtub refinishing companies",    monthly_searches:   590, tier: "Tier 1", status: "not_used",  family: "bathtub refinishing",  variant_type: "variant" },
    { keyword: "tub refinishing cost",             monthly_searches:   590, tier: "Tier 1", status: "not_used",  family: "bathtub refinishing",  variant_type: "variant" },
    { keyword: "tub refinishing companies",        monthly_searches:   390, tier: "Tier 1", status: "not_used",  family: "bathtub refinishing",  variant_type: "variant" },
    { keyword: "bathtub refinishing contractors",  monthly_searches:   320, tier: "Tier 1", status: "not_used",  family: "bathtub refinishing",  variant_type: "variant" },
    { keyword: "bathtub refinishing company",      monthly_searches:    90, tier: "Tier 1", status: "not_used",  family: "bathtub refinishing",  variant_type: "variant" },
    // Bathtub Reglazing family
    { keyword: "bathtub reglazing",                monthly_searches:  6600, tier: "Tier 2", status: "selected",  family: "bathtub reglazing",    variant_type: "base"    },
    { keyword: "bathtub reglazing near me",        monthly_searches:  5400, tier: "Tier 2", status: "near_me",   family: "bathtub reglazing",    variant_type: "near_me", near_me_note: "Treated as equivalent to 'bathtub reglazing [city]' in the final matrix" },
    { keyword: "tub reglazing",                    monthly_searches:  3600, tier: "Tier 2", status: "not_used",  family: "bathtub reglazing",    variant_type: "variant" },
    { keyword: "tub reglazing near me",            monthly_searches:  2900, tier: "Tier 2", status: "not_used",  family: "bathtub reglazing",    variant_type: "near_me" },
    { keyword: "bathtub reglazing cost",           monthly_searches:  1900, tier: "Tier 2", status: "not_used",  family: "bathtub reglazing",    variant_type: "variant" },
    { keyword: "tub reglazing cost",               monthly_searches:  1300, tier: "Tier 2", status: "not_used",  family: "bathtub reglazing",    variant_type: "variant" },
    { keyword: "bathtub reglazing price",          monthly_searches:   880, tier: "Tier 2", status: "not_used",  family: "bathtub reglazing",    variant_type: "variant" },
    { keyword: "bathtub reglazing services",       monthly_searches:   320, tier: "Tier 2", status: "not_used",  family: "bathtub reglazing",    variant_type: "variant" },
    { keyword: "tub reglazing companies",          monthly_searches:   260, tier: "Tier 2", status: "not_used",  family: "bathtub reglazing",    variant_type: "variant" },
    { keyword: "bathtub reglazing companies",      monthly_searches:   260, tier: "Tier 2", status: "not_used",  family: "bathtub reglazing",    variant_type: "variant" },
    { keyword: "bathtub reglazing contractors",    monthly_searches:   210, tier: "Tier 2", status: "not_used",  family: "bathtub reglazing",    variant_type: "variant" },
    // Tub Resurfacing family
    { keyword: "bathtub resurfacing",              monthly_searches:  2400, tier: "Tier 3", status: "not_used",  family: "tub resurfacing",      variant_type: "variant" },
    { keyword: "tub resurfacing",                  monthly_searches:  1600, tier: "Tier 3", status: "selected",  family: "tub resurfacing",      variant_type: "base"    },
    { keyword: "bathtub resurfacing price",        monthly_searches:  1000, tier: "Tier 3", status: "not_used",  family: "tub resurfacing",      variant_type: "variant" },
    { keyword: "bathtub resurfacing near me",      monthly_searches:   590, tier: "Tier 3", status: "not_used",  family: "tub resurfacing",      variant_type: "near_me" },
    { keyword: "tub resurfacing cost",             monthly_searches:   590, tier: "Tier 3", status: "not_used",  family: "tub resurfacing",      variant_type: "variant" },
    { keyword: "tub resurfacing near me",          monthly_searches:   480, tier: "Tier 3", status: "near_me",   family: "tub resurfacing",      variant_type: "near_me", near_me_note: "Treated as equivalent to 'tub resurfacing [city]' in the final matrix" },
    { keyword: "bathtub resurfacing cost",         monthly_searches:   320, tier: "Tier 3", status: "not_used",  family: "tub resurfacing",      variant_type: "variant" },
    { keyword: "bathtub resurfacing companies",    monthly_searches:   210, tier: "Tier 3", status: "not_used",  family: "tub resurfacing",      variant_type: "variant" },
    // Shower Refinishing family
    { keyword: "shower refinishing",               monthly_searches:  1000, tier: "Tier 4", status: "selected",  family: "shower refinishing",   variant_type: "base"    },
    { keyword: "shower reglazing",                 monthly_searches:   720, tier: "Tier 4", status: "not_used",  family: "shower refinishing",   variant_type: "variant" },
    { keyword: "shower resurfacing",               monthly_searches:   480, tier: "Tier 4", status: "not_used",  family: "shower refinishing",   variant_type: "variant" },
    { keyword: "shower reglazing near me",         monthly_searches:   320, tier: "Tier 4", status: "not_used",  family: "shower refinishing",   variant_type: "near_me" },
    { keyword: "shower refinishing near me",       monthly_searches:   320, tier: "Tier 4", status: "near_me",   family: "shower refinishing",   variant_type: "near_me", near_me_note: "Treated as equivalent to 'shower refinishing [city]' in the final matrix" },
    { keyword: "shower refinishing cost",          monthly_searches:    90, tier: "Tier 4", status: "not_used",  family: "shower refinishing",   variant_type: "variant" },
    { keyword: "shower reglazing cost",            monthly_searches:    90, tier: "Tier 4", status: "not_used",  family: "shower refinishing",   variant_type: "variant" },
    { keyword: "shower refinishing companies",     monthly_searches:    50, tier: "Tier 4", status: "not_used",  family: "shower refinishing",   variant_type: "variant" },
    // Tile Refinishing family
    { keyword: "tile refinishing",                 monthly_searches:  1600, tier: "Tier 5", status: "selected",  family: "tile refinishing",     variant_type: "base"    },
    { keyword: "tile reglazing",                   monthly_searches:  1000, tier: "Tier 5", status: "not_used",  family: "tile refinishing",     variant_type: "variant" },
    { keyword: "tile resurfacing",                 monthly_searches:   480, tier: "Tier 5", status: "not_used",  family: "tile refinishing",     variant_type: "variant" },
    { keyword: "tile reglazing near me",           monthly_searches:   480, tier: "Tier 5", status: "not_used",  family: "tile refinishing",     variant_type: "near_me" },
    { keyword: "tile refinishing near me",         monthly_searches:   260, tier: "Tier 5", status: "near_me",   family: "tile refinishing",     variant_type: "near_me", near_me_note: "Treated as equivalent to 'tile refinishing [city]' in the final matrix" },
    { keyword: "tile reglazing cost",              monthly_searches:   210, tier: "Tier 5", status: "not_used",  family: "tile refinishing",     variant_type: "variant" },
    { keyword: "tile resurfacing near me",         monthly_searches:   140, tier: "Tier 5", status: "not_used",  family: "tile refinishing",     variant_type: "near_me" },
    { keyword: "tile refinishing companies",       monthly_searches:    90, tier: "Tier 5", status: "not_used",  family: "tile refinishing",     variant_type: "variant" },
    { keyword: "tile refinishing cost",            monthly_searches:    70, tier: "Tier 5", status: "not_used",  family: "tile refinishing",     variant_type: "variant" },
    // Sink Refinishing family
    { keyword: "sink refinishing",                 monthly_searches:   590, tier: "Tier 6", status: "selected",  family: "sink refinishing",     variant_type: "base"    },
    { keyword: "sink refinishing near me",         monthly_searches:   590, tier: "Tier 6", status: "near_me",   family: "sink refinishing",     variant_type: "near_me", near_me_note: "Treated as equivalent to 'sink refinishing [city]' in the final matrix" },
    { keyword: "sink reglazing near me",           monthly_searches:   590, tier: "Tier 6", status: "not_used",  family: "sink refinishing",     variant_type: "near_me" },
    { keyword: "sink reglazing",                   monthly_searches:   260, tier: "Tier 6", status: "not_used",  family: "sink refinishing",     variant_type: "variant" },
    { keyword: "sink resurfacing",                 monthly_searches:   260, tier: "Tier 6", status: "not_used",  family: "sink refinishing",     variant_type: "variant" },
    { keyword: "sink resurfacing near me",         monthly_searches:   140, tier: "Tier 6", status: "not_used",  family: "sink refinishing",     variant_type: "near_me" },
    // Bathroom Refinishing family
    { keyword: "bathroom refinishing",             monthly_searches:  1300, tier: null,     status: "not_used",  family: "bathroom refinishing", variant_type: "base"    },
    { keyword: "bathroom refinishing near me",     monthly_searches:   480, tier: null,     status: "not_used",  family: "bathroom refinishing", variant_type: "near_me" },
    { keyword: "bathroom refinishing cost",        monthly_searches:   390, tier: null,     status: "not_used",  family: "bathroom refinishing", variant_type: "variant" },
    { keyword: "bathroom reglazing companies",     monthly_searches:   390, tier: null,     status: "not_used",  family: "bathroom refinishing", variant_type: "variant" },
    { keyword: "bathroom reglazing",               monthly_searches:   390, tier: null,     status: "not_used",  family: "bathroom refinishing", variant_type: "variant" },
    { keyword: "bathroom reglazing near me",       monthly_searches:   260, tier: null,     status: "not_used",  family: "bathroom refinishing", variant_type: "near_me" },
    // Specialty Material family
    { keyword: "cast iron tub refinishing",        monthly_searches:  1000, tier: null,     status: "not_used",  family: "specialty material",   variant_type: "base"    },
    { keyword: "cast iron tub refinishing near me",monthly_searches:   320, tier: null,     status: "not_used",  family: "specialty material",   variant_type: "near_me" },
    { keyword: "fiberglass tub refinishing",       monthly_searches:   720, tier: null,     status: "not_used",  family: "specialty material",   variant_type: "base"    },
    { keyword: "fiberglass tub refinishing near me",monthly_searches:  140, tier: null,     status: "not_used",  family: "specialty material",   variant_type: "near_me" },
    { keyword: "porcelain refinishing",            monthly_searches:   210, tier: null,     status: "not_used",  family: "specialty material",   variant_type: "base"    },
    { keyword: "acrylic tub refinishing",          monthly_searches:    90, tier: null,     status: "not_used",  family: "specialty material",   variant_type: "base"    },
    // Bathtub Restoration family
    { keyword: "bathtub restoration",              monthly_searches:   720, tier: null,     status: "not_used",  family: "bathtub restoration",  variant_type: "base"    },
    { keyword: "bathtub restoration near me",      monthly_searches:   480, tier: null,     status: "not_used",  family: "bathtub restoration",  variant_type: "near_me" },
    { keyword: "bathtub restoration companies",    monthly_searches:   110, tier: null,     status: "not_used",  family: "bathtub restoration",  variant_type: "variant" },
  ],
  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Bathtub Refinishing",
      description: "The highest-volume service keyword in Bath Magic's portfolio, with 9,900 national monthly searches. 'Bathtub refinishing' is the dominant search term used by homeowners ready to hire a professional. Bath Magic's existing website already has city-specific pages for this keyword, making it the anchor of the strategy and the strongest foundation for ranking across all 12 target markets.",
      keywords: [
        { keyword: "bathtub refinishing",         monthly_searches: 9900 },
        { keyword: "bathtub refinishing near me", monthly_searches: 6600 },
        { keyword: "tub refinishing",             monthly_searches: 5400 },
        { keyword: "tub refinishing near me",     monthly_searches: 2400 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Bathtub Reglazing",
      description: "A high-volume synonym for refinishing with 6,600 monthly searches nationally. Many homeowners use 'reglazing' and 'refinishing' interchangeably, but they represent distinct search audiences. Bath Magic's website does not currently have dedicated reglazing pages, making this keyword a significant untapped opportunity that can be captured immediately with new SEO pages.",
      keywords: [
        { keyword: "bathtub reglazing",         monthly_searches: 6600 },
        { keyword: "bathtub reglazing near me", monthly_searches: 5400 },
        { keyword: "tub reglazing",             monthly_searches: 3600 },
        { keyword: "tub reglazing near me",     monthly_searches: 2900 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Tub Resurfacing",
      description: "A third synonym family with 2,400 monthly searches for 'bathtub resurfacing' and 1,600 for 'tub resurfacing.' Resurfacing is a distinct search term used by homeowners who may not know the difference between refinishing and resurfacing, but have the same purchase intent. Including this keyword ensures Bath Magic captures all three major synonym groups and dominates the full surface of the refinishing search landscape.",
      keywords: [
        { keyword: "bathtub resurfacing",         monthly_searches: 2400 },
        { keyword: "tub resurfacing",             monthly_searches: 1600 },
        { keyword: "bathtub resurfacing near me", monthly_searches:  590 },
        { keyword: "tub resurfacing near me",     monthly_searches:  480 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Shower Refinishing",
      description: "Bath Magic explicitly offers shower refinishing as a distinct service. At 1,000 monthly searches nationally, 'shower refinishing' represents a separate service line with its own search audience. Homeowners searching for shower refinishing are not searching for bathtub refinishing; they are a distinct customer segment. Including this keyword ensures Bath Magic captures the full scope of its service offerings.",
      keywords: [
        { keyword: "shower refinishing",         monthly_searches: 1000 },
        { keyword: "shower reglazing",           monthly_searches:  720 },
        { keyword: "shower resurfacing",         monthly_searches:  480 },
        { keyword: "shower refinishing near me", monthly_searches:  320 },
      ]
    },
    {
      tier_label: "Tier 5",
      tier_name: "Tile Refinishing",
      description: "Tile refinishing is a distinct service offered by Bath Magic and represents a separate search audience from bathtub and shower customers. At 1,600 monthly searches for 'tile refinishing' and 1,000 for 'tile reglazing,' this keyword family captures homeowners looking to restore tile surfaces rather than replace them. Bath Magic's existing pages do not cover tile refinishing by city, making this a clean, uncontested opportunity.",
      keywords: [
        { keyword: "tile refinishing",         monthly_searches: 1600 },
        { keyword: "tile reglazing",           monthly_searches: 1000 },
        { keyword: "tile resurfacing",         monthly_searches:  480 },
        { keyword: "tile refinishing near me", monthly_searches:  260 },
      ]
    },
    {
      tier_label: "Tier 6",
      tier_name: "Sink Refinishing",
      description: "Sink refinishing is a distinct service offered by Bath Magic and captures a separate customer segment: homeowners looking to restore a worn or discolored sink rather than replace it. With 590 monthly searches nationally for both 'sink refinishing' and 'sink refinishing near me,' this keyword unlocks a service line that was previously outside the plan. Adding sink refinishing as the sixth keyword allows Bath Magic to cover its full service portfolio across all 10 target markets without requiring additional cities.",
      keywords: [
        { keyword: "sink refinishing",         monthly_searches: 590 },
        { keyword: "sink refinishing near me", monthly_searches: 590 },
        { keyword: "sink reglazing",           monthly_searches: 260 },
        { keyword: "sink resurfacing",         monthly_searches: 260 },
      ]
    }
  ],
  // ---- STRATEGY MATRIX (6 keywords x 10 cities = 60 combinations) ----
  matrix: [
    { city: "Louisville",   state: "KY", tier: "Tier 1", population: 633045, is_hq: false, keywords: ["bathtub refinishing", "bathtub reglazing", "tub resurfacing", "shower refinishing", "tile refinishing", "sink refinishing"] },
    { city: "Detroit",      state: "MI", tier: "Tier 1", population: 620376, is_hq: false, keywords: ["bathtub refinishing", "bathtub reglazing", "tub resurfacing", "shower refinishing", "tile refinishing", "sink refinishing"] },
    { city: "Cincinnati",   state: "OH", tier: "Tier 1", population: 309317, is_hq: false, keywords: ["bathtub refinishing", "bathtub reglazing", "tub resurfacing", "shower refinishing", "tile refinishing", "sink refinishing"] },
    { city: "Columbus",     state: "OH", tier: "Tier 1", population: 905748, is_hq: false, keywords: ["bathtub refinishing", "bathtub reglazing", "tub resurfacing", "shower refinishing", "tile refinishing", "sink refinishing"] },
    { city: "Madison",      state: "WI", tier: "Tier 1", population: 269840, is_hq: false, keywords: ["bathtub refinishing", "bathtub reglazing", "tub resurfacing", "shower refinishing", "tile refinishing", "sink refinishing"] },
    { city: "Toledo",       state: "OH", tier: "Tier 1", population: 268508, is_hq: false, keywords: ["bathtub refinishing", "bathtub reglazing", "tub resurfacing", "shower refinishing", "tile refinishing", "sink refinishing"] },
    { city: "Rockford",     state: "IL", tier: "Tier 1", population: 147651, is_hq: false, keywords: ["bathtub refinishing", "bathtub reglazing", "tub resurfacing", "shower refinishing", "tile refinishing", "sink refinishing"] },
    { city: "Dayton",       state: "OH", tier: "Tier 1", population: 137644, is_hq: true,  keywords: ["bathtub refinishing", "bathtub reglazing", "tub resurfacing", "shower refinishing", "tile refinishing", "sink refinishing"] },
    { city: "Hamilton",     state: "OH", tier: "Tier 1", population:  64000, is_hq: false, keywords: ["bathtub refinishing", "bathtub reglazing", "tub resurfacing", "shower refinishing", "tile refinishing", "sink refinishing"] },
    { city: "Springfield",  state: "OH", tier: "Tier 1", population:  58000, is_hq: false, keywords: ["bathtub refinishing", "bathtub reglazing", "tub resurfacing", "shower refinishing", "tile refinishing", "sink refinishing"] },
  ],
  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Synonym Variants: Covered by Selected Keywords",
      description: "These keywords are functionally identical to the five selected keywords. 'Tub refinishing' and 'bathtub refinishing' are the same service; 'tub reglazing' and 'bathtub reglazing' are the same service. Including both the 'tub' and 'bathtub' prefix versions as separate strategy keywords would create redundant pages targeting the same audience. The selected keywords capture the highest-volume version of each synonym pair.",
      keywords: [
        { keyword: "tub refinishing",          monthly_searches: 5400 },
        { keyword: "tub refinishing near me",  monthly_searches: 2400 },
        { keyword: "tub reglazing",            monthly_searches: 3600 },
        { keyword: "tub reglazing near me",    monthly_searches: 2900 },
      ]
    },
    {
      reason: "Bathroom Refinishing: Umbrella Term, Lower Priority",
      description: "Bathroom refinishing is a broader umbrella term that encompasses all of Bath Magic's services. While it has 1,300 monthly searches, it is a less specific search term than the individual service keywords. Homeowners searching 'bathroom refinishing' may be looking for any combination of tub, shower, sink, or tile work. The six selected keywords collectively capture this audience more precisely and with higher conversion intent.",
      keywords: [
        { keyword: "bathroom refinishing",         monthly_searches: 1300 },
        { keyword: "bathroom refinishing near me", monthly_searches:  480 },
        { keyword: "bathroom reglazing",           monthly_searches:  390 },
        { keyword: "bathroom refinishing cost",    monthly_searches:  390 },
      ]
    },
    {
      reason: "Specialty Material Keywords: Niche Audience, Plan Expansion Candidates",
      description: "Cast iron tub refinishing (1,000 searches), fiberglass tub refinishing (720 searches), and porcelain refinishing (210 searches) target homeowners with specific tub materials. These are high-intent, high-value searches, but they represent a narrower audience than the broad refinishing keywords. They are ideal candidates for a dedicated content expansion once the foundation keywords are established.",
      keywords: [
        { keyword: "cast iron tub refinishing",         monthly_searches: 1000 },
        { keyword: "fiberglass tub refinishing",        monthly_searches:  720 },
        { keyword: "cast iron tub refinishing near me", monthly_searches:  320 },
        { keyword: "porcelain refinishing",             monthly_searches:  210 },
        { keyword: "acrylic tub refinishing",           monthly_searches:   90 },
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
      headline: "Add Bathroom Refinishing and Expand into 5 New Markets",
      description: "Level F adds 30 keyword-city combinations across two strategic levers. First, it introduces bathroom refinishing as a seventh keyword (1,300 monthly searches), capturing homeowners searching for full bathroom surface restoration rather than a single fixture. Second, it adds 5 new suburban cities within the confirmed service metros, deepening Bath Magic's footprint in the highest-demand markets.",
      keywords: [
        { keyword: "bathroom refinishing",   monthly_searches: 1300 },
        { keyword: "Lexington, KY",          monthly_searches: null, new_market: true },
        { keyword: "Kettering, OH",          monthly_searches: null, new_market: true },
        { keyword: "West Chester, OH",      monthly_searches: null, new_market: true },
        { keyword: "Warren, MI",             monthly_searches: null, new_market: true },
        { keyword: "Livonia, MI",            monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level G",
      combinations: 120,
      price: 4000,
      additional_combinations: 60,
      headline: "Full Multi-State Market Domination",
      description: "Level G delivers 120 total combinations, enabling Bath Magic to achieve dominant visibility across its entire 8-metro service region. This tier adds the specialty material keywords (cast iron tub refinishing, fiberglass tub refinishing) as dedicated content pages and extends coverage to the full roster of Tier 2 suburban markets across Ohio, Michigan, Kentucky, Illinois, and Wisconsin.",
      keywords: [
        { keyword: "cast iron tub refinishing",    monthly_searches: 1000 },
        { keyword: "fiberglass tub refinishing",   monthly_searches:  720 },
        { keyword: "Flint, MI",                    monthly_searches: null, new_market: true },
        { keyword: "Covington, KY",                monthly_searches: null, new_market: true },
        { keyword: "Beloit, WI",                   monthly_searches: null, new_market: true },
        { keyword: "Middletown, OH",               monthly_searches: null, new_market: true },
        { keyword: "West Chester, OH",             monthly_searches: null, new_market: true },
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
  if (status === 'near_me') return `<span class="status-badge status-near-me" title="${note || ''}">Near Me Variant</span>`;
  return '<span class="status-badge status-not-used">Not Used</span>';
}
function tierPill(label) {
  if (!label) return '<span style="color:#999;font-size:0.8rem;">&#8212;</span>';
  const cls = label === 'Tier 1' ? 't1' : label === 'Tier 2' ? 't2' : label === 'Tier 3' ? 't3' : label === 'Tier 4' ? 't4' : 't5';
  return `<span class="tier-pill ${cls}">${label.toUpperCase()}</span>`;
}
// ============================================================
// POPULATE KEYWORD TABLE
// ============================================================
function buildKeywordTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;
  const familyOrder = [];
  const seen = new Set();
  STRATEGY.keyword_table.forEach(kw => {
    if (!seen.has(kw.family)) { familyOrder.push(kw.family); seen.add(kw.family); }
  });
  const variantLabel = { variant: 'Variant', plural: 'Plural Variant', near_me: 'Near Me Variant', short_form: 'Short-Form Variant' };
  let html = '';
  familyOrder.forEach(fam => {
    const members = STRATEGY.keyword_table
      .filter(kw => kw.family === fam)
      .slice()
      .sort((a, b) => {
        const rankType = t => t === 'base' ? 0 : 1;
        if (rankType(a.variant_type) !== rankType(b.variant_type)) return rankType(a.variant_type) - rankType(b.variant_type);
        return b.monthly_searches - a.monthly_searches;
      });
    members.forEach((kw) => {
      const isBase = kw.variant_type === 'base';
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
  { rank: 1,  city: 'Columbus',     state: 'OH', pop: 905748, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2,  city: 'Louisville',   state: 'KY', pop: 633045, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Detroit',      state: 'MI', pop: 620376, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Cincinnati',   state: 'OH', pop: 309317, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 5,  city: 'Madison',      state: 'WI', pop: 269840, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 6,  city: 'Toledo',       state: 'OH', pop: 268508, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 7,  city: 'Rockford',     state: 'IL', pop: 147651, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 8,  city: 'Dayton',       state: 'OH', pop: 137644, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 9,  city: 'Hamilton',     state: 'OH', pop:  64000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 10, city: 'Springfield',  state: 'OH', pop:  58000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 11, city: 'Ann Arbor',    state: 'MI', pop: 121890, tier: 'Tier 1', selected: false, hq: false },
  { rank: 12, city: 'Warren',       state: 'MI', pop: 134873, tier: 'Tier 1', selected: false, hq: false },
  { rank: 13, city: 'West Chester', state: 'OH', pop:  61000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 14, city: 'Bowling Green',state: 'KY', pop:  72294, tier: 'Tier 1', selected: false, hq: false },
  { rank: 15, city: 'Middletown',   state: 'OH', pop:  52000, tier: 'Tier 2', selected: false, hq: false },
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
