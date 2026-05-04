// Mid States Wireless V2 - Service Line Volume Chart
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('marketChart');
  if (!canvas) return;

  const serviceLines = [
    'Two-Way Radio',
    'Security Cameras',
    'Managed IT',
    'Access Control',
    'Fleet Upfitting',
    'Cybersecurity',
    'Structured Cabling',
    'Cell Boosters',
    'GPS Systems',
    'Warning Sirens',
    'Low Voltage Wiring',
    'Emergency Comms'
  ];

  const volumes = [49500, 74100, 40700, 14900, 5400, 9900, 4400, 3600, 3600, 1000, 1000, 590];

  const backgroundColors = serviceLines.map((_, i) =>
    i === 0 ? '#e63946' : '#2563eb'
  );

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: serviceLines,
      datasets: [{
        label: 'Monthly Search Volume',
        data: volumes,
        backgroundColor: backgroundColors,
        borderRadius: 4,
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
            label: ctx => ' ' + ctx.parsed.y.toLocaleString() + ' searches/mo'
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { family: 'Montserrat', size: 11, weight: '600' },
            color: '#374151',
            maxRotation: 35,
            minRotation: 20
          }
        },
        y: {
          grid: { color: '#e5e7eb' },
          ticks: {
            font: { family: 'Montserrat', size: 11 },
            color: '#6b7280',
            callback: v => v.toLocaleString()
          }
        }
      }
    }
  });
});
