// =============================================
// DOTCOM DESIGN — SEO STRATEGY CHARTS
// Texas Building Center
// Full-width bar chart, horizontal labels
// Markets: confirmed service area cities only
// =============================================

document.addEventListener('DOMContentLoaded', function () {

  const dotBlue  = '#3F80EA';
  const dotDark  = '#334168';
  const dotRed   = '#EB0052';

  // ---- CHART: Market Population Bar Chart ----
  // Top 10 markets from the confirmed 29-city service area
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
            dotBlue,                    // Marble Falls — Tier 1 selected
            dotBlue,                    // Lampasas — Tier 1 selected
            dotBlue,                    // Kingsland — Tier 1 selected
            dotRed,                     // Burnet — HQ selected
            'rgba(63,128,234,0.40)',    // Granite Shoals — Tier 1 not selected
            'rgba(51,65,104,0.40)',     // Horseshoe Bay — Tier 2 not selected
            'rgba(51,65,104,0.35)',     // Llano — Tier 2 not selected
            'rgba(51,65,104,0.30)',     // Cottonwood Shores — Tier 2 not selected
            'rgba(51,65,104,0.25)',     // Johnson City — Tier 2 not selected
            'rgba(51,65,104,0.20)',     // Sunrise Beach — Tier 2 not selected
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
                  'Not Selected (Tier 1)', 'Not Selected (Tier 2)',
                  'Not Selected (Tier 2)', 'Not Selected (Tier 2)',
                  'Not Selected (Tier 2)', 'Not Selected (Tier 2)'
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
