/**
 * Utilize specific naming convention for forms
 * @properties={typeid:35,uuid:"188BE213-F15B-456D-B9C9-9B9B6AF3EA86",variableType:-4}
 */
var NC = {
	Small: 'Mobile',
	Large: 'Desktop',
	Container: 'Container'
}

/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"94688463-21FB-40AF-9996-EB8C76E592E8"}
 */
function onSolutionOpen(arg, queryParams) {
	plugins.ngclientutils.setViewportMetaForMobileAwareSites(plugins.ngclientutils.VIEWPORT_MOBILE_DENY_ZOOM);
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C225EF89-EFC8-4E26-9111-D8651CC33FCB"}
 */
var navF = 'nav';

//Add navigation logic here

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"B129AD39-98FB-41A7-9171-3652FA9F5147"}
 */
function goBack(event) {
	scopes.svyNavigation.close();
	var item = scopes.svyNavigation.getCurrentItem();
	gotoForm(event, item.getFormName());
}

/**
 * @param {JSEvent} event
 * @param {String} formName
 * @param {String} [title]
 * @param {Object} [customData]
 * @properties={typeid:24,uuid:"6B6A0D81-B1A1-45EA-8A16-4EC80E4ACEE1"}
 */
function gotoForm(event, formName, title, customData) {

	//check if item exists
	var item;
	scopes.svyNavigation.getNavigationItems().forEach(function(i) {
		if (i.getFormName() == formName) {
			item = i;
		}
	})
	if (!item) {
		item = new scopes.svyNavigation.NavigationItem(formName);
	}
	if (title) item.setText(title)
	if (customData) item.setCustomData(customData);
	forms[navF].openForm(formName + NC.Container);
	scopes.svyNavigation.open(item);
}

/**
 * @param {String} id
 * @param {String} title
 * @param {String} icon
 * @param {String} color
 * @param {Number} order
 * @param {String} [parent]
 * @properties={typeid:24,uuid:"070BD1DA-A9B0-407B-8BA4-43AA1D573141"}
 * @AllowToRunInFind
 */
function addMenuItem(id, title, icon, color, order, parent) {
	var f = datasources.mem.menu.getFoundSet();

	//check if menu item exists already
	f.find();
	f.menu_id = id;
	f.search();
	if (f.getSize() == 0) {
		if (f.newRecord()) {
			f.menu_id = id;
			f.menu_display = '<i class="fas ' + icon + '"></i> <br> ' + title;
			f.menu_color = color;
			f.menu_order = order;
			f.menu_parent = parent;
			f.menu_title = title;
			if (parent) {
				f.menu_display = '<i class="fas ' + icon + '"></i> ' + title;
			}
			databaseManager.saveData(f);
		}
	} else {
		throw 'Menu item already exists';
	}

}

/**
 * Initializes the module.
 * @public
 * @param {String} navForm the main navigation form which contains all other elements (usually form extends nav)
 * @param {{Small:String,Large:String,Container:String}} [nm] custom naming convention
 * @SuppressWarnings (unused)
 * @properties={typeid:35,uuid:"16133A46-6977-4CA5-9CBC-20DEF7CA19F4",variableType:-4}
 */
var init = function(navForm, nm) {
	if (nm) {
		NC = nm;
	}
	//iterate through all forms and see if we need to create any containers
	var frms = solutionModel.getForms();
	var fobj = { };
	for (var i = 0; i < frms.length; i++) {
		var fn = frms[i].name;
		if (fn == 'base_Ctn' || fn == 'base_Nav') continue;
		if (fn.indexOf(NC.Small) != -1) {
			fobj[fn.split(NC.Small)[0] + NC.Container] = true;
		}
		if (fn.indexOf(NC.Large) != -1) {
			fobj[fn.split(NC.Large)[0] + NC.Container] = true;
		}
	}

	//create containers
	for (i in fobj) {
		
		var ct = solutionModel.getForm(i)
		if (!ct) {
			ct = solutionModel.newForm(i, solutionModel.getForm('base_Ctn'));
		}

		var _Sm = solutionModel.getForm(i.split(NC.Container)[0] + NC.Small);
		var _Lg = solutionModel.getForm(i.split(NC.Container)[0] + NC.Large);

		if (_Sm) ct.getWebComponent('mobile').setJSONProperty('containedForm', _Sm)
		if (_Lg) ct.getWebComponent('desktop').setJSONProperty('containedForm', _Lg)

	}

	if (navForm) {
		navF = navForm;
	}

	//show first navigation form
	application.showForm(navF);

	//set initial navigation settings
	var po = scopes.svyNavigation.createNavigationPolicies();
	po.setNavigationPolicy(scopes.svyNavigation.NAVIGATION_POLICY.LINEAR)
	scopes.svyNavigation.setNavigationPolicies(po);

	scopes.svyNavigation.addNavigationListener(forms[navF]['navListener'])

}