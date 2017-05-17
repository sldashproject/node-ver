$(document).ready(function () {
    //line Chart
    var mylinechart = Highcharts.chart('mylineChart', {
    	chart: {
    		type: 'line'
    	},
    	title: {
    		text: 'Monthly Average Temperature'
    	},
    	subtitle: {
    		text: 'Source: WorldClimate.com'
    	},
    	xAxis: {
    		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    	},
    	yAxis: {
    		title: {
    			text: 'Temperature (°C)'
    		}
    	},
    	plotOptions: {
    		line: {
    			dataLabels: {
    				enabled: true
    			},
    			enableMouseTracking: false
    		}
    	},
    	series: [{
    		name: 'Tokyo',
    		data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    	}, {
    		name: 'London',
    		data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    	}]
    });
    
    //stacked bar chart
    var mystackbarchart = Highcharts.chart('mybarChart', {
		chart: {
			type: 'column'
		},
		title: {
			text: 'Stacked column chart'
		},
		xAxis: {
			categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Total fruit consumption'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
				}
			}
		},
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 25,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: true,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
			name: 'John',
			data: [5, 3, 4, 7, 2]
		}, {
			name: 'Jane',
			data: [2, 2, 3, 2, 1]
		}, {
			name: 'Joe',
			data: [3, 4, 4, 2, 5]
		}]
	});
	
	// Create the chart
	Highcharts.chart('mybubbleChart', {
	    chart: {
	        type: 'bubble',
	        plotBorderWidth: 1,
	        zoomType: 'xy'
	    },
	
	    legend: {
	        enabled: false
	    },
	
	    title: {
	        text: 'Sugar and fat intake per country'
	    },
	
	    subtitle: {
	        text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
	    },
	
	    xAxis: {
	        gridLineWidth: 1,
	        title: {
	            text: 'Daily fat intake'
	        },
	        labels: {
	            format: '{value} gr'
	        },
	        plotLines: [{
	            color: 'black',
	            dashStyle: 'dot',
	            width: 2,
	            value: 65,
	            label: {
	                rotation: 0,
	                y: 15,
	                style: {
	                    fontStyle: 'italic'
	                },
	                text: 'Safe fat intake 65g/day'
	            },
	            zIndex: 3
	        }]
	    },
	
	    yAxis: {
	        startOnTick: false,
	        endOnTick: false,
	        title: {
	            text: 'Daily sugar intake'
	        },
	        labels: {
	            format: '{value} gr'
	        },
	        maxPadding: 0.2,
	        plotLines: [{
	            color: 'black',
	            dashStyle: 'dot',
	            width: 2,
	            value: 50,
	            label: {
	                align: 'right',
	                style: {
	                    fontStyle: 'italic'
	                },
	                text: 'Safe sugar intake 50g/day',
	                x: -10
	            },
	            zIndex: 3
	        }]
	    },
	
	    tooltip: {
	        useHTML: true,
	        headerFormat: '<table>',
	        pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
	            '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
	            '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
	            '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
	        footerFormat: '</table>',
	        followPointer: true
	    },
	
	    plotOptions: {
	        series: {
	            dataLabels: {
	                enabled: true,
	                format: '{point.name}'
	            }
	        }
	    },
	
	    series: [{
	        data: [
	            { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
	            { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
	            { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
	            { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
	            { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
	            { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
	            { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
	            { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
	            { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
	            { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
	            { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
	            { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
	            { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
	            { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
	            { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
	        ]
	    }]
	});
	
	// Create the chart
	Highcharts.chart('mypieChart', {
	    chart: {
	        type: 'pie'
	    },
	    title: {
	        text: 'Browser market shares. January, 2015 to May, 2015'
	    },
	    subtitle: {
	        text: 'Click the slices to view versions. Source: netmarketshare.com.'
	    },
	    plotOptions: {
	        series: {
	            dataLabels: {
	                enabled: true,
	                format: '{point.name}: {point.y:.1f}%'
	            }
	        }
	    },
	
	    tooltip: {
	        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
	        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
	    },
	    series: [{
	        name: 'Brands',
	        colorByPoint: true,
	        data: [{
	            name: 'Microsoft Internet Explorer',
	            y: 56.33,
	            drilldown: 'Microsoft Internet Explorer'
	        }, {
	            name: 'Chrome',
	            y: 24.03,
	            drilldown: 'Chrome'
	        }, {
	            name: 'Firefox',
	            y: 10.38,
	            drilldown: 'Firefox'
	        }, {
	            name: 'Safari',
	            y: 4.77,
	            drilldown: 'Safari'
	        }, {
	            name: 'Opera',
	            y: 0.91,
	            drilldown: 'Opera'
	        }, {
	            name: 'Proprietary or Undetectable',
	            y: 0.2,
	            drilldown: null
	        }]
	    }],
	    drilldown: {
	        series: [{
	            name: 'Microsoft Internet Explorer',
	            id: 'Microsoft Internet Explorer',
	            data: [
	                ['v11.0', 24.13],
	                ['v8.0', 17.2],
	                ['v9.0', 8.11],
	                ['v10.0', 5.33],
	                ['v6.0', 1.06],
	                ['v7.0', 0.5]
	            ]
	        }, {
	            name: 'Chrome',
	            id: 'Chrome',
	            data: [
	                ['v40.0', 5],
	                ['v41.0', 4.32],
	                ['v42.0', 3.68],
	                ['v39.0', 2.96],
	                ['v36.0', 2.53],
	                ['v43.0', 1.45],
	                ['v31.0', 1.24],
	                ['v35.0', 0.85],
	                ['v38.0', 0.6],
	                ['v32.0', 0.55],
	                ['v37.0', 0.38],
	                ['v33.0', 0.19],
	                ['v34.0', 0.14],
	                ['v30.0', 0.14]
	            ]
	        }, {
	            name: 'Firefox',
	            id: 'Firefox',
	            data: [
	                ['v35', 2.76],
	                ['v36', 2.32],
	                ['v37', 2.31],
	                ['v34', 1.27],
	                ['v38', 1.02],
	                ['v31', 0.33],
	                ['v33', 0.22],
	                ['v32', 0.15]
	            ]
	        }, {
	            name: 'Safari',
	            id: 'Safari',
	            data: [
	                ['v8.0', 2.56],
	                ['v7.1', 0.77],
	                ['v5.1', 0.42],
	                ['v5.0', 0.3],
	                ['v6.1', 0.29],
	                ['v7.0', 0.26],
	                ['v6.2', 0.17]
	            ]
	        }, {
	            name: 'Opera',
	            id: 'Opera',
	            data: [
	                ['v12.x', 0.34],
	                ['v28', 0.24],
	                ['v27', 0.17],
	                ['v29', 0.16]
	            ]
	        }]
	    }
	});
	
	//dynamic Chart
	var chart = Highcharts.chart('myDynamicChart', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, 
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series0 = this.series[0];
                    var series1 = this.series[1];
                    var series2 = this.series[2];
                    var series3 = this.series[3];
                    var series4 = this.series[4];
                    var series5 = this.series[5];
                    
                    setInterval(function () {
                        var a = (new Date()).getTime(), // current time
                            //b = Math.floor((Math.random() * (100 - 0 + 1)) + 1);
                            b = Math.floor((Math.random() * (100 - 80)+ 80));
                        series0.addPoint([a, b], true, true);
                        
                        var c = (new Date()).getTime(), // current time
                            d = Math.floor((Math.random() * (90 - 70)+ 70));
                        series1.addPoint([c, d], true, true);
                        
                        var e = (new Date()).getTime(), // current time
                            f = Math.floor((Math.random() * (80 - 60) + 60));
                        series2.addPoint([e, f], true, true);
                        
                        var g = (new Date()).getTime(), // current time
                            h = Math.floor((Math.random() * (70 - 50) + 50));
                        series3.addPoint([g, h], true, true);
                        
                        var i = (new Date()).getTime(), // current time
                            j = Math.floor((Math.random() * (60 - 40) + 40));
                        series4.addPoint([i, j], true, true);
                        
                        var k = (new Date()).getTime(), // current time
                            l = Math.floor((Math.random() * (50 - 30) + 30));
                        series5.addPoint([k, l], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: 'Live random data'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 1500
        },
        yAxis: {
        		min: 0,
            max: 100,
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        plotOptions: {
        		series: {
            		marker: {
                		enabled: false
                }
            }
        },
        series: [{
            name: 'Random data0',
            selected: true,
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        //y: Math.floor((Math.random() * (100 - 0 + 1)) + 1)
                        y: Math.floor((Math.random() * (100 - 80) + 80))
                        //y: Math.random()
                    });
                }
                return data;
            }())
						},
          {
              name: 'Random data1',
              selected: false,
              data: (function () {
                  // generate an array of random data
                  var data = [],
                      time = (new Date()).getTime(),
                      i;

                  for (i = -19; i <= 0; i += 1) {
                      data.push({
                          x: time + i * 1000,
                          y: Math.floor((Math.random() * (90 - 70) + 70))
                      });
                  }
                  return data;
              }())
          },
          {
              name: 'Random data2',
              selected: false,
              data: (function () {
                  // generate an array of random data
                  var data = [],
                      time = (new Date()).getTime(),
                      i;

                  for (i = -19; i <= 0; i += 1) {
                      data.push({
                          x: time + i * 1000,
                          y: Math.floor((Math.random() * (80 - 60) + 60))
                      });
                  }
                  return data;
              }())
          },
          {
              name: 'Random data3',
              selected: false,
              data: (function () {
                  // generate an array of random data
                  var data = [],
                      time = (new Date()).getTime(),
                      i;

                  for (i = -19; i <= 0; i += 1) {
                      data.push({
                          x: time + i * 1000,
                          y: Math.floor((Math.random() * (70 - 50) + 50))
                      });
                  }
                  return data;
              }())
          },
          {
              name: 'Random data4',
              selected: false,
              data: (function () {
                  // generate an array of random data
                  var data = [],
                      time = (new Date()).getTime(),
                      i;

                  for (i = -19; i <= 0; i += 1) {
                      data.push({
                          x: time + i * 1000,
                          y: Math.floor((Math.random() * (60 - 40) + 40))
                      });
                  }
                  return data;
              }())
          },
          {
              name: 'Random data5',
              selected: false,
              data: (function () {
                  // generate an array of random data
                  var data = [],
                      time = (new Date()).getTime(),
                      i;

                  for (i = -19; i <= 0; i += 1) {
                      data.push({
                          x: time + i * 1000,
                          y: Math.floor((Math.random() * (50 - 30) + 30))
                      });
                  }
                  return data;
              }())
        }]
    });

    //setting action
    var lineTokyoShow = $('#lineTokyoShow');
    lineTokyoShow.click(function(){
        let series = mylinechart.series[0];
        series.show();
    });
    
    var lineTokyoHide = $('#lineTokyoHide');
    lineTokyoHide.click(function(){
        let series = mylinechart.series[0];
        series.hide();
    });
    
    var lineLondonShow = $('#lineLondonShow');
    lineLondonShow.click(function() {
        let series = mylinechart.series[1];
        series.show();
    });
    
    var lineLondonHide = $('#lineLondonHide');
    lineLondonHide.click(function() {
        let series = mylinechart.series[1];
        series.hide();
    });
    
    var barAddSeries = $('#barAddSeries');
    barAddSeries.click(function() {
        let series0 = mystackbarchart.series[0];
		series0.addPoint(3);
		let series1 = mystackbarchart.series[1];
		series1.addPoint(2);
		let series2 = mystackbarchart.series[2];
		series2.addPoint(4);
		
		let cate = mystackbarchart.xAxis[0].categories;
		cate.push('StrawBerries');
		mystackbarchart.xAxis[0].setCategories(cate, true);
		mystackbarchart.redraw();
    });
    
    var barDeleteSeries = $('#barDeleteSeries');
    barDeleteSeries.click(function() {
    	let series0 = mystackbarchart.series[0];
		series0.removePoint(series0.data.length-1);
		let series1 = mystackbarchart.series[1];
		series1.removePoint(series1.data.length-1);
		let series2 = mystackbarchart.series[2];
		series2.removePoint(series2.data.length-1);
		
		let cate = mystackbarchart.xAxis[0].categories;
		cate.splice(cate.length-1,1);
		mystackbarchart.xAxis[0].setCategories(cate, true);
		mystackbarchart.redraw();
    });
    
    var trans1 = $("#trans1");
    trans1.mouseover(function(){
    	$(".highcharts-series-1").css("opacity","0.2");
        $(".highcharts-series-2").css("opacity","0.2");
        $(".highcharts-series-3").css("opacity","0.2");
        $(".highcharts-series-4").css("opacity","0.2");
        $(".highcharts-series-5").css("opacity","0.2");
    });
    trans1.mouseleave(function(){
    	$(".highcharts-series-1").css("opacity","1");
        $(".highcharts-series-2").css("opacity","1");
        $(".highcharts-series-3").css("opacity","1");
        $(".highcharts-series-4").css("opacity","1");
        $(".highcharts-series-5").css("opacity","1");
    });
    
});