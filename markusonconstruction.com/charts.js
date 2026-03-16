// =============================================
// DOTCOM DESIGN - SEO STRATEGY CHARTS
// Markuson Construction Inc. - Omaha Metro
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
          'Omaha, NE', 'Bellevue, NE', 'Council Bluffs, IA', 'Papillion, NE',
          'La Vista, NE', 'Gretna, NE', 'Elkhorn, NE', 'Millard, NE',
          'Blair, NE', 'Ralston, NE'
        ],
        datasets: [{
          label: 'Population',
          data: [487506, 67000, 62605, 27000, 20000, 16000, 14000, 12000, 8000, 6422],
          backgroundColor: [
            dotRed,                     // Omaha - HQ selected
            dotBlue,                    // Bellevue - Tier 1 selected
            dotBlue,                    // Council Bluffs - Tier 1 selected
            dotDark,                    // Papillion - Tier 2 selected
            dotDark,                    // La Vista - Tier 2 selected
            'rgba(51,65,104,0.35)',     // Gretna - not selected
            'rgba(51,65,104,0.35)',     // Elkhorn - not selected
            'rgba(51,65,104,0.35)',     // Millard - not selected
            'rgba(51,65,104,0.25)',     // Blair - not selected
            'rgba(51,65,104,0.25)',     // Ralston - not selected
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
                  'HQ: Selected (Tier 1)', 'Selected (Tier 1)', 'Selected (Tier 1)',
                  'Selected (Tier 2)', 'Selected (Tier 2)',
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
