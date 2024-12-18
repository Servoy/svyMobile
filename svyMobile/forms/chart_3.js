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
}

/**
 * @properties={typeid:24,uuid:"D6C493F8-878B-4743-8E39-C961E913B747"}
 */
function randomizeAndDraw() {
	var DATA_COUNT = scopes.chartExamples.randomIntFromInterval(10, 50);

	function generateData() {
		var d = [];
		var i;

		for (i = 0; i < DATA_COUNT; ++i) {
			d.push({
				x: scopes.chartExamples.randomIntFromInterval(-150, 150),
				y: scopes.chartExamples.randomIntFromInterval(-150, 150),
				v: scopes.chartExamples.randomIntFromInterval(0, 1000)
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
		title: {
			display: true,
			text: 'Scripted Bubble Chart'
		},
		aspectRatio: 1,
		legend: false,
		tooltips: false,

		elements: {
			point: {
				backgroundColor: clientutils.generateBrowserFunction(scopes.chartExamples.colorize),

				borderColor: clientutils.generateBrowserFunction(scopes.chartExamples.colorize),

				borderWidth: clientutils.generateBrowserFunction(scopes.chartExamples.borderWidth),

				hoverBackgroundColor: 'transparent',

				hoverBorderColor: 'gray',

				hoverBorderWidth: clientutils.generateBrowserFunction(scopes.chartExamples.hoverBorderWidth),

				radius: clientutils.generateBrowserFunction(scopes.chartExamples.radius)
			}
		}
	};

	;
	
	//Initialize the chart by using setData
	elements.chart.setData(data);
	elements.chart.setOptions(options);
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BC26B056-548F-4D97-B391-56E614A2657E"}
 */
function onLoad(event) {
	randomizeAndDraw();
}