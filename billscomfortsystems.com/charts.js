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

  // ---- CHART: Market Population Bar Chart ----
  const marketCtx = document.getElementById('marketChart');
  if (marketCtx) {
    marketCtx.style.height = '380px';

    new Chart(marketCtx, {
      type: 'bar',
      data: {
        labels: [
          'Salt Lake City', 'West Valley City', 'West Jordan', 'Sandy',
          'Ogden', 'Layton', 'Murray', 'Bountiful',
          'Roy', 'Syracuse', 'Kaysville', 'Clearfield', 'Plain City'
        ],
        datasets: [{
          label: 'Population',
          data: [200567, 140230, 116961, 98975, 87321, 84312, 50637, 46134, 40226, 35714, 34735, 32082, 7078],
          backgroundColor: [
            dotBlue,   // Salt Lake City - Tier 1 selected (6 kw)
            dotGreen,  // West Valley City - Tier 1 selected (3 kw footprint)
            dotGreen,  // West Jordan - Tier 1 selected (3 kw footprint)
            dotGreen,  // Sandy - Tier 1 selected (3 kw footprint)
            dotBlue,   // Ogden - Tier 1 selected (6 kw)
            dotRed,    // Layton - HQ selected (6 kw)
            dotRed,    // Murray - HQ selected (6 kw)
            dotBlue,   // Bountiful - Tier 1 selected (6 kw)
            dotBlue,   // Roy - Tier 1 selected (6 kw)
            dotDark,   // Syracuse - Tier 2 selected (4 kw)
            dotDark,   // Kaysville - Tier 2 selected (4 kw)
            dotDark,   // Clearfield - Tier 2 selected (4 kw)
            dotDark,   // Plain City - Tier 2 selected (3 kw)
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
                  'Selected (Tier 1) — 6 keywords',
                  'Selected (Tier 1) — 3-keyword footprint',
                  'Selected (Tier 1) — 3-keyword footprint',
                  'Selected (Tier 1) — 3-keyword footprint',
                  'Selected (Tier 1) — 6 keywords',
                  'HQ — Selected (Tier 1) — 6 keywords',
                  'HQ — Selected (Tier 1) — 6 keywords',
                  'Selected (Tier 1) — 6 keywords',
                  'Selected (Tier 1) — 6 keywords',
                  'Selected (Tier 2) — 4 keywords',
                  'Selected (Tier 2) — 4 keywords',
                  'Selected (Tier 2) — 4 keywords',
                  'Selected (Tier 2) — 3 keywords (client request)',
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
              maxRotation: 30,
              minRotation: 0,
              display: function() { return window.innerWidth >= 600; }
            }
          }
        }
      }
    });
  }
});
