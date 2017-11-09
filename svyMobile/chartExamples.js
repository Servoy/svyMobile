/**
 * @properties={typeid:35,uuid:"034CC1CB-EE5D-49AC-BF8A-CE809782DD3A",variableType:-4}
 */
var hoverBorderWidth = function(context) {
	var value = context.dataset.data[context.dataIndex];
	return Math.round(8 * value['v'] / 1000);
}

/**
 * @properties={typeid:35,uuid:"811E8DE8-C8CB-48B8-A5B1-E0E22B3A2FB7",variableType:-4}
 */
var radius = function(context) {
	var value = context.dataset.data[context.dataIndex];
	var size = context.chart.width;
	var base = Math.abs(value['v']) / 1000;
	return (size / 24) * base;
}

/**
 * @properties={typeid:35,uuid:"98427787-F397-49E4-B40E-C8C8E1926AA5",variableType:-4}
 */
var borderWidth = function(context) {
	return Math.min(Math.max(1, context.datasetIndex + 1), 8);
}

/**
 * @properties={typeid:35,uuid:"6A372696-DF12-47E9-98AA-BA32D4BBB4D9",variableType:-4}
 */
var colorize = function(context) {
	var value = context.dataset.data[context.dataIndex];	
	var x = value.x / 100;
	var y = value.y / 100;
	var r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
	var g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
	var b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
	var a = 0.5 * value.v / 1000;

	return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

/**
 * @properties={typeid:24,uuid:"40478639-C733-43B3-B1BD-33D309D1B982"}
 */
function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
