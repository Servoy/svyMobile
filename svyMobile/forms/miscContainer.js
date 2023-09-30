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

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"90C02F23-BB8E-42E4-8E65-1DE00DD4950E"}
 */
function onAction$openPhone(event) {
	plugins.svyphonegapBrowser.openHrefTag('tel:12345678');
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F22F6985-EE0C-4961-9406-CBDFD840B74E"}
 */
function onAction$sendEmail(event) {
	plugins.svyphonegapBrowser.openHrefTag('mailto:info@servoy.com');
}

/**
 * @properties={typeid:35,uuid:"1E0D64F8-B4E8-46BB-B3C6-A25A229D6513",variableType:-4}
 */
var rotation;

/**
 * @properties={typeid:24,uuid:"97978972-FF14-4671-B4D5-6D0F447A9417"}
 */
function toggleRotation(){	
	if (!rotation) rotation = plugins.svyphonegapPhonegapOrientation.getOrientationTypes().PORTRAIT_PRIMARY;
	if (rotation == plugins.svyphonegapPhonegapOrientation.getOrientationTypes().PORTRAIT_PRIMARY) {
		rotation = plugins.svyphonegapPhonegapOrientation.getOrientationTypes().LANDSCAPE_PRIMARY
	} else {
		rotation = plugins.svyphonegapPhonegapOrientation.getOrientationTypes().PORTRAIT_PRIMARY
	}
	
	plugins.svyphonegapPhonegapOrientation.lock(rotation);
}