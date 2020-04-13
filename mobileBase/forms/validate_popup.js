/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"09ACAD84-53DE-4995-B6C3-7E51E032817C"}
 */
var msg;

/**
 * @type {plugins.window.FormPopup}
 *
 * @properties={typeid:35,uuid:"53057C43-8AC9-49EC-9251-4784D35B6DAF",variableType:-4}
 */
var w;


/**
 * TODO generated, please specify type and doc for the params
 * @param message
 * @param element
 *
 * @properties={typeid:24,uuid:"051B6D59-2B42-4714-A87F-37B77A71A118"}
 */
function show(message,element){
	msg = message;
	w = plugins.window.createFormPopup(this);
	w.component(element);		
	w.show();	
}

/**
 * @properties={typeid:24,uuid:"F266C852-B7E3-445E-90F3-EBFF2160127C"}
 */
function hide() {
	// prevent calling the plugin if no tooltip is visible

	if (!w) {
		return;
	}

	// clear the tooltip variable and close the tooltip
	w = null;
	plugins.window.cancelFormPopup();
}