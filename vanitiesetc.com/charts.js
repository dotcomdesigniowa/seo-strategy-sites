// charts.js — Vanities Etc Market Population Bar Chart
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('marketChart');
  if (!ctx) return;

  const labels = ['Bellevue', 'Renton', 'Kirkland', 'Redmond', 'Sammamish', 'Shoreline', 'Issaquah', 'Bothell', 'Mercer Island', 'Kenmore', 'Woodinville'];
  const populations = [151854, 108429, 92175, 73256, 69224, 57027, 40051, 26920, 26320, 24189, 13341];
  const selectedCount = 10;

  const backgroundColors = labels.map((_, i) =>
    i < selectedCount ? 'rgba(26, 82, 118, 0.85)' : 'rgba(180, 180, 180, 0.45)'
  );
  const borderColors = labels.map((_, i) =>
    i < selectedCount ? 'rgba(26, 82, 118, 1)' : 'rgba(150, 150, 150, 0.6)'
  );

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Population',
        data: populations,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
        borderRadius: 4,
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
        y: {
          beginAtZero: true,
          ticks: {
            callback: v => v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v,
            color: '#888',
            font: { size: 11 }
          },
          grid: { color: 'rgba(0,0,0,0.06)' }
        },
        x: {
          ticks: {
            color: '#555',
            font: { size: 11 },
            maxRotation: 35,
            minRotation: 20
          },
          grid: { display: false }
        }
      }
    }
  });
});
