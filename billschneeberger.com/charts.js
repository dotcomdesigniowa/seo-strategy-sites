// =============================================
// DOTCOM DESIGN — SEO STRATEGY CHARTS
// Full-width bar chart, horizontal labels
// =============================================

document.addEventListener('DOMContentLoaded', function () {

  const dotBlue  = '#3F80EA';
  const dotDark  = '#334168';
  const dotRed   = '#EB0052';

  // ---- CHART: Market Population Bar Chart (full width, horizontal labels) ----
  const marketCtx = document.getElementById('marketChart');
  if (marketCtx) {
    marketCtx.style.height = '320px';

    new Chart(marketCtx, {
      type: 'bar',
      data: {
        labels: [
          'Evanston', 'Buffalo Grove', 'Glenview', 'Northbrook (HQ)',
          'Libertyville', 'Lake Forest', 'Highland Park', 'Wilmette',
          'Deerfield', 'Winnetka'
        ],
        datasets: [{
          label: 'Population',
          data: [78110, 43061, 47000, 35222, 20683, 19788, 31112, 28000, 19142, 12500],
          backgroundColor: [
            'rgba(51,65,104,0.35)',     // Evanston — not selected
            'rgba(51,65,104,0.35)',     // Buffalo Grove — not selected
            dotBlue,                    // Glenview — Tier 1 selected
            dotRed,                     // Northbrook — HQ selected
            'rgba(51,65,104,0.35)',     // Libertyville — not selected
            'rgba(51,65,104,0.35)',     // Lake Forest — not selected
            dotDark,                    // Highland Park — Tier 2 selected
            dotDark,                    // Wilmette — Tier 2 selected
            dotDark,                    // Deerfield — Tier 2 selected
            'rgba(51,65,104,0.25)',     // Winnetka — not selected
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
                  'Not Selected', 'Not Selected',
                  'Selected (Tier 1)', 'HQ — Selected (Tier 1)',
                  'Not Selected', 'Not Selected',
                  'Selected (Tier 2)', 'Selected (Tier 2)',
                  'Selected (Tier 2)', 'Not Selected'
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
              minRotation: 20,
              display: function() { return window.innerWidth >= 600; }
            }
          }
        }
      }
    });
  }
});
