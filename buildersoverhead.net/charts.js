// charts.js — Builders Overhead Door
// Kansas City Metro market population bar chart
document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.getElementById('marketChart');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Kansas City, MO', 'Overland Park, KS', 'Independence, MO', "Lee's Summit, MO", 'Blue Springs, MO'],
      datasets: [{
        label: 'Population',
        data: [508090, 200306, 121740, 103656, 61246],
        backgroundColor: [
          '#334168',
          '#334168',
          '#334168',
          '#334168',
          '#EB0052'
        ],
        borderRadius: 4,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              return ' Population: ' + ctx.parsed.y.toLocaleString();
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { family: 'Montserrat', size: 11 },
            color: '#334168'
          }
        },
        y: {
          grid: { color: '#f0f0f0' },
          ticks: {
            font: { family: 'Montserrat', size: 11 },
            color: '#334168',
            callback: function(val) {
              if (val >= 1000) return (val / 1000).toFixed(0) + 'k';
              return val;
            }
          }
        }
      }
    }
  });
});
