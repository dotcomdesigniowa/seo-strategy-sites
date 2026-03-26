const STRATEGY = {
  client_name: "Kitchen Cabinets Etc.",
  industry: "Cabinet & Countertop Showroom",
  hq_city: "Bellevue",
  state: "WA",
  service_area: "Eastside King County",
  plan_level: "Level B",
  plan_price: 900,
  total_combinations: 30,
  total_keywords_researched: 17,
  selected_keywords: [
    "Kitchen Cabinets Near Me",
    "Bathroom Cabinets Near Me",
    "Countertops Near Me",
    "Granite Countertops Near Me",
    "Custom Kitchen Cabinets"
  ],
  num_selected_keywords: 5,
  num_target_markets: 6,

  // keyword_table: all researched keywords, grouped by tight bucket (same core term only)
  keyword_table: [
    // BUCKET: kitchen cabinets
    { keyword: "kitchen cabinets near me",       monthly_searches: 74000,  tier: "Tier 1", status: "selected", family: "kitchen_cabinets", variant_type: "base" },
    { keyword: "custom kitchen cabinets",         monthly_searches: 90500,  tier: "Tier 1", status: "selected", family: "kitchen_cabinets", variant_type: "variant" },
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
    { keyword: "granite countertops near me",     monthly_searches: 33100,  tier: "Tier 2", status: "selected", family: "granite_countertops", variant_type: "base" },
    { keyword: "granite countertop store",        monthly_searches: 2400,   tier: "Tier 2", status: "not_used", family: "granite_countertops", variant_type: "variant" },
    // BUCKET: quartz countertops (separate core term)
    { keyword: "quartz countertops near me",      monthly_searches: 22200,  tier: "Tier 2", status: "not_used", family: "quartz_countertops", variant_type: "base" },
    // BUCKET: kitchen and bath (separate core term - different service intent)
    { keyword: "kitchen and bath showroom",       monthly_searches: 1300,   tier: "Tier 1", status: "not_used", family: "kitchen_bath", variant_type: "base" },
    // BUCKET: cabinet makers (wrong business model - for reference only)
    { keyword: "cabinet makers near me",          monthly_searches: 74000,  tier: "Tier 1", status: "not_used", family: "cabinet_makers", variant_type: "base" }
  ],

  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Cabinet Showroom",
      description: "Core cabinet service keywords targeting homeowners ready to visit a showroom. Kitchen and bathroom cabinets are the client's primary product lines and represent the highest-intent, most commercially relevant searches for their business. Custom kitchen cabinets is included at Level B to capture the premium renovation audience.",
      keywords: [
        { keyword: "Kitchen Cabinets Near Me",   monthly_searches: 74000 },
        { keyword: "Custom Kitchen Cabinets",    monthly_searches: 90500 },
        { keyword: "Bathroom Cabinets Near Me",  monthly_searches: 12100 }
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Countertop Store",
      description: "High-intent countertop retail searches targeting buyers ready to visit a showroom to see and select countertop materials. Countertops and granite countertops are both selected at Level B, covering both the general countertop shopper and the buyer specifically seeking stone surfaces.",
      keywords: [
        { keyword: "Countertops Near Me",         monthly_searches: 12100 },
        { keyword: "Granite Countertops Near Me", monthly_searches: 33100 }
      ]
    }
  ],

  not_used_groups: [
    {
      reason: "Incorrect Business Model",
      description: "These keywords imply the client is a manufacturer, craftsman, or general contractor. Kitchen Cabinets Etc. is a retail showroom, not a fabricator. Using these terms would attract the wrong audience and misrepresent the business.",
      keywords: [
        { keyword: "Cabinet Makers Near Me",      monthly_searches: 74000 }
      ]
    },
    {
      reason: "Reserved for Plan Expansion",
      description: "These high-value keywords are ideal for future plan upgrades. Each represents a distinct product sub-category or material type that warrants its own dedicated keyword slot when the plan level allows for more combinations.",
      keywords: [
        { keyword: "Kitchen and Bath Showroom",   monthly_searches: 1300 },
        { keyword: "Bathroom Vanity Near Me",     monthly_searches: 33100 },
        { keyword: "Quartz Countertops Near Me",  monthly_searches: 22200 }
      ]
    }
  ],

  additional_opportunities: [
    {
      plan: "Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 10,
      headline: "Add Bathroom Vanity and Quartz Countertops",
      description: "Upgrading to Level C adds two powerful, high-volume keywords: Bathroom Vanity Near Me (33,100 searches) and Quartz Countertops Near Me (22,200 searches). This expands coverage into the client's bathroom vanity product line and adds a dedicated quartz-specific keyword across all 6 existing markets.",
      keywords: [
        { keyword: "Bathroom Vanity Near Me",    monthly_searches: 33100 },
        { keyword: "Quartz Countertops Near Me", monthly_searches: 22200 }
      ],
      new_market: false
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 20,
      headline: "Expand into Bothell and Issaquah",
      description: "Level D adds two additional Eastside markets: Bothell (55,287 residents) and Issaquah (40,051 residents), extending all 7 keywords into two growing communities with strong residential remodeling demand and easy access to the Bellevue showroom.",
      keywords: [
        { keyword: "Bothell, WA",   monthly_searches: null, new_market: true },
        { keyword: "Issaquah, WA",  monthly_searches: null, new_market: true }
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
        : (kw.status === 'selected' ? 'row-variant row-selected' : 'row-variant');
      const kwCell = isBase
        ? `<td>${kw.keyword}</td>`
        : `<td class="kw-variant-cell"><span class="kw-variant-indent">&#8627;</span>${kw.keyword} <span class="kw-variant-badge">Variant</span></td>`;
      return `<tr class="${rowClass}">
        ${kwCell}
        <td class="num-col">${fmt(kw.monthly_searches)}</td>
        <td>${kw.tier ? tierPill(kw.tier) : ''}</td>
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
      <div class="kw-rows">${kwRows}</div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

function buildMatrix() {
  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  const keywords = STRATEGY.selected_keywords;
  const markets = [
    'Bellevue', 'Renton', 'Kirkland', 'Redmond', 'Sammamish', 'Mercer Island'
  ];

  // Keywords as columns (6 markets, 5 keywords — keywords-as-columns layout)
  thead.innerHTML = `<tr><th>Market</th>${keywords.map(k => `<th>${k}</th>`).join('')}</tr>`;
  tbody.innerHTML = markets.map(city =>
    `<tr><td><strong>${city}</strong></td>${keywords.map(k =>
      `<td class="matrix-cell">&#10003;</td>`
    ).join('')}</tr>`
  ).join('');
}

function buildMobileMatrix() {
  const container = document.getElementById('mobile-matrix');
  if (!container) return;
  const keywords = STRATEGY.selected_keywords;
  const markets = [
    'Bellevue', 'Renton', 'Kirkland', 'Redmond', 'Sammamish', 'Mercer Island'
  ];
  container.innerHTML = markets.map(city =>
    `<div class="mobile-matrix-city">
      <div class="mobile-matrix-city-name">${city}</div>
      ${keywords.map(k => `<div class="mobile-matrix-kw">&#10003; ${k}</div>`).join('')}
    </div>`
  ).join('');
}

function buildNotUsed() {
  const grid = document.getElementById('not-used-grid');
  if (!grid) return;
  grid.innerHTML = STRATEGY.not_used_groups.map(group =>
    `<div class="not-used-card">
      <h4 class="not-used-reason">${group.reason}</h4>
      <p class="not-used-desc">${group.description}</p>
      <ul class="not-used-kw-list">
        ${group.keywords.map(kw =>
          `<li><span class="not-used-kw">${kw.keyword}</span><span class="not-used-vol">${fmt(kw.monthly_searches)}/mo</span></li>`
        ).join('')}
      </ul>
    </div>`
  ).join('');
}

function buildOpportunities() {
  const grid = document.getElementById('opportunities-grid');
  if (!grid) return;
  grid.innerHTML = STRATEGY.additional_opportunities.map(opp => {
    const kwItems = opp.keywords.map(kw =>
      kw.new_market
        ? `<div class="opp-kw-row opp-new-market"><span class="opp-kw-name">&#127968; ${kw.keyword}</span><span class="opp-kw-tag">New Market</span></div>`
        : `<div class="opp-kw-row"><span class="opp-kw-name">${kw.keyword}</span><span class="opp-kw-vol">${fmt(kw.monthly_searches)}/mo</span></div>`
    ).join('');
    return `<div class="opp-card">
      <div class="opp-plan-badge">${opp.plan}</div>
      <div class="opp-combos">${opp.combinations} Combinations</div>
      <div class="opp-price">$${opp.price.toLocaleString()}/mo</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <div class="opp-kw-list">${kwItems}</div>
    </div>`;
  }).join('');
}

function buildMobileMarketList() {
  const container = document.getElementById('mobile-market-list');
  if (!container) return;
  const markets = [
    { rank: 1, name: 'Bellevue (HQ)', pop: 151854, tier: 'Tier 1', selected: true, hq: true, rationale: 'Headquarters; largest Eastside city.' },
    { rank: 2, name: 'Renton',        pop: 108429, tier: 'Tier 1', selected: true, rationale: 'Second-largest Eastside city; strong remodel demand.' },
    { rank: 3, name: 'Kirkland',      pop: 92175,  tier: 'Tier 1', selected: true, rationale: 'Affluent lakeside community.' },
    { rank: 4, name: 'Redmond',       pop: 73256,  tier: 'Tier 1', selected: true, rationale: 'Tech hub; high household incomes.' },
    { rank: 5, name: 'Sammamish',     pop: 68981,  tier: 'Tier 1', selected: true, rationale: 'One of the most affluent cities in WA.' },
    { rank: 6, name: 'Mercer Island', pop: 26320,  tier: 'Tier 2', selected: true, rationale: 'Client priority: strong buying power, consistent business.' },
    { rank: 7, name: 'Bothell',       pop: 55287,  tier: 'Tier 2', selected: false, rationale: 'Top candidate for Level C expansion.' },
    { rank: 8, name: 'Issaquah',      pop: 40051,  tier: 'Tier 2', selected: false, rationale: 'Affluent suburb; Level C expansion.' }
  ];
  container.innerHTML = markets.map(m =>
    `<div class="mobile-market-row ${m.selected ? 'selected' : ''}">
      <span class="mmr-rank">${m.rank}</span>
      <span class="mmr-name">${m.hq ? '&#9733; ' : ''}${m.name}</span>
      <span class="mmr-pop">${m.pop.toLocaleString()}</span>
      <span class="mmr-tier">${m.tier}</span>
      <span class="mmr-status">${m.selected ? '&#10003;' : '&#8212;'}</span>
    </div>`
  ).join('');
}

document.addEventListener('DOMContentLoaded', function() {
  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildMobileMatrix();
  buildNotUsed();
  buildOpportunities();
  buildMobileMarketList();
});
