/**
 * @param {JSEvent} event
 * @param {Object} m
 *
 * @public
 *
 * @properties={typeid:24,uuid:"450C2C2D-1740-4A5F-BAA6-ACE5DD6B5E91"}
 * @AllowToRunInFind
 */
function onClick$menuItem(event, m) {
	var selected = '';
	if (m != undefined) {
		selected = m['itemId'];
	} else {
		selected = 'home';
		elements.navbar.visible = false;
		elements.infobtn.visible = false;
	}
	scopes.globals.currentTab = selected;
	if (scopes.globals.currentTab == 'examples') {
		elements.navbar.brandText = 'EXAMPLES';
		elements.navbar.visible = true;
		elements.infobtn.visible = true;
		elements.navbar.brandLogo = 'media:///servoy.png'
	} else {
		elements.navbar.brandLogo = 'media:///back.png'
		plugins.svyBlockUI.show('loading...');
	}

	if (scopes.globals.currentTab == 'tables') {
		elements.navbar.brandText = 'TABLES';
	}
	if (scopes.globals.currentTab == 'charts') {
		elements.navbar.brandText = 'CHARTS';
	}
	if (scopes.globals.currentTab == 'images') {
		elements.navbar.brandText = 'MEDIA';
	}
	if (scopes.globals.currentTab == 'location') {
		elements.navbar.brandText = 'LOCATION';
	}

	elements.tabless.removeAllTabs();
	elements.tabless.addTab(selected);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D932F87D-8F9D-4A9C-8143-AAEE7FBCB56B"}
 */
function onAction$info(event) {
	switch (scopes.globals.currentTab) {
	case 'examples':
		plugins.dialogs.showInfoDialog('INFO', "Here we have a few examples of Servoy's open-source components.  Select one of the examples to get a closer look.")
		break;
	case 'tables':
		plugins.dialogs.showInfoDialog('INFO', "This is a high performance table component which is part of the servoy-extra-components package. (https://github.com/Servoy/servoy-extra-components)")
		break;
	case 'charts':
		plugins.dialogs.showInfoDialog('INFO', "These are a set of customizable and responsive charts based on the open-source ChartJS library.  They can be data bound to Servoy's foundset as well as to custom datasets. (https://github.com/Servoy/svyChartJS)")
		break;
	case 'images':
		plugins.dialogs.showInfoDialog('INFO', "This is an example of file image capture using the Phonegap camera and file plugins.  Servoy can easily integrate with these types of plugins through the use of a bridge service. (https://github.com/Servoy/svyPhonegap)")
		break;
	case 'location':
		plugins.dialogs.showInfoDialog('INFO', "This is an example of using geolocation with the phonegap location plugin.  Servoy can easily integrate with these types of plugins through the use of a bridge service. (https://github.com/Servoy/svyPhonegap)")
		break;

	}

}
