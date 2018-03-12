var lineChartData = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [{
        label: "Global Pregnancy Test Market",
          fillColor: "rgba(255,255,255,0)",
          strokeColor: "rgba(219, 77, 255,1)",
          pointColor: "rgba(219, 77, 255,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(219, 77, 255,1)",
          data: ["1165.24", "1210.3", "1289.489", "1367.43", "1401.3", "1458.6", "1503.7", "1564.7"]

  }, {
      label: "North-American Pregnancy Test Market",
          fillColor: "rgba(255,255,255,0)",
          strokeColor: "rgba(82,185,159,1)",
          pointColor: "rgba(82,185,159,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(82,185,159,1)",
          data: ["442.81", "464.32", "490.82", "500.32", "510.95", "536.74", "554.89", "576.62"]

  }, {
                  label: "Europe Pregnancy Test Market",
          fillColor: "rgba(255,255,255,0)",
          strokeColor: "rgba(242,175,62,1)",
          pointColor: "rgba(242,175,62,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(242,175,62,1)",
          data: ["256.3", "264.3", "274.5", "285.6", "297.4", "308.2", "325.3", "342.3"]

          
  }, {
      label: "Asia-Pacific Pregnancy Test Market",
          fillColor: "rgba(255,255,255,0)",
          strokeColor: "rgba(236,83,62,1)",
          pointColor: "rgba(236,83,62,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(236,83,62,1)",
          data: ["198.1", "206.4", "211.5", "237.9", "248.2", "267.3", "275.7", "281.8"]

          
  }]


}

window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
            responsive: true
    });
}