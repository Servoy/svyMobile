/**
 * Get an Image using camera service
 * @param {JSEvent} event
 * @param {String} type
 * @properties={typeid:24,uuid:"249CF607-D46A-4B51-B3A0-7FCE163F24B6"}
 */
function getPicture(event, type) {
	plugins.svyBlockUI.show('Getting image...');
	var options = { }
	if (type == 'take') {		
		//use camera instead of file gallery
		options = {
			quality: 50,
			destinationType: scopes.datamodel.Camera.DestinationType.DATA_URL,
			sourceType: scopes.datamodel.Camera.PictureSourceType.CAMERA,
			correctOrientation: true
		}
		plugins.svyphonegapCamera.getPicture(getPicSuccess, getPicFail, options);
	} else {
		plugins.svyphonegapCamera.getPicture(getPicSuccess, getPicFail);
	}
}

/**
 * Callback when picture received successfully
 * @properties={typeid:24,uuid:"8EEAFB0D-133F-4009-9C41-83B8A890D19B"}
 */
function getPicSuccess(res) {
	//display the image.
	elements.contact_photo.imageURL = '';
	elements.contact_photo.text = '<img src="data:image/png;base64,' + res + '"/>'
	plugins.svyBlockUI.stop(150);
}

/**
 * Callback when failed to get picture
 * @properties={typeid:24,uuid:"7B9DFF2B-C1BB-481A-B157-BBE78580E5E5"}
 */
function getPicFail(err) {
	application.output('failed to get picture - ' + err);
	plugins.svyBlockUI.stop();
}