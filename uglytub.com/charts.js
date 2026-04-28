// =============================================
// DOTCOM DESIGN — SEO STRATEGY CHARTS
// Bath Magic | uglytub.com
// Full-width bar chart, horizontal labels
// =============================================
document.addEventListener('DOMContentLoaded', function () {
  const dotBlue  = '#3F80EA';
  const dotDark  = '#334168';
  const dotRed   = '#EB0052';
  // ---- CHART: Market Population Bar Chart ----
  // Shows the 10 active markets (confirmed client service metros + 2 suburban additions)
  const marketCtx = document.getElementById('marketChart');
  if (marketCtx) {
    marketCtx.style.height = '360px';
    new Chart(marketCtx, {
      type: 'bar',
      data: {
        labels: [
          'Columbus, OH', 'Louisville, KY', 'Detroit, MI',
          'Cincinnati, OH', 'Madison, WI', 'Toledo, OH',
          'Rockford, IL', 'Dayton, OH', 'Warren, MI', 'West Chester, OH'
        ],
        datasets: [{
          label: 'Population',
          data: [905748, 633045, 620376, 309317, 269840, 268508, 147651, 137644, 134873, 61000],
          backgroundColor: [
            dotBlue, dotBlue, dotBlue, dotBlue, dotBlue,
            dotBlue, dotBlue, dotRed,  dotBlue, dotBlue,
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
                const isHQ = ctx.dataIndex === 7;
                return [
                  ' Population: ' + ctx.raw.toLocaleString(),
                  ' Status: ' + (isHQ ? 'HQ — Selected (Tier 1)' : 'Selected (Tier 1)')
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
              font: { family: 'Montserrat', size: 10 },
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
