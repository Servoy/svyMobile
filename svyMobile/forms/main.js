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
	if (scopes.globals.currentTab == 'push') {
		elements.navbar.brandText = 'PUSH NOTIFY';
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
	var info_btn;
	switch (scopes.globals.currentTab) {
	case 'examples':
		info_btn = plugins.dialogs.showInfoDialog('Servoy Mobile Examples', "A few examples of Servoy's open-source web components and services.  Select one of the examples to get a closer look.", "About Servoy", "Hide")
		if (info_btn == 'About Servoy') {
			plugins.svyphonegapBrowser.openExternalLink('https://servoy.com');
		}
		break;
	case 'tables':
		info_btn = plugins.dialogs.showInfoDialog('Table Component', "This is a high performance & lightweight table component which is part of the servoy-extra-components package.", 'More Info', 'Hide')
		if (info_btn == 'More Info') {
			plugins.svyphonegapBrowser.openExternalLink('https://github.com/Servoy/servoy-extra-components/wiki/Table');
		}
		break;
	case 'charts':
		info_btn = plugins.dialogs.showInfoDialog('Charts', "These are a set of customizable and responsive charts based on the open-source ChartJS library.  They can be data bound to Servoy's foundset as well as to custom datasets.", 'More Info', 'Hide')
		if (info_btn == 'More Info') {
			plugins.svyphonegapBrowser.openExternalLink('https://github.com/Servoy/svyChartJS');
		}
		break;
	case 'images':
		info_btn = plugins.dialogs.showInfoDialog('Camera and Media', "This is an example of file image capture using the Phonegap camera and file plugins.  Servoy can easily integrate with these types of plugins through the use of a bridge service.", 'More Info', 'Hide')
		if (info_btn == 'More Info') {
			plugins.svyphonegapBrowser.openExternalLink('https://github.com/Servoy/svyPhonegap');
		}
		break;
	case 'location':
		info_btn = plugins.dialogs.showInfoDialog('Geo Location', "This is an example of using geolocation alongside Google Maps using the Phonegap location plugin.  Servoy can easily integrate with these types of plugins through the use of a bridge service.", 'More Info', 'Hide')
		if (info_btn == 'More Info') {
			plugins.svyphonegapBrowser.openExternalLink('https://github.com/Servoy/svyPhonegap');
		}
		break;
	case 'push':
		info_btn = plugins.dialogs.showInfoDialog('Push Notifications', "This is an example of push notifications with Google Firebase Cloud Messaging via the Phonegap push plugin.  Servoy can easily integrate with these types of plugins through the use of a bridge service.", 'More Info', 'Hide')
		if (info_btn == 'More Info') {
			plugins.svyphonegapBrowser.openExternalLink('https://github.com/Servoy/svyPhonegap');
		}
		break;

	}

}
