/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"CAD626F1-EBF6-4503-8FAE-EAC09F73E38A"}
 */
function onAction$gotoCCC(event) {
	application.showURL('https://admin.servoy-cloud.eu/','_self')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9BC1209B-C21E-4DD8-9C3C-BF8EA8C242C7"}
 */
function onAction$authenticate(event) {
	scopes.cordovaAuth.authenticated = true;
	application.getActiveWindow().hide()
}

/**
 * @properties={typeid:24,uuid:"EB375C60-469D-4AC1-B9BD-20B9822AC080"}
 */
function show(customUpload) {
	if (customUpload) {
		elements.authc.visible = false;
		elements.auth.visible = true;
	} else {
		elements.authc.visible = true;
		elements.auth.visible = false;
	}
	var w = application.createWindow(controller.getName(), JSWindow.MODAL_DIALOG);
	w.undecorated = true;
	w.show(controller.getName());	
	return scopes.cordovaAuth.authenticated;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"37E3DEC4-88BA-4F29-BB67-4AFF2902654F"}
 */
function onShow(firstShow, event) {
	scopes.cordovaAuth.authenticated = false;
}
