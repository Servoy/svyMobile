/**
 * @properties={typeid:35,uuid:"5758D2F4-48B4-4251-B5F6-EB2015CE954B",variableType:-4}
 */
var img;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A317B08B-0792-4BE0-8731-776C75DB8EF6"}
 */
var messages = '';

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EE5B1442-B42F-4DFA-9145-1DD6BEB08068"}
 */
function onAction$takePicture(event) { 
	elements.multifileupload_1.openModal();
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9399DA60-753E-4C5A-B247-D852DA9A97F2"}
 */
function onShow(firstShow, event) {
	messages = '';
	if (!scopes.globals.phonegapEnabled) {
		messages = 'Plugin is not loaded or supported.'
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.mobileBase.goBack(event);
	} else {
		application.executeLater(start, 250);
	}
}

/**
 * @properties={typeid:24,uuid:"EC58BBE3-B39F-4B41-AFB4-0EB1A20CD715"}
 */
function start() {
	elements.multifileupload_1.openModal();
}

/**
 * @param {JSUpload} jsUpload
 *
 * @private
 *
 * @properties={typeid:24,uuid:"75ECA0F5-8EEC-4153-82DE-2A4418D96175"}
 */
function onFileUploaded(jsUpload) {	
	img = jsUpload.getBytes(); 
	elements.photo.visible = true;
}
