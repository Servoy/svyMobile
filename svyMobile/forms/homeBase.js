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
 * @public
 * @param {String} [id]
 * @properties={typeid:24,uuid:"A8326038-DE70-4429-9BF4-6DB5C10CC54F"}
 * @AllowToRunInFind
 */
function loadSubMenu(id) {
	foundset.find();
	foundset.menu_parent = id;
	foundset.search();
	foundset.sort('menu_order asc');
}

/**
 * @param {JSEvent} event
 * @public 
 * @properties={typeid:24,uuid:"082784C1-8390-4E6D-B755-D88F2876888B"}
 */
function selectMenuItem(event) {	
	scopes.nav.gotoForm(event,menu_id,menu_title);
	scopes.nav.toggleHeaderButtons(['home', 'back', 'title']);
	scopes.nav.gotoSubForm(1);
	scopes.nav.header_title = menu_title;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @public
 *
 * @properties={typeid:24,uuid:"990C4C77-4D43-40E2-B75B-F4D6D9BC5F24"}
 */
function onShow(firstShow, event) {
	loadMainMenu();
	scopes.nav.toggleHeaderButtons(['title','home']);
}
