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
	foundset.find();
	foundset.productname = '#%' + searchTerm + '%';
	foundset.search();	
}