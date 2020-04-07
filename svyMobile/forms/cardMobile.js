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
	return _super.onShow(firstShow, event)
}

/**
 * @param m
 *
 * @properties={typeid:24,uuid:"45B0E29F-DA88-4289-85D7-72E04A950B46"}
 */
function logInfo(m) {
	messages = m;
}

/**
 * @param r
 *
 * @properties={typeid:24,uuid:"205E2C4A-2469-404D-A0C5-120762C32842"}
 */
function success(r) {
	application.output(r)
	logInfo(r);
}

/**
 * @param r
 *
 * @properties={typeid:24,uuid:"58A040A3-2009-4CE7-841E-7861C0688672"}
 */
function error(r) {
	application.output(r)
	logInfo(r);
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
function onAction$startReading(event) {
	messages = 'Swipe your card'
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
function onAction$StopReading(event) {
	messages = '';
}
