// ============================================================
// DOTCOM DESIGN — SEO Strategy Charts (REBUILT v2)
// Vertical coverage bar chart — 22 verticals, 166 keywords
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  const dotBlue  = '#3F80EA';
  const dotDark  = '#334168';
  const dotRed   = '#EB0052';

  // ---- CHART: Keywords by Trade Vertical ----
  const verticalCtx = document.getElementById('verticalChart');
  if (verticalCtx) {
    verticalCtx.style.height = '380px';

    // Sorted by keyword count descending
    const labels = [
      'General Contractor', 'Home Services', 'Plumbing', 'Roofing',
      'Landscaping', 'Specialty Trades', 'HVAC', 'Remodeling',
      'Electrical', 'Home Builders', 'Pest Control', 'Painting',
      'Handyman', 'Solar', 'Pool & Spa', 'Commercial Construction',
      'Flooring', 'Tree Service', 'Garage Doors', 'Masonry & Concrete',
      'Foundation', 'Fencing'
    ];
    const data = [14, 14, 13, 12, 11, 10, 10, 9, 7, 7, 6, 6, 6, 6, 6, 6, 5, 5, 5, 3, 3, 2];

    const colors = labels.map(function(l, i) {
      if (i < 4) return dotBlue;
      if (i < 10) return dotDark;
      return 'rgba(51,65,104,0.35)';
    });

    new Chart(verticalCtx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Keywords',
          data: data,
          backgroundColor: colors,
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
              label: ctx => ' Keywords: ' + ctx.raw
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: {
              stepSize: 2,
              font: { family: 'Montserrat', size: 11 }
            }
          },
          x: {
            grid: { display: false },
            ticks: {
              font: { family: 'Montserrat', size: 10 },
              maxRotation: 40,
              minRotation: 40,
              display: function() { return window.innerWidth >= 600; }
            }
          }
        }
      }
    });
  }
});
