// ============================================================
// SEO Strategy Website — Bill's Comfort Systems
// billscomfortsystems.com | Plan Level E | 60 Combinations
// Dotcom Design | May 2026
// Rules: no em-dashes, no en-dashes, full client name always
// ============================================================

const STRATEGY = {
  client_name: "Bill's Comfort Systems",
  industry: "HVAC, Fireplaces and Comfort Systems",
  hq_city: "Layton",
  hq_city_2: "Murray",
  state: "UT",
  service_area: "Layton, Murray, and the greater Wasatch Front",
  plan_level: "Level E",
  plan_price: 2000,
  total_combinations: 60,
  total_keywords_researched: 141,
  month: "May 2026",

  selected_keywords: [
    "hvac company",
    "air conditioning company",
    "heating company",
    "ac repair",
    "furnace repair"
  ],

  num_selected_keywords: 5,
  num_target_markets: 16,

  keyword_table: [
    // HVAC Company family
    { keyword: "hvac company",               monthly_searches: 18100, tier: "Tier 1", status: "selected",  family: "HVAC Company",      variant_type: "base" },
    { keyword: "hvac near me",               monthly_searches: 14800, tier: "Tier 1", status: "near_me",   family: "HVAC Company",      variant_type: "near_me", note: "Near me variant of hvac company; excluded because base keyword is selected" },
    { keyword: "hvac companies",             monthly_searches:  8100, tier: "Tier 1", status: "not_used",  family: "HVAC Company",      variant_type: "plural" },
    { keyword: "local hvac company",         monthly_searches:  2400, tier: "Tier 1", status: "not_used",  family: "HVAC Company",      variant_type: "variant" },
    // HVAC Contractor family
    { keyword: "hvac contractor",            monthly_searches:  6600, tier: "Tier 1", status: "not_used",  family: "HVAC Contractor",   variant_type: "base" },
    { keyword: "hvac contractors",           monthly_searches:  5400, tier: "Tier 1", status: "not_used",  family: "HVAC Contractor",   variant_type: "plural" },
    // HVAC Repair family
    { keyword: "hvac repair",                monthly_searches: 12100, tier: "Tier 1", status: "not_used",  family: "HVAC Repair",       variant_type: "base" },
    // HVAC Service family
    { keyword: "hvac service",               monthly_searches:  9900, tier: "Tier 1", status: "not_used",  family: "HVAC Service",      variant_type: "base" },
    { keyword: "hvac services",              monthly_searches:  8100, tier: "Tier 1", status: "not_used",  family: "HVAC Service",      variant_type: "plural" },
    // HVAC Installation family
    { keyword: "hvac installation",          monthly_searches:  6600, tier: "Tier 1", status: "not_used",  family: "HVAC Installation", variant_type: "base" },
    // HVAC Technician family
    { keyword: "hvac technician",            monthly_searches:  5400, tier: "Tier 1", status: "not_used",  family: "HVAC Technician",   variant_type: "base" },
    // AC Company family
    { keyword: "air conditioning company",   monthly_searches: 12100, tier: "Tier 1", status: "selected",  family: "AC Company",        variant_type: "base" },
    { keyword: "air conditioning near me",   monthly_searches:  9900, tier: "Tier 1", status: "near_me",   family: "AC Company",        variant_type: "near_me", note: "Near me variant; excluded because base keyword is selected" },
    { keyword: "air conditioning companies", monthly_searches:  4400, tier: "Tier 1", status: "not_used",  family: "AC Company",        variant_type: "plural" },
    { keyword: "ac company",                 monthly_searches:  9900, tier: "Tier 1", status: "not_used",  family: "AC Company",        variant_type: "short_form" },
    // AC Repair family
    { keyword: "ac repair",                  monthly_searches:  9900, tier: "Tier 1", status: "selected",  family: "AC Repair",         variant_type: "base" },
    { keyword: "air conditioning repair",    monthly_searches:  8100, tier: "Tier 1", status: "near_me",   family: "AC Repair",         variant_type: "variant", note: "Variant of ac repair; captured organically when ac repair pages rank" },
    // AC Service family
    { keyword: "air conditioning service",   monthly_searches:  6600, tier: "Tier 1", status: "not_used",  family: "AC Service",        variant_type: "base" },
    // AC Installation family
    { keyword: "air conditioning installation", monthly_searches: 4400, tier: "Tier 1", status: "not_used", family: "AC Installation",  variant_type: "base" },
    { keyword: "ac installation",            monthly_searches:  3600, tier: "Tier 1", status: "not_used",  family: "AC Installation",   variant_type: "short_form" },
    { keyword: "central air installation",   monthly_searches:  2900, tier: "Tier 1", status: "not_used",  family: "AC Installation",   variant_type: "variant" },
    // AC Contractor family
    { keyword: "air conditioning contractor",monthly_searches:  3600, tier: "Tier 1", status: "not_used",  family: "AC Contractor",     variant_type: "base" },
    // Heating Company family
    { keyword: "heating company",            monthly_searches:  9900, tier: "Tier 1", status: "selected",  family: "Heating Company",   variant_type: "base" },
    { keyword: "heating near me",            monthly_searches:  6600, tier: "Tier 1", status: "near_me",   family: "Heating Company",   variant_type: "near_me", note: "Near me variant; excluded because base keyword is selected" },
    { keyword: "heating companies",          monthly_searches:  3600, tier: "Tier 1", status: "not_used",  family: "Heating Company",   variant_type: "plural" },
    // Heating Repair family
    { keyword: "heating repair",             monthly_searches:  5400, tier: "Tier 1", status: "not_used",  family: "Heating Repair",    variant_type: "base" },
    // Heating Service family
    { keyword: "heating service",            monthly_searches:  4400, tier: "Tier 1", status: "not_used",  family: "Heating Service",   variant_type: "base" },
    // Heating Contractor family
    { keyword: "heating contractor",         monthly_searches:  2900, tier: "Tier 1", status: "not_used",  family: "Heating Contractor",variant_type: "base" },
    // Furnace Company family
    { keyword: "furnace company",            monthly_searches:  8100, tier: "Tier 1", status: "not_used",  family: "Furnace Company",   variant_type: "base" },
    { keyword: "furnace companies",          monthly_searches:  3600, tier: "Tier 1", status: "not_used",  family: "Furnace Company",   variant_type: "plural" },
    // Furnace Repair family
    { keyword: "furnace repair",             monthly_searches:  9900, tier: "Tier 1", status: "selected",  family: "Furnace Repair",    variant_type: "base" },
    { keyword: "furnace replacement",        monthly_searches:  5400, tier: "Tier 1", status: "not_used",  family: "Furnace Repair",    variant_type: "variant" },
    // Furnace Installation family
    { keyword: "furnace installation",       monthly_searches:  6600, tier: "Tier 1", status: "not_used",  family: "Furnace Installation", variant_type: "base" },
    // Furnace Service family
    { keyword: "furnace service",            monthly_searches:  4400, tier: "Tier 1", status: "not_used",  family: "Furnace Service",   variant_type: "base" },
    // Heat Pump family
    { keyword: "heat pump installation",     monthly_searches:  4400, tier: "Tier 1", status: "not_used",  family: "Heat Pump",         variant_type: "base" },
    { keyword: "heat pump company",          monthly_searches:  2400, tier: "Tier 1", status: "not_used",  family: "Heat Pump",         variant_type: "variant" },
    // Fireplace Company family
    { keyword: "fireplace company",          monthly_searches:  4400, tier: "Tier 2", status: "selected",  family: "Fireplace Company", variant_type: "base" },
    { keyword: "fireplace near me",          monthly_searches:  3600, tier: "Tier 2", status: "near_me",   family: "Fireplace Company", variant_type: "near_me", note: "Near me variant; excluded because base keyword is selected" },
    { keyword: "fireplace companies",        monthly_searches:  1900, tier: "Tier 2", status: "not_used",  family: "Fireplace Company", variant_type: "plural" },
    // Fireplace Installation family
    { keyword: "fireplace installation",     monthly_searches:  3600, tier: "Tier 2", status: "not_used",  family: "Fireplace Installation", variant_type: "base" },
    { keyword: "gas fireplace installation", monthly_searches:  3600, tier: "Tier 2", status: "not_used",  family: "Fireplace Installation", variant_type: "variant" },
    { keyword: "outdoor fireplace installation", monthly_searches: 2900, tier: "Tier 2", status: "not_used", family: "Fireplace Installation", variant_type: "variant" },
    { keyword: "indoor fireplace installation", monthly_searches: 1300, tier: "Tier 2", status: "not_used", family: "Fireplace Installation", variant_type: "variant" },
    // Fireplace Repair family
    { keyword: "fireplace repair",           monthly_searches:  2900, tier: "Tier 2", status: "not_used",  family: "Fireplace Repair",  variant_type: "base" },
    { keyword: "gas fireplace repair",       monthly_searches:  2400, tier: "Tier 2", status: "not_used",  family: "Fireplace Repair",  variant_type: "variant" },
    // Fireplace Service family
    { keyword: "fireplace service",          monthly_searches:  2400, tier: "Tier 2", status: "not_used",  family: "Fireplace Service", variant_type: "base" },
    // Fireplace Contractor family
    { keyword: "fireplace contractor",       monthly_searches:  1600, tier: "Tier 2", status: "not_used",  family: "Fireplace Contractor", variant_type: "base" },
    // Specialty Fireplace Companies
    { keyword: "outdoor fireplace company",  monthly_searches:  1600, tier: "Tier 2", status: "not_used",  family: "Specialty Fireplace", variant_type: "base" },
    { keyword: "gas fireplace company",      monthly_searches:  1300, tier: "Tier 2", status: "not_used",  family: "Specialty Fireplace", variant_type: "variant" },
    // Ductless Mini Split Installation family
    { keyword: "ductless mini split installation", monthly_searches: 5400, tier: "Tier 2", status: "not_used", family: "Ductless Mini Split Installation", variant_type: "base" },
    { keyword: "mini split installation",          monthly_searches: 4400, tier: "Tier 2", status: "not_used", family: "Ductless Mini Split Installation", variant_type: "short_form" },
    { keyword: "ductless ac installation",         monthly_searches: 2400, tier: "Tier 2", status: "not_used", family: "Ductless Mini Split Installation", variant_type: "variant" },
    // Ductless Mini Split Company family
    { keyword: "ductless mini split company",      monthly_searches: 1900, tier: "Tier 2", status: "not_used", family: "Ductless Mini Split Company", variant_type: "base" },
    { keyword: "ductless mini split near me",      monthly_searches: 3600, tier: "Tier 2", status: "near_me",  family: "Ductless Mini Split Company", variant_type: "near_me", note: "Near me variant; reserved for Level F expansion" },
    { keyword: "mini split company",               monthly_searches: 1900, tier: "Tier 2", status: "not_used", family: "Ductless Mini Split Company", variant_type: "short_form" },
    // Ductless Mini Split Contractor family
    { keyword: "ductless mini split contractor",   monthly_searches: 1600, tier: "Tier 2", status: "not_used", family: "Ductless Mini Split Contractor", variant_type: "base" },
    // HVAC Maintenance family
    { keyword: "hvac maintenance",                 monthly_searches: 8100, tier: "Tier 2", status: "not_used", family: "HVAC Maintenance", variant_type: "base" },
    { keyword: "hvac maintenance company",         monthly_searches: 2400, tier: "Tier 2", status: "not_used", family: "HVAC Maintenance", variant_type: "variant" },
    { keyword: "hvac maintenance plan",            monthly_searches: 1600, tier: "Tier 2", status: "not_used", family: "HVAC Maintenance", variant_type: "variant" },
    { keyword: "commercial hvac maintenance",      monthly_searches: 1900, tier: "Tier 2", status: "not_used", family: "HVAC Maintenance", variant_type: "variant" },
    { keyword: "residential hvac maintenance",     monthly_searches: 1300, tier: "Tier 2", status: "not_used", family: "HVAC Maintenance", variant_type: "variant" },
    // Tune Up family
    { keyword: "hvac tune up",                     monthly_searches: 2900, tier: "Tier 2", status: "not_used", family: "Tune Up",           variant_type: "base" },
    { keyword: "furnace tune up",                  monthly_searches: 2400, tier: "Tier 2", status: "not_used", family: "Tune Up",           variant_type: "variant" },
    // Commercial HVAC Company family
    { keyword: "commercial hvac company",          monthly_searches: 3600, tier: "Tier 2", status: "not_used", family: "Commercial HVAC Company", variant_type: "base" },
    { keyword: "industrial hvac company",          monthly_searches: 1300, tier: "Tier 2", status: "not_used", family: "Commercial HVAC Company", variant_type: "variant" },
    // Commercial HVAC Contractor family
    { keyword: "commercial hvac contractor",       monthly_searches: 2900, tier: "Tier 2", status: "not_used", family: "Commercial HVAC Contractor", variant_type: "base" },
    // Furnace Maintenance family
    { keyword: "furnace maintenance",              monthly_searches: 3600, tier: "Tier 2", status: "not_used", family: "Furnace Maintenance", variant_type: "base" },
    // AC Maintenance family
    { keyword: "ac maintenance",                   monthly_searches: 3600, tier: "Tier 2", status: "not_used", family: "AC Maintenance",    variant_type: "base" },
    // New Construction family
    { keyword: "new construction hvac",            monthly_searches: 2900, tier: "Tier 3", status: "not_used", family: "New Construction",  variant_type: "base" },
    { keyword: "new construction hvac installation", monthly_searches: 1600, tier: "Tier 3", status: "not_used", family: "New Construction",  variant_type: "variant" },
    { keyword: "new home hvac installation",       monthly_searches: 1300, tier: "Tier 3", status: "not_used", family: "New Construction",  variant_type: "variant" },
  ],

  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Provider and Emergency Service Keywords",
      description: "The highest-volume, highest-intent keywords in the dataset. These terms split into two critical buyer types: provider-intent searches (someone shopping for a company) and emergency-intent searches (someone whose equipment is broken right now). Both types are selected for the Level E plan because they represent fundamentally different landing pages and different conversion paths. Provider-intent keywords anchor the brand; emergency-intent keywords capture the most urgent, highest-converting clicks in HVAC.",
      keywords: [
        { keyword: "hvac company",             monthly_searches: 18100 },
        { keyword: "hvac near me",             monthly_searches: 14800 },
        { keyword: "air conditioning company", monthly_searches: 12100 },
        { keyword: "hvac repair",              monthly_searches: 12100 },
        { keyword: "ac repair",                monthly_searches:  9900 },
        { keyword: "ac company",               monthly_searches:  9900 },
        { keyword: "heating company",          monthly_searches:  9900 },
        { keyword: "hvac service",             monthly_searches:  9900 },
        { keyword: "furnace repair",           monthly_searches:  9900 },
        { keyword: "air conditioning near me", monthly_searches:  9900 },
        { keyword: "furnace company",          monthly_searches:  8100 },
        { keyword: "hvac companies",           monthly_searches:  8100 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Installation, Specialty, and Maintenance",
      description: "Mid-volume keywords targeting homeowners and businesses researching specific equipment installations, specialty comfort solutions, and service programs. These terms capture buyers who are further along in the decision process. Ductless mini split installation (5,400/mo) and hvac maintenance (8,100/mo) are the top candidates for Level F expansion, adding two high-value keyword categories across the existing 10 markets.",
      keywords: [
        { keyword: "hvac maintenance",                 monthly_searches: 8100 },
        { keyword: "furnace installation",             monthly_searches: 6600 },
        { keyword: "ductless mini split installation", monthly_searches: 5400 },
        { keyword: "furnace replacement",              monthly_searches: 5400 },
        { keyword: "mini split installation",          monthly_searches: 4400 },
        { keyword: "fireplace company",                monthly_searches: 4400 },
        { keyword: "commercial hvac company",          monthly_searches: 3600 },
        { keyword: "furnace maintenance",              monthly_searches: 3600 },
        { keyword: "ac maintenance",                   monthly_searches: 3600 },
        { keyword: "gas fireplace installation",       monthly_searches: 3600 },
        { keyword: "fireplace installation",           monthly_searches: 3600 },
        { keyword: "commercial hvac contractor",       monthly_searches: 2900 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Commercial, New Construction, and Niche Services",
      description: "Lower-volume but highly targeted keywords for Bill's Comfort Systems' commercial, industrial, and new construction services. These terms attract recurring service customers, commercial building managers, and builders -- three of the highest-lifetime-value customer segments in HVAC. Reserved for Level G and Level H plan expansions alongside market expansion into West Valley City, West Jordan, and Sandy.",
      keywords: [
        { keyword: "hvac maintenance plan",              monthly_searches: 1600 },
        { keyword: "residential hvac maintenance",       monthly_searches: 1300 },
        { keyword: "commercial hvac maintenance",        monthly_searches: 1900 },
        { keyword: "industrial hvac company",            monthly_searches: 1300 },
        { keyword: "new construction hvac",              monthly_searches: 2900 },
        { keyword: "new construction hvac installation", monthly_searches: 1600 },
        { keyword: "hvac tune up",                       monthly_searches: 2900 },
        { keyword: "furnace tune up",                    monthly_searches: 2400 },
        { keyword: "new home hvac installation",         monthly_searches: 1300 },
        { keyword: "outdoor fireplace installation",     monthly_searches: 2900 },
      ]
    }
  ],

  matrix: [
    // Tier 1 HQ: 5-keyword deep coverage for both headquarters markets
    { city: "Layton",          state: "UT", tier: "Tier 1", population:  84312, is_hq: true,  keywords: ["hvac company", "air conditioning company", "heating company", "ac repair", "furnace repair"] },
    { city: "Murray",          state: "UT", tier: "Tier 1", population:  50637, is_hq: true,  keywords: ["hvac company", "air conditioning company", "heating company", "ac repair", "furnace repair"] },
    // Tier 1: 5-keyword coverage for the two largest population markets
    { city: "Salt Lake City",  state: "UT", tier: "Tier 1", population: 200567, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company", "ac repair", "furnace repair"] },
    { city: "Ogden",           state: "UT", tier: "Tier 1", population:  87321, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company", "ac repair", "furnace repair"] },
    // Tier 1: 4-keyword coverage for strong mid-size markets
    { city: "Bountiful",       state: "UT", tier: "Tier 1", population:  46134, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company", "ac repair"] },
    { city: "Roy",             state: "UT", tier: "Tier 1", population:  40226, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company", "ac repair"] },
    // Tier 2: 4-keyword coverage for established Davis County markets
    { city: "Syracuse",        state: "UT", tier: "Tier 2", population:  35714, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company", "ac repair"] },
    { city: "Kaysville",       state: "UT", tier: "Tier 2", population:  34735, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company", "ac repair"] },
    { city: "Clearfield",      state: "UT", tier: "Tier 2", population:  32082, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company", "ac repair"] },
    // Tier 2: 3-keyword coverage for growing mid-size markets
    { city: "Farmington",      state: "UT", tier: "Tier 2", population:  25891, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company"] },
    { city: "Clinton",         state: "UT", tier: "Tier 2", population:  22070, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company"] },
    { city: "West Haven",      state: "UT", tier: "Tier 2", population:  21175, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company"] },
    { city: "Centerville",     state: "UT", tier: "Tier 2", population:  17503, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company"] },
    // Tier 3: 3-keyword coverage for specialty and client-requested markets
    { city: "Park City",       state: "UT", tier: "Tier 3", population:   8548, is_hq: false, keywords: ["hvac company", "air conditioning company", "heating company"] },
    { city: "Salt Lake Valley", state: "UT", tier: "Tier 1", population:  null, is_hq: false, keywords: ["hvac company", "air conditioning company"] },
    { city: "Plain City",      state: "UT", tier: "Tier 3", population:   7078, is_hq: false, keywords: ["hvac company", "heating company", "furnace repair"] },
  ],

  not_used_groups: [
    {
      reason: "High-Volume Keywords Reserved for Level F Expansion",
      description: "These are some of the highest-volume keywords in the entire dataset and are intentionally held back from the current plan. At Level E, the strategy prioritizes depth across 10 core markets. These keywords -- hvac repair (12,100/mo), hvac service (9,900/mo), furnace installation (6,600/mo), and hvac contractor (6,600/mo) -- are the primary candidates for Level F expansion, adding 20 to 30 new combinations across the existing 10 markets at a higher conversion rate.",
      keywords: [
        { keyword: "hvac repair",              monthly_searches: 12100 },
        { keyword: "hvac service",             monthly_searches:  9900 },
        { keyword: "hvac contractor",          monthly_searches:  6600 },
        { keyword: "furnace installation",     monthly_searches:  6600 },
        { keyword: "heating repair",           monthly_searches:  5400 },
        { keyword: "furnace replacement",      monthly_searches:  5400 },
        { keyword: "air conditioning service", monthly_searches:  6600 },
        { keyword: "ac installation",          monthly_searches:  3600 },
        { keyword: "heat pump installation",   monthly_searches:  4400 },
      ]
    },
    {
      reason: "Near Me and Plural Variants: Captured Organically",
      description: "Near me and plural variants are excluded as standalone keyword targets because they share the exact same search intent as their base keyword. When a city-specific page ranks for 'hvac company Layton UT', it will naturally rank for 'hvac companies Layton UT' and 'hvac near me Layton' as well. Creating separate pages for these variants would cause keyword cannibalization and dilute domain authority.",
      keywords: [
        { keyword: "hvac near me",             monthly_searches: 14800 },
        { keyword: "air conditioning near me", monthly_searches:  9900 },
        { keyword: "ac company",               monthly_searches:  9900 },
        { keyword: "hvac companies",           monthly_searches:  8100 },
        { keyword: "furnace company",          monthly_searches:  8100 },
        { keyword: "heating near me",          monthly_searches:  6600 },
        { keyword: "hvac contractors",         monthly_searches:  5400 },
        { keyword: "fireplace near me",        monthly_searches:  3600 },
        { keyword: "ductless mini split near me", monthly_searches: 3600 },
      ]
    },
    {
      reason: "Ductless Mini Splits: Reserved for Level F or Level G",
      description: "Ductless mini split keywords have strong and growing search volume and are a confirmed service line for Bill's Comfort Systems. These are strong Level F or Level G candidates. The install intent keywords (5,400/mo) are the highest priority; the company and contractor variants follow. Adding mini split installation across the existing 10 markets would add 10 combinations and capture a distinct buyer who is specifically researching ductless systems -- a high-ticket, high-margin purchase.",
      keywords: [
        { keyword: "ductless mini split installation", monthly_searches: 5400 },
        { keyword: "mini split installation",          monthly_searches: 4400 },
        { keyword: "ductless ac installation",         monthly_searches: 2400 },
        { keyword: "ductless mini split company",      monthly_searches: 1900 },
        { keyword: "mini split company",               monthly_searches: 1900 },
        { keyword: "ductless mini split contractor",   monthly_searches: 1600 },
      ]
    },
    {
      reason: "Maintenance and Commercial: Reserved for Level G",
      description: "HVAC maintenance and commercial service keywords represent the highest-lifetime-value customer segment in the industry. A client on a maintenance plan is worth 3x to 5x a one-time repair customer. These terms are reserved for Level G expansion, which would add maintenance and commercial-focused pages across all markets and unlock the commercial building manager and industrial facility operator segments.",
      keywords: [
        { keyword: "hvac maintenance",               monthly_searches: 8100 },
        { keyword: "commercial hvac company",        monthly_searches: 3600 },
        { keyword: "furnace maintenance",            monthly_searches: 3600 },
        { keyword: "ac maintenance",                 monthly_searches: 3600 },
        { keyword: "commercial hvac contractor",     monthly_searches: 2900 },
        { keyword: "new construction hvac",          monthly_searches: 2900 },
        { keyword: "hvac tune up",                   monthly_searches: 2900 },
        { keyword: "commercial hvac maintenance",    monthly_searches: 1900 },
        { keyword: "hvac maintenance plan",          monthly_searches: 1600 },
        { keyword: "residential hvac maintenance",   monthly_searches: 1300 },
      ]
    }
  ],

  additional_opportunities: [
    {
      plan: "Level F",
      price: 3000,
      combinations: 90,
      additional_combinations: 30,
      headline: "Add Repair-Intent Keywords Across All 16 Markets",
      description: "Level F adds hvac repair (12,100/mo) and hvac service (9,900/mo) across the existing 16 markets, plus deepens coverage in Farmington, Clinton, West Haven, and Centerville with ac repair and furnace repair. These repair-intent keywords capture the highest-urgency buyers in HVAC -- someone whose equipment is broken right now is the most valuable click in the industry. Adding repair keywords across the existing market footprint is the highest-ROI upgrade available at this plan level.",
      new_market: false,
      keywords: [
        { keyword: "hvac repair",          monthly_searches: 12100 },
        { keyword: "hvac service",         monthly_searches:  9900 },
        { keyword: "ac repair",            monthly_searches:  9900, note: "Added to Farmington, Clinton, West Haven, Centerville" },
        { keyword: "furnace repair",       monthly_searches:  9900, note: "Added to Farmington, Clinton, West Haven, Centerville" },
        { keyword: "fireplace company",    monthly_searches:  4400, note: "Added to Park City and Salt Lake City" },
      ]
    },
    {
      plan: "Level G",
      price: 4000,
      combinations: 120,
      additional_combinations: 30,
      headline: "Add Ductless Mini Splits, HVAC Maintenance, and West Valley City",
      description: "Level G adds ductless mini split installation (5,400/mo) and hvac maintenance (8,100/mo) across all 16 existing markets, plus expands into West Valley City (140,230), West Jordan (116,961), and Sandy (98,975) -- three of Utah's five largest cities. Mini splits are the fastest-growing segment in residential HVAC. Maintenance program keywords attract recurring-revenue customers worth 3x to 5x a one-time repair customer. The West Valley City, West Jordan, and Sandy expansion also positions Bill's Comfort Systems as the dominant HVAC brand across the entire Wasatch Front.",
      new_market: true,
      keywords: [
        { keyword: "ductless mini split installation", monthly_searches: 5400 },
        { keyword: "hvac maintenance",                 monthly_searches: 8100 },
        { keyword: "furnace installation",             monthly_searches: 6600 },
        { keyword: "West Valley City, UT",             monthly_searches: null, new_market: true },
        { keyword: "West Jordan, UT",                  monthly_searches: null, new_market: true },
        { keyword: "Sandy, UT",                        monthly_searches: null, new_market: true },
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
    const tierLabel = tier.tier_label || ('Tier ' + (i + 1));
    const tierName  = tier.tier_name  || '';
    return `<div class="flat-tier-block ${colorCls}">
      <div class="flat-tier-heading">
        <span class="tier-pill ${colorCls.replace('kw-tier-', 't')}">${tierLabel}</span>
        <span class="flat-tier-name">${tierName}</span>
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
// POPULATE MATRIX
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
    const newMarketDiv = opp.new_market
      ? `<div class="opp-new-market">+ New Markets Added</div>`
      : `<div class="opp-new-market" style="visibility:hidden"></div>`;
    return `<div class="opp-card ${highlight}">
      <div class="opp-plan-label">${opp.plan}</div>
      <div class="opp-price">$${fmt(opp.price)}<span class="opp-price-label">/mo</span></div>
      <div class="opp-combos-large">${opp.combinations} <span class="opp-combos-label">total combinations</span></div>
      <div class="opp-combos">${opp.additional_combinations} additional combinations from current plan</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      ${newMarketDiv}
      <ul class="opp-kw-list"><li class="opp-kw-header"><span>Keyword / Market</span><span>Mo. Searches</span></li>${kwList}</ul>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// BUILD MOBILE MARKET LIST
// ============================================================
const MARKET_DATA = [
  { rank: 1,  city: 'Salt Lake City',   pop: 200567, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2,  city: 'Ogden',            pop:  87321, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Layton',           pop:  84312, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 4,  city: 'Murray',           pop:  50637, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 5,  city: 'Bountiful',        pop:  46134, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 6,  city: 'Roy',              pop:  40226, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 7,  city: 'Syracuse',         pop:  35714, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 8,  city: 'Kaysville',        pop:  34735, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 9,  city: 'Clearfield',       pop:  32082, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 10, city: 'Farmington',       pop:  25891, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 11, city: 'Clinton',          pop:  22070, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 12, city: 'West Haven',       pop:  21175, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 13, city: 'Centerville',      pop:  17503, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 14, city: 'Park City',        pop:   8548, tier: 'Tier 3', selected: true,  hq: false },
  { rank: 15, city: 'Plain City',       pop:   7078, tier: 'Tier 3', selected: true,  hq: false },
  { rank: 16, city: 'Salt Lake Valley', pop:   null, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 17, city: 'West Valley City', pop: 140230, tier: 'Tier 1', selected: false, hq: false },
  { rank: 18, city: 'West Jordan',      pop: 116961, tier: 'Tier 1', selected: false, hq: false },
  { rank: 19, city: 'Sandy',            pop:  98975, tier: 'Tier 1', selected: false, hq: false },
  { rank: 20, city: 'North Ogden',      pop:  20801, tier: 'Tier 2', selected: false, hq: false },
  { rank: '21+', city: 'South Ogden, Riverdale, Pleasant View, Harrisville, Sunset + more', pop: null, tier: 'Tier 3', selected: false, hq: false },
];

function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = MARKET_DATA.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">-</span>';
    const hqTag = m.hq ? ' <span class="hq-tag">HQ</span>' : '';
    const cityLabel = m.city + hqTag;
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
  const keywords = STRATEGY.selected_keywords;
  const cards = STRATEGY.matrix.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const hqTag = m.is_hq ? ' <span class="hq-tag">HQ</span>' : '';
    const cityLabel = m.city + hqTag;
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
});
