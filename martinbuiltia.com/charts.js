// ============================================================
// Charts.js — Market Population Bar Chart
// Client: Martin Built Homes | martinbuiltia.com
// ============================================================

(function() {
  var ctx = document.getElementById('marketChart');
  if (!ctx) return;

  var markets = [
    { city: "Cedar Rapids",  pop: 137727, selected: true  },
    { city: "Iowa City",     pop:  76537, selected: false },
    { city: "Marion",        pop:  42927, selected: true  },
    { city: "Coralville",    pop:  24322, selected: true  },
    { city: "North Liberty", pop:  22276, selected: true  },
    { city: "Hiawatha",      pop:   7465, selected: true  },
    { city: "Mount Vernon",  pop:   4502, selected: true  },
    { city: "Robins",        pop:   3360, selected: false },
    { city: "Fairfax",       pop:   2942, selected: false },
  ];

  var labels = markets.map(function(m) { return m.city; });
  var data   = markets.map(function(m) { return m.pop; });
  var colors = markets.map(function(m) {
    return m.selected ? '#C8102E' : '#CBD5E1';
  });
  var borderColors = markets.map(function(m) {
    return m.selected ? '#9B0D23' : '#94A3B8';
  });

  // Shorten long labels on mobile
  function mobileLabel(city) {
    if (window.innerWidth < 600) {
      var parts = city.split(' ');
      return parts.length > 1 ? parts[0] : city;
    }
    return city;
  }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Population',
        data: data,
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
              var m = markets[context.dataIndex];
              var status = m.selected ? 'Selected' : 'Not Selected';
              return [
                'Population: ' + context.parsed.y.toLocaleString(),
                'Status: ' + status
              ];
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            font: { family: 'Montserrat', size: 11 },
            color: '#334155',
            callback: function(val, index) {
              return mobileLabel(labels[index]);
            }
          },
          grid: { display: false }
        },
        y: {
          ticks: {
            font: { family: 'Montserrat', size: 11 },
            color: '#64748B',
            callback: function(value) {
              if (value >= 1000) return (value / 1000).toFixed(0) + 'k';
              return value;
            }
          },
          grid: { color: '#F1F5F9' },
          title: {
            display: true,
            text: 'Population',
            font: { family: 'Montserrat', size: 12, weight: '600' },
            color: '#64748B'
          }
        }
      }
    }
  });
})();
