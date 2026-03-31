// ============================================================
// SURE SHOT BILLIARDS & DARTS — SEO STRATEGY DATA
// Plan Level A | 20 Combinations | 5 Markets x 4 Keywords
// HQ: West Richland, WA | Service Region: 120-mile radius
// ============================================================

const STRATEGY = {
  client_name: "Sure Shot Billiards & Darts",
  plan_level: "A",
  plan_price: 600,
  total_combinations: 20,
  total_keywords_researched: 74,
  hq_city: "West Richland",
  hq_state: "WA",

  // ---- FULL KEYWORD CONSIDERATION TABLE ----
  keyword_table: [
    // TIER 1 — Pool Tables (core product)
    { keyword: "pool tables",                family: "pool tables",         monthly_searches: 246000, tier: "Tier 1", selected: true  },
    { keyword: "pool tables near me",        family: "pool tables",         monthly_searches: 165000, tier: "Tier 1", selected: false, variant: true },
    { keyword: "pool table near me",         family: "pool tables",         monthly_searches: 110000, tier: "Tier 1", selected: false, variant: true },
    { keyword: "pool table store near me",   family: "pool tables",         monthly_searches:  40500, tier: "Tier 1", selected: false, variant: true },
    { keyword: "pool table shop near me",    family: "pool tables",         monthly_searches:  27100, tier: "Tier 1", selected: false, variant: true },
    { keyword: "pool table for sale",        family: "pool tables",         monthly_searches:  74000, tier: "Tier 1", selected: false, variant: true },
    { keyword: "pool table for sale near me",family: "pool tables",         monthly_searches:  49500, tier: "Tier 1", selected: false, variant: true },
    { keyword: "pool table dealer",          family: "pool tables",         monthly_searches:  22200, tier: "Tier 1", selected: false, variant: true },
    { keyword: "billiard table",             family: "pool tables",         monthly_searches:  60500, tier: "Tier 1", selected: false, variant: true },
    { keyword: "billiard table near me",     family: "pool tables",         monthly_searches:  33100, tier: "Tier 1", selected: false, variant: true },

    // TIER 2 — Used Pool Tables
    { keyword: "used pool tables",           family: "used pool tables",    monthly_searches:  74000, tier: "Tier 2", selected: true  },
    { keyword: "used pool tables near me",   family: "used pool tables",    monthly_searches:  49500, tier: "Tier 2", selected: false, variant: true },
    { keyword: "used pool table for sale",   family: "used pool tables",    monthly_searches:  33100, tier: "Tier 2", selected: false, variant: true },
    { keyword: "used pool table near me",    family: "used pool tables",    monthly_searches:  27100, tier: "Tier 2", selected: false, variant: true },
    { keyword: "used billiard table",        family: "used pool tables",    monthly_searches:  14800, tier: "Tier 2", selected: false, variant: true },
    { keyword: "refurbished pool table",     family: "used pool tables",    monthly_searches:  12100, tier: "Tier 2", selected: false, variant: true },
    { keyword: "second hand pool table",     family: "used pool tables",    monthly_searches:   8100, tier: "Tier 2", selected: false, variant: true },

    // TIER 3 — Pool Table Recovery / Service
    { keyword: "pool table recovery",        family: "pool table recovery", monthly_searches:  27100, tier: "Tier 3", selected: true  },
    { keyword: "pool table recovering near me", family: "pool table recovery", monthly_searches: 18100, tier: "Tier 3", selected: false, variant: true },
    { keyword: "pool table recover",         family: "pool table recovery", monthly_searches:  14800, tier: "Tier 3", selected: false, variant: true },
    { keyword: "pool table refelting",       family: "pool table recovery", monthly_searches:  12100, tier: "Tier 3", selected: false, variant: true },
    { keyword: "pool table felt replacement",family: "pool table recovery", monthly_searches:   9900, tier: "Tier 3", selected: false, variant: true },
    { keyword: "pool table cloth replacement",family: "pool table recovery",monthly_searches:   6600, tier: "Tier 3", selected: false, variant: true },
    { keyword: "pool table service near me", family: "pool table recovery", monthly_searches:  14800, tier: "Tier 3", selected: false, variant: true },
    { keyword: "pool table repair near me",  family: "pool table recovery", monthly_searches:  22200, tier: "Tier 3", selected: false, variant: true },
    { keyword: "pool table leveling",        family: "pool table recovery", monthly_searches:   6600, tier: "Tier 3", selected: false, variant: true },

    // TIER 4 — Pool Table Moving (House to House)
    { keyword: "pool table movers",          family: "pool table movers",   monthly_searches:  40500, tier: "Tier 4", selected: true  },
    { keyword: "pool table movers near me",  family: "pool table movers",   monthly_searches:  27100, tier: "Tier 4", selected: false, variant: true },
    { keyword: "pool table moving service",  family: "pool table movers",   monthly_searches:  18100, tier: "Tier 4", selected: false, variant: true },
    { keyword: "move pool table",            family: "pool table movers",   monthly_searches:  12100, tier: "Tier 4", selected: false, variant: true },
    { keyword: "pool table disassembly",     family: "pool table movers",   monthly_searches:   8100, tier: "Tier 4", selected: false, variant: true },
    { keyword: "pool table installation",    family: "pool table movers",   monthly_searches:  14800, tier: "Tier 4", selected: false, variant: true },

    // NOT USED — Billiards Accessories (plan expansion)
    { keyword: "billiard balls",             family: "billiards accessories", monthly_searches: 110000, tier: "Not Used", selected: false },
    { keyword: "billiard balls near me",     family: "billiards accessories", monthly_searches:  27100, tier: "Not Used", selected: false, variant: true },
    { keyword: "pool cues",                  family: "billiards accessories", monthly_searches:  90500, tier: "Not Used", selected: false },
    { keyword: "pool cues near me",          family: "billiards accessories", monthly_searches:  22200, tier: "Not Used", selected: false, variant: true },
    { keyword: "pool cue near me",           family: "billiards accessories", monthly_searches:  18100, tier: "Not Used", selected: false, variant: true },
    { keyword: "billiard accessories",       family: "billiards accessories", monthly_searches:  40500, tier: "Not Used", selected: false },
    { keyword: "billiard accessories near me",family: "billiards accessories",monthly_searches:  14800, tier: "Not Used", selected: false, variant: true },
    { keyword: "pool table accessories",     family: "billiards accessories", monthly_searches:  22200, tier: "Not Used", selected: false },
    { keyword: "billiard supplies",          family: "billiards accessories", monthly_searches:  18100, tier: "Not Used", selected: false },
    { keyword: "pool table light",           family: "billiards accessories", monthly_searches:  33100, tier: "Not Used", selected: false },
    { keyword: "pool table felt",            family: "billiards accessories", monthly_searches:  27100, tier: "Not Used", selected: false },

    // NOT USED — Table Games / Foosball / Shuffleboard
    { keyword: "foosball table",             family: "table games",         monthly_searches:  90500, tier: "Not Used", selected: false },
    { keyword: "foosball table near me",     family: "table games",         monthly_searches:  27100, tier: "Not Used", selected: false, variant: true },
    { keyword: "shuffleboard table",         family: "table games",         monthly_searches:  74000, tier: "Not Used", selected: false },
    { keyword: "shuffleboard table near me", family: "table games",         monthly_searches:  22200, tier: "Not Used", selected: false, variant: true },
    { keyword: "game tables",               family: "table games",         monthly_searches:  60500, tier: "Not Used", selected: false },
    { keyword: "game tables near me",        family: "table games",         monthly_searches:  18100, tier: "Not Used", selected: false, variant: true },
    { keyword: "air hockey table",           family: "table games",         monthly_searches:  74000, tier: "Not Used", selected: false },
    { keyword: "ping pong table near me",    family: "table games",         monthly_searches:  40500, tier: "Not Used", selected: false },
    { keyword: "dart board near me",         family: "table games",         monthly_searches:  27100, tier: "Not Used", selected: false },
    { keyword: "darts near me",              family: "table games",         monthly_searches:  22200, tier: "Not Used", selected: false },

    // NOT USED — Out of scope / generic
    { keyword: "billiards",                  family: "out of scope",        monthly_searches: 550000, tier: "Not Used", selected: false },
    { keyword: "billiards near me",          family: "out of scope",        monthly_searches: 135000, tier: "Not Used", selected: false },
    { keyword: "pool hall near me",          family: "out of scope",        monthly_searches: 110000, tier: "Not Used", selected: false },
    { keyword: "billiard room",              family: "out of scope",        monthly_searches:  49500, tier: "Not Used", selected: false },
    { keyword: "pool table rental",          family: "out of scope",        monthly_searches:  27100, tier: "Not Used", selected: false },
    { keyword: "pool table resale",          family: "out of scope",        monthly_searches:   6600, tier: "Not Used", selected: false },
    { keyword: "house to house pool table",  family: "out of scope",        monthly_searches:   1300, tier: "Not Used", selected: false },
  ],

  // ---- SELECTED KEYWORDS ----
  selected_keywords: [
    "Pool Tables",
    "Used Pool Tables",
    "Pool Table Recovery",
    "Pool Table Movers"
  ],

  // ---- KEYWORD TIERS (for flat-tier-block rendering) ----
  keyword_tiers: [
    {
      tier: "Tier 1",
      color: "t1",
      name: "Pool Tables",
      keyword_count: 10,
      description: "The highest-volume, broadest-intent keyword family for this business. Customers searching 'pool tables' are actively looking to buy — this is the core commercial term that drives the most traffic and the most direct revenue for Sure Shot Billiards & Darts. These terms are searched hundreds of thousands of times per month nationally and represent the single largest opportunity in the plan.",
      keywords: [
        { keyword: "pool tables",                monthly_searches: 246000 },
        { keyword: "pool tables near me",         monthly_searches: 165000 },
        { keyword: "pool table near me",          monthly_searches: 110000 },
        { keyword: "billiard table",              monthly_searches:  60500 },
        { keyword: "pool table for sale",         monthly_searches:  74000 },
        { keyword: "pool table for sale near me", monthly_searches:  49500 },
        { keyword: "pool table store near me",    monthly_searches:  40500 },
        { keyword: "pool table dealer",           monthly_searches:  22200 },
        { keyword: "pool table shop near me",     monthly_searches:  27100 },
        { keyword: "billiard table near me",      monthly_searches:  33100 },
      ]
    },
    {
      tier: "Tier 2",
      color: "t2",
      name: "Used Pool Tables",
      keyword_count: 7,
      description: "Used and pre-owned pool table searches represent a distinct, high-intent buyer segment. Customers searching these terms are price-conscious buyers ready to purchase — and Sure Shot Billiards & Darts' inventory of refurbished and pre-owned tables is a direct match. This tier captures a large secondary audience that is often underserved by competitors who focus only on new inventory.",
      keywords: [
        { keyword: "used pool tables",           monthly_searches: 74000 },
        { keyword: "used pool tables near me",   monthly_searches: 49500 },
        { keyword: "used pool table for sale",   monthly_searches: 33100 },
        { keyword: "used pool table near me",    monthly_searches: 27100 },
        { keyword: "refurbished pool table",     monthly_searches: 12100 },
        { keyword: "used billiard table",        monthly_searches: 14800 },
        { keyword: "second hand pool table",     monthly_searches:  8100 },
      ]
    },
    {
      tier: "Tier 3",
      color: "t3",
      name: "Pool Table Recovery",
      keyword_count: 8,
      description: "Pool table recovery, refelting, and service searches target existing pool table owners who need maintenance. This is a high-margin, repeat-business service line that competitors often neglect online. Ranking for these terms positions Sure Shot Billiards & Darts as the full-service authority — not just a retailer — and drives service calls, felt replacements, leveling, and re-rubber jobs across the service region.",
      keywords: [
        { keyword: "pool table recovery",           monthly_searches: 27100 },
        { keyword: "pool table repair near me",     monthly_searches: 22200 },
        { keyword: "pool table service near me",    monthly_searches: 14800 },
        { keyword: "pool table recovering near me", monthly_searches: 18100 },
        { keyword: "pool table recover",            monthly_searches: 14800 },
        { keyword: "pool table refelting",          monthly_searches: 12100 },
        { keyword: "pool table felt replacement",   monthly_searches:  9900 },
        { keyword: "pool table leveling",           monthly_searches:  6600 },
      ]
    },
    {
      tier: "Tier 4",
      color: "t4",
      name: "Pool Table Movers",
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
      combinations: 30,
      additional_combinations: 10,
      new_market: false,
      headline: "Add Billiards Accessories & Table Games",
      description: "Level B adds 10 more keyword-city combinations, unlocking the billiards accessories and table games keyword families. This expansion positions Sure Shot Billiards & Darts as the go-to destination for pool cues, billiard balls, foosball tables, and shuffleboard tables across the Tri-Cities — capturing the full breadth of the product catalog online.",
      keywords: [
        { keyword: "billiard balls",          monthly_searches: 110000 },
        { keyword: "pool cues",               monthly_searches:  90500 },
        { keyword: "foosball table",          monthly_searches:  90500 },
        { keyword: "shuffleboard table",      monthly_searches:  74000 },
        { keyword: "billiard accessories",    monthly_searches:  40500 },
      ]
    },
    {
      plan: "LEVEL C",
      price: 1200,
      combinations: 60,
      additional_combinations: 30,
      new_market: true,
      headline: "Expand to 60 Combinations + New Markets",
      description: "Level C triples the keyword-city combinations to 60, adding Lewiston, ID, Moses Lake, WA, and Hermiston, OR as new markets. This expansion extends the strategy across the full tri-state service region, capturing pool table buyers and service customers in Idaho and Oregon who are currently outside the plan's reach.",
      keywords: [
        { keyword: "Lewiston, ID",    new_market: true },
        { keyword: "Moses Lake, WA",  new_market: true },
        { keyword: "Hermiston, OR",   new_market: true },
        { keyword: "game tables",     monthly_searches: 60500 },
        { keyword: "dart board near me", monthly_searches: 27100 },
      ]
    },
    {
      plan: "LEVEL D",
      price: 1600,
      combinations: 90,
      additional_combinations: 30,
      new_market: true,
      headline: "Full Regional Domination — 90 Combinations",
      description: "Level D achieves full regional coverage with 90 keyword-city combinations across the entire 120-mile service radius. This plan captures every major market in Washington, Oregon, and Idaho within the service area and positions Sure Shot Billiards & Darts as the undisputed online authority for pool tables, billiards accessories, and table game services across the Pacific Northwest.",
      keywords: [
        { keyword: "Pendleton, OR",   new_market: true },
        { keyword: "Walla Walla, WA", monthly_searches: 34000 },
        { keyword: "pool table accessories", monthly_searches: 22200 },
        { keyword: "billiard supplies",      monthly_searches: 18100 },
        { keyword: "air hockey table",       monthly_searches: 74000 },
      ]
    }
  ]
};

// ============================================================
// UTILITY
// ============================================================
function fmt(n) {
  if (n == null) return '';
  return n.toLocaleString('en-US');
}

// ============================================================
// BUILD KEYWORD TABLE
// ============================================================
function buildKeywordTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;
  const rows = STRATEGY.keyword_table.map(kw => {
    const tierClass = kw.tier === 'Tier 1' ? 't1' : kw.tier === 'Tier 2' ? 't2' : kw.tier === 'Tier 3' ? 't3' : kw.tier === 'Tier 4' ? 't4' : '';
    const tierLabel = kw.tier === 'Not Used' ? '<span class="tier-pill" style="background:#f1f5f9;color:#64748b">Not Used</span>' : `<span class="tier-pill ${tierClass}">${kw.tier.toUpperCase()}</span>`;
    const statusLabel = kw.selected ? '<span class="status-selected">&#10003; Selected</span>' : '<span class="status-not-used">Not Used</span>';
    const rowClass = kw.selected ? 'row-selected' : (kw.family === 'out of scope' ? 'row-out-of-scope' : '');
    const indent = kw.variant ? '<span class="kw-variant-arrow">&#8627;</span>' : '';
    return `<tr class="${rowClass}"><td>${indent}${kw.keyword}</td><td class="num-col">${fmt(kw.monthly_searches)}</td><td>${tierLabel}</td><td>${statusLabel}</td></tr>`;
  }).join('');
  tbody.innerHTML = rows;
}

// ============================================================
// BUILD KEYWORD TIER FLAT BLOCKS (Approach C)
// ============================================================
function buildKeywordTierCards() {
  const grid = document.getElementById('kw-tier-grid');
  if (!grid) return;
  const blocks = STRATEGY.keyword_tiers.map(tier => {
    const tierCls = tier.color;
    const kwRows = tier.keywords.map(kw =>
      `<div class="flat-tier-kw-row">
        <span class="flat-tier-kw-name">${kw.keyword}</span>
        <span class="flat-tier-kw-vol">${fmt(kw.monthly_searches)}</span>
      </div>`
    ).join('');
    return `<div class="flat-tier-block">
      <div class="flat-tier-header ${tierCls}">
        <span class="flat-tier-pill">${tier.tier.toUpperCase()}</span>
        <span class="flat-tier-name">${tier.name}</span>
        <span class="flat-tier-count">${tier.keyword_count} keywords</span>
      </div>
      <div class="flat-tier-desc">${tier.description}</div>
      <div class="flat-tier-table">
        <div class="flat-tier-col-header">
          <span>Keyword</span>
          <span>Mo. Searches</span>
        </div>
        ${kwRows}
      </div>
    </div>`;
  }).join('');
  grid.innerHTML = blocks;
}

// ============================================================
// BUILD MATRIX — CITY CARDS (Approach C)
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
    const kwList = keywords.map(kw =>
      `<div class="city-kw-row">
        <span class="city-kw-check">&#10003;</span>
        <span class="city-kw-name">${kw}</span>
      </div>`
    ).join('');
    return `<div class="city-matrix-card">
      <div class="city-matrix-header">
        <div class="city-matrix-header-top">
          <span class="city-matrix-name">${m.city}, ${m.state}${hqBadge}</span>
        </div>
        <div class="city-matrix-header-meta">
          <span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span>
          <span class="city-matrix-pop">Pop. ${fmt(m.pop)}</span>
        </div>
      </div>
      <div class="city-kw-list">${kwList}</div>
      <div class="city-matrix-footer">${keywords.length} combinations</div>
    </div>`;
  }).join('');

  cityGrid.className = 'city-matrix-grid';
  cityGrid.innerHTML = cards;

  if (grandTotal) {
    grandTotal.className = 'matrix-grand-total-bar';
    grandTotal.innerHTML = `Grand Total: <strong>${keywords.length * markets.length} Combinations</strong>`;
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
    const kwList = opp.keywords.map(kw =>
      `<li>
        <span class="opp-kw">${kw.keyword}</span>
        ${kw.monthly_searches ? `<span class="opp-vol">${fmt(kw.monthly_searches)}</span>` : kw.new_market ? `<span class="opp-vol opp-new-market">New Market</span>` : ''}
      </li>`
    ).join('');
    const highlight = i === 0 ? 'opp-card-highlight' : '';
    const newMarketDiv = opp.new_market
      ? `<div class="opp-new-market">+ New Market Added</div>`
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
