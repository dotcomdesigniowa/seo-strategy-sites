// =============================================
// DOTCOM DESIGN — SEO STRATEGY CHARTS
// Texas Building Center
// Go Wide strategy: all 10 service area cities selected
// 5 keywords across 10 cities = 40 combinations
// =============================================

document.addEventListener('DOMContentLoaded', function () {

  const dotBlue  = '#3F80EA';
  const dotDark  = '#334168';
  const dotRed   = '#EB0052';
  const dotTeal  = '#2CA58D';

  // ---- CHART: Market Population Bar Chart ----
  // All 10 selected cities — Go Wide plan
  const marketCtx = document.getElementById('marketChart');
  if (marketCtx) {
    marketCtx.style.height = '320px';

    new Chart(marketCtx, {
      type: 'bar',
      data: {
        labels: [
          'Marble Falls', 'Lampasas', 'Kingsland', 'Burnet',
          'Granite Shoals', 'Horseshoe Bay', 'Llano',
          'Cottonwood Shores', 'Johnson City', 'Sunrise Beach'
        ],
        datasets: [{
          label: 'Population',
          data: [10581, 8250, 7527, 7065, 5200, 4700, 3232, 2200, 1800, 1200],
          backgroundColor: [
            dotBlue,   // Marble Falls — Tier 1 selected
            dotBlue,   // Lampasas — Tier 1 selected
            dotBlue,   // Kingsland — Tier 1 selected
            dotRed,    // Burnet — HQ selected
            dotBlue,   // Granite Shoals — Tier 1 selected
            dotTeal,   // Horseshoe Bay — Tier 2 selected
            dotTeal,   // Llano — Tier 2 selected
            dotTeal,   // Cottonwood Shores — Tier 2 selected
            dotTeal,   // Johnson City — Tier 2 selected
            dotTeal,   // Sunrise Beach — Tier 2 selected
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
                  'Selected (Tier 1)', 'Selected (Tier 1)', 'Selected (Tier 1)',
                  'HQ — Selected (Tier 1)',
                  'Selected (Tier 1)',
                  'Selected (Tier 2)', 'Selected (Tier 2)',
                  'Selected (Tier 2)', 'Selected (Tier 2)', 'Selected (Tier 2)'
                ];
                const combos = [5, 5, 5, 5, 5, 5, 5, 3, 3, 2];
                return [
                  ' Population: ' + ctx.raw.toLocaleString(),
                  ' Status: ' + statuses[ctx.dataIndex],
                  ' Combinations: ' + combos[ctx.dataIndex]
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
              maxRotation: 0,
              minRotation: 0,
              display: function() { return window.innerWidth >= 600; }
            }
          }
        }
      }
    });
  }
});
