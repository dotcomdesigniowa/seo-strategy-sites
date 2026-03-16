// =============================================
// DOTCOM DESIGN - SEO STRATEGY CHARTS
// Insurance Prep Solutions - Inland Empire Markets
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
          'Riverside', 'San Bernardino', 'Fontana', 'Moreno Valley',
          'Ontario', 'Rancho Cucamonga', 'Corona', 'Victorville',
          'Temecula', 'Murrieta'
        ],
        datasets: [{
          label: 'Population',
          data: [327868, 226103, 223089, 216447, 190066, 177673, 163635, 143721, 113604, 113237],
          backgroundColor: [
            dotBlue,                    // Riverside - Tier 1 selected
            'rgba(51,65,104,0.35)',     // San Bernardino - not selected
            dotDark,                    // Fontana - Tier 2 selected
            'rgba(51,65,104,0.35)',     // Moreno Valley - not selected
            dotBlue,                    // Ontario - Tier 1 selected
            dotRed,                     // Rancho Cucamonga - HQ selected
            dotDark,                    // Corona - Tier 2 selected
            'rgba(51,65,104,0.25)',     // Victorville - not selected
            'rgba(51,65,104,0.25)',     // Temecula - not selected
            'rgba(51,65,104,0.25)',     // Murrieta - not selected
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
                  'Selected (Tier 1)', 'Not Selected', 'Selected (Tier 2)',
                  'Not Selected', 'Selected (Tier 1)', 'HQ: Selected (Tier 1)',
                  'Selected (Tier 2)', 'Not Selected', 'Not Selected', 'Not Selected'
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
              maxRotation: 35,
              minRotation: 20,
              display: function() { return window.innerWidth >= 600; }
            }
          }
        }
      }
    });
  }
});
