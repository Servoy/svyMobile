/**
 * @properties={typeid:24,uuid:"7136C636-4587-44D6-B86B-8F84A250A350"}
 */
function randomizeAndDraw() {
	function randomScalingFactor() {
		return (Math.random() * 5).toFixed(0);
	}
	var options = {
		responsive: true,
		title: {
			display: true,
			text: "Line Chart - Stacked Area"
		},
		tooltips: {
			mode: 'index'
		},
		hover: {
			mode: 'index'
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: false,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				stacked: true,
				scaleLabel: {
					display: false,
					labelString: 'Value'
				}
			}]
		}

	}

	/**
	 * @properties={typeid:35,uuid:"63796707-1832-4650-A4C1-0D847CC7C485",variableType:-4}
	 */
	var data = {
		type: 'line',
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "Dataset 1",
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgb(255, 99, 132)',
				data: [randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()]
			}, {
				label: "Dataset 2",
				borderColor: 'rgb(54, 162, 235)',
				backgroundColor: 'rgb(54, 162, 235)',
				data: [randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()]
			}, {
				label: "Dataset 3",
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: 'rgb(75, 192, 192)',
				data: [randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()]
			}, {
				label: "Dataset 4",
				borderColor: 'rgb(255, 205, 86)',
				backgroundColor: 'rgb(255, 205, 86)',
				data: [randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()]
			}]
		}
	};
	//Initialize the chart by using setData
	elements.chart.setData(data);
	elements.chart.setOptions(options);
}
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
}


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C1ED22A6-44AE-4522-93E3-0C95B7D929E4"}
 */
function onLoad(event) {
	randomizeAndDraw();
}
