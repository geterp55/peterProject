// require chart.js
// var Chart = require('src/chart.js');
// var myChart = new Chart({...});


const CHART = document.getElementById("lineChart");
console.log(CHART);

// lineChart.data.datasets[0].data[0];
// lineChart.data.datasets[0].data[1];
// lineChart.data.datasets[0].data[2];
// lineChart.data.datasets[0].data[3];





$.ajax({
	url: '/sales/',
	success: function(result) {
		// "_id" : ObjectId("57dd092a6aeb44a01806e63b"
 //    var myData2016 = [];
	
	// (function(){

	// 	for(var i = 0; i < result.length;i++){
	// 		myData2016[i] = result[i].revenue;
	// 	}

	// }) ();
	
	// $(document).ready(function(){

	let lineChart = new Chart(CHART, {
	type: 'line',
	data: {
		    labels: [1,2,3,4,5,6,7,8,9],
		    datasets: [
		        {
		            label: "2016 Sales",
		            fill: false,
		            lineTension: 0.1,
		            backgroundColor: "rgba(75,192,192,0.4)",
		            borderColor: "rgba(180, 33, 14, 1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgba(180, 33, 14, 1)",
		            pointBackgroundColor: "#b4210e",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 1,
		            pointHitRadius: 10,
		            data: result.myData2016,
		            spanGaps: false,
		        },
		        {
		            label: "2015 Sales",
		            fill: false,
		            lineTension: 0.1,
		            backgroundColor: "rgba(75,192,192,0.4)",
		            borderColor: "rgba(85,192,192,1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgba(65,195,195,1)",
		            pointBackgroundColor: "#fff",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 1,
		            pointHitRadius: 10,
		            data: result.myData2015,
		            spanGaps: false,
		        }


		    ]
		  },
		  options: {
		  	scales: {
		  		yAxes: [{
		  			ticks: {
		  				beginAtZero: true
		  			}
		  		}]
		  	}
		  }  
		});


		}
	}); //ajax call

console.log()
 	


// module.exports =  Chart;