/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"51B4F3A1-15C7-4402-9E6E-03AC6455EADA"}
 */
function uploadImg(event) {
	forms.images.getPicture(event, 'get')
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3B489734-D2B1-423C-96CA-98EC71FC76F7"}
 */
function takeImg(event) {
	forms.images.getPicture(event, 'take')
}
