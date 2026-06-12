// =============================================
// DOTCOM DESIGN — SEO STRATEGY CHARTS
// Bill's Comfort Systems | May 2026
// Full-width bar chart, horizontal labels
// =============================================

document.addEventListener('DOMContentLoaded', function () {

  const dotBlue  = '#3F80EA';
  const dotDark  = '#334168';
  const dotRed   = '#EB0052';
  const dotGreen = '#2ECC71';
  const dotGray  = '#9BA3AF';

  // ---- CHART: Market Population Bar Chart ----
  const marketCtx = document.getElementById('marketChart');
  if (marketCtx) {
    marketCtx.style.height = '400px';

    new Chart(marketCtx, {
      type: 'bar',
      data: {
        labels: [
          'Salt Lake City', 'Ogden', 'Layton (HQ)', 'Murray (HQ)', 'Bountiful',
          'Roy', 'Syracuse', 'Kaysville', 'Clearfield',
          'Farmington', 'Clinton', 'West Haven', 'Centerville',
          'Park City', 'West Valley City'
        ],
        datasets: [{
          label: 'Population',
          data: [200567, 87321, 84312, 50637, 46134, 40226, 35714, 34735, 32082, 25891, 22070, 21175, 17503, 8548, 140230],
          backgroundColor: [
            dotBlue,   // Salt Lake City — Tier 1, 5 kw
            dotBlue,   // Ogden — Tier 1, 5 kw
            dotRed,    // Layton HQ — Tier 1, 5 kw
            dotRed,    // Murray HQ — Tier 1, 5 kw
            dotBlue,   // Bountiful — Tier 1, 4 kw
            dotBlue,   // Roy — Tier 1, 4 kw
            dotDark,   // Syracuse — Tier 2, 4 kw
            dotDark,   // Kaysville — Tier 2, 4 kw
            dotDark,   // Clearfield — Tier 2, 4 kw
            dotDark,   // Farmington — Tier 2, 3 kw
            dotDark,   // Clinton — Tier 2, 3 kw
            dotDark,   // West Haven — Tier 2, 3 kw
            dotDark,   // Centerville — Tier 2, 3 kw
            dotGreen,  // Park City — Tier 3, 3 kw
            dotBlue,   // West Valley City — Tier 1, 3 kw
          ],
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: ctx => ctx[0].label,
              label: ctx => {
                const statuses = [
                  'Selected (Tier 1) — 5 keywords',
                  'Selected (Tier 1) — 5 keywords',
                  'HQ — Selected (Tier 1) — 5 keywords',
                  'HQ — Selected (Tier 1) — 5 keywords',
                  'Selected (Tier 1) — 4 keywords',
                  'Selected (Tier 1) — 4 keywords',
                  'Selected (Tier 2) — 4 keywords',
                  'Selected (Tier 2) — 4 keywords',
                  'Selected (Tier 2) — 4 keywords',
                  'Selected (Tier 2) — 3 keywords',
                  'Selected (Tier 2) — 3 keywords',
                  'Selected (Tier 2) — 3 keywords',
                  'Selected (Tier 2) — 3 keywords',
                  'Selected (Tier 3) — 3 keywords (client request)',
                  'Selected (Tier 1) — 3 keywords (data-driven upgrade)',
                ];
                return [
                  ' Population: ' + ctx.raw.toLocaleString(),
                  ' Status: ' + statuses[ctx.dataIndex]
                ];
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: {
              callback: val => val >= 1000 ? (val / 1000).toFixed(0) + 'K' : val,
              font: { family: 'Montserrat', size: 11 }
            }
          },
          x: {
            grid: { display: false },
            ticks: {
              font: { family: 'Montserrat', size: 11 },
              maxRotation: 35,
              minRotation: 15,
              display: function() { return window.innerWidth >= 600; }
            }
          }
        }
      }
    });
  }
});
