---
name: seo-strategist
description: Automated end-to-end SEO strategy generation system for Dotcom Design clients. Use this skill whenever building a local SEO strategy for a client. Given a client website URL and plan level, this skill automates client data extraction, keyword research via SEMrush API, market analysis and tiering, keyword-city matrix generation, and final strategy document plus branded website assembly. Replaces a 3-4 hour manual process with a 5-minute automated workflow.
---

# SEO Strategist Skill

This skill automates the full Dotcom Design SEO strategy workflow from client URL to client-ready branded website.

## How to Start a New Strategy Job

The **SEO Strategy Intake Form** is the correct starting point for every new client. It generates a structured Manus prompt automatically — no team member needs to remember any specific commands.

**Always start a new Manus task for each client.** Never run a new strategy inside an existing task.

The intake form file is at: `references/intake_form.html` — open it in any browser.

---

## Inputs Required

| Input | Source | Notes |
| :--- | :--- | :--- |
| Client website URL | User | Used to extract name, services, HQ city |
| Plan Level | User | Level A-F |
| Service radius / region | User (if not on site) | Ask only if not found on website |
| Exclusions or notes | User (optional) | Any keywords or markets to avoid |

**Plan Levels:**

| Level | Price | Combinations |
| :--- | :--- | :--- |
| A | $600/mo | 20 |
| B | $900/mo | 30 |
| C | $1,200/mo | 40 |
| D | $1,600/mo | 50 |
| E | $2,000/mo | 60 |
| F | $3,000/mo | 90 |
| G | $4,000/mo | 120 |
| H | $5,000/mo | 150 |
| SEO Booster & Reputation | $399/mo | 10 |

## Workflow

### Step 1 - Client Data Extraction
Browse the client website. Extract: client name, industry, HQ city and state, full list of services, service area. If service radius is not found, ask the user.

### Step 2 - Keyword Research
Run scripts/semrush_keyword_research.py with core services as seed keywords.

Key rules:
- Generate variations with modifiers: companies, contractor, near me, local, cost, quote
- NEVER include city/state names in keywords
- NEVER use a standalone overly broad term (e.g., "demolition" alone)
- Remove DIY, informational, job-seeking terms
- Remove terms outside the client listed services
- Remove redundant phrases (e.g., "tree service services")

SEMrush API Key: 1f834cf506d399c7e0bbb87923381608

### Step 3 - Market Analysis
Run scripts/market_analysis.py for the client county/region.

Tiering:
- Tier 1: HQ city + population > 40,000
- Tier 2: Population 10,000-40,000
- Tier 3: Population < 10,000

### Step 4 - Strategy Selection
- Go Wide (few keywords, many cities): 1-2 keywords dominate search volume
- Go Deep (more keywords, fewer cities): Multiple distinct service keywords have meaningful volume
- HQ city does NOT automatically get the most keywords. Assign by strategic value.

### Step 5 - Keyword Tiering
Group into thematic tiers with industry-specific names (NOT generic Tier 1/2/3 labels). Each tier gets a strategic note.

### Step 6 - Matrix Generation
Enforcement rules:
- Total combinations must equal the plan level exactly
- No keyword in both matrix AND Not Used section
- No Not Used keyword in Additional Opportunities
- Matrix totals must be mathematically accurate

### Step 7 - Document Assembly
Sections in order:
1. Overview and Strategy Approach (customized with client name, industry, region)
2. Market Analysis and Tiering
3. Keyword Analysis and Tiering
4. Final Keyword-City Matrix
5. Keywords Not Used and Rationale (grouped by reason)
6. Additional Opportunities (upgrade paths with specific keywords and volumes). This section is optional. Only include it if there are genuine, high-value opportunities that were left out of the current plan. The number of opportunities can be 1, 2, or 3 — do not force 3 if only 1 or 2 make strategic sense. If the client's selected plan already provides excellent coverage, this section can be omitted entirely with a note explaining that the current plan is a strong starting point.

### Step 8 - Branded Website
Build HTML website using dotcom-design-brand skill guidelines. Include:
- Interactive bar chart: top markets by population
- Interactive doughnut chart: keyword volume by tier
- Sticky navigation, smooth scroll
- Color-coded matrix table
- Upgrade path cards with perfect horizontal alignment ensured by JavaScript height equalization.
- Mobile layout: For tier cards with lists (markets, keywords), ensure the list container (`<ul>` or `<div>`) has `width: 100%` so it fills the full card width on mobile screens. This prevents numbers/data on the right side from being misaligned.

## Reference Files

- references/SEO_Strategy_Durham_Tree_Service.md: First completed test build benchmark
- references/final_keyword_list.csv: Durham Tree Service keyword list (131 keywords)
- references/full_market_list.csv: Polk County FL market list (35 cities)
- references/style_reference.css: Finalized CSS for the branded website (use as baseline for all future builds; includes all mobile fixes and subgrid layout patterns)
- references/index_template.html: Reusable HTML template for the branded website. Use this as the starting point for all new client sites. It includes the critical `<base href>` tag and all necessary CSS/JS links. Replace `{CLIENT_DOMAIN}` with the client folder name.
- references/intake_form.html: Team-facing intake form. Open in any browser to generate a structured Manus prompt for a new client. This is the correct starting point for all new strategy jobs.
- references/SOP.md: One-page standard operating procedure for team members running the workflow.

## Permanent Writing & Formatting Rules

These rules apply to every section of every strategy document and website, without exception:

1. **No em-dashes ever.** Never use the long dash character (—). Rewrite the sentence using a colon, semicolon, or split into two sentences.
2. **Always use the full client business name.** Never shorten or abbreviate the client's name. If the client is "Durham's Tree Service," write "Durham's Tree Service" every single time — never "Durham's" alone.
3. **Keyword quality gate for all client-facing sections.** Keywords suggested in the matrix, Additional Opportunities, or any other section must pass a commercial-intent filter. Equipment/product terms (e.g., "stump grinder"), DIY terms, and informational queries are permanently disqualified from appearing in any client-facing section. A potential customer would never search for "stump grinder" when looking to hire a tree service company.
4. **Service-line coverage is near-mandatory.** Place very heavy weight on including at least one keyword from each of the client's service lines in the final matrix. Only skip a service line if the search volume is genuinely negligible (under 100 monthly searches nationally). This applies to the Additional Opportunities section as well.

### Step 9 - Finalization & Alignment Verification

Before delivering to the client, perform a final visual review of the generated website. The JavaScript height equalization script should handle most alignment automatically, but it's critical to verify:

- **Market Tier Cards:** All card descriptions and content elements line up horizontally.
- **Keyword Tier Cards:** All card descriptions and content elements line up horizontally.
- **Not Used Cards:** All card titles and descriptions line up horizontally.
- **Additional Opportunity Cards:** All card titles, descriptions, and content elements line up horizontally.

Use the browser's developer tools to inspect element positions if any misalignment is suspected. The `runAllEqualizers()` function in the browser console can be used to manually trigger the alignment script.

### Step 10 - Deploy to seo-strategy.dotcomdesign.com

All client strategy sites are hosted at **seo-strategy.dotcomdesign.com/{clientdomain}** via GitHub + Vercel auto-deploy.

**GitHub repo:** https://github.com/dotcomdesigniowa/seo-strategy-sites

**To deploy a new client:**
1. Clone or pull the repo: `git clone https://github.com/dotcomdesigniowa/seo-strategy-sites.git`
2. Copy the generated site files into a new folder named after the client's domain (e.g., `newclientdomain.com/`)
3. Add a link for the new client in the root `index.html`
4. Update the README.md client table
5. Commit and push to `main`:
   ```
   git add .
   git commit -m "Add [Client Name] SEO strategy site"
   git push origin main
   ```
6. Vercel auto-deploys within ~30 seconds. The site is immediately live at `seo-strategy.dotcomdesign.com/{clientdomain}`

**CRITICAL — Base href tag required:** Every client `index.html` MUST include a `<base href="/{clientdomain}/">` tag as the FIRST element inside `<head>`. Without this, CSS and JS assets will fail to load when served from a subdirectory on Vercel. Example:
```html
<head>
  <base href="/durhamstreeservice.com/">
  ...
</head>
```
Replace `durhamstreeservice.com` with the actual client folder name.

**GitHub token for push:** Use the stored PAT or generate a new one at github.com/settings/tokens with `repo` scope.

**No manual DNS or Cloudflare changes needed for new clients** — the subdomain and Vercel project are already configured permanently.

## Quality Checklist


- Matrix combination count matches plan level exactly
- No keyword in both matrix and Not Used
- No Not Used keyword in Additional Opportunities
- All cities are real, correctly spelled places in the service region
- Keyword tiers have descriptive, industry-specific names
- Overview references client name and industry
- Website renders with charts loading
- Dotcom Design logo in header and footer
