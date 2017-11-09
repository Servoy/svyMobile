/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"66ACA505-ED09-49A2-BB0A-32AE709BD72C"}
 */
var searchTerm;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0C858346-75E0-4139-8FAA-B151ACA2F852"}
 * @AllowToRunInFind
 */
function onAction$search(event) {
	/** @type {JSFoundSet<db:/example_data/customers>} */
	var fs = forms.table_1.getFS();
	fs.find();
	fs.customerid = '%' + searchTerm + '%';
	fs.search();	
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C51A97F5-A536-4215-8FBD-5336FDB93E2E"}
 */
function onShow(firstShow, event) {
	plugins.keyListener.addKeyListener(elements.textbox_834,onAction$search(event))
	return _super.onShow(firstShow, event)
}
