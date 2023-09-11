/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5632F8B7-3E4B-43D4-89D1-CA0F76EAC8B6"}
 */
function onAction$authenticate(event) {
	application.getActiveWindow().hide()
}

/**
 * @properties={typeid:24,uuid:"A6800F14-0E0C-476C-88D0-C5163EBE5516"}
 */
function show() {
	var w = application.createWindow(controller.getName(), JSWindow.MODAL_DIALOG);
	w.undecorated = true;
	w.show(controller.getName());	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F10692BD-2FF5-49CB-BF63-41A348A929F3"}
 */
function onShow(firstShow, event) { }

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"35FB590D-C372-415B-9B49-3679EAEC3388"}
 */
function onAction$gotoCCC(event) {
	application.showURL('https://admin.servoy-cloud.eu/','_self')
}
