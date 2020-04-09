/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2420CDD5-32A5-492D-A9F4-90729C38A2DA"}
 */
var messages = null;

/**
 * @properties={typeid:35,uuid:"6EB2C8D3-9A02-445B-B1BD-D99473A89D36",variableType:-4}
 */
var supported = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E05210EB-5C0B-4C49-8B56-A53F02750B3C"}
 */
var token = '';

/**
 * @properties={typeid:35,uuid:"FAA925B0-D13B-4E7F-AA85-E2DFDABF75CF",variableType:-4}
 */
var connected = false;

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A47899F1-5626-4AA1-9BC1-6660C075CEEF"}
 */
function onShow(firstShow, event) {
	messages = '';
	if (scopes.globals.phonegapEnabled) {

	} else {
		messages = 'Plugin is not loaded or supported.'
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.nav.goBack(event);
	}

	if (connected) {
		plugins.svyphonegapUnimag.deactivate();
	}
	plugins.svyphonegapUnimag.enableLogs(true);
	plugins.svyphonegapUnimag.registerObservers(OnAttachment, OnDetachment, OnConnect, OnDisconnect, OnPowering, OnConnectFailed, OnCardSwipe, OnCardDataProcessing, OnDidReceiveCardData, OnCardSwipeFailed, null, null, null, null)
	plugins.svyphonegapUnimag.activate();	
	return _super.onShow(firstShow, event)
}

/**
 * @param m
 *
 * @properties={typeid:24,uuid:"45B0E29F-DA88-4289-85D7-72E04A950B46"}
 */
function logInfo(m) {
	messages = m;
	application.output(messages)
}

/**
 * @properties={typeid:24,uuid:"8E938A09-DB3F-4E7D-AF4A-89E2B147F526"}
 */
function OnAttachment() {
	messages = 'Disconnected';
	application.output(messages);	
}

/**
 * @properties={typeid:24,uuid:"5CCB5662-A6B5-4EEB-8815-D1899764EACA"}
 */
function OnDetachment() {
	messages = 'Detached';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"8D86E22E-AB20-4BA2-B10D-3B0D85CA9CB2"}
 */
function OnConnect() {
	messages = 'Connected';
	application.output(messages);
	connected = true;
	
	
	//start looking for a swipe
	if (connected) {
		plugins.svyphonegapUnimag.swipe();
	}
}

/**
 * @properties={typeid:24,uuid:"A56B8884-CDB9-4097-BCB4-FD23AD5A1ECD"}
 */
function OnDisconnect() {
	messages = 'Disconnected';
	application.output(messages);
	connected = false;
}

/**
 * @properties={typeid:24,uuid:"A79DE4F1-BE79-47DC-9C6D-9C43A72A32CC"}
 */
function OnPowering() {
	messages = 'Powering on.';
	application.output(messages);
}

/**
 * @properties={typeid:24,uuid:"8C5EAD2F-011E-4680-B970-0149A50C9265"}
 */
function OnConnectFailed(err) {
	messages = "Connection Failed:" + err;
	application.output(messages);
}
/**
 * @properties={typeid:24,uuid:"8845ABD3-1A31-4DCC-BD7C-B360E7EC539F"}
 */
function OnCardSwipe() {
	messages += '\n';
	messages += '\n';
	messages += 'Waiting for Swipe..';
	application.output(messages);
}
/**
 * @properties={typeid:24,uuid:"3F139FD9-2E61-47DB-9272-0F51B4F1F26B"}
 */
function OnCardDataProcessing() {
	//	messages = 'Card data processing';
	application.output(messages);
}
/**
 * @properties={typeid:24,uuid:"7EBF4A7F-FBAC-4F0F-B416-D4CB7AD0B67F"}
 */
function OnDidReceiveCardData(d1, d2) {
	messages = 'Data retrieved: \n';
	messages += d1 + '\n \n';
	messages += d2;
	application.output(messages);
	
	//start looking for a swipe again
	if (connected) {
		plugins.svyphonegapUnimag.swipe();
	}
}

/**
 * @properties={typeid:24,uuid:"33A070D1-1C3A-4E30-AACA-2CD4DB23981F"}
 */
function OnCardSwipeFailed() {
	messages = 'Powering on.';
	if (connected) {
		messages = 'Waiting for swipe..';
	}
	application.output(messages);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E41712B6-6D69-4A57-AB13-2020A3DA8D76"}
 */
function onAction$Stop(event) { 
	plugins.svyphonegapUnimag.cancelTask();
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A9AF7528-9943-4322-9D88-ED274A8B88E3"}
 */
function onAction$Swipe(event) {
	//start looking for a swipe
	if (connected) {
		plugins.svyphonegapUnimag.swipe();
	}
}
