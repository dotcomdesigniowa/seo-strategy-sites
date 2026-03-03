// ============================================================
// SEO Strategy Website — App.js
// Client: MEK Interiors & Floors
// Loads strategy data and populates all dynamic sections
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// Reference design: durhamstreeservice.com
// ============================================================
const STRATEGY = {
  client_name: "MEK Interiors & Floors",
  industry: "Flooring Contractor",
  hq_city: "Houston",
  state: "TX",
  service_area: "Greater Houston, TX",
  plan_level: "Booster",
  plan_price: 399,
  total_combinations: 10,
  total_keywords_researched: 401,
  // Selected keywords: service-line coverage enforced
  // Residential installation, commercial flooring, carpet, hardwood, vinyl, tile, laminate, contractor
  selected_keywords: [
    "carpet installation",
    "hardwood floor installation",
    "tile installation",
    "flooring contractor",
    "laminate flooring installation",
    "commercial flooring",
    "vinyl plank flooring installation",
    "commercial flooring contractor",
    "flooring company",
    "floor installation"
  ],
  num_selected_keywords: 10,

  // ---- KEYWORD TABLE (full consideration list, grouped by variant family) ----
  // Each keyword has: family (groups variants together), variant_type (base|variant|plural|near_me|short_form)
  keyword_table: [
    // Flooring (base/broad) family
    { keyword: "flooring",                          monthly_searches: 33100, tier: "Tier 1", status: "not_used",  family: "flooring",                      variant_type: "base",     note: "Too broad for standalone targeting" },
    { keyword: "flooring near me",                  monthly_searches: 33100, tier: "Tier 1", status: "near_me",  family: "flooring",                      variant_type: "near_me",  note: "" },
    // Carpet Installation family
    { keyword: "carpet installation",               monthly_searches: 27100, tier: "Tier 1", status: "selected", family: "carpet installation",            variant_type: "base",     note: "" },
    { keyword: "carpet installation near me",       monthly_searches: 14800, tier: "Tier 1", status: "near_me",  family: "carpet installation",            variant_type: "near_me",  note: "" },
    { keyword: "carpet installation services",      monthly_searches:  2400, tier: "Tier 1", status: "not_used", family: "carpet installation",            variant_type: "variant",  note: "" },
    { keyword: "carpet installation companies",     monthly_searches:  1600, tier: "Tier 1", status: "not_used", family: "carpet installation",            variant_type: "variant",  note: "" },
    { keyword: "carpet installation contractor",    monthly_searches:   390, tier: "Tier 1", status: "not_used", family: "carpet installation",            variant_type: "variant",  note: "" },
    { keyword: "carpet installation contractors",   monthly_searches:   260, tier: "Tier 1", status: "not_used", family: "carpet installation",            variant_type: "plural",   note: "" },
    // Carpet Replacement family
    { keyword: "carpet replacement",                monthly_searches:  3600, tier: "Tier 1", status: "not_used", family: "carpet replacement",             variant_type: "base",     note: "" },
    { keyword: "carpet replacement near me",        monthly_searches:  1300, tier: "Tier 1", status: "near_me",  family: "carpet replacement",             variant_type: "near_me",  note: "" },
    // Flooring Installation family
    { keyword: "flooring installation",             monthly_searches: 18100, tier: "Tier 1", status: "not_used", family: "flooring installation",          variant_type: "base",     note: "" },
    { keyword: "flooring installation near me",     monthly_searches:  9900, tier: "Tier 1", status: "near_me",  family: "flooring installation",          variant_type: "near_me",  note: "" },
    { keyword: "flooring installation services",    monthly_searches:  1600, tier: "Tier 2", status: "not_used", family: "flooring installation",          variant_type: "variant",  note: "" },
    { keyword: "flooring installation contractor",  monthly_searches:   210, tier: "Tier 2", status: "not_used", family: "flooring installation",          variant_type: "variant",  note: "" },
    // Tile Installation family
    { keyword: "tile installation",                 monthly_searches: 14800, tier: "Tier 3", status: "selected", family: "tile installation",              variant_type: "base",     note: "" },
    { keyword: "tile installation near me",         monthly_searches:  9900, tier: "Tier 3", status: "near_me",  family: "tile installation",              variant_type: "near_me",  note: "" },
    { keyword: "tile flooring installation",        monthly_searches:  1900, tier: "Tier 3", status: "not_used", family: "tile installation",              variant_type: "variant",  note: "" },
    { keyword: "tile installation companies",       monthly_searches:  1300, tier: "Tier 3", status: "not_used", family: "tile installation",              variant_type: "variant",  note: "" },
    { keyword: "tile installation contractors",     monthly_searches:  1000, tier: "Tier 3", status: "not_used", family: "tile installation",              variant_type: "plural",   note: "" },
    { keyword: "tile installation services",        monthly_searches:   720, tier: "Tier 3", status: "not_used", family: "tile installation",              variant_type: "variant",  note: "" },
    { keyword: "tile installation contractor",      monthly_searches:   320, tier: "Tier 3", status: "not_used", family: "tile installation",              variant_type: "variant",  note: "" },
    { keyword: "tile flooring installer",           monthly_searches:   320, tier: "Tier 3", status: "not_used", family: "tile installation",              variant_type: "variant",  note: "" },
    { keyword: "tile flooring contractors",         monthly_searches:   260, tier: "Tier 3", status: "not_used", family: "tile installation",              variant_type: "plural",   note: "" },
    // Hardwood Floor Installation family
    { keyword: "hardwood floor installation",       monthly_searches:  9900, tier: "Tier 1", status: "selected", family: "hardwood installation",          variant_type: "base",     note: "" },
    { keyword: "hardwood floor installation near me",monthly_searches: 2900, tier: "Tier 1", status: "near_me",  family: "hardwood installation",          variant_type: "near_me",  note: "" },
    { keyword: "hardwood flooring installation",    monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "hardwood installation",          variant_type: "variant",  note: "" },
    { keyword: "hardwood flooring contractors",     monthly_searches:   720, tier: "Tier 1", status: "not_used", family: "hardwood installation",          variant_type: "plural",   note: "" },
    { keyword: "hardwood flooring contractor",      monthly_searches:   390, tier: "Tier 1", status: "not_used", family: "hardwood installation",          variant_type: "variant",  note: "" },
    // Flooring Contractor family
    { keyword: "flooring contractor",               monthly_searches:  8100, tier: "Tier 2", status: "selected", family: "flooring contractor",            variant_type: "base",     note: "" },
    { keyword: "flooring contractor near me",       monthly_searches:  2400, tier: "Tier 2", status: "near_me",  family: "flooring contractor",            variant_type: "near_me",  note: "" },
    { keyword: "flooring contractors",              monthly_searches:  6600, tier: "Tier 2", status: "not_used", family: "flooring contractor",            variant_type: "plural",   note: "" },
    { keyword: "flooring contractors near me",      monthly_searches: 12100, tier: "Tier 2", status: "near_me",  family: "flooring contractor",            variant_type: "near_me",  note: "" },
    { keyword: "flooring installers",               monthly_searches:  1900, tier: "Tier 2", status: "not_used", family: "flooring contractor",            variant_type: "variant",  note: "" },
    { keyword: "flooring installer",                monthly_searches:  1600, tier: "Tier 2", status: "not_used", family: "flooring contractor",            variant_type: "variant",  note: "" },
    { keyword: "floor installers",                  monthly_searches:  3600, tier: "Tier 2", status: "not_used", family: "flooring contractor",            variant_type: "variant",  note: "" },
    { keyword: "floor installers near me",          monthly_searches:  3600, tier: "Tier 2", status: "near_me",  family: "flooring contractor",            variant_type: "near_me",  note: "" },
    { keyword: "floor installer",                   monthly_searches:   720, tier: "Tier 2", status: "not_used", family: "flooring contractor",            variant_type: "variant",  note: "" },
    { keyword: "floor installer near me",           monthly_searches:   720, tier: "Tier 2", status: "near_me",  family: "flooring contractor",            variant_type: "near_me",  note: "" },
    // Laminate Flooring Installation family
    { keyword: "laminate flooring installation",    monthly_searches:  6600, tier: "Tier 1", status: "selected", family: "laminate installation",          variant_type: "base",     note: "" },
    { keyword: "laminate flooring installation near me",monthly_searches:1600,tier: "Tier 1", status: "near_me",  family: "laminate installation",          variant_type: "near_me",  note: "" },
    { keyword: "laminate flooring installers",      monthly_searches:   390, tier: "Tier 1", status: "not_used", family: "laminate installation",          variant_type: "plural",   note: "" },
    { keyword: "laminate flooring contractors",     monthly_searches:   320, tier: "Tier 1", status: "not_used", family: "laminate installation",          variant_type: "plural",   note: "" },
    // Floor Installation family
    { keyword: "floor installation",                monthly_searches:  6600, tier: "Tier 1", status: "selected", family: "floor installation",             variant_type: "base",     note: "" },
    { keyword: "floor installation near me",        monthly_searches: 14800, tier: "Tier 1", status: "near_me",  family: "floor installation",             variant_type: "near_me",  note: "" },
    { keyword: "floor installation contractor",     monthly_searches:   140, tier: "Tier 2", status: "not_used", family: "floor installation",             variant_type: "variant",  note: "" },
    // Flooring Services family
    { keyword: "flooring services",                 monthly_searches:  6600, tier: "Tier 2", status: "not_used", family: "flooring services",              variant_type: "base",     note: "" },
    { keyword: "flooring services near me",         monthly_searches:  1300, tier: "Tier 2", status: "near_me",  family: "flooring services",              variant_type: "near_me",  note: "" },
    // Commercial Flooring family
    { keyword: "commercial flooring",               monthly_searches:  5400, tier: "Tier 4", status: "selected", family: "commercial flooring",            variant_type: "base",     note: "" },
    { keyword: "commercial flooring near me",       monthly_searches:  2900, tier: "Tier 4", status: "near_me",  family: "commercial flooring",            variant_type: "near_me",  note: "" },
    { keyword: "commercial flooring contractor",    monthly_searches:   390, tier: "Tier 4", status: "selected", family: "commercial flooring",            variant_type: "variant",  note: "" },
    { keyword: "commercial flooring contractors",   monthly_searches:   880, tier: "Tier 4", status: "not_used", family: "commercial flooring",            variant_type: "plural",   note: "" },
    { keyword: "commercial flooring installation",  monthly_searches:   720, tier: "Tier 4", status: "not_used", family: "commercial flooring",            variant_type: "variant",  note: "" },
    { keyword: "commercial flooring installers",    monthly_searches:   720, tier: "Tier 4", status: "not_used", family: "commercial flooring",            variant_type: "plural",   note: "" },
    { keyword: "commercial flooring services",      monthly_searches:   390, tier: "Tier 4", status: "not_used", family: "commercial flooring",            variant_type: "variant",  note: "" },
    { keyword: "commercial flooring companies",     monthly_searches:   480, tier: "Tier 4", status: "not_used", family: "commercial flooring",            variant_type: "plural",   note: "" },
    { keyword: "commercial flooring company",       monthly_searches:   210, tier: "Tier 4", status: "not_used", family: "commercial flooring",            variant_type: "variant",  note: "" },
    { keyword: "commercial flooring installer",     monthly_searches:   140, tier: "Tier 4", status: "not_used", family: "commercial flooring",            variant_type: "variant",  note: "" },
    { keyword: "commercial tile flooring",          monthly_searches:   880, tier: "Tier 4", status: "not_used", family: "commercial flooring",            variant_type: "variant",  note: "" },
    { keyword: "commercial hardwood flooring",      monthly_searches:   320, tier: "Tier 4", status: "not_used", family: "commercial flooring",            variant_type: "variant",  note: "" },
    // Flooring Company family
    { keyword: "flooring company",                  monthly_searches:  5400, tier: "Tier 2", status: "selected", family: "flooring company",               variant_type: "base",     note: "" },
    { keyword: "flooring company near me",          monthly_searches:  3600, tier: "Tier 2", status: "near_me",  family: "flooring company",               variant_type: "near_me",  note: "" },
    { keyword: "flooring companies",                monthly_searches:  3600, tier: "Tier 2", status: "not_used", family: "flooring company",               variant_type: "plural",   note: "" },
    { keyword: "flooring companies near me",        monthly_searches: 18100, tier: "Tier 2", status: "near_me",  family: "flooring company",               variant_type: "near_me",  note: "" },
    // Floor Refinishing family
    { keyword: "floor refinishing",                 monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "floor refinishing",              variant_type: "base",     note: "" },
    { keyword: "floor refinishing near me",         monthly_searches:  5400, tier: "Tier 1", status: "near_me",  family: "floor refinishing",              variant_type: "near_me",  note: "" },
    // Vinyl Flooring Installation family
    { keyword: "vinyl plank flooring installation", monthly_searches:   720, tier: "Tier 1", status: "selected", family: "vinyl installation",             variant_type: "base",     note: "" },
    { keyword: "vinyl flooring installation",       monthly_searches:  4400, tier: "Tier 1", status: "not_used", family: "vinyl installation",             variant_type: "variant",  note: "" },
    { keyword: "lvp flooring installation",         monthly_searches:  3600, tier: "Tier 1", status: "not_used", family: "vinyl installation",             variant_type: "short_form",note: "" },
    { keyword: "luxury vinyl flooring installation",monthly_searches:   720, tier: "Tier 1", status: "not_used", family: "vinyl installation",             variant_type: "variant",  note: "" },
    { keyword: "vinyl flooring contractors",        monthly_searches:   260, tier: "Tier 1", status: "not_used", family: "vinyl installation",             variant_type: "plural",   note: "" },
    { keyword: "vinyl flooring installer",          monthly_searches:   210, tier: "Tier 1", status: "not_used", family: "vinyl installation",             variant_type: "variant",  note: "" },
    // Commercial Carpet family
    { keyword: "commercial carpet installation",    monthly_searches:   390, tier: "Tier 4", status: "not_used", family: "commercial carpet",              variant_type: "base",     note: "" },
    { keyword: "commercial carpet",                 monthly_searches:   260, tier: "Tier 4", status: "not_used", family: "commercial carpet",              variant_type: "variant",  note: "" },
    { keyword: "commercial carpet near me",         monthly_searches:   260, tier: "Tier 4", status: "near_me",  family: "commercial carpet",              variant_type: "near_me",  note: "" },
    { keyword: "commercial carpet installers",      monthly_searches:   210, tier: "Tier 4", status: "not_used", family: "commercial carpet",              variant_type: "plural",   note: "" },
    { keyword: "commercial carpet installation cost",monthly_searches:  140, tier: "Tier 4", status: "not_used", family: "commercial carpet",              variant_type: "variant",  note: "" },
    // Commercial Floor Installation family
    { keyword: "commercial floor installation",     monthly_searches:   260, tier: "Tier 4", status: "not_used", family: "commercial floor installation",  variant_type: "base",     note: "" },
    { keyword: "commercial floor installation near me",monthly_searches:  10,tier: "Tier 4", status: "near_me",  family: "commercial floor installation",  variant_type: "near_me",  note: "" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Residential Installation Services",
      description: "Broad, high-intent keywords that reflect the primary flooring installation services customers search for when hiring a flooring company. These are the bread-and-butter terms: high volume, high conversion, and versatile across all markets. We prioritize these across the majority of the strategy.",
      keywords: [
        { keyword: "carpet installation",           monthly_searches: 27100 },
        { keyword: "hardwood floor installation",   monthly_searches:  9900 },
        { keyword: "laminate flooring installation",monthly_searches:  6600 },
        { keyword: "floor installation",            monthly_searches:  6600 },
        { keyword: "vinyl plank flooring installation", monthly_searches: 720 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Contractor & Company Search Terms",
      description: "Keywords targeting customers who are actively searching for a flooring contractor or company to hire. These terms signal strong commercial intent and high conversion potential. They are distinct enough from general installation terms to warrant their own tier.",
      keywords: [
        { keyword: "flooring contractor",  monthly_searches: 8100 },
        { keyword: "flooring company",     monthly_searches: 5400 },
        { keyword: "flooring services",    monthly_searches: 6600 },
        { keyword: "flooring installers",  monthly_searches: 1900 },
        { keyword: "flooring installer",   monthly_searches: 1600 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Tile Installation",
      description: "Keywords targeting MEK Interiors & Floors' tile installation service line. Tile is a distinct service vertical with strong residential and commercial demand. One tile keyword is included in the current plan to establish initial visibility; additional tile coverage is reserved for plan expansion.",
      keywords: [
        { keyword: "tile installation",          monthly_searches: 14800 },
        { keyword: "tile flooring installation", monthly_searches:  1900 },
        { keyword: "tile installation companies",monthly_searches:  1300 },
        { keyword: "tile installation contractors", monthly_searches: 1000 },
        { keyword: "tile installation services", monthly_searches:   720 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Commercial Flooring",
      description: "High-value keywords targeting MEK Interiors & Floors' commercial contract division, including multi-family, tenant finish, government, medical, and educational projects. Commercial flooring keywords carry strong B2B intent and represent a significant revenue opportunity. Two commercial keywords are included in the current plan to establish initial visibility in this vertical.",
      keywords: [
        { keyword: "commercial flooring",            monthly_searches: 5400 },
        { keyword: "commercial flooring contractor", monthly_searches:  390 },
        { keyword: "commercial flooring contractors",monthly_searches:  880 },
        { keyword: "commercial flooring installation",monthly_searches: 720 },
        { keyword: "commercial carpet installation", monthly_searches:  390 },
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Exceeds Current Plan Capacity",
      description: "These high-value keywords were identified and validated but could not be included within the 10-combination limit of the Booster plan. They are the first candidates for inclusion upon upgrading to a higher plan level.",
      keywords: [
        { keyword: "flooring installation",         monthly_searches: 18100 },
        { keyword: "vinyl flooring installation",   monthly_searches:  4400 },
        { keyword: "hardwood flooring installation",monthly_searches:  5400 },
        { keyword: "flooring services",             monthly_searches:  6600 },
        { keyword: "flooring contractors",          monthly_searches:  6600 },
        { keyword: "flooring companies",            monthly_searches:  3600 },
        { keyword: "carpet replacement",            monthly_searches:  3600 },
        { keyword: "flooring installers",           monthly_searches:  1900 },
        { keyword: "flooring installer",            monthly_searches:  1600 },
        { keyword: "tile installation companies",   monthly_searches:  1300 },
      ]
    },
    {
      reason: "Commercial Flooring: Reserved for Targeted Expansion",
      description: "Commercial flooring keywords represent a distinct, high-value service vertical for MEK Interiors & Floors. Two commercial keywords are included in the current plan to establish initial visibility. The remaining terms are reserved for a dedicated commercial expansion tier where they can receive proper, focused coverage.",
      keywords: [
        { keyword: "commercial flooring contractors",  monthly_searches:  880 },
        { keyword: "commercial flooring installation", monthly_searches:  720 },
        { keyword: "commercial flooring companies",    monthly_searches:  480 },
        { keyword: "commercial carpet installation",   monthly_searches:  390 },
        { keyword: "commercial flooring services",     monthly_searches:  390 },
        { keyword: "commercial hardwood flooring",     monthly_searches:  320 },
        { keyword: "commercial flooring company",      monthly_searches:  210 },
        { keyword: "commercial carpet installers",     monthly_searches:  210 },
      ]
    },
    {
      reason: "Product & Brand Terms: Low Commercial Intent",
      description: "These keywords are primarily product or brand searches rather than service-hire searches. Customers searching for 'vinyl flooring' or 'lvp flooring' are typically browsing products, not looking to hire an installer. These terms are excluded from the strategy as they do not represent the high commercial intent needed for lead generation.",
      keywords: [
        { keyword: "vinyl flooring",         monthly_searches: 110000 },
        { keyword: "lvp flooring",           monthly_searches: 110000 },
        { keyword: "laminate flooring",      monthly_searches:  90500 },
        { keyword: "hardwood flooring",      monthly_searches:  60500 },
        { keyword: "tile flooring",          monthly_searches:  27100 },
        { keyword: "luxury vinyl flooring",  monthly_searches:  22200 },
        { keyword: "carpet flooring",        monthly_searches:   9900 },
      ]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  // Pricing sourced from ClientMarketingMap.xlsx (SEO sheet)
  // Booster=$399/10 combos, A=$600/20, B=$900/30, C=$1200/40, D=$1600/50, E=$2000/60, F=$3000/90, G=$4000/120, H=$5000/150
  additional_opportunities: [
    {
      plan: "LEVEL A",
      price: 600,
      combinations: 20,
      additional_combinations: 10,
      headline: "Unlock the Highest-Volume Untargeted Keywords",
      description: "Upgrading to Level A adds 10 new combinations, unlocking the most searched flooring keywords that the current plan cannot cover — including \"flooring\" (33,100/mo), the single highest-volume keyword in the research pool. It also introduces a second city alongside Houston, with Pearland or Cypress as the top candidates.",
      keywords: [
        { keyword: "flooring",                       monthly_searches: 33100 },
        { keyword: "flooring installation",          monthly_searches: 18100 },
        { keyword: "hardwood flooring installation", monthly_searches:  5400 },
        { keyword: "vinyl flooring installation",    monthly_searches:  4400 },
        { keyword: "Pearland or Cypress", new_market: true },
      ]
    },
    {
      plan: "LEVEL B",
      price: 900,
      combinations: 30,
      additional_combinations: 20,
      headline: "Deeper Commercial Coverage and Suburban Expansion",
      description: "Level B adds 20 new combinations, enabling MEK Interiors & Floors to build out dedicated commercial flooring coverage and expand into two additional suburban markets. This level captures high-intent commercial searches that are currently unaddressed.",
      keywords: [
        { keyword: "commercial flooring contractors",monthly_searches:   880 },
        { keyword: "commercial tile flooring",       monthly_searches:   880 },
        { keyword: "commercial flooring installers", monthly_searches:   720 },
        { keyword: "commercial carpet installation", monthly_searches:   390 },
        { keyword: "Sugar Land or League City", new_market: true },
      ]
    },
    {
      plan: "LEVEL C",
      price: 1200,
      combinations: 40,
      additional_combinations: 30,
      headline: "Full Greater Houston Market Domination",
      description: "Level C provides the coverage needed to dominate the Greater Houston flooring market. With 40 total combinations, MEK Interiors & Floors can target 4 to 5 cities with a full suite of residential and commercial keywords, achieving comprehensive visibility across the region.",
      keywords: [
        { keyword: "flooring services",              monthly_searches:  6600 },
        { keyword: "flooring contractors",           monthly_searches:  6600 },
        { keyword: "lvp flooring installation",      monthly_searches:  3600 },
        { keyword: "tile flooring installation",     monthly_searches:  1900 },
        { keyword: "The Woodlands or Conroe", new_market: true },
      ]
    }
  ]
};

// ============================================================
// UTILITY
// ============================================================
function fmt(n) {
  if (!n && n !== 0) return '';
  return n.toLocaleString('en-US');
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
// ============================================================
function buildKeywordTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;
  // Group keywords by family, preserving order of first appearance
  const familyOrder = [];
  const familyMap = {};
  STRATEGY.keyword_table.forEach(kw => {
    const fam = kw.family || kw.keyword;
    if (!familyMap[fam]) { familyMap[fam] = []; familyOrder.push(fam); }
    familyMap[fam].push(kw);
  });
  const variantLabel = { variant: 'Variant', plural: 'Plural Variant', near_me: 'Near Me Variant', short_form: 'Short-Form Variant' };
  let html = '';
  familyOrder.forEach(fam => {
    const members = familyMap[fam];
    members.forEach((kw, idx) => {
      const isBase = kw.variant_type === 'base' || idx === 0;
      const isNearMe = kw.variant_type === 'near_me';
      const isVariant = !isBase;
      let rowClass = '';
      if (kw.status === 'selected') rowClass = 'row-selected row-base';
      else if (isBase) rowClass = 'row-base';
      else if (isNearMe) rowClass = 'row-near-me row-variant';
      else rowClass = 'row-variant';
      const kwCell = isVariant
        ? `<td class="kw-variant-cell"><span class="kw-variant-indent">&#8627;</span>${kw.keyword}<span class="kw-variant-badge">${variantLabel[kw.variant_type] || 'Variant'}</span></td>`
        : `<td>${kw.keyword}</td>`;
      html += `<tr class="${rowClass}">${kwCell}<td class="num-col">${fmt(kw.monthly_searches)}</td><td>${tierPill(kw.tier)}</td><td>${statusBadge(kw.status, kw.note)}</td></tr>`;
    });
  });
  tbody.innerHTML = html;
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
// ============================================================
function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;
  const markets = [
    { city: "Houston", tier: "Tier 1", population: 2304580, is_hq: true },
  ];
  const keywords = STRATEGY.selected_keywords;
  // Build header row 1: tier pills
  const tierCells = markets.map(m => {
    const cls = m.tier === 'Tier 1' ? 't1' : 't2';
    return `<th><span class="tier-pill ${cls} nowrap">${m.tier.toUpperCase()}</span></th>`;
  }).join('');
  // Build header row 2: city names
  const cityCells = markets.map(m =>
    `<th class="city-header">${m.city}${m.is_hq ? ' <span class="hq-star">&#9733;</span>' : ''}<br><span class="city-pop-small">Pop. ${fmt(m.population)}</span></th>`
  ).join('');
  thead.innerHTML = `<tr><th class="kw-col-header">Keyword</th>${tierCells}</tr><tr><th></th>${cityCells}</tr>`;
  // Build keyword rows
  const rows = keywords.map(kw => {
    const cells = markets.map(() => '<td class="check-cell">&#10003;</td>').join('');
    return `<tr><td class="kw-cell">${kw}</td>${cells}</tr>`;
  }).join('');
  // Total row
  const totalCells = markets.map(() => `<td class="total-cell">${keywords.length}</td>`).join('');
  const grandTotal = keywords.length * markets.length;
  tbody.innerHTML = rows
    + `<tr class="total-row"><td class="total-label">Total Combinations</td>${totalCells}</tr>`
    + `<tr class="grand-total-row"><td colspan="${markets.length + 1}" class="grand-total">Grand Total: <strong>${grandTotal} Combinations</strong></td></tr>`;
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
        <div class="nu-kw-row nu-kw-header">
          <span class="nu-kw-name">Keyword</span>
          <span class="nu-kw-vol">Monthly Searches</span>
        </div>
        ${kwRows}
      </div>
    </div>`;
  }).join('');
  // Apply 2-col grid when there are exactly 4 cards (2x2 layout)
  if (STRATEGY.not_used_groups.length === 4) grid.classList.add('grid-2col');
  grid.innerHTML = cards;
}

// ============================================================
// POPULATE OPPORTUNITIES SECTION
// ============================================================
function buildOpportunities() {
  const grid = document.getElementById('opportunities-grid');
  if (!grid) return;
  const cards = STRATEGY.additional_opportunities.map((opp, i) => {
    const kwHeader = `<li class="opp-kw-header">
        <span class="opp-kw-col-label">KEYWORD</span>
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
      <div class="opp-combos-large">${opp.combinations}</div>
      <div class="opp-combos-label">total combinations</div>
      <div class="opp-combos"><span class="opp-add">+${opp.additional_combinations} from current plan</span></div>
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
  { rank: 1,  city: 'Houston',       pop: 2304580, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 2,  city: 'Cypress',       pop:  220000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 3,  city: 'Pasadena',      pop:  152000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 4,  city: 'Pearland',      pop:  130000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 5,  city: 'Sugar Land',    pop:  118000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 6,  city: 'League City',   pop:  115000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 7,  city: 'The Woodlands', pop:  115000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 8,  city: 'Conroe',        pop:   99000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 9,  city: 'Baytown',       pop:   78000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 10, city: 'Missouri City', pop:   75000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 11, city: 'Spring',        pop:   62000, tier: 'Tier 1', selected: false, hq: false },
  { rank: 12, city: 'Friendswood',   pop:   40000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 13, city: 'Rosenberg',     pop:   38000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 14, city: 'La Porte',      pop:   35000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 15, city: 'Deer Park',     pop:   34000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 16, city: 'Lake Jackson',  pop:   28000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 17, city: 'Alvin',         pop:   27000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 18, city: 'Katy',          pop:   21000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 19, city: 'Bellaire',      pop:   19000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 20, city: 'Angleton',      pop:   19000, tier: 'Tier 2', selected: false, hq: false },
  { rank: '21-30', city: 'Stafford, South Houston, Humble, Tomball, Richmond, Manvel, Seabrook, Webster, Clute, Galena Park', pop: null, tier: 'Tier 3', selected: false, hq: false },
];

function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = MARKET_DATA.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const popStr = m.pop ? fmt(m.pop) : '<18,000';
    const rowCls = m.selected ? 'mob-mkt-row selected' : 'mob-mkt-row';
    return `<div class="${rowCls}">
      <span class="mob-rank">${m.rank}</span>
      <span class="mob-city">${m.selected ? '<strong>' : ''}${cityLabel}${m.selected ? '</strong>' : ''}</span>
      <span class="mob-pop">${m.pop !== null ? popStr : ''}</span>
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
  const markets = [
    { city: 'Houston', tier: 'Tier 1', pop: 2304580, is_hq: true },
  ];
  const keywords = STRATEGY.selected_keywords;
  const cards = markets.map(m => {
    const tierCls = 't1';
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const kwList = keywords.map(kw =>
      `<div class="mob-matrix-kw"><span class="mob-matrix-check">&#10003;</span><span>${kw}</span></div>`
    ).join('');
    return `<div class="mob-matrix-card">
      <div class="mob-matrix-city">
        <span class="mob-matrix-city-name">${cityLabel}</span>
        <span class="mob-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp; Pop. ${fmt(m.pop)}</span>
      </div>
      <div class="mob-matrix-kws">${kwList}</div>
      <div class="mob-matrix-total">${keywords.length} combinations</div>
    </div>`;
  }).join('');
  el.innerHTML = cards + `<div class="mob-matrix-grand-total">Grand Total: <strong>${keywords.length * markets.length} Combinations</strong></div>`;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildNotUsed();
  buildOpportunities();
  buildMobileMarketList();
  buildMobileMatrix();
});
