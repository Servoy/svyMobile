/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9C9020D7-2BA0-4BBE-8674-73B9E423BB04"}
 */
var messages = '';

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"853A033C-2449-4969-8948-59CAFB5E7998"}
 */
function onAction$startScanner(event) {
	messages = 'Scanning...';
	plugins.svyphonegapQrscanner.scan(cb, cb)
}

/**
 * @properties={typeid:24,uuid:"8ED625E1-6E52-4EFB-B1AA-E9EDD8C8A31B"}
 */
function cb(data) {
	messages = JSON.stringify(data);	
}

/**
 * @properties={typeid:24,uuid:"4F6F073E-C881-4812-9D1F-C7A4BF58FCA1"}
 */
function prepcb() {	
//	plugins.svyphonegapQrscanner.useCamera(0,cb,cb)//use default camera;
	plugins.svyphonegapQrscanner.show(showcb)
}

/**
 * @properties={typeid:24,uuid:"D344F9B4-E5CE-44E1-9D82-1CA32EA1FE99"}
 */
function cbHide() { }

/**
 * @properties={typeid:24,uuid:"88D80B43-BCF5-4C43-9990-86F39DB3F7F1"}
 */
function showcb() { 
	messages = 'Scanning...';
	plugins.svyphonegapQrscanner.scan(cb, cb);	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"872FD1CE-A881-45EE-8E37-9FF1F09D1A4D"}
 */
function onShow(firstShow, event) {
	messages = '';
	if (!scopes.globals.phonegapEnabled) {
		messages = 'Plugin is not loaded or supported.'
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.mobileBase.goBack(event);
	} else {
		plugins.svyphonegapQrscanner.enableLight(prepcb,prepcb)//use light and prep
//		plugins.svyphonegapQrscanner.prepare(prepcb, prepcb)
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
 * @properties={typeid:24,uuid:"653E1F13-8D50-4AC8-B970-876EAE01F690"}
 */
function onHide(event) {
	plugins.svyphonegapQrscanner.disableLight(cb,cb)
	plugins.svyphonegapQrscanner.destroy(cbHide);
	return true
}
