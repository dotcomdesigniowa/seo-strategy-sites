// ============================================================
// SEO Strategy Website — App.js
// Mid States Wireless | Version 2 | Nationwide | 30 Keywords
// Loads strategy data and populates all dynamic sections
// Permanent rules: no em-dashes, full client name always,
// keyword quality gate, service-line coverage enforced
// ============================================================
const STRATEGY = {
  client_name: "Mid States Wireless",
  industry: "Telecommunications, IT & Security Solutions",
  hq_city: "Fargo",
  state: "ND",
  plan_level: "Level B",
  plan_price: 900,
  total_keywords: 30,
  total_service_lines: 12,
  total_tiers: 3,
  total_keywords_researched: 978,

  // ---- KEYWORD TABLE (all researched keywords with status) ----
  keyword_table: [
    // Two Way Radio family
    { keyword: "two way radio",                     monthly_searches:  6600, tier: "Tier 1", status: "selected",  family: "Two-Way Radio",          service_line: "Two-Way Radio",    variant_type: "base"    },
    { keyword: "two way radios",                    monthly_searches:  6600, tier: "Tier 1", status: "not_used",  family: "Two-Way Radio",          service_line: "Two-Way Radio",    variant_type: "plural"  },
    { keyword: "2 way radio",                       monthly_searches:  3600, tier: "Tier 1", status: "not_used",  family: "Two-Way Radio",          service_line: "Two-Way Radio",    variant_type: "variant" },
    { keyword: "motorola two way radio",            monthly_searches:  1300, tier: "Tier 1", status: "not_used",  family: "Two-Way Radio",          service_line: "Two-Way Radio",    variant_type: "variant" },
    { keyword: "long range two way radios",         monthly_searches:  1600, tier: "Tier 1", status: "not_used",  family: "Two-Way Radio",          service_line: "Two-Way Radio",    variant_type: "variant" },
    { keyword: "business two way radio",            monthly_searches:   720, tier: "Tier 1", status: "not_used",  family: "Two-Way Radio",          service_line: "Two-Way Radio",    variant_type: "variant" },
    { keyword: "two way radio near me",             monthly_searches:   590, tier: "Tier 1", status: "near_me",   family: "Two-Way Radio",          service_line: "Two-Way Radio",    variant_type: "near_me", near_me_note: "Treated as equivalent to 'two way radio [city]' in the final matrix" },
    // Motorola Radio family
    { keyword: "motorola radios",                   monthly_searches:  6600, tier: "Tier 1", status: "selected",  family: "Motorola Radio",         service_line: "Two-Way Radio",    variant_type: "base"    },
    { keyword: "motorola radio",                    monthly_searches:  5400, tier: "Tier 1", status: "not_used",  family: "Motorola Radio",         service_line: "Two-Way Radio",    variant_type: "variant" },
    { keyword: "motorola radio models",             monthly_searches:   720, tier: "Tier 1", status: "not_used",  family: "Motorola Radio",         service_line: "Two-Way Radio",    variant_type: "variant" },
    { keyword: "motorola radio communication",      monthly_searches:   320, tier: "Tier 1", status: "not_used",  family: "Motorola Radio",         service_line: "Two-Way Radio",    variant_type: "variant" },
    // Push to Talk family
    { keyword: "push to talk",                      monthly_searches:  1600, tier: "Tier 1", status: "selected",  family: "Push to Talk",           service_line: "Push-to-Talk",     variant_type: "base"    },
    { keyword: "push to talk cell phones",          monthly_searches:   170, tier: "Tier 1", status: "not_used",  family: "Push to Talk",           service_line: "Push-to-Talk",     variant_type: "variant" },
    // Radio Systems family
    { keyword: "radio communication",               monthly_searches:  1300, tier: "Tier 1", status: "selected",  family: "Radio Systems",          service_line: "Radio Systems",    variant_type: "base"    },
    { keyword: "p25 radio",                         monthly_searches:  1300, tier: "Tier 1", status: "not_used",  family: "Radio Systems",          service_line: "Radio Systems",    variant_type: "variant" },
    { keyword: "radio communication systems",       monthly_searches:   320, tier: "Tier 1", status: "not_used",  family: "Radio Systems",          service_line: "Radio Systems",    variant_type: "variant" },
    // Security Camera family
    { keyword: "security camera system",            monthly_searches: 22200, tier: "Tier 2", status: "selected",  family: "Security Cameras",       service_line: "Security Cameras", variant_type: "base"    },
    { keyword: "security cameras",                  monthly_searches: 60500, tier: "Tier 2", status: "not_used",  family: "Security Cameras",       service_line: "Security Cameras", variant_type: "plural"  },
    { keyword: "security camera",                   monthly_searches: 22200, tier: "Tier 2", status: "not_used",  family: "Security Cameras",       service_line: "Security Cameras", variant_type: "variant" },
    { keyword: "wireless security cameras",         monthly_searches: 22200, tier: "Tier 2", status: "not_used",  family: "Security Cameras",       service_line: "Security Cameras", variant_type: "variant" },
    { keyword: "commercial security cameras",       monthly_searches:  1600, tier: "Tier 2", status: "not_used",  family: "Security Cameras",       service_line: "Security Cameras", variant_type: "variant" },
    { keyword: "cctv installation",                 monthly_searches:  1300, tier: "Tier 2", status: "not_used",  family: "Security Cameras",       service_line: "Security Cameras", variant_type: "variant" },
    { keyword: "ip camera system",                  monthly_searches:   880, tier: "Tier 2", status: "not_used",  family: "Security Cameras",       service_line: "Security Cameras", variant_type: "variant" },
    { keyword: "security camera installation",      monthly_searches:   720, tier: "Tier 2", status: "selected",  family: "Security Cameras",       service_line: "Security Cameras", variant_type: "variant" },
    // Managed IT family
    { keyword: "managed it services",               monthly_searches: 27100, tier: "Tier 2", status: "selected",  family: "Managed IT",             service_line: "Managed IT",       variant_type: "base"    },
    { keyword: "it services",                       monthly_searches: 27100, tier: "Tier 2", status: "not_used",  family: "Managed IT",             service_line: "Managed IT",       variant_type: "variant" },
    { keyword: "it support",                        monthly_searches: 40500, tier: "Tier 2", status: "not_used",  family: "Managed IT",             service_line: "Managed IT",       variant_type: "variant" },
    { keyword: "managed service provider",          monthly_searches:  9900, tier: "Tier 2", status: "selected",  family: "Managed IT",             service_line: "Managed IT",       variant_type: "variant" },
    { keyword: "managed it services near me",       monthly_searches:  2400, tier: "Tier 2", status: "near_me",   family: "Managed IT",             service_line: "Managed IT",       variant_type: "near_me", near_me_note: "Treated as equivalent to 'managed it services [city]' in the final matrix" },
    { keyword: "it consulting",                     monthly_searches: 22200, tier: "Tier 2", status: "not_used",  family: "Managed IT",             service_line: "Managed IT",       variant_type: "variant" },
    // Access Control family
    { keyword: "access control system",             monthly_searches:  8100, tier: "Tier 2", status: "selected",  family: "Access Control",         service_line: "Access Control",   variant_type: "base"    },
    { keyword: "access control",                    monthly_searches: 14800, tier: "Tier 2", status: "not_used",  family: "Access Control",         service_line: "Access Control",   variant_type: "short_form" },
    { keyword: "access control systems",            monthly_searches:  8100, tier: "Tier 2", status: "not_used",  family: "Access Control",         service_line: "Access Control",   variant_type: "plural"  },
    { keyword: "commercial access control",         monthly_searches:  1300, tier: "Tier 2", status: "not_used",  family: "Access Control",         service_line: "Access Control",   variant_type: "variant" },
    { keyword: "door access control systems",       monthly_searches:  1600, tier: "Tier 2", status: "not_used",  family: "Access Control",         service_line: "Access Control",   variant_type: "variant" },
    { keyword: "access control solutions",          monthly_searches:  2400, tier: "Tier 2", status: "selected",  family: "Access Control",         service_line: "Access Control",   variant_type: "variant" },
    // Vehicle Upfitting family
    { keyword: "vehicle upfitting",                 monthly_searches:  1000, tier: "Tier 3", status: "selected",  family: "Fleet Upfitting",        service_line: "Fleet Upfitting",  variant_type: "base"    },
    { keyword: "fleet upfitting",                   monthly_searches:   480, tier: "Tier 3", status: "not_used",  family: "Fleet Upfitting",        service_line: "Fleet Upfitting",  variant_type: "variant" },
    { keyword: "custom vehicle upfitters",          monthly_searches:   320, tier: "Tier 3", status: "not_used",  family: "Fleet Upfitting",        service_line: "Fleet Upfitting",  variant_type: "variant" },
    { keyword: "vehicle upfitters",                 monthly_searches:   260, tier: "Tier 3", status: "not_used",  family: "Fleet Upfitting",        service_line: "Fleet Upfitting",  variant_type: "variant" },
    { keyword: "fleet vehicle upfitting",           monthly_searches:   170, tier: "Tier 3", status: "not_used",  family: "Fleet Upfitting",        service_line: "Fleet Upfitting",  variant_type: "variant" },
    { keyword: "commercial vehicle upfitting",      monthly_searches:   140, tier: "Tier 3", status: "not_used",  family: "Fleet Upfitting",        service_line: "Fleet Upfitting",  variant_type: "variant" },
    { keyword: "vehicle upfitting services",        monthly_searches:   110, tier: "Tier 3", status: "selected",  family: "Fleet Upfitting",        service_line: "Fleet Upfitting",  variant_type: "variant" },
    // Warning Sirens family
    { keyword: "tornado siren",                     monthly_searches: 14800, tier: null,     status: "not_used",  family: "Warning Sirens",         service_line: "Warning Sirens",   variant_type: "base"    },
    { keyword: "tornado sirens",                    monthly_searches:  4400, tier: null,     status: "not_used",  family: "Warning Sirens",         service_line: "Warning Sirens",   variant_type: "plural"  },
    { keyword: "emergency warning siren",           monthly_searches:  1300, tier: null,     status: "not_used",  family: "Warning Sirens",         service_line: "Warning Sirens",   variant_type: "variant" },
    // Cybersecurity family
    { keyword: "cyber security services",           monthly_searches:  6600, tier: null,     status: "not_used",  family: "Cybersecurity",          service_line: "Cybersecurity",    variant_type: "base"    },
    { keyword: "managed cybersecurity services",    monthly_searches:  2900, tier: null,     status: "not_used",  family: "Cybersecurity",          service_line: "Cybersecurity",    variant_type: "variant" },
    { keyword: "information security",              monthly_searches:  6600, tier: null,     status: "not_used",  family: "Cybersecurity",          service_line: "Cybersecurity",    variant_type: "variant" },
    // Data Backup family
    { keyword: "data backup and recovery",          monthly_searches:  3600, tier: null,     status: "not_used",  family: "Data Backup",            service_line: "Data Backup",      variant_type: "base"    },
    { keyword: "data recovery services",            monthly_searches:  6600, tier: null,     status: "not_used",  family: "Data Backup",            service_line: "Data Backup",      variant_type: "variant" },
    { keyword: "backup and disaster recovery",      monthly_searches:  1900, tier: null,     status: "not_used",  family: "Data Backup",            service_line: "Data Backup",      variant_type: "variant" },
    // Managed Security family
    { keyword: "managed security service provider", monthly_searches:  5400, tier: null,     status: "not_used",  family: "Managed Security",       service_line: "Managed Security", variant_type: "base"    },
    { keyword: "managed security services",         monthly_searches:  1900, tier: null,     status: "not_used",  family: "Managed Security",       service_line: "Managed Security", variant_type: "variant" },
    // Cell Booster family
    { keyword: "cell phone signal booster",         monthly_searches: 22200, tier: null,     status: "not_used",  family: "Cell Boosters",          service_line: "Cell Boosters",    variant_type: "base"    },
    { keyword: "cell signal booster",               monthly_searches:  9900, tier: null,     status: "not_used",  family: "Cell Boosters",          service_line: "Cell Boosters",    variant_type: "variant" },
    // BDA family
    { keyword: "bi-directional amplifier",          monthly_searches:   390, tier: null,     status: "not_used",  family: "BDA Systems",            service_line: "BDA Systems",      variant_type: "base"    },
    { keyword: "bda system",                        monthly_searches:  1600, tier: null,     status: "not_used",  family: "BDA Systems",            service_line: "BDA Systems",      variant_type: "variant" },
  ],

  // ---- KEYWORD TIERS (for tier cards in section 02) ----
  keyword_tiers: [
    {
      tier_label: "Tier 1",
      tier_name: "Two-Way Radio & Communications",
      description: "The anchor keyword cluster for Mid States Wireless's core business. 'Two way radio' generates 6,600 national monthly searches and is the primary term used by businesses, public safety agencies, and industrial operations searching for radio communication solutions. Mid States Wireless has been a Motorola dealer since 1946, making this the most authoritative and differentiated keyword cluster in the strategy. Push-to-talk (1,600/mo) and radio communication (1,300/mo) extend coverage across the full communications service line.",
      keywords: [
        { keyword: "two way radio",             monthly_searches: 6600 },
        { keyword: "motorola radios",           monthly_searches: 6600 },
        { keyword: "push to talk",              monthly_searches: 1600 },
        { keyword: "radio communication",       monthly_searches: 1300 },
      ]
    },
    {
      tier_label: "Tier 2",
      tier_name: "Security, IT & Access Control",
      description: "The highest-volume keyword cluster in the strategy. 'Managed IT services' generates 27,100 monthly searches nationally, while 'security camera system' and 'access control system' add 22,200 and 8,100 monthly searches respectively. These keywords target decision-makers at small and mid-size businesses who are actively searching for a local IT and physical security partner. Mid States Wireless's ability to integrate IT services with camera and access control infrastructure is a significant competitive differentiator.",
      keywords: [
        { keyword: "managed it services",       monthly_searches: 27100 },
        { keyword: "security camera system",    monthly_searches: 22200 },
        { keyword: "managed service provider",  monthly_searches:  9900 },
        { keyword: "access control system",     monthly_searches:  8100 },
        { keyword: "security camera installation", monthly_searches: 720 },
        { keyword: "access control solutions",  monthly_searches:  2400 },
      ]
    },
    {
      tier_label: "Tier 3",
      tier_name: "Fleet Upfitting & Specialized Services",
      description: "Vehicle upfitting is a specialized service offered by Mid States Wireless for law enforcement, emergency services, and commercial fleet operators. With 1,000 monthly searches nationally for 'vehicle upfitting,' this keyword targets a high-value, low-competition audience that includes police departments, fire departments, and utility companies. Mid States Wireless's expertise in squad car builds and emergency vehicle equipment makes this a highly differentiated keyword with strong commercial intent.",
      keywords: [
        { keyword: "vehicle upfitting",         monthly_searches: 1000 },
        { keyword: "vehicle upfitting services",monthly_searches:  110 },
      ]
    }
  ],

  // ---- KEYWORD MATRIX BY SERVICE LINE (V2 nationwide structure) ----
  service_lines: [
    {
      name: "Two-Way Radio",
      tier: "Tier 1",
      keywords: [
        { keyword: "two way radio",             monthly_searches: 6600 },
        { keyword: "motorola radios",           monthly_searches: 6600 },
      ]
    },
    {
      name: "Push-to-Talk",
      tier: "Tier 1",
      keywords: [
        { keyword: "push to talk",              monthly_searches: 1600 },
      ]
    },
    {
      name: "Radio Systems",
      tier: "Tier 1",
      keywords: [
        { keyword: "radio communication",       monthly_searches: 1300 },
      ]
    },
    {
      name: "Security Cameras",
      tier: "Tier 2",
      keywords: [
        { keyword: "security camera system",    monthly_searches: 22200 },
        { keyword: "security camera installation", monthly_searches: 720 },
      ]
    },
    {
      name: "Managed IT",
      tier: "Tier 2",
      keywords: [
        { keyword: "managed it services",       monthly_searches: 27100 },
        { keyword: "managed service provider",  monthly_searches:  9900 },
      ]
    },
    {
      name: "Access Control",
      tier: "Tier 2",
      keywords: [
        { keyword: "access control system",     monthly_searches:  8100 },
        { keyword: "access control solutions",  monthly_searches:  2400 },
      ]
    },
    {
      name: "Fleet Upfitting",
      tier: "Tier 3",
      keywords: [
        { keyword: "vehicle upfitting",         monthly_searches: 1000 },
        { keyword: "vehicle upfitting services",monthly_searches:  110 },
      ]
    },
    {
      name: "Warning Sirens",
      tier: "Future",
      keywords: [
        { keyword: "tornado siren",             monthly_searches: 14800 },
        { keyword: "emergency warning siren",   monthly_searches:  1300 },
      ]
    },
    {
      name: "Cybersecurity",
      tier: "Future",
      keywords: [
        { keyword: "cyber security services",   monthly_searches:  6600 },
        { keyword: "managed cybersecurity services", monthly_searches: 2900 },
      ]
    },
    {
      name: "Data Backup",
      tier: "Future",
      keywords: [
        { keyword: "data backup and recovery",  monthly_searches:  3600 },
        { keyword: "data recovery services",    monthly_searches:  6600 },
      ]
    },
    {
      name: "Cell Boosters",
      tier: "Future",
      keywords: [
        { keyword: "cell phone signal booster", monthly_searches: 22200 },
        { keyword: "cell signal booster",       monthly_searches:  9900 },
      ]
    },
    {
      name: "BDA Systems",
      tier: "Future",
      keywords: [
        { keyword: "bi-directional amplifier",  monthly_searches:   390 },
        { keyword: "bda system",                monthly_searches:  1600 },
      ]
    },
  ],

  // ---- NOT USED GROUPS ----
  not_used_groups: [
    {
      reason: "Warning Sirens: High Volume, Niche Audience",
      description: "Tornado siren and emergency warning siren keywords generate significant search volume (14,800 and 1,300 monthly searches respectively), but the audience is primarily residential and municipal rather than the commercial and industrial buyers that Mid States Wireless primarily serves. Warning siren installations are also a project-based service rather than a recurring revenue driver. These keywords are strong Level C expansion candidates once the core service lines are established.",
      keywords: [
        { keyword: "tornado siren",             monthly_searches: 14800 },
        { keyword: "tornado sirens",            monthly_searches:  4400 },
        { keyword: "emergency warning siren",   monthly_searches:  1300 },
      ]
    },
    {
      reason: "Cybersecurity and Data Backup: Plan Expansion Candidates",
      description: "Cybersecurity services (6,600/mo) and data backup and recovery (3,600/mo) are legitimate service lines offered by Mid States Wireless, but they are best introduced at a higher plan level where dedicated pages can be built for each keyword. These terms are highly competitive nationally, and ranking for them requires a strong foundation of existing IT content. They are ideal Level C or Level D additions once the managed IT services pages are established.",
      keywords: [
        { keyword: "cyber security services",           monthly_searches: 6600 },
        { keyword: "managed cybersecurity services",    monthly_searches: 2900 },
        { keyword: "data backup and recovery",          monthly_searches: 3600 },
        { keyword: "data recovery services",            monthly_searches: 6600 },
        { keyword: "managed security service provider", monthly_searches: 5400 },
      ]
    },
    {
      reason: "Cell Boosters and BDA Systems: Specialized B2B Keywords",
      description: "Cell phone signal booster (22,200/mo) and bi-directional amplifier systems are highly relevant to Mid States Wireless's portfolio, but they serve a narrow B2B audience: building owners, property managers, and facility engineers. The search volume for 'cell phone signal booster' is dominated by residential consumers searching for home boosters, not commercial BDA installations. 'Bi-directional amplifier' (390/mo) is the correct commercial term but has low volume. These are best addressed through targeted content pages rather than standalone SEO pages.",
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
      combinations: 40,
      price: 1200,
      additional_combinations: 10,
      headline: "Add Warning Sirens and Expand into Cybersecurity",
      description: "Level C adds 10 keyword targets across two strategic levers. First, it introduces warning siren installation as a dedicated service line (3 new keywords). Second, it adds cybersecurity services as a seventh service line, targeting businesses actively searching for a local managed security partner. This tier builds on the IT services foundation established at Level B and positions Mid States Wireless as a full-spectrum technology and security provider.",
      keywords: [
        { keyword: "warning siren installation",        monthly_searches: 1300 },
        { keyword: "tornado siren",                     monthly_searches: 14800 },
        { keyword: "cyber security services",           monthly_searches: 6600 },
        { keyword: "managed cybersecurity services",    monthly_searches: 2900 },
      ]
    },
    {
      plan: "Level D",
      combinations: 50,
      price: 1600,
      additional_combinations: 20,
      headline: "Add Data Backup, Cell Boosters, and BDA Systems",
      description: "Level D delivers 50 total keyword targets, enabling Mid States Wireless to achieve dominant national visibility across its full technology and communications portfolio. This tier introduces data backup and recovery, cell signal boosters, and BDA systems as dedicated service lines. Each of these represents a high-value B2B service with strong commercial intent and limited national competition from providers who can offer both the technology and local installation support.",
      keywords: [
        { keyword: "data backup and recovery",          monthly_searches: 3600 },
        { keyword: "data recovery services",            monthly_searches: 6600 },
        { keyword: "cell phone signal booster",         monthly_searches: 22200 },
        { keyword: "bi-directional amplifier",          monthly_searches:  390 },
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
  const cls = label === 'Tier 1' ? 't1' : label === 'Tier 2' ? 't2' : label === 'Tier 3' ? 't3' : label === 'Future' ? 't4' : 't5';
  return `<span class="tier-pill ${cls}">${label.toUpperCase()}</span>`;
}

// ============================================================
// POPULATE STAT CARDS
// ============================================================
function buildStats() {
  const el = id => document.getElementById(id);
  if (el('stat-combos'))     el('stat-combos').textContent     = STRATEGY.total_keywords;
  if (el('stat-markets'))    el('stat-markets').textContent    = STRATEGY.total_service_lines;
  if (el('stat-keywords'))   el('stat-keywords').textContent   = STRATEGY.total_tiers;
  if (el('stat-researched')) el('stat-researched').textContent = STRATEGY.total_keywords_researched;
}

// ============================================================
// POPULATE KEYWORD TABLE (section 02)
// ============================================================
function buildKeywordTable() {
  const tbody = document.getElementById('keyword-tbody');
  if (!tbody) return;
  const familyOrder = [];
  const seen = new Set();
  STRATEGY.keyword_table.forEach(kw => {
    if (!seen.has(kw.family)) { familyOrder.push(kw.family); seen.add(kw.family); }
  });
  const variantLabel = { variant: 'Variant', plural: 'Plural Variant', near_me: 'Near Me Variant', short_form: 'Short-Form Variant' };
  let rowNum = 0;
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
      rowNum++;
      html += `<tr class="${rowClass}">
        <td class="num-col">${rowNum}</td>
        ${kwCell}
        <td class="num-col">${fmt(kw.monthly_searches)}</td>
        <td>${tierPill(kw.tier)}</td>
        <td>${kw.service_line || ''}</td>
        <td>${statusBadge(kw.status, note)}</td>
      </tr>`;
    });
  });
  tbody.innerHTML = html;
}

// ============================================================
// POPULATE KEYWORD TIER CARDS (section 02, flat-tier-block pattern)
// ============================================================
function buildKeywordTierCards() {
  const grid = document.getElementById('kw-tier-blocks');
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
        <span class="flat-tier-count">${tier.keywords.length} keywords selected</span>
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
// POPULATE KEYWORD MATRIX BY SERVICE LINE (section 03)
// ============================================================
function buildKeywordMatrix() {
  const grid = document.getElementById('keyword-matrix-grid');
  if (!grid) return;
  let cards = '';
  STRATEGY.service_lines.forEach(sl => {
    const tierCls = sl.tier === 'Tier 1' ? 't1' : sl.tier === 'Tier 2' ? 't2' : sl.tier === 'Tier 3' ? 't3' : 't4';
    const kwItems = sl.keywords.map(kw =>
      `<div class="city-kw-item">
        <span class="city-kw-check">&#10003;</span>
        <span class="city-kw-name">${kw.keyword}</span>
        <span class="city-kw-vol">${fmt(kw.monthly_searches)}/mo</span>
      </div>`
    ).join('');
    const isFuture = sl.tier === 'Future';
    const cardClass = isFuture ? 'city-matrix-card card-future' : 'city-matrix-card';
    cards += `<div class="${cardClass}">
      <div class="city-matrix-header">
        <span class="city-matrix-name">${sl.name}</span>
        <span class="city-matrix-meta"><span class="tier-pill ${tierCls}">${sl.tier.toUpperCase()}</span></span>
      </div>
      <div class="city-kw-list">${kwItems}</div>
      <div class="city-matrix-footer">${sl.keywords.length} keyword${sl.keywords.length !== 1 ? 's' : ''} targeted</div>
    </div>`;
  });
  grid.innerHTML = cards;
}

// ============================================================
// POPULATE NOT USED SECTION (section 04)
// ============================================================
function buildNotUsed() {
  const grid = document.getElementById('not-used-container');
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
  if (STRATEGY.not_used_groups.length >= 3) {
    grid.classList.add('not-used-grid');
  }
}

// ============================================================
// POPULATE OPPORTUNITIES SECTION (section 05)
// ============================================================
function buildOpportunities() {
  const grid = document.getElementById('opp-grid');
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
      <div class="opp-combos-large">${opp.combinations} <span class="opp-combos-label">total keyword targets</span></div>
      <div class="opp-combos">+${opp.additional_combinations} additional keywords from current plan</div>
      <h4 class="opp-headline">${opp.headline}</h4>
      <p class="opp-desc">${opp.description}</p>
      <ul class="opp-kw-list"><li class="opp-kw-header"><span>Keyword</span><span>Mo. Searches</span></li>${kwList}</ul>
    </div>`;
  }).join('');
  grid.innerHTML = cards;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  buildStats();
  buildKeywordTable();
  buildKeywordTierCards();
  buildKeywordMatrix();
  buildNotUsed();
  buildOpportunities();
});
