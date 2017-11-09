/**
 * @properties={typeid:35,uuid:"18F4F817-E9E5-4996-89F0-1B83383C064A",variableType:-4}
 */
var backgroundColor = ["#F7464A", "#46BFBD", "#FDB45C", "black"]
/**
 * @properties={typeid:35,uuid:"F88F8C8E-9EC5-4A06-B2A2-9D0E5EB1600A",variableType:-4}
 */
var hoverBackgroundColor = ["#FF5A5E", "#5AD3D1", "#FFC870", "black"]

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"50B21532-0F1F-48B8-AF70-18D9D4166B36",variableType:4}
 */
var type = 0;

/**
 * @param {Number} index
 * @param {string} label
 * @param {Number} value
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DF080F5B-F3D8-4C64-B558-0B2B5AACCA10"}
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
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5D9E91C8-A8CD-4BAB-86E7-C0719BF24FE9"}
 */
function onShow(firstShow, event) {
	var options = {
		title:{
			display:true,
			text:'Foundset Bound Chart'
		}
	}
	elements.chart.setOptions(options)
	_super.onShow(firstShow, event)	
}
