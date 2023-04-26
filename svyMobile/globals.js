/**
 * @properties={typeid:24,uuid:"61692780-D4C9-4817-9BDE-E0D9D615579E"}
 */
function createMenuData() {
	var f = datasources.mem.menu.getFoundSet();
	f.deleteAllRecords();

	//Add Main Menu
	scopes.mobileBase.addMenuItem('tables', 'Tables', 'fa-table', 'nav-neon', 1);
	scopes.mobileBase.addMenuItem('charts', 'Charts', 'fa-chart-pie', 'nav-skyblue', 3);
	scopes.mobileBase.addMenuItem('media', 'Media', 'fa-images', 'nav-yellow', 3);
	scopes.mobileBase.addMenuItem('camerapreview', 'Camera', 'fa-camera', 'nav-green', 3);
	scopes.mobileBase.addMenuItem('location', 'Location', 'fa-search-location', 'nav-green', 3);
	scopes.mobileBase.addMenuItem('push', 'Push', 'fa-bell', 'nav-orange', 3);
	scopes.mobileBase.addMenuItem('fingerprint', 'Fingerprint', 'fa-fingerprint', 'nav-white', 3);
	scopes.mobileBase.addMenuItem('file', 'File', 'fa-folder', 'nav-yellow', 3);	
		
	if(scopes.phonegap.isMobile.iOS() || scopes.phonegap.isMobile.iPadOS())
	scopes.mobileBase.addMenuItem('card', 'Card', 'fa-credit-card', 'nav-white', 3);
	
	scopes.mobileBase.addMenuItem('barcode', 'Bar Code', 'fa-barcode', 'nav-green', 3);
	scopes.mobileBase.addMenuItem('qrcode', 'QR Code', 'fa-qrcode', 'nav-skyblue', 3);
	scopes.mobileBase.addMenuItem('print', 'Print', 'fa-print', 'nav-neon', 3);	
	scopes.mobileBase.addMenuItem('misc', 'Misc', 'fa-play', 'nav-white', 3);
	
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

	//initialize mobile base
	scopes.mobileBase.onSolutionOpen(arg, queryParams);
	
	//initialize phonegap module
	scopes.phonegap.onSolutionOpen(arg, queryParams, onReadyCallBack);

	//setup main/sub menu
	createMenuData();

	scopes.mobileBase.init('nav');

	//load api keys
	mapAPIKey = application.getUserProperty('googleAPIKey');

	//load google firebase messaging key
	fcmAuthKey = application.getUserProperty('fcmAuthKey');
	
	plugins.svyBlockUI.stop();
	
	//add a javascript file to the head tag (helps us load a service worker if it exists in ROOT Context)
	/** @type {CustomType<ngclientutils.tag>} */
	var load_sw = {
		tagName: "script",
		attrs: [{
			name: "src",
			value: application.getServerURL() + "resources/fs/" + application.getSolutionName() + "/" + 'load-service-worker.js'
		}]
	};
	
	plugins.ngclientutils.contributedTags.push(load_sw);
	
}

/**
 * @properties={typeid:24,uuid:"B214D50F-AA23-4125-92CE-62D335196D96"}
 */
function onReadyCallBack() {
	//add check for back button press
	plugins.svyphonegapPhonegap.setOnBackMethod(goBack);	
	
	//get build version
	buildInfo = plugins.svyphonegapPhonegap.getBuildInfo()[0];	
	forms.nav.version = 'V' + buildInfo.versionNumber;
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
	scopes.mobileBase.goBack(null);
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