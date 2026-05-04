// =============================================
// DOTCOM DESIGN — SEO STRATEGY CHARTS
// Mid States Wireless | midstateswireless.com
// Full-width vertical bar chart
// =============================================
document.addEventListener('DOMContentLoaded', function () {
  const dotBlue  = '#3F80EA';
  const dotDark  = '#334168';
  const dotRed   = '#EB0052';
  // ---- CHART: Market Population Bar Chart ----
  // Shows the 6 active markets — Fargo (HQ) highlighted in red
  const marketCtx = document.getElementById('marketChart');
  if (marketCtx) {
    marketCtx.style.height = '360px';
    new Chart(marketCtx, {
      type: 'bar',
      data: {
        labels: [
          'Fargo, ND', 'Duluth, MN', 'Bismarck, ND',
          'Grand Forks, ND', 'Minot, ND', 'Moorhead, MN'
        ],
        datasets: [{
          label: 'Population',
          data: [130000, 90000, 75000, 59000, 50000, 45000],
          backgroundColor: [
            dotRed, dotBlue, dotBlue,
            dotBlue, dotBlue, dotBlue,
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
                const isHQ = ctx.dataIndex === 0;
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
