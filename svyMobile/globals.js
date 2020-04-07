/**
 * @properties={typeid:24,uuid:"61692780-D4C9-4817-9BDE-E0D9D615579E"}
 */
function createMenuData() {
	var f = datasources.mem.menu.getFoundSet();
	f.deleteAllRecords();

	//Add Main Menu
	scopes.nav.addMenuItem('tablesContainer', 'Tables', 'fa-table', 'nav-neon', 1);
	scopes.nav.addMenuItem('chartsContainer', 'Charts', 'fa-chart-pie', 'nav-skyblue', 3);
	scopes.nav.addMenuItem('mediaContainer', 'Media', 'fa-images', 'nav-yellow', 3);
	scopes.nav.addMenuItem('locationContainer', 'Location', 'fa-search-location', 'nav-green', 3);
	scopes.nav.addMenuItem('pushContainer', 'Push', 'fa-bell', 'nav-orange', 3);
	scopes.nav.addMenuItem('fingerprintContainer', 'Fingerprint', 'fa-fingerprint', 'nav-white', 3);
	scopes.nav.addMenuItem('fileContainer', 'File', 'fa-folder', 'nav-yellow', 3);
	scopes.nav.addMenuItem('cardContainer', 'Card', 'fa-credit-card', 'nav-white', 3);
	//	scopes.nav.addMenuItem('settingsContainer', 'Settings', 'fa-cog', 'nav-gray', 3);
	databaseManager.saveData(f);
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
 * @properties={typeid:24,uuid:"5FB44370-D763-4043-AFF8-46E0F5CD1FF5"}
 */
function onSolutionOpen(arg, queryParams) {
	plugins.svyBlockUI.show('')
	
	plugins.fontawesomeLib.load();
	
	//initialize phonegap module
	scopes.phonegap.onSolutionOpen(arg, queryParams, onReadyCallBack);

	//initialize mobile base
	scopes.mobileBase.onSolutionOpen(arg, queryParams);

	//setup main/sub menu
	createMenuData();

	//setup headers
	scopes.nav.setHeaders('headerMobile', true);
	scopes.nav.setHeaders('headerDesktop', false);

	scopes.nav.init();

	//load api keys
	mapAPIKey = application.getUserProperty('googleAPIKey');

	//load google firebase messaging key
	fcmAuthKey = application.getUserProperty('fcmAuthKey');

	//add check for back button press
	plugins.svyphonegapPhonegap.setOnBackMethod(goBack);
	
	plugins.svyBlockUI.stop();

}

/**
 * @properties={typeid:24,uuid:"B214D50F-AA23-4125-92CE-62D335196D96"}
 */
function onReadyCallBack() {
	//get build version
	buildInfo = plugins.svyphonegapPhonegap.getBuildInfo()[0]
	scopes.nav.header_title = 'V' + buildInfo.versionNumber;
	//check if phonegap is supported
	phonegapEnabled = true;
	application.output('Device Info', LOGGINGLEVEL.DEBUG)
	application.output(plugins.svyphonegapDevice.getDeviceInfo(), LOGGINGLEVEL.DEBUG)
}

/**
 * @properties={typeid:24,uuid:"D3B192E4-A883-4B65-8862-D01A0693B818"}
 */
function goBack() {
	var item = scopes.svyNavigation.getCurrentItem();
	if (item.getFormName() == 'homeContainer') {
		var ans = plugins.dialogs.showQuestionDialog('INFO', 'Exit App?', 'Yes', 'No');
		if (ans == 'Yes') {
			plugins.svyphonegapPhonegap.exit();
			application.exit();
		}
	}
	scopes.nav.goBack(null);
}

/**
 * @properties={typeid:24,uuid:"68C881CF-FA6D-4C5F-BE3F-92AA583AE668"}
 */
function support(data) {
	application.output('supported');
	phonegapEnabled = true;
}

/**
 * @type {{versionNumber:String}}
 *
 * @properties={typeid:35,uuid:"1C4C7199-42B0-421C-92BA-5C47BF963F88",variableType:-4}
 */
var buildInfo;

/**
 * @properties={typeid:35,uuid:"51B0C634-C3F8-4698-8E24-425144F1BEDB",variableType:-4}
 */
var phonegapEnabled = false;

/**
 * @type {String}
 * Store current view
 * @properties={typeid:35,uuid:"0E934467-0DB7-40AE-8C9B-B24375085FA1"}
 */
var currentTab = 'home'

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E6F1534E-7187-44E8-A2FC-745DC9C4429D"}
 */
var mapAPIKey = ''

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AD1C9C1A-E7BC-489E-89FD-C05CC83A0BB1"}
 */
var fcmAuthKey = ''