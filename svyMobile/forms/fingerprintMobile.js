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
	return _super.onShow(firstShow, event)
}

/**
 * @properties={typeid:24,uuid:"8739F40B-EE27-44A3-B731-BEB555F746DF"}
 */
function isAvail() {
	plugins.svyphonegapFingerprint.isAvailable(isAvailSuccess, isAvailError);
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
		clientId: "Fingerprint-Demo",
		clientSecret: "password" //Only necessary for Android
	};
	plugins.svyphonegapFingerprint.show(config, showAuthSuccess, showAuthErr)
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
