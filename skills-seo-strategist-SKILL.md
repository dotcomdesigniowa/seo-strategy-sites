---
name: seo-strategist
description: Automated end-to-end SEO strategy generation system for Dotcom Design clients. Use this skill whenever building a local SEO strategy for a client. Given a client website URL and plan level, this skill automates client data extraction, keyword research via SEMrush API, market analysis and tiering, keyword-city matrix generation, and final strategy document plus branded website assembly. Replaces a 3-4 hour manual process with a 5-minute automated workflow.
---

# SEO Strategist Skill

This skill automates the full Dotcom Design SEO strategy workflow from client URL to client-ready branded website.

## Inputs Required

| Input | Source | Notes |
| :--- | :--- | :--- |
| Client website URL | User | Used to extract name, services, HQ city |
| Plan Level | User | See plan levels below |
| Service radius / region | User (if not on site) | Ask only if not found on website |
| Exclusions or notes | User (optional) | Any keywords or markets to avoid |

**Plan Levels** (source of truth: intake form at seo-strategy.dotcomdesign.com/new-strategy):

| Level | Price | Combinations |
| :--- | :--- | :--- |
| SEO Booster | $399/mo | 10 |
| A | $600/mo | 20 |
| B | $900/mo | 30 |
| C | $1,200/mo | 40 |
| D | $1,600/mo | 50 |
| E | $2,000/mo | 60 |
| F | $3,000/mo | 90 |
| G | $4,000/mo | 120 |
| H | $5,000/mo | 150 |

## Workflow

### Step 1 - Client Data Extraction

Browse the client website. Extract: client name, industry, HQ city and state, full list of services, service area. If service radius is not found, ask the user.

Also check the client's sitemap (try `/sitemap.xml`, `/sitemap_index.xml`, and `/page-sitemap.xml`) to identify any existing service area pages. Record which keyword-city combinations the client already has pages for. When building the matrix in Step 6, prioritize combinations NOT already covered, or where existing pages need reinforcement.

### Step 2 - Keyword Research

Run `scripts/semrush_keyword_research.py` with core services as seed keywords.

SEMrush API Key: `1f834cf506d399c7e0bbb87923381608`

Key rules:
- Generate variations with modifiers: companies, contractor, near me, local, cost, quote
- NEVER include city/state names in keywords
- NEVER use a standalone overly broad term (e.g., "demolition" alone)
- Remove DIY, informational, and job-seeking terms
- Remove terms outside the client's listed services
- Remove redundant phrases (e.g., "tree service services")

### Step 3 - Market Analysis

Run `scripts/market_analysis.py` for the client's county or region.

Tiering:
- Tier 1: HQ city + any city with population > 40,000
- Tier 2: Population 10,000-40,000
- Tier 3: Population < 10,000

For multi-county service regions (e.g., "Western Pennsylvania"), run the script per county and combine results. Filter to cities within ~35-40 miles of HQ. Always include county seat cities even if their population falls below tier thresholds — they carry disproportionate commercial search demand.

### Step 4 - Strategy Selection

- **Go Wide** (few keywords, many cities): Use when 1-2 keywords dominate search volume
- **Go Deep** (more keywords, fewer cities): Use when multiple distinct service keywords each have meaningful volume
- HQ city does NOT automatically get the most keyword slots. Assign by strategic value.

### Step 5 - Keyword Tiering

Group keywords into thematic tiers with industry-specific names (NOT generic "Tier 1/2/3" labels). Each tier gets a brief strategic note explaining why these keywords are grouped together.

### Step 6 - Matrix Generation

Enforcement rules:
- Total combinations must equal the plan level exactly
- No keyword may appear in both the matrix AND the Not Used section
- No Not Used keyword may appear in Additional Opportunities
- Matrix totals must be mathematically accurate

**CRITICAL: Matrix Orientation Rule**

The matrix has two valid orientations. Choose based on the number of markets:

| Markets | Orientation | Reason |
| :--- | :--- | :--- |
| 5 or fewer | Keywords as rows, cities as columns | Fits cleanly in the standard table width |
| 6 or more | **Cities as rows, keywords as columns** | Prevents city column headers from overlapping |

With 6+ markets as columns, city names are too long to fit without overlapping. Always flip to cities-as-rows when markets >= 6. This has caused repeated visual bugs and must be enforced automatically. The `buildMatrix()` function in `app_template.js` uses the cities-as-rows layout by default.

### Step 7 - Document Assembly & Website Generation

**CRITICAL: Read the dotcom-design-brand skill AND the reference files in this skill BEFORE writing a single line of HTML.** The most common failure mode is building a custom design instead of the Dotcom Design template.

**The strategy site is a pure HTML/CSS/JS site — NOT a React/Vite webdev project.** Do not use `webdev_init_project`. Write `index.html`, `app.js`, `charts.js`, and copy `style.css` directly into `/home/ubuntu/seo-strategy-repo/{clientdomain}/`.

1.  **Generate `strategy_data.json`:** Run `scripts/strategy_engine.py` to produce the master JSON data file.
2.  **Create `index.html`:** Copy `references/index_template.html` and update the `<base href>` tag.
3.  **Create `app.js`:** Copy `references/app_template.js` and paste the generated `strategy_data.json` content into the `STRATEGY` constant.
4.  **Copy `style.css`:** Copy `references/style_reference.css` to the client folder.
5.  **Copy `charts.js`:** Copy `references/charts_template.js`.

### Step 8 - Finalization and Alignment Verification

Before delivering, perform a final visual review of the website. All card grids use CSS Subgrid, which should handle alignment automatically. Verify:

- **All Card Grids:** Market Tier, Keyword Tier, Not Used, and Additional Opportunity cards must have their internal elements (titles, descriptions, lists) aligned perfectly horizontally across the row.
- **Grand Total Hover:** The Grand Total row in the main matrix table must not change color on hover.

Use browser developer tools to inspect if misalignment is suspected. The `runAllEqualizers()` function is deprecated as subgrid handles this natively.

### Step 9 - Deploy to seo-strategy.dotcomdesign.com

All client strategy sites are hosted at `seo-strategy.dotcomdesign.com/{clientdomain}` via GitHub + Vercel auto-deploy.

**GitHub repo:** https://github.com/dotcomdesigniowa/seo-strategy-sites

**To deploy a new client:**
1. Run `git pull origin main` in `/home/ubuntu/seo-strategy-repo/` to get the latest.
2. Place the generated site files in a new folder named after the client's domain (e.g., `newclientdomain.com/`).
3. Add the client entry to the `clients` array in the root `index.html`.
4. Update the README.md client table.
5. Commit and push:
   ```
   git add .
   git commit -m "feat: Add [Client Name] SEO strategy site"
   git push origin main
   ```
6. After pushing, navigate to the Vercel dashboard to monitor the deployment. It should be live within 1-2 minutes.

## Data & CSS Rules (Source of Truth)

### Writing Rules (Non-Negotiable)

- **NO em dashes (—) or en dashes (–) anywhere in any user-visible text.** This applies to all prose, descriptions, card labels, tier labels, hero text, and any string that renders on screen.
- Use a period and a new sentence, a comma, parentheses, or a colon as replacements. Examples:
  - WRONG: `"Level B adds two keywords — Insurance Agency Near Me and Renters Insurance — across all 5 markets."`
  - RIGHT: `"Level B adds two keywords (Insurance Agency Near Me and Renters Insurance) across all 5 markets."`
  - WRONG: `<div class="tier-card-label">TIER 1 &mdash; PRIMARY MARKETS</div>`
  - RIGHT: `<div class="tier-card-label">TIER 1: PRIMARY MARKETS</div>`
- The `hero-plan` text must use a colon, not a dash: `Plan Level C: 40 Keyword-City Combinations`
- Short hyphens in compound words (e.g., `data-driven`, `keyword-city`) are fine.

### Data Rules for `strategy_data.json`

- **`price`:** Must be a **numeric** value (e.g., `900`), not a pre-formatted string. The `app.js` template will add the `$` and `/mo`.
- **`new_market`:** Must be a **boolean** (`true` or `false`).

### CSS Layout Rules (from `style_reference.css`)

**The canonical layout pattern is CSS Subgrid for all card types.** This is not optional.

1.  **Parent Grid Defines Tracks:** The parent container (e.g., `.opportunities-grid`, `.not-used-grid`) must use `display: grid` and define the `grid-template-rows` for all cards in that section. Use `1fr` for the description track to allow it to expand and push other tracks down uniformly.
2.  **Card Uses Subgrid:** The card itself (e.g., `.opp-card`) must use `display: grid`, `grid-template-rows: subgrid`, and `grid-row: span <track_count>`. The `<track_count>` must exactly match the number of tracks defined on the parent.
3.  **Responsive Fallback:** At the `max-width: 900px` breakpoint, all card types MUST fall back to `display: flex; flex-direction: column; grid-row: span 1;` to ensure a clean single-column layout on mobile.

**Example: `.opp-card`**
- **`.opportunities-grid`:** `grid-template-rows: auto auto auto auto auto 1fr minmax(24px, auto) auto;` (8 tracks)
- **`.opp-card`:** `grid-row: span 8; grid-template-rows: subgrid;`
- **CRITICAL:** Every `.opp-card` MUST always contain exactly 8 child divs in this order: `opp-plan-label`, `opp-price`, `opp-combos-large`, `opp-combos`, `opp-headline`, `opp-desc`, `opp-new-market`, `opp-kw-list`. The 7th child is `.opp-new-market`. If a plan level does NOT add new markets, you MUST still render the div with `style="visibility:hidden"` as a placeholder: `<div class="opp-new-market" style="visibility:hidden"></div>`. Omitting this div, or adding extra divs, causes the subgrid track count to mismatch and breaks header alignment across cards.
- **KNOWN BUG (fixed March 2026):** The original template used `span 7` / 7 tracks. This caused the `.opp-new-market` text to overlap the `.opp-kw-list` header row. All sites were patched to `span 8` / 8 tracks. Never revert to span 7.

### Root Portal Password Gate

The root `index.html` is protected by a client-side password gate. The password is not stored in plain text. To change the password:
1.  Choose a new password.
2.  Generate its SHA-256 hash using a shell command: `echo -n 'YOUR_NEW_PASSWORD' | sha256sum`
3.  Replace the `PW_HASH` constant in the `<script>` block of the root `index.html` with the new hash.

## Reference Files

- `references/SEO_Strategy_Durham_Tree_Service.md`: First completed benchmark strategy
- `references/final_keyword_list.csv`: Durham Tree Service keyword list (131 keywords)
- `references/full_market_list.csv`: Polk County FL market list (35 cities)
- `references/style_reference.css`: **Canonical CSS baseline.** Use this file for all new builds.
- `references/index_template.html`: **Canonical HTML template.** Use for all new client sites.
- `references/app_template.js`: **Canonical JS template.** Use for all new client sites.
- `references/charts_template.js`: **Canonical charts template.** Use for all new client sites.

## Quality Checklist

- [ ] Read dotcom-design-brand skill and all reference files in this skill before starting.
- [ ] Matrix combination count matches plan level exactly.
- [ ] **Matrix orientation:** If markets >= 6, cities are rows and keywords are columns. If markets <= 5, keywords are rows and cities are columns. Never use cities-as-columns with 6+ markets.
- [ ] No keyword appears in both the matrix and the Not Used section.
- [ ] **Additional Opportunities:** Each card lists ONLY new keywords/markets not already in the current plan.
- [ ] **Additional Opportunities:** Every card has a numeric `price` field.
- [ ] **CSS:** All card grids (`.market-tier-card`, `.kw-tier-card`, `.not-used-card`, `.opp-card`) use CSS Subgrid for horizontal alignment.
- [ ] **CSS:** `.opp-card` uses `grid-row: span 8` (NOT span 7) and `.opportunities-grid` has 8 row tracks. Each `.opp-card` contains exactly 8 child divs including the `.opp-new-market` placeholder.
- [ ] **CSS:** All card grids correctly fall back to `display: flex` on mobile (≤900px).
- [ ] **CSS:** The `.grand-total-row` does not change color on hover.
- [ ] All cities are real, correctly spelled places in the service region.
- [ ] **No em dashes or en dashes** in any user-visible text (prose, labels, hero, cards). Use periods, commas, colons, or parentheses instead.
- [ ] Website matches Dotcom Design template exactly (Montserrat, navy/blue/red, correct logo).
- [ ] Charts load correctly.
- [ ] Client entry added to root `index.html` clients array and README.md.
- [ ] Site pushed to GitHub and verified live at `seo-strategy.dotcomdesign.com/{clientdomain}`.
