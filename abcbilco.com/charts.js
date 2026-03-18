// =============================================
// DOTCOM DESIGN — SEO STRATEGY CHARTS
// ABC Bilco / Heathrow Construction Corp.
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
          'New York City', 'Long Island', 'Brooklyn', 'Queens',
          'The Bronx', 'Westchester Co.', 'Staten Island', 'Newark, NJ',
          'Jersey City, NJ', 'Hoboken, NJ'
        ],
        datasets: [{
          label: 'Population',
          data: [8335897, 7830000, 2590516, 2278906, 1446788, 1004457, 491133, 307220, 292449, 60000],
          backgroundColor: [
            dotRed,                     // New York City — HQ Region selected
            dotBlue,                    // Long Island — Tier 1 selected
            dotBlue,                    // Brooklyn — Tier 1 selected
            dotBlue,                    // Queens — HQ Borough selected
            dotBlue,                    // The Bronx — Tier 1 selected
            dotDark,                    // Westchester Co. — Tier 2 selected
            dotBlue,                    // Staten Island — Tier 1 selected
            'rgba(51,65,104,0.35)',     // Newark, NJ — not selected
            dotDark,                    // Jersey City, NJ — Tier 2 selected
            'rgba(51,65,104,0.25)',     // Hoboken, NJ — not selected
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
                  'HQ Region — Selected (Tier 1)',
                  'Selected (Tier 1)',
                  'Selected (Tier 1)',
                  'HQ Borough — Selected (Tier 1)',
                  'Selected (Tier 1)',
                  'Selected (Tier 2)',
                  'Selected (Tier 1)',
                  'Not Selected',
                  'Selected (Tier 2)',
                  'Not Selected',
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
              callback: val => val >= 1000000 ? (val / 1000000).toFixed(1) + 'M' : val >= 1000 ? (val / 1000).toFixed(0) + 'K' : val,
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
