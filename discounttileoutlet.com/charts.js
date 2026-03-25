// charts.js — Discount Tile Outlet | Eastside King County, WA
// Top 9 selected markets by population (Level B)

document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('marketChart');
  if (!ctx) return;

  const dotBlue = '#3F80EA';
  const dotDark = '#334168';
  const dotRed  = '#EB0052';

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Bellevue', 'Renton', 'Kirkland', 'Redmond', 'Sammamish', 'Bothell', 'Issaquah', 'Mercer Island', 'Woodinville'],
      datasets: [{
        label: 'Population',
        data: [151854, 108429, 92175, 73256, 69438, 53200, 40290, 25990, 14000],
        backgroundColor: [
          dotRed,   // Bellevue — HQ
          dotBlue,  // Renton — Tier 1
          dotBlue,  // Kirkland — Tier 1
          dotBlue,  // Redmond — Tier 1
          dotBlue,  // Sammamish — Tier 1
          dotBlue,  // Bothell — Tier 1
          dotBlue,  // Issaquah — Tier 1
          dotDark,  // Mercer Island — Tier 2
          dotDark   // Woodinville — Tier 2
        ],
        borderRadius: 6,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              const statuses = [
                'HQ City — Selected (Tier 1)',
                'Selected (Tier 1)',
                'Selected (Tier 1)',
                'Selected (Tier 1)',
                'Selected (Tier 1)',
                'Selected (Tier 1)',
                'Selected (Tier 2)',
                'Selected (Tier 2)'
              ];
              return [
                ' Population: ' + context.raw.toLocaleString(),
                ' Status: ' + statuses[context.dataIndex]
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
            callback: function(val) {
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
            minRotation: 0
          }
        }
      }
    }
  });
});
