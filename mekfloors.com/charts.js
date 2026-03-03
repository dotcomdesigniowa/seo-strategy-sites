// =============================================
// DOTCOM DESIGN -- SEO STRATEGY CHARTS
// Client: MEK Interiors & Floors
// Full-width bar chart, horizontal labels
// =============================================
document.addEventListener("DOMContentLoaded", function () {
  var dotBlue  = "#3F80EA";
  var dotDark  = "#334168";
  var dotRed   = "#EB0052";

  // ---- CHART: Market Population Bar Chart (full width, horizontal labels) ----
  var marketCtx = document.getElementById("marketChart");
  if (marketCtx) {
    marketCtx.style.height = "320px";
    new Chart(marketCtx, {
      type: "bar",
      data: {
        labels: [
          "Houston", "Cypress", "Pasadena", "Pearland", "Sugar Land",
          "League City", "The Woodlands", "Conroe", "Baytown", "Missouri City"
        ],
        datasets: [{
          label: "Population",
          data: [2304580, 220000, 152000, 130000, 118000, 115000, 115000, 99000, 78000, 75000],
          backgroundColor: [
            dotRed,
            "rgba(51,65,104,0.35)",
            "rgba(51,65,104,0.35)",
            "rgba(51,65,104,0.35)",
            "rgba(51,65,104,0.25)",
            "rgba(51,65,104,0.25)",
            "rgba(51,65,104,0.25)",
            "rgba(51,65,104,0.20)",
            "rgba(51,65,104,0.20)",
            "rgba(51,65,104,0.20)",
          ],
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
              title: function(ctx) { return ctx[0].label; },
              label: function(ctx) {
                var statuses = [
                  "HQ -- Selected (Tier 1)",
                  "Not Selected (Tier 1)",
                  "Not Selected (Tier 1)",
                  "Not Selected (Tier 1)",
                  "Not Selected (Tier 1)",
                  "Not Selected (Tier 1)",
                  "Not Selected (Tier 1)",
                  "Not Selected (Tier 1)",
                  "Not Selected (Tier 1)",
                  "Not Selected (Tier 1)"
                ];
                return [
                  " Population: " + ctx.raw.toLocaleString(),
                  " Status: " + statuses[ctx.dataIndex]
                ];
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: "rgba(0,0,0,0.05)" },
            ticks: {
              callback: function(val) { return val >= 1000000 ? (val / 1000000).toFixed(1) + "M" : val >= 1000 ? (val / 1000).toFixed(0) + "K" : val; },
              font: { family: "Montserrat", size: 11 }
            }
          },
          x: {
            grid: { display: false },
            ticks: {
              font: { family: "Montserrat", size: 11 },
              maxRotation: 0,
              minRotation: 0,
              display: function() { return window.innerWidth >= 600; }
            }
          }
        }
      }
    });
  }
});
