/**
 * @properties={typeid:35,uuid:"8004C0B2-7674-43C4-820D-6ACD655082E8",variableType:-4}
 */
var located = false;

/**
 * Get current location using location service
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"B80C837B-A71F-4900-A54E-862E08040BAD"}
 */
function getLocation(event) {
	//watch when location changes.
	var options = { enableHighAccuracy: true }
	plugins.svyphonegapLocation.watchPosition(null, getLocationSuccess, getLocationFail, options);
}

/**
 * Callback when location is acquired
 * @properties={typeid:24,uuid:"14E1CB25-B697-47B0-A9A6-F52B0050EF39"}
 */
function getLocationSuccess(pos) {
	if (!located) {
		//send location to google map component
		elements.map.latitude = pos.coords.latitude;
		elements.map.longitude = pos.coords.longitude;
		located = true;
	}
}

/**
 * Callback when failed to get location
 * @properties={typeid:24,uuid:"C7DFB79D-C451-408E-A3BF-B2BCA1D0FE07"}
 */
function getLocationFail(err) {
	located = false;
	plugins.dialogs.showInfoDialog('Error', err);
}

/**
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"39422333-E68C-4C5D-9DB3-CAAE831D3633"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	if (firstShow) {
		getLocation(event);
	}
}
