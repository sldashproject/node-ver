$(document).ready(function() {
    if ($('#lineChart').length ){
	  var ctx = document.getElementById("lineChart");
	  var lineChart = new Chart(ctx, {
		type: 'line',
		data: {
		  labels: ["January", "February", "March", "April", "May", "June", "July"],
		  datasets: [{
			label: "My First dataset",
			backgroundColor: "rgba(38, 185, 154, 0.31)",
			borderColor: "rgba(38, 185, 154, 0.7)",
			pointBorderColor: "rgba(38, 185, 154, 0.7)",
			pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointBorderWidth: 1,
			data: [31, 74, 6, 39, 20, 85, 7]
		  }, {
			label: "My Second dataset",
			backgroundColor: "rgba(3, 88, 106, 0.3)",
			borderColor: "rgba(3, 88, 106, 0.70)",
			pointBorderColor: "rgba(3, 88, 106, 0.70)",
			pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(151,187,205,1)",
			pointBorderWidth: 1,
			data: [82, 23, 66, 9, 99, 4, 2]
		  }]
		},
	  });
	  
	  var lineHide = $('#chartJSData1');
    	//var ctx = document.getElementById("lineChart");
        lineHide.click(function(){
            lineChart.data.dataset[0].hidden = true;
        });
	}
	
// 	var lineData1Hide = $('#chartJSData1');
// 	lineData1Hide.click(function(){
// 	    var ctx = document.getElementById("lineChart");
// 	    var datasethide = ctx.data.dataset[0];
// 	    datasethide.hide();
	    
// 	    var lineChart = new Chart(ctx, {
// 		type: 'line',
// 		data: {
// 		  labels: ["January", "February", "March", "April", "May", "June", "July"],
// 		  datasets: [{
// 			label: "My Second dataset",
// 			backgroundColor: "rgba(3, 88, 106, 0.3)",
// 			borderColor: "rgba(3, 88, 106, 0.70)",
// 			pointBorderColor: "rgba(3, 88, 106, 0.70)",
// 			pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
// 			pointHoverBackgroundColor: "#fff",
// 			pointHoverBorderColor: "rgba(151,187,205,1)",
// 			pointBorderWidth: 1,
// 			data: [82, 23, 66, 9, 99, 4, 2]
// 		  }]
// 		}
// 	  });
//	});
	
	
});