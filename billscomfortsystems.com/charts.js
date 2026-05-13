// =============================================
// DOTCOM DESIGN — SEO STRATEGY CHARTS
// Bill's Comfort Systems | May 2026
// Full-width bar chart, horizontal labels
// =============================================

document.addEventListener('DOMContentLoaded', function () {

  const dotBlue  = '#3F80EA';
  const dotDark  = '#334168';
  const dotRed   = '#EB0052';

  // ---- CHART: Market Population Bar Chart ----
  const marketCtx = document.getElementById('marketChart');
  if (marketCtx) {
    marketCtx.style.height = '320px';

    new Chart(marketCtx, {
      type: 'bar',
      data: {
        labels: [
          'Salt Lake City', 'Ogden', 'Layton', 'Murray',
          'Bountiful', 'Roy', 'Syracuse', 'Kaysville',
          'Clearfield', 'Farmington'
        ],
        datasets: [{
          label: 'Population',
          data: [200567, 87321, 84312, 50637, 46134, 40226, 35714, 34735, 32082, 25891],
          backgroundColor: [
            dotBlue,                    // Salt Lake City - Tier 1 selected
            dotBlue,                    // Ogden - Tier 1 selected
            dotRed,                     // Layton - HQ selected
            dotRed,                     // Murray - HQ selected
            dotBlue,                    // Bountiful - Tier 1 selected
            dotBlue,                    // Roy - Tier 1 selected
            dotDark,                    // Syracuse - Tier 2 selected
            dotDark,                    // Kaysville - Tier 2 selected
            dotDark,                    // Clearfield - Tier 2 selected
            dotDark,                    // Farmington - Tier 2 selected
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
                  'Selected (Tier 1)', 'Selected (Tier 1)',
                  'HQ - Selected (Tier 1)', 'HQ - Selected (Tier 1)',
                  'Selected (Tier 1)', 'Selected (Tier 1)',
                  'Selected (Tier 2)', 'Selected (Tier 2)',
                  'Selected (Tier 2)', 'Selected (Tier 2)'
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
