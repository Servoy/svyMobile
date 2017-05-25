/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2C2FBE96-1ED4-48B4-82CB-3A56FFE517F8"}
 */
var googleKey = '';

/**
 * Get current location using location service
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"B80C837B-A71F-4900-A54E-862E08040BAD"}
 */
function getLocation(event) {
	//	plugins.svyBlockUI.show('Loading location...');
	plugins.svyphonegapLocation.watchPosition(getLocationSuccess,getLocationSuccess,getLocationFail,{ enableHighAccuracy: true})
}

/**
 * Callback when picture received successfully
 * @properties={typeid:24,uuid:"14E1CB25-B697-47B0-A9A6-F52B0050EF39"}
 */
function getLocationSuccess(pos) {
	//send location to google map component
	elements.svy_G_Maps_988.latitude = pos.coords.latitude
	elements.svy_G_Maps_988.longitude = pos.coords.longitude
}

/**
 * Callback when failed to get picture
 * @properties={typeid:24,uuid:"C7DFB79D-C451-408E-A3BF-B2BCA1D0FE07"}
 */
function getLocationFail(err) {		
	plugins.dialogs.showInfoDialog('', err);
}
