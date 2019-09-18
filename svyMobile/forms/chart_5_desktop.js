/**
 * @properties={typeid:35,uuid:"7C3338FE-09AF-4672-BFCD-905B6C0817F3",variableType:-4}
 */
var backgroundColor = ["#F7464A", "#46BFBD", "#FDB45C", "black"];

/**
 * @properties={typeid:35,uuid:"5E8F014C-D11D-4676-A054-AF73B68A723B",variableType:-4}
 */
var hoverBackgroundColor = ["#FF5A5E", "#5AD3D1", "#FFC870", "black"];

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B4A05FB6-3DD9-4513-B248-CF2A514FCEED",variableType:4}
 */
var type = 0;

/**
 * @param {Number} index
 * @param {string} label
 * @param {Number} value
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EA56DF97-BEBE-4E96-A7FA-D1E00177F492"}
 */
function onClick$switchTypes(index, label, value) {
	switch (type) {
	case 0:
		elements.chart.type = 'pie';
		break;
	case 1:
		elements.chart.type = 'polarArea';
		break;
	case 2:
		elements.chart.type = 'doughnut';
		break;
	case 3:
		elements.chart.type = 'horizontalBar';
		break;
	}
	type++;
	if (type == 4) {
		type = 0;
	}
	var options = {
		title: {
			display: true,
			text: 'Foundset Bound Chart'
		},
		legend: {
			display: false
		}
	}

	elements.chart.setOptions(options);
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E25FA730-A61E-4E76-BC0A-69B4750FA34D"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
		var options = {
		title: {
			display: true,
			text: 'Foundset Bound Chart'
		},
		legend: {
			display: false
		}
	}

	elements.chart.setOptions(options);
	elements.chart.refreshChart();
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"CA3626F3-D05A-42BD-B549-C75AEC6C3AA6"}
 */
function onLoad(event) {
	var options = {
		title: {
			display: true,
			text: 'Foundset Bound Chart'
		},
		legend: {
			display: false
		}
	}

	elements.chart.setOptions(options);
	elements.chart.refreshChart();
}
