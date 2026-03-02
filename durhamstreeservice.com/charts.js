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
    // Set explicit height so chart is tall enough for horizontal labels
    marketCtx.style.height = '320px';

    new Chart(marketCtx, {
      type: 'bar',
      data: {
        labels: [
          'Lakeland', 'Poinciana', 'Fuller Heights', 'Winter Haven',
          'Haines City', 'Bartow', 'Auburndale', 'Lake Wales',
          'Highland City', 'Davenport'
        ],
        datasets: [{
          label: 'Population',
          data: [112142, 72545, 60443, 52846, 31156, 19801, 17438, 16365, 12732, 11660],
          backgroundColor: [
            dotBlue,                    // Lakeland — Tier 1 selected
            dotBlue,                    // Poinciana — Tier 1 selected
            dotBlue,                    // Fuller Heights — Tier 1 selected
            dotRed,                     // Winter Haven — HQ selected
            dotDark,                    // Haines City — Tier 2 selected
            'rgba(51,65,104,0.35)',     // Bartow — not selected
            'rgba(51,65,104,0.35)',     // Auburndale — not selected
            'rgba(51,65,104,0.35)',     // Lake Wales — not selected
            'rgba(51,65,104,0.25)',     // Highland City — not selected
            'rgba(51,65,104,0.25)',     // Davenport — not selected
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
                  'HQ — Selected (Tier 1)', 'Selected (Tier 2)',
                  'Not Selected', 'Not Selected', 'Not Selected',
                  'Not Selected', 'Not Selected'
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
              // On mobile (< 600px): hide labels entirely, show city in tooltip
              // On desktop: keep labels horizontal
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
