/**
 * @properties={typeid:35,uuid:"8004C0B2-7674-43C4-820D-6ACD655082E8",variableType:-4}
 */
var located = false;

/**
 * @properties={typeid:35,uuid:"91ABA2BB-EA97-4FCF-834E-8801ABE476B6",variableType:-4}
 */
var supported = false;

/**
 * @properties={typeid:35,uuid:"A1F0F6FE-4F2E-46B5-942D-1D4845627D41",variableType:-4}
 */
var watchID = null;

/**
 * Get current location using location service
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"B80C837B-A71F-4900-A54E-862E08040BAD"}
 */
function getLocation(event) {
	//watch when location changes.
	var options = { enableHighAccuracy: true }
	plugins.svyphonegapLocation.watchPosition(getLocationSuccess, getLocationFail, options);	
}

/**
 * Callback when location is acquired
 * @properties={typeid:24,uuid:"14E1CB25-B697-47B0-A9A6-F52B0050EF39"}
 */
function getLocationSuccess(pos, id) {
	application.output(pos);
	application.output(pos.coords);
	application.output(id);
	if (id)
	watchID = id;
	plugins.svyBlockUI.stop();
	if (!located) {
		located = true;
	}
	//send location to google map component
	if (pos && pos.coords) {
		elements.map.latitude = pos.coords.latitude
		elements.map.longitude = pos.coords.longitude
	}
	//clear watch once location found
	plugins.svyphonegapLocation.clearWatch(watchID);
}

/**
 * Callback when failed to get location
 * @properties={typeid:24,uuid:"C7DFB79D-C451-408E-A3BF-B2BCA1D0FE07"}
 */
function getLocationFail(err) {
	application.output(err)
	plugins.svyBlockUI.stop();	
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
	_super.onShow(firstShow, event);
	if (!scopes.globals.phonegapEnabled) {
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.nav.goBack(event);
		return;
	}
	if (firstShow) {
		plugins.svyBlockUI.show('Getting location...');
		application.output('Loading location')
		getLocation(event);
	}
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9C681DA5-92DB-4CE2-80B6-D3E34BFB4866"}
 */
function onHide(event) {
	plugins.svyphonegapLocation.clearWatch(watchID);
	return true
}
