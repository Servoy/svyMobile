/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"09ACAD84-53DE-4995-B6C3-7E51E032817C"}
 */
var msg;

/**
 * @param message
 * @param element
 *
 * @properties={typeid:24,uuid:"5AE21ED7-9B13-4E23-B7F6-7C832EFEB542"}
 */
function show(message,element){
	msg = message;
	var w = plugins.window.createFormPopup(this);
	w.component(element);		
	w.show();	
}