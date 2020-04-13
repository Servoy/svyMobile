/**
 * @public
 * @properties={typeid:24,uuid:"76E861E8-2574-4B57-861D-59EE4F3C6B03"}
 * @AllowToRunInFind
 */
function loadMainMenu() {
	foundset.find();
	foundset.menu_parent = '^';
	foundset.search();
	foundset.sort('menu_order asc');
}

/**
 * @param {JSEvent} event
 * @public
 * @properties={typeid:24,uuid:"082784C1-8390-4E6D-B755-D88F2876888B"}
 */
function selectMenuItem(event) {
	scopes.mobileBase.gotoForm(event, menu_id, menu_title);	
}