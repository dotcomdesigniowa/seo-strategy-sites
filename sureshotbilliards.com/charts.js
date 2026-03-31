// ============================================================
// SURE SHOT BILLIARDS & DARTS — MARKET POPULATION CHART
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('marketChart');
  if (!ctx) return;

  const labels = ['Yakima, WA', 'Kennewick, WA', 'Pasco, WA', 'Richland, WA', 'Walla Walla, WA'];
  const populations = [96000, 84347, 82000, 60560, 34000];
  const colors = ['#334168', '#334168', '#334168', '#334168', '#6B7FA3'];
  const borderColors = ['#1a2540', '#1a2540', '#1a2540', '#1a2540', '#4a5f8a'];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Population',
        data: populations,
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 1,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              return ' Population: ' + context.parsed.y.toLocaleString('en-US');
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { family: 'Montserrat', size: 11 },
            color: '#64748b'
          }
        },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.06)' },
          ticks: {
            font: { family: 'Montserrat', size: 11 },
            color: '#64748b',
            callback: function(value) {
              if (value >= 1000) return (value / 1000).toFixed(0) + 'K';
              return value;
            }
          }
        }
      }
    }
  });
});
