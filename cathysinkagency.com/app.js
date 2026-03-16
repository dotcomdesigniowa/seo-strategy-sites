// ─────────────────────────────────────────────────────────────────────────────
// CATHY SINK INSURANCE AGENCY — SEO Strategy Data
// Plan Level A | 20 Combinations | $600/mo
// Fort Myers, FL | Insurance (Personal Lines)
// ─────────────────────────────────────────────────────────────────────────────

const STRATEGY = {
  client: {
    name: "Cathy Sink Insurance Agency",
    website: "https://www.cathysinkagency.com/",
    industry: "Insurance",
    hq: "Fort Myers, FL",
    phone: "(239) 561-8600",
    address: "13111 Paul J. Doherty Pkwy #110, Fort Myers, FL 33913",
    description: "Southwest Florida's trusted independent insurance agency, proudly serving SWFL residents since 1997 with home, flood, auto, boat, and specialty insurance.",
    stats: {
      homesInsured: "11,458",
      associates: "12",
      yearsServing: "29",
      googleRating: "4.8",
      googleReviews: "602"
    }
  },
  plan: {
    level: "A",
    price: 600,
    combinations: 20,
    keywordsCount: 4,
    marketsCount: 5
  },

  // ─── KEYWORD TIERS ────────────────────────────────────────────────────────
  keywordTiers: [
    {
      name: "Florida Specialty Lines",
      description: "Florida-specific insurance products with strong local demand and significantly lower competition than national brand-dominated terms. Flood insurance is mandatory for many Lee County properties, and the massive condo market creates consistent search volume for condo coverage.",
      keywords: [
        { keyword: "Flood Insurance Agent", volume: 1900 },
        { keyword: "Condo Insurance", volume: 8100 },
      ]
    },
    {
      name: "Marine & Recreational",
      description: "Southwest Florida is one of the top boating markets in the United States, and Cape Coral and Bonita Springs have some of the largest golf cart communities in the country. These niche keywords carry meaningful volume with a fraction of the competition of auto or home insurance terms.",
      keywords: [
        { keyword: "Boat Insurance", volume: 5400 },
        { keyword: "Golf Cart Insurance", volume: 2900 },
      ]
    }
  ],

  // ─── SELECTED KEYWORDS ────────────────────────────────────────────────────
  selectedKeywords: [
    { keyword: "Flood Insurance Agent", volume: 1900, tier: "Florida Specialty Lines" },
    { keyword: "Condo Insurance", volume: 8100, tier: "Florida Specialty Lines" },
    { keyword: "Boat Insurance", volume: 5400, tier: "Marine & Recreational" },
    { keyword: "Golf Cart Insurance", volume: 2900, tier: "Marine & Recreational" },
  ],

  // ─── MARKETS ──────────────────────────────────────────────────────────────
  markets: [
    { city: "Fort Myers", state: "FL", population: 106233, tier: 1, hq: true },
    { city: "Cape Coral", state: "FL", population: 251819, tier: 1, hq: false },
    { city: "Bonita Springs", state: "FL", population: 58724, tier: 1, hq: false },
    { city: "Estero", state: "FL", population: 39137, tier: 2, hq: false },
    { city: "Naples", state: "FL", population: 22000, tier: 2, hq: false },
  ],

  // ─── NOT USED KEYWORDS ────────────────────────────────────────────────────
  notUsedGroups: [
    {
      group: "Property Lines",
      note: "Strong volume but higher competition vs. specialty lines. Available for Level B–C expansion.",
      keywords: [
        { keyword: "Renters Insurance", volume: 40500 },
        { keyword: "Landlord Insurance", volume: 4400 },
        { keyword: "Homeowners Insurance Agent", volume: 1900 },
      ]
    },
    {
      group: "Recreational & Specialty",
      note: "Lower competition than auto insurance, strong SWFL demand. Available for Level C expansion.",
      keywords: [
        { keyword: "Motorcycle Insurance", volume: 5400 },
      ]
    },
    {
      group: "Liability Lines",
      note: "Specialty coverage with very low competition. Available for Level D expansion.",
      keywords: [
        { keyword: "Personal Umbrella Insurance", volume: 1600 },
      ]
    },
    {
      group: "Agency Discovery",
      note: "High-intent agency-finding terms. Available for Level B expansion.",
      keywords: [
        { keyword: "Insurance Agency Near Me", volume: 8100 },
        { keyword: "Independent Insurance Agent", volume: 2400 },
      ]
    },
    {
      group: "Flood Insurance Variants",
      note: "Deeper flood insurance targeting for advanced levels.",
      keywords: [
        { keyword: "Flood Insurance Quote", volume: 3600 },
        { keyword: "Private Flood Insurance", volume: 1300 },
      ]
    },
    {
      group: "Marine Variants",
      note: "Expanded marine coverage targeting for advanced levels.",
      keywords: [
        { keyword: "Marine Insurance", volume: 2900 },
        { keyword: "Boat Insurance Agent", volume: 590 },
      ]
    },
  ],

  // ─── ADDITIONAL OPPORTUNITIES ─────────────────────────────────────────────
  additionalOpportunities: [
    {
      level: "B",
      price: 900,
      combinations: 30,
      newCombos: 10,
      description: "Level B adds 10 new combinations by layering in two high-intent agency discovery keywords — Insurance Agency Near Me and Renters Insurance — across all 5 markets. These terms attract clients actively searching for a local independent agent and renters who need affordable coverage, both underserved by national brand SEO.",
      keywords: ["Insurance Agency Near Me", "Renters Insurance"],
      newMarket: null,
      kwList: [
        { keyword: "Insurance Agency Near Me", volume: 8100 },
        { keyword: "Renters Insurance", volume: 40500 },
      ]
    },
    {
      level: "C",
      price: 1200,
      combinations: 40,
      newCombos: 10,
      description: "Level C adds Landlord Insurance and Motorcycle Insurance across all 5 markets. Lee County has a large rental property market and a strong motorcycle riding community — both underserved by national brand SEO and well within Cathy Sink's existing service offerings.",
      keywords: ["Landlord Insurance", "Motorcycle Insurance"],
      newMarket: null,
      kwList: [
        { keyword: "Landlord Insurance", volume: 4400 },
        { keyword: "Motorcycle Insurance", volume: 5400 },
      ]
    },
    {
      level: "D",
      price: 1600,
      combinations: 50,
      newCombos: 10,
      description: "Level D expands into two new markets — Marco Island and Lehigh Acres — while adding Personal Umbrella Insurance across all 7 markets. Marco Island is a high-value coastal community with strong flood and umbrella insurance demand, and Lehigh Acres is Lee County's fastest-growing community.",
      keywords: ["Personal Umbrella Insurance", "Flood Insurance Quote"],
      newMarket: "Marco Island, FL and Lehigh Acres, FL",
      kwList: [
        { keyword: "Personal Umbrella Insurance", volume: 1600 },
        { keyword: "Flood Insurance Quote", volume: 3600 },
      ]
    },
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────
function fmt(n) {
  return n.toLocaleString();
}

function totalVolume() {
  return STRATEGY.selectedKeywords.reduce((sum, kw) => sum + kw.volume, 0);
}

function totalNotUsedVolume() {
  let total = 0;
  STRATEGY.notUsedGroups.forEach(g => g.keywords.forEach(kw => total += kw.volume));
  return total;
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER: OVERVIEW STATS
// ─────────────────────────────────────────────────────────────────────────────
function renderOverview() {
  const el = document.getElementById('overview-stats');
  if (!el) return;
  el.innerHTML = `
    <div class="stat-card">
      <div class="stat-number">${STRATEGY.plan.combinations}</div>
      <div class="stat-label">Keyword-City Combinations</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">${STRATEGY.plan.keywordsCount}</div>
      <div class="stat-label">Target Keywords</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">${STRATEGY.plan.marketsCount}</div>
      <div class="stat-label">Target Markets</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">${fmt(totalVolume())}</div>
      <div class="stat-label">Monthly Searches (Selected)</div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER: MARKETS TABLE
// ─────────────────────────────────────────────────────────────────────────────
function renderMarkets() {
  const tbody = document.getElementById('markets-tbody');
  if (!tbody) return;
  tbody.innerHTML = STRATEGY.markets.map((m, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${m.city}</strong>${m.hq ? ' <span class="hq-badge">HQ</span>' : ''}</td>
      <td>${m.state}</td>
      <td>${fmt(m.population)}</td>
      <td><span class="tier-badge tier-${m.tier}">Tier ${m.tier}</span></td>
    </tr>
  `).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER: KEYWORD TIERS
// ─────────────────────────────────────────────────────────────────────────────
function renderKeywordTiers() {
  const el = document.getElementById('keyword-tiers');
  if (!el) return;
  el.innerHTML = STRATEGY.keywordTiers.map(tier => `
    <div class="tier-card">
      <div class="tier-card-header">${tier.name}</div>
      <p class="tier-card-desc">${tier.description}</p>
      <table class="tier-kw-table">
        <thead><tr><th>Keyword</th><th>Mo. Searches</th></tr></thead>
        <tbody>
          ${tier.keywords.map(kw => `
            <tr>
              <td>${kw.keyword}</td>
              <td>${fmt(kw.volume)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER: STRATEGY MATRIX
// ─────────────────────────────────────────────────────────────────────────────
function renderMatrix() {
  const el = document.getElementById('strategy-matrix');
  if (!el) return;

  const keywords = STRATEGY.selectedKeywords;
  const markets = STRATEGY.markets;

  let html = `
    <div class="matrix-scroll">
      <table class="matrix-table">
        <thead>
          <tr>
            <th class="kw-col">Keyword / Market</th>
            ${markets.map(m => `<th>${m.city}${m.hq ? '<br><span class="hq-tag">HQ</span>' : ''}</th>`).join('')}
            <th>Mo. Searches</th>
          </tr>
        </thead>
        <tbody>
  `;

  keywords.forEach(kw => {
    html += `<tr>
      <td class="kw-col"><strong>${kw.keyword}</strong><br><span class="kw-tier">${kw.tier}</span></td>
      ${markets.map(() => `<td class="check-cell"><span class="check">✓</span></td>`).join('')}
      <td class="vol-cell">${fmt(kw.volume)}</td>
    </tr>`;
  });

  html += `
          <tr class="grand-total-row">
            <td><strong>Grand Total</strong></td>
            ${markets.map(() => `<td class="check-cell"><strong>${keywords.length}</strong></td>`).join('')}
            <td class="vol-cell"><strong>${fmt(totalVolume())}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="matrix-note">Grand Total: ${STRATEGY.plan.combinations} Combinations</p>
  `;

  el.innerHTML = html;
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER: NOT USED KEYWORDS
// ─────────────────────────────────────────────────────────────────────────────
function renderNotUsed() {
  const el = document.getElementById('not-used-container');
  if (!el) return;

  el.innerHTML = STRATEGY.notUsedGroups.map(group => `
    <div class="not-used-group">
      <div class="not-used-group-header">${group.group}</div>
      <p class="not-used-note">${group.note}</p>
      <table class="not-used-table">
        <thead><tr><th>Keyword</th><th>Mo. Searches</th></tr></thead>
        <tbody>
          ${group.keywords.map(kw => `
            <tr>
              <td>${kw.keyword}</td>
              <td>${fmt(kw.volume)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER: ADDITIONAL OPPORTUNITIES
// ─────────────────────────────────────────────────────────────────────────────
function buildOpportunities() {
  const el = document.getElementById('opportunities-grid');
  if (!el) return;

  el.innerHTML = STRATEGY.additionalOpportunities.map(opp => {
    const kwRows = opp.kwList.map(kw => `
      <tr>
        <td>${kw.keyword}</td>
        <td>${fmt(kw.volume)}</td>
      </tr>
    `).join('');

    const newMarketHtml = opp.newMarket
      ? `<div class="opp-new-market">+ New Market: ${opp.newMarket}</div>`
      : '<div class="opp-new-market" style="visibility:hidden"></div>';

    return `
      <div class="opp-card">
        <div class="opp-plan-label">Level ${opp.level}</div>
        <div class="opp-price">$${fmt(opp.price)}/mo</div>
        <div class="opp-desc">${opp.description}</div>
        <div class="opp-combos-large">${opp.combinations} <span class="opp-combos-label">Total Combos</span></div>
        ${newMarketHtml}
        <div class="opp-kw-header">
          <span>Keyword / Market</span><span>Mo. Searches</span>
        </div>
        <div class="opp-kw-list">
          <table>
            <tbody>${kwRows}</tbody>
          </table>
        </div>
      </div>
    `;
  }).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderOverview();
  renderMarkets();
  renderKeywordTiers();
  renderMatrix();
  renderNotUsed();
  buildOpportunities();

  // Populate hero
  const heroName = document.getElementById('hero-client-name');
  if (heroName) heroName.textContent = STRATEGY.client.name;

  const heroPlan = document.getElementById('hero-plan');
  if (heroPlan) heroPlan.textContent = `Plan Level ${STRATEGY.plan.level} — ${STRATEGY.plan.combinations} Keyword-City Combinations`;

  const heroIndustry = document.getElementById('hero-industry');
  if (heroIndustry) heroIndustry.textContent = `${STRATEGY.client.industry} | ${STRATEGY.client.hq}`;

  // Smooth scroll nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
