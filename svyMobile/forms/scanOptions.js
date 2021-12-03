/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61BEB09F-129D-4974-9485-38D8E713602D",variableType:4}
 */
var preferFrontCamera = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6E595D75-5507-4DF6-A217-F8BF0AD162C6",variableType:4}
 */
var showFlipCameraButton = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1D5161C8-EAE8-4C4C-B885-7D7509BE448E",variableType:4}
 */
var showTorchButton = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"75A1EBA8-D206-42FE-926C-CF5E133C94DA",variableType:4}
 */
var torchOn = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"341B3F44-4C0B-470E-9E01-76EB0B2573C1",variableType:4}
 */
var saveHistory = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D9F0A4F3-B98B-4EA5-8CFE-96609D2C0210"}
 */
var prompt = "Place a barcode inside the scan area";

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"560E7625-0B51-453B-97E8-CE88AFA01206",variableType:4}
 */
var resultDisplayDuration = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"414D880B-78A4-4D52-BE4C-3B9D98054109"}
 */
var formats = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AFA3BF11-EB26-4B65-A83A-095F624C039D"}
 */
var orientation = "";

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DD48303C-2366-4EF2-932E-143F633B2F38",variableType:4}
 */
var disableAnimations = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8CBC0756-6463-4254-AA7D-AEFC2C74D5B7",variableType:4}
 */
var disableSuccessBeep = 0;

/**
 * @public 
 * @properties={typeid:24,uuid:"6793F800-5111-4116-AA9B-A8403606C740"}
 */
function setOptions(){
	var popup = application.createWindow(controller.getName(), JSWindow.MODAL_DIALOG);
	popup.title = "Options"
	popup.setSize(420, 500);
	popup.show(controller.getName());
}

/**
 * @public 
 * @return {Object}
 * @properties={typeid:24,uuid:"3378F778-B579-4FA5-AF40-E162A6AF8D8F"}
 */
function getOptions(){
	var obj = {};
	obj.preferFrontCamera = preferFrontCamera ? true: false;
    obj.showFlipCameraButton = preferFrontCamera ? true : false;
    obj.showTorchButton = preferFrontCamera ? true : false;
    obj.torchOn = preferFrontCamera ? true : false;
    obj.saveHistory = preferFrontCamera ? true : false;
    obj.prompt = prompt;
    obj.resultDisplayDuration = resultDisplayDuration;
    obj.formats = formats;
    obj.orientation = orientation;
    obj.disableAnimations = preferFrontCamera ? true : false;
    obj.disableSuccessBeep = preferFrontCamera ? true: false;
	return obj;
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E0FA8941-22F4-48F7-A9DA-E9B96AD40B66"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
}
