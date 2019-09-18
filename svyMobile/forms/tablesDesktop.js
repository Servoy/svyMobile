/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5EEC76AA-A3A3-4BFC-B9D4-65EB90797460"}
 */
var searchTerm = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"52263F34-CA3B-4663-93C2-7BA13B0997B5"}
 * @AllowToRunInFind
 */
function onAction$search(event) {
	foundset.find();
	foundset.productname = '#%' + searchTerm + '%';
	foundset.search();	
}
