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
	plugins.svyBlockUI.stop();
	//initialize and generate notification token
	plugins.svyphonegapPush.getToken(updateToken, error);
	plugins.svyphonegapPush.onTokenRefresh(updateToken, error)
	//subscribe to notifications where topic = svyMobile
	plugins.svyphonegapPush.subscribeToTopic(success, error, 'svyMobile')
	//when receiving a notification display a message if UI is visible.
	plugins.svyphonegapPush.onNotification(showMessage, success, error)
	return _super.onShow(firstShow, event)
}

/**
 * @param t
 *
 * @properties={typeid:24,uuid:"E1646396-9BDD-4D1D-BEBD-D05EB8C80E94"}
 */
function updateToken(t) {
	token = t;
}

/**
 * @properties={typeid:24,uuid:"BB50DBAD-D720-425A-8B2B-A8ED48F2339E"}
 */
function showMessage(data) {
	if (data.wasTapped) {
		plugins.dialogs.showInfoDialog('INFO', 'Notification received while UI closed.')
	} else {
		plugins.dialogs.showInfoDialog('INFO', 'Notification received while UI visible.')
	}
}

/**
 * @param m
 *
 * @properties={typeid:24,uuid:"6C3402AE-BF15-4ABE-89E4-82E6E900C1EF"}
 */
function success(m) {
	application.output(m)
}

/**
 * @param m
 *
 * @properties={typeid:24,uuid:"FA9F9E8A-3792-4EB5-9EB6-8B4A43A58EC3"}
 */
function error(m) {
	application.output(m)
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
	plugins.svyphonegapPush.unubscribeFromTopic(success, error, 'svyMobile')
	return true
}

/**
 * Send a sample notification
 * @properties={typeid:24,uuid:"A053116D-72A4-4246-B49E-5326496D56BF"}
 */
function sendNotification() {
	plugins.svyphonegapPush.sendNotification(scopes.globals.fcmAuthKey, 'INFO', 'This is a notification from svyMobile', 'svyMobile', success, error)
}
