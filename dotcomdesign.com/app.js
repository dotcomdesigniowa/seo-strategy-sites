// ============================================================
// DOTCOM DESIGN SEO Strategy App.js (FULL REBUILD v3)
// 289 keywords | 36 verticals | 4 tiers
// ============================================================

const STRATEGY_STATS = {
  totalKeywords: 289,
  totalVerticals: 36,
  totalTiers: 4,
  keywordsResearched: '400+',
  planLevel: 'H (Expanded)',
  client: 'Dotcom Design',
  industry: 'Trades & Construction',
  region: 'Nationwide / USA',
  date: 'April 2026',
};

const ALL_KEYWORDS = [
  { keyword: "electrician seo", volume: 2900, volDisplay: "2K/mo", tier: 1, vertical: "Electrical", status: "selected" },
  { keyword: "seo for electricians", volume: 2900, volDisplay: "2K/mo", tier: 1, vertical: "Electrical", status: "selected" },
  { keyword: "seo for plumbers", volume: 2900, volDisplay: "2K/mo", tier: 1, vertical: "Plumbing", status: "selected" },
  { keyword: "hvac seo", volume: 2900, volDisplay: "2K/mo", tier: 1, vertical: "HVAC", status: "selected" },
  { keyword: "roofing seo", volume: 2900, volDisplay: "2K/mo", tier: 1, vertical: "Roofing", status: "selected" },
  { keyword: "hvac marketing", volume: 2400, volDisplay: "2K/mo", tier: 2, vertical: "HVAC", status: "selected" },
  { keyword: "plumber seo", volume: 2400, volDisplay: "2K/mo", tier: 1, vertical: "Plumbing", status: "selected" },
  { keyword: "roofing leads", volume: 1900, volDisplay: "1K/mo", tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "construction marketing agency", volume: 1900, volDisplay: "1K/mo", tier: 2, vertical: "Commercial Construction", status: "selected" },
  { keyword: "hvac marketing agency", volume: 1900, volDisplay: "1K/mo", tier: 2, vertical: "HVAC", status: "selected" },
  { keyword: "hvac digital marketing", volume: 1600, volDisplay: "1K/mo", tier: 2, vertical: "HVAC", status: "selected" },
  { keyword: "seo for roofing companies", volume: 1300, volDisplay: "1K/mo", tier: 1, vertical: "Roofing", status: "selected" },
  { keyword: "home services marketing agency", volume: 1300, volDisplay: "1K/mo", tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "pest control seo", volume: 1300, volDisplay: "1K/mo", tier: 1, vertical: "Pest Control", status: "selected" },
  { keyword: "plumbing seo", volume: 1300, volDisplay: "1K/mo", tier: 1, vertical: "Plumbing", status: "selected" },
  { keyword: "hvac marketing company", volume: 1300, volDisplay: "1K/mo", tier: 2, vertical: "HVAC", status: "selected" },
  { keyword: "landscaping seo", volume: 1300, volDisplay: "1K/mo", tier: 1, vertical: "Landscaping", status: "selected" },
  { keyword: "seo for hvac companies", volume: 1300, volDisplay: "1K/mo", tier: 1, vertical: "HVAC", status: "selected" },
  { keyword: "digital marketing for contractors", volume: 1300, volDisplay: "1K/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "local seo for contractors", volume: 1000, volDisplay: "1K/mo", tier: 1, vertical: "General Contractor", status: "selected" },
  { keyword: "roofing company seo", volume: 1000, volDisplay: "1K/mo", tier: 1, vertical: "Roofing", status: "selected" },
  { keyword: "roofing marketing agency", volume: 1000, volDisplay: "1K/mo", tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "pest control marketing agency", volume: 1000, volDisplay: "1K/mo", tier: 2, vertical: "Pest Control", status: "selected" },
  { keyword: "hvac leads", volume: 1000, volDisplay: "1K/mo", tier: 2, vertical: "HVAC", status: "selected" },
  { keyword: "digital marketing for construction companies", volume: 1000, volDisplay: "1K/mo", tier: 2, vertical: "Commercial Construction", status: "selected" },
  { keyword: "contractor marketing agency", volume: 1000, volDisplay: "1K/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "roofing marketing", volume: 1000, volDisplay: "1K/mo", tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "contractor website design", volume: 1000, volDisplay: "1K/mo", tier: 3, vertical: "General Contractor", status: "selected" },
  { keyword: "home services digital marketing", volume: 1000, volDisplay: "1K/mo", tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "hvac website design", volume: 1000, volDisplay: "1K/mo", tier: 3, vertical: "HVAC", status: "selected" },
  { keyword: "construction website design", volume: 1000, volDisplay: "1K/mo", tier: 3, vertical: "Commercial Construction", status: "selected" },
  { keyword: "plumber marketing", volume: 1000, volDisplay: "1K/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "pest control marketing", volume: 1000, volDisplay: "1K/mo", tier: 2, vertical: "Pest Control", status: "selected" },
  { keyword: "local seo for plumbers", volume: 880, volDisplay: "880/mo", tier: 1, vertical: "Plumbing", status: "selected" },
  { keyword: "plumbing marketing", volume: 880, volDisplay: "880/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "home builder seo", volume: 880, volDisplay: "880/mo", tier: 1, vertical: "Home Builders", status: "selected" },
  { keyword: "marketing for plumbers", volume: 880, volDisplay: "880/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "seo for pest control", volume: 880, volDisplay: "880/mo", tier: 1, vertical: "Pest Control", status: "selected" },
  { keyword: "contractor websites", volume: 880, volDisplay: "880/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "contractor web design", volume: 880, volDisplay: "880/mo", tier: 3, vertical: "General Contractor", status: "selected" },
  { keyword: "home improvement marketing", volume: 880, volDisplay: "880/mo", tier: 2, vertical: "Remodeling", status: "selected" },
  { keyword: "plumbing marketing agency", volume: 720, volDisplay: "720/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "locksmith seo", volume: 720, volDisplay: "720/mo", tier: 1, vertical: "Locksmith", status: "selected" },
  { keyword: "roofing website design", volume: 720, volDisplay: "720/mo", tier: 3, vertical: "Roofing", status: "selected" },
  { keyword: "seo for general contractors", volume: 720, volDisplay: "720/mo", tier: 1, vertical: "General Contractor", status: "selected" },
  { keyword: "construction web design", volume: 720, volDisplay: "720/mo", tier: 3, vertical: "Commercial Construction", status: "selected" },
  { keyword: "lawn care marketing", volume: 720, volDisplay: "720/mo", tier: 2, vertical: "Landscaping", status: "selected" },
  { keyword: "marketing for hvac companies", volume: 720, volDisplay: "720/mo", tier: 2, vertical: "HVAC", status: "selected" },
  { keyword: "electrician marketing", volume: 720, volDisplay: "720/mo", tier: 2, vertical: "Electrical", status: "selected" },
  { keyword: "home builder marketing", volume: 720, volDisplay: "720/mo", tier: 2, vertical: "Home Builders", status: "selected" },
  { keyword: "plumbing leads", volume: 720, volDisplay: "720/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "local seo for electricians", volume: 720, volDisplay: "720/mo", tier: 1, vertical: "Electrical", status: "selected" },
  { keyword: "contractor leads", volume: 720, volDisplay: "720/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "moving company seo", volume: 720, volDisplay: "720/mo", tier: 1, vertical: "Moving Companies", status: "selected" },
  { keyword: "landscaping marketing agency", volume: 720, volDisplay: "720/mo", tier: 2, vertical: "Landscaping", status: "selected" },
  { keyword: "handyman websites", volume: 720, volDisplay: "720/mo", tier: 2, vertical: "Handyman", status: "selected" },
  { keyword: "general contractor seo", volume: 720, volDisplay: "720/mo", tier: 1, vertical: "General Contractor", status: "selected" },
  { keyword: "website design for contractors", volume: 590, volDisplay: "590/mo", tier: 3, vertical: "General Contractor", status: "selected" },
  { keyword: "landscaping digital marketing", volume: 590, volDisplay: "590/mo", tier: 2, vertical: "Landscaping", status: "selected" },
  { keyword: "landscaping marketing", volume: 590, volDisplay: "590/mo", tier: 2, vertical: "Landscaping", status: "selected" },
  { keyword: "seo for home services", volume: 590, volDisplay: "590/mo", tier: 1, vertical: "Home Services", status: "selected" },
  { keyword: "moving company marketing", volume: 590, volDisplay: "590/mo", tier: 2, vertical: "Moving Companies", status: "selected" },
  { keyword: "internet marketing for plumbers", volume: 590, volDisplay: "590/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "roofing digital marketing", volume: 590, volDisplay: "590/mo", tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "home remodeling marketing", volume: 590, volDisplay: "590/mo", tier: 2, vertical: "Remodeling", status: "selected" },
  { keyword: "marketing for electricians", volume: 590, volDisplay: "590/mo", tier: 2, vertical: "Electrical", status: "selected" },
  { keyword: "electrician digital marketing", volume: 590, volDisplay: "590/mo", tier: 2, vertical: "Electrical", status: "selected" },
  { keyword: "marketing for landscapers", volume: 590, volDisplay: "590/mo", tier: 2, vertical: "Landscaping", status: "selected" },
  { keyword: "hvac web design", volume: 590, volDisplay: "590/mo", tier: 3, vertical: "HVAC", status: "selected" },
  { keyword: "home builder marketing agency", volume: 590, volDisplay: "590/mo", tier: 2, vertical: "Home Builders", status: "selected" },
  { keyword: "foundation repair seo", volume: 590, volDisplay: "590/mo", tier: 1, vertical: "Foundation & Waterproofing", status: "selected" },
  { keyword: "home builder website design", volume: 480, volDisplay: "480/mo", tier: 3, vertical: "Home Builders", status: "selected" },
  { keyword: "remodeling marketing", volume: 480, volDisplay: "480/mo", tier: 2, vertical: "Remodeling", status: "selected" },
  { keyword: "general contractor marketing", volume: 480, volDisplay: "480/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "marketing for roofers", volume: 480, volDisplay: "480/mo", tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "junk removal marketing", volume: 480, volDisplay: "480/mo", tier: 2, vertical: "Junk Removal", status: "selected" },
  { keyword: "junk removal seo", volume: 480, volDisplay: "480/mo", tier: 1, vertical: "Junk Removal", status: "selected" },
  { keyword: "internet marketing for contractors", volume: 480, volDisplay: "480/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "pest control leads", volume: 480, volDisplay: "480/mo", tier: 2, vertical: "Pest Control", status: "selected" },
  { keyword: "remodeling marketing agency", volume: 480, volDisplay: "480/mo", tier: 2, vertical: "Remodeling", status: "selected" },
  { keyword: "local seo for hvac", volume: 480, volDisplay: "480/mo", tier: 1, vertical: "HVAC", status: "selected" },
  { keyword: "google ads for plumbers", volume: 480, volDisplay: "480/mo", tier: 4, vertical: "Plumbing", status: "selected" },
  { keyword: "fence company seo", volume: 480, volDisplay: "480/mo", tier: 1, vertical: "Fencing", status: "selected" },
  { keyword: "electrician website design", volume: 480, volDisplay: "480/mo", tier: 3, vertical: "Electrical", status: "selected" },
  { keyword: "general contractor website design", volume: 480, volDisplay: "480/mo", tier: 3, vertical: "General Contractor", status: "selected" },
  { keyword: "roofing web design", volume: 480, volDisplay: "480/mo", tier: 3, vertical: "Roofing", status: "selected" },
  { keyword: "plumbing website design", volume: 480, volDisplay: "480/mo", tier: 3, vertical: "Plumbing", status: "selected" },
  { keyword: "tree service marketing", volume: 480, volDisplay: "480/mo", tier: 2, vertical: "Tree Service", status: "selected" },
  { keyword: "seo for flooring companies", volume: 480, volDisplay: "480/mo", tier: 1, vertical: "Flooring", status: "selected" },
  { keyword: "online marketing for contractors", volume: 480, volDisplay: "480/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "local seo for home services", volume: 480, volDisplay: "480/mo", tier: 1, vertical: "Home Services", status: "selected" },
  { keyword: "contractor seo company", volume: 480, volDisplay: "480/mo", tier: 1, vertical: "General Contractor", status: "selected" },
  { keyword: "solar marketing agency", volume: 480, volDisplay: "480/mo", tier: 2, vertical: "Solar", status: "selected" },
  { keyword: "foundation repair marketing", volume: 480, volDisplay: "480/mo", tier: 2, vertical: "Foundation & Waterproofing", status: "selected" },
  { keyword: "general contractor digital marketing", volume: 390, volDisplay: "390/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "home services marketing company", volume: 390, volDisplay: "390/mo", tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "construction company website design", volume: 390, volDisplay: "390/mo", tier: 3, vertical: "Commercial Construction", status: "selected" },
  { keyword: "construction seo company", volume: 390, volDisplay: "390/mo", tier: 1, vertical: "Commercial Construction", status: "selected" },
  { keyword: "home improvement seo", volume: 390, volDisplay: "390/mo", tier: 1, vertical: "Remodeling", status: "selected" },
  { keyword: "marketing for remodelers", volume: 390, volDisplay: "390/mo", tier: 2, vertical: "Remodeling", status: "selected" },
  { keyword: "plumber website design", volume: 390, volDisplay: "390/mo", tier: 3, vertical: "Plumbing", status: "selected" },
  { keyword: "marketing agency for contractors", volume: 390, volDisplay: "390/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "lawn care seo", volume: 390, volDisplay: "390/mo", tier: 1, vertical: "Landscaping", status: "selected" },
  { keyword: "tree service seo", volume: 390, volDisplay: "390/mo", tier: 1, vertical: "Tree Service", status: "selected" },
  { keyword: "garage door seo", volume: 390, volDisplay: "390/mo", tier: 1, vertical: "Garage Doors", status: "selected" },
  { keyword: "hvac company seo", volume: 390, volDisplay: "390/mo", tier: 1, vertical: "HVAC", status: "selected" },
  { keyword: "landscaping website design", volume: 390, volDisplay: "390/mo", tier: 3, vertical: "Landscaping", status: "selected" },
  { keyword: "lead generation for contractors", volume: 320, volDisplay: "320/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "ppc for home services", volume: 320, volDisplay: "320/mo", tier: 4, vertical: "Home Services", status: "selected" },
  { keyword: "electrician web design", volume: 320, volDisplay: "320/mo", tier: 3, vertical: "Electrical", status: "selected" },
  { keyword: "water damage restoration marketing", volume: 320, volDisplay: "320/mo", tier: 2, vertical: "Restoration & Remediation", status: "selected" },
  { keyword: "water restoration marketing", volume: 320, volDisplay: "320/mo", tier: 2, vertical: "Restoration & Remediation", status: "selected" },
  { keyword: "electrician website builder", volume: 320, volDisplay: "320/mo", tier: 3, vertical: "Electrical", status: "selected" },
  { keyword: "pressure washing marketing", volume: 320, volDisplay: "320/mo", tier: 2, vertical: "Pressure Washing", status: "selected" },
  { keyword: "electrician leads", volume: 320, volDisplay: "320/mo", tier: 2, vertical: "Electrical", status: "selected" },
  { keyword: "garage door marketing", volume: 320, volDisplay: "320/mo", tier: 2, vertical: "Garage Doors", status: "selected" },
  { keyword: "kitchen remodeling seo", volume: 320, volDisplay: "320/mo", tier: 1, vertical: "Remodeling", status: "selected" },
  { keyword: "seo for landscaping companies", volume: 320, volDisplay: "320/mo", tier: 1, vertical: "Landscaping", status: "selected" },
  { keyword: "marketing for general contractors", volume: 320, volDisplay: "320/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "google ads for contractors", volume: 320, volDisplay: "320/mo", tier: 4, vertical: "General Contractor", status: "selected" },
  { keyword: "fence company marketing", volume: 320, volDisplay: "320/mo", tier: 2, vertical: "Fencing", status: "selected" },
  { keyword: "ppc for contractors", volume: 320, volDisplay: "320/mo", tier: 4, vertical: "General Contractor", status: "selected" },
  { keyword: "solar digital marketing", volume: 320, volDisplay: "320/mo", tier: 2, vertical: "Solar", status: "selected" },
  { keyword: "kitchen remodeling marketing", volume: 260, volDisplay: "260/mo", tier: 2, vertical: "Remodeling", status: "selected" },
  { keyword: "roofing company website design", volume: 260, volDisplay: "260/mo", tier: 3, vertical: "Roofing", status: "selected" },
  { keyword: "home builder digital marketing", volume: 260, volDisplay: "260/mo", tier: 2, vertical: "Home Builders", status: "selected" },
  { keyword: "pool company seo", volume: 260, volDisplay: "260/mo", tier: 1, vertical: "Pool & Spa", status: "selected" },
  { keyword: "pool builder seo", volume: 260, volDisplay: "260/mo", tier: 1, vertical: "Pool & Spa", status: "selected" },
  { keyword: "home builder web design", volume: 260, volDisplay: "260/mo", tier: 3, vertical: "Home Builders", status: "selected" },
  { keyword: "solar company seo", volume: 260, volDisplay: "260/mo", tier: 1, vertical: "Solar", status: "selected" },
  { keyword: "plumber website builder", volume: 260, volDisplay: "260/mo", tier: 3, vertical: "Plumbing", status: "selected" },
  { keyword: "plumbing digital marketing", volume: 260, volDisplay: "260/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "roofing marketing company", volume: 260, volDisplay: "260/mo", tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "lawn care website design", volume: 260, volDisplay: "260/mo", tier: 3, vertical: "Landscaping", status: "selected" },
  { keyword: "flooring seo", volume: 260, volDisplay: "260/mo", tier: 1, vertical: "Flooring", status: "selected" },
  { keyword: "remodeling seo", volume: 260, volDisplay: "260/mo", tier: 1, vertical: "Remodeling", status: "selected" },
  { keyword: "landscaping web design", volume: 260, volDisplay: "260/mo", tier: 3, vertical: "Landscaping", status: "selected" },
  { keyword: "home services web design", volume: 260, volDisplay: "260/mo", tier: 3, vertical: "Home Services", status: "selected" },
  { keyword: "local seo for general contractors", volume: 260, volDisplay: "260/mo", tier: 1, vertical: "General Contractor", status: "selected" },
  { keyword: "ppc for roofers", volume: 260, volDisplay: "260/mo", tier: 4, vertical: "Roofing", status: "selected" },
  { keyword: "pressure washing website", volume: 260, volDisplay: "260/mo", tier: 2, vertical: "Pressure Washing", status: "selected" },
  { keyword: "pressure washing seo", volume: 260, volDisplay: "260/mo", tier: 1, vertical: "Pressure Washing", status: "selected" },
  { keyword: "landscaping leads", volume: 260, volDisplay: "260/mo", tier: 2, vertical: "Landscaping", status: "selected" },
  { keyword: "general contractor leads", volume: 260, volDisplay: "260/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "flooring marketing agency", volume: 260, volDisplay: "260/mo", tier: 2, vertical: "Flooring", status: "selected" },
  { keyword: "ppc for plumbers", volume: 260, volDisplay: "260/mo", tier: 4, vertical: "Plumbing", status: "selected" },
  { keyword: "movers seo", volume: 260, volDisplay: "260/mo", tier: 1, vertical: "Moving Companies", status: "selected" },
  { keyword: "moving company website", volume: 260, volDisplay: "260/mo", tier: 2, vertical: "Moving Companies", status: "selected" },
  { keyword: "local seo for pest control", volume: 210, volDisplay: "210/mo", tier: 1, vertical: "Pest Control", status: "selected" },
  { keyword: "painter marketing", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Painting", status: "selected" },
  { keyword: "marketing for painters", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Painting", status: "selected" },
  { keyword: "flooring marketing", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Flooring", status: "selected" },
  { keyword: "home services website design", volume: 210, volDisplay: "210/mo", tier: 3, vertical: "Home Services", status: "selected" },
  { keyword: "plumber web design", volume: 210, volDisplay: "210/mo", tier: 3, vertical: "Plumbing", status: "selected" },
  { keyword: "seo for home improvement", volume: 210, volDisplay: "210/mo", tier: 1, vertical: "Remodeling", status: "selected" },
  { keyword: "pest control web design", volume: 210, volDisplay: "210/mo", tier: 3, vertical: "Pest Control", status: "selected" },
  { keyword: "marketing for pest control companies", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Pest Control", status: "selected" },
  { keyword: "pest control website design", volume: 210, volDisplay: "210/mo", tier: 3, vertical: "Pest Control", status: "selected" },
  { keyword: "seo for remodeling companies", volume: 210, volDisplay: "210/mo", tier: 1, vertical: "Remodeling", status: "selected" },
  { keyword: "seo for painting companies", volume: 210, volDisplay: "210/mo", tier: 1, vertical: "Painting", status: "selected" },
  { keyword: "online marketing for plumbers", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "pool service marketing", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Pool & Spa", status: "selected" },
  { keyword: "pool builder marketing", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Pool & Spa", status: "selected" },
  { keyword: "solar company marketing", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Solar", status: "selected" },
  { keyword: "bathroom remodeling marketing", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Remodeling", status: "selected" },
  { keyword: "builder website design", volume: 210, volDisplay: "210/mo", tier: 3, vertical: "Home Builders", status: "selected" },
  { keyword: "junk removal website", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Junk Removal", status: "selected" },
  { keyword: "appliance repair marketing", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Appliance Repair", status: "selected" },
  { keyword: "contractor website design company", volume: 210, volDisplay: "210/mo", tier: 3, vertical: "General Contractor", status: "selected" },
  { keyword: "lead generation for plumbers", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "power washing marketing", volume: 210, volDisplay: "210/mo", tier: 2, vertical: "Pressure Washing", status: "selected" },
  { keyword: "google ads for roofers", volume: 210, volDisplay: "210/mo", tier: 4, vertical: "Roofing", status: "selected" },
  { keyword: "google ads for pest control", volume: 210, volDisplay: "210/mo", tier: 4, vertical: "Pest Control", status: "selected" },
  { keyword: "google ads for electricians", volume: 210, volDisplay: "210/mo", tier: 4, vertical: "Electrical", status: "selected" },
  { keyword: "appliance repair website", volume: 170, volDisplay: "170/mo", tier: 2, vertical: "Appliance Repair", status: "selected" },
  { keyword: "online marketing for roofers", volume: 170, volDisplay: "170/mo", tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "flooring website design", volume: 170, volDisplay: "170/mo", tier: 3, vertical: "Flooring", status: "selected" },
  { keyword: "epoxy flooring seo", volume: 170, volDisplay: "170/mo", tier: 1, vertical: "Epoxy Flooring", status: "selected" },
  { keyword: "local seo for roofers", volume: 170, volDisplay: "170/mo", tier: 1, vertical: "Roofing", status: "selected" },
  { keyword: "hvac website builder", volume: 170, volDisplay: "170/mo", tier: 3, vertical: "HVAC", status: "selected" },
  { keyword: "home services leads", volume: 170, volDisplay: "170/mo", tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "pressure washing website design", volume: 170, volDisplay: "170/mo", tier: 3, vertical: "Pressure Washing", status: "selected" },
  { keyword: "commercial construction marketing", volume: 170, volDisplay: "170/mo", tier: 2, vertical: "Commercial Construction", status: "selected" },
  { keyword: "plumbing company seo", volume: 170, volDisplay: "170/mo", tier: 1, vertical: "Plumbing", status: "selected" },
  { keyword: "window contractor marketing", volume: 170, volDisplay: "170/mo", tier: 2, vertical: "Windows & Doors", status: "selected" },
  { keyword: "home improvement website design", volume: 170, volDisplay: "170/mo", tier: 3, vertical: "Remodeling", status: "selected" },
  { keyword: "junk removal website design", volume: 170, volDisplay: "170/mo", tier: 3, vertical: "Junk Removal", status: "selected" },
  { keyword: "appliance repair seo", volume: 170, volDisplay: "170/mo", tier: 1, vertical: "Appliance Repair", status: "selected" },
  { keyword: "roofing website builder", volume: 170, volDisplay: "170/mo", tier: 3, vertical: "Roofing", status: "selected" },
  { keyword: "social media marketing for contractors", volume: 170, volDisplay: "170/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "restoration company seo", volume: 170, volDisplay: "170/mo", tier: 1, vertical: "Restoration & Remediation", status: "selected" },
  { keyword: "water damage restoration seo", volume: 170, volDisplay: "170/mo", tier: 1, vertical: "Restoration & Remediation", status: "selected" },
  { keyword: "home remodeling website design", volume: 170, volDisplay: "170/mo", tier: 3, vertical: "Remodeling", status: "selected" },
  { keyword: "ppc for hvac companies", volume: 170, volDisplay: "170/mo", tier: 4, vertical: "HVAC", status: "selected" },
  { keyword: "facebook ads for contractors", volume: 170, volDisplay: "170/mo", tier: 4, vertical: "General Contractor", status: "selected" },
  { keyword: "masonry seo", volume: 140, volDisplay: "140/mo", tier: 1, vertical: "Masonry & Concrete", status: "selected" },
  { keyword: "siding company seo", volume: 140, volDisplay: "140/mo", tier: 1, vertical: "Siding", status: "selected" },
  { keyword: "google ads for hvac", volume: 140, volDisplay: "140/mo", tier: 4, vertical: "HVAC", status: "selected" },
  { keyword: "movers marketing", volume: 140, volDisplay: "140/mo", tier: 2, vertical: "Moving Companies", status: "selected" },
  { keyword: "moving company digital marketing", volume: 140, volDisplay: "140/mo", tier: 2, vertical: "Moving Companies", status: "selected" },
  { keyword: "locksmith marketing", volume: 140, volDisplay: "140/mo", tier: 2, vertical: "Locksmith", status: "selected" },
  { keyword: "restoration company marketing", volume: 140, volDisplay: "140/mo", tier: 2, vertical: "Restoration & Remediation", status: "selected" },
  { keyword: "pool service seo", volume: 140, volDisplay: "140/mo", tier: 1, vertical: "Pool & Spa", status: "selected" },
  { keyword: "garage door digital marketing", volume: 140, volDisplay: "140/mo", tier: 2, vertical: "Garage Doors", status: "selected" },
  { keyword: "google ads for painters", volume: 140, volDisplay: "140/mo", tier: 4, vertical: "Painting", status: "selected" },
  { keyword: "local seo for landscapers", volume: 140, volDisplay: "140/mo", tier: 1, vertical: "Landscaping", status: "selected" },
  { keyword: "painting marketing agency", volume: 140, volDisplay: "140/mo", tier: 2, vertical: "Painting", status: "selected" },
  { keyword: "roofer website design", volume: 140, volDisplay: "140/mo", tier: 3, vertical: "Roofing", status: "selected" },
  { keyword: "plumbing web design", volume: 140, volDisplay: "140/mo", tier: 3, vertical: "Plumbing", status: "selected" },
  { keyword: "handyman marketing", volume: 140, volDisplay: "140/mo", tier: 2, vertical: "Handyman", status: "selected" },
  { keyword: "tree service website design", volume: 140, volDisplay: "140/mo", tier: 3, vertical: "Tree Service", status: "selected" },
  { keyword: "electrical contractor website", volume: 140, volDisplay: "140/mo", tier: 2, vertical: "Electrical", status: "selected" },
  { keyword: "painting seo", volume: 140, volDisplay: "140/mo", tier: 1, vertical: "Painting", status: "selected" },
  { keyword: "chimney sweep marketing", volume: 140, volDisplay: "140/mo", tier: 2, vertical: "Chimney", status: "selected" },
  { keyword: "lead generation for roofers", volume: 140, volDisplay: "140/mo", tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "google ads for landscapers", volume: 140, volDisplay: "140/mo", tier: 4, vertical: "Landscaping", status: "selected" },
  { keyword: "insulation marketing", volume: 110, volDisplay: "110/mo", tier: 2, vertical: "Drywall & Insulation", status: "selected" },
  { keyword: "solar web design", volume: 110, volDisplay: "110/mo", tier: 3, vertical: "Solar", status: "selected" },
  { keyword: "gutter marketing", volume: 110, volDisplay: "110/mo", tier: 2, vertical: "Gutters", status: "selected" },
  { keyword: "mold remediation marketing", volume: 110, volDisplay: "110/mo", tier: 2, vertical: "Restoration & Remediation", status: "selected" },
  { keyword: "ppc for electricians", volume: 110, volDisplay: "110/mo", tier: 4, vertical: "Electrical", status: "selected" },
  { keyword: "locksmith website", volume: 110, volDisplay: "110/mo", tier: 2, vertical: "Locksmith", status: "selected" },
  { keyword: "appliance repair website design", volume: 110, volDisplay: "110/mo", tier: 3, vertical: "Appliance Repair", status: "selected" },
  { keyword: "reputation management for contractors", volume: 110, volDisplay: "110/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "moving company website design", volume: 110, volDisplay: "110/mo", tier: 3, vertical: "Moving Companies", status: "selected" },
  { keyword: "internet marketing for roofers", volume: 110, volDisplay: "110/mo", tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "construction website company", volume: 110, volDisplay: "110/mo", tier: 3, vertical: "Commercial Construction", status: "selected" },
  { keyword: "handyman website design", volume: 110, volDisplay: "110/mo", tier: 3, vertical: "Handyman", status: "selected" },
  { keyword: "paving company seo", volume: 110, volDisplay: "110/mo", tier: 1, vertical: "General Contractor", status: "selected" },
  { keyword: "painting company website design", volume: 110, volDisplay: "110/mo", tier: 3, vertical: "Painting", status: "selected" },
  { keyword: "solar installer marketing", volume: 110, volDisplay: "110/mo", tier: 2, vertical: "Solar", status: "selected" },
  { keyword: "concrete marketing", volume: 110, volDisplay: "110/mo", tier: 2, vertical: "Masonry & Concrete", status: "selected" },
  { keyword: "lead generation for home services", volume: 110, volDisplay: "110/mo", tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "window installation marketing", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Windows & Doors", status: "selected" },
  { keyword: "roofing company website", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Roofing", status: "selected" },
  { keyword: "bathroom remodeling seo", volume: 90, volDisplay: "90/mo", tier: 1, vertical: "Remodeling", status: "selected" },
  { keyword: "flooring web design", volume: 90, volDisplay: "90/mo", tier: 3, vertical: "Flooring", status: "selected" },
  { keyword: "movers website", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Moving Companies", status: "selected" },
  { keyword: "security company marketing", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Security Systems", status: "selected" },
  { keyword: "facebook ads for plumbers", volume: 90, volDisplay: "90/mo", tier: 4, vertical: "Plumbing", status: "selected" },
  { keyword: "lead generation for hvac", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "HVAC", status: "selected" },
  { keyword: "electrical marketing agency", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Electrical", status: "selected" },
  { keyword: "landscaping website builder", volume: 90, volDisplay: "90/mo", tier: 3, vertical: "Landscaping", status: "selected" },
  { keyword: "lead generation for electricians", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Electrical", status: "selected" },
  { keyword: "septic service marketing", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Septic & Drain", status: "selected" },
  { keyword: "moving company marketing agency", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Moving Companies", status: "selected" },
  { keyword: "pool company marketing", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Pool & Spa", status: "selected" },
  { keyword: "commercial contractor marketing", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Commercial Construction", status: "selected" },
  { keyword: "handyman web design", volume: 90, volDisplay: "90/mo", tier: 3, vertical: "Handyman", status: "selected" },
  { keyword: "concrete contractor marketing", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Masonry & Concrete", status: "selected" },
  { keyword: "online marketing for electricians", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Electrical", status: "selected" },
  { keyword: "concrete contractor seo", volume: 90, volDisplay: "90/mo", tier: 1, vertical: "Masonry & Concrete", status: "selected" },
  { keyword: "painting contractor website", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Painting", status: "selected" },
  { keyword: "contractor website builder", volume: 90, volDisplay: "90/mo", tier: 3, vertical: "General Contractor", status: "selected" },
  { keyword: "landscaper website design", volume: 90, volDisplay: "90/mo", tier: 3, vertical: "Landscaping", status: "selected" },
  { keyword: "window company marketing", volume: 90, volDisplay: "90/mo", tier: 2, vertical: "Windows & Doors", status: "selected" },
  { keyword: "home services reputation management", volume: 70, volDisplay: "70/mo", tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "painting company marketing", volume: 70, volDisplay: "70/mo", tier: 2, vertical: "Painting", status: "selected" },
  { keyword: "security company website", volume: 70, volDisplay: "70/mo", tier: 2, vertical: "Security Systems", status: "selected" },
  { keyword: "social media marketing for home services", volume: 70, volDisplay: "70/mo", tier: 2, vertical: "Home Services", status: "selected" },
  { keyword: "locksmith company seo", volume: 70, volDisplay: "70/mo", tier: 1, vertical: "Locksmith", status: "selected" },
  { keyword: "contractor reputation management", volume: 70, volDisplay: "70/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "security company seo", volume: 70, volDisplay: "70/mo", tier: 1, vertical: "Security Systems", status: "selected" },
  { keyword: "hvac company website design", volume: 70, volDisplay: "70/mo", tier: 3, vertical: "HVAC", status: "selected" },
  { keyword: "general contractor web design", volume: 70, volDisplay: "70/mo", tier: 3, vertical: "General Contractor", status: "selected" },
  { keyword: "basement waterproofing marketing", volume: 70, volDisplay: "70/mo", tier: 2, vertical: "Foundation & Waterproofing", status: "selected" },
  { keyword: "garage door company seo", volume: 70, volDisplay: "70/mo", tier: 1, vertical: "Windows & Doors", status: "selected" },
  { keyword: "paving marketing", volume: 70, volDisplay: "70/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "irrigation marketing", volume: 70, volDisplay: "70/mo", tier: 2, vertical: "Irrigation & Sprinkler", status: "selected" },
  { keyword: "garage door company marketing", volume: 70, volDisplay: "70/mo", tier: 2, vertical: "Windows & Doors", status: "selected" },
  { keyword: "remodeling website design", volume: 70, volDisplay: "70/mo", tier: 3, vertical: "Remodeling", status: "selected" },
  { keyword: "marketing for tree service companies", volume: 70, volDisplay: "70/mo", tier: 2, vertical: "Tree Service", status: "selected" },
  { keyword: "seo for concrete companies", volume: 70, volDisplay: "70/mo", tier: 1, vertical: "Masonry & Concrete", status: "selected" },
  { keyword: "tree service web design", volume: 50, volDisplay: "50/mo", tier: 3, vertical: "Tree Service", status: "selected" },
  { keyword: "fencing marketing", volume: 50, volDisplay: "50/mo", tier: 2, vertical: "Fencing", status: "selected" },
  { keyword: "plumbing company website", volume: 50, volDisplay: "50/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "handyman seo", volume: 50, volDisplay: "50/mo", tier: 1, vertical: "Handyman", status: "selected" },
  { keyword: "metal fabrication website", volume: 50, volDisplay: "50/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "contractor digital marketing agency", volume: 50, volDisplay: "50/mo", tier: 2, vertical: "General Contractor", status: "selected" },
  { keyword: "concrete contractor website design", volume: 50, volDisplay: "50/mo", tier: 3, vertical: "Masonry & Concrete", status: "selected" },
  { keyword: "handyman website builder", volume: 50, volDisplay: "50/mo", tier: 3, vertical: "Handyman", status: "selected" },
  { keyword: "pressure washing company marketing", volume: 50, volDisplay: "50/mo", tier: 2, vertical: "Pressure Washing", status: "selected" },
  { keyword: "social media for plumbers", volume: 50, volDisplay: "50/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "junk removal digital marketing", volume: 50, volDisplay: "50/mo", tier: 2, vertical: "Junk Removal", status: "selected" },
  { keyword: "reputation management for plumbers", volume: 50, volDisplay: "50/mo", tier: 2, vertical: "Plumbing", status: "selected" },
  { keyword: "locksmith marketing agency", volume: 50, volDisplay: "50/mo", tier: 2, vertical: "Locksmith", status: "selected" },
  { keyword: "local seo for painters", volume: 50, volDisplay: "50/mo", tier: 1, vertical: "Painting", status: "selected" },
  { keyword: "power washing website", volume: 50, volDisplay: "50/mo", tier: 2, vertical: "Pressure Washing", status: "selected" },
  { keyword: "locksmith website design", volume: 50, volDisplay: "50/mo", tier: 3, vertical: "Locksmith", status: "selected" }
];

const NOT_USED = [
  { keyword: "seo for cleaning companies", volume: 210, volDisplay: "210/mo", reason: "Out of ICP (Cleaning vertical removed per strategy direction)" },
  { keyword: "cleaning company website design", volume: 140, volDisplay: "140/mo", reason: "Out of ICP (Cleaning vertical removed per strategy direction)" },
  { keyword: "cleaning service website design", volume: 140, volDisplay: "140/mo", reason: "Out of ICP (Cleaning vertical removed per strategy direction)" },
  { keyword: "cleaning website design", volume: 110, volDisplay: "110/mo", reason: "Out of ICP (Cleaning vertical removed per strategy direction)" },
  { keyword: "cleaning service marketing", volume: 110, volDisplay: "110/mo", reason: "Out of ICP (Cleaning vertical removed per strategy direction)" },
  { keyword: "cleaning company marketing", volume: 110, volDisplay: "110/mo", reason: "Out of ICP (Cleaning vertical removed per strategy direction)" },
  { keyword: "gutter cleaning website", volume: 90, volDisplay: "90/mo", reason: "Out of ICP (Cleaning vertical removed per strategy direction)" },
  { keyword: "cleaning seo", volume: 90, volDisplay: "90/mo", reason: "Out of ICP (Cleaning vertical removed per strategy direction)" }
];

const ICP_VERTICALS = [
  { num: 1, vertical: "General Contractor", keywords: 34, tierFocus: "Tiers 1-4", icpDesc: "General contractors and construction companies searching for website design, SEO, and marketing partners." },
  { num: 2, vertical: "Plumbing", keywords: 25, tierFocus: "Tiers 1-4", icpDesc: "Plumbing companies and plumbers searching for websites, SEO, digital marketing, and lead generation." },
  { num: 3, vertical: "Roofing", keywords: 21, tierFocus: "Tiers 1-4", icpDesc: "Roofing companies and roofers searching for websites, SEO, digital marketing, and roofing leads." },
  { num: 4, vertical: "HVAC", keywords: 17, tierFocus: "Tiers 1-4", icpDesc: "HVAC companies searching for marketing agencies, SEO, website design, and digital marketing services." },
  { num: 5, vertical: "Landscaping", keywords: 16, tierFocus: "Tiers 1-4", icpDesc: "Landscaping companies and lawn care businesses searching for websites, SEO, and marketing." },
  { num: 6, vertical: "Remodeling", keywords: 16, tierFocus: "Tiers 1-4", icpDesc: "Remodeling and renovation companies searching for websites, SEO, and digital marketing." },
  { num: 7, vertical: "Electrical", keywords: 16, tierFocus: "Tiers 1-4", icpDesc: "Electricians and electrical contractors searching for websites, SEO, and marketing services." },
  { num: 8, vertical: "Home Services", keywords: 12, tierFocus: "Tiers 1-2", icpDesc: "Broad home services companies searching for marketing agencies and digital marketing partners." },
  { num: 9, vertical: "Pest Control", keywords: 10, tierFocus: "Tiers 1-4", icpDesc: "Pest control companies searching for websites, SEO, marketing agencies, and lead generation." },
  { num: 10, vertical: "Painting", keywords: 10, tierFocus: "Tiers 1-4", icpDesc: "Painting companies and painters searching for websites, SEO, and marketing services." },
  { num: 11, vertical: "Moving Companies", keywords: 9, tierFocus: "Tiers 1-2", icpDesc: "Moving companies and movers searching for websites, SEO, and digital marketing." },
  { num: 12, vertical: "Commercial Construction", keywords: 9, tierFocus: "Tiers 1-2", icpDesc: "Commercial construction companies and builders searching for marketing and web design." },
  { num: 13, vertical: "Home Builders", keywords: 7, tierFocus: "Tiers 1-2", icpDesc: "Custom home builders and residential construction companies searching for marketing and web design." },
  { num: 14, vertical: "Pressure Washing", keywords: 7, tierFocus: "Tiers 1-3", icpDesc: "Pressure washing and power washing companies searching for websites, SEO, and marketing." },
  { num: 15, vertical: "Solar", keywords: 6, tierFocus: "Tiers 1-2", icpDesc: "Solar installation companies searching for SEO, marketing agencies, and digital marketing." },
  { num: 16, vertical: "Restoration & Remediation", keywords: 6, tierFocus: "Tiers 1-2", icpDesc: "Water damage, fire restoration, and mold remediation companies searching for marketing and SEO." },
  { num: 17, vertical: "Pool & Spa", keywords: 6, tierFocus: "Tiers 1-2", icpDesc: "Pool builders and pool service companies searching for SEO and marketing services." },
  { num: 18, vertical: "Locksmith", keywords: 6, tierFocus: "Tiers 1-2", icpDesc: "Locksmith companies searching for websites, SEO, and digital marketing services." },
  { num: 19, vertical: "Flooring", keywords: 6, tierFocus: "Tiers 1-2", icpDesc: "Flooring companies and contractors searching for SEO, marketing, and website design." },
  { num: 20, vertical: "Handyman", keywords: 6, tierFocus: "Tiers 1-3", icpDesc: "Handyman businesses searching for websites, SEO, and marketing services." },
  { num: 21, vertical: "Masonry & Concrete", keywords: 6, tierFocus: "Tiers 1-2", icpDesc: "Masonry and concrete contractors searching for websites, SEO, and marketing." },
  { num: 22, vertical: "Windows & Doors", keywords: 5, tierFocus: "Tiers 1-2", icpDesc: "Window and door replacement companies searching for marketing and website design." },
  { num: 23, vertical: "Junk Removal", keywords: 5, tierFocus: "Tiers 1-3", icpDesc: "Junk removal companies searching for websites, SEO, and digital marketing services." },
  { num: 24, vertical: "Tree Service", keywords: 5, tierFocus: "Tiers 1-2", icpDesc: "Tree service companies and arborists searching for SEO and marketing services." },
  { num: 25, vertical: "Appliance Repair", keywords: 4, tierFocus: "Tiers 1-3", icpDesc: "Appliance repair companies searching for websites, SEO, and marketing." },
  { num: 26, vertical: "Security Systems", keywords: 3, tierFocus: "Tiers 1-2", icpDesc: "Security and alarm companies searching for websites, SEO, and marketing." },
  { num: 27, vertical: "Garage Doors", keywords: 3, tierFocus: "Tiers 1-2", icpDesc: "Garage door companies searching for SEO and marketing services." },
  { num: 28, vertical: "Fencing", keywords: 3, tierFocus: "Tiers 1-2", icpDesc: "Fence companies and fencing contractors searching for websites, SEO, and marketing." },
  { num: 29, vertical: "Foundation & Waterproofing", keywords: 3, tierFocus: "Tiers 1-2", icpDesc: "Foundation repair and waterproofing companies searching for SEO and marketing." },
  { num: 30, vertical: "Chimney", keywords: 1, tierFocus: "Tier 2", icpDesc: "Chimney sweep and chimney repair companies searching for marketing services." },
  { num: 31, vertical: "Drywall & Insulation", keywords: 1, tierFocus: "Tier 3", icpDesc: "Drywall and insulation contractors searching for website design and marketing." },
  { num: 32, vertical: "Epoxy Flooring", keywords: 1, tierFocus: "Tier 1", icpDesc: "Epoxy flooring and concrete coating companies searching for SEO services." },
  { num: 33, vertical: "Irrigation & Sprinkler", keywords: 1, tierFocus: "Tier 2", icpDesc: "Irrigation and sprinkler system companies searching for marketing and website design." },
  { num: 34, vertical: "Gutters", keywords: 1, tierFocus: "Tiers 1-3", icpDesc: "Gutter installation and cleaning companies searching for websites and marketing." },
  { num: 35, vertical: "Septic & Drain", keywords: 1, tierFocus: "Tier 2", icpDesc: "Septic and drain cleaning companies searching for marketing services." },
  { num: 36, vertical: "Siding", keywords: 1, tierFocus: "Tiers 1-2", icpDesc: "Siding contractors and installation companies searching for SEO and marketing." }
];

const OPPORTUNITIES = [
  { title: "Level I Upgrade", subtitle: "Add 50+ more keyword targets", desc: "Expand into deeper keyword variations for existing verticals, including more intent terms, branded competitor comparisons, and long-tail service-specific keywords across all trade verticals.", items: ["Additional website design variations per trade", "Competitor comparison keywords", "Long-tail service-specific terms", "Seasonal and regional keyword variations"] },
  { title: "Blog & Content Strategy", subtitle: "Informational keyword layer", desc: "Layer a blog and content strategy on top of the commercial keyword pages to capture top-of-funnel traffic from trade business owners researching how to grow their business online.", items: ["How-to guides for trade business owners", "Industry-specific marketing tips", "Website ROI calculators for contractors", "Case studies by trade vertical"] },
  { title: "Paid Search Amplification", subtitle: "Google Ads for 16 high-intent keywords", desc: "The 16 Tier 4 Google Ads and PPC keywords in this plan represent an immediate paid search opportunity. Running Google Ads against these terms while organic pages are building authority can accelerate lead generation.", items: ["Google Ads for contractors (320/mo)", "PPC for roofers (260/mo)", "Google Ads for plumbers (480/mo)", "Facebook Ads for contractors (170/mo)"] }
];

const TIER_META = [
  { tier: 1, label: 'Tier 1: SEO for Trades', count: 69, color: '#3F80EA', desc: 'Business owners actively searching for an SEO agency or SEO company for their specific trade. These are the highest-intent keywords in the plan.' },
  { tier: 2, label: 'Tier 2: Digital Marketing for Trades', count: 146, color: '#334168', desc: 'Contractors searching for digital marketing agencies, marketing companies, lead generation, local SEO, social media marketing, and reputation management for their specific trade.' },
  { tier: 3, label: 'Tier 3: Website Design for Trades', count: 58, color: '#EB0052', desc: 'Business owners searching for a website design company, web designer, or website builder for their specific trade. These keywords represent the most direct alignment with Dotcom Design core service offering.' },
  { tier: 4, label: 'Tier 4: Google Ads & PPC for Trades', count: 16, color: '#6B7280', desc: 'Contractors searching for Google Ads management, PPC agencies, and paid advertising services for their trade. Lower volume but very high commercial intent.' },
];

const VERTICAL_GROUPS = [
  { label: 'HIGH COVERAGE: 10+ KEYWORDS', sublabel: 'Core Trade Verticals', desc: 'These verticals receive the most keyword coverage in the plan, reflecting the highest search demand and strongest ICP alignment.', verticals: ICP_VERTICALS.filter(v => v.keywords >= 10).map(v => v.vertical) },
  { label: 'MID COVERAGE: 5-9 KEYWORDS', sublabel: 'Strong Secondary Verticals', desc: 'These verticals have solid keyword coverage and represent strong secondary ICP segments with high commercial intent.', verticals: ICP_VERTICALS.filter(v => v.keywords >= 5 && v.keywords < 10).map(v => v.vertical) },
  { label: 'TARGETED: 2-4 KEYWORDS', sublabel: 'Targeted Verticals', desc: 'Smaller verticals with focused keyword coverage. Strong candidates for deeper expansion in future plan upgrades.', verticals: ICP_VERTICALS.filter(v => v.keywords >= 2 && v.keywords < 5).map(v => v.vertical) },
  { label: 'EMERGING: 1 KEYWORD', sublabel: 'Emerging Verticals', desc: 'New verticals with initial keyword coverage. These represent early-mover opportunities in trades where search volume is growing.', verticals: ICP_VERTICALS.filter(v => v.keywords < 2).map(v => v.vertical) },
];

document.addEventListener('DOMContentLoaded', function () {

  // Stat cards
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length >= 4) {
    statNumbers[0].textContent = STRATEGY_STATS.totalKeywords;
    statNumbers[1].textContent = STRATEGY_STATS.totalVerticals;
    statNumbers[2].textContent = STRATEGY_STATS.totalTiers;
    statNumbers[3].textContent = STRATEGY_STATS.keywordsResearched;
  }

  // ICP Table
  const icpBody = document.getElementById('icp-table-body');
  if (icpBody) {
    icpBody.innerHTML = ICP_VERTICALS.map(function(v) {
      return '<tr><td>' + v.num + '</td><td><strong>' + v.vertical + '</strong></td><td class="num-col">' + v.keywords + '</td><td>' + v.tierFocus + '</td><td>' + v.icpDesc + '</td></tr>';
    }).join('');
  }

  // Mobile ICP list
  const mobileIcp = document.getElementById('mobile-icp-list');
  if (mobileIcp) {
    mobileIcp.innerHTML = ICP_VERTICALS.map(function(v) {
      return '<div class="mobile-market-item"><span class="mobile-market-name">' + v.vertical + '</span><span class="mobile-market-pop">' + v.keywords + ' kws</span></div>';
    }).join('');
  }

  // Vertical tier cards
  const tierCardsGrid = document.getElementById('vertical-tier-cards');
  if (tierCardsGrid) {
    tierCardsGrid.innerHTML = VERTICAL_GROUPS.map(function(group) {
      const listItems = group.verticals.map(function(v) {
        const meta = ICP_VERTICALS.find(function(x) { return x.vertical === v; });
        const kwCount = meta ? '<span class="kw-count">' + meta.keywords + ' kws</span>' : '';
        return '<li>&#9733; <strong>' + v + '</strong>' + kwCount + '</li>';
      }).join('');
      return '<div class="tier-card"><div class="tier-card-badge">' + group.label + '</div><h4 class="tier-card-title">' + group.sublabel + '</h4><p class="tier-card-desc">' + group.desc + '</p><ul class="tier-card-list">' + listItems + '</ul></div>';
    }).join('');
  }

  // Keyword table
  const kwBody = document.getElementById('kw-table-body');
  if (kwBody) {
    const allRows = ALL_KEYWORDS.concat(NOT_USED.map(function(k) { return Object.assign({}, k, { tier: '-', vertical: 'Not Used', status: 'excluded' }); }));
    allRows.sort(function(a, b) { return b.volume - a.volume; });
    kwBody.innerHTML = allRows.map(function(k) {
      const rowClass = k.status === 'excluded' ? ' class="row-excluded"' : '';
      const tierDisplay = k.tier !== '-' ? 'Tier ' + k.tier : '-';
      const statusLabel = k.status === 'selected' ? 'Selected' : 'Excluded';
      return '<tr' + rowClass + '><td>' + k.keyword + '</td><td class="num-col">' + k.volDisplay + '</td><td>' + tierDisplay + '</td><td>' + k.vertical + '</td><td><span class="status-badge status-' + k.status + '">' + statusLabel + '</span></td></tr>';
    }).join('');
  }

  // Keyword tier grid
  const kwTierGrid = document.getElementById('kw-tier-grid');
  if (kwTierGrid) {
    kwTierGrid.innerHTML = TIER_META.map(function(t) {
      const tierKws = ALL_KEYWORDS.filter(function(k) { return k.tier === t.tier; }).sort(function(a, b) { return b.volume - a.volume; });
      const rows = tierKws.map(function(k) { return '<tr><td>' + k.keyword + '</td><td class="num-col">' + k.volDisplay + '</td></tr>'; }).join('');
      return '<div class="kw-tier-block" style="border-top: 4px solid ' + t.color + '"><div class="kw-tier-header"><span class="kw-tier-label" style="color:' + t.color + '">' + t.label + '</span><span class="kw-tier-count">' + t.count + ' keywords</span></div><p class="kw-tier-desc">' + t.desc + '</p><table class="data-table kw-mini-table"><thead><tr><th>Keyword</th><th class="num-col">Monthly Searches</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    }).join('');
  }

  // Matrix vertical grid
  const matrixGrid = document.getElementById('matrix-vertical-grid');
  if (matrixGrid) {
    const verticals = [];
    ALL_KEYWORDS.forEach(function(k) { if (verticals.indexOf(k.vertical) === -1) verticals.push(k.vertical); });
    verticals.sort();
    const verticalData = verticals.map(function(v) {
      return { vertical: v, keywords: ALL_KEYWORDS.filter(function(k) { return k.vertical === v; }).sort(function(a, b) { return b.volume - a.volume; }) };
    }).sort(function(a, b) { return b.keywords.length - a.keywords.length; });

    const matrixCards = verticalData.map(function(vd) {
      const kwItems = vd.keywords.map(function(k) {
        return '<li class="matrix-keyword-item"><span class="matrix-kw-text">' + k.keyword + '</span><span class="matrix-kw-vol">' + k.volDisplay + '</span></li>';
      }).join('');
      return '<div class="matrix-vertical-card"><div class="matrix-vertical-header"><span class="matrix-vertical-name">' + vd.vertical + '</span><span class="matrix-vertical-count">' + vd.keywords.length + ' keywords</span></div><ul class="matrix-keyword-list">' + kwItems + '</ul></div>';
    }).join('');
    matrixGrid.innerHTML = '<div class="matrix-grid">' + matrixCards + '</div>';

    const grandTotal = document.getElementById('matrix-grand-total');
    if (grandTotal) {
      grandTotal.textContent = 'Total: ' + ALL_KEYWORDS.length + ' keyword page targets across ' + verticalData.length + ' trade verticals';
    }
  }

  // Not Used grid
  const notUsedGrid = document.getElementById('not-used-grid');
  if (notUsedGrid && NOT_USED.length > 0) {
    const grouped = {};
    NOT_USED.forEach(function(k) {
      if (!grouped[k.reason]) grouped[k.reason] = [];
      grouped[k.reason].push(k);
    });
    notUsedGrid.innerHTML = Object.keys(grouped).map(function(reason) {
      const kws = grouped[reason];
      const items = kws.map(function(k) { return '<li><span class="not-used-kw">' + k.keyword + '</span><span class="not-used-vol">' + k.volDisplay + '</span></li>'; }).join('');
      return '<div class="not-used-card"><h4 class="not-used-reason">' + reason + '</h4><ul class="not-used-list">' + items + '</ul></div>';
    }).join('');
  }

  // Opportunities grid
  const oppGrid = document.getElementById('opportunities-grid');
  if (oppGrid) {
    oppGrid.innerHTML = OPPORTUNITIES.map(function(opp) {
      const items = opp.items.map(function(item) { return '<li>' + item + '</li>'; }).join('');
      return '<div class="opp-card"><h4 class="opp-title">' + opp.title + '</h4><p class="opp-subtitle">' + opp.subtitle + '</p><p class="opp-desc">' + opp.desc + '</p><ul class="opp-list">' + items + '</ul></div>';
    }).join('');
  }

});
