/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CEAAF0DC-B13A-462F-9563-576725F8A294"}
 */
var info = '';

/**
 * @properties={typeid:24,uuid:"A279F005-B242-4823-9379-42783E742200"}
 */
function getWifiIP(data) {
	info += "<h4> WIFI IP ADDRESS: </h4> <h4><b>" + data.ip + "</b></h4>"
}

/**
 * @param data
 *
 * @properties={typeid:24,uuid:"0FD03C6E-2DC1-4C27-B0C5-3592808C4702"}
 */
function getCarrierIP(data) {
	info += "<h4> CARRIER IP ADDRESS: </h4> <h4><b>" + data.ip + "</b></h4>"
}

/**
 * @param data
 *
 * @properties={typeid:24,uuid:"62AB62E7-06C8-4158-8492-72EE1EF1027B"}
 */
function getProxy(data) {
	info += "<h4> PROXY: </h4>"
	data.forEach(function(proxy) {		
		info += "<h4> Type:" + proxy.type + " Host:" + proxy.host + " Port:" + proxy.port + "</h4";		
	});
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 * @override
 *
 * @properties={typeid:24,uuid:"009BE325-1597-4B76-88B2-D9F8267DB3A1"}
 */
function onShow(firstShow, event) {
	info = '';
	plugins.svyphonegapNetworkinterface.getWiFiIPAddress(getWifiIP, null)
	plugins.svyphonegapNetworkinterface.getCarrierIPAddress(getCarrierIP, null)
	plugins.svyphonegapNetworkinterface.getHttpProxyInformation("https://www.github.com", getProxy, null)
	return _super.onShow(firstShow, event)
}
