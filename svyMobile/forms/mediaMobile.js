/**
 * @properties={typeid:35,uuid:"1F2DF802-D650-48A5-9BD3-A04ADB011DAC",variableType:-4}
 */
var img;

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
			targetWidth: 768,
			targetHeight: 1024,
			quality: 35,
			destinationType: scopes.datamodel.Camera.DestinationType.DATA_URL,
			sourceType: scopes.datamodel.Camera.PictureSourceType.CAMERA,
			correctOrientation: true
		}
		plugins.svyphonegapCamera.getPicture(getPicSuccess, getPicFail, options);
	} else {
		//get media from from default gallery on device
		plugins.svyphonegapCamera.getPicture(getPicSuccess, getPicFail);
	}
}

/**
 * Callback when picture received successfully
 * @properties={typeid:24,uuid:"8EEAFB0D-133F-4009-9C41-83B8A890D19B"}
 */
function getPicSuccess(res) {
	img = utils.base64ToBytes(res)
	//display the image.
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

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"40DB63D5-1B70-4369-9838-0437DE740083"}
 */
function onShow(firstShow, event) {	
	if (!scopes.globals.phonegapEnabled) {
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.mobileBase.goBack(event);
	}
}
