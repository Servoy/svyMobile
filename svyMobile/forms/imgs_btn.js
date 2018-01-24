/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5398F6E9-0D7C-4379-85CE-B7102E8CD87A"}
 */
function uploadImg(event) {
	forms.images.getPicture(event, 'get')
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"AEEE84E2-036D-4960-ACF2-43CC0E46F91E"}
 */
function takeImg(event) {
	forms.images.getPicture(event, 'take')
}
