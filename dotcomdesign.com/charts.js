// ============================================================
// DOTCOM DESIGN SEO Strategy — Charts.js (v3, 36 verticals)
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  const dotBlue  = '#3F80EA';
  const dotDark  = '#334168';
  const dotRed   = '#EB0052';

  const verticalLabels = [
    'General Contractor', 'Plumbing', 'Roofing', 'HVAC', 'Landscaping',
    'Remodeling', 'Electrical', 'Home Services', 'Pest Control', 'Painting',
    'Moving Companies', 'Commercial Construction', 'Home Builders', 'Pressure Washing',
    'Solar', 'Restoration & Remediation', 'Pool & Spa', 'Locksmith', 'Flooring',
    'Handyman', 'Masonry & Concrete', 'Windows & Doors', 'Junk Removal', 'Tree Service',
    'Appliance Repair', 'Security Systems', 'Garage Doors', 'Fencing',
    'Foundation & Waterproofing', 'Chimney', 'Drywall & Insulation', 'Epoxy Flooring',
    'Irrigation & Sprinkler', 'Gutters', 'Septic & Drain', 'Siding'
  ];

  const verticalCounts = [
    34, 25, 21, 17, 16,
    16, 16, 12, 10, 10,
    9, 9, 7, 7,
    6, 6, 6, 6, 6,
    6, 6, 5, 5, 5,
    4, 3, 3, 3,
    3, 1, 1, 1,
    1, 1, 1, 1
  ];

  const barColors = verticalCounts.map(function(c) {
    if (c >= 20) return dotBlue;
    if (c >= 10) return dotDark;
    if (c >= 5) return '#5B7FBF';
    return 'rgba(63,128,234,0.45)';
  });

  const ctx = document.getElementById('verticalChart');
  if (!ctx) return;

  // Set chart container height for 36 horizontal bars
  var container = ctx.closest('.chart-container');
  if (container) { container.style.height = '900px'; }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: verticalLabels,
      datasets: [{
        label: 'Keywords',
        data: verticalCounts,
        backgroundColor: barColors,
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
            label: function(ctx) {
              return ' ' + ctx.parsed.x + ' keywords';
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            font: { family: 'Montserrat', size: 11 },
            color: '#6B7280',
            stepSize: 5,
          }
        },
        y: {
          grid: { display: false },
          ticks: {
            font: { family: 'Montserrat', size: 11 },
            color: '#334168',
          }
        }
      }
    }
  });

});
