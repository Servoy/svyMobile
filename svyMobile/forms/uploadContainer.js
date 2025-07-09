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
	//check for camera permissions
	if (scopes.phonegap.isMobile.Android()) {
		plugins.svyphonegapPhonegap.checkPermission('android.permission.CAMERA', checkPermissionSuccessCallback, checkPermissionFailureCallback)
	} else {
		elements.multifileupload_1.openModal();
	}

}

/**
 * TODO generated, please specify type and doc for the params
 * @param d
 *
 * @properties={typeid:24,uuid:"40C454CF-3847-4913-BAF2-38EDF7BD71DB"}
 */
function checkPermissionSuccessCallback(d) { 
	application.output('checkPermissionSuccessCallback')
	if (!d.hasPermission) {
		application.output('no permissions set')
		plugins.svyphonegapPhonegap.requestPermissions(['android.permission.CAMERA'], requestPermissionsSuccessCallback, requestPermissionsFailureCallback)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param d
 *
 * @properties={typeid:24,uuid:"EF98F81C-2192-4845-ABC2-19FF747451D6"}
 */
function requestPermissionsSuccessCallback(d) {
	application.output('requestPermissionsSuccessCallback')
	application.output(d)
	if (!d.hasPermission) {
		plugins.dialogs.showInfoDialog('INFO','Failed to set Camera Permission.  Please update the permissions settings on the app to allow camera use.');
		scopes.mobileBase.goBack(null);
	}
}
	
/**
 * TODO generated, please specify type and doc for the params
 * @param d
 *
 * @properties={typeid:24,uuid:"C7876348-ECC5-4283-952D-C649A303521D"}
 */
function requestPermissionsFailureCallback(d) {
	plugins.dialogs.showInfoDialog('INO','Failed to get Camera Permission');
}



/**
 * TODO generated, please specify type and doc for the params
 * @param d
 *
 * @properties={typeid:24,uuid:"1113BFD0-A6A3-42E1-A834-A4875523D981"}
 */
function checkPermissionFailureCallback(d) { 
	plugins.dialogs.showInfoDialog('INFO','Failed to check Camera Permission');
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
