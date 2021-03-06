/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"47C364E0-1036-48D9-829D-7E9E1E74835E"}
 */
function onShow(firstShow, event) {
	randomizeAndDraw();
}
/**
 * @properties={typeid:24,uuid:"8D65AA24-5E1F-4EF4-97C8-9EB6C5FA65D6"}
 */
function randomizeAndDraw() {
	/**
	 * @properties={typeid:35,uuid:"63796707-1832-4650-A4C1-0D847CC7C485",variableType:-4}
	 */
	var data = {
		type: 'pie',
		data: {
			labels: ["Red",
			"Green",
			"Yellow", "Black"],
			datasets: [{
				data: [scopes.chartExamples.randomIntFromInterval(0,100), scopes.chartExamples.randomIntFromInterval(0,100), scopes.chartExamples.randomIntFromInterval(0,100), scopes.chartExamples.randomIntFromInterval(0,100)],
				backgroundColor: ["#F7464A",
				"#46BFBD",
				"#FDB45C", "black"],
				hoverBackgroundColor: ["#FF5A5E",
				"#5AD3D1",
				"#FFC870", "black"]
			}]
		}
	}
	
	var options = {
		title: {
			display: true,
			text: 'Pie Chart'
		}
	}
	//Initialize the chart by using setData
	elements.chart.setData(data);
	elements.chart.setOptions(options);
}
