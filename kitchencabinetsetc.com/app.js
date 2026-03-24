const STRATEGY = {
  client_name: "Kitchen Cabinets Etc.",
  industry: "Cabinet & Countertop Showroom",
  hq_city: "Bellevue",
  state: "WA",
  service_area: "Eastside King County",
  plan_level: "Level A",
  plan_price: 600,
  total_combinations: 20,
  total_keywords_researched: 20,
  selected_keywords: [
    "Kitchen Cabinets Near Me",
    "Bathroom Cabinets Near Me",
    "Countertops Near Me",
    "Window Treatments Near Me"
  ],
  num_selected_keywords: 4,
  num_target_markets: 5,

  // keyword_table: all researched keywords, grouped by tight bucket (same core term only)
  keyword_table: [
    // BUCKET: kitchen cabinets
    { keyword: "kitchen cabinets near me",       monthly_searches: 74000,  tier: "Tier 1", status: "selected", family: "kitchen_cabinets", variant_type: "base" },
    { keyword: "custom kitchen cabinets",         monthly_searches: 90500,  tier: "Tier 1", status: "not_used", family: "kitchen_cabinets", variant_type: "variant" },
    { keyword: "kitchen cabinet store",           monthly_searches: 5400,   tier: "Tier 1", status: "not_used", family: "kitchen_cabinets", variant_type: "variant" },
    // BUCKET: bathroom cabinets
    { keyword: "bathroom cabinets near me",       monthly_searches: 12100,  tier: "Tier 1", status: "selected", family: "bathroom_cabinets", variant_type: "base" },
    { keyword: "bathroom cabinets",               monthly_searches: 40500,  tier: "Tier 1", status: "not_used", family: "bathroom_cabinets", variant_type: "variant" },
    // BUCKET: bathroom vanity (separate core term)
    { keyword: "bathroom vanity near me",         monthly_searches: 33100,  tier: "Tier 1", status: "not_used", family: "bathroom_vanity", variant_type: "base" },
    { keyword: "bathroom vanities near me",       monthly_searches: 22200,  tier: "Tier 1", status: "not_used", family: "bathroom_vanity", variant_type: "variant" },
    // BUCKET: countertops
    { keyword: "countertops near me",             monthly_searches: 12100,  tier: "Tier 2", status: "selected", family: "countertops", variant_type: "base" },
    { keyword: "countertop stores near me",       monthly_searches: 8100,   tier: "Tier 2", status: "not_used", family: "countertops", variant_type: "variant" },
    { keyword: "countertop companies near me",    monthly_searches: 1600,   tier: "Tier 2", status: "not_used", family: "countertops", variant_type: "variant" },
    // BUCKET: granite countertops (separate core term)
    { keyword: "granite countertops near me",     monthly_searches: 33100,  tier: "Tier 2", status: "not_used", family: "granite_countertops", variant_type: "base" },
    { keyword: "granite countertop store",        monthly_searches: 2400,   tier: "Tier 2", status: "not_used", family: "granite_countertops", variant_type: "variant" },
    // BUCKET: quartz countertops (separate core term)
    { keyword: "quartz countertops near me",      monthly_searches: 22200,  tier: "Tier 2", status: "not_used", family: "quartz_countertops", variant_type: "base" },
    // BUCKET: window treatments
    { keyword: "window treatments near me",       monthly_searches: 22200,  tier: "Tier 3", status: "selected", family: "window_treatments", variant_type: "base" },
    { keyword: "window treatment store",          monthly_searches: 1600,   tier: "Tier 3", status: "not_used", family: "window_treatments", variant_type: "variant" },
    // BUCKET: blinds (separate core term from window treatments)
    { keyword: "blinds near me",                  monthly_searches: 18100,  tier: "Tier 3", status: "not_used", family: "blinds", variant_type: "base" },
    { keyword: "window blinds near me",           monthly_searches: 12100,  tier: "Tier 3", status: "not_used", family: "blinds", variant_type: "variant" },
    // BUCKET: shutters (separate core term)
    { keyword: "shutters near me",                monthly_searches: 5400,   tier: "Tier 3", status: "not_used", family: "shutters", variant_type: "base" },
    // BUCKET: kitchen and bath (separate core term - different service intent)
    { keyword: "kitchen and bath showroom",       monthly_searches: 1300,   tier: "Tier 1", status: "not_used", family: "kitchen_bath", variant_type: "base" },
    // BUCKET: cabinet makers (wrong business model - for reference only)
    { keyword: "cabinet makers near me",          monthly_searches: 74000,  tier: "Tier 1", status: "not_used", family: "cabinet_makers", variant_type: "base" }
  ],

  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Cabinet Showroom",
      description: "Core cabinet service keywords targeting homeowners ready to visit a showroom. Kitchen and bathroom cabinets are the client's primary product lines and represent the highest-intent, most commercially relevant searches for their business.",
      keywords: [
        { keyword: "Kitchen Cabinets Near Me", monthly_searches: 74000 },
        { keyword: "Bathroom Cabinets Near Me", monthly_searches: 12100 }
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Countertop Store",
      description: "High-intent countertop retail searches targeting buyers ready to visit a showroom to see and select countertop materials. Countertops are the client's second major product line.",
      keywords: [
        { keyword: "Countertops Near Me", monthly_searches: 12100 }
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Window Treatments",
      description: "Window covering searches that align with the client's third major product line, attracting customers looking for blinds, shades, and shutters.",
      keywords: [
        { keyword: "Window Treatments Near Me", monthly_searches: 22200 }
      ]
    }
  ],

  not_used_groups: [
    {
      reason: "Incorrect Business Model",
      description: "These keywords imply the client is a manufacturer, craftsman, or general contractor. Kitchen Cabinets Etc. is a retail showroom, not a fabricator. Using these terms would attract the wrong audience and misrepresent the business.",
      keywords: [
        { keyword: "Cabinet Makers Near Me", monthly_searches: 74000 },
        { keyword: "Kitchen and Bath Showroom", monthly_searches: 1300 }
      ]
    },
    {
      reason: "Reserved for Plan Expansion",
      description: "These high-value keywords are ideal for future plan upgrades. Each represents a distinct product sub-category or material type that warrants its own dedicated keyword slot when the plan level allows for more combinations.",
      keywords: [
        { keyword: "Custom Kitchen Cabinets", monthly_searches: 90500 },
        { keyword: "Granite Countertops Near Me", monthly_searches: 33100 },
        { keyword: "Bathroom Vanity Near Me", monthly_searches: 33100 },
        { keyword: "Quartz Countertops Near Me", monthly_searches: 22200 },
        { keyword: "Blinds Near Me", monthly_searches: 18100 }
      ]
    }
  ],

  additional_opportunities: [
    {
      plan: "Level B",
      combinations: 30,
      price: 900,
      additional_combinations: 10,
      headline: "Add Custom Cabinets & Granite Keywords",
      description: "Upgrading to Level B adds two powerful, high-volume keywords: Custom Kitchen Cabinets (90,500 searches) and Granite Countertops Near Me (33,100 searches). This dramatically expands coverage for the client's most premium product offerings across all 5 existing markets.",
      keywords: [
        { keyword: "Custom Kitchen Cabinets", monthly_searches: 90500 },
        { keyword: "Granite Countertops Near Me", monthly_searches: 33100 }
      ],
      new_market: false
    },
    {
      plan: "Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 20,
      headline: "Add Bathroom Vanity, Quartz & New Markets",
      description: "Level C introduces two new Eastside markets (Bothell and Issaquah) and adds Bathroom Vanity Near Me and Quartz Countertops Near Me, significantly increasing the client's footprint across the Eastside for their most popular product lines.",
      keywords: [
        { keyword: "Bathroom Vanity Near Me", monthly_searches: 33100 },
        { keyword: "Quartz Countertops Near Me", monthly_searches: 22200 },
        { keyword: "Bothell, WA", monthly_searches: null, new_market: true },
        { keyword: "Issaquah, WA", monthly_searches: null, new_market: true }
      ],
      new_market: true
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 30,
      headline: "Add Blinds & Mercer Island",
      description: "Level D achieves comprehensive coverage by adding the Blinds Near Me keyword and the high-wealth Mercer Island market, capturing the full window treatment category and one of the most affluent communities in the Pacific Northwest.",
      keywords: [
        { keyword: "Blinds Near Me", monthly_searches: 18100 },
        { keyword: "Mercer Island, WA", monthly_searches: null, new_market: true }
      ],
      new_market: true
    }
  ]
};

function fmt(n) {
  if (n === null || n === undefined) return '';
  return n.toLocaleString();
}

function statusBadge(status) {
  if (status === 'selected') return '<span class="status-badge status-selected">Selected</span>';
  return '<span class="status-badge status-not-used">Not Used</span>';
}

function tierPill(label) {
  const cls = label === 'Tier 1' ? 't1' : label === 'Tier 2' ? 't2' : label === 'Tier 3' ? 't3' : 't4';
  return `<span class="tier-pill ${cls}">${label.toUpperCase()}</span>`;
}

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
      const rowClass = isBase
        ? (kw.status === 'selected' ? 'row-base row-selected' : 'row-base')
        : 'row-variant';
      const kwCell = isBase
        ? `<td>${kw.keyword}</td>`
        : `<td class="kw-variant-cell"><span class="kw-variant-indent">&#8627;</span>${kw.keyword} <span class="kw-variant-badge">Variant</span></td>`;
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
      <div class="kw-tier-table">
        <div class="kw-header"><span>Keyword</span><span>Mo. Searches</span></div>
        ${kwRows}
      </div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  const markets = [
    { city: "Bellevue",   tier: "Tier 1", population: 151854, is_hq: true },
    { city: "Renton",     tier: "Tier 1", population: 108429, is_hq: false },
    { city: "Kirkland",   tier: "Tier 1", population: 92175,  is_hq: false },
    { city: "Redmond",    tier: "Tier 1", population: 73256,  is_hq: false },
    { city: "Sammamish",  tier: "Tier 1", population: 68981,  is_hq: false }
  ];
  const keywords = STRATEGY.selected_keywords;

  const kwHeaders = keywords.map(kw =>
    `<th class="total-header" style="text-align:center;">${kw}</th>`
  ).join('');
  thead.innerHTML = `<tr>
    <th style="text-align:left; padding-left:16px; min-width:180px;">City / Market</th>
    ${kwHeaders}
    <th class="total-header">Total</th>
  </tr>`;

  const rows = markets.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : 't2';
    const cityLabel = m.is_hq
      ? `${m.city} <span class="hq-tag">HQ</span>`
      : m.city;
    const checkCells = keywords.map(() =>
      `<td class="matrix-check">&#10003;</td>`
    ).join('');
    return `<tr>
      <td class="city-row-label">
        ${cityLabel}
        <div class="city-tier-inline">
          <span class="tier-pill ${tierCls} tier-pill-sm">${m.tier.toUpperCase()}</span>
          <span style="font-size:0.75rem; color:#888; font-weight:400;">Pop. ${fmt(m.population)}</span>
        </div>
      </td>
      ${checkCells}
      <td class="city-total-cell">${keywords.length}</td>
    </tr>`;
  }).join('');

  const grandTotal = keywords.length * markets.length;
  tbody.innerHTML = rows
    + `<tr class="grand-total-row"><td colspan="${keywords.length + 2}" class="grand-total">Grand Total: <strong>${grandTotal} Combinations</strong></td></tr>`;
}

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
}

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
    const newMarketDiv = opp.new_market ? '<div class="opp-new-market">Adds New Markets</div>' : '<div class="opp-new-market" style="visibility:hidden"></div>';

    return `<div class="opp-card ${highlight}">
      <div class="opp-plan-label">${opp.plan}</div>
      ${opp.price ? `<div class="opp-price">$${fmt(opp.price)}<span class="opp-price-label">/mo</span></div>` : ''}
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

const MARKET_DATA = [
  { rank: 1, city: 'Bellevue',      pop: 151854, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 2, city: 'Renton',        pop: 108429, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3, city: 'Kirkland',      pop: 92175,  tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4, city: 'Redmond',       pop: 73256,  tier: 'Tier 1', selected: true,  hq: false },
  { rank: 5, city: 'Sammamish',     pop: 68981,  tier: 'Tier 1', selected: true,  hq: false },
  { rank: 6, city: 'Bothell',       pop: 55287,  tier: 'Tier 2', selected: false, hq: false },
  { rank: 7, city: 'Issaquah',      pop: 40051,  tier: 'Tier 2', selected: false, hq: false },
  { rank: 8, city: 'Mercer Island', pop: 26320,  tier: 'Tier 3', selected: false, hq: false },
];

function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = MARKET_DATA.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const rowCls = m.selected ? 'mob-mkt-row selected' : 'mob-mkt-row';
    return `<div class="${rowCls}">
      <span class="mob-rank">${m.rank}</span>
      <span class="mob-city">${m.selected ? '<strong>' : ''}${cityLabel}${m.selected ? '</strong>' : ''}</span>
      <span class="mob-pop">${fmt(m.pop)}</span>
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

function buildMobileMatrix() {
  const el = document.getElementById('mobile-matrix');
  if (!el) return;
  const markets = [
    { city: 'Bellevue',  tier: 'Tier 1', pop: 151854, is_hq: true  },
    { city: 'Renton',    tier: 'Tier 1', pop: 108429, is_hq: false },
    { city: 'Kirkland',  tier: 'Tier 1', pop: 92175,  is_hq: false },
    { city: 'Redmond',   tier: 'Tier 1', pop: 73256,  is_hq: false },
    { city: 'Sammamish', tier: 'Tier 1', pop: 68981,  is_hq: false },
  ];
  const keywords = STRATEGY.selected_keywords;
  const cards = markets.map(m => {
    const cityLabel = m.is_hq ? `${m.city} <span class="hq-tag">HQ</span>` : m.city;
    const kwList = keywords.map(kw =>
      `<div class="mob-matrix-kw"><span class="mob-matrix-check">&#10003;</span><span>${kw}</span></div>`
    ).join('');
    return `<div class="mob-matrix-card">
      <div class="mob-matrix-city">
        <span class="mob-matrix-city-name">${cityLabel}</span>
        <span class="mob-matrix-meta"><span class="tier-pill t1">TIER 1</span> &nbsp; Pop. ${fmt(m.pop)}</span>
      </div>
      <div class="mob-matrix-kws">${kwList}</div>
      <div class="mob-matrix-total">${keywords.length} combinations</div>
    </div>`;
  }).join('');
  el.innerHTML = cards + `<div class="mob-matrix-grand-total">Grand Total: <strong>${keywords.length * markets.length} Combinations</strong></div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildMobileMarketList();
  buildMobileMatrix();
  buildNotUsed();
  buildOpportunities();
});
