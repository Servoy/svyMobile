/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3BE7A551-CB48-4C1F-8420-E113185E04D7"}
 */
var messages = '';

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"793C63F1-2DBC-4727-B99E-0955A1B193F9"}
 */
function onAction$startScanner(event) {
	plugins.svyphonegapBarcode.scan(cb, cb)	
}

/**
 * @properties={typeid:24,uuid:"76A85071-4C47-495D-9ED4-19B7C77C3E53"}
 */
function cb(data) {
	messages = JSON.stringify(data);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A7E706AC-D17B-415D-8F26-814B23413F5A"}
 */
function onShow(firstShow, event) {
	messages = '';
	if (!scopes.globals.phonegapEnabled) {
		messages = 'Plugin is not loaded or supported.'
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.mobileBase.goBack(event);
	}
}
