// charts.js -- Kitchen Cabinets Etc. | Bellevue, WA
// Market population chart data for the Eastside King County service region

document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('marketChart');
  if (!ctx) return;

  const selectedCities   = ['Bellevue', 'Kirkland', 'Redmond', 'Sammamish', 'Issaquah'];
  const selectedPops     = [151854, 92175, 73256, 68981, 40051];
  const unselectedCities = ['Renton', 'Bothell', 'Mercer Island'];
  const unselectedPops   = [108429, 55287, 26320];

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
