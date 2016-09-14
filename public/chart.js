// require chart.js
// var Chart = require('src/chart.js');
// var myChart = new Chart({...});


const CHART = document.getElementById("lineChart");
console.log(CHART);

let lineChart = new Chart(CHART, {
	type: 'line',
	data: {
		    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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
		            data: [65, 59, 80, 81, 56, 55, 40],
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
		            data: [55, 65, 85, 85, 75, 85, 40],
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


// module.exports =  Chart;