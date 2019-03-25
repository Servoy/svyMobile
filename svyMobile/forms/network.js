/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CEAAF0DC-B13A-462F-9563-576725F8A294"}
 */
var info = '';
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8364583D-FE17-459F-880F-75A77C3A3327"}
 */
function onActionGetNetworkIP(event) {
	info += "<h4> IP ADDRESS: </h4> <h4><b>192.168.86.200</b></h4>"
	plugins.svyphonegapNetworkinterface.getCarrierIPAddress(getIP, null)
}

/**
 * @properties={typeid:24,uuid:"A279F005-B242-4823-9379-42783E742200"}
 */
function getIP(data) {
	info += "<h4> IP ADDRESS: </h4> <h4><b>" + data.ip + "</b></h4>"
	info += "<h4> SUBNET: </h4> <h4><b>" + data.ip + "</b></h4>"
}

/**
 * TODO generated, please specify type and doc for the params
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
	info += "<h4> IP ADDRESS: </h4> <h4><b>192.168.86.200</b></h4>"
	info += "<h4> SUBNET: </h4> <h4><b>192.168.86.200</b></h4>"
	plugins.svyphonegapNetworkinterface.getWiFiIPAddress(getIP, null)

	info += "<h4> CARRIER ADDRESS: </h4> <h4><b>192.168.86.200</b></h4>"
	info += "<h4> SUBNET: </h4> <h4><b>192.168.86.200</b></h4>"
	plugins.svyphonegapNetworkinterface.getCarrierIPAddress(getIP, null)

	info += "<h4> PROXY: </h4>"
	info += "<h4> Type: test Host:test Port:3080</h4";
	plugins.svyphonegapNetworkinterface.getHttpProxyInformation("www.github.com", getProxy, null)

	return _super.onShow(firstShow, event)
}
