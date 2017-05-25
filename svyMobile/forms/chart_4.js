/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"AB868712-E530-4AF1-BC09-2300F2DC6626"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event);
	//Your data node object which requires a type and the data.
	/**
	 * @properties={typeid:35,uuid:"63796707-1832-4650-A4C1-0D847CC7C485",variableType:-4}
	 */
	var data = {
		type: 'line',
		data: {
			labels: ["1", "2", "3", "4","5","6","7", "8", "9", "10","11","12"],
			datasets: [{
				label: "DS 1",

				// Boolean - if true fill the area under the line
				fill: true,

				// String - the color to fill the area under the line with if fill is true
				backgroundColor: "rgba(70,191,189, 0.2)",

				// The properties below allow an array to be specified to change the value of the item at the given index

				// String or array - Line color
				borderColor: "#46BFBD",

				// String - cap style of the line. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap
				borderCapStyle: 'butt',

				// Array - Length and spacing of dashes. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
				borderDash: [],

				// Number - Offset for line dashes. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
				borderDashOffset: 0.0,

				// String - line join style. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
				borderJoinStyle: 'miter',

				// String or array - Point stroke color
				pointBorderColor: "rgba(220,220,220,0.1)",

				// String or array - Point fill color
				pointBackgroundColor: "#FDB45C",

				// Number or array - Stroke width of point border
				pointBorderWidth: 1,

				// Number or array - Radius of point when hovered
				pointHoverRadius: 5,

				// String or array - point background color when hovered
				pointHoverBackgroundColor: "rgba(220,220,220,0.5)",

				// Point border color when hovered
				pointHoverBorderColor: "rgba(220,220,220,1)",

				// Number or array - border width of point when hovered
				pointHoverBorderWidth: 2,

				// Tension - bezier curve tension of the line. Set to 0 to draw straight Wlines connecting points
				tension: 0.1,

				// The actual data
				data: [0, Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*50).toFixed(0)],

				// String - If specified, binds the dataset to a certain y-axis. If not specified, the first y-axis is used.
				yAxisID: "y-axis-1"
			}, {
				label: "DS 2",
				fill: false,
				backgroundColor: "#FF5A5E",
				borderColor: "#FF5A5E",
				pointBorderColor: "rgba(220,220,220,1)",
				pointBackgroundColor: "#000",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(220,220,220,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				data: [0, Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*10).toFixed(0),Number(Math.random()*50).toFixed(0)]
			}]
		}
	}

	var options = {
		responsive: false,
		tooltips: {
			mode: 'label'
		},
		elements: {
			line: {
				fill: false
			}
		},
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					display: true
				},
				labels: {
					show: true
				},
				scaleLabel: {
					display: false
				}
			}],
			yAxes: [{
				type: "linear",
				display: true,
				position: "left",
				id: "y-axis-1",
				gridLines: {
					display: false
				},
				labels: {
					show: true
				},
				scaleLabel: {
					display: false
				}
			}]
		}
	}

	//Initialize the chart by using setData
	elements.chart.setData(data);
	elements.chart.setOptions(options);
}
