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
	randomizeAndDraw()
}


/**
 * @properties={typeid:24,uuid:"D6C493F8-878B-4743-8E39-C961E913B747"}
 */
function randomizeAndDraw(){
	var DATA_COUNT = scopes.chartExamples.randomIntFromInterval(10,50);

	function generateData() {
		var d = [];
		var i;

		for (i = 0; i < DATA_COUNT; ++i) {
			d.push({
				x: scopes.chartExamples.randomIntFromInterval(-150,150),
				y: scopes.chartExamples.randomIntFromInterval(-150,150),
				v: scopes.chartExamples.randomIntFromInterval(0,1000)
			});
		}

		return d;
	}

	var d1 = generateData()
	var d2 = generateData()
	var d3 = generateData()
	var data = {
		type: 'bubble',
		data: {
			datasets: [{
				data: d1
			}, {
				data: d2
			}, {
				data: d3
			}]
		}
	};

	var options = {
		aspectRatio: 1,
		legend: false,
		tooltips: false,

		elements: {
			point: {
				backgroundColor: { isFunction: true, params: ['context'], expression: scopes.stringUtils.fnToString(scopes.chartExamples.colorize) },

				borderColor: { isFunction: true, params: ['context'], expression: scopes.stringUtils.fnToString(scopes.chartExamples.colorize) },

				borderWidth: { isFunction: true, params: ['context'], expression: scopes.stringUtils.fnToString(scopes.chartExamples.borderWidth) },

				hoverBackgroundColor: 'transparent',

				hoverBorderColor: 'gray',

				hoverBorderWidth: { isFunction: true, params: ['context'], expression: scopes.stringUtils.fnToString(scopes.chartExamples.hoverBorderWidth) },

				radius: { isFunction: true, params: ['context'], expression: scopes.stringUtils.fnToString(scopes.chartExamples.radius) }
			}
		}
	};

	//Initialize the chart by using setData
	elements.chart.setData(data);
	elements.chart.setOptions(options);
}