// ============================================================
// SEO Strategy Website — App.js
// Texas Building Center | Dotcom Design
// Strategy: Go Wide — 5 keywords across 10 confirmed service
// area cities = 40 combinations
// Keyword selection rules applied:
//   - One slot per variant family
//   - Always highest-volume family member
//   - No near me variants in matrix
//   - 500/mo minimum volume floor
//   - Dominant keyword (barndominium 246K) anchors Go Wide
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
  strategy_type: "Go Wide",
  strategy_note: "barndominium (246,000/mo) has 30x the volume of the next keyword family — Go Wide trigger confirmed. The dominant keyword is spread across 10 confirmed service area cities. Secondary keywords are distributed across the top 7-8 cities.",
  selected_keywords: [
    "barndominium",
    "barndominium plans",
    "barndominium builders",
    "custom home builders",
    "metal buildings"
  ],
  num_selected_keywords: 5,
  num_target_markets: 10,

  // ---- KEYWORD TABLE DATA ----
  // All researched keywords structured by variant family for grouped table display.
  // Each keyword has: family (string), is_base (bool), variant_type (string|null)
  // variant_type values: null (base), 'Singular Variant', 'Plural Variant', 'Near Me Variant', 'Short-Form Variant', 'Variant'
  // Families are ordered by the volume of their base/selected keyword (descending).
  keyword_table: [

    // ── FAMILY A: barndominium (base) — 246,000/mo — SELECTED ──────────────────
    { keyword: "barndominium",                      monthly_searches: 246000, tier: "Tier 1", status: "selected",  family: "barndominium",         is_base: true,  variant_type: null,                note: "" },
    { keyword: "barndo",                            monthly_searches:  14800, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Short-Form Variant", note: "Short-form of 'barndominium'; same searcher intent. 'barndominium' (246K) is the correct family representative." },
    { keyword: "barndominium near me",              monthly_searches:   1600, tier: "Tier 1", status: "near_me",   family: "barndominium",         is_base: false, variant_type: "Near Me Variant",    note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },
    { keyword: "barndominium homes",                monthly_searches:  12100, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Broader informational variant; same family as 'barndominium'." },
    { keyword: "barndominium kits",                 monthly_searches:  40500, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Product/kit term; informational intent, not hire-intent." },
    { keyword: "barndominium cost",                 monthly_searches:   5400, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Informational/cost research intent." },
    { keyword: "barndominium kit",                  monthly_searches:   4400, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Product/kit term; not hire-intent." },
    { keyword: "barndo homes",                      monthly_searches:    880, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Short-Form Variant", note: "Short-form variant of 'barndominium homes'; same family." },
    { keyword: "building a barndominium",           monthly_searches:   1900, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Informational/DIY research intent." },
    { keyword: "build a barndominium",              monthly_searches:   1000, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Informational/DIY research intent." },
    { keyword: "barndominium with shop",            monthly_searches:   1000, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Informational/design research term, not hire-intent." },
    { keyword: "barndominium shell",                monthly_searches:    720, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Product/kit term; not hire-intent." },
    { keyword: "barndominium price",                monthly_searches:    590, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Informational/cost research intent." },
    { keyword: "barndo cost",                       monthly_searches:    390, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Short-Form Variant", note: "Short-form of 'barndominium cost'; informational intent." },
    { keyword: "barndominium construction cost",    monthly_searches:    260, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Informational/cost research intent." },
    { keyword: "turnkey barndominium",              monthly_searches:    390, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Low volume; informational intent." },
    { keyword: "barndominium packages",             monthly_searches:    390, tier: "Tier 1", status: "not_used",  family: "barndominium",         is_base: false, variant_type: "Variant",            note: "Product/kit term; not hire-intent." },

    // ── FAMILY B: barndominium plans (base) — 60,500/mo — SELECTED ─────────────
    { keyword: "barndominium plans",                monthly_searches:  60500, tier: "Tier 1", status: "selected",  family: "barndominium-plans",   is_base: true,  variant_type: null,                 note: "" },
    { keyword: "barndominium floor plans",          monthly_searches:  33100, tier: "Tier 1", status: "not_used",  family: "barndominium-plans",   is_base: false, variant_type: "Variant",            note: "Same family as 'barndominium plans'; lower volume variant." },
    { keyword: "barndo plans",                      monthly_searches:   4400, tier: "Tier 1", status: "not_used",  family: "barndominium-plans",   is_base: false, variant_type: "Short-Form Variant", note: "Short-form of 'barndominium plans'; lower volume." },
    { keyword: "barndo floor plans",                monthly_searches:   2400, tier: "Tier 1", status: "not_used",  family: "barndominium-plans",   is_base: false, variant_type: "Short-Form Variant", note: "Short-form of 'barndominium floor plans'; lower volume." },

    // ── FAMILY C: metal buildings (base) — 33,100/mo — SELECTED ────────────────
    { keyword: "metal buildings",                   monthly_searches:  33100, tier: "Tier 4", status: "selected",  family: "metal-buildings",      is_base: true,  variant_type: null,                 note: "" },
    { keyword: "metal building",                    monthly_searches:  12100, tier: "Tier 4", status: "not_used",  family: "metal-buildings",      is_base: false, variant_type: "Singular Variant",   note: "Singular form of 'metal buildings'; lower volume." },
    { keyword: "metal building near me",            monthly_searches:   2900, tier: "Tier 4", status: "near_me",   family: "metal-buildings",      is_base: false, variant_type: "Near Me Variant",    note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },
    { keyword: "metal building contractors",        monthly_searches:   1600, tier: "Tier 4", status: "not_used",  family: "metal-buildings",      is_base: false, variant_type: "Variant",            note: "Modifier variant of 'metal buildings'; lower volume." },
    { keyword: "commercial metal buildings",        monthly_searches:   1300, tier: "Tier 4", status: "not_used",  family: "metal-buildings",      is_base: false, variant_type: "Variant",            note: "Modifier variant of 'metal buildings'; lower volume." },
    { keyword: "metal building cost",               monthly_searches:   1900, tier: "Tier 4", status: "not_used",  family: "metal-buildings",      is_base: false, variant_type: "Variant",            note: "Informational/cost research intent." },

    // ── FAMILY C2: steel buildings (base) — 14,800/mo — separate family from metal buildings ──
    { keyword: "steel buildings",                   monthly_searches:  14800, tier: "Tier 4", status: "not_used",  family: "steel-buildings",      is_base: true,  variant_type: null,                 note: "Separate family from 'metal buildings' — 'steel' and 'metal' are different root words. Out of scope: not a listed TBC service term; TBC uses 'metal buildings' branding." },
    { keyword: "steel building contractors",        monthly_searches:   1600, tier: "Tier 4", status: "not_used",  family: "steel-buildings",      is_base: false, variant_type: "Variant",            note: "Modifier variant of 'steel buildings'; same separate family." },

    // ── FAMILY D: custom home builders (base) — 12,100/mo — SELECTED ───────────
    { keyword: "custom home builders",              monthly_searches:  12100, tier: "Tier 3", status: "selected",  family: "custom-home-builders", is_base: true,  variant_type: null,                 note: "" },
    { keyword: "custom home builder",               monthly_searches:  14800, tier: "Tier 3", status: "not_used",  family: "custom-home-builders", is_base: false, variant_type: "Singular Variant",   note: "Singular form; plural 'custom home builders' is preferred per skill rules." },
    { keyword: "custom home builders near me",      monthly_searches:   9900, tier: "Tier 3", status: "near_me",   family: "custom-home-builders", is_base: false, variant_type: "Near Me Variant",    note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },
    { keyword: "custom home builder near me",       monthly_searches:   4400, tier: "Tier 3", status: "near_me",   family: "custom-home-builders", is_base: false, variant_type: "Near Me Variant",    note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },
    { keyword: "custom homes",                      monthly_searches:   8100, tier: "Tier 3", status: "not_used",  family: "custom-home-builders", is_base: false, variant_type: "Variant",            note: "Broader variant; same family as 'custom home builders'." },
    { keyword: "custom home construction",          monthly_searches:   1600, tier: "Tier 3", status: "not_used",  family: "custom-home-builders", is_base: false, variant_type: "Variant",            note: "Same family as 'custom home builders'; lower volume variant." },
    { keyword: "custom home contractor",            monthly_searches:    880, tier: "Tier 3", status: "not_used",  family: "custom-home-builders", is_base: false, variant_type: "Variant",            note: "Same family as 'custom home builders'; lower volume variant." },
    // ── FAMILY D2: residential contractor (base) — 1,900/mo — separate family from custom home builders ──
    { keyword: "residential contractor",            monthly_searches:   1900, tier: "Tier 3", status: "not_used",  family: "residential-contractor", is_base: true,  variant_type: null,                 note: "Separate family from 'custom home builders' — 'residential contractor' shares no root phrase with 'custom home builders'. Broader concept covering many trade types; not selected as TBC's branding focuses on custom home building and barndominiums." },

    // ── FAMILY E: barndominium builders (base) — 8,100/mo — SELECTED ───────────
    { keyword: "barndominium builders",             monthly_searches:   8100, tier: "Tier 1", status: "selected",  family: "barndominium-builders", is_base: true,  variant_type: null,                 note: "" },
    { keyword: "barndominium builder",              monthly_searches:   1000, tier: "Tier 1", status: "not_used",  family: "barndominium-builders", is_base: false, variant_type: "Singular Variant",   note: "Singular form of 'barndominium builders'; lower volume." },
    { keyword: "barndominium builders near me",     monthly_searches:   8100, tier: "Tier 1", status: "near_me",   family: "barndominium-builders", is_base: false, variant_type: "Near Me Variant",    note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },
    { keyword: "barndominium builder near me",      monthly_searches:    880, tier: "Tier 1", status: "near_me",   family: "barndominium-builders", is_base: false, variant_type: "Near Me Variant",    note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },
    { keyword: "barndo builders",                   monthly_searches:    880, tier: "Tier 1", status: "not_used",  family: "barndominium-builders", is_base: false, variant_type: "Short-Form Variant", note: "Short-form of 'barndominium builders'; lower volume." },
    { keyword: "barndo builders near me",           monthly_searches:   1000, tier: "Tier 1", status: "near_me",   family: "barndominium-builders", is_base: false, variant_type: "Near Me Variant",    note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },
    { keyword: "barndominium contractors",          monthly_searches:    880, tier: "Tier 1", status: "not_used",  family: "barndominium-builders", is_base: false, variant_type: "Variant",            note: "Same family as 'barndominium builders'; lower volume variant." },
    { keyword: "barndominium contractor",           monthly_searches:    210, tier: "Tier 1", status: "not_used",  family: "barndominium-builders", is_base: false, variant_type: "Variant",            note: "Same family as 'barndominium builders'; below 500/mo volume floor." },
    { keyword: "barndominium contractor near me",   monthly_searches:    210, tier: "Tier 1", status: "near_me",   family: "barndominium-builders", is_base: false, variant_type: "Near Me Variant",    note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },
    { keyword: "barndominium construction",         monthly_searches:    590, tier: "Tier 1", status: "not_used",  family: "barndominium-builders", is_base: false, variant_type: "Variant",            note: "Same family as 'barndominium builders'; lower volume variant." },
    { keyword: "barndominium company",              monthly_searches:   1300, tier: "Tier 1", status: "not_used",  family: "barndominium-builders", is_base: false, variant_type: "Variant",            note: "Same family as 'barndominium builders'; lower volume variant." },
    { keyword: "barndominium companies",            monthly_searches:    590, tier: "Tier 1", status: "not_used",  family: "barndominium-builders", is_base: false, variant_type: "Variant",            note: "Same family as 'barndominium builders'; lower volume variant." },
    { keyword: "barndominium home builders",        monthly_searches:    170, tier: "Tier 1", status: "not_used",  family: "barndominium-builders", is_base: false, variant_type: "Variant",            note: "Same family as 'barndominium builders'; below 500/mo volume floor." },
    { keyword: "barndominium general contractor",   monthly_searches:     30, tier: "Tier 1", status: "not_used",  family: "barndominium-builders", is_base: false, variant_type: "Variant",            note: "Same family as 'barndominium builders'; below 500/mo volume floor." },
    { keyword: "custom barndominium builders",      monthly_searches:    140, tier: "Tier 1", status: "not_used",  family: "barndominium-builders", is_base: false, variant_type: "Variant",            note: "Same family as 'barndominium builders'; below 500/mo volume floor." },
    { keyword: "barndominium construction near me", monthly_searches:     20, tier: "Tier 1", status: "near_me",   family: "barndominium-builders", is_base: false, variant_type: "Near Me Variant",    note: "City-name targeting in the URL slug and page title serves the same geographic function as 'near me'." },

    // ── FAMILY F: pole barn (out of scope) — not a listed TBC service ───────────
    { keyword: "pole barn",                         monthly_searches:  33100, tier: "Tier 4", status: "not_used",  family: "pole-barn",             is_base: true,  variant_type: null,                 note: "Out of scope: Texas Building Center does not list pole barn construction as a service." },
    { keyword: "pole barn house",                   monthly_searches:   5400, tier: "Tier 4", status: "not_used",  family: "pole-barn",             is_base: false, variant_type: "Variant",            note: "True variant of 'pole barn' (same root phrase); out of scope: not a listed TBC service." },
    { keyword: "pole barns",                        monthly_searches:   8100, tier: "Tier 4", status: "not_used",  family: "pole-barn",             is_base: false, variant_type: "Plural Variant",     note: "True variant of 'pole barn' (same root phrase); out of scope: not a listed TBC service." },
    { keyword: "pole barn builders",                monthly_searches:   2400, tier: "Tier 4", status: "not_used",  family: "pole-barn",             is_base: false, variant_type: "Variant",            note: "True variant of 'pole barn' (same root phrase); out of scope: not a listed TBC service." },
    { keyword: "pole barn builder",                 monthly_searches:   1300, tier: "Tier 4", status: "not_used",  family: "pole-barn",             is_base: false, variant_type: "Variant",            note: "True variant of 'pole barn' (same root phrase); out of scope: not a listed TBC service." },
    { keyword: "pole barn construction",            monthly_searches:   2900, tier: "Tier 4", status: "not_used",  family: "pole-barn",             is_base: false, variant_type: "Variant",            note: "True variant of 'pole barn' (same root phrase); out of scope: not a listed TBC service." },
    { keyword: "pole barn homes",                   monthly_searches:   2900, tier: "Tier 4", status: "not_used",  family: "pole-barn",             is_base: false, variant_type: "Variant",            note: "True variant of 'pole barn' (same root phrase); out of scope: not a listed TBC service." },
    { keyword: "pole barn houses",                  monthly_searches:   2900, tier: "Tier 4", status: "not_used",  family: "pole-barn",             is_base: false, variant_type: "Variant",            note: "True variant of 'pole barn' (same root phrase); out of scope: not a listed TBC service." },
    { keyword: "pole barn near me",                 monthly_searches:   1600, tier: "Tier 4", status: "near_me",   family: "pole-barn",             is_base: false, variant_type: "Near Me Variant",    note: "True variant of 'pole barn' (same root phrase); out of scope: not a listed TBC service." },

    // ── FAMILY F2: post frame (base) — separate family from pole barn ──
    { keyword: "post frame construction",           monthly_searches:   3600, tier: "Tier 4", status: "not_used",  family: "post-frame",            is_base: true,  variant_type: null,                 note: "Separate family from 'pole barn' — 'post frame' is a different root phrase and construction method term. Out of scope: not a listed TBC service." },
    { keyword: "post frame building",               monthly_searches:   3600, tier: "Tier 4", status: "not_used",  family: "post-frame",            is_base: false, variant_type: "Variant",            note: "True variant of 'post frame construction' (same root phrase); out of scope: not a listed TBC service." },
    { keyword: "post frame buildings",              monthly_searches:   1600, tier: "Tier 4", status: "not_used",  family: "post-frame",            is_base: false, variant_type: "Plural Variant",     note: "True variant of 'post frame construction' (same root phrase); out of scope: not a listed TBC service." },

    // ── FAMILY F3: shop house (base) — separate family from pole barn ──
    { keyword: "shop house",                        monthly_searches:   4400, tier: "Tier 4", status: "not_used",  family: "shop-house",            is_base: true,  variant_type: null,                 note: "Separate family from 'pole barn' — 'shop house' is a distinct concept (living space combined with workshop). Out of scope: not a listed TBC service." },

    // ── FAMILY F4: metal shop (base) — separate family from pole barn ──
    { keyword: "metal shop",                        monthly_searches:   4400, tier: "Tier 4", status: "not_used",  family: "metal-shop",            is_base: true,  variant_type: null,                 note: "Separate family from 'pole barn' — 'metal shop' shares no root phrase with 'pole barn'. Out of scope: not a listed TBC service." },

    // ── FAMILY F5: agricultural building (base) — separate family from pole barn ──
    { keyword: "agricultural building",             monthly_searches:   1600, tier: "Tier 4", status: "not_used",  family: "agricultural-building", is_base: true,  variant_type: null,                 note: "Separate family from 'pole barn' — 'agricultural building' is a broader category term, not a variant of 'pole barn'. Out of scope: not a listed TBC service." },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Barndominium (Anchor)",
      description: "The dominant keyword in Texas Building Center's primary service category. 'Barndominium' carries 246,000 monthly searches nationally — 30x the volume of the next keyword family. This is the Go Wide anchor: it is spread across all 10 confirmed service area cities to build maximum geographic presence for the highest-demand term in the Hill Country building market.",
      keywords: [
        { keyword: "barndominium",       monthly_searches: 246000 },
        { keyword: "barndominium plans", monthly_searches:  60500 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Barndominium Builders (Hire Intent)",
      description: "High-intent hire-focused keywords for the barndominium service line. Searchers using 'barndominium builders' are actively looking to hire a contractor, not just research. This keyword is distributed across the top 8 service area cities to capture ready-to-hire buyers throughout the Hill Country.",
      keywords: [
        { keyword: "barndominium builders", monthly_searches: 8100 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Custom Home Builders",
      description: "Custom home builder keywords represent a distinct service line with strong commercial intent. These terms capture buyers who may not yet know about barndominiums but are actively searching for a trusted local builder. Coverage of this service line ensures Texas Building Center captures the full spectrum of custom building demand across the Hill Country.",
      keywords: [
        { keyword: "custom home builders",          monthly_searches: 12100 },
        { keyword: "custom home builder",           monthly_searches: 14800 },
        { keyword: "custom homes",                  monthly_searches:  8100 },
        { keyword: "custom home construction",      monthly_searches:  1600 },
        { keyword: "custom home contractor",        monthly_searches:   880 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Metal Buildings",
      description: "Metal building keywords represent the third distinct service line, targeting commercial, agricultural, and residential buyers. 'Metal buildings' at 33,100 monthly searches is the highest-volume member of this family and is distributed across the top 7 service area cities.",
      keywords: [
        { keyword: "metal buildings",          monthly_searches: 33100 },
        { keyword: "metal building",           monthly_searches: 12100 },
        { keyword: "steel buildings",          monthly_searches: 14800 },
        { keyword: "metal building contractors",monthly_searches: 1600 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Lower-Volume Variant Family Members",
      description: "These keywords belong to the same variant families as the selected keywords but are lower-volume members of those families. Per the strategy rules, only the highest-volume member of each variant family receives a matrix slot. These terms will be captured organically as the selected pages rank for their primary keyword.",
      keywords: [
        { keyword: "barndominium floor plans",   monthly_searches:  33100 },
        { keyword: "barndominium homes",         monthly_searches:  12100 },
        { keyword: "barndo",                     monthly_searches:  14800 },
        { keyword: "barndominium kits",          monthly_searches:  40500 },
        { keyword: "barndo plans",               monthly_searches:   4400 },
        { keyword: "barndo floor plans",         monthly_searches:   2400 },
        { keyword: "barndominium builder",       monthly_searches:   1000 },
        { keyword: "barndominium company",       monthly_searches:   1300 },
        { keyword: "barndominium contractors",   monthly_searches:    880 },
        { keyword: "barndominium construction",  monthly_searches:    590 },
        { keyword: "custom home builder",        monthly_searches:  14800 },
        { keyword: "custom homes",               monthly_searches:   8100 },
        { keyword: "metal building",             monthly_searches:  12100 },
        { keyword: "steel buildings",            monthly_searches:  14800 },
      ]
    },
    {
      reason: "Near Me Variants: Covered by City Targeting",
      description: "These 'near me' variants are not included in the matrix because the city name appended to each keyword in the URL slug and page title serves the exact same geographic function. Including both would create redundant content targeting the same search intent.",
      keywords: [
        { keyword: "barndominium builders near me",  monthly_searches: 8100 },
        { keyword: "custom home builders near me",   monthly_searches: 9900 },
        { keyword: "barndominium near me",           monthly_searches: 1600 },
        { keyword: "custom home builder near me",    monthly_searches: 4400 },
        { keyword: "metal building near me",         monthly_searches: 2900 },
        { keyword: "barndo builders near me",        monthly_searches: 1000 },
      ]
    },
    {
      reason: "Out of Scope: Not a Listed Texas Building Center Service",
      description: "These keywords relate to pole barns, post-frame construction, and agricultural buildings. Texas Building Center's listed services are barndominiums, custom homes, and metal buildings. Targeting these terms would attract visitors with needs Texas Building Center does not serve.",
      keywords: [
        { keyword: "pole barn",             monthly_searches: 33100 },
        { keyword: "pole barns",            monthly_searches:  8100 },
        { keyword: "pole barn house",       monthly_searches:  5400 },
        { keyword: "shop house",            monthly_searches:  4400 },
        { keyword: "post frame construction",monthly_searches: 3600 },
        { keyword: "pole barn construction",monthly_searches:  2900 },
        { keyword: "pole barn builders",    monthly_searches:  2400 },
        { keyword: "pole barn builder",     monthly_searches:  1300 },
      ]
    },
    {
      reason: "Informational or Cost-Research Intent",
      description: "These keywords indicate a searcher who is researching costs, plans, or general information rather than actively looking to hire a builder. They are not suitable for service landing pages, which are designed to convert hire-intent visitors.",
      keywords: [
        { keyword: "barndominium cost",          monthly_searches: 5400 },
        { keyword: "barndominium price",         monthly_searches:  590 },
        { keyword: "building a barndominium",    monthly_searches: 1900 },
        { keyword: "barndominium with shop",     monthly_searches: 1000 },
        { keyword: "metal building cost",        monthly_searches: 1900 },
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
      headline: "Add Barndominium Floor Plans + Buchanan Lake Village",
      description: "Upgrading to Level D adds 10 additional keyword-city combinations. The most strategic next step is introducing 'barndominium floor plans' (33,100/mo) as a dedicated keyword across the top 8 markets — this is the highest-volume variant family member not yet in the plan. It also extends coverage into Buchanan Lake Village (pop. 1,100), a Lake Buchanan community with strong rural and lakefront building demand.",
      keywords: [
        { keyword: "barndominium floor plans", monthly_searches: 33100 },
        { keyword: "barndominium",             monthly_searches: 246000 },
        { keyword: "barndominium plans",       monthly_searches:  60500 },
        { keyword: "Buchanan Lake Village, TX",monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level E",
      combinations: 60,
      price: 699,
      additional_combinations: 20,
      headline: "Add Barndo + Bertram, Briggs & More Hill Country Towns",
      description: "Level E introduces 'barndo' (14,800/mo) as a secondary barndominium keyword across the top 8 markets, capturing searchers who use the informal short-form term. It also extends coverage into Bertram (pop. 900), Briggs, and additional Tier 3 service area communities, building a comprehensive Hill Country presence across the full confirmed service area.",
      keywords: [
        { keyword: "barndo",        monthly_searches: 14800 },
        { keyword: "Bertram, TX",   monthly_searches: null, new_market: true },
        { keyword: "Briggs, TX",    monthly_searches: null, new_market: true },
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
// Renders keywords grouped by variant family. Base keyword first, then variants
// (singular, plural, near me, short-form) as visually indented sub-rows.
// ============================================================
function buildKeywordTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;

  // Group by family, preserving insertion order (families already ordered by base volume)
  const families = [];
  const familyMap = {};
  STRATEGY.keyword_table.forEach(kw => {
    if (!familyMap[kw.family]) {
      familyMap[kw.family] = [];
      families.push(kw.family);
    }
    familyMap[kw.family].push(kw);
  });

  const rows = families.map(familyKey => {
    const members = familyMap[familyKey];
    // Sort: base first, then by monthly_searches desc
    members.sort((a, b) => {
      if (a.is_base && !b.is_base) return -1;
      if (!a.is_base && b.is_base) return 1;
      return b.monthly_searches - a.monthly_searches;
    });
    return members.map((kw, idx) => {
      const isVariant = !kw.is_base;
      const rowClass = [
        kw.status === 'selected' ? 'row-selected' : '',
        kw.status === 'near_me' ? 'row-near-me' : '',
        isVariant ? 'row-variant' : 'row-base'
      ].filter(Boolean).join(' ');
      const keywordCell = isVariant
        ? `<td class="kw-variant-cell"><span class="kw-variant-indent">&#8627;</span> ${kw.keyword} <span class="kw-variant-badge">${kw.variant_type}</span></td>`
        : `<td><strong>${kw.keyword}</strong></td>`;
      return `<tr class="${rowClass}">
        ${keywordCell}
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
// Go Wide: city-as-rows layout (keywords = columns, cities = rows)
// This orientation works cleanly for any number of cities.
// barndominium = 10 cities, barndominium plans = 8,
// barndominium builders = 8, custom home builders = 7,
// metal buildings = 7. Total = 40.
// ============================================================
function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  // All 10 confirmed service area cities used in the Go Wide matrix
  const allCities = [
    { city: "Marble Falls",      tier: "Tier 1", population: 10581, is_hq: false },
    { city: "Lampasas",          tier: "Tier 1", population:  8250, is_hq: false },
    { city: "Kingsland",         tier: "Tier 1", population:  7527, is_hq: false },
    { city: "Burnet",            tier: "Tier 1", population:  7065, is_hq: true  },
    { city: "Granite Shoals",    tier: "Tier 2", population:  5200, is_hq: false },
    { city: "Horseshoe Bay",     tier: "Tier 2", population:  4700, is_hq: false },
    { city: "Llano",             tier: "Tier 2", population:  3232, is_hq: false },
    { city: "Cottonwood Shores", tier: "Tier 2", population:  2200, is_hq: false },
    { city: "Johnson City",      tier: "Tier 2", population:  1800, is_hq: false },
    { city: "Sunrise Beach",     tier: "Tier 2", population:  1200, is_hq: false },
  ];

  // Per-keyword city assignments (Go Wide distribution)
  const keywordCities = {
    "barndominium":          allCities.slice(0, 10),
    "barndominium plans":    allCities.slice(0, 8),
    "barndominium builders": allCities.slice(0, 8),
    "custom home builders":  allCities.slice(0, 7),
    "metal buildings":       allCities.slice(0, 7),
  };
  const keywords = Object.keys(keywordCities);

  // ---- CITY-AS-ROWS LAYOUT ----
  // Header: City | Keyword1 | Keyword2 | ... | Total
  const kwHeaders = keywords.map(kw => {
    const count = keywordCities[kw].length;
    return `<th class="kw-col-header-v">${kw}<br><span class="kw-city-count">${count} cities</span></th>`;
  }).join('');
  thead.innerHTML = `<tr><th class="city-col-header">City</th>${kwHeaders}<th class="total-col-header">Total</th></tr>`;

  // City rows
  let grandTotal = 0;
  const rows = allCities.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : 't2';
    const cityLabel = `${m.city}${m.is_hq ? ' <span class="hq-star">&#9733;</span>' : ''}<br><span class="city-pop-small city-tier-inline"><span class="tier-pill ${tierCls} tier-pill-sm">${m.tier.toUpperCase()}</span> Pop. ${fmt(m.population)}</span>`;
    const kwCells = keywords.map(kw => {
      const inPlan = keywordCities[kw].some(c => c.city === m.city);
      return inPlan
        ? `<td class="check-cell matrix-check">&#10003;</td>`
        : `<td class="check-cell check-na">&#8212;</td>`;
    }).join('');
    const cityTotal = keywords.filter(kw => keywordCities[kw].some(c => c.city === m.city)).length;
    grandTotal += cityTotal;
    return `<tr><td class="city-row-label">${cityLabel}</td>${kwCells}<td class="total-cell city-total-cell">${cityTotal}</td></tr>`;
  }).join('');

  // Keyword totals row
  const kwTotals = keywords.map(kw => `<td class="total-cell">${keywordCities[kw].length}</td>`).join('');
  tbody.innerHTML = rows
    + `<tr class="total-row"><td class="total-label">Combos per Keyword</td>${kwTotals}<td class="total-cell grand-total-cell">${grandTotal}</td></tr>`;
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
      <div class="opp-price">$${fmt(opp.price)}<span class="opp-price-label">/mo</span></div>
      <div class="opp-combos">${opp.combinations} total combinations &middot; ${opp.additional_combinations} additional from current plan</div>
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
  { rank: 5,  city: 'Granite Shoals',       pop:   5200, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 6,  city: 'Horseshoe Bay',        pop:   4700, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 7,  city: 'Llano',               pop:   3232, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 8,  city: 'Cottonwood Shores',    pop:   2200, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 9,  city: 'Johnson City',         pop:   1800, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 10, city: 'Sunrise Beach',        pop:   1200, tier: 'Tier 2', selected: true,  hq: false },
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

  const keywordCities = {
    "barndominium":          ["Marble Falls","Lampasas","Kingsland","Burnet","Granite Shoals","Horseshoe Bay","Llano","Cottonwood Shores","Johnson City","Sunrise Beach"],
    "barndominium plans":    ["Marble Falls","Lampasas","Kingsland","Burnet","Granite Shoals","Horseshoe Bay","Llano","Cottonwood Shores"],
    "barndominium builders": ["Marble Falls","Lampasas","Kingsland","Burnet","Granite Shoals","Horseshoe Bay","Llano","Cottonwood Shores"],
    "custom home builders":  ["Marble Falls","Lampasas","Kingsland","Burnet","Granite Shoals","Horseshoe Bay","Llano"],
    "metal buildings":       ["Marble Falls","Lampasas","Kingsland","Burnet","Granite Shoals","Horseshoe Bay","Llano"],
  };

  const allCities = [
    { city: "Marble Falls",      tier: "Tier 1", pop: 10581, is_hq: false },
    { city: "Lampasas",          tier: "Tier 1", pop:  8250, is_hq: false },
    { city: "Kingsland",         tier: "Tier 1", pop:  7527, is_hq: false },
    { city: "Burnet",            tier: "Tier 1", pop:  7065, is_hq: true  },
    { city: "Granite Shoals",    tier: "Tier 2", pop:  5200, is_hq: false },
    { city: "Horseshoe Bay",     tier: "Tier 2", pop:  4700, is_hq: false },
    { city: "Llano",             tier: "Tier 2", pop:  3232, is_hq: false },
    { city: "Cottonwood Shores", tier: "Tier 2", pop:  2200, is_hq: false },
    { city: "Johnson City",      tier: "Tier 2", pop:  1800, is_hq: false },
    { city: "Sunrise Beach",     tier: "Tier 2", pop:  1200, is_hq: false },
  ];

  const cards = allCities.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : 't2';
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const kwList = Object.entries(keywordCities)
      .filter(([, cities]) => cities.includes(m.city))
      .map(([kw]) => `<div class="mob-matrix-kw"><span class="mob-matrix-check">&#10003;</span><span>${kw}</span></div>`)
      .join('');
    const count = Object.values(keywordCities).filter(cities => cities.includes(m.city)).length;
    return `<div class="mob-matrix-card">
      <div class="mob-matrix-city">
        <span class="mob-matrix-city-name">${cityLabel}</span>
        <span class="mob-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp; Pop. ${fmt(m.pop)}</span>
      </div>
      <div class="mob-matrix-kws">${kwList}</div>
      <div class="mob-matrix-total">${count} combinations</div>
    </div>`;
  }).join('');

  el.innerHTML = cards + `<div class="mob-matrix-grand-total">Grand Total: <strong>40 Combinations</strong></div>`;
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
