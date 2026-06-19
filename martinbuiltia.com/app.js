// ============================================================
// SEO Strategy Website — App.js
// Client: Martin Built Homes | martinbuiltia.com
// Plan Level: A | 20 Keyword-City Combinations
// HQ: Cedar Rapids, IA
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================

const STRATEGY = {
  client_name: "Martin Built Homes",
  industry: "Home Construction",
  hq_city: "Cedar Rapids",
  state: "IA",
  service_area: "Iowa Corridor (Linn & Johnson Counties)",
  plan_level: "Level A",
  plan_price: 600,
  total_combinations: 20,
  total_keywords_researched: 224,

  // ---- KEYWORD TABLE DATA ----
  keyword_table: [
    // Custom Home Builder family
    { keyword: "custom home builder",           monthly_searches: 14800, tier: "Tier 1", status: "selected", family: "custom home builder",   variant_type: "base"    },
    { keyword: "custom home builders",          monthly_searches: 12100, tier: "Tier 1", status: "not_used", family: "custom home builder",   variant_type: "plural"  },
    { keyword: "custom home builder near me",   monthly_searches:  4400, tier: "Tier 1", status: "near_me",  family: "custom home builder",   variant_type: "near_me" },
    { keyword: "custom home building",          monthly_searches:  2900, tier: "Tier 1", status: "not_used", family: "custom home builder",   variant_type: "variant" },
    { keyword: "custom home construction",      monthly_searches:  1600, tier: "Tier 1", status: "not_used", family: "custom home builder",   variant_type: "variant" },

    // New Construction Homes family
    { keyword: "new construction homes",        monthly_searches: 18100, tier: "Tier 1", status: "selected", family: "new construction homes", variant_type: "base"   },
    { keyword: "new construction homes near me",monthly_searches: 18100, tier: "Tier 1", status: "near_me",  family: "new construction homes", variant_type: "near_me"},
    { keyword: "new construction homes for sale",monthly_searches:40500, tier: "Tier 1", status: "not_used", family: "new construction homes", variant_type: "variant"},
    { keyword: "new home builder",              monthly_searches:  5400, tier: "Tier 1", status: "not_used", family: "new construction homes", variant_type: "variant"},
    { keyword: "new home builders",             monthly_searches:  6600, tier: "Tier 1", status: "not_used", family: "new construction homes", variant_type: "plural" },
    { keyword: "new home construction",         monthly_searches:  9900, tier: "Tier 1", status: "not_used", family: "new construction homes", variant_type: "variant"},
    { keyword: "new home construction near me", monthly_searches: 18100, tier: "Tier 1", status: "near_me",  family: "new construction homes", variant_type: "near_me"},

    // Home Builder family
    { keyword: "home builder",                  monthly_searches: 12100, tier: "Tier 1", status: "not_used", family: "home builder",          variant_type: "base"    },
    { keyword: "home builders near me",         monthly_searches: 22200, tier: "Tier 1", status: "near_me",  family: "home builder",          variant_type: "near_me" },
    { keyword: "home builder near me",          monthly_searches:  5400, tier: "Tier 1", status: "near_me",  family: "home builder",          variant_type: "near_me" },
    { keyword: "home building companies",       monthly_searches:  1900, tier: "Tier 1", status: "not_used", family: "home builder",          variant_type: "variant" },

    // Home Remodeling Contractor family
    { keyword: "home remodeling contractor",    monthly_searches:  6600, tier: "Tier 2", status: "selected", family: "home remodeling",       variant_type: "base"    },
    { keyword: "home remodeling contractors",   monthly_searches:  6600, tier: "Tier 2", status: "not_used", family: "home remodeling",       variant_type: "plural"  },
    { keyword: "home remodeling near me",       monthly_searches: 22200, tier: "Tier 2", status: "near_me",  family: "home remodeling",       variant_type: "near_me" },
    { keyword: "home remodeling company",       monthly_searches:  3600, tier: "Tier 2", status: "not_used", family: "home remodeling",       variant_type: "variant" },
    { keyword: "home remodeling companies",     monthly_searches:  3600, tier: "Tier 2", status: "not_used", family: "home remodeling",       variant_type: "variant" },
    { keyword: "home remodel contractor",       monthly_searches:  2400, tier: "Tier 2", status: "not_used", family: "home remodeling",       variant_type: "variant" },
    { keyword: "home remodel near me",          monthly_searches:  1900, tier: "Tier 2", status: "near_me",  family: "home remodeling",       variant_type: "near_me" },

    // Home Renovation family
    { keyword: "home renovation",               monthly_searches: 14800, tier: "Tier 2", status: "selected", family: "home renovation",       variant_type: "base"    },
    { keyword: "home renovation contractors",   monthly_searches:  6600, tier: "Tier 2", status: "not_used", family: "home renovation",       variant_type: "plural"  },
    { keyword: "home renovation near me",       monthly_searches:  2400, tier: "Tier 2", status: "near_me",  family: "home renovation",       variant_type: "near_me" },
    { keyword: "home renovation contractor",    monthly_searches:  2400, tier: "Tier 2", status: "not_used", family: "home renovation",       variant_type: "variant" },
    { keyword: "home renovation company",       monthly_searches:  2400, tier: "Tier 2", status: "not_used", family: "home renovation",       variant_type: "variant" },
    { keyword: "renovation contractor",         monthly_searches:  1900, tier: "Tier 2", status: "not_used", family: "home renovation",       variant_type: "variant" },

    // Commercial Construction family
    { keyword: "commercial construction",       monthly_searches:  8100, tier: "Tier 3", status: "selected", family: "commercial construction", variant_type: "base"  },
    { keyword: "commercial construction company",monthly_searches: 2900, tier: "Tier 3", status: "not_used", family: "commercial construction", variant_type: "variant"},
    { keyword: "commercial construction companies",monthly_searches:3600,tier: "Tier 3", status: "not_used", family: "commercial construction", variant_type: "plural" },
    { keyword: "commercial construction near me",monthly_searches: 1300, tier: "Tier 3", status: "near_me",  family: "commercial construction", variant_type: "near_me"},
    { keyword: "commercial construction contractor",monthly_searches:1600,tier: "Tier 3", status: "not_used", family: "commercial construction", variant_type: "variant"},
    { keyword: "commercial builder",            monthly_searches:  1000, tier: "Tier 3", status: "not_used", family: "commercial construction", variant_type: "variant"},

    // General Contractor family
    { keyword: "general contractor",            monthly_searches: 40500, tier: "Tier 1", status: "selected", family: "general contractor",    variant_type: "base"    },
    { keyword: "general contractor near me",    monthly_searches: 18100, tier: "Tier 1", status: "near_me",  family: "general contractor",    variant_type: "near_me" },
    { keyword: "general contractors",           monthly_searches: 12100, tier: "Tier 1", status: "not_used", family: "general contractor",    variant_type: "plural"  },
    { keyword: "construction companies near me",monthly_searches: 27100, tier: "Tier 1", status: "near_me",  family: "general contractor",    variant_type: "near_me" },
    { keyword: "construction company near me",  monthly_searches:  9900, tier: "Tier 1", status: "near_me",  family: "general contractor",    variant_type: "near_me" },

    // Floor Plans family
    { keyword: "floor plans",                   monthly_searches: 22200, tier: "Tier 4", status: "selected", family: "floor plans",           variant_type: "base"    },
    { keyword: "floor plan designer",           monthly_searches:  2400, tier: "Tier 4", status: "not_used", family: "floor plans",           variant_type: "variant" },
    { keyword: "custom floor plans",            monthly_searches:   720, tier: "Tier 4", status: "not_used", family: "floor plans",           variant_type: "variant" },
    { keyword: "floor plan design",             monthly_searches:  1300, tier: "Tier 4", status: "not_used", family: "floor plans",           variant_type: "variant" },

    // Residential Construction family
    { keyword: "residential construction",      monthly_searches:  5400, tier: "Tier 3", status: "not_used", family: "residential construction", variant_type: "base" },
    { keyword: "residential construction company",monthly_searches: 720, tier: "Tier 3", status: "not_used", family: "residential construction", variant_type: "variant"},
    { keyword: "residential construction companies",monthly_searches:1000,tier:"Tier 3", status: "not_used", family: "residential construction", variant_type: "plural"},
    { keyword: "residential builder",           monthly_searches:   210, tier: "Tier 3", status: "not_used", family: "residential construction", variant_type: "variant"},

    // Tenant Improvement family
    { keyword: "tenant improvement contractor", monthly_searches:   590, tier: "Tier 3", status: "not_used", family: "tenant improvement",    variant_type: "base"    },
    { keyword: "tenant improvement contractors",monthly_searches:   590, tier: "Tier 3", status: "not_used", family: "tenant improvement",    variant_type: "plural"  },

    // Multi-Family family
    { keyword: "multi-family construction",     monthly_searches:   320, tier: "Tier 3", status: "not_used", family: "multi-family",          variant_type: "base"    },
    { keyword: "multi-family builder",          monthly_searches:   110, tier: "Tier 3", status: "not_used", family: "multi-family",          variant_type: "variant" },
  ],

  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Custom Home Building",
      description: "The highest-volume, highest-intent keywords for Martin Built Homes' primary service offering. These terms capture prospective clients who are actively ready to hire a custom home builder. Deploying these keywords across the top markets is the single highest-impact action in this strategy.",
      keywords: [
        { keyword: "general contractor",       monthly_searches: 40500 },
        { keyword: "new construction homes",   monthly_searches: 18100 },
        { keyword: "custom home builder",      monthly_searches: 14800 },
        { keyword: "home builder",             monthly_searches: 12100 },
        { keyword: "new home construction",    monthly_searches:  9900 },
        { keyword: "new home builders",        monthly_searches:  6600 },
        { keyword: "new home builder",         monthly_searches:  5400 },
        { keyword: "home building companies",  monthly_searches:  1900 },
        { keyword: "custom home building",     monthly_searches:  2900 },
        { keyword: "custom home construction", monthly_searches:  1600 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Renovation and Remodeling",
      description: "Home renovation and remodeling represent a massive secondary market with strong commercial intent. These keywords target homeowners ready to invest significantly in their current property. The high CPC values (averaging $10+) confirm that competitors are paying heavily for this traffic, making organic placement especially valuable.",
      keywords: [
        { keyword: "home renovation",              monthly_searches: 14800 },
        { keyword: "home remodeling contractor",   monthly_searches:  6600 },
        { keyword: "home renovation contractors",  monthly_searches:  6600 },
        { keyword: "home remodeling company",      monthly_searches:  3600 },
        { keyword: "home renovation contractor",   monthly_searches:  2400 },
        { keyword: "home remodel contractor",      monthly_searches:  2400 },
        { keyword: "renovation contractor",        monthly_searches:  1900 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Commercial and Specialized Services",
      description: "These keywords capture Martin Built Homes' commercial construction, tenant improvement, and multi-family building capabilities. While lower in volume than residential terms, these keywords attract high-value commercial clients and diversify the lead pipeline beyond residential projects.",
      keywords: [
        { keyword: "commercial construction",           monthly_searches: 8100 },
        { keyword: "commercial construction companies", monthly_searches: 3600 },
        { keyword: "commercial construction company",   monthly_searches: 2900 },
        { keyword: "residential construction",          monthly_searches: 5400 },
        { keyword: "tenant improvement contractor",     monthly_searches:  590 },
        { keyword: "multi-family construction",         monthly_searches:  320 },
      ]
    },
    {
      tier_label: "Tier 4",
      tier_name: "Home Design and Floor Plans",
      description: "Design-focused keywords that capture prospective clients in the early planning stages of a new home build. These terms are particularly effective for positioning Martin Built Homes as a full-service partner from design through construction, differentiating the business from competitors who only build.",
      keywords: [
        { keyword: "floor plans",        monthly_searches: 22200 },
        { keyword: "floor plan designer",monthly_searches:  2400 },
        { keyword: "floor plan design",  monthly_searches:  1300 },
        { keyword: "custom floor plans", monthly_searches:   720 },
      ]
    }
  ],

  // ---- STRATEGY MATRIX (variable per-city keyword assignments, total = 20) ----
  matrix: [
    {
      city: "Cedar Rapids", state: "IA", tier: "Tier 1", population: 137727, is_hq: true,
      keywords: [
        "custom home builder",
        "new construction homes",
        "home remodeling contractor",
        "home renovation",
        "commercial construction",
        "general contractor"
      ]
    },
    {
      city: "Iowa City", state: "IA", tier: "Tier 1", population: 76537, is_hq: false,
      keywords: [
        "custom home builder",
        "new construction homes",
        "home remodeling contractor",
        "home renovation",
        "commercial construction"
      ]
    },
    {
      city: "Marion", state: "IA", tier: "Tier 1", population: 42927, is_hq: false,
      keywords: [
        "custom home builder",
        "new construction homes",
        "general contractor"
      ]
    },
    {
      city: "Coralville", state: "IA", tier: "Tier 2", population: 24322, is_hq: false,
      keywords: [
        "new construction homes",
        "floor plans"
      ]
    },
    {
      city: "Hiawatha", state: "IA", tier: "Tier 3", population: 7465, is_hq: false,
      keywords: [
        "custom home builder"
      ]
    },
    {
      city: "Mount Vernon", state: "IA", tier: "Tier 3", population: 4502, is_hq: false,
      keywords: [
        "custom home builder"
      ]
    }
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Exceeds Current Plan Capacity",
      description: "These high-value keywords were identified and validated but could not be included within the 20-combination limit of the Level A plan. They are the first candidates for inclusion upon upgrading to Level B or higher.",
      keywords: [
        { keyword: "new home construction",          monthly_searches: 9900 },
        { keyword: "new home builders",              monthly_searches: 6600 },
        { keyword: "home renovation contractors",    monthly_searches: 6600 },
        { keyword: "new home builder",               monthly_searches: 5400 },
        { keyword: "residential construction",       monthly_searches: 5400 },
        { keyword: "commercial construction companies", monthly_searches: 3600 },
        { keyword: "home remodeling company",        monthly_searches: 3600 },
        { keyword: "renovation contractor",          monthly_searches: 1900 },
        { keyword: "home building companies",        monthly_searches: 1900 },
        { keyword: "commercial construction contractor", monthly_searches: 1600 },
        { keyword: "custom home construction",       monthly_searches: 1600 },
        { keyword: "floor plan designer",            monthly_searches: 2400 },
      ]
    },
    {
      reason: "Real Estate Aggregator Terms: Dominated by Listing Platforms",
      description: "While Martin Built Homes does offer homes for sale, terms like 'homes for sale' and 'houses for sale' are overwhelmingly dominated by national real estate aggregators such as Zillow, Realtor.com, and Redfin. These platforms have insurmountable domain authority for these terms, making organic placement impractical for a local builder.",
      keywords: [
        { keyword: "homes for sale",                 monthly_searches: 450000 },
        { keyword: "houses for sale",                monthly_searches: 368000 },
        { keyword: "new homes for sale",             monthly_searches: 60500  },
        { keyword: "new construction homes for sale",monthly_searches: 40500  },
        { keyword: "new houses for sale",            monthly_searches: 3600   },
      ]
    },
    {
      reason: "Informational and Low-Intent Terms",
      description: "These terms indicate users in the early research phase rather than users ready to hire. They carry low conversion potential for a construction company and would attract traffic that is unlikely to result in a project inquiry.",
      keywords: [
        { keyword: "home building cost",             monthly_searches: 480 },
        { keyword: "new home construction cost",     monthly_searches: 320 },
        { keyword: "home renovation cost",           monthly_searches: 880 },
        { keyword: "renovation cost",                monthly_searches: 260 },
        { keyword: "home builder cost",              monthly_searches: 390 },
      ]
    },
    {
      reason: "Specialized Services: Reserved for Targeted Expansion",
      description: "Tenant improvement, multi-family construction, and spec home keywords represent distinct service verticals. These are best introduced in a dedicated expansion tier where they can receive proper, focused content and coverage.",
      keywords: [
        { keyword: "tenant improvement contractor",  monthly_searches: 590 },
        { keyword: "tenant improvement contractors", monthly_searches: 590 },
        { keyword: "multi-family construction",      monthly_searches: 320 },
        { keyword: "spec homes",                     monthly_searches: 1900 },
        { keyword: "move in ready homes",            monthly_searches: 2900 },
        { keyword: "spec home builder",              monthly_searches: 590  },
      ]
    }
  ],

  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Level B",
      combinations: 30,
      price: 900,
      additional_combinations: 10,
      headline: "Expand Commercial Coverage and Add North Liberty",
      description: "Upgrading to Level B adds 10 additional keyword-city combinations, allowing Martin Built Homes to introduce dedicated commercial construction coverage in Marion and Coralville, and to add North Liberty (pop. 22,276) as a new target market. North Liberty is one of the fastest-growing communities in the Iowa Corridor and represents a strong opportunity for new home construction leads.",
      keywords: [
        { keyword: "commercial construction",        monthly_searches: 8100 },
        { keyword: "general contractor",             monthly_searches: 40500 },
        { keyword: "North Liberty, IA", monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level C",
      combinations: 40,
      price: 1200,
      additional_combinations: 20,
      headline: "Introduce Renovation, Tenant Improvement, and Spec Home Keywords",
      description: "Level C opens the door to a full renovation and remodeling keyword suite deployed across all Tier 1 and Tier 2 markets. It also introduces dedicated coverage for tenant improvement and spec home keywords, directly supporting the service lines not yet represented on the Martin Built Homes website.",
      keywords: [
        { keyword: "home renovation contractor",     monthly_searches: 2400 },
        { keyword: "tenant improvement contractor",  monthly_searches: 590  },
        { keyword: "spec home builder",              monthly_searches: 590  },
        { keyword: "move in ready homes",            monthly_searches: 2900 },
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
  if (status === 'near_me') return `<span class="status-badge status-near-me" title="${note || ''}">Near Me Variant</span>`;
  return '<span class="status-badge status-not-used">Not Used</span>';
}

function tierPill(label) {
  if (!label) return '<span style="color:#999;font-size:0.8rem;">-</span>';
  const cls = label === 'Tier 1' ? 't1' : label === 'Tier 2' ? 't2' : label === 'Tier 3' ? 't3' : 't4';
  return `<span class="tier-pill ${cls}">${label.toUpperCase()}</span>`;
}

// ============================================================
// POPULATE KEYWORD TABLE
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

// ============================================================
// POPULATE KEYWORD TIER CARDS
// ============================================================
function buildKeywordTierCards() {
  const grid = document.getElementById('kw-tier-grid');
  if (!grid) return;
  const tierColors = ['kw-tier-1', 'kw-tier-2', 'kw-tier-3', 'kw-tier-4'];
  const blocks = STRATEGY.keyword_tiers.map((tier, i) => {
    const kwRows = tier.keywords.map(kw =>
      `<tr>
        <td class="flat-kw-name">${kw.keyword}</td>
        <td class="flat-kw-vol">${fmt(kw.monthly_searches)}</td>
      </tr>`
    ).join('');
    const colorCls = tierColors[i] || 'kw-tier-1';
    return `<div class="flat-tier-block ${colorCls}">
      <div class="flat-tier-heading">
        <span class="tier-pill ${colorCls.replace('kw-tier-','t')}">${tier.tier_label}</span>
        <span class="flat-tier-name">${tier.tier_name}</span>
        <span class="flat-tier-count">${tier.keywords.length} keyword${tier.keywords.length !== 1 ? 's' : ''} researched</span>
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
// POPULATE MATRIX
// ============================================================
function buildMatrix() {
  const el = document.getElementById('matrix-city-grid');
  if (!el) return;
  let cards = '';
  let grandTotal = 0;

  STRATEGY.matrix.forEach(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const cityLabel = m.city + (m.state ? ', ' + m.state : '');
    const hqStar = m.is_hq ? '<span class="city-card-hq">&#9733;</span>' : '';
    const kwItems = m.keywords.map(kw =>
      `<div class="city-kw-item"><span class="city-kw-check">&#10003;</span><span class="city-kw-name">${kw}</span></div>`
    ).join('');
    grandTotal += m.keywords.length;
    cards += `<div class="city-matrix-card">
      <div class="city-matrix-header">
        ${hqStar}<span class="city-matrix-name">${cityLabel}</span>
        <span class="city-matrix-meta"><span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span> Pop. ${fmt(m.population)}</span>
      </div>
      <div class="city-kw-list">${kwItems}</div>
      <div class="city-matrix-footer">${m.keywords.length} combination${m.keywords.length !== 1 ? 's' : ''}</div>
    </div>`;
  });

  el.innerHTML = cards;

  const gt = document.getElementById('matrix-grand-total');
  if (gt) {
    gt.className = 'matrix-grand-total';
    gt.textContent = 'Grand Total: ' + grandTotal + ' Combinations';
  }

  // Mobile matrix
  const mob = document.getElementById('mobile-matrix');
  if (mob) {
    let mobHtml = '';
    STRATEGY.matrix.forEach(m => {
      const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
      const cityLabel = m.city + (m.state ? ', ' + m.state : '');
      const hqStar = m.is_hq ? ' &#9733;' : '';
      const kwList = m.keywords.map(kw => `<li>${kw}</li>`).join('');
      mobHtml += `<div class="mobile-city-block">
        <div class="mobile-city-header">
          <span class="mobile-city-name">${cityLabel}${hqStar}</span>
          <span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span>
        </div>
        <ul class="mobile-kw-list">${kwList}</ul>
        <div class="mobile-city-count">${m.keywords.length} combination${m.keywords.length !== 1 ? 's' : ''}</div>
      </div>`;
    });
    mob.innerHTML = mobHtml;
  }
}

// ============================================================
// POPULATE NOT USED SECTION
// ============================================================
function buildNotUsed() {
  const grid = document.getElementById('not-used-grid');
  if (!grid) return;
  const cards = STRATEGY.not_used_groups.map(group => {
    const kwRows = group.keywords.map(kw =>
      `<div class="not-used-kw-row">
        <span class="not-used-kw-name">${kw.keyword}</span>
        <span class="not-used-kw-vol">${fmt(kw.monthly_searches)}/mo</span>
      </div>`
    ).join('');
    return `<div class="not-used-card">
      <div class="not-used-reason">${group.reason}</div>
      <p class="not-used-desc">${group.description}</p>
      <div class="not-used-kw-list">${kwRows}</div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// POPULATE ADDITIONAL OPPORTUNITIES
// ============================================================
function buildOpportunities() {
  const grid = document.getElementById('opportunities-grid');
  if (!grid) return;
  const cards = STRATEGY.additional_opportunities.map((opp, i) => {
    const isRecommended = i === 0;
    const badge = isRecommended ? '<span class="opp-recommended-badge">RECOMMENDED NEXT STEP</span>' : '';
    let itemsHtml = '';
    if (opp.keywords) {
      itemsHtml = opp.keywords.map(kw => {
        if (kw.new_market) {
          return `<div class="opp-kw-row opp-new-market">
            <span class="opp-kw-icon">&#127968;</span>
            <span class="opp-kw-name">${kw.keyword}</span>
            <span class="opp-kw-tag">New Market</span>
          </div>`;
        }
        return `<div class="opp-kw-row">
          <span class="opp-kw-icon">&#128269;</span>
          <span class="opp-kw-name">${kw.keyword}</span>
          <span class="opp-kw-vol">${fmt(kw.monthly_searches)}/mo</span>
        </div>`;
      }).join('');
    } else if (opp.markets) {
      itemsHtml = opp.markets.map(m => {
        const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
        return `<div class="opp-kw-row opp-new-market">
          <span class="opp-kw-icon">&#127968;</span>
          <span class="opp-kw-name">${m.city}</span>
          <span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span>
          <span class="opp-kw-vol">Pop. ${fmt(m.population)}</span>
        </div>`;
      }).join('');
    }
    return `<div class="opp-card${isRecommended ? ' opp-card-recommended' : ''}">
      ${badge}
      <div class="opp-plan-label">${opp.plan}</div>
      <div class="opp-combos">${opp.combinations} Total Combinations</div>
      <div class="opp-price">$${opp.price.toLocaleString()}/mo</div>
      <div class="opp-additional">+${opp.additional_combinations} additional combinations</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <div class="opp-kw-items">${itemsHtml}</div>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// MOBILE MARKET LIST
// ============================================================
function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const markets = [
    { rank: 1, city: "Cedar Rapids", pop: 137727, tier: "Tier 1", selected: true, is_hq: true },
    { rank: 2, city: "Iowa City",    pop:  76537, tier: "Tier 1", selected: true, is_hq: false },
    { rank: 3, city: "Marion",       pop:  42927, tier: "Tier 1", selected: true, is_hq: false },
    { rank: 4, city: "Coralville",   pop:  24322, tier: "Tier 2", selected: true, is_hq: false },
    { rank: 5, city: "North Liberty",pop:  22276, tier: "Tier 2", selected: false,is_hq: false },
    { rank: 6, city: "Hiawatha",     pop:   7465, tier: "Tier 3", selected: true, is_hq: false },
    { rank: 7, city: "Mount Vernon", pop:   4502, tier: "Tier 3", selected: true, is_hq: false },
    { rank: 8, city: "Robins",       pop:   3360, tier: "Tier 3", selected: false,is_hq: false },
    { rank: 9, city: "Fairfax",      pop:   2942, tier: "Tier 3", selected: false,is_hq: false },
  ];
  const rows = markets.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const hqNote = m.is_hq ? ' (HQ)' : '';
    const selMark = m.selected ? '<span class="mobile-check">&#10003;</span>' : '<span class="mobile-dash">-</span>';
    return `<div class="mobile-market-row${m.selected ? ' mobile-market-selected' : ''}">
      <div class="mobile-market-left">
        ${selMark}
        <span class="mobile-market-name">${m.city}${hqNote}</span>
      </div>
      <div class="mobile-market-right">
        <span class="mobile-market-pop">${fmt(m.pop)}</span>
        <span class="tier-pill ${tierCls}">${m.tier.toUpperCase()}</span>
      </div>
    </div>`;
  }).join('');
  el.innerHTML = rows;
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
});
