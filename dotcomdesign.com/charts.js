// ============================================================
// DOTCOM DESIGN — SEO Strategy Charts
// Vertical coverage bar chart (replaces market population chart)
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  const dotBlue  = '#3F80EA';
  const dotDark  = '#334168';
  const dotRed   = '#EB0052';

  // ---- CHART: Keywords by Trade Vertical ----
  const verticalCtx = document.getElementById('verticalChart');
  if (verticalCtx) {
    verticalCtx.style.height = '340px';

    const labels = [
      'General Contractor', 'Plumbing', 'Landscaping', 'Home Services',
      'Roofing', 'Remodeling', 'Painting', 'HVAC',
      'Cleaning', 'Electrical', 'Pest Control', 'Flooring',
      'Tree Service', 'Construction', 'Handyman', 'Concrete', 'Fencing'
    ];
    const data = [19, 12, 12, 12, 10, 10, 10, 9, 9, 8, 7, 7, 6, 6, 5, 4, 4];

    const colors = labels.map(function(l, i) {
      if (i < 4) return dotBlue;
      if (i < 9) return dotDark;
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
              maxRotation: 35,
              minRotation: 35,
              display: function() { return window.innerWidth >= 600; }
            }
          }
        }
      }
    });
  }
});
