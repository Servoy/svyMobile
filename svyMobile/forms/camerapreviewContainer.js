/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A4AD3BD5-2985-445B-B3BE-668AC734C5CE"}
 */
var messages = '';


/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"046CAA25-9273-485B-B2E3-AB077E7E5010"}
 */
function onAction$takePicture(event) { 
	plugins.svyphonegapCamerapreview.takePicture({width:640, height:480, quality: 100},picCB,picCB)
}

/**
 * @param d
 *
 * @properties={typeid:24,uuid:"0FCD1EB6-3E42-46C5-9403-2C763740C739"}
 */
function picCB(d){
	plugins.svyphonegapCamerapreview.stopCamera(cb,cb);
	elements.photo.imageURL = null;
	elements.photo.text = '<img src="data:image/png;base64,' + d + '"/>'
	elements.photo.visible = true;
	application.executeLater(start, 3500);
}

/**
 * @properties={typeid:24,uuid:"7D22A105-8C60-4FE6-ABCF-C20D998C27D3"}
 */
function cb(msg) {	
	application.output(msg)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B789D519-E958-4BE9-9E41-3AE8F1035501"}
 */
function onShow(firstShow, event) {
	messages = '';
	if (!scopes.globals.phonegapEnabled) {
		messages = 'Plugin is not loaded or supported.'
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.mobileBase.goBack(event);
	} else {
		application.executeLater(start, 250);

	}
}

/**
 * @properties={typeid:24,uuid:"2420289D-A5DB-4195-BA9C-1287308A43DF"}
 */
function start() {
	//	Options: All options stated are optional and will default to values here
	//
	//			x - Defaults to 0
	//			y - Defaults to 0
	//			width - Defaults to window.screen.width
	//			height - Defaults to window.screen.height
	//			camera - See CAMERA_DIRECTION - Defaults to front camera
	//			toBack - Defaults to false - Set to true if you want your html in front of your preview
	//			tapPhoto - Defaults to true - Does not work if toBack is set to false in which case you use the takePicture method
	//			tapFocus - Defaults to false - Allows the user to tap to focus, when the view is in the foreground
	//			previewDrag - Defaults to false - Does not work if toBack is set to false
	//			storeToFile - Defaults to false - Capture images to a file and return back the file path instead of returning base64 encoded data.
	//			disableExifHeaderStripping - Defaults to false - Android Only - Disable automatic rotation of the image, and let the browser deal with it (keep reading on how to achieve it)

	var options = {
		x: 0,
		y: 0,
		width: controller.getFormWidth(),
		height: controller.getPartHeight(JSPart.BODY - 100),
		camera: 1, //use back camera
		toBack: true,
		tapPhoto: false,
		tapFocus: true,
		previewDrag: false,
		storeToFile: false,
		disableExifHeaderStripping: false
	};
	plugins.svyphonegapCamerapreview.startCamera(options, cb, cb);
	elements.photo.visible = false;		
	application.executeLater(setOptions,1000)
}

/**
 * @properties={typeid:24,uuid:"A667F6BD-8A49-4919-988D-D2D4BFF7F1FE"}
 */
function setOptions(){
	// all options at https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview
	plugins.svyphonegapCamerapreview.setCameraOption('setFocusMode','continuous-picture',cb,cb);
//	plugins.svyphonegapCamerapreview.setCameraOption('setFlashMode','torch',cb,cb);
//	plugins.svyphonegapCamerapreview.setCameraOption('setColorEffect','aqua',cb,cb);
	plugins.svyphonegapCamerapreview.setCameraOption('setExposureMode','auto',cb,cb);
//	plugins.svyphonegapCamerapreview.setCameraOption('setWhiteBalanceMode','auto',cb,cb);
//	plugins.svyphonegapCamerapreview.setCameraOption('switchCamera','',cb,cb);
	
	
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
 * @properties={typeid:24,uuid:"F2B394BA-1212-4ED6-9701-487363E28662"}
 */
function onHide(event) {
	plugins.svyphonegapCamerapreview.stopCamera(cb,cb)
	return true
}
