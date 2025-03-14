/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"87FADBA6-B4E4-4919-8F31-A702BCE9B12A"}
 */
var messages = null;

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"68231A3B-EF8C-4DC5-85B1-11D234E6B148"}
 */
function onShow(firstShow, event) {
	messages = '';
	_super.onShow(firstShow, event)
	if (!scopes.globals.phonegapEnabled) {
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.mobileBase.goBack(event);
	}
}

/**
 * @properties={typeid:24,uuid:"8739F40B-EE27-44A3-B731-BEB555F746DF"}
 */
function isAvail() {
	plugins.svyphonegapFingerprintscan.isAvailable(isAvailSuccess, isAvailError);
}

/**
 * @properties={typeid:24,uuid:"A8807B29-F36D-4879-A9DB-C12C9C2A7134"}
 */
function isAvailSuccess(res) {
	messages = res;
}

/**
 * @properties={typeid:24,uuid:"51AB6A3B-5E39-4A8C-BEBA-739F76D481C9"}
 */
function isAvailError(err) {
	messages = err;
}

/**
 * @properties={typeid:24,uuid:"DE0F95B4-F4EB-4833-A290-94D493075E92"}
 */
function showAuth() {
	var config = {
		description: "Please authenticate to continue.", //show for ios message
		clientId: "Please authenticate to continue.", //what to show for android message
		clientSecret: "password" //Only necessary for Android
	};
	plugins.svyphonegapFingerprintscan.show(config, showAuthSuccess, showAuthErr)
}

/**
 * @properties={typeid:24,uuid:"40F16C2C-2CF8-411E-99C5-F0ADE69EBE6A"}
 */
function showAuthSuccess(res) {
	messages = 'You have authenticated successfully.';
}

/**
 * @properties={typeid:24,uuid:"99B266C6-2F4F-424B-9ABC-C2485C187F86"}
 */
function showAuthErr(err) {
	messages = err + '. You failed to authenticate.';
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6DC8C47D-3BC3-4528-A760-DBF807273C20"}
 */
function onAction$registerSecret(event) {
	var config = {
		description: "Please authenticate to continue.", //show for ios message
		clientId: "Please authenticate to continue.", //what to show for android message
		clientSecret: "password" //Only necessary for Android
	};
	plugins.svyphonegapFingerprintscan.show(config, authRegisterCallback, showAuthErr)	
}

/**
 * @properties={typeid:24,uuid:"86504131-A2BC-4E15-9652-7DF9732DB76C"}
 */
function authRegisterCallback(){
	plugins.svyphonegapFingerprintscan.registerSecret({
		description: "Some biometric description",
		secret: "my-super-secret",
		invalidateOnEnrollment: true,
		disableBackup: true // always disabled on Android
	}, registerSuccessful, showAuthErr)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param e
 *
 * @properties={typeid:24,uuid:"3A7DE52F-6361-42AF-9478-418A66508365"}
 */
function registerSuccessful(e){
	messages = 'registered secret successfully';
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F0941178-FD1B-497E-B8D6-937B7A499A4E"}
 */
function onAction$loadSecret(event) {
	
	plugins.svyphonegapFingerprintscan.loadSecret({
			description: "Some biometric description",
			disableBackup: true // always disabled on Android
		},loadSuccessCallback,showAuthErr)
}

/**
 * TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"063F92C9-47AB-405A-96E4-BB5373D15675"}
 */
function loadSuccessCallback(d){
	messages = 'secret from vault recovered: ' + d; 
}
