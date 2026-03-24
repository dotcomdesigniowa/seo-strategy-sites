// ============================================================
// Charts.js - Kitchen Cabinets Etc 2 | Gold Canyon, AZ
// Market population bar chart
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('marketChart');
  if (!ctx) return;

  const allMarkets = [
    { city: 'Mesa',             pop: 524892, selected: true  },
    { city: 'Gilbert',          pop: 292116, selected: true  },
    { city: 'Chandler',         pop: 286342, selected: true  },
    { city: 'Scottsdale',       pop: 246435, selected: false },
    { city: 'Tempe',            pop: 193336, selected: false },
    { city: 'Queen Creek',      pop:  81778, selected: true  },
    { city: 'Apache Junction',  pop:  41240, selected: true  },
    { city: 'Florence',         pop:  24175, selected: false },
    { city: 'Fountain Hills',   pop:  24163, selected: false },
    { city: 'Gold Canyon',      pop:  15370, selected: false },
  ];

  const labels = allMarkets.map(m => m.city);
  const data   = allMarkets.map(m => m.pop);
  const colors = allMarkets.map(m => m.selected ? '#2563eb' : '#cbd5e1');
  const borders = allMarkets.map(m => m.selected ? '#1d4ed8' : '#94a3b8');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Population',
        data: data,
        backgroundColor: colors,
        borderColor: borders,
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
            callback: v => v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v
          },
          grid: { color: '#f1f5f9' }
        },
        x: {
          grid: { display: false },
          ticks: { font: { size: 11 } }
        }
      }
    }
  });
});
