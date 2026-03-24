// charts.js -- Kitchen Cabinets Etc. | Bellevue, WA
// Market population chart data for the Eastside King County service region

document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('marketChart');
  if (!ctx) return;

  // Selected = top 5 by population: Bellevue, Renton, Kirkland, Redmond, Sammamish
  const selectedCities   = ['Bellevue', 'Renton', 'Kirkland', 'Redmond', 'Sammamish'];
  const selectedPops     = [151854, 108429, 92175, 73256, 68981];
  const unselectedCities = ['Bothell', 'Issaquah', 'Mercer Island'];
  const unselectedPops   = [55287, 40051, 26320];

  const labels = [...selectedCities, ...unselectedCities];
  const data   = [...selectedPops,   ...unselectedPops];
  const colors = [
    ...selectedCities.map(() => '#2563eb'),
    ...unselectedCities.map(() => '#94a3b8'),
  ];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Population',
        data: data,
        backgroundColor: colors,
        borderRadius: 4,
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
            label: ctx => ' Pop. ' + ctx.parsed.y.toLocaleString()
          }
        }
      },
      scales: {
        x: {
          ticks: { font: { size: 11 }, maxRotation: 35, minRotation: 20 },
          grid: { display: false }
        },
        y: {
          ticks: {
            callback: v => v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v,
            font: { size: 11 }
          },
          grid: { color: 'rgba(0,0,0,0.06)' }
        }
      }
    }
  });
});
