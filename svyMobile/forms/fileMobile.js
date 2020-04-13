/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FB86F24A-4275-40DC-9DD5-EFC3CC48C51B"}
 */
var fileContent = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0CB561BA-213F-42F0-A360-036D50FAACC3"}
 */
var fileName = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"837072A5-6478-4627-A6A8-BE8045D2C357"}
 */
var messages = null;
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3B68397E-9CCF-4111-8B5A-387B29062055"}
 */
function onAction$Save(event) {
	var dir = 'externalApplicationStorageDirectory';
	var isIOS = plugins.ngclientutils.getUserAgent().toLowerCase().indexOf('iphone');
	if (isIOS != -1) {
		dir = 'documentsDirectory';
	}
	application.output(dir)
	plugins.svyphonegapFile.writeToFile(fileName, dir, fileContent, null, null);
}

/**
 * @properties={typeid:24,uuid:"E7543FF0-5E18-43A3-BA09-6624B70DF4F4"}
 */
function readCB(data) {
	fileContent = data;
}

/**
 * @param e
 *
 * @properties={typeid:24,uuid:"5FB17147-38B9-4818-8335-B7FD71CB0822"}
 */
function readErr(e) {
	application.output(e);
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"50E4486C-C68B-40C5-B7DA-6C334812100E"}
 */
function onAction$Load(event) {
	var dir = 'externalApplicationStorageDirectory';
	var isIOS = plugins.ngclientutils.getUserAgent().toLowerCase().indexOf('iphone');
	if (isIOS != -1) {
		dir = 'documentsDirectory';
	}
	plugins.svyphonegapFile.readFromFile(fileName, dir, readCB, readErr);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 * @override
 *
 * @properties={typeid:24,uuid:"DAD6D2D0-8B1E-40B2-A573-7A1218817F9B"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event);
	if (!scopes.globals.phonegapEnabled) {
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.mobileBase.goBack(event);
	}
}
