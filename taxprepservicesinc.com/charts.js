// =============================================
// DOTCOM DESIGN - SEO STRATEGY CHARTS
// Tax Prep Services Inc. | Rancho Cucamonga, CA
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
          'Riverside', 'San Bernardino', 'Fontana', 'Moreno Valley',
          'Rancho Cucamonga', 'Ontario', 'Corona', 'Victorville',
          'Murrieta', 'Temecula'
        ],
        datasets: [{
          label: 'Population',
          data: [314998, 222101, 214547, 213055, 177542, 175265, 168019, 134810, 119415, 113330],
          backgroundColor: [
            dotBlue,                    // Riverside - Tier 1 selected
            dotBlue,                    // San Bernardino - Tier 1 selected
            dotBlue,                    // Fontana - Tier 1 selected
            dotBlue,                    // Moreno Valley - Tier 1 selected
            dotRed,                     // Rancho Cucamonga - HQ selected
            'rgba(51,65,104,0.35)',     // Ontario - not selected
            'rgba(51,65,104,0.35)',     // Corona - not selected
            'rgba(51,65,104,0.35)',     // Victorville - not selected
            'rgba(51,65,104,0.25)',     // Murrieta - not selected
            'rgba(51,65,104,0.25)',     // Temecula - not selected
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
                  'Selected (Tier 1)', 'HQ: Selected (Tier 1)',
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
