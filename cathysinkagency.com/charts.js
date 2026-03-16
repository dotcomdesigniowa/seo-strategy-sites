// ─────────────────────────────────────────────────────────────────────────────
// CATHY SINK INSURANCE AGENCY - Charts
// Market Population Bar Chart - Southwest Florida
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('marketChart');
  if (!ctx) return;

  // All markets sorted by population descending
  var markets = [
    { city: 'Cape Coral',     pop: 251819, tier: 1, hq: false, selected: true  },
    { city: 'Lehigh Acres',   pop: 125000, tier: 2, hq: false, selected: false },
    { city: 'Fort Myers',     pop: 106233, tier: 1, hq: true,  selected: true  },
    { city: 'Bonita Springs', pop:  58724, tier: 1, hq: false, selected: true  },
    { city: 'Estero',         pop:  39137, tier: 2, hq: false, selected: true  },
    { city: 'Naples',         pop:  22000, tier: 2, hq: false, selected: true  },
    { city: 'Marco Island',   pop:  17000, tier: 2, hq: false, selected: false },
    { city: 'Fort Myers Beach', pop: 5170, tier: 2, hq: false, selected: false },
    { city: 'Sanibel',        pop:   6342, tier: 3, hq: false, selected: false },
  ];

  // Sort by population descending, take top 9
  markets.sort(function(a, b) { return b.pop - a.pop; });
  var top = markets.slice(0, 9);

  var labels = top.map(function(m) { return m.city; });
  var data   = top.map(function(m) { return m.pop; });

  // Color coding:
  // HQ city = #e63946 (red accent)
  // Selected Tier 1 = #1d3461 (dark navy)
  // Selected Tier 2 = #334168 (medium navy)
  // Not selected = #8a9bbf (muted blue-grey)
  var colors = top.map(function(m) {
    if (m.hq)                          return '#e63946';
    if (m.selected && m.tier === 1)    return '#1d3461';
    if (m.selected && m.tier === 2)    return '#334168';
    return '#8a9bbf';
  });

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
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              return ' ' + ctx.parsed.y.toLocaleString() + ' residents';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(v) {
              return v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v;
            },
            color: '#8a9bbf',
            font: { family: 'Montserrat', size: 11 }
          },
          grid: { color: 'rgba(255,255,255,0.05)' }
        },
        x: {
          ticks: {
            color: '#c8d3ea',
            font: { family: 'Montserrat', size: 11 },
            maxRotation: 30,
            minRotation: 0
          },
          grid: { display: false }
        }
      }
    }
  });
});
