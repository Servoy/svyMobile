/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ACAC8B2E-4160-45CF-87D7-638C79AEDD9B"}
 */
var messages;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8C088CF7-1A94-402E-8C93-285E58572217"}
 */
function onShow(firstShow, event) {
	if (!scopes.globals.phonegapEnabled) {
		messages = 'Plugin is not loaded or supported.'
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.mobileBase.goBack(event);
	}
}

/**
 * @properties={typeid:24,uuid:"BEC1A3F9-701D-4888-A3B6-1E2342315839"}
 */
function showInAppBrowser(){
	plugins.svyphonegapBrowser.openExternalLink('https://www.servoy.com');
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"05A7D890-887B-4B77-B85A-FE54A4356FAB"}
 */
function onAction$beep(event) {
	plugins.svyphonegapPhonegap.executeScript('navigator.notification.beep(1)')
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1F77748E-D0F0-4BFC-8177-A05E27B94CF6"}
 */
function onAction$vibrate(event) {
	plugins.svyphonegapPhonegap.executeScript('navigator.vibrate(1000)')	
}
