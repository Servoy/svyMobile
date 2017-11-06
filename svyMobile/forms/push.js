/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CB3ABB28-3B77-43FF-9839-7130343BB69B"}
 */
var messages = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"93FE711E-D2DF-4370-BC7A-15B10F8CE9B0"}
 */
var token

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"79EA9E16-E42E-4F3C-B292-DBEB69BAB528"}
 */
function onShow(firstShow, event) {
	messages = '';
	plugins.svyBlockUI.stop();
	//initialize and generate notification token
	plugins.svyphonegapPush.getToken(updateToken, logInfo);

	//when receiving a notification display a message if UI is visible.
	plugins.svyphonegapPush.onNotification(showMessage, logInfo, logInfo)
	return _super.onShow(firstShow, event)
}

/**
 * @param t
 *
 * @properties={typeid:24,uuid:"E1646396-9BDD-4D1D-BEBD-D05EB8C80E94"}
 */
function updateToken(t) {	
	messages = 'Token Updated : ' + t;
	token = t;
}

/**
 * @properties={typeid:24,uuid:"BB50DBAD-D720-425A-8B2B-A8ED48F2339E"}
 */
function showMessage(data) {	
	if (data.wasTapped) {
		messages = 'Notification received while UI closed.'
	} else {
		messages = 'Notification received while UI visible.'
	}
}

/**
 * @param m
 *
 * @properties={typeid:24,uuid:"6C3402AE-BF15-4ABE-89E4-82E6E900C1EF"}
 */
function logInfo(m) {
	messages = m;
}
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B5116BBB-29C7-45FC-8BEC-EE5F4CBB9996"}
 */
function onHide(event) {
	//unSubscribe from notifications
	plugins.svyphonegapPush.unubscribeFromTopic(logInfo, logInfo, 'svyMobile')
	return true
}

/**
 * Send a sample notification
 * @properties={typeid:24,uuid:"A053116D-72A4-4246-B49E-5326496D56BF"}
 */
function sendNotification() {
	messages = 'Sending message to connected devices..'
	plugins.svyphonegapPush.sendNotification(scopes.globals.fcmAuthKey, 'INFO', 'This is a notification from svyMobile', 'svyMobile', logInfo, logInfo)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"01B09889-57E0-4699-88A2-742E0B15BAB8"}
 */
function onAction$generateToken(event) {
	messages = 'Generating token...'
	plugins.svyphonegapPush.getToken(updateToken, logInfo);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"743D9341-FA18-4429-BE2E-51DDCAAB753B"}
 */
function onAction$subscribe(event) {
	//subscribe to notifications where topic = svyMobile
	messages = 'Subscribing to notification topics..'
	plugins.svyphonegapPush.subscribeToTopic(logInfo, logInfo, 'svyMobile')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2C07851C-1F3C-4818-8D23-67A8560ED504"}
 */
function onAction$unsubscribe(event) {
	//unSubscribe from notifications
	messages = 'Unsubscribing from notification topics..'
	plugins.svyphonegapPush.unubscribeFromTopic(logInfo, logInfo, 'svyMobile')
}
