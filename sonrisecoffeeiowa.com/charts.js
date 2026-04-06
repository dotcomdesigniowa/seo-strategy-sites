// =============================================
// DOTCOM DESIGN — SEO STRATEGY CHARTS
// SonRise Coffee | sonrisecoffeeiowa.com
// Full-width bar chart, horizontal labels
// =============================================
document.addEventListener('DOMContentLoaded', function () {
  const dotBlue  = '#3F80EA';
  const dotDark  = '#334168';
  const dotRed   = '#EB0052';
  // ---- CHART: Market Population Bar Chart ----
  const marketCtx = document.getElementById('marketChart');
  if (marketCtx) {
    marketCtx.style.height = '360px';
    new Chart(marketCtx, {
      type: 'bar',
      data: {
        labels: [
          'Iowa City, IA', 'Coralville, IA', 'North Liberty, IA', 'Washington, IA',
          'Solon, IA', 'Kalona, IA', 'Sigourney, IA', 'Wellman, IA',
          'Lone Tree, IA', 'Riverside, IA', 'Keota, IA', 'Hills, IA'
        ],
        datasets: [{
          label: 'Population',
          data: [74000, 22000, 21000, 7400, 2700, 2600, 2000, 1500, 1300, 1000, 950, 800],
          backgroundColor: [
            dotBlue, dotBlue, dotBlue, dotBlue,
            dotBlue, dotBlue, dotBlue, dotBlue,
            dotBlue, dotRed,  dotBlue, dotBlue,
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
                const isHQ = ctx.dataIndex === 9;
                const tierMap = ['Tier 1','Tier 2','Tier 2','Tier 3','Tier 3','Tier 3','Tier 3','Tier 3','Tier 3','Tier 3','Tier 3','Tier 3'];
                return [
                  ' Population: ' + ctx.raw.toLocaleString(),
                  ' Status: ' + (isHQ ? 'HQ — Selected (' + tierMap[ctx.dataIndex] + ')' : 'Selected (' + tierMap[ctx.dataIndex] + ')')
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
