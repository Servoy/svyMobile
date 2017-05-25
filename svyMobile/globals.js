
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
}

/**
 * @type {String}
 * Store current view
 * @properties={typeid:35,uuid:"0E934467-0DB7-40AE-8C9B-B24375085FA1"}
 */
var currentTab = 'home'