// ============================================================
// PRECISION PEST CONTROL - CHARTS
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("market-chart");
  if (!ctx) return;

  const selected = MARKET_DATA.filter(m => m.selected).sort((a, b) => b.pop - a.pop);

  const labels = selected.map(m => m.city);
  const populations = selected.map(m => m.pop);
  const colors = selected.map(m => {
    if (m.city === "Port Deposit") return "#e74c3c"; // HQ - red
    if (m.pop >= 20000) return "#1a2a4a";            // Tier 1 - dark navy
    return "#2e6da4";                                 // Tier 2 - blue
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Population",
        data: populations,
        backgroundColor: colors,
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
            label: ctx => " Pop. " + ctx.parsed.y.toLocaleString()
          }
        }
      },
      scales: {
        x: {
          ticks: {
            font: { size: 11 },
            maxRotation: 35,
            minRotation: 20
          },
          grid: { display: false }
        },
        y: {
          ticks: {
            callback: v => v >= 1000 ? (v / 1000).toFixed(0) + "k" : v,
            font: { size: 11 }
          },
          grid: { color: "rgba(0,0,0,0.06)" }
        }
      }
    }
  });
});
