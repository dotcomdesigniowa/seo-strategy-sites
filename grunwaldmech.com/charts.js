// ============================================================
// charts.js - Grunwald Mechanical Contractors & Engineers
// Market Population Chart (Top 10 Markets)
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('marketChart');
  if (!ctx) return;

  const labels = [
    'Omaha, NE',
    'Lincoln, NE',
    'Bellevue, NE',
    'Council Bluffs, IA',
    'Fremont, NE',
    'Papillion, NE',
    'La Vista, NE',
    'Gretna, NE',
    'Elkhorn, NE',
    'Blair, NE'
  ];

  const populations = [486051, 295000, 65000, 62000, 27000, 26000, 18000, 15000, 11000, 8000];

  // Color: selected markets in brand blue, HQ in accent orange
  const backgroundColors = [
    '#FF6B35', // Omaha (HQ) - accent orange
    '#1B3A6B', // Lincoln
    '#1B3A6B', // Bellevue
    '#1B3A6B', // Council Bluffs
    '#2E5FA3', // Fremont (Tier 2)
    '#2E5FA3', // Papillion
    '#2E5FA3', // La Vista
    '#2E5FA3', // Gretna
    '#2E5FA3', // Elkhorn
    '#2E5FA3', // Blair
  ];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Population',
        data: populations,
        backgroundColor: backgroundColors,
        borderRadius: 4,
        borderSkipped: false,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              return ' Population: ' + context.parsed.x.toLocaleString();
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.06)' },
          ticks: {
            callback: function(value) {
              if (value >= 1000) return (value / 1000).toFixed(0) + 'K';
              return value;
            },
            font: { family: 'Montserrat', size: 11 }
          }
        },
        y: {
          grid: { display: false },
          ticks: {
            font: { family: 'Montserrat', size: 12, weight: '600' }
          }
        }
      }
    }
  });
});
