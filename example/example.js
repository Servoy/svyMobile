/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"E86963EC-7A7E-40F3-81D2-FDAD156F2721"}
 */
function onSolutionOpen(arg, queryParams) {
	//initialize mobile base
	scopes.mobileBase.onSolutionOpen(arg, queryParams);

	//setup main/sub menu
	createMenuData();

	//setup headers
	scopes.nav.setHeaders('headerMobile', true);
	scopes.nav.setHeaders('headerDesktop', false);

	scopes.nav.init();	
}

/**
 * @properties={typeid:24,uuid:"D868C488-2BD8-401E-99D8-C4CC46063B21"}
 */
function createMenuData() {
	var f = datasources.mem.menu.getFoundSet();
	f.deleteAllRecords();

	//Add Main Menu
	scopes.nav.addMenuItem('customers', 'Receiving', 'fa-truck-loading', 'nav-skyblue', 1);
	scopes.nav.addMenuItem('shipping', 'Shipping', 'fa-shipping-fast', 'nav-green', 3);
	scopes.nav.addMenuItem('kitting', 'Kitting', 'fa-box-open', 'nav-gray', 3);
	scopes.nav.addMenuItem('inventory', 'Inventory', 'fa-boxes', 'nav-green', 3);
	scopes.nav.addMenuItem('labels', 'Labels', 'fa-tags', 'nav-neon', 3);
	scopes.nav.addMenuItem('picking', 'Picking', 'fa-dolly-flatbed', 'nav-orange', 3);
	scopes.nav.addMenuItem('rma', 'RMA', 'fa-heart-broken', 'nav-neon', 3);
	scopes.nav.addMenuItem('move', 'Move', 'fa-dolly', 'nav-skyblue', 3);
	scopes.nav.addMenuItem('settings', 'Settings', 'fa-cog', 'nav-gray', 3);

	//Add Sub Menu for customers
	scopes.nav.addMenuItem('customersContainer', 'Customers', 'fa-circle', 'nav-skyblue', 1, 'customers');
	scopes.nav.addMenuItem('ordersContainer', 'Orders', 'fa-circle', 'nav-yellow', 2, 'customers');

	//Add Sub Menu for shipping
	scopes.nav.addMenuItem('testContainer', 'Test', 'fa-circle', 'nav-skyblue', 1, 'shipping');

	databaseManager.saveData(f);
}
