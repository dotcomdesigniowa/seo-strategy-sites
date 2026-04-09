// ============================================================
// DOTCOM DESIGN — SEO Strategy Website App.js
// Plan Level H: 150 keyword combinations
// Nationwide strategy: no city/state combos
// Matrix: organized by trade vertical
// ============================================================

const STRATEGY = {
  client_name: "Dotcom Design",
  industry: "Website Design & Digital Marketing",
  hq_city: "Iowa City",
  state: "IA",
  service_area: "Nationwide / USA",
  plan_level: "Level H",
  plan_price: 4800,
  total_combinations: 150,
  total_keywords_researched: 153,

  // ---- SELECTED KEYWORDS: 150 total ----
  // Organized by trade vertical for the matrix section
  // Each keyword = 1 standalone nationwide page target

  keyword_table: [
    // TIER 1: SEO for Trades
    { keyword: "seo for plumbers",                     monthly_searches: 2900, tier: "Tier 1", vertical: "Plumbing",           status: "selected" },
    { keyword: "electrician seo",                      monthly_searches: 2900, tier: "Tier 1", vertical: "Electrical",         status: "selected" },
    { keyword: "seo for electricians",                 monthly_searches: 2900, tier: "Tier 1", vertical: "Electrical",         status: "selected" },
    { keyword: "hvac seo",                             monthly_searches: 2900, tier: "Tier 1", vertical: "HVAC",               status: "selected" },
    { keyword: "roofing seo",                          monthly_searches: 2900, tier: "Tier 1", vertical: "Roofing",            status: "selected" },
    { keyword: "plumber seo",                          monthly_searches: 2400, tier: "Tier 1", vertical: "Plumbing",           status: "selected" },
    { keyword: "plumbing seo",                         monthly_searches: 1300, tier: "Tier 1", vertical: "Plumbing",           status: "selected" },
    { keyword: "pest control seo",                     monthly_searches: 1300, tier: "Tier 1", vertical: "Pest Control",       status: "selected" },
    { keyword: "landscaping seo",                      monthly_searches: 1300, tier: "Tier 1", vertical: "Landscaping",        status: "selected" },
    { keyword: "seo for roofing companies",            monthly_searches: 1300, tier: "Tier 1", vertical: "Roofing",            status: "selected" },
    { keyword: "seo for hvac companies",               monthly_searches: 1300, tier: "Tier 1", vertical: "HVAC",               status: "selected" },
    { keyword: "seo for pest control",                 monthly_searches:  880, tier: "Tier 1", vertical: "Pest Control",       status: "selected" },
    { keyword: "seo for general contractors",          monthly_searches:  720, tier: "Tier 1", vertical: "General Contractor",  status: "selected" },
    { keyword: "general contractor seo",               monthly_searches:  720, tier: "Tier 1", vertical: "General Contractor",  status: "selected" },
    { keyword: "seo for home services",                monthly_searches:  590, tier: "Tier 1", vertical: "Home Services",      status: "selected" },
    { keyword: "seo for flooring companies",           monthly_searches:  480, tier: "Tier 1", vertical: "Flooring",           status: "selected" },
    { keyword: "tree service seo",                     monthly_searches:  390, tier: "Tier 1", vertical: "Tree Service",       status: "selected" },
    { keyword: "lawn care seo",                        monthly_searches:  390, tier: "Tier 1", vertical: "Landscaping",        status: "selected" },
    { keyword: "seo for landscaping companies",        monthly_searches:  320, tier: "Tier 1", vertical: "Landscaping",        status: "selected" },
    { keyword: "remodeling seo",                       monthly_searches:  260, tier: "Tier 1", vertical: "Remodeling",         status: "selected" },
    { keyword: "flooring seo",                         monthly_searches:  260, tier: "Tier 1", vertical: "Flooring",           status: "selected" },
    { keyword: "seo for cleaning companies",           monthly_searches:  210, tier: "Tier 1", vertical: "Cleaning",           status: "selected" },
    { keyword: "seo for painting companies",           monthly_searches:  210, tier: "Tier 1", vertical: "Painting",           status: "selected" },
    { keyword: "seo for remodeling companies",         monthly_searches:  210, tier: "Tier 1", vertical: "Remodeling",         status: "selected" },
    { keyword: "seo for home improvement",             monthly_searches:  210, tier: "Tier 1", vertical: "Home Services",      status: "selected" },
    { keyword: "painting seo",                         monthly_searches:  140, tier: "Tier 1", vertical: "Painting",           status: "selected" },
    { keyword: "handyman seo",                         monthly_searches:   50, tier: "Tier 1", vertical: "Handyman",           status: "selected" },
    { keyword: "seo for concrete companies",           monthly_searches:   70, tier: "Tier 1", vertical: "Concrete",           status: "selected" },
    { keyword: "cleaning seo",                         monthly_searches:   90, tier: "Tier 1", vertical: "Cleaning",           status: "selected" },
    { keyword: "seo for fence companies",              monthly_searches:   40, tier: "Tier 1", vertical: "Fencing",            status: "selected" },
    { keyword: "seo for tree service",                 monthly_searches:   20, tier: "Tier 1", vertical: "Tree Service",       status: "selected" },

    // TIER 2: Digital Marketing for Trades
    { keyword: "construction marketing agency",        monthly_searches: 1900, tier: "Tier 2", vertical: "Construction",       status: "selected" },
    { keyword: "hvac marketing",                       monthly_searches: 2400, tier: "Tier 2", vertical: "HVAC",               status: "selected" },
    { keyword: "hvac digital marketing",               monthly_searches: 1600, tier: "Tier 2", vertical: "HVAC",               status: "selected" },
    { keyword: "hvac marketing company",               monthly_searches: 1300, tier: "Tier 2", vertical: "HVAC",               status: "selected" },
    { keyword: "home services marketing agency",       monthly_searches: 1300, tier: "Tier 2", vertical: "Home Services",      status: "selected" },
    { keyword: "digital marketing for contractors",    monthly_searches: 1300, tier: "Tier 2", vertical: "General Contractor",  status: "selected" },
    { keyword: "digital marketing for construction companies", monthly_searches: 1000, tier: "Tier 2", vertical: "Construction", status: "selected" },
    { keyword: "contractor marketing agency",          monthly_searches: 1000, tier: "Tier 2", vertical: "General Contractor",  status: "selected" },
    { keyword: "roofing marketing",                    monthly_searches: 1000, tier: "Tier 2", vertical: "Roofing",            status: "selected" },
    { keyword: "home services digital marketing",      monthly_searches: 1000, tier: "Tier 2", vertical: "Home Services",      status: "selected" },
    { keyword: "pest control marketing",               monthly_searches: 1000, tier: "Tier 2", vertical: "Pest Control",       status: "selected" },
    { keyword: "plumber marketing",                    monthly_searches: 1000, tier: "Tier 2", vertical: "Plumbing",           status: "selected" },
    { keyword: "marketing for plumbers",               monthly_searches:  880, tier: "Tier 2", vertical: "Plumbing",           status: "selected" },
    { keyword: "home improvement marketing",           monthly_searches:  880, tier: "Tier 2", vertical: "Home Services",      status: "selected" },
    { keyword: "plumbing marketing",                   monthly_searches:  880, tier: "Tier 2", vertical: "Plumbing",           status: "selected" },
    { keyword: "electrician marketing",                monthly_searches:  720, tier: "Tier 2", vertical: "Electrical",         status: "selected" },
    { keyword: "marketing for hvac companies",         monthly_searches:  720, tier: "Tier 2", vertical: "HVAC",               status: "selected" },
    { keyword: "lawn care marketing",                  monthly_searches:  720, tier: "Tier 2", vertical: "Landscaping",        status: "selected" },
    { keyword: "roofing digital marketing",            monthly_searches:  590, tier: "Tier 2", vertical: "Roofing",            status: "selected" },
    { keyword: "landscaping digital marketing",        monthly_searches:  590, tier: "Tier 2", vertical: "Landscaping",        status: "selected" },
    { keyword: "landscaping marketing",                monthly_searches:  590, tier: "Tier 2", vertical: "Landscaping",        status: "selected" },
    { keyword: "marketing for electricians",           monthly_searches:  590, tier: "Tier 2", vertical: "Electrical",         status: "selected" },
    { keyword: "home remodeling marketing",            monthly_searches:  590, tier: "Tier 2", vertical: "Remodeling",         status: "selected" },
    { keyword: "electrician digital marketing",        monthly_searches:  590, tier: "Tier 2", vertical: "Electrical",         status: "selected" },
    { keyword: "marketing for landscapers",            monthly_searches:  590, tier: "Tier 2", vertical: "Landscaping",        status: "selected" },
    { keyword: "tree service marketing",               monthly_searches:  480, tier: "Tier 2", vertical: "Tree Service",       status: "selected" },
    { keyword: "remodeling marketing",                 monthly_searches:  480, tier: "Tier 2", vertical: "Remodeling",         status: "selected" },
    { keyword: "marketing for roofers",                monthly_searches:  480, tier: "Tier 2", vertical: "Roofing",            status: "selected" },
    { keyword: "general contractor marketing",         monthly_searches:  480, tier: "Tier 2", vertical: "General Contractor",  status: "selected" },
    { keyword: "general contractor digital marketing", monthly_searches:  390, tier: "Tier 2", vertical: "General Contractor",  status: "selected" },
    { keyword: "marketing for remodelers",             monthly_searches:  390, tier: "Tier 2", vertical: "Remodeling",         status: "selected" },
    { keyword: "marketing agency for contractors",     monthly_searches:  390, tier: "Tier 2", vertical: "General Contractor",  status: "selected" },
    { keyword: "roofing marketing company",            monthly_searches:  260, tier: "Tier 2", vertical: "Roofing",            status: "selected" },
    { keyword: "fence company marketing",              monthly_searches:  320, tier: "Tier 2", vertical: "Fencing",            status: "selected" },
    { keyword: "flooring marketing",                   monthly_searches:  210, tier: "Tier 2", vertical: "Flooring",           status: "selected" },
    { keyword: "painter marketing",                    monthly_searches:  210, tier: "Tier 2", vertical: "Painting",           status: "selected" },
    { keyword: "marketing for painters",               monthly_searches:  210, tier: "Tier 2", vertical: "Painting",           status: "selected" },
    { keyword: "marketing for pest control companies", monthly_searches:  210, tier: "Tier 2", vertical: "Pest Control",       status: "selected" },
    { keyword: "handyman marketing",                   monthly_searches:  140, tier: "Tier 2", vertical: "Handyman",           status: "selected" },
    { keyword: "concrete marketing",                   monthly_searches:  110, tier: "Tier 2", vertical: "Concrete",           status: "selected" },
    { keyword: "cleaning service marketing",           monthly_searches:  110, tier: "Tier 2", vertical: "Cleaning",           status: "selected" },
    { keyword: "cleaning company marketing",           monthly_searches:  110, tier: "Tier 2", vertical: "Cleaning",           status: "selected" },
    { keyword: "painting company marketing",           monthly_searches:   70, tier: "Tier 2", vertical: "Painting",           status: "selected" },
    { keyword: "fencing marketing",                    monthly_searches:   50, tier: "Tier 2", vertical: "Fencing",            status: "selected" },
    { keyword: "marketing for tree service companies", monthly_searches:   70, tier: "Tier 2", vertical: "Tree Service",       status: "selected" },
    { keyword: "marketing for cleaning companies",     monthly_searches:   10, tier: "Tier 2", vertical: "Cleaning",           status: "selected" },
    { keyword: "marketing for flooring companies",     monthly_searches:   10, tier: "Tier 2", vertical: "Flooring",           status: "selected" },
    { keyword: "marketing agency for home services",   monthly_searches:   30, tier: "Tier 2", vertical: "Home Services",      status: "selected" },

    // TIER 3: Website Design for Trades
    { keyword: "contractor website design",            monthly_searches: 1000, tier: "Tier 3", vertical: "General Contractor",  status: "selected" },
    { keyword: "construction website design",          monthly_searches: 1000, tier: "Tier 3", vertical: "Construction",       status: "selected" },
    { keyword: "hvac website design",                  monthly_searches: 1000, tier: "Tier 3", vertical: "HVAC",               status: "selected" },
    { keyword: "contractor web design",                monthly_searches:  880, tier: "Tier 3", vertical: "General Contractor",  status: "selected" },
    { keyword: "contractor websites",                  monthly_searches:  880, tier: "Tier 3", vertical: "General Contractor",  status: "selected" },
    { keyword: "construction web design",              monthly_searches:  720, tier: "Tier 3", vertical: "Construction",       status: "selected" },
    { keyword: "roofing website design",               monthly_searches:  720, tier: "Tier 3", vertical: "Roofing",            status: "selected" },
    { keyword: "handyman websites",                    monthly_searches:  720, tier: "Tier 3", vertical: "Handyman",           status: "selected" },
    { keyword: "website design for contractors",       monthly_searches:  590, tier: "Tier 3", vertical: "General Contractor",  status: "selected" },
    { keyword: "hvac web design",                      monthly_searches:  590, tier: "Tier 3", vertical: "HVAC",               status: "selected" },
    { keyword: "plumbing website design",              monthly_searches:  480, tier: "Tier 3", vertical: "Plumbing",           status: "selected" },
    { keyword: "general contractor website design",    monthly_searches:  480, tier: "Tier 3", vertical: "General Contractor",  status: "selected" },
    { keyword: "electrician website design",           monthly_searches:  480, tier: "Tier 3", vertical: "Electrical",         status: "selected" },
    { keyword: "roofing web design",                   monthly_searches:  480, tier: "Tier 3", vertical: "Roofing",            status: "selected" },
    { keyword: "plumber website design",               monthly_searches:  390, tier: "Tier 3", vertical: "Plumbing",           status: "selected" },
    { keyword: "landscaping website design",           monthly_searches:  390, tier: "Tier 3", vertical: "Landscaping",        status: "selected" },
    { keyword: "construction company website design",  monthly_searches:  390, tier: "Tier 3", vertical: "Construction",       status: "selected" },
    { keyword: "electrician web design",               monthly_searches:  320, tier: "Tier 3", vertical: "Electrical",         status: "selected" },
    { keyword: "landscaping web design",               monthly_searches:  260, tier: "Tier 3", vertical: "Landscaping",        status: "selected" },
    { keyword: "lawn care website design",             monthly_searches:  260, tier: "Tier 3", vertical: "Landscaping",        status: "selected" },
    { keyword: "home services web design",             monthly_searches:  260, tier: "Tier 3", vertical: "Home Services",      status: "selected" },
    { keyword: "home services website design",         monthly_searches:  210, tier: "Tier 3", vertical: "Home Services",      status: "selected" },
    { keyword: "plumber web design",                   monthly_searches:  210, tier: "Tier 3", vertical: "Plumbing",           status: "selected" },
    { keyword: "pest control website design",          monthly_searches:  210, tier: "Tier 3", vertical: "Pest Control",       status: "selected" },
    { keyword: "pest control web design",              monthly_searches:  210, tier: "Tier 3", vertical: "Pest Control",       status: "selected" },
    { keyword: "home improvement website design",      monthly_searches:  170, tier: "Tier 3", vertical: "Home Services",      status: "selected" },
    { keyword: "home remodeling website design",       monthly_searches:  170, tier: "Tier 3", vertical: "Remodeling",         status: "selected" },
    { keyword: "flooring website design",              monthly_searches:  170, tier: "Tier 3", vertical: "Flooring",           status: "selected" },
    { keyword: "plumbing web design",                  monthly_searches:  140, tier: "Tier 3", vertical: "Plumbing",           status: "selected" },
    { keyword: "tree service website design",          monthly_searches:  140, tier: "Tier 3", vertical: "Tree Service",       status: "selected" },
    { keyword: "cleaning service website design",      monthly_searches:  140, tier: "Tier 3", vertical: "Cleaning",           status: "selected" },
    { keyword: "cleaning company website design",      monthly_searches:  140, tier: "Tier 3", vertical: "Cleaning",           status: "selected" },
    { keyword: "electrical contractor website",        monthly_searches:  140, tier: "Tier 3", vertical: "Electrical",         status: "selected" },
    { keyword: "roofer website design",                monthly_searches:  140, tier: "Tier 3", vertical: "Roofing",            status: "selected" },
    { keyword: "cleaning website design",              monthly_searches:  110, tier: "Tier 3", vertical: "Cleaning",           status: "selected" },
    { keyword: "painting company website design",      monthly_searches:  110, tier: "Tier 3", vertical: "Painting",           status: "selected" },
    { keyword: "handyman website design",              monthly_searches:  110, tier: "Tier 3", vertical: "Handyman",           status: "selected" },
    { keyword: "construction website company",         monthly_searches:  110, tier: "Tier 3", vertical: "Construction",       status: "selected" },
    { keyword: "painting contractor website",          monthly_searches:   90, tier: "Tier 3", vertical: "Painting",           status: "selected" },
    { keyword: "landscaper website design",            monthly_searches:   90, tier: "Tier 3", vertical: "Landscaping",        status: "selected" },
    { keyword: "contractor website builder",           monthly_searches:   90, tier: "Tier 3", vertical: "General Contractor",  status: "selected" },
    { keyword: "roofing company website",              monthly_searches:   90, tier: "Tier 3", vertical: "Roofing",            status: "selected" },
    { keyword: "flooring web design",                  monthly_searches:   90, tier: "Tier 3", vertical: "Flooring",           status: "selected" },
    { keyword: "handyman web design",                  monthly_searches:   90, tier: "Tier 3", vertical: "Handyman",           status: "selected" },
    { keyword: "general contractor web design",        monthly_searches:   70, tier: "Tier 3", vertical: "General Contractor",  status: "selected" },
    { keyword: "remodeling website design",            monthly_searches:   70, tier: "Tier 3", vertical: "Remodeling",         status: "selected" },
    { keyword: "concrete contractor website design",   monthly_searches:   50, tier: "Tier 3", vertical: "Concrete",           status: "selected" },
    { keyword: "plumbing company website",             monthly_searches:   50, tier: "Tier 3", vertical: "Plumbing",           status: "selected" },
    { keyword: "tree service web design",              monthly_searches:   50, tier: "Tier 3", vertical: "Tree Service",       status: "selected" },
    { keyword: "painting website design",              monthly_searches:   40, tier: "Tier 3", vertical: "Painting",           status: "selected" },
    { keyword: "landscaping company website",          monthly_searches:   40, tier: "Tier 3", vertical: "Landscaping",        status: "selected" },

    // TIER 4: Lead Generation, PPC & Other Digital Services
    { keyword: "google ads for contractors",           monthly_searches:  320, tier: "Tier 4", vertical: "General Contractor",  status: "selected" },
    { keyword: "ppc for contractors",                  monthly_searches:  320, tier: "Tier 4", vertical: "General Contractor",  status: "selected" },
    { keyword: "ppc for home services",                monthly_searches:  320, tier: "Tier 4", vertical: "Home Services",      status: "selected" },
    { keyword: "lead generation for contractors",      monthly_searches:  320, tier: "Tier 4", vertical: "General Contractor",  status: "selected" },
    { keyword: "marketing for general contractors",    monthly_searches:  320, tier: "Tier 4", vertical: "General Contractor",  status: "selected" },
    { keyword: "plumbing digital marketing",           monthly_searches:  260, tier: "Tier 4", vertical: "Plumbing",           status: "selected" },
    { keyword: "lead generation for home services",    monthly_searches:  110, tier: "Tier 4", vertical: "Home Services",      status: "selected" },
    { keyword: "google ads for home services",         monthly_searches:   30, tier: "Tier 4", vertical: "Home Services",      status: "selected" },
    { keyword: "painting web design",                  monthly_searches:   30, tier: "Tier 4", vertical: "Painting",           status: "selected" },
    { keyword: "painter website design",               monthly_searches:   30, tier: "Tier 4", vertical: "Painting",           status: "selected" },
    { keyword: "trades website design",                monthly_searches:   20, tier: "Tier 4", vertical: "General Contractor",  status: "selected" },
    { keyword: "flooring company website",             monthly_searches:   20, tier: "Tier 4", vertical: "Flooring",           status: "selected" },
    { keyword: "remodeling web design",                monthly_searches:   20, tier: "Tier 4", vertical: "Remodeling",         status: "selected" },
    { keyword: "masonry website design",               monthly_searches:   20, tier: "Tier 4", vertical: "Concrete",           status: "selected" },
    { keyword: "cleaning web design",                  monthly_searches:   20, tier: "Tier 4", vertical: "Cleaning",           status: "selected" },
    { keyword: "pest control company website",         monthly_searches:   20, tier: "Tier 4", vertical: "Pest Control",       status: "selected" },
    { keyword: "hvac website company",                 monthly_searches:   10, tier: "Tier 4", vertical: "HVAC",               status: "selected" },
    { keyword: "remodeling company website",           monthly_searches:   10, tier: "Tier 4", vertical: "Remodeling",         status: "selected" },
    { keyword: "renovation website design",            monthly_searches:   10, tier: "Tier 4", vertical: "Remodeling",         status: "selected" },
    { keyword: "fence company website design",         monthly_searches:   10, tier: "Tier 4", vertical: "Fencing",            status: "selected" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "SEO for Trades",
      description: "Business owners searching for SEO services for their specific trade. These are the highest-intent keywords in the plan: a plumber searching for 'seo for plumbers' or a roofer searching for 'roofing seo' is actively looking to hire an SEO agency right now. These 31 keywords span every major trade vertical and form the backbone of the strategy.",
      keywords: [
        { keyword: "seo for plumbers",              monthly_searches: 2900 },
        { keyword: "electrician seo",               monthly_searches: 2900 },
        { keyword: "seo for electricians",          monthly_searches: 2900 },
        { keyword: "hvac seo",                      monthly_searches: 2900 },
        { keyword: "roofing seo",                   monthly_searches: 2900 },
        { keyword: "plumber seo",                   monthly_searches: 2400 },
        { keyword: "plumbing seo",                  monthly_searches: 1300 },
        { keyword: "pest control seo",              monthly_searches: 1300 },
        { keyword: "landscaping seo",               monthly_searches: 1300 },
        { keyword: "seo for roofing companies",     monthly_searches: 1300 },
        { keyword: "seo for hvac companies",        monthly_searches: 1300 },
        { keyword: "seo for pest control",          monthly_searches:  880 },
        { keyword: "seo for general contractors",   monthly_searches:  720 },
        { keyword: "general contractor seo",        monthly_searches:  720 },
        { keyword: "seo for home services",         monthly_searches:  590 },
        { keyword: "seo for flooring companies",    monthly_searches:  480 },
        { keyword: "tree service seo",              monthly_searches:  390 },
        { keyword: "lawn care seo",                 monthly_searches:  390 },
        { keyword: "seo for landscaping companies", monthly_searches:  320 },
        { keyword: "remodeling seo",                monthly_searches:  260 },
        { keyword: "flooring seo",                  monthly_searches:  260 },
        { keyword: "seo for cleaning companies",    monthly_searches:  210 },
        { keyword: "seo for painting companies",    monthly_searches:  210 },
        { keyword: "seo for remodeling companies",  monthly_searches:  210 },
        { keyword: "seo for home improvement",      monthly_searches:  210 },
        { keyword: "painting seo",                  monthly_searches:  140 },
        { keyword: "cleaning seo",                  monthly_searches:   90 },
        { keyword: "handyman seo",                  monthly_searches:   50 },
        { keyword: "seo for concrete companies",    monthly_searches:   70 },
        { keyword: "seo for fence companies",       monthly_searches:   40 },
        { keyword: "seo for tree service",          monthly_searches:   20 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Digital Marketing for Trades",
      description: "Business owners searching for digital marketing agencies, marketing companies, and marketing services for their specific trade. These 48 keywords capture contractors who are ready to invest in a broader marketing relationship, not just SEO. High commercial intent with strong conversion potential.",
      keywords: [
        { keyword: "construction marketing agency",        monthly_searches: 1900 },
        { keyword: "hvac marketing",                       monthly_searches: 2400 },
        { keyword: "hvac digital marketing",               monthly_searches: 1600 },
        { keyword: "hvac marketing company",               monthly_searches: 1300 },
        { keyword: "home services marketing agency",       monthly_searches: 1300 },
        { keyword: "digital marketing for contractors",    monthly_searches: 1300 },
        { keyword: "digital marketing for construction companies", monthly_searches: 1000 },
        { keyword: "contractor marketing agency",          monthly_searches: 1000 },
        { keyword: "roofing marketing",                    monthly_searches: 1000 },
        { keyword: "home services digital marketing",      monthly_searches: 1000 },
        { keyword: "pest control marketing",               monthly_searches: 1000 },
        { keyword: "plumber marketing",                    monthly_searches: 1000 },
        { keyword: "marketing for plumbers",               monthly_searches:  880 },
        { keyword: "home improvement marketing",           monthly_searches:  880 },
        { keyword: "plumbing marketing",                   monthly_searches:  880 },
        { keyword: "electrician marketing",                monthly_searches:  720 },
        { keyword: "marketing for hvac companies",         monthly_searches:  720 },
        { keyword: "lawn care marketing",                  monthly_searches:  720 },
        { keyword: "roofing digital marketing",            monthly_searches:  590 },
        { keyword: "landscaping digital marketing",        monthly_searches:  590 },
        { keyword: "landscaping marketing",                monthly_searches:  590 },
        { keyword: "marketing for electricians",           monthly_searches:  590 },
        { keyword: "home remodeling marketing",            monthly_searches:  590 },
        { keyword: "electrician digital marketing",        monthly_searches:  590 },
        { keyword: "marketing for landscapers",            monthly_searches:  590 },
        { keyword: "tree service marketing",               monthly_searches:  480 },
        { keyword: "remodeling marketing",                 monthly_searches:  480 },
        { keyword: "marketing for roofers",                monthly_searches:  480 },
        { keyword: "general contractor marketing",         monthly_searches:  480 },
        { keyword: "general contractor digital marketing", monthly_searches:  390 },
        { keyword: "marketing for remodelers",             monthly_searches:  390 },
        { keyword: "marketing agency for contractors",     monthly_searches:  390 },
        { keyword: "roofing marketing company",            monthly_searches:  260 },
        { keyword: "fence company marketing",              monthly_searches:  320 },
        { keyword: "flooring marketing",                   monthly_searches:  210 },
        { keyword: "painter marketing",                    monthly_searches:  210 },
        { keyword: "marketing for painters",               monthly_searches:  210 },
        { keyword: "marketing for pest control companies", monthly_searches:  210 },
        { keyword: "handyman marketing",                   monthly_searches:  140 },
        { keyword: "concrete marketing",                   monthly_searches:  110 },
        { keyword: "cleaning service marketing",           monthly_searches:  110 },
        { keyword: "cleaning company marketing",           monthly_searches:  110 },
        { keyword: "painting company marketing",           monthly_searches:   70 },
        { keyword: "fencing marketing",                    monthly_searches:   50 },
        { keyword: "marketing for tree service companies", monthly_searches:   70 },
        { keyword: "marketing for cleaning companies",     monthly_searches:   10 },
        { keyword: "marketing for flooring companies",     monthly_searches:   10 },
        { keyword: "marketing agency for home services",   monthly_searches:   30 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Website Design for Trades",
      description: "Business owners searching for website design companies, web designers, and website builders for their specific trade. These 51 keywords target contractors who are in the market for a new website. This is Dotcom Design's core service offering and represents the largest keyword group in the plan.",
      keywords: [
        { keyword: "contractor website design",           monthly_searches: 1000 },
        { keyword: "construction website design",         monthly_searches: 1000 },
        { keyword: "hvac website design",                 monthly_searches: 1000 },
        { keyword: "contractor web design",               monthly_searches:  880 },
        { keyword: "contractor websites",                 monthly_searches:  880 },
        { keyword: "construction web design",             monthly_searches:  720 },
        { keyword: "roofing website design",              monthly_searches:  720 },
        { keyword: "handyman websites",                   monthly_searches:  720 },
        { keyword: "website design for contractors",      monthly_searches:  590 },
        { keyword: "hvac web design",                     monthly_searches:  590 },
        { keyword: "plumbing website design",             monthly_searches:  480 },
        { keyword: "general contractor website design",   monthly_searches:  480 },
        { keyword: "electrician website design",          monthly_searches:  480 },
        { keyword: "roofing web design",                  monthly_searches:  480 },
        { keyword: "plumber website design",              monthly_searches:  390 },
        { keyword: "landscaping website design",          monthly_searches:  390 },
        { keyword: "construction company website design", monthly_searches:  390 },
        { keyword: "electrician web design",              monthly_searches:  320 },
        { keyword: "landscaping web design",              monthly_searches:  260 },
        { keyword: "lawn care website design",            monthly_searches:  260 },
        { keyword: "home services web design",            monthly_searches:  260 },
        { keyword: "home services website design",        monthly_searches:  210 },
        { keyword: "plumber web design",                  monthly_searches:  210 },
        { keyword: "pest control website design",         monthly_searches:  210 },
        { keyword: "pest control web design",             monthly_searches:  210 },
        { keyword: "home improvement website design",     monthly_searches:  170 },
        { keyword: "home remodeling website design",      monthly_searches:  170 },
        { keyword: "flooring website design",             monthly_searches:  170 },
        { keyword: "plumbing web design",                 monthly_searches:  140 },
        { keyword: "tree service website design",         monthly_searches:  140 },
        { keyword: "cleaning service website design",     monthly_searches:  140 },
        { keyword: "cleaning company website design",     monthly_searches:  140 },
        { keyword: "electrical contractor website",       monthly_searches:  140 },
        { keyword: "roofer website design",               monthly_searches:  140 },
        { keyword: "cleaning website design",             monthly_searches:  110 },
        { keyword: "painting company website design",     monthly_searches:  110 },
        { keyword: "handyman website design",             monthly_searches:  110 },
        { keyword: "construction website company",        monthly_searches:  110 },
        { keyword: "painting contractor website",         monthly_searches:   90 },
        { keyword: "landscaper website design",           monthly_searches:   90 },
        { keyword: "contractor website builder",          monthly_searches:   90 },
        { keyword: "roofing company website",             monthly_searches:   90 },
        { keyword: "flooring web design",                 monthly_searches:   90 },
        { keyword: "handyman web design",                 monthly_searches:   90 },
        { keyword: "general contractor web design",       monthly_searches:   70 },
        { keyword: "remodeling website design",           monthly_searches:   70 },
        { keyword: "concrete contractor website design",  monthly_searches:   50 },
        { keyword: "plumbing company website",            monthly_searches:   50 },
        { keyword: "tree service web design",             monthly_searches:   50 },
        { keyword: "painting website design",             monthly_searches:   40 },
        { keyword: "landscaping company website",         monthly_searches:   40 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Lead Generation & PPC for Trades",
      description: "Business owners searching for lead generation, pay-per-click advertising, and other digital services for their trade. These 20 keywords capture contractors who are ready to invest in paid advertising and lead generation programs, representing a strong upsell opportunity beyond website design.",
      keywords: [
        { keyword: "google ads for contractors",        monthly_searches: 320 },
        { keyword: "ppc for contractors",               monthly_searches: 320 },
        { keyword: "ppc for home services",             monthly_searches: 320 },
        { keyword: "lead generation for contractors",   monthly_searches: 320 },
        { keyword: "marketing for general contractors", monthly_searches: 320 },
        { keyword: "plumbing digital marketing",        monthly_searches: 260 },
        { keyword: "lead generation for home services", monthly_searches: 110 },
        { keyword: "google ads for home services",      monthly_searches:  30 },
        { keyword: "painting web design",               monthly_searches:  30 },
        { keyword: "painter website design",            monthly_searches:  30 },
        { keyword: "trades website design",             monthly_searches:  20 },
        { keyword: "flooring company website",          monthly_searches:  20 },
        { keyword: "remodeling web design",             monthly_searches:  20 },
        { keyword: "masonry website design",            monthly_searches:  20 },
        { keyword: "cleaning web design",               monthly_searches:  20 },
        { keyword: "pest control company website",      monthly_searches:  20 },
        { keyword: "hvac website company",              monthly_searches:  10 },
        { keyword: "remodeling company website",        monthly_searches:  10 },
        { keyword: "renovation website design",         monthly_searches:  10 },
        { keyword: "fence company website design",      monthly_searches:  10 },
      ]
    }
  ],

  // ---- TRADE VERTICALS (for ICP section) ----
  trade_verticals: [
    { rank: 1,  vertical: "General Contractor", keywords: 19, tier_focus: "All Tiers",  icp: "GC firms seeking website design, SEO, and marketing partners" },
    { rank: 2,  vertical: "Plumbing",           keywords: 12, tier_focus: "Tiers 1-3",  icp: "Plumbers and plumbing companies seeking SEO and web design" },
    { rank: 3,  vertical: "Landscaping",        keywords: 12, tier_focus: "Tiers 1-3",  icp: "Landscapers and lawn care companies seeking marketing and web design" },
    { rank: 4,  vertical: "Home Services",      keywords: 12, tier_focus: "All Tiers",  icp: "Broad home services companies seeking digital marketing agencies" },
    { rank: 5,  vertical: "Roofing",            keywords: 10, tier_focus: "Tiers 1-3",  icp: "Roofing contractors seeking SEO, marketing, and website design" },
    { rank: 6,  vertical: "Remodeling",         keywords: 10, tier_focus: "Tiers 1-3",  icp: "Home remodelers seeking marketing agencies and website builders" },
    { rank: 7,  vertical: "Painting",           keywords: 10, tier_focus: "Tiers 1-3",  icp: "Painting contractors seeking website design and digital marketing" },
    { rank: 8,  vertical: "HVAC",               keywords:  9, tier_focus: "All Tiers",  icp: "HVAC companies seeking SEO, marketing, and website design" },
    { rank: 9,  vertical: "Cleaning",           keywords:  9, tier_focus: "Tiers 1-3",  icp: "Cleaning companies seeking digital marketing and website design" },
    { rank: 10, vertical: "Electrical",         keywords:  8, tier_focus: "Tiers 1-3",  icp: "Electricians and electrical contractors seeking SEO and web design" },
    { rank: 11, vertical: "Pest Control",       keywords:  7, tier_focus: "Tiers 1-3",  icp: "Pest control companies seeking SEO, marketing, and website design" },
    { rank: 12, vertical: "Flooring",           keywords:  7, tier_focus: "Tiers 1-3",  icp: "Flooring contractors seeking website design and digital marketing" },
    { rank: 13, vertical: "Tree Service",       keywords:  6, tier_focus: "Tiers 1-3",  icp: "Tree service companies seeking marketing and website design" },
    { rank: 14, vertical: "Construction",       keywords:  6, tier_focus: "Tiers 2-3",  icp: "Construction companies seeking marketing agencies and web design" },
    { rank: 15, vertical: "Handyman",           keywords:  5, tier_focus: "Tiers 1-3",  icp: "Handyman businesses seeking website design and digital marketing" },
    { rank: 16, vertical: "Concrete",           keywords:  4, tier_focus: "Tiers 1-3",  icp: "Concrete and masonry contractors seeking website design and SEO" },
    { rank: 17, vertical: "Fencing",            keywords:  4, tier_focus: "Tiers 2-4",  icp: "Fence companies seeking marketing and website design" },
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Exceeds Current Plan Capacity",
      description: "These 3 keywords were identified and validated during research but could not be included within the 150-combination limit of the Level H plan. They are the first candidates for inclusion upon upgrading to Level I or higher.",
      keywords: [
        { keyword: "website design for home improvement", monthly_searches: 10 },
        { keyword: "website design for home services",    monthly_searches: 10 },
        { keyword: "concrete company website",            monthly_searches: 10 },
      ]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Level I",
      combinations: 175,
      price: 5600,
      additional_combinations: 25,
      headline: "Deeper Coverage in High-Value Verticals",
      description: "Upgrading to Level I adds 25 additional keyword combinations, enabling Dotcom Design to introduce dedicated coverage for franchise-level contractors, commercial construction firms, and specialty trade keywords currently outside the plan's capacity.",
      keywords: [
        { keyword: "commercial construction marketing",   monthly_searches: null, new_market: false },
        { keyword: "franchise contractor marketing",      monthly_searches: null, new_market: false },
        { keyword: "specialty contractor website design", monthly_searches: null, new_market: false },
        { keyword: "website design for home improvement", monthly_searches: 10 },
        { keyword: "website design for home services",    monthly_searches: 10 },
      ]
    },
    {
      plan: "Level J",
      combinations: 200,
      price: 6400,
      additional_combinations: 50,
      headline: "Full Trades Market Domination",
      description: "Level J provides the coverage needed to dominate every major search term in the trades and construction market nationwide. This tier enables Dotcom Design to target every major trade vertical with multiple keyword angles, including commercial construction, specialty trades, and emerging service categories.",
      keywords: [
        { keyword: "commercial construction website design", monthly_searches: null, new_market: false },
        { keyword: "specialty contractor seo",               monthly_searches: null, new_market: false },
        { keyword: "home builder website design",            monthly_searches: null, new_market: false },
        { keyword: "concrete company website",               monthly_searches: 10 },
        { keyword: "website design for home improvement",    monthly_searches: 10 },
      ]
    },
    {
      plan: "Level K+",
      combinations: 250,
      price: 8000,
      additional_combinations: 100,
      headline: "Enterprise Trades Coverage",
      description: "For maximum nationwide visibility, Level K and above unlocks 100+ additional combinations targeting commercial construction, multi-location trade franchises, and every remaining specialty trade vertical. This tier positions Dotcom Design as the undisputed authority for trades and construction digital marketing across the United States.",
      keywords: [
        { keyword: "multi-location contractor marketing",    monthly_searches: null, new_market: true },
        { keyword: "commercial roofing website design",      monthly_searches: null, new_market: true },
        { keyword: "home builder marketing agency",          monthly_searches: null, new_market: true },
        { keyword: "commercial plumbing website design",     monthly_searches: null, new_market: true },
        { keyword: "commercial hvac marketing",              monthly_searches: null, new_market: true },
      ]
    }
  ]
};

// ============================================================
// RENDER: ICP Table (desktop)
// ============================================================
(function renderICPTable() {
  const tbody = document.getElementById('icp-table-body');
  if (!tbody) return;
  STRATEGY.trade_verticals.forEach(function(v) {
    const tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' + v.rank + '</td>' +
      '<td><strong>' + v.vertical + '</strong></td>' +
      '<td class="num-col">' + v.keywords + '</td>' +
      '<td>' + v.tier_focus + '</td>' +
      '<td class="rationale-cell">' + v.icp + '</td>';
    tbody.appendChild(tr);
  });
})();

// ============================================================
// RENDER: Mobile ICP list
// ============================================================
(function renderMobileICP() {
  const container = document.getElementById('mobile-icp-list');
  if (!container) return;
  let html = '<div class="mob-mkt-header"><span class="mob-rank">#</span><span class="mob-city">Vertical</span><span class="mob-pop">Keywords</span></div>';
  STRATEGY.trade_verticals.forEach(function(v) {
    html += '<div class="mob-mkt-row selected">' +
      '<span class="mob-rank">' + v.rank + '</span>' +
      '<span class="mob-city"><strong>' + v.vertical + '</strong></span>' +
      '<span class="mob-pop">' + v.keywords + '</span>' +
      '</div>';
  });
  container.innerHTML = html;
})();

// ============================================================
// RENDER: Vertical Tier Cards (ICP section)
// ============================================================
(function renderVerticalTierCards() {
  const container = document.getElementById('vertical-tier-cards');
  if (!container) return;

  const highVolume  = STRATEGY.trade_verticals.filter(v => v.keywords >= 10);
  const midVolume   = STRATEGY.trade_verticals.filter(v => v.keywords >= 6 && v.keywords < 10);
  const emerging    = STRATEGY.trade_verticals.filter(v => v.keywords < 6);

  function buildCard(label, title, desc, items, colorClass) {
    let rows = '';
    items.forEach(function(v) {
      rows += '<li class="city-row selected-city"><span class="city-name"><strong>&#9733; ' + v.vertical + '</strong></span><span class="city-pop">' + v.keywords + ' kws</span></li>';
    });
    return '<div class="tier-card ' + colorClass + '">' +
      '<div class="tier-card-label">' + label + '</div>' +
      '<h4 class="tier-card-title">' + title + '</h4>' +
      '<p class="tier-card-desc">' + desc + '</p>' +
      '<ul class="tier-city-list">' +
        '<li class="city-row city-header-row"><span class="city-col-label">VERTICAL</span><span class="city-col-label" style="text-align:right">KEYWORDS</span></li>' +
        rows +
      '</ul>' +
      '</div>';
  }

  container.innerHTML =
    buildCard('HIGH COVERAGE: 10+ KEYWORDS', 'Core Trade Verticals', 'These verticals receive the most keyword coverage in the plan, reflecting the highest search demand and strongest ICP alignment for Dotcom Design.', highVolume, 'tier-card-1') +
    buildCard('MID COVERAGE: 6-9 KEYWORDS', 'Strong Secondary Verticals', 'These verticals have solid keyword coverage and represent strong secondary ICP segments with high commercial intent.', midVolume, 'tier-card-2') +
    buildCard('EMERGING: 4-5 KEYWORDS', 'Expansion Verticals', 'Smaller verticals with targeted coverage. These are strong candidates for deeper keyword expansion in future plan upgrades.', emerging, 'tier-card-3');
})();

// ============================================================
// RENDER: Full Keyword Table
// ============================================================
(function renderKeywordTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;

  const sorted = [...STRATEGY.keyword_table].sort((a, b) => b.monthly_searches - a.monthly_searches);

  const tierClass = { 'Tier 1': 't1', 'Tier 2': 't2', 'Tier 3': 't3', 'Tier 4': 't4' };

  sorted.forEach(function(kw) {
    const tr = document.createElement('tr');
    tr.className = kw.status === 'selected' ? 'row-selected' : '';
    const volStr = kw.monthly_searches >= 1000
      ? (kw.monthly_searches / 1000).toFixed(1).replace('.0','') + 'K'
      : kw.monthly_searches.toLocaleString();
    const statusBadge = kw.status === 'selected'
      ? '<span class="status-badge status-selected">Selected</span>'
      : '<span class="status-badge status-not-used">Not Used</span>';
    tr.innerHTML =
      '<td>' + kw.keyword + '</td>' +
      '<td class="num-col">' + volStr + '</td>' +
      '<td><span class="tier-pill ' + (tierClass[kw.tier] || '') + '">' + kw.tier + '</span></td>' +
      '<td>' + kw.vertical + '</td>' +
      '<td>' + statusBadge + '</td>';
    tbody.appendChild(tr);
  });
})();

// ============================================================
// RENDER: Keyword Tier Blocks
// ============================================================
(function renderKeywordTierBlocks() {
  const container = document.getElementById('kw-tier-grid');
  if (!container) return;

  const tierColorClass = { 'Tier 1': 'kw-tier-1', 'Tier 2': 'kw-tier-2', 'Tier 3': 'kw-tier-3', 'Tier 4': 'kw-tier-4' };

  STRATEGY.keyword_tiers.forEach(function(tier) {
    const block = document.createElement('div');
    block.className = 'flat-tier-block ' + (tierColorClass[tier.tier_label] || '');

    let rows = '';
    tier.keywords.forEach(function(kw) {
      const volStr = kw.monthly_searches >= 1000
        ? (kw.monthly_searches / 1000).toFixed(1).replace('.0','') + 'K'
        : kw.monthly_searches.toLocaleString();
      rows += '<tr><td class="flat-kw-name">' + kw.keyword + '</td><td class="flat-kw-vol">' + volStr + '/mo</td></tr>';
    });

    block.innerHTML =
      '<div class="flat-tier-heading">' +
        '<span class="flat-tier-name">' + tier.tier_label + ': ' + tier.tier_name + '</span>' +
        '<span class="flat-tier-count">' + tier.keywords.length + ' keywords</span>' +
      '</div>' +
      '<div class="flat-tier-desc">' + tier.description + '</div>' +
      '<table class="flat-kw-table">' +
        '<thead><tr><th>Keyword</th><th style="text-align:right">Monthly Searches</th></tr></thead>' +
        '<tbody>' + rows + '</tbody>' +
      '</table>';

    container.appendChild(block);
  });
})();

// ============================================================
// RENDER: Strategy Matrix (by trade vertical)
// ============================================================
(function renderMatrix() {
  const grid = document.getElementById('matrix-vertical-grid');
  const grandTotal = document.getElementById('matrix-grand-total');
  if (!grid) return;

  // Group keywords by vertical
  const verticalMap = {};
  STRATEGY.keyword_table.filter(k => k.status === 'selected').forEach(function(kw) {
    if (!verticalMap[kw.vertical]) verticalMap[kw.vertical] = [];
    verticalMap[kw.vertical].push(kw);
  });

  // Sort verticals by keyword count descending
  const sortedVerticals = Object.keys(verticalMap).sort((a, b) => verticalMap[b].length - verticalMap[a].length);

  let html = '<div id="matrix-city-grid">';
  let total = 0;

  sortedVerticals.forEach(function(vertical) {
    const kws = verticalMap[vertical].sort((a, b) => b.monthly_searches - a.monthly_searches);
    total += kws.length;

    let kwItems = '';
    kws.forEach(function(kw) {
      const volStr = kw.monthly_searches >= 1000
        ? (kw.monthly_searches / 1000).toFixed(1).replace('.0','') + 'K'
        : kw.monthly_searches.toLocaleString();
      const tierClass = { 'Tier 1': 't1', 'Tier 2': 't2', 'Tier 3': 't3', 'Tier 4': 't4' }[kw.tier] || '';
      kwItems +=
        '<div class="city-kw-item">' +
          '<span class="city-kw-check">&#10003;</span>' +
          '<span class="city-kw-name">' + kw.keyword + '</span>' +
          '<span class="tier-pill ' + tierClass + '" style="font-size:8px;padding:2px 6px;flex-shrink:0;">' + kw.tier + '</span>' +
        '</div>';
    });

    html +=
      '<div class="city-matrix-card">' +
        '<div class="city-matrix-header">' +
          '<div class="city-matrix-header-top">' +
            '<span class="city-matrix-name">&#128296; ' + vertical + '</span>' +
          '</div>' +
          '<div class="city-matrix-header-meta">' +
            '<span>' + kws.length + ' keyword' + (kws.length !== 1 ? 's' : '') + '</span>' +
            '<span style="color:rgba(255,255,255,0.35)">|</span>' +
            '<span>Nationwide</span>' +
          '</div>' +
        '</div>' +
        '<div class="city-kw-list">' + kwItems + '</div>' +
        '<div class="city-matrix-footer">' + kws.length + ' page target' + (kws.length !== 1 ? 's' : '') + '</div>' +
      '</div>';
  });

  html += '</div>';
  grid.innerHTML = html;

  if (grandTotal) {
    grandTotal.innerHTML = '&#10003; Total: <strong>' + total + ' keyword page targets</strong> across ' + sortedVerticals.length + ' trade verticals &mdash; Level H Plan';
  }
})();

// ============================================================
// RENDER: Not Used Section
// ============================================================
(function renderNotUsed() {
  const container = document.getElementById('not-used-grid');
  if (!container) return;

  container.className = 'not-used-grid grid-2col';

  STRATEGY.not_used_groups.forEach(function(group) {
    const card = document.createElement('div');
    card.className = 'not-used-card';

    let rows = '';
    group.keywords.forEach(function(kw) {
      const volStr = kw.monthly_searches >= 1000
        ? (kw.monthly_searches / 1000).toFixed(1).replace('.0','') + 'K'
        : kw.monthly_searches ? kw.monthly_searches.toLocaleString() : 'N/A';
      rows += '<div class="nu-kw-row"><span class="nu-kw-name">' + kw.keyword + '</span><span class="nu-kw-vol">' + volStr + '/mo</span></div>';
    });

    card.innerHTML =
      '<div class="nu-reason">' + group.reason + '</div>' +
      '<div class="nu-desc">' + group.description + '</div>' +
      '<div class="nu-kw-table">' +
        '<div class="nu-header"><span>Keyword</span><span>Monthly Searches</span></div>' +
        rows +
      '</div>';

    container.appendChild(card);
  });
})();

// ============================================================
// RENDER: Opportunities Section
// ============================================================
(function renderOpportunities() {
  const container = document.getElementById('opportunities-grid');
  if (!container) return;

  STRATEGY.additional_opportunities.forEach(function(opp, i) {
    const card = document.createElement('div');
    card.className = 'opp-card' + (i === 0 ? ' opp-card-highlight' : '');

    let kwItems = '';
    opp.keywords.forEach(function(kw) {
      const volStr = kw.monthly_searches
        ? (kw.monthly_searches >= 1000 ? (kw.monthly_searches/1000).toFixed(1).replace('.0','') + 'K' : kw.monthly_searches.toLocaleString())
        : 'New';
      kwItems += '<li>' +
        '<span class="opp-kw">' + kw.keyword + (kw.new_market ? ' <em style="color:#22a06b;font-size:0.75rem;">(new)</em>' : '') + '</span>' +
        '<span class="opp-vol">' + volStr + '</span>' +
        '</li>';
    });

    card.innerHTML =
      '<div class="opp-plan-label">' + opp.plan + '</div>' +
      '<div class="opp-price">+' + opp.additional_combinations + '<span class="opp-price-label"> combos</span></div>' +
      '<div class="opp-combos"><span class="opp-add">+' + opp.additional_combinations + ' additional combinations</span><br>' + opp.combinations + ' total combinations</div>' +
      '<div class="opp-headline">' + opp.headline + '</div>' +
      '<div class="opp-desc">' + opp.description + '</div>' +
      '<ul class="opp-kw-list">' +
        '<li class="opp-kw-header"><span>Sample Keywords</span><span>Searches</span></li>' +
        kwItems +
      '</ul>';

    container.appendChild(card);
  });
})();
