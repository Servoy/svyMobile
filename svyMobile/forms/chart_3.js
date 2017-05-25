/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B8EA27F4-2EC3-4691-BBAE-35F9F1F9E066"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event);
	//Your data node object which requires a type and the data.
	/**
	 * @properties={typeid:35,uuid:"63796707-1832-4650-A4C1-0D847CC7C485",variableType:-4}
	 */
	var data = {
		type: 'polarArea',
		data: {
			labels: ["Red",
			"Green",
			"Yellow","Black"],
			datasets: [{
				data: [Number(Math.random()*100).toFixed(0),Number(Math.random()*100).toFixed(0),Number(Math.random()*100).toFixed(0),Number(Math.random()*100).toFixed(0)],
				backgroundColor: ["#F7464A",
				"#46BFBD",
				"#FDB45C","black"],
				hoverBackgroundColor: ["#FF5A5E",
				"#5AD3D1",
				"#FFC870","black"]
			}]
		}
	}

	var options = {
		legend: {
			display: false
		}
	}

	//Initialize the chart by using setData
	elements.chart.setData(data);
	elements.chart.setOptions(options);
}
