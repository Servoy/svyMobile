/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2420CDD5-32A5-492D-A9F4-90729C38A2DA"}
 */
var messages = null;

/**
 * @properties={typeid:35,uuid:"6EB2C8D3-9A02-445B-B1BD-D99473A89D36",variableType:-4}
 */
var supported = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E05210EB-5C0B-4C49-8B56-A53F02750B3C"}
 */
var token = '';

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A47899F1-5626-4AA1-9BC1-6660C075CEEF"}
 */
function onShow(firstShow, event) {
	messages = '';
	if (scopes.globals.phonegapEnabled) {

	} else {
		messages = 'Plugin is not loaded or supported.'
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.nav.goBack(event);
	}
	return _super.onShow(firstShow, event)
}

/**
 * @param m
 *
 * @properties={typeid:24,uuid:"45B0E29F-DA88-4289-85D7-72E04A950B46"}
 */
function logInfo(m) {
	messages = m;
}

/**
 * @param r
 *
 * @properties={typeid:24,uuid:"205E2C4A-2469-404D-A0C5-120762C32842"}
 */
function success(r) {
	messages = 'Swipe Started.';
	application.output(messages);
}

/**
 * @param r
 *
 * @properties={typeid:24,uuid:"58A040A3-2009-4CE7-841E-7861C0688672"}
 */
function error(r) {
	messages = 'Reader is not connected.';
	application.output(messages);
}

/**
 * @properties={typeid:35,uuid:"A62CF2CE-B4B3-4D3D-A1A3-25E934AE9D34",variableType:-4}
 */
var connected = false;

/**
 * @properties={typeid:24,uuid:"C5AD228F-FDFA-4C59-A11E-999BFE4D6E29"}
 */
function connectingCB() {
	messages = 'Connecting.';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"894DF7B5-554E-48F9-8B7E-64F0E084CA3A"}
 */
function connectedCB() {
	connected = true;
	messages = 'Successfully connected.';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"5A1C3F46-C1E6-46A1-8159-19075BB62D42"}
 */
function disconnectedCB() {
	connected = false;
	messages = 'Disconnected.';
	application.output(messages);
}

/**
 * @param r
 *
 * @properties={typeid:24,uuid:"62866647-D5D8-42AB-973D-77E7D46EAF25"}
 */
function timeoutCB(r) {
	if (connected) {
		messages = 'ERROR: Swipe timed out - ' + r.detail;
	} else {
		messages = 'ERROR: Connection timed out - ' + r.detail;
	}

	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"282D8B23-9782-4760-9E7A-E7170B945B1B"}
 */
function swipe_processingCB() {
	messages = 'Processing...';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"6FF4444B-9577-4261-BB91-561B773B54F0"}
 */
function swipe_successCB(r) {
	var data = JSON.parse(r.detail);
	messages = '';
	messages += 'cardholder name: ' + data.first_name + ' ' + data.last_name + '\n';
	messages += 'card number:' + data.card_number + '\n';
	messages += 'expiration:' + data.expiry_month + '/' + data.expiry_year + '\n';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"AF917E8A-8AE5-450D-B80D-955BA4104FBF"}
 */
function swipe_errorCB() {
	messages = 'ERROR: Could not parse card data.';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"DAF2060E-F022-4054-9B05-418D478B8C8F"}
 */
function connection_errorCB(r) {
	messages = 'Connection Error:  ' + r;
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"09172A69-B3C3-4968-B5F8-24BF9D5D11A5"}
 */
function xml_errorCB(r) {
	messages = 'XML Error:  ' + r;
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"BADE65F8-3565-47D0-B1B4-59339240FE3D"}
 */
function autoconfig_completedCB() {
	messages = 'Autoconfig complete.';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"35EC28B8-4916-45C1-9B67-1A2F7D1DBF38"}
 */
function autoconfig_errorCB(r) {
	messages = 'Autoconfig error: ' + r;
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"3282DB78-6802-44D0-BA1A-44560ED749AC"}
 */
function enableLogsSuccess() {
	messages = 'Logs Enabled.';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"1A5B36B5-55D1-4AE1-A73C-9C4C80F07580"}
 */
function enableLogsError() {
	messages = 'Failed to enable logs.';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"4F6BED71-69D2-44A1-955D-BA9953BFACB4"}
 */
function setReaderSuccess() {
	messages = 'Set Reader successfully.';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"86AA0CB9-6B43-43CB-AC1B-D7FB9948B2D8"}
 */
function setReaderFail() {
	messages = 'Failed to set Reader.';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"394B31CC-38AD-4F02-8788-F340344CA4C3"}
 */
function activateSuccess() {
	messages = 'Activate Success.';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"E404FFCA-E6DE-4703-9C7B-7E77C9176119"}
 */
function activateFail() {
	messages = 'Activate Fail.';
	application.output(messages);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E41712B6-6D69-4A57-AB13-2020A3DA8D76"}
 */
function onAction$Activate(event) {
	plugins.svyphonegapUnimag.activate(activateSuccess, activateFail);
	plugins.svyphonegapUnimag.enableLogs(true, enableLogsSuccess, enableLogsError)
	plugins.svyphonegapUnimag.setReaderType('unimag_ii', setReaderSuccess, setReaderFail)
	plugins.svyphonegapUnimag.onEvent(connectingCB, connectedCB, disconnectedCB, timeoutCB, swipe_processingCB, swipe_successCB, swipe_errorCB, connection_errorCB, xml_errorCB, autoconfig_completedCB, autoconfig_errorCB)
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A9AF7528-9943-4322-9D88-ED274A8B88E3"}
 */
function onAction$Swipe(event) {
	if (connected) {
		plugins.svyphonegapUnimag.swipe(success, error);
	}
}

