/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"22ECD270-7D35-421B-AA24-5D441363F7ED"}
 */
var android_alias = '';

/**
 * @properties={typeid:35,uuid:"871F2661-2F51-4F85-BC26-5CD17625BFB9",variableType:-4}
 */
var android_keystore;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FE7FD9C9-2E60-4E09-945F-95F700C1EAFC"}
 */
var android_key_pass;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DB98ACF3-0469-479A-8208-2D7D7C55C2B8"}
 */
var android_key_store_pass;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A0B17322-86ED-44B6-AE57-67559483A983"}
 */
var android_keystore_filename = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"77A5FAFB-60D7-4BEE-B88D-CEF886B1DF79"}
 */
var android_title = '';

/**
 * @properties={typeid:35,uuid:"D26F7B47-CAF0-4934-8AE8-F3D845D02DD5",variableType:-4}
 */
var ios_cert;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0A3F3F6E-AE95-4129-BF7C-CAB52ED247D4"}
 */
var ios_cert_pass;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9B40F754-C1E1-42D2-A9DF-A456D8B8D4D5"}
 */
var ios_cert_filename = '';

/**
 @properties={typeid:35,uuid:"35DC247F-9C30-4757-97B0-6651C316F121",variableType:-4}
 */
var ios_provision;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5BE56331-599A-49BB-A549-71D794E84F6D"}
 */
var ios_provision_filename = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7ED35FA2-A002-4A53-84FC-74036A32C483"}
 */
var ios_title = '';

/**
 * @return {{ android_keystore:String,  android_key_pass:String, 
 * android_key_store_pass:String, android_title:String, 
 * android_alias:String, ios_cert:String,ios_cert_pass: String
 * ,ios_provision: String, ios_title: String}}
 * @properties={typeid:24,uuid:"274BB23A-834D-4AAA-BC96-215D7262E423"}
 */
function show() {
	if (android_keystore || (ios_cert && ios_provision)) {
		var ans = plugins.dialogs.showQuestionDialog('INFO', "You've already added signing keys, do you want to add new ones?", 'Yes', 'No');
		if (ans == 'No') {
			return {
				android_keystore: null,
				android_key_pass: null,
				android_key_store_pass: null,
				android_title: null,
				android_alias: null,
				ios_cert: null,
				ios_cert_pass: null,
				ios_provision: null,
				ios_title: null
			};
		}
	}

	var w = application.createWindow(controller.getName(), JSWindow.MODAL_DIALOG);
	w.show(controller.getName());
	return {
		android_keystore: android_keystore,
		android_key_pass: android_key_pass,
		android_key_store_pass: android_key_store_pass,
		android_title: android_title,
		android_alias: android_alias,
		ios_cert: ios_cert,
		ios_cert_pass: ios_cert_pass,
		ios_provision: ios_provision,
		ios_title: ios_title
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B89A447B-B343-4521-A09E-0895593A61B4"}
 */
function onShow(firstShow, event) {
	android_keystore = null;
	android_title = '';
	ios_cert = null;
	ios_provision = null;
	ios_title = '';
	ios_cert_pass = '';
	android_key_pass = '';
	android_key_store_pass = '';
	android_alias = '';
	elements.android_upload.removeStyleClass('added');
	elements.p12_upload.removeStyleClass('added');
	elements.prov_upload.removeStyleClass('added');
	elements.android_upload.uploadText = elements.android_upload.toolTipText
	elements.p12_upload.uploadText = elements.p12_upload.toolTipText
	elements.prov_upload.uploadText = elements.prov_upload.toolTipText

}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"38E1C52C-70AD-42EE-B43C-ABE10A3D4976"}
 */
function onDataChange(oldValue, newValue, event) {
	elements[event.getElementName()].addStyleClass('added');
	var fn = this[event.getSource().getDataProviderID() + '_filename'];
	elements[event.getElementName()].uploadText = fn + ' added successfully.';
	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DD252BF9-1373-49CC-98EA-08467ED6ACC7"}
 */
function onAction$addKeys(event) {
	application.getActiveWindow().hide();
}

/**
 * @private
 *
 * @properties={typeid:24,uuid:"B0D03AD8-A9AF-4E09-B02D-F43249890991"}
 */
function onAction$skip(event) {
	if (!ios_cert || !ios_provision || !ios_cert_pass) {
		var res = plugins.dialogs.showQuestionDialog('INFO', "You haven't uploaded an IOS certiface or provisioning profile. The IOS binary will not be built, is that okay?", "Yes, skip IOS build", "Cancel");
		if (res == "Cancel") {
			return;
		}
	}

	android_keystore = null;
	android_title = '';
	ios_cert = null;
	ios_provision = null;
	ios_title = '';
	android_keystore = null;
	android_key_pass = '';
	android_key_store_pass = '';
	android_title = '';
	android_alias = '';
	ios_cert = null;
	ios_cert_pass = '';
	ios_provision = null;
	ios_title = '';
	application.getActiveWindow().hide();
}
