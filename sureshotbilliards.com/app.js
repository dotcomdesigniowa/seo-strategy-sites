// ============================================================
// SURE SHOT BILLIARDS & DARTS — SEO STRATEGY DATA
// Plan Level A | 20 Combinations | 5 Markets x 4 Keywords
// HQ: West Richland, WA | Service Region: 120-mile radius
// ============================================================

const STRATEGY = {
  client_name: "Sure Shot Billiards & Darts",
  industry: "Billiards & Pool Table Services",
  hq_city: "West Richland",
  hq_state: "WA",
  service_area: "Tri-Cities & Eastern Washington",
  plan_level: "Level A",
  plan_price: 600,
  total_combinations: 20,
  total_keywords_researched: 74,
  selected_keywords: [
    "pool table recovery",
    "pool table movers",
    "pool table repair",
    "used pool tables"
  ],
  num_selected_keywords: 4,
  num_target_markets: 5,

  // ---- FULL KEYWORD CONSIDERATION TABLE ----
  keyword_table: [
    // Pool Table Recovery family — TIER 1 (selected)
    { keyword: "pool table recovery",              monthly_searches: 27100, tier: "Tier 1", status: "selected", family: "pool table recovery",  variant_type: "base" },
    { keyword: "pool table recovering near me",    monthly_searches: 18100, tier: "Tier 1", status: "near_me",  family: "pool table recovery",  variant_type: "near_me" },
    { keyword: "pool table repair near me",        monthly_searches: 22200, tier: "Tier 1", status: "near_me",  family: "pool table recovery",  variant_type: "near_me" },
    { keyword: "pool table service near me",       monthly_searches: 14800, tier: "Tier 1", status: "near_me",  family: "pool table recovery",  variant_type: "near_me" },
    { keyword: "pool table recover",               monthly_searches: 14800, tier: "Tier 1", status: "not_used", family: "pool table recovery",  variant_type: "variant" },
    { keyword: "pool table refelting",             monthly_searches: 12100, tier: "Tier 1", status: "not_used", family: "pool table recovery",  variant_type: "variant" },
    { keyword: "pool table felt replacement",      monthly_searches:  9900, tier: "Tier 1", status: "not_used", family: "pool table recovery",  variant_type: "variant" },
    { keyword: "pool table cloth replacement",     monthly_searches:  6600, tier: "Tier 1", status: "not_used", family: "pool table recovery",  variant_type: "variant" },
    { keyword: "pool table leveling",              monthly_searches:  6600, tier: "Tier 1", status: "not_used", family: "pool table recovery",  variant_type: "variant" },

    // Pool Table Movers family — TIER 2 (selected)
    { keyword: "pool table movers",                monthly_searches: 40500, tier: "Tier 2", status: "selected", family: "pool table movers",    variant_type: "base" },
    { keyword: "pool table movers near me",        monthly_searches: 27100, tier: "Tier 2", status: "near_me",  family: "pool table movers",    variant_type: "near_me" },
    { keyword: "pool table moving service",        monthly_searches: 18100, tier: "Tier 2", status: "not_used", family: "pool table movers",    variant_type: "variant" },
    { keyword: "move pool table",                  monthly_searches: 12100, tier: "Tier 2", status: "not_used", family: "pool table movers",    variant_type: "variant" },
    { keyword: "pool table installation",          monthly_searches: 14800, tier: "Tier 2", status: "not_used", family: "pool table movers",    variant_type: "variant" },
    { keyword: "pool table disassembly",           monthly_searches:  8100, tier: "Tier 2", status: "not_used", family: "pool table movers",    variant_type: "variant" },

    // Pool Table Repair family — TIER 3 (selected)
    { keyword: "pool table repair",                monthly_searches: 27100, tier: "Tier 3", status: "selected", family: "pool table repair",    variant_type: "base" },
    { keyword: "pool table repair near me",        monthly_searches: 22200, tier: "Tier 3", status: "near_me",  family: "pool table repair",    variant_type: "near_me" },
    { keyword: "billiard table repair",            monthly_searches:  8100, tier: "Tier 3", status: "not_used", family: "pool table repair",    variant_type: "variant" },
    { keyword: "pool table restoration",           monthly_searches:  6600, tier: "Tier 3", status: "not_used", family: "pool table repair",    variant_type: "variant" },
    { keyword: "pool table refurbishment",         monthly_searches:  4400, tier: "Tier 3", status: "not_used", family: "pool table repair",    variant_type: "variant" },

    // Used Pool Tables family — TIER 4 (selected)
    { keyword: "used pool tables",                 monthly_searches: 74000, tier: "Tier 4", status: "selected", family: "used pool tables",     variant_type: "base" },
    { keyword: "used pool tables near me",         monthly_searches: 49500, tier: "Tier 4", status: "near_me",  family: "used pool tables",     variant_type: "near_me" },
    { keyword: "used pool table near me",          monthly_searches: 27100, tier: "Tier 4", status: "near_me",  family: "used pool tables",     variant_type: "near_me" },
    { keyword: "used pool table for sale",         monthly_searches: 33100, tier: "Tier 4", status: "not_used", family: "used pool tables",     variant_type: "variant" },
    { keyword: "refurbished pool table",           monthly_searches: 12100, tier: "Tier 4", status: "not_used", family: "used pool tables",     variant_type: "variant" },
    { keyword: "used billiard table",              monthly_searches: 14800, tier: "Tier 4", status: "not_used", family: "used pool tables",     variant_type: "variant" },
    { keyword: "second hand pool table",           monthly_searches:  8100, tier: "Tier 4", status: "not_used", family: "used pool tables",     variant_type: "variant" },

    // Pool Tables (generic) family — TIER 5 (not used — PLA-dominated)
    { keyword: "pool tables",                      monthly_searches: 246000, tier: "Tier 5", status: "not_used", family: "pool tables",         variant_type: "base" },
    { keyword: "pool tables near me",              monthly_searches: 165000, tier: "Tier 5", status: "near_me",  family: "pool tables",         variant_type: "near_me" },
    { keyword: "pool table near me",               monthly_searches: 110000, tier: "Tier 5", status: "near_me",  family: "pool tables",         variant_type: "near_me" },
    { keyword: "pool table for sale",              monthly_searches:  74000, tier: "Tier 5", status: "not_used", family: "pool tables",         variant_type: "variant" },
    { keyword: "billiard table",                   monthly_searches:  60500, tier: "Tier 5", status: "not_used", family: "pool tables",         variant_type: "variant" },
    { keyword: "pool table for sale near me",      monthly_searches:  49500, tier: "Tier 5", status: "near_me",  family: "pool tables",         variant_type: "near_me" },
    { keyword: "pool table store near me",         monthly_searches:  40500, tier: "Tier 5", status: "near_me",  family: "pool tables",         variant_type: "near_me" },
    { keyword: "billiard table near me",           monthly_searches:  33100, tier: "Tier 5", status: "near_me",  family: "pool tables",         variant_type: "near_me" },
    { keyword: "pool table shop near me",          monthly_searches:  27100, tier: "Tier 5", status: "near_me",  family: "pool tables",         variant_type: "near_me" },
    { keyword: "pool table dealer",                monthly_searches:  22200, tier: "Tier 5", status: "not_used", family: "pool tables",         variant_type: "variant" },

    // Billiards Accessories — Not Used (plan expansion)
    { keyword: "billiard balls",                   monthly_searches: 110000, tier: "Not Used", status: "not_used", family: "billiards accessories", variant_type: "base" },
    { keyword: "billiard balls near me",           monthly_searches:  27100, tier: "Not Used", status: "near_me",  family: "billiards accessories", variant_type: "near_me" },
    { keyword: "pool cues",                        monthly_searches:  90500, tier: "Not Used", status: "not_used", family: "billiards accessories", variant_type: "base" },
    { keyword: "pool cues near me",                monthly_searches:  22200, tier: "Not Used", status: "near_me",  family: "billiards accessories", variant_type: "near_me" },
    { keyword: "billiard accessories",             monthly_searches:  40500, tier: "Not Used", status: "not_used", family: "billiards accessories", variant_type: "base" },
    { keyword: "billiard accessories near me",     monthly_searches:  14800, tier: "Not Used", status: "near_me",  family: "billiards accessories", variant_type: "near_me" },
    { keyword: "pool table accessories",           monthly_searches:  22200, tier: "Not Used", status: "not_used", family: "billiards accessories", variant_type: "variant" },
    { keyword: "billiard supplies",                monthly_searches:  18100, tier: "Not Used", status: "not_used", family: "billiards accessories", variant_type: "variant" },
    { keyword: "pool table light",                 monthly_searches:  33100, tier: "Not Used", status: "not_used", family: "billiards accessories", variant_type: "variant" },
    { keyword: "pool table felt",                  monthly_searches:  27100, tier: "Not Used", status: "not_used", family: "billiards accessories", variant_type: "variant" },

    // Table Games — Not Used (plan expansion)
    { keyword: "foosball table",                   monthly_searches:  90500, tier: "Not Used", status: "not_used", family: "table games",         variant_type: "base" },
    { keyword: "foosball table near me",           monthly_searches:  27100, tier: "Not Used", status: "near_me",  family: "table games",         variant_type: "near_me" },
    { keyword: "shuffleboard table",               monthly_searches:  74000, tier: "Not Used", status: "not_used", family: "table games",         variant_type: "base" },
    { keyword: "shuffleboard table near me",       monthly_searches:  22200, tier: "Not Used", status: "near_me",  family: "table games",         variant_type: "near_me" },
    { keyword: "game tables",                      monthly_searches:  60500, tier: "Not Used", status: "not_used", family: "table games",         variant_type: "base" },
    { keyword: "game tables near me",              monthly_searches:  18100, tier: "Not Used", status: "near_me",  family: "table games",         variant_type: "near_me" },
    { keyword: "air hockey table",                 monthly_searches:  74000, tier: "Not Used", status: "not_used", family: "table games",         variant_type: "base" },
    { keyword: "ping pong table near me",          monthly_searches:  40500, tier: "Not Used", status: "near_me",  family: "table games",         variant_type: "near_me" },
    { keyword: "dart board near me",               monthly_searches:  27100, tier: "Not Used", status: "near_me",  family: "table games",         variant_type: "near_me" },
    { keyword: "darts near me",                    monthly_searches:  22200, tier: "Not Used", status: "near_me",  family: "table games",         variant_type: "near_me" },

    // Out of Scope — Generic / Venue Terms
    { keyword: "billiards",                        monthly_searches: 550000, tier: "Not Used", status: "not_used", family: "out of scope",        variant_type: "base" },
    { keyword: "billiards near me",                monthly_searches: 135000, tier: "Not Used", status: "near_me",  family: "out of scope",        variant_type: "near_me" },
    { keyword: "pool hall near me",                monthly_searches: 110000, tier: "Not Used", status: "near_me",  family: "out of scope",        variant_type: "near_me" },
    { keyword: "billiard room",                    monthly_searches:  49500, tier: "Not Used", status: "not_used", family: "out of scope",        variant_type: "variant" },
    { keyword: "pool table rental",                monthly_searches:  27100, tier: "Not Used", status: "not_used", family: "out of scope",        variant_type: "variant" },
    { keyword: "pool table resale",                monthly_searches:   6600, tier: "Not Used", status: "not_used", family: "out of scope",        variant_type: "variant" },
    { keyword: "house to house pool table",        monthly_searches:   1300, tier: "Not Used", status: "not_used", family: "out of scope",        variant_type: "variant" },
  ],

  // ---- KEYWORD TIERS (for flat-tier-block rendering) ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      color: "t1",
      tier_name: "Pool Table Recovery",
      keyword_count: 9,
      description: "Pool table recovery, refelting, and service searches target existing pool table owners who need maintenance. This is a high-margin, repeat-business service line that competitors consistently neglect online. Ranking for these terms positions Sure Shot Billiards & Darts as the full-service authority — not just a retailer — and drives service calls, felt replacements, leveling, and re-rubber jobs across the Tri-Cities region. These terms have strong local intent and very low national competition from big-box retailers.",
      keywords: [
        { keyword: "pool table recovery",           monthly_searches: 27100 },
        { keyword: "pool table recovering near me", monthly_searches: 18100 },
        { keyword: "pool table repair near me",     monthly_searches: 22200 },
        { keyword: "pool table service near me",    monthly_searches: 14800 },
        { keyword: "pool table recover",            monthly_searches: 14800 },
        { keyword: "pool table refelting",          monthly_searches: 12100 },
        { keyword: "pool table felt replacement",   monthly_searches:  9900 },
        { keyword: "pool table cloth replacement",  monthly_searches:  6600 },
        { keyword: "pool table leveling",           monthly_searches:  6600 },
      ]
    },
    {
      tier_label: "Tier 2",
      color: "t2",
      tier_name: "Pool Table Movers",
      keyword_count: 6,
      description: "Pool table moving is a specialized, high-value service that generates strong leads from homeowners relocating, remodeling, or selling a home. Sure Shot Billiards & Darts' 'House to House' white-glove moving service is a direct match for these searches. These terms have strong commercial intent and very low competition locally — a significant opportunity to own this service category across the Tri-Cities region.",
      keywords: [
        { keyword: "pool table movers",          monthly_searches: 40500 },
        { keyword: "pool table movers near me",  monthly_searches: 27100 },
        { keyword: "pool table moving service",  monthly_searches: 18100 },
        { keyword: "pool table installation",    monthly_searches: 14800 },
        { keyword: "move pool table",            monthly_searches: 12100 },
        { keyword: "pool table disassembly",     monthly_searches:  8100 },
      ]
    },
    {
      tier_label: "Tier 3",
      color: "t3",
      tier_name: "Pool Table Repair",
      keyword_count: 5,
      description: "Pool table repair searches represent customers with an immediate, urgent need — a broken slate, damaged cushions, or a table that won't level. These are high-intent, high-conversion searches with strong local signals. Sure Shot Billiards & Darts' in-house repair expertise is a direct competitive advantage here, and these terms are winnable locally against national retailers who do not offer repair services.",
      keywords: [
        { keyword: "pool table repair",          monthly_searches: 27100 },
        { keyword: "pool table repair near me",  monthly_searches: 22200 },
        { keyword: "billiard table repair",      monthly_searches:  8100 },
        { keyword: "pool table restoration",     monthly_searches:  6600 },
        { keyword: "pool table refurbishment",   monthly_searches:  4400 },
      ]
    },
    {
      tier_label: "Tier 4",
      color: "t4",
      tier_name: "Used Pool Tables",
      keyword_count: 7,
      description: "Used and pre-owned pool table searches represent a distinct, high-intent buyer segment that national retailers largely ignore. Shoppers searching for used pool tables are price-conscious, locally focused, and actively ready to purchase. Sure Shot Billiards & Darts' inventory of pre-owned and refurbished tables is a direct competitive advantage here — these searches convert to in-store visits and phone calls from buyers who are ready to act.",
      keywords: [
        { keyword: "used pool tables",           monthly_searches: 74000 },
        { keyword: "used pool tables near me",   monthly_searches: 49500 },
        { keyword: "used pool table near me",    monthly_searches: 27100 },
        { keyword: "used pool table for sale",   monthly_searches: 33100 },
        { keyword: "used billiard table",        monthly_searches: 14800 },
        { keyword: "refurbished pool table",     monthly_searches: 12100 },
        { keyword: "second hand pool table",     monthly_searches:  8100 },
      ]
    }
  ],

  // ---- MARKETS FOR MATRIX ----
  markets: [
    { city: "Yakima",       state: "WA", tier: "Tier 1", pop: 96000,  is_hq: false },
    { city: "Kennewick",    state: "WA", tier: "Tier 1", pop: 84347,  is_hq: false },
    { city: "Pasco",        state: "WA", tier: "Tier 1", pop: 82000,  is_hq: false },
    { city: "Richland",     state: "WA", tier: "Tier 1", pop: 60560,  is_hq: false },
    { city: "Walla Walla",  state: "WA", tier: "Tier 2", pop: 34000,  is_hq: false },
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "PLA-Dominated — Generic Pool Tables",
      description: "Generic 'pool tables' and 'pool table near me' searches are dominated by national retailers — Wayfair, Amazon, Costco, and big-box stores — with heavy Product Listing Ad (PLA) spend. Page 1 for these terms is a wall of paid shopping ads from companies with eight-figure marketing budgets. A local billiards shop cannot compete cost-effectively on these terms, and the traffic they generate skews toward price shoppers rather than local buyers seeking service or expertise.",
      keywords: [
        { keyword: "pool tables",               monthly_searches: 246000 },
        { keyword: "pool tables near me",       monthly_searches: 165000 },
        { keyword: "pool table near me",        monthly_searches: 110000 },
        { keyword: "pool table for sale",       monthly_searches:  74000 },
        { keyword: "billiard table",            monthly_searches:  60500 },
        { keyword: "pool table for sale near me", monthly_searches: 49500 },
        { keyword: "pool table store near me",  monthly_searches:  40500 },
      ]
    },
    {
      reason: "Plan Capacity — Billiards Accessories",
      description: "Billiards accessories (pool cues, billiard balls, billiard supplies, pool table lights, and felt) represent a massive keyword opportunity with extremely high search volumes. These are direct product lines that Sure Shot Billiards & Darts carries. They are excluded from the current 20-combination plan solely due to capacity constraints and are the top priority for the next plan upgrade.",
      keywords: [
        { keyword: "billiard balls",            monthly_searches: 110000 },
        { keyword: "pool cues",                 monthly_searches:  90500 },
        { keyword: "billiard accessories",      monthly_searches:  40500 },
        { keyword: "pool table accessories",    monthly_searches:  22200 },
        { keyword: "billiard supplies",         monthly_searches:  18100 },
        { keyword: "pool table light",          monthly_searches:  33100 },
        { keyword: "pool table felt",           monthly_searches:  27100 },
      ]
    },
    {
      reason: "Plan Capacity — Table Games",
      description: "Foosball tables, shuffleboard tables, air hockey, darts, and game tables are all product lines carried by Sure Shot Billiards & Darts with strong national search volumes. These represent a full second tier of keyword opportunities that are ideal for a Level B or Level C plan expansion, enabling the business to dominate the broader table games retail category across the Tri-Cities region.",
      keywords: [
        { keyword: "foosball table",            monthly_searches:  90500 },
        { keyword: "shuffleboard table",        monthly_searches:  74000 },
        { keyword: "game tables",               monthly_searches:  60500 },
        { keyword: "air hockey table",          monthly_searches:  74000 },
        { keyword: "dart board near me",        monthly_searches:  27100 },
        { keyword: "darts near me",             monthly_searches:  22200 },
        { keyword: "ping pong table near me",   monthly_searches:  40500 },
      ]
    },
    {
      reason: "Outside Keyword Scope — Generic / Venue Terms",
      description: "Terms like 'billiards near me' and 'pool hall near me' refer to venues where people play pool, not retailers or service providers. These searches come from people looking to play billiards, not buy a table or hire a service. Targeting these terms would attract the wrong audience and waste ranking resources on non-converting traffic.",
      keywords: [
        { keyword: "billiards",                 monthly_searches: 550000 },
        { keyword: "billiards near me",         monthly_searches: 135000 },
        { keyword: "pool hall near me",         monthly_searches: 110000 },
        { keyword: "billiard room",             monthly_searches:  49500 },
        { keyword: "pool table rental",         monthly_searches:  27100 },
        { keyword: "pool table resale",         monthly_searches:   6600 },
        { keyword: "house to house pool table", monthly_searches:   1300 },
      ]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "LEVEL B",
      price: 900,
      combinations: 40,
      additional_combinations: 20,
      new_market: true,
      headline: "Add Lewiston, ID + Moses Lake, WA",
      description: "Level B adds Lewiston, ID and Moses Lake, WA — two strong Tier 2 markets that extend the strategy beyond the Tri-Cities core. Lewiston is the primary Idaho hub 100 miles east, and Moses Lake is a fast-growing community 85 miles north. Both markets have minimal competitor SEO presence, giving Sure Shot Billiards & Darts a clear path to Page 1 visibility in each city.",
      markets: [
        { city: "Lewiston, ID",    pop: 34000, tier: "Tier 2" },
        { city: "Moses Lake, WA",  pop: 26000, tier: "Tier 2" },
      ]
    },
    {
      plan: "LEVEL C",
      price: 1200,
      combinations: 60,
      additional_combinations: 20,
      new_market: true,
      headline: "Add Hermiston, OR + Pendleton, OR",
      description: "Level C crosses the Oregon border, adding Hermiston and Pendleton — two growing regional hubs with strong residential demand and no direct competitor presence in organic search. This expansion positions Sure Shot Billiards & Darts as the dominant pool table and billiards service provider across the tri-state region.",
      markets: [
        { city: "Hermiston, OR",   pop: 19000, tier: "Tier 2" },
        { city: "Pendleton, OR",   pop: 17000, tier: "Tier 2" },
      ]
    },
    {
      plan: "LEVEL D",
      price: 1600,
      combinations: 80,
      additional_combinations: 20,
      new_market: true,
      headline: "Full Regional Coverage — All 9 Markets",
      description: "Level D completes the regional footprint by adding West Richland (the store's home city), Clarkston, WA, and The Dalles, OR. With 80 total keyword-city combinations across 9 markets, Sure Shot Billiards & Darts achieves comprehensive visibility across the entire 120-mile service radius — from the Tri-Cities core to the Oregon and Idaho borders.",
      markets: [
        { city: "West Richland, WA", pop: 18000, tier: "Tier 2" },
        { city: "Clarkston, WA",     pop: 10000, tier: "Tier 3" },
        { city: "The Dalles, OR",    pop: 16000, tier: "Tier 3" },
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

function statusBadge(status, note) {
  if (status === 'selected') return '<span class="status-badge status-selected">Selected</span>';
  if (status === 'near_me')  return `<span class="status-badge status-near-me"${note ? ` title="${note}"` : ''}>Near Me Variant</span>`;
  return '<span class="status-badge status-not-used">Not Used</span>';
}

function tierPill(label) {
  const cls = label === 'Tier 1' ? 't1' : label === 'Tier 2' ? 't2' : label === 'Tier 3' ? 't3' : label === 'Tier 4' ? 't4' : label === 'Tier 5' ? 't5' : '';
  if (!cls) return `<span class="tier-pill" style="background:#f1f5f9;color:#64748b">NOT USED</span>`;
  return `<span class="tier-pill ${cls}">${label.toUpperCase()}</span>`;
}

// ============================================================
// BUILD KEYWORD TABLE
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

  const variantLabel = {
    variant: 'Variant',
    plural: 'Plural Variant',
    near_me: 'Near Me Variant',
    short_form: 'Short-Form Variant'
  };

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
      const isOutOfScope = kw.family === 'out of scope';
      const rowClass = isBase || isOutOfScope
        ? (kw.status === 'selected' ? 'row-base row-selected' : 'row-base')
        : (isNearMe ? 'row-variant row-near-me' : 'row-variant');
      const kwCell = (isBase || isOutOfScope)
        ? `<td>${kw.keyword}</td>`
        : `<td class="kw-variant-cell"><span class="kw-variant-indent">&#8627;</span>${kw.keyword} <span class="kw-variant-badge">${variantLabel[kw.variant_type] || 'Variant'}</span></td>`;
      return `<tr class="${rowClass}">
        ${kwCell}
        <td class="num-col">${fmt(kw.monthly_searches)}</td>
        <td>${tierPill(kw.tier)}</td>
        <td>${statusBadge(kw.status)}</td>
      </tr>`;
    }).join('');
  }).join('');

  tbody.innerHTML = rows;
}

// ============================================================
// BUILD KEYWORD TIER FLAT BLOCKS
// ============================================================
function buildKeywordTierCards() {
  const grid = document.getElementById('kw-tier-grid');
  if (!grid) return;
  const blocks = STRATEGY.keyword_tiers.map((tier, i) => {
    const colorCls = tier.color ? 'kw-tier-' + tier.color.replace('t', '') : ('kw-tier-' + (i + 1));
    const tierLabel = tier.tier_label || tier.tier || ('Tier ' + (i + 1));
    const tierName  = tier.tier_name  || tier.name  || '';
    const kwCount   = tier.keywords.length;
    const kwRows = tier.keywords.map(kw =>
      `<tr>
        <td class="flat-kw-name">${kw.keyword}</td>
        <td class="flat-kw-vol">${fmt(kw.monthly_searches)}</td>
      </tr>`
    ).join('');
    return `<div class="flat-tier-block ${colorCls}">
      <div class="flat-tier-heading">
        <span class="tier-pill ${tier.color || ('t' + (i + 1))}">${tierLabel.toUpperCase()}</span>
        <span class="flat-tier-name">${tierName}</span>
        <span class="flat-tier-count">${kwCount} keyword${kwCount !== 1 ? 's' : ''} selected</span>
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
// BUILD MATRIX — CITY CARDS
// ============================================================
function buildMatrix() {
  const cityGrid = document.getElementById('matrix-city-grid');
  const grandTotal = document.getElementById('matrix-grand-total');
  if (!cityGrid) return;

  const keywords = STRATEGY.selected_keywords;
  const markets = STRATEGY.markets;

  const cards = markets.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const hqBadge = m.is_hq ? ' <span class="hq-tag">HQ</span>' : '';
    const kwItems = keywords.map(kw =>
      `<div class="city-kw-item"><span class="city-kw-check">&#10003;</span><span class="city-kw-name">${kw}</span></div>`
    ).join('');
    return `<div class="city-matrix-card">
      <div class="city-matrix-header">
        <div class="city-matrix-header-top">${hqBadge}<span class="city-matrix-name">${m.city}, ${m.state}</span></div>
        <div class="city-matrix-header-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span><span class="city-matrix-pop">Pop. ${fmt(m.pop)}</span></div>
      </div>
      <div class="city-kw-list">${kwItems}</div>
      <div class="city-matrix-footer">${keywords.length} combination${keywords.length !== 1 ? 's' : ''}</div>
    </div>`;
  }).join('');

  cityGrid.innerHTML = cards;

  if (grandTotal) {
    grandTotal.textContent = 'Grand Total: ' + (keywords.length * markets.length) + ' Combinations';
  }
}

// ============================================================
// BUILD MOBILE MARKET LIST
// ============================================================
const MARKET_DATA = [
  { rank: 1,  city: 'Yakima, WA',       pop:  96000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 2,  city: 'Kennewick, WA',    pop:  84347, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Pasco, WA',        pop:  82000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Richland, WA',     pop:  60560, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 5,  city: 'Walla Walla, WA',  pop:  34000, tier: 'Tier 2', selected: true,  hq: false },
  { rank: 6,  city: 'Lewiston, ID',     pop:  34000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 7,  city: 'Moses Lake, WA',   pop:  26000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 8,  city: 'Hermiston, OR',    pop:  19000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 9,  city: 'West Richland, WA ★ HQ', pop: 18000, tier: 'Tier 2', selected: false, hq: true },
  { rank: 10, city: 'Pendleton, OR',    pop:  17000, tier: 'Tier 2', selected: false, hq: false },
  { rank: '11+', city: 'Clarkston, Prosser, Sunnyside, The Dalles, Boardman + more', pop: null, tier: 'Tier 3', selected: false, hq: false },
];

function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = MARKET_DATA.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const popStr = m.pop ? fmt(m.pop) : '<10,000';
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
    const marketRows = (opp.markets || []).map(m => {
      const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
      return `<li>
        <span class="opp-kw">${m.city}</span>
        <span class="opp-vol"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> &nbsp;Pop. ${fmt(m.pop)}</span>
      </li>`;
    }).join('');
    const highlight = i === 0 ? 'opp-card-highlight' : '';
    return `<div class="opp-card ${highlight}">
      <div class="opp-plan-label">${opp.plan}</div>
      <div class="opp-price">$${fmt(opp.price)}<span class="opp-price-label">/mo</span></div>
      <div class="opp-combos-large">${opp.combinations} <span class="opp-combos-label">total combinations</span></div>
      <div class="opp-combos">+${opp.additional_combinations} combinations from current plan</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <ul class="opp-kw-list"><li class="opp-kw-header"><span>Market Added</span><span>Tier &amp; Population</span></li>${marketRows}</ul>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildMobileMarketList();
  buildNotUsed();
  buildOpportunities();
});
