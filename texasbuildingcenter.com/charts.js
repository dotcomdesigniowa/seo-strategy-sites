// =============================================
// DOTCOM DESIGN — SEO STRATEGY CHARTS
// Texas Building Center
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
          'Georgetown', 'Cedar Park', 'Kerrville', 'Boerne',
          'Liberty Hill', 'Fredericksburg', 'Marble Falls', 'Lampasas',
          'Kingsland', 'Burnet'
        ],
        datasets: [{
          label: 'Population',
          data: [117660, 78551, 25540, 25024, 16120, 12133, 10581, 8250, 7527, 7065],
          backgroundColor: [
            dotBlue,                    // Georgetown — Tier 1 selected
            dotBlue,                    // Cedar Park — Tier 1 selected
            dotDark,                    // Kerrville — Tier 2 selected
            'rgba(51,65,104,0.35)',     // Boerne — not selected
            'rgba(51,65,104,0.35)',     // Liberty Hill — not selected
            'rgba(51,65,104,0.35)',     // Fredericksburg — not selected
            'rgba(51,65,104,0.35)',     // Marble Falls — not selected
            'rgba(51,65,104,0.25)',     // Lampasas — not selected
            'rgba(51,65,104,0.25)',     // Kingsland — not selected
            dotRed,                     // Burnet — HQ selected
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
                  'Selected (Tier 1)', 'Selected (Tier 1)', 'Selected (Tier 2)',
                  'Not Selected', 'Not Selected', 'Not Selected',
                  'Not Selected', 'Not Selected', 'Not Selected',
                  'HQ — Selected (Tier 1)'
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
