/**
 * @param {Number} foundsetindex
 * @param {String} columnindex
 * @param {Object} record
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F8A9B1C2-D3E4-4F5A-B6C7-D8E9F0A1B2C3"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	if (columnindex == 1 && record.phone) {
		application.output('tel:' + record.phone.replace(' ', ''));
		plugins.svyphonegapBrowser.openHrefTag('tel:' + record.phone.replace(' ', ''));
	}
}
