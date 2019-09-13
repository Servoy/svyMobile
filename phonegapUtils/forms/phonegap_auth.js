/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FEC4A9A7-F581-4232-A3B0-63D21B23DA51"}
 */
var password = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6F1BEFF6-E0C6-462A-981D-1B66DCF1B144"}
 */
var username = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9BC1209B-C21E-4DD8-9C3C-BF8EA8C242C7"}
 */
function onAction$authenticate(event) {
	scopes.phonegapAuth.authenticate(username, password);
	if (!scopes.phonegapAuth.authenticated) {
		plugins.dialogs.showErrorDialog('INFO', 'Failed to authenticate')
	} else {
		application.getActiveWindow().hide()
	}
}

/**
 * @properties={typeid:24,uuid:"EB375C60-469D-4AC1-B9BD-20B9822AC080"}
 */
function show() {
	username = '';
	password = '';
	var w = application.createWindow(controller.getName(), JSWindow.MODAL_DIALOG);
	w.show(controller.getName());
	return scopes.phonegapAuth.authenticated;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"37E3DEC4-88BA-4F29-BB67-4AFF2902654F"}
 */
function onShow(firstShow, event) {
	elements.username.requestFocus();
}
