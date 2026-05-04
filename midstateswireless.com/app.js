// ============================================================
// SEO Strategy Website — App.js
// Mid States Wireless | Plan Level B | 30 Combinations
// Loads strategy data and populates all dynamic sections
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================
const STRATEGY = {
  client_name: "Mid States Wireless",
  industry: "Telecommunications, IT & Security Solutions",
  hq_city: "Fargo",
  state: "ND",
  service_area: "Fargo, Bismarck, Grand Forks, Minot, Moorhead, Duluth, and surrounding areas across North Dakota and Minnesota",
  plan_level: "Level B",
  plan_price: 900,
  total_combinations: 30,
  total_keywords_researched: 978,
  selected_keywords: [
    "two way radio",
    "security camera system",
    "managed it services",
    "access control system",
    "vehicle upfitting"
  ],
  // ---- KEYWORD TABLE ----
  keyword_table: [
    // Two Way Radio family
    { keyword: "two way radio",                     monthly_searches:  6600, tier: "Tier 1", status: "selected",  family: "two way radio",          variant_type: "base"    },
    { keyword: "two way radios",                    monthly_searches:  6600, tier: "Tier 1", status: "not_used",  family: "two way radio",          variant_type: "plural"  },
    { keyword: "2 way radio",                       monthly_searches:  3600, tier: "Tier 1", status: "not_used",  family: "two way radio",          variant_type: "variant" },
    { keyword: "motorola two way radio",            monthly_searches:  1300, tier: "Tier 1", status: "not_used",  family: "two way radio",          variant_type: "variant" },
    { keyword: "long range two way radios",         monthly_searches:  1600, tier: "Tier 1", status: "not_used",  family: "two way radio",          variant_type: "variant" },
    { keyword: "business two way radio",            monthly_searches:   720, tier: "Tier 1", status: "not_used",  family: "two way radio",          variant_type: "variant" },
    { keyword: "two way radio near me",             monthly_searches:   590, tier: "Tier 1", status: "near_me",   family: "two way radio",          variant_type: "near_me", near_me_note: "Treated as equivalent to 'two way radio [city]' in the final matrix" },
    // Motorola Radio family
    { keyword: "motorola radios",                   monthly_searches:  6600, tier: "Tier 1", status: "not_used",  family: "motorola radio",         variant_type: "plural"  },
    { keyword: "motorola radio",                    monthly_searches:  5400, tier: "Tier 1", status: "not_used",  family: "motorola radio",         variant_type: "base"    },
    { keyword: "motorola radio models",             monthly_searches:   720, tier: "Tier 1", status: "not_used",  family: "motorola radio",         variant_type: "variant" },
    { keyword: "motorola radio communication",      monthly_searches:   320, tier: "Tier 1", status: "not_used",  family: "motorola radio",         variant_type: "variant" },
    // Push to Talk family
    { keyword: "push to talk",                      monthly_searches:  1600, tier: "Tier 1", status: "not_used",  family: "push to talk",           variant_type: "base"    },
    { keyword: "push to talk cell phones",          monthly_searches:   170, tier: "Tier 1", status: "not_used",  family: "push to talk",           variant_type: "variant" },
    // Radio Systems family
    { keyword: "radio communication",               monthly_searches:  1300, tier: "Tier 1", status: "not_used",  family: "radio systems",          variant_type: "base"    },
    { keyword: "p25 radio",                         monthly_searches:  1300, tier: "Tier 1", status: "not_used",  family: "radio systems",          variant_type: "variant" },
    { keyword: "radio communication systems",       monthly_searches:   320, tier: "Tier 1", status: "not_used",  family: "radio systems",          variant_type: "variant" },
    // Security Camera family
    { keyword: "security camera system",            monthly_searches: 22200, tier: "Tier 2", status: "selected",  family: "security cameras",       variant_type: "base"    },
    { keyword: "security cameras",                  monthly_searches: 60500, tier: "Tier 2", status: "not_used",  family: "security cameras",       variant_type: "plural"  },
    { keyword: "security camera",                   monthly_searches: 22200, tier: "Tier 2", status: "not_used",  family: "security cameras",       variant_type: "variant" },
    { keyword: "wireless security cameras",         monthly_searches: 22200, tier: "Tier 2", status: "not_used",  family: "security cameras",       variant_type: "variant" },
    { keyword: "commercial security cameras",       monthly_searches:  1600, tier: "Tier 2", status: "not_used",  family: "security cameras",       variant_type: "variant" },
    { keyword: "cctv installation",                 monthly_searches:  1300, tier: "Tier 2", status: "not_used",  family: "security cameras",       variant_type: "variant" },
    { keyword: "ip camera system",                  monthly_searches:   880, tier: "Tier 2", status: "not_used",  family: "security cameras",       variant_type: "variant" },
    { keyword: "security camera installation",      monthly_searches:   720, tier: "Tier 2", status: "not_used",  family: "security cameras",       variant_type: "variant" },
    // Managed IT family
    { keyword: "managed it services",               monthly_searches: 27100, tier: "Tier 2", status: "selected",  family: "managed it",             variant_type: "base"    },
    { keyword: "it services",                       monthly_searches: 27100, tier: "Tier 2", status: "not_used",  family: "managed it",             variant_type: "variant" },
    { keyword: "it support",                        monthly_searches: 40500, tier: "Tier 2", status: "not_used",  family: "managed it",             variant_type: "variant" },
    { keyword: "managed service provider",          monthly_searches:  9900, tier: "Tier 2", status: "not_used",  family: "managed it",             variant_type: "variant" },
    { keyword: "managed it services near me",       monthly_searches:  2400, tier: "Tier 2", status: "near_me",   family: "managed it",             variant_type: "near_me", near_me_note: "Treated as equivalent to 'managed it services [city]' in the final matrix" },
    { keyword: "it consulting",                     monthly_searches: 22200, tier: "Tier 2", status: "not_used",  family: "managed it",             variant_type: "variant" },
    // Access Control family
    { keyword: "access control system",             monthly_searches:  8100, tier: "Tier 2", status: "selected",  family: "access control",         variant_type: "base"    },
    { keyword: "access control",                    monthly_searches: 14800, tier: "Tier 2", status: "not_used",  family: "access control",         variant_type: "short_form" },
    { keyword: "access control systems",            monthly_searches:  8100, tier: "Tier 2", status: "not_used",  family: "access control",         variant_type: "plural"  },
    { keyword: "commercial access control",         monthly_searches:  1300, tier: "Tier 2", status: "not_used",  family: "access control",         variant_type: "variant" },
    { keyword: "door access control systems",       monthly_searches:  1600, tier: "Tier 2", status: "not_used",  family: "access control",         variant_type: "variant" },
    { keyword: "access control solutions",          monthly_searches:  2400, tier: "Tier 2", status: "not_used",  family: "access control",         variant_type: "variant" },
    // Vehicle Upfitting family
    { keyword: "vehicle upfitting",                 monthly_searches:  1000, tier: "Tier 3", status: "selected",  family: "fleet upfitting",        variant_type: "base"    },
    { keyword: "fleet upfitting",                   monthly_searches:   480, tier: "Tier 3", status: "not_used",  family: "fleet upfitting",        variant_type: "variant" },
    { keyword: "custom vehicle upfitters",          monthly_searches:   320, tier: "Tier 3", status: "not_used",  family: "fleet upfitting",        variant_type: "variant" },
    { keyword: "vehicle upfitters",                 monthly_searches:   260, tier: "Tier 3", status: "not_used",  family: "fleet upfitting",        variant_type: "variant" },
    { keyword: "fleet vehicle upfitting",           monthly_searches:   170, tier: "Tier 3", status: "not_used",  family: "fleet upfitting",        variant_type: "variant" },
    { keyword: "commercial vehicle upfitting",      monthly_searches:   140, tier: "Tier 3", status: "not_used",  family: "fleet upfitting",        variant_type: "variant" },
    { keyword: "vehicle upfitting services",        monthly_searches:   110, tier: "Tier 3", status: "not_used",  family: "fleet upfitting",        variant_type: "variant" },
    // Warning Sirens family
    { keyword: "tornado siren",                     monthly_searches: 14800, tier: null,     status: "not_used",  family: "warning sirens",         variant_type: "base"    },
    { keyword: "tornado sirens",                    monthly_searches:  4400, tier: null,     status: "not_used",  family: "warning sirens",         variant_type: "plural"  },
    { keyword: "emergency warning siren",           monthly_searches:  1300, tier: null,     status: "not_used",  family: "warning sirens",         variant_type: "variant" },
    // Cybersecurity family
    { keyword: "cyber security services",           monthly_searches:  6600, tier: null,     status: "not_used",  family: "cybersecurity",          variant_type: "base"    },
    { keyword: "managed cybersecurity services",    monthly_searches:  2900, tier: null,     status: "not_used",  family: "cybersecurity",          variant_type: "variant" },
    { keyword: "information security",              monthly_searches:  6600, tier: null,     status: "not_used",  family: "cybersecurity",          variant_type: "variant" },
    // Data Backup family
    { keyword: "data backup and recovery",          monthly_searches:  3600, tier: null,     status: "not_used",  family: "data backup",            variant_type: "base"    },
    { keyword: "data recovery services",            monthly_searches:  6600, tier: null,     status: "not_used",  family: "data backup",            variant_type: "variant" },
    { keyword: "backup and disaster recovery",      monthly_searches:  1900, tier: null,     status: "not_used",  family: "data backup",            variant_type: "variant" },
    // Managed Security family
    { keyword: "managed security service provider", monthly_searches:  5400, tier: null,     status: "not_used",  family: "managed security",       variant_type: "base"    },
    { keyword: "managed security services",         monthly_searches:  1900, tier: null,     status: "not_used",  family: "managed security",       variant_type: "variant" },
    // Cell Booster family
    { keyword: "cell phone signal booster",         monthly_searches: 22200, tier: null,     status: "not_used",  family: "cell booster",           variant_type: "base"    },
    { keyword: "cell signal booster",               monthly_searches:  9900, tier: null,     status: "not_used",  family: "cell booster",           variant_type: "variant" },
    // BDA family
    { keyword: "bi-directional amplifier",          monthly_searches:   390, tier: null,     status: "not_used",  family: "bda system",             variant_type: "base"    },
    { keyword: "bda system",                        monthly_searches:  1600, tier: null,     status: "not_used",  family: "bda system",             variant_type: "variant" },
  ],
  // ---- KEYWORD TIERS ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Two Way Radio",
      description: "The anchor keyword for Mid States Wireless's core business. 'Two way radio' generates 6,600 national monthly searches and is the primary term used by businesses, public safety agencies, and industrial operations searching for radio communication solutions. Mid States Wireless has been a Motorola dealer since 1946, making this the most authoritative and differentiated keyword in the strategy. The Fargo HQ and Minot office position the company to dominate this search in both the North Dakota and Minnesota markets.",
      keywords: [
        { keyword: "two way radio",             monthly_searches: 6600 },
        { keyword: "two way radios",            monthly_searches: 6600 },
        { keyword: "2 way radio",               monthly_searches: 3600 },
        { keyword: "motorola two way radio",    monthly_searches: 1300 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Security Camera System",
      description: "Security camera systems represent one of Mid States Wireless's fastest-growing service lines, with 22,200 monthly searches nationally for 'security camera system.' Businesses across North Dakota and Minnesota are actively searching for commercial-grade video surveillance solutions. Mid States Wireless offers full installation, programming, and support, giving it a strong competitive advantage over national retailers who cannot provide local service and ongoing maintenance.",
      keywords: [
        { keyword: "security camera system",        monthly_searches: 22200 },
        { keyword: "wireless security cameras",     monthly_searches: 22200 },
        { keyword: "commercial security cameras",   monthly_searches:  1600 },
        { keyword: "cctv installation",             monthly_searches:  1300 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Managed IT Services",
      description: "Managed IT services is the highest-volume keyword in the strategy at 27,100 monthly searches nationally. Mid States Wireless provides full managed IT support, cybersecurity, and network management to businesses across the region. This keyword targets decision-makers at small and mid-size businesses who are actively searching for a local IT partner. The combination of IT services with the company's existing communication infrastructure expertise creates a compelling, differentiated offering.",
      keywords: [
        { keyword: "managed it services",           monthly_searches: 27100 },
        { keyword: "managed service provider",      monthly_searches:  9900 },
        { keyword: "managed it services near me",   monthly_searches:  2400 },
        { keyword: "it consulting",                 monthly_searches: 22200 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Access Control System",
      description: "Access control systems are a core physical security service offered by Mid States Wireless, with 8,100 monthly searches nationally for 'access control system' and 14,800 for the broader 'access control' term. Businesses searching for access control are typically in active buying mode, evaluating vendors for door entry systems, keycard access, and building security. Mid States Wireless's ability to integrate access control with its existing camera and communication infrastructure is a significant competitive differentiator.",
      keywords: [
        { keyword: "access control system",         monthly_searches:  8100 },
        { keyword: "access control",                monthly_searches: 14800 },
        { keyword: "access control solutions",      monthly_searches:  2400 },
        { keyword: "door access control systems",   monthly_searches:  1600 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Vehicle Upfitting",
      description: "Vehicle upfitting is a specialized service offered by Mid States Wireless for law enforcement, emergency services, and commercial fleet operators. With 1,000 monthly searches nationally for 'vehicle upfitting,' this keyword targets a high-value, low-competition audience that includes police departments, fire departments, and utility companies. Mid States Wireless's expertise in squad car builds and emergency vehicle equipment makes this a highly differentiated keyword with strong local intent.",
      keywords: [
        { keyword: "vehicle upfitting",             monthly_searches: 1000 },
        { keyword: "fleet upfitting",               monthly_searches:  480 },
        { keyword: "custom vehicle upfitters",      monthly_searches:  320 },
        { keyword: "fleet vehicle upfitting",       monthly_searches:  170 },
      ]
    }
  ],
  // ---- STRATEGY MATRIX (5 keywords x 6 cities = 30 combinations) ----
  matrix: [
    { city: "Fargo",       state: "ND", tier: "Tier 1", population: 130000, is_hq: true,  keywords: ["two way radio", "security camera system", "managed it services", "access control system", "vehicle upfitting"] },
    { city: "Bismarck",    state: "ND", tier: "Tier 1", population:  75000, is_hq: false, keywords: ["two way radio", "security camera system", "managed it services", "access control system", "vehicle upfitting"] },
    { city: "Duluth",      state: "MN", tier: "Tier 1", population:  90000, is_hq: false, keywords: ["two way radio", "security camera system", "managed it services", "access control system", "vehicle upfitting"] },
    { city: "Grand Forks", state: "ND", tier: "Tier 1", population:  59000, is_hq: false, keywords: ["two way radio", "security camera system", "managed it services", "access control system", "vehicle upfitting"] },
    { city: "Minot",       state: "ND", tier: "Tier 1", population:  50000, is_hq: false, keywords: ["two way radio", "security camera system", "managed it services", "access control system", "vehicle upfitting"] },
    { city: "Moorhead",    state: "MN", tier: "Tier 1", population:  45000, is_hq: false, keywords: ["two way radio", "security camera system", "managed it services", "access control system", "vehicle upfitting"] },
  ],
  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Warning Sirens: High Volume, Niche Audience",
      description: "Tornado siren and emergency warning siren keywords generate significant search volume (14,800 and 1,300 monthly searches respectively), but the audience is primarily residential and municipal rather than the commercial and industrial buyers that Mid States Wireless primarily serves. Warning siren installations are also a project-based service rather than a recurring revenue driver. These keywords are strong Level C expansion candidates once the core five service lines are established.",
      keywords: [
        { keyword: "tornado siren",             monthly_searches: 14800 },
        { keyword: "tornado sirens",            monthly_searches:  4400 },
        { keyword: "emergency warning siren",   monthly_searches:  1300 },
      ]
    },
    {
      reason: "Cybersecurity and Data Backup: Plan Expansion Candidates",
      description: "Cybersecurity services (6,600/mo) and data backup and recovery (3,600/mo) are legitimate service lines offered by Mid States Wireless, but they are best introduced at a higher plan level where dedicated pages can be built for each keyword-city combination. These terms are highly competitive nationally, and ranking for them requires a strong foundation of existing IT content. They are ideal Level C or Level D additions once the managed IT services pages are established.",
      keywords: [
        { keyword: "cyber security services",           monthly_searches: 6600 },
        { keyword: "managed cybersecurity services",    monthly_searches: 2900 },
        { keyword: "data backup and recovery",          monthly_searches: 3600 },
        { keyword: "data recovery services",            monthly_searches: 6600 },
        { keyword: "managed security service provider", monthly_searches: 5400 },
      ]
    },
    {
      reason: "Cell Booster and BDA Systems: Specialized B2B Keywords",
      description: "Cell phone signal booster (22,200/mo) and bi-directional amplifier systems are highly relevant to Mid States Wireless's portfolio, but they serve a narrow B2B audience: building owners, property managers, and facility engineers. The search volume for 'cell phone signal booster' is dominated by residential consumers searching for home boosters, not commercial BDA installations. 'Bi-directional amplifier' (390/mo) is the correct commercial term but has low volume. These are best addressed through targeted content pages rather than city-specific SEO pages.",
      keywords: [
        { keyword: "cell phone signal booster",   monthly_searches: 22200 },
        { keyword: "cell signal booster",         monthly_searches:  9900 },
        { keyword: "bi-directional amplifier",    monthly_searches:   390 },
        { keyword: "bda system",                  monthly_searches:  1600 },
      ]
    }
  ],
  // ---- ADDITIONAL OPPORTUNITIES ----
  additional_opportunities: [
    {
      plan: "Level C",
      combinations: 45,
      price: 1250,
      additional_combinations: 15,
      headline: "Add Warning Sirens and Expand into 3 New Markets",
      description: "Level C adds 15 keyword-city combinations across two strategic levers. First, it introduces warning siren installation as a sixth keyword, capturing municipal and commercial buyers searching for outdoor emergency notification systems. Second, it adds 3 new cities in Minnesota to deepen the cross-border coverage and reach the Rochester and Saint Cloud markets.",
      keywords: [
        { keyword: "warning siren installation",  monthly_searches: 1300 },
        { keyword: "Rochester, MN",               monthly_searches: null, new_market: true },
        { keyword: "Saint Cloud, MN",             monthly_searches: null, new_market: true },
        { keyword: "Mankato, MN",                 monthly_searches: null, new_market: true },
      ]
    },
    {
      plan: "Level D",
      combinations: 60,
      price: 1750,
      additional_combinations: 30,
      headline: "Add Cybersecurity Services and Full ND/MN Market Coverage",
      description: "Level D delivers 60 total combinations, enabling Mid States Wireless to achieve dominant visibility across its full North Dakota and Minnesota service region. This tier introduces cybersecurity services as a seventh keyword, targeting businesses actively searching for a local managed security partner. It also extends coverage to the full roster of Tier 2 markets across both states, including West Fargo and Mandan.",
      keywords: [
        { keyword: "cyber security services",     monthly_searches: 6600 },
        { keyword: "West Fargo, ND",              monthly_searches: null, new_market: true },
        { keyword: "Mandan, ND",                  monthly_searches: null, new_market: true },
        { keyword: "Brainerd, MN",                monthly_searches: null, new_market: true },
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
  if (!label) return '<span style="color:#999;font-size:0.8rem;">&#8212;</span>';
  const cls = label === 'Tier 1' ? 't1' : label === 'Tier 2' ? 't2' : label === 'Tier 3' ? 't3' : label === 'Tier 4' ? 't4' : 't5';
  return `<span class="tier-pill ${cls}">${label.toUpperCase()}</span>`;
}
// ============================================================
// POPULATE KEYWORD TABLE
// ============================================================
function buildKeywordTable() {
  const tbody = document.getElementById('kw-table-body');
  if (!tbody) return;
  const familyOrder = [];
  const seen = new Set();
  STRATEGY.keyword_table.forEach(kw => {
    if (!seen.has(kw.family)) { familyOrder.push(kw.family); seen.add(kw.family); }
  });
  const variantLabel = { variant: 'Variant', plural: 'Plural Variant', near_me: 'Near Me Variant', short_form: 'Short-Form Variant' };
  let html = '';
  familyOrder.forEach(fam => {
    const members = STRATEGY.keyword_table
      .filter(kw => kw.family === fam)
      .slice()
      .sort((a, b) => {
        const rankType = t => t === 'base' ? 0 : 1;
        if (rankType(a.variant_type) !== rankType(b.variant_type)) return rankType(a.variant_type) - rankType(b.variant_type);
        return b.monthly_searches - a.monthly_searches;
      });
    members.forEach((kw) => {
      const isBase = kw.variant_type === 'base';
      const isNearMe = kw.variant_type === 'near_me';
      const rowClass = isBase
        ? (kw.status === 'selected' ? 'row-base row-selected' : 'row-base')
        : (isNearMe ? 'row-variant row-near-me' : 'row-variant');
      const kwCell = isBase
        ? `<td>${kw.keyword}</td>`
        : `<td class="kw-variant-cell"><span class="kw-variant-indent">&#8627;</span>${kw.keyword} <span class="kw-variant-badge">${variantLabel[kw.variant_type] || 'Variant'}</span></td>`;
      const note = kw.near_me_note || '';
      html += `<tr class="${rowClass}">
        ${kwCell}
        <td class="num-col">${fmt(kw.monthly_searches)}</td>
        <td>${tierPill(kw.tier)}</td>
        <td>${statusBadge(kw.status, note)}</td>
      </tr>`;
    });
  });
  tbody.innerHTML = html;
}
// ============================================================
// POPULATE KEYWORD TIER CARDS (flat-tier-block pattern)
// ============================================================
function buildKeywordTierCards() {
  const grid = document.getElementById('kw-tier-grid');
  if (!grid) return;
  const tierColors = ['kw-tier-1', 'kw-tier-2', 'kw-tier-3', 'kw-tier-4', 'kw-tier-5'];
  const blocks = STRATEGY.keyword_tiers.map((tier, i) => {
    const kwRows = tier.keywords.map(kw =>
      `<tr>
        <td class="flat-kw-name">${kw.keyword}</td>
        <td class="flat-kw-vol">${fmt(kw.monthly_searches)}</td>
      </tr>`
    ).join('');
    const colorCls = tierColors[i] || 'kw-tier-1';
    const tierPillCls = colorCls.replace('kw-tier-', 't');
    return `<div class="flat-tier-block ${colorCls}">
      <div class="flat-tier-heading">
        <span class="tier-pill ${tierPillCls}">${tier.tier_label}</span>
        <span class="flat-tier-name">${tier.tier_name}</span>
        <span class="flat-tier-count">${tier.keywords.length} keywords researched</span>
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
// POPULATE STRATEGY MATRIX (city-matrix-card pattern)
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
  if (gt) gt.textContent = 'Grand Total: ' + grandTotal + ' Combinations';
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
    return `<div class="opp-card ${highlight}">
      <div class="opp-plan-label">${opp.plan}</div>
      ${opp.price ? `<div class="opp-price">$${fmt(opp.price)}<span class="opp-price-label">/mo</span></div>` : ''}
      <div class="opp-combos-large">${opp.combinations} <span class="opp-combos-label">total combinations</span></div>
      <div class="opp-combos">+${opp.additional_combinations} additional combinations from current plan</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <ul class="opp-kw-list"><li class="opp-kw-header"><span>Keyword / Market</span><span>Mo. Searches</span></li>${kwList}</ul>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}
// ============================================================
// POPULATE MOBILE MARKET LIST
// ============================================================
const MARKET_DATA = [
  { rank: 1,  city: 'Fargo',       state: 'ND', pop: 130000, tier: 'Tier 1', selected: true,  hq: true  },
  { rank: 2,  city: 'Duluth',      state: 'MN', pop:  90000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 3,  city: 'Bismarck',    state: 'ND', pop:  75000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 4,  city: 'Grand Forks', state: 'ND', pop:  59000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 5,  city: 'Minot',       state: 'ND', pop:  50000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 6,  city: 'Moorhead',    state: 'MN', pop:  45000, tier: 'Tier 1', selected: true,  hq: false },
  { rank: 7,  city: 'Rochester',   state: 'MN', pop: 125000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 8,  city: 'Saint Cloud', state: 'MN', pop:  70000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 9,  city: 'West Fargo',  state: 'ND', pop:  40000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 10, city: 'Mandan',      state: 'ND', pop:  23000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 11, city: 'Mankato',     state: 'MN', pop:  45000, tier: 'Tier 2', selected: false, hq: false },
  { rank: 12, city: 'Brainerd',    state: 'MN', pop:  14000, tier: 'Tier 2', selected: false, hq: false },
];
function buildMobileMarketList() {
  const el = document.getElementById('mobile-market-list');
  if (!el) return;
  const rows = MARKET_DATA.map(m => {
    const tierCls = m.tier === 'Tier 1' ? 't1' : m.tier === 'Tier 2' ? 't2' : 't3';
    const selIcon = m.retired
      ? '<span class="mob-retired">Retired</span>'
      : m.selected ? '<span class="mob-check">&#10003;</span>' : '<span class="mob-dash">&#8212;</span>';
    const cityLabel = m.hq ? `${m.city}, ${m.state} <span class="hq-tag">HQ</span>` : `${m.city}, ${m.state}`;
    const popStr = m.pop ? fmt(m.pop) : '';
    const rowCls = m.retired ? 'mob-mkt-row retired' : m.selected ? 'mob-mkt-row selected' : 'mob-mkt-row';
    return `<div class="${rowCls}">
      <span class="mob-rank">${m.rank}</span>
      <span class="mob-city">${m.selected ? '<strong>' : ''}${cityLabel}${m.selected ? '</strong>' : ''}</span>
      <span class="mob-pop">${popStr}</span>
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
// POPULATE STAT CARDS
// ============================================================
function buildStats() {
  const el = id => document.getElementById(id);
  if (el('stat-combos'))    el('stat-combos').textContent    = STRATEGY.total_combinations;
  if (el('stat-markets'))   el('stat-markets').textContent   = STRATEGY.matrix.length;
  if (el('stat-keywords'))  el('stat-keywords').textContent  = STRATEGY.selected_keywords.length;
  if (el('stat-researched'))el('stat-researched').textContent= STRATEGY.total_keywords_researched;
}
// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  buildStats();
  buildKeywordTable();
  buildKeywordTierCards();
  buildMatrix();
  buildNotUsed();
  buildOpportunities();
  buildMobileMarketList();
});
