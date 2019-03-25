
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
	//setup viewport for mobile view (disable zooming)
	plugins.ngclientutils.setViewportMetaForMobileAwareSites(plugins.ngclientutils.VIEWPORT_MOBILE_DENY_ZOOM);
	
	//load api keys
	mapAPIKey = application.getUserProperty('googleAPIKey');
	
	//load google firebase messaging key
	fcmAuthKey = application.getUserProperty('fcmAuthKey');
	
	//load universal link
//	plugins.svyphonegapUniversalLink.subscribe('testEvent',uvLinkCallBack)
}

/**
 * @properties={typeid:24,uuid:"BCC0AB28-E42F-46E7-8223-E3DE9A6DF797"}
 */
function uvLinkCallBack(eventData){
	plugins.dialogs.showInfoDialog('Universal Link',eventData);
}


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