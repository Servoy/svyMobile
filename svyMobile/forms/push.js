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
	//initialize push
	plugins.svyphonegapPush.getToken(updateToken, null);
	plugins.svyphonegapPush.onTokenRefresh(updateToken, null)
	//subscribe to notifications
	plugins.svyphonegapPush.subscribeToTopic(null, null, 'svyMobile')
	//when receiving a notification
	plugins.svyphonegapPush.onNotification(showMessage, null, null)
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
		//Notification was received on device tray and tapped by the user.
		// alert(JSON.stringify(data));
	} else {
		//Notification was received in foreground. Maybe the user needs to be notified.
		// alert(JSON.stringify(data));
	}
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
	plugins.svyphonegapPush.unubscribeFromTopic(null, null, 'svyMobile')
	return true
}


/**
 * @properties={typeid:24,uuid:"A053116D-72A4-4246-B49E-5326496D56BF"}
 */
function sendNotification(){
	var c = plugins.http.createNewHttpClient()
	c.createPostRequest('https://fcm.googleapis.com/fcm/send')	
}
