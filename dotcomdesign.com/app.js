// ─────────────────────────────────────────────────────────────────────────────
// Dotcom Design SEO Strategy — app.js (REBUILT v2)
// Level H | 178 Keywords | 22 Trade Verticals | Nationwide
// Rules: No Cleaning vertical. No keywords < 50/mo.
// ─────────────────────────────────────────────────────────────────────────────

const ALL_KEYWORDS = [
  // ── GENERAL CONTRACTOR ──
  { keyword: "general contractor seo", volume: 720, tier: 1, vertical: "General Contractor", status: "selected" },
  { keyword: "seo for general contractors", volume: 720, tier: 1, vertical: "General Contractor", status: "selected" },
  { keyword: "contractor seo company", volume: 480, tier: 1, vertical: "General Contractor", status: "selected" },
  { keyword: "digital marketing for contractors", volume: 1300, tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "contractor marketing agency", volume: 1000, tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "marketing agency for contractors", volume: 390, tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "general contractor marketing", volume: 480, tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "general contractor digital marketing", volume: 390, tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "contractor digital marketing agency", volume: 50, tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "contractor website design", volume: 1300, tier: 3, vertical: "General Contractor", status: "selected" },
  { keyword: "contractor website builder", volume: 90, tier: 3, vertical: "General Contractor", status: "selected" },
  { keyword: "contractor web design company", volume: 480, tier: 3, vertical: "General Contractor", status: "selected" },
  { keyword: "general contractor web design", volume: 70, tier: 3, vertical: "General Contractor", status: "selected" },
  { keyword: "lead generation for contractors", volume: 320, tier: 4, vertical: "General Contractor", status: "selected" },

  // ── ROOFING ──
  { keyword: "roofing seo", volume: 2900, tier: 1, vertical: "Roofing", status: "selected" },
  { keyword: "seo for roofing companies", volume: 1300, tier: 1, vertical: "Roofing", status: "selected" },
  { keyword: "roofing company seo", volume: 1000, tier: 1, vertical: "Roofing", status: "selected" },
  { keyword: "roofing marketing", volume: 1000, tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "roofing digital marketing", volume: 590, tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "marketing for roofers", volume: 480, tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "roofing marketing company", volume: 260, tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "roofing website design", volume: 720, tier: 3, vertical: "Roofing", status: "selected" },
  { keyword: "roofing web design", volume: 480, tier: 3, vertical: "Roofing", status: "selected" },
  { keyword: "roofing company website design", volume: 260, tier: 3, vertical: "Roofing", status: "selected" },
  { keyword: "roofer website design", volume: 140, tier: 3, vertical: "Roofing", status: "selected" },
  { keyword: "roofing company website", volume: 90, tier: 3, vertical: "Roofing", status: "selected" },

  // ── PLUMBING ──
  { keyword: "seo for plumbers", volume: 2900, tier: 1, vertical: "Plumbing", status: "selected" },
  { keyword: "plumber seo", volume: 2400, tier: 1, vertical: "Plumbing", status: "selected" },
  { keyword: "plumbing seo", volume: 1300, tier: 1, vertical: "Plumbing", status: "selected" },
  { keyword: "plumbing company seo", volume: 170, tier: 1, vertical: "Plumbing", status: "selected" },
  { keyword: "plumber marketing", volume: 1000, tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "plumbing marketing", volume: 880, tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "marketing for plumbers", volume: 880, tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "plumbing digital marketing", volume: 260, tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "plumbing website design", volume: 480, tier: 3, vertical: "Plumbing", status: "selected" },
  { keyword: "plumber website design", volume: 390, tier: 3, vertical: "Plumbing", status: "selected" },
  { keyword: "plumber web design", volume: 210, tier: 3, vertical: "Plumbing", status: "selected" },
  { keyword: "plumbing web design", volume: 140, tier: 3, vertical: "Plumbing", status: "selected" },
  { keyword: "plumbing company website", volume: 50, tier: 3, vertical: "Plumbing", status: "selected" },

  // ── HVAC ──
  { keyword: "hvac seo", volume: 2900, tier: 1, vertical: "HVAC", status: "selected" },
  { keyword: "seo for hvac companies", volume: 1300, tier: 1, vertical: "HVAC", status: "selected" },
  { keyword: "hvac company seo", volume: 390, tier: 1, vertical: "HVAC", status: "selected" },
  { keyword: "hvac marketing", volume: 2400, tier: 2, vertical: "HVAC", status: "selected" },
  { keyword: "hvac digital marketing", volume: 1600, tier: 2, vertical: "HVAC", status: "selected" },
  { keyword: "hvac marketing company", volume: 1300, tier: 2, vertical: "HVAC", status: "selected" },
  { keyword: "marketing for hvac companies", volume: 720, tier: 2, vertical: "HVAC", status: "selected" },
  { keyword: "hvac website design", volume: 1000, tier: 3, vertical: "HVAC", status: "selected" },
  { keyword: "hvac web design", volume: 590, tier: 3, vertical: "HVAC", status: "selected" },
  { keyword: "hvac company website design", volume: 70, tier: 3, vertical: "HVAC", status: "selected" },

  // ── ELECTRICAL ──
  { keyword: "electrician seo", volume: 2900, tier: 1, vertical: "Electrical", status: "selected" },
  { keyword: "seo for electricians", volume: 2900, tier: 1, vertical: "Electrical", status: "selected" },
  { keyword: "electrician marketing", volume: 720, tier: 2, vertical: "Electrical", status: "selected" },
  { keyword: "marketing for electricians", volume: 590, tier: 2, vertical: "Electrical", status: "selected" },
  { keyword: "electrician digital marketing", volume: 590, tier: 2, vertical: "Electrical", status: "selected" },
  { keyword: "electrician web design", volume: 320, tier: 3, vertical: "Electrical", status: "selected" },
  { keyword: "electrical contractor website", volume: 140, tier: 3, vertical: "Electrical", status: "selected" },

  // ── LANDSCAPING ──
  { keyword: "landscaping seo", volume: 1300, tier: 1, vertical: "Landscaping", status: "selected" },
  { keyword: "lawn care seo", volume: 390, tier: 1, vertical: "Landscaping", status: "selected" },
  { keyword: "seo for landscaping companies", volume: 320, tier: 1, vertical: "Landscaping", status: "selected" },
  { keyword: "lawn care marketing", volume: 720, tier: 2, vertical: "Landscaping", status: "selected" },
  { keyword: "marketing for landscapers", volume: 590, tier: 2, vertical: "Landscaping", status: "selected" },
  { keyword: "landscaping marketing", volume: 590, tier: 2, vertical: "Landscaping", status: "selected" },
  { keyword: "landscaping digital marketing", volume: 590, tier: 2, vertical: "Landscaping", status: "selected" },
  { keyword: "landscaping website design", volume: 390, tier: 3, vertical: "Landscaping", status: "selected" },
  { keyword: "landscaping web design", volume: 260, tier: 3, vertical: "Landscaping", status: "selected" },
  { keyword: "lawn care website design", volume: 260, tier: 3, vertical: "Landscaping", status: "selected" },
  { keyword: "landscaper website design", volume: 90, tier: 3, vertical: "Landscaping", status: "selected" },

  // ── PEST CONTROL ──
  { keyword: "pest control seo", volume: 1300, tier: 1, vertical: "Pest Control", status: "selected" },
  { keyword: "seo for pest control", volume: 880, tier: 1, vertical: "Pest Control", status: "selected" },
  { keyword: "pest control marketing", volume: 1000, tier: 2, vertical: "Pest Control", status: "selected" },
  { keyword: "marketing for pest control companies", volume: 210, tier: 2, vertical: "Pest Control", status: "selected" },
  { keyword: "pest control web design", volume: 210, tier: 3, vertical: "Pest Control", status: "selected" },
  { keyword: "pest control website design", volume: 210, tier: 3, vertical: "Pest Control", status: "selected" },

  // ── HOME SERVICES ──
  { keyword: "seo for home services", volume: 590, tier: 1, vertical: "Home Services", status: "selected" },
  { keyword: "home improvement seo", volume: 390, tier: 1, vertical: "Home Services", status: "selected" },
  { keyword: "seo for home improvement", volume: 210, tier: 1, vertical: "Home Services", status: "selected" },
  { keyword: "home services marketing agency", volume: 1300, tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "home services digital marketing", volume: 1000, tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "home improvement marketing", volume: 880, tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "home remodeling marketing", volume: 590, tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "home services marketing company", volume: 390, tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "home services web design", volume: 260, tier: 3, vertical: "Home Services", status: "selected" },
  { keyword: "home services website design", volume: 210, tier: 3, vertical: "Home Services", status: "selected" },
  { keyword: "home improvement website design", volume: 170, tier: 3, vertical: "Home Services", status: "selected" },
  { keyword: "home remodeling website design", volume: 170, tier: 3, vertical: "Home Services", status: "selected" },
  { keyword: "ppc for home services", volume: 320, tier: 4, vertical: "Home Services", status: "selected" },
  { keyword: "lead generation for home services", volume: 110, tier: 4, vertical: "Home Services", status: "selected" },

  // ── REMODELING ──
  { keyword: "remodeling seo", volume: 260, tier: 1, vertical: "Remodeling", status: "selected" },
  { keyword: "seo for remodeling companies", volume: 210, tier: 1, vertical: "Remodeling", status: "selected" },
  { keyword: "kitchen remodeling seo", volume: 320, tier: 1, vertical: "Remodeling", status: "selected" },
  { keyword: "bathroom remodeling seo", volume: 90, tier: 1, vertical: "Remodeling", status: "selected" },
  { keyword: "remodeling marketing", volume: 480, tier: 2, vertical: "Remodeling", status: "selected" },
  { keyword: "marketing for remodelers", volume: 390, tier: 2, vertical: "Remodeling", status: "selected" },
  { keyword: "kitchen remodeling marketing", volume: 260, tier: 2, vertical: "Remodeling", status: "selected" },
  { keyword: "bathroom remodeling marketing", volume: 210, tier: 2, vertical: "Remodeling", status: "selected" },
  { keyword: "remodeling website design", volume: 70, tier: 3, vertical: "Remodeling", status: "selected" },

  // ── PAINTING ──
  { keyword: "seo for painting companies", volume: 210, tier: 1, vertical: "Painting", status: "selected" },
  { keyword: "painting seo", volume: 140, tier: 1, vertical: "Painting", status: "selected" },
  { keyword: "painter marketing", volume: 210, tier: 2, vertical: "Painting", status: "selected" },
  { keyword: "marketing for painters", volume: 210, tier: 2, vertical: "Painting", status: "selected" },
  { keyword: "painting company marketing", volume: 70, tier: 2, vertical: "Painting", status: "selected" },
  { keyword: "painting company website design", volume: 110, tier: 3, vertical: "Painting", status: "selected" },

  // ── FLOORING ──
  { keyword: "seo for flooring companies", volume: 480, tier: 1, vertical: "Flooring", status: "selected" },
  { keyword: "flooring seo", volume: 260, tier: 1, vertical: "Flooring", status: "selected" },
  { keyword: "flooring marketing", volume: 210, tier: 2, vertical: "Flooring", status: "selected" },
  { keyword: "flooring website design", volume: 170, tier: 3, vertical: "Flooring", status: "selected" },
  { keyword: "flooring web design", volume: 90, tier: 3, vertical: "Flooring", status: "selected" },

  // ── TREE SERVICE ──
  { keyword: "tree service seo", volume: 390, tier: 1, vertical: "Tree Service", status: "selected" },
  { keyword: "tree service marketing", volume: 480, tier: 2, vertical: "Tree Service", status: "selected" },
  { keyword: "marketing for tree service companies", volume: 70, tier: 2, vertical: "Tree Service", status: "selected" },
  { keyword: "tree service website design", volume: 140, tier: 3, vertical: "Tree Service", status: "selected" },
  { keyword: "tree service web design", volume: 50, tier: 3, vertical: "Tree Service", status: "selected" },

  // ── HANDYMAN ──
  { keyword: "handyman seo", volume: 50, tier: 1, vertical: "Handyman", status: "selected" },
  { keyword: "handyman marketing", volume: 140, tier: 2, vertical: "Handyman", status: "selected" },
  { keyword: "handyman website design", volume: 110, tier: 3, vertical: "Handyman", status: "selected" },
  { keyword: "handyman web design", volume: 90, tier: 3, vertical: "Handyman", status: "selected" },
  { keyword: "handyman websites", volume: 720, tier: 3, vertical: "Handyman", status: "selected" },
  { keyword: "handyman website builder", volume: 50, tier: 3, vertical: "Handyman", status: "selected" },

  // ── MASONRY & CONCRETE ──
  { keyword: "masonry seo", volume: 140, tier: 1, vertical: "Masonry & Concrete", status: "selected" },
  { keyword: "seo for concrete companies", volume: 70, tier: 1, vertical: "Masonry & Concrete", status: "selected" },
  { keyword: "concrete marketing", volume: 110, tier: 2, vertical: "Masonry & Concrete", status: "selected" },

  // ── FENCING ──
  { keyword: "fence company marketing", volume: 320, tier: 2, vertical: "Fencing", status: "selected" },
  { keyword: "fencing marketing", volume: 50, tier: 2, vertical: "Fencing", status: "selected" },

  // ── HOME BUILDERS ──
  { keyword: "home builder seo", volume: 880, tier: 1, vertical: "Home Builders", status: "selected" },
  { keyword: "home builder marketing", volume: 720, tier: 2, vertical: "Home Builders", status: "selected" },
  { keyword: "home builder marketing agency", volume: 590, tier: 2, vertical: "Home Builders", status: "selected" },
  { keyword: "home builder digital marketing", volume: 260, tier: 2, vertical: "Home Builders", status: "selected" },
  { keyword: "home builder website design", volume: 480, tier: 3, vertical: "Home Builders", status: "selected" },
  { keyword: "home builder web design", volume: 260, tier: 3, vertical: "Home Builders", status: "selected" },
  { keyword: "builder website design", volume: 210, tier: 3, vertical: "Home Builders", status: "selected" },

  // ── COMMERCIAL CONSTRUCTION ──
  { keyword: "construction seo company", volume: 390, tier: 1, vertical: "Commercial Construction", status: "selected" },
  { keyword: "construction marketing agency", volume: 1900, tier: 2, vertical: "Commercial Construction", status: "selected" },
  { keyword: "digital marketing for construction companies", volume: 1000, tier: 2, vertical: "Commercial Construction", status: "selected" },
  { keyword: "commercial construction marketing", volume: 170, tier: 2, vertical: "Commercial Construction", status: "selected" },
  { keyword: "commercial contractor marketing", volume: 90, tier: 2, vertical: "Commercial Construction", status: "selected" },
  { keyword: "construction website company", volume: 110, tier: 3, vertical: "Commercial Construction", status: "selected" },

  // ── SOLAR ──
  { keyword: "solar company seo", volume: 260, tier: 1, vertical: "Solar", status: "selected" },
  { keyword: "solar marketing agency", volume: 480, tier: 2, vertical: "Solar", status: "selected" },
  { keyword: "solar digital marketing", volume: 320, tier: 2, vertical: "Solar", status: "selected" },
  { keyword: "solar company marketing", volume: 210, tier: 2, vertical: "Solar", status: "selected" },
  { keyword: "solar installer marketing", volume: 110, tier: 2, vertical: "Solar", status: "selected" },
  { keyword: "solar web design", volume: 110, tier: 3, vertical: "Solar", status: "selected" },

  // ── POOL & SPA ──
  { keyword: "pool builder seo", volume: 260, tier: 1, vertical: "Pool & Spa", status: "selected" },
  { keyword: "pool company seo", volume: 260, tier: 1, vertical: "Pool & Spa", status: "selected" },
  { keyword: "pool service seo", volume: 140, tier: 1, vertical: "Pool & Spa", status: "selected" },
  { keyword: "pool builder marketing", volume: 210, tier: 2, vertical: "Pool & Spa", status: "selected" },
  { keyword: "pool service marketing", volume: 210, tier: 2, vertical: "Pool & Spa", status: "selected" },
  { keyword: "pool company marketing", volume: 90, tier: 2, vertical: "Pool & Spa", status: "selected" },

  // ── GARAGE DOORS ──
  { keyword: "garage door seo", volume: 390, tier: 1, vertical: "Garage Doors", status: "selected" },
  { keyword: "garage door company seo", volume: 70, tier: 1, vertical: "Garage Doors", status: "selected" },
  { keyword: "garage door marketing", volume: 320, tier: 2, vertical: "Garage Doors", status: "selected" },
  { keyword: "garage door digital marketing", volume: 140, tier: 2, vertical: "Garage Doors", status: "selected" },
  { keyword: "garage door company marketing", volume: 70, tier: 2, vertical: "Garage Doors", status: "selected" },

  // ── FOUNDATION & WATERPROOFING ──
  { keyword: "foundation repair seo", volume: 590, tier: 1, vertical: "Foundation & Waterproofing", status: "selected" },
  { keyword: "foundation repair marketing", volume: 480, tier: 2, vertical: "Foundation & Waterproofing", status: "selected" },
  { keyword: "basement waterproofing marketing", volume: 70, tier: 2, vertical: "Foundation & Waterproofing", status: "selected" },

  // ── SPECIALTY TRADES ──
  { keyword: "siding company seo", volume: 140, tier: 1, vertical: "Specialty Trades", status: "selected" },
  { keyword: "paving company seo", volume: 110, tier: 1, vertical: "Specialty Trades", status: "selected" },
  { keyword: "gutter marketing", volume: 110, tier: 2, vertical: "Specialty Trades", status: "selected" },
  { keyword: "insulation marketing", volume: 110, tier: 2, vertical: "Specialty Trades", status: "selected" },
  { keyword: "window company marketing", volume: 90, tier: 2, vertical: "Specialty Trades", status: "selected" },
  { keyword: "window installation marketing", volume: 90, tier: 2, vertical: "Specialty Trades", status: "selected" },
  { keyword: "chimney sweep marketing", volume: 140, tier: 2, vertical: "Specialty Trades", status: "selected" },
  { keyword: "paving marketing", volume: 70, tier: 2, vertical: "Specialty Trades", status: "selected" },
  { keyword: "irrigation marketing", volume: 70, tier: 2, vertical: "Specialty Trades", status: "selected" },
  { keyword: "metal fabrication website", volume: 50, tier: 3, vertical: "Specialty Trades", status: "selected" },
];

// ── NOT USED ──────────────────────────────────────────────────────────────────
const NOT_USED = [
  { keyword: "cleaning seo", volume: 90, reason: "Vertical Removed", description: "Cleaning vertical removed per client direction — not aligned with trades/construction ICP." },
  { keyword: "seo for cleaning companies", volume: 210, reason: "Vertical Removed", description: "Cleaning vertical removed per client direction — not aligned with trades/construction ICP." },
  { keyword: "cleaning service marketing", volume: 110, reason: "Vertical Removed", description: "Cleaning vertical removed per client direction — not aligned with trades/construction ICP." },
  { keyword: "cleaning company marketing", volume: 110, reason: "Vertical Removed", description: "Cleaning vertical removed per client direction — not aligned with trades/construction ICP." },
  { keyword: "cleaning website design", volume: 110, reason: "Vertical Removed", description: "Cleaning vertical removed per client direction — not aligned with trades/construction ICP." },
  { keyword: "cleaning service website design", volume: 140, reason: "Vertical Removed", description: "Cleaning vertical removed per client direction — not aligned with trades/construction ICP." },
  { keyword: "cleaning company website design", volume: 140, reason: "Vertical Removed", description: "Cleaning vertical removed per client direction — not aligned with trades/construction ICP." },
  { keyword: "trades website design", volume: 20, reason: "Below Volume Threshold", description: "Only 20 searches/mo nationally — below the 50/mo minimum threshold for this plan." },
  { keyword: "renovation website design", volume: 10, reason: "Below Volume Threshold", description: "Only 10 searches/mo nationally — below the 50/mo minimum threshold for this plan." },
  { keyword: "masonry website design", volume: 20, reason: "Below Volume Threshold", description: "Only 20 searches/mo nationally — below the 50/mo minimum threshold for this plan." },
  { keyword: "hvac website company", volume: 10, reason: "Below Volume Threshold", description: "Only 10 searches/mo nationally — below the 50/mo minimum threshold for this plan." },
  { keyword: "seo for fence companies", volume: 40, reason: "Below Volume Threshold", description: "Only 40 searches/mo nationally — below the 50/mo minimum threshold for this plan." },
  { keyword: "fence company website design", volume: 10, reason: "Below Volume Threshold", description: "Only 10 searches/mo nationally — below the 50/mo minimum threshold for this plan." },
  { keyword: "painting web design", volume: 30, reason: "Below Volume Threshold", description: "Only 30 searches/mo nationally — below the 50/mo minimum threshold for this plan." },
  { keyword: "painter website design", volume: 30, reason: "Below Volume Threshold", description: "Only 30 searches/mo nationally — below the 50/mo minimum threshold for this plan." },
  { keyword: "google ads for home services", volume: 30, reason: "Below Volume Threshold", description: "Only 30 searches/mo nationally — below the 50/mo minimum threshold for this plan." },
];

// ── OPPORTUNITIES ─────────────────────────────────────────────────────────────
const OPPORTUNITIES = [
  {
    title: "Expand Specialty Trades Coverage",
    description: "The Specialty Trades vertical currently groups 10 keywords across Siding, Gutters, Insulation, Windows, Paving, Irrigation, and Chimney. A plan upgrade would allow dedicated vertical cards for each of these trades with 3-5 keywords each, dramatically increasing topical authority across the full trades spectrum.",
    badge: "Plan Upgrade"
  },
  {
    title: "Add Deck, Outdoor Living & Pool Builder Pages",
    description: "Deck builders, patio contractors, and pool builders are a fast-growing segment of the trades market. Keywords like 'deck builder marketing', 'deck builder seo', and 'outdoor living contractor website' are available for inclusion at the next plan level.",
    badge: "Plan Upgrade"
  },
  {
    title: "Commercial Construction Deep Dive",
    description: "Commercial construction is currently represented by 6 keywords. A dedicated expansion could add 15-20 keywords targeting commercial contractors, general contractors for commercial projects, and construction management companies — a high-value B2B segment.",
    badge: "Plan Upgrade"
  }
];

// ── ICP TABLE DATA ────────────────────────────────────────────────────────────
const ICP_VERTICALS = [
  { vertical: "General Contractor", keywords: 14, tier: "Tier 1-4", icp: "GC firms and multi-trade contractors searching for a web design or marketing partner" },
  { vertical: "Roofing", keywords: 12, tier: "Tier 1-3", icp: "Roofing companies actively searching for SEO agencies and website designers" },
  { vertical: "Plumbing", keywords: 13, tier: "Tier 1-3", icp: "Plumbing companies searching for SEO, marketing, and website design services" },
  { vertical: "HVAC", keywords: 10, tier: "Tier 1-3", icp: "HVAC contractors searching for marketing agencies and web design companies" },
  { vertical: "Electrical", keywords: 7, tier: "Tier 1-3", icp: "Electrical contractors searching for SEO and digital marketing partners" },
  { vertical: "Landscaping", keywords: 11, tier: "Tier 1-3", icp: "Landscaping and lawn care companies searching for marketing and web design" },
  { vertical: "Pest Control", keywords: 6, tier: "Tier 1-3", icp: "Pest control companies searching for SEO and digital marketing services" },
  { vertical: "Home Services", keywords: 14, tier: "Tier 1-4", icp: "Home service companies searching for marketing agencies and lead generation" },
  { vertical: "Remodeling", keywords: 9, tier: "Tier 1-3", icp: "Remodeling contractors searching for SEO and marketing partners" },
  { vertical: "Painting", keywords: 6, tier: "Tier 1-3", icp: "Painting contractors searching for marketing agencies and website designers" },
  { vertical: "Flooring", keywords: 5, tier: "Tier 1-3", icp: "Flooring companies searching for SEO and website design services" },
  { vertical: "Tree Service", keywords: 5, tier: "Tier 1-3", icp: "Tree service companies searching for marketing and web design partners" },
  { vertical: "Handyman", keywords: 6, tier: "Tier 1-3", icp: "Handyman businesses searching for websites and marketing services" },
  { vertical: "Masonry & Concrete", keywords: 3, tier: "Tier 1-2", icp: "Masonry and concrete contractors searching for SEO and marketing" },
  { vertical: "Fencing", keywords: 2, tier: "Tier 2", icp: "Fence companies searching for marketing agencies" },
  { vertical: "Home Builders", keywords: 7, tier: "Tier 1-3", icp: "Custom home builders and residential builders searching for marketing and web design" },
  { vertical: "Commercial Construction", keywords: 6, tier: "Tier 1-3", icp: "Commercial contractors and construction companies searching for digital marketing" },
  { vertical: "Solar", keywords: 6, tier: "Tier 1-3", icp: "Solar installation companies searching for marketing agencies and SEO" },
  { vertical: "Pool & Spa", keywords: 6, tier: "Tier 1-2", icp: "Pool builders and pool service companies searching for SEO and marketing" },
  { vertical: "Garage Doors", keywords: 5, tier: "Tier 1-2", icp: "Garage door companies searching for SEO and digital marketing services" },
  { vertical: "Foundation & Waterproofing", keywords: 3, tier: "Tier 1-2", icp: "Foundation repair and waterproofing companies searching for marketing" },
  { vertical: "Specialty Trades", keywords: 10, tier: "Tier 1-3", icp: "Siding, gutter, insulation, window, paving, irrigation, and chimney contractors" },
];

// ── VERTICAL TIER GROUPINGS ───────────────────────────────────────────────────
const VERTICAL_GROUPS = [
  {
    label: "HIGH COVERAGE: 10+ KEYWORDS",
    groupTitle: "Core Trade Verticals",
    groupDesc: "These verticals receive the most keyword coverage in the plan, reflecting the highest search demand and strongest ICP alignment for Dotcom Design.",
    verticals: [
      { name: "General Contractor", count: 14 },
      { name: "Home Services", count: 14 },
      { name: "Plumbing", count: 13 },
      { name: "Roofing", count: 12 },
      { name: "Landscaping", count: 11 },
      { name: "Specialty Trades", count: 10 },
      { name: "HVAC", count: 10 },
    ]
  },
  {
    label: "MID COVERAGE: 6-9 KEYWORDS",
    groupTitle: "Strong Secondary Verticals",
    groupDesc: "These verticals have solid keyword coverage and represent strong secondary ICP segments with high commercial intent.",
    verticals: [
      { name: "Remodeling", count: 9 },
      { name: "Electrical", count: 7 },
      { name: "Home Builders", count: 7 },
      { name: "Pest Control", count: 6 },
      { name: "Painting", count: 6 },
      { name: "Handyman", count: 6 },
      { name: "Solar", count: 6 },
      { name: "Pool & Spa", count: 6 },
      { name: "Commercial Construction", count: 6 },
    ]
  },
  {
    label: "TARGETED: 2-5 KEYWORDS",
    groupTitle: "Targeted Verticals",
    groupDesc: "Smaller verticals with focused keyword coverage. These represent strong candidates for deeper expansion in future plan upgrades.",
    verticals: [
      { name: "Flooring", count: 5 },
      { name: "Tree Service", count: 5 },
      { name: "Garage Doors", count: 5 },
      { name: "Masonry & Concrete", count: 3 },
      { name: "Foundation & Waterproofing", count: 3 },
      { name: "Fencing", count: 2 },
    ]
  }
];

// ── TIER DESCRIPTIONS ─────────────────────────────────────────────────────────
const TIER_DESCRIPTIONS = {
  1: {
    label: "Tier 1: SEO for Trades",
    description: "Business owners actively searching for an SEO agency or SEO company for their specific trade. These are the highest-intent keywords in the plan — a plumber searching for 'seo for plumbers' or a roofer searching for 'roofing seo' is ready to hire right now. These keywords span every major trade vertical and form the backbone of the strategy."
  },
  2: {
    label: "Tier 2: Digital Marketing for Trades",
    description: "Contractors searching for digital marketing agencies, marketing companies, and marketing services for their specific trade. These keywords capture business owners who are ready to invest in a broader marketing relationship. High commercial intent with strong conversion potential across all 22 verticals."
  },
  3: {
    label: "Tier 3: Website Design for Trades",
    description: "Business owners searching for a website designer, web design company, or website builder for their trade. This is the most direct ICP alignment for Dotcom Design's core service offering. Keywords like 'contractor website design', 'roofing website design', and 'handyman websites' target buyers at the exact moment of purchase intent."
  },
  4: {
    label: "Tier 4: Lead Generation & PPC for Trades",
    description: "Contractors searching for lead generation services, Google Ads management, and pay-per-click advertising for their trade. Lower volume but extremely high commercial intent — these business owners are ready to spend money on digital services immediately."
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// RENDER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

function fmtVol(v) {
  if (v >= 1000) return (v / 1000).toFixed(v % 1000 === 0 ? 0 : 1) + 'K/mo';
  return v + '/mo';
}

function tierPill(t) {
  const colors = { 1: '#1a7f5a', 2: '#3F80EA', 3: '#7c3aed', 4: '#b45309' };
  const labels = { 1: 'Tier 1 · SEO', 2: 'Tier 2 · Marketing', 3: 'Tier 3 · Web Design', 4: 'Tier 4 · Lead Gen' };
  return `<span class="tier-pill" style="background:${colors[t]}20;color:${colors[t]};border:1px solid ${colors[t]}40;">${labels[t]}</span>`;
}

function renderICPTable() {
  const tbody = document.getElementById('icp-table-body');
  if (!tbody) return;
  tbody.innerHTML = ICP_VERTICALS.map((v, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${v.vertical}</strong></td>
      <td class="num-col">${v.keywords}</td>
      <td>${v.tier}</td>
      <td>${v.icp}</td>
    </tr>
  `).join('');

  const mobileList = document.getElementById('mobile-icp-list');
  if (mobileList) {
    mobileList.innerHTML = ICP_VERTICALS.map(v => `
      <div class="mobile-market-card">
        <div class="mmc-name">${v.vertical}</div>
        <div class="mmc-meta">${v.keywords} keywords &nbsp;·&nbsp; ${v.tier}</div>
        <div class="mmc-desc">${v.icp}</div>
      </div>
    `).join('');
  }
}

function renderVerticalTierCards() {
  const container = document.getElementById('vertical-tier-cards');
  if (!container) return;
  container.innerHTML = VERTICAL_GROUPS.map(g => `
    <div class="tier-card">
      <div class="tier-card-badge">${g.label}</div>
      <h4 class="tier-card-title">${g.groupTitle}</h4>
      <p class="tier-card-desc">${g.groupDesc}</p>
      <ul class="tier-card-list">
        ${g.verticals.map(v => `<li><span class="star">★</span> <strong>${v.name}</strong><span class="kw-count">${v.count} kws</span></li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderKWTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;
  const allKws = [
    ...ALL_KEYWORDS,
    ...NOT_USED.map(k => ({ ...k, tier: 0, vertical: '—', status: 'excluded' }))
  ];
  const sorted = allKws.sort((a, b) => b.volume - a.volume);
  tbody.innerHTML = sorted.map(k => {
    const isExcluded = k.status === 'excluded';
    const statusBadge = isExcluded
      ? `<span class="status-badge excluded">Excluded</span>`
      : `<span class="status-badge selected">Selected</span>`;
    const tierDisplay = isExcluded ? '—' : tierPill(k.tier);
    return `
      <tr class="${isExcluded ? 'row-excluded' : ''}">
        <td>${k.keyword}</td>
        <td class="num-col">${fmtVol(k.volume)}</td>
        <td>${tierDisplay}</td>
        <td>${isExcluded ? '—' : k.vertical}</td>
        <td>${statusBadge}</td>
      </tr>
    `;
  }).join('');
}

function renderKWTierGrid() {
  const container = document.getElementById('kw-tier-grid');
  if (!container) return;
  container.innerHTML = [1, 2, 3, 4].map(t => {
    const kws = ALL_KEYWORDS.filter(k => k.tier === t).sort((a, b) => b.volume - a.volume);
    const desc = TIER_DESCRIPTIONS[t];
    return `
      <div class="kw-tier-block">
        <div class="ktb-header">
          <span class="ktb-label">${desc.label}</span>
          <span class="ktb-count">${kws.length} keywords</span>
        </div>
        <p class="ktb-desc">${desc.description}</p>
        <table class="flat-kw-table">
          <thead><tr><th>Keyword</th><th class="num-col">Monthly Searches</th></tr></thead>
          <tbody>
            ${kws.map(k => `<tr><td>${k.keyword}</td><td class="num-col">${fmtVol(k.volume)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
  }).join('');
}

function renderMatrix() {
  const container = document.getElementById('matrix-vertical-grid');
  if (!container) return;
  const verticalOrder = ICP_VERTICALS.map(v => v.vertical);
  const verticals = [...new Set(ALL_KEYWORDS.map(k => k.vertical))].sort((a, b) => {
    return (verticalOrder.indexOf(a) + 1 || 999) - (verticalOrder.indexOf(b) + 1 || 999);
  });
  let totalCount = 0;
  container.innerHTML = verticals.map(v => {
    const kws = ALL_KEYWORDS.filter(k => k.vertical === v).sort((a, b) => b.volume - a.volume);
    totalCount += kws.length;
    return `
      <div class="matrix-vertical-card">
        <div class="mvc-header">
          <span class="mvc-title">${v}</span>
          <span class="mvc-count">${kws.length} keywords</span>
        </div>
        <ul class="mvc-kw-list">
          ${kws.map(k => `
            <li class="mvc-kw-item">
              <span class="mvc-kw-name">${k.keyword}</span>
              <span class="mvc-kw-vol">${fmtVol(k.volume)}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }).join('');
  const grandTotal = document.getElementById('matrix-grand-total');
  if (grandTotal) {
    grandTotal.textContent = `Total: ${totalCount} keyword page targets across ${verticals.length} trade verticals`;
  }
}

function renderNotUsed() {
  const container = document.getElementById('not-used-grid');
  if (!container) return;
  const groups = {};
  NOT_USED.forEach(k => {
    if (!groups[k.reason]) groups[k.reason] = [];
    groups[k.reason].push(k);
  });
  container.innerHTML = Object.entries(groups).map(([reason, kws]) => `
    <div class="not-used-card">
      <div class="nuc-reason">${reason}</div>
      <ul class="nuc-list">
        ${kws.map(k => `
          <li>
            <span class="nuc-kw">${k.keyword}</span>
            <span class="nuc-vol">${fmtVol(k.volume)}</span>
            <p class="nuc-desc">${k.description}</p>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

function renderOpportunities() {
  const container = document.getElementById('opportunities-grid');
  if (!container) return;
  container.innerHTML = OPPORTUNITIES.map(o => `
    <div class="opp-card">
      <div class="opp-badge">${o.badge}</div>
      <h4 class="opp-title">${o.title}</h4>
      <p class="opp-desc">${o.description}</p>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', function () {
  renderICPTable();
  renderVerticalTierCards();
  renderKWTable();
  renderKWTierGrid();
  renderMatrix();
  renderNotUsed();
  renderOpportunities();
});
