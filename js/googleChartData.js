$(document).ready(function () {

    // Pie Chart
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});
    
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawPieChart);
    
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawPieChart() {
    
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);
        
        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night'};
        
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
        chart.draw(data, options);
    }
          
    // Line Chart      
    //google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawLineChart);
    
    function drawLineChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
        
        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        
        var chart = new google.visualization.LineChart(document.getElementById('line_chart'));
        
        chart.draw(data, options);
    }
    
    // Scatter Chart
    //google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawScatterChart);
    
    function drawScatterChart() {
        var data = google.visualization.arrayToDataTable([
          ['Age', 'Weight'],
          [ 8,      12],
          [ 4,      5.5],
          [ 11,     14],
          [ 4,      5],
          [ 3,      3.5],
          [ 6.5,    7]
        ]);
        
        var options = {
          title: 'Age vs. Weight comparison',
          hAxis: {title: 'Age', minValue: 0, maxValue: 15},
          vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
          legend: 'none'
        };
        
        var chart = new google.visualization.ScatterChart(document.getElementById('scatter_chart'));
        
        chart.draw(data, options);
    }
    
    //google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Mon', 20, 28, 38, 45],
        ['Tue', 31, 38, 55, 66],
        ['Wed', 50, 55, 77, 80],
        ['Thu', 77, 77, 66, 50],
        ['Fri', 68, 66, 22, 15]
        // Treat first row as data as well.
      ], true);

      var options = {
        legend:'none'
      };

      var chart = new google.visualization.CandlestickChart(document.getElementById('candleStict_chart'));

      chart.draw(data, options);
  }
});