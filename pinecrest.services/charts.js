// =============================================
// DOTCOM DESIGN -- SEO STRATEGY CHARTS
// Pinecrest Services | Philadelphia, PA
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
          'Philadelphia', 'Cherry Hill', 'Camden', 'Abington', 'Levittown',
          'Norristown', 'Warminster', 'West Chester', 'King of Prussia',
          'Phoenixville', 'Lansdale', 'Doylestown'
        ],
        datasets: [{
          label: 'Population',
          data: [
            1603797, 74566, 73562, 55310, 52983,
            34324, 32682, 21000, 19936,
            16440, 16269, 8380
          ],
          backgroundColor: [
            dotRed,                      // Philadelphia -- HQ
            dotBlue,                     // Cherry Hill -- Tier 1 selected
            dotBlue,                     // Camden -- Tier 1 selected
            dotBlue,                     // Abington -- Tier 1 selected
            dotBlue,                     // Levittown -- Tier 1 selected
            dotDark,                     // Norristown -- Tier 2 selected
            dotDark,                     // Warminster -- Tier 2 selected
            dotDark,                     // West Chester -- Tier 2 selected
            dotDark,                     // King of Prussia -- Tier 2 selected
            dotDark,                     // Phoenixville -- Tier 2 selected
            dotDark,                     // Lansdale -- Tier 2 selected
            'rgba(51,65,104,0.45)',      // Doylestown -- Tier 3 selected
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
                  'HQ -- Selected (Tier 1)',
                  'Selected (Tier 1)',
                  'Selected (Tier 1)',
                  'Selected (Tier 1)',
                  'Selected (Tier 1)',
                  'Selected (Tier 2)',
                  'Selected (Tier 2)',
                  'Selected (Tier 2)',
                  'Selected (Tier 2)',
                  'Selected (Tier 2)',
                  'Selected (Tier 2)',
                  'Selected (Tier 3)',
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
              callback: val => {
                if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M';
                if (val >= 1000) return (val / 1000).toFixed(0) + 'K';
                return val;
              },
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
