/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"16E91054-D2C2-4B74-AEF3-CE74FFA817B3"}
 */
var header_title = '';

//Add navigation logic here

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"B129AD39-98FB-41A7-9171-3652FA9F5147"}
 */
function goBack(event) {
	scopes.svyNavigation.close();
	var item = scopes.svyNavigation.getCurrentItem();
	var n = item.getFormName();
	//check to see what level we are at and move down a level if needed.
	if (n.indexOf('_level_') != -1) {
		var level = n.split('_level_')[1];
		if (level > 1) {
			return gotoSubForm(level);
		} else {
			//navigate back one more time if on level 1
			scopes.svyNavigation.close();
			item = scopes.svyNavigation.getCurrentItem();
		}
	}
	return gotoSubForm(1);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3ED29236-B0CF-495F-BA4A-ECE94B8B6134"}
 */
function goHome(event) {
	scopes.svyNavigation.getNavigationItems().forEach(function(i) {
		scopes.svyNavigation.close(i);
	})
	scopes.nav.gotoForm(event, 'homeContainer', 'Main Menu');
	gotoSubForm(1);
}

/**
 * @param {JSEvent} event
 * @param {String} formName
 * @param {String} title
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
	forms.nav.switchContent(formName.split('_level_')[0]);
	scopes.svyNavigation.open(item);
}

/**
 * @param {Array<String>} [elName]
 * @properties={typeid:24,uuid:"F7FAAF6F-D4C4-4BFC-B22D-D04FB11090CA"}
 */
function toggleHeaderButtons(elName) {
	//iterate through all header forms and activate/deactivate buttons
	//by default hide all elements.
	var fr = ['headerDesktop', 'headerMobile'];
	fr.forEach(function(i) {
		for (var j = 0; j < forms[i].elements.allnames.length; j++) {
			var name = forms[i].elements.allnames[j];
			var elem = forms[i].elements[name];
			if (elName.indexOf(name) != -1) {
				elem.visible = true
			} else {
				elem.visible = false;
			}
		}
	})
}

/**
 * @properties={typeid:24,uuid:"52E1B658-11B3-454A-A35B-0CC5B53EF71E"}
 */
function gotoSubForm(level) {

	//first get current form
	var f = scopes.svyNavigation.getCurrentItem().getFormName().split('_level_')[0];
	forms[f].switchForms(level);
	//generate navigation item for sub menu
	var nm = f;
	if (level != 1) {
		nm = f + '_level_' + level
	}
	gotoForm(null, nm, '');
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
 * @param {String} formName
 * @param {Boolean} [mobile]
 * @properties={typeid:24,uuid:"6DA182A6-50AE-4A17-B321-E2F63FB94247"}
 */
function setHeaders(formName, mobile) {
	if (mobile) {
		forms.nav.setHeaderMobile(formName);
	} else {
		forms.nav.setHeaderDesktop(formName);
	}
}

/**
 * Get current level of shown form
 * @properties={typeid:24,uuid:"1879BF61-1875-45B0-921A-1DEC911C835B"}
 */
function getCurrentLevel() {
	var f = scopes.svyNavigation.getCurrentItem().getFormName().split('_')[0];
	if (f) {
		var el = forms[f].elements;
		//get current form names
		/** @type {String} */
		var mF = el['mobile'].getTabFormNameAt(1);
		mF = mF[mF.length - 1];
		mF = isNaN(mF) ? 1 : parseInt(mF);
		/** @type {String} */
		var dF = el['desktop'].getTabFormNameAt(1);
		dF = dF[dF.length - 1];
		dF = isNaN(dF) ? 1 : parseInt(dF);

		return {
			mobile_level: mF,
			desktop_level: dF
		}
	}
	return null;
}

/**
 * Initializes the module.
 * @public
 * @SuppressWarnings (unused)
 * @properties={typeid:35,uuid:"9C3DE1BE-A17E-4380-AB9F-09500C26514F",variableType:-4}
 */
var init = function() {
	application.showForm(forms.nav);
	var po = scopes.svyNavigation.createNavigationPolicies();
	po.setNavigationPolicy(scopes.svyNavigation.NAVIGATION_POLICY.LINEAR)
	scopes.svyNavigation.setNavigationPolicies(po);
}