/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1862C059-FDE9-4513-B921-9B7ACD5D5A6B"}
 */
function onShow(firstShow, event) {
	scopes.nav.header_title = '';
	//check if phonegap is supported
	plugins.svyphonegapPhonegap.executeScript('', [], support);
	//add check for back button press
	plugins.svyphonegapPhonegap.setBackMethod(executeBack);
}

/**
 * @properties={typeid:24,uuid:"515A989A-D906-42D6-A74D-1D5C9D4834EB"}
 */
function executeBack() {
	plugins.dialogs.showInfoDialog("INFO", "Back button pressed.")
}

/**
 * @properties={typeid:24,uuid:"763BA063-A448-4A6D-9F6D-7B0BDF952CD6"}
 */
function support() {
	application.output('supported');
	scopes.globals.phonegapEnabled = true;
}
