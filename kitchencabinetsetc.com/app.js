const STRATEGY = {
  client_name: "Kitchen Cabinets Etc.",
  industry: "Cabinet & Countertop Showroom",
  hq_city: "Bellevue",
  state: "WA",
  service_area: "Bellevue & Eastside Communities",
  plan_level: "Level A",
  plan_price: 600,
  total_combinations: 20,
  total_keywords_researched: 17,
  selected_keywords: [
    "Kitchen Cabinets Near Me",
    "Kitchen Cabinet Showroom",
    "Countertop Stores Near Me",
    "Window Treatments Near Me"
  ],
  num_selected_keywords: 4,
  num_target_markets: 5,

  keyword_table: [
    { keyword: "kitchen cabinets near me",   monthly_searches: 74000, tier: "Tier 1", status: "selected", family: "cabinets", variant_type: "near_me" },
    { keyword: "kitchen cabinet store",      monthly_searches: 5400,  tier: "Tier 1", status: "not_used", family: "cabinets", variant_type: "variant" },
    { keyword: "kitchen cabinet showroom",   monthly_searches: 1900,  tier: "Tier 1", status: "selected", family: "cabinets", variant_type: "base" },
    { keyword: "cabinet store near me",      monthly_searches: 2900,  tier: "Tier 1", status: "not_used", family: "cabinets", variant_type: "variant" },
    { keyword: "custom kitchen cabinets",    monthly_searches: 90500, tier: "Tier 1", status: "not_used", family: "cabinets", variant_type: "variant" },
    { keyword: "bathroom cabinets near me",  monthly_searches: 12100, tier: "Tier 1", status: "not_used", family: "cabinets", variant_type: "variant" },
    { keyword: "bathroom vanity near me",    monthly_searches: 33100, tier: "Tier 1", status: "not_used", family: "cabinets", variant_type: "variant" },
    { keyword: "kitchen and bath showroom",  monthly_searches: 1300,  tier: "Tier 1", status: "not_used", family: "cabinets", variant_type: "variant" },
    { keyword: "cabinet companies near me",  monthly_searches: 2900,  tier: "Tier 1", status: "not_used", family: "cabinets", variant_type: "variant" },
    { keyword: "cabinet makers near me",     monthly_searches: 74000, tier: "Tier 1", status: "not_used", family: "cabinets", variant_type: "variant" },
    { keyword: "countertop stores near me",  monthly_searches: 8100,  tier: "Tier 2", status: "selected", family: "countertops", variant_type: "base" },
    { keyword: "granite countertops near me",monthly_searches: 33100, tier: "Tier 2", status: "not_used", family: "countertops", variant_type: "variant" },
    { keyword: "quartz countertops near me", monthly_searches: 22200, tier: "Tier 2", status: "not_used", family: "countertops", variant_type: "variant" },
    { keyword: "countertop companies near me",monthly_searches: 1600, tier: "Tier 2", status: "not_used", family: "countertops", variant_type: "variant" },
    { keyword: "window treatments near me", monthly_searches: 22200, tier: "Tier 3", status: "selected", family: "window", variant_type: "base" },
    { keyword: "blinds near me",            monthly_searches: 18100, tier: "Tier 3", status: "not_used", family: "window", variant_type: "variant" },
    { keyword: "window blinds near me",     monthly_searches: 12100, tier: "Tier 3", status: "not_used", family: "window", variant_type: "variant" }
  ],

  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Cabinet Showroom",
      description: "Core identity keywords that match exactly what searchers look for when visiting a cabinet showroom. These terms establish the client as a primary local destination for kitchen and bath cabinets.",
      keywords: [
        { keyword: "Kitchen Cabinets Near Me", monthly_searches: 74000 },
        { keyword: "Kitchen Cabinet Showroom", monthly_searches: 1900 }
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Countertop Store",
      description: "High-intent countertop retail searches that capture buyers ready to visit a showroom to see and select countertop materials like granite and quartz.",
      keywords: [
        { keyword: "Countertop Stores Near Me", monthly_searches: 8100 }
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Window Treatments",
      description: "Window covering searches that align with the client\'s third major product line, attracting customers looking for blinds, shades, and shutters.",
      keywords: [
        { keyword: "Window Treatments Near Me", monthly_searches: 22200 }
      ]
    }
  ],

  not_used_groups: [
    {
      reason: "Incorrect Business Model",
      description: "These keywords imply the client is a manufacturer, fabricator, or general contractor, which is incorrect. The focus is on their retail showroom business model.",
      keywords: [
        { keyword: "Cabinet Makers Near Me", monthly_searches: 74000 },
        { keyword: "Kitchen Remodeling Near Me", monthly_searches: 74000 },
        { keyword: "Cabinet Companies Near Me", monthly_searches: 2900 }
      ]
    },
    {
      reason: "Reserved for Plan Expansion",
      description: "These high-value keywords are perfect for future plan upgrades. They either target broader categories (custom cabinets) or specific product lines (bathroom vanities, specific countertop materials) that are ideal for dedicated content expansion.",
      keywords: [
        { keyword: "Custom Kitchen Cabinets", monthly_searches: 90500 },
        { keyword: "Bathroom Vanity Near Me", monthly_searches: 33100 },
        { keyword: "Granite Countertops Near Me", monthly_searches: 33100 },
        { keyword: "Quartz Countertops Near Me", monthly_searches: 22200 }
      ]
    }
  ],

  additional_opportunities: [
    {
      plan: "Level B",
      combinations: 30,
      price: 900,
      additional_combinations: 10,
      headline: "Add Bathroom & Granite Keywords",
      description: "Upgrading to Level B adds two powerful, high-volume keywords: \'Bathroom Vanity Near Me\' and \'Granite Countertops Near Me\'. This expands coverage to the bathroom product line and a primary countertop material across all 5 existing markets.",
      keywords: [
        { keyword: "Bathroom Vanity Near Me", monthly_searches: 33100 },
        { keyword: "Granite Countertops Near Me", monthly_searches: 33100 }
      ],
      new_market: false
    },
    {
      plan: "Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 20,
      headline: "Expand to New Markets & Add Quartz",
      description: "Level C introduces two new, high-value markets (Renton and Bothell) and adds the \'Quartz Countertops Near Me\' keyword, significantly increasing the client\'s footprint across the Eastside for their most popular products.",
      keywords: [
        { keyword: "Quartz Countertops Near Me", monthly_searches: 22200 },
        { keyword: "Renton, WA", monthly_searches: null, new_market: true },
        { keyword: "Bothell, WA", monthly_searches: null, new_market: true }
      ],
      new_market: true
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 30,
      headline: "Full Eastside Dominance",
      description: "Level D achieves comprehensive coverage by adding the final Eastside market (Mercer Island) and layering in broader retail-focused keywords like \'Cabinet Store Near Me\' to capture maximum local search traffic across all 8 markets.",
      keywords: [
        { keyword: "Cabinet Store Near Me", monthly_searches: 2900 },
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

function statusBadge(status, note) {
  if (status === 'selected') return '<span class="status-badge status-selected">Selected</span>';
  if (status === 'near_me') return `<span class="status-badge status-near-me" title="${note}">Near Me Variant</span>`;
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
      { city: "Bellevue", tier: "Tier 1", population: 151854, is_hq: true },
      { city: "Kirkland", tier: "Tier 1", population: 92175, is_hq: false },
      { city: "Redmond", tier: "Tier 1", population: 73256, is_hq: false },
      { city: "Sammamish", tier: "Tier 1", population: 68981, is_hq: false },
      { city: "Issaquah", tier: "Tier 2", population: 40051, is_hq: false }
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
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
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
  if (STRATEGY.not_used_groups.length === 4) {
    grid.classList.add('grid-2col');
  } else {
    grid.classList.remove('grid-2col');
  }
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
    { rank: 1, city: 'Bellevue', pop: 151854, tier: 'Tier 1', selected: true, hq: true },
    { rank: 2, city: 'Renton', pop: 108429, tier: 'Tier 1', selected: false, hq: false },
    { rank: 3, city: 'Kirkland', pop: 92175, tier: 'Tier 1', selected: true, hq: false },
    { rank: 4, city: 'Redmond', pop: 73256, tier: 'Tier 1', selected: true, hq: false },
    { rank: 5, city: 'Sammamish', pop: 68981, tier: 'Tier 1', selected: true, hq: false },
    { rank: 6, city: 'Bothell', pop: 55287, tier: 'Tier 2', selected: false, hq: false },
    { rank: 7, city: 'Issaquah', pop: 40051, tier: 'Tier 2', selected: true, hq: false },
    { rank: 8, city: 'Mercer Island', pop: 26320, tier: 'Tier 3', selected: false, hq: false },
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

function buildMobileMatrix() {
  const el = document.getElementById('mobile-matrix');
  if (!el) return;
  const markets = [
    { city: 'Bellevue', tier: 'Tier 1', pop: 151854, is_hq: true },
    { city: 'Kirkland', tier: 'Tier 1', pop: 92175, is_hq: false },
    { city: 'Redmond', tier: 'Tier 1', pop: 73256, is_hq: false },
    { city: 'Sammamish', tier: 'Tier 1', pop: 68981, is_hq: false },
    { city: 'Issaquah', tier: 'Tier 2', pop: 40051, is_hq: false },
  ];
  const keywords = STRATEGY.selected_keywords;
  const cards = markets.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : 't2';
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

document.addEventListener('DOMContentLoaded', () => {
  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildMobileMarketList();
  buildMobileMatrix();
  buildNotUsed();
  buildOpportunities();
});
