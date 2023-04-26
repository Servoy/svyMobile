/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C71494F5-92F0-42EB-AABC-FD2B3586DBFF"}
 */
var app_orientation = 'default';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3E6FC647-7479-4DAC-AA73-CD97E7CF53E2"}
 */
var app_url = '';

/**
 * @type {String}
 * @properties={typeid:35,uuid:"1F45F84D-BFBC-425D-9C7C-15D974B1EC16"}
 *
 */
var app_email = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47EF2107-92B3-4A9A-8DF5-F20080749AE7"}
 */
var app_author = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ABE79464-CE3E-4D4E-9B2A-0B6F54ACEEE5"}
 */
var app_desc = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6106C644-2563-41FA-9C80-80FEA6351D7D"}
 */
var app_name = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0EC21A05-E8E9-4EC1-8439-BE77A7ABD395"}
 */
var app_version = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"34386215-759D-4210-AC65-74CC72A81F72"}
 */
var appid = '';

/**
 * @properties={typeid:35,uuid:"53D76021-3969-4415-95D5-FF5648944373",variableType:-4}
 */
var googleplist;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D4BC5E17-B914-4CA9-8E03-FD97C4E2802A"}
 */
var googleplist_filename;

/**
 * @properties={typeid:35,uuid:"C5602B85-1436-4CB8-B7B8-C6A0B8D48799",variableType:-4}
 */
var googlejson;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DF14EDD4-8BB4-4177-8362-ED5BA6B92A52"}
 */
var googlejson_filename;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CE41A25F-4E8F-4B9F-8C3B-79B3DB183E13"}
 */
var plugins_list = '';

/**
 * @properties={typeid:35,uuid:"F891A2A1-5253-4427-8EA0-AC83C56AA460",variableType:-4}
 */
var img;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5BF7A066-1CEA-4FA7-A04C-54FBC40BF6DA"}
 */
var info = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"45A6ACA0-3BCF-4674-BBCB-0EF08D2D900C"}
 */
var b_dir = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"33D3AC26-BAB9-4C48-94FC-0900A37ABC5D"}
 */
var build_id;

/**
 * @type {plugins.file.JSFile}
 *
 * @properties={typeid:35,uuid:"3DE861DF-51C9-4CB6-B07E-6864484689FF",variableType:-4}
 */
var build_dir;

/**
 * @type {plugins.file.JSFile}
 *
 * @properties={typeid:35,uuid:"13E77D44-DB2F-4FD3-8DBC-DB8C8270E5DB",variableType:-4}
 */
var build_file;

/**
 * @properties={typeid:35,uuid:"5C5CDFF1-DBBB-4643-BB77-17FDC9DF00E7",variableType:-4}
 */
var android_keystore;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C5E117E7-4144-4789-8186-8740C48025A9"}
 */
var android_key_pass;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"75665119-6234-4D0B-B482-4FE5049D42C3"}
 */
var android_key_store_pass;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C55B7779-A422-47CD-8B40-2F45523DADF4"}
 */
var android_title = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DDE55CBA-0E6E-4A30-81D2-91F95108D76F"}
 */
var android_alias = '';

/**
 * @properties={typeid:35,uuid:"100DB9EA-D1C0-476B-A4FB-32A82BF98D74",variableType:-4}
 */
var ios_cert;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"55D07CB1-786B-43DC-9EDC-B89E179D3C75"}
 */
var ios_cert_pass;

/**
 @properties={typeid:35,uuid:"6738EE74-13AB-491B-A3FD-6B7AD3D3A53B",variableType:-4}
 */
var ios_provision;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47E3435D-A91E-4BAE-9031-9630EC9A7504"}
 */
var ios_title = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3EED66ED-7D7C-48DA-9684-4E39C0C3A614"}
 */
var errors = '';

/**
 * @properties={typeid:35,uuid:"22954F4A-230B-4F87-8D5E-5CDEAF0DD23D",variableType:-4}
 */
var keyObj = { };

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"94F4804D-3E27-4D7D-B803-522C50C068B4"}
 */
function onDataChange(oldValue, newValue, event) {
	if (newValue && ((newValue.length/1000)>512)){
		img = null;
		plugins.dialogs.showInfoDialog('INFO','Uploaded image is too large.  Please use an image that is 512KB or less.')
		return false;
	}	
	
	var b64 = new Packages.org.apache.commons.codec.binary.Base64();	
	//display the image.
	elements.icon_preview.text = '<img src="data:image/png;base64,' + b64.encodeAsString(newValue) + '"/>'
	elements.icon_preview.visible = true;
	elements.icon_upload.visible = false;
	elements.clear_icon.visible = true;
	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1F3E4461-006A-4F30-BA79-D3499849C184"}
 */
function onAction$clearIcon(event) {
	elements.icon_upload.visible = true;
	elements.icon_preview.text = '';
	elements.icon_preview.visible = false;
	elements.clear_icon.visible = false;
	img = null;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EFA2A5C2-7D3D-4CD7-A980-64FE205FC21C"}
 */
function onShow(firstShow, event) {
	elements.icon_preview.visible = false;
	elements.clear_icon.visible = false;
	elements.googlejson.visible = false;
	elements.googleplist.visible = false;
	googlejson = null;
	googleplist = null;
	elements.googlejson.uploadText = elements.googlejson.toolTipText
	elements.googleplist.uploadText = elements.googleplist.toolTipText

	/** @type {CustomType<webnotificationsToastr.toastrOptions>} */
	var options = {
		"closeButton": false,
		"newestOnTop": false,
		"positionClass": "toast-top-full-width",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut",
		"progressBar": false
	}
	plugins.webnotificationsToastr.setGlobalOptions(options);
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"865432A7-61FE-4382-93B7-A9C3382D88DF"}
 */
function onDataChange$plugins(oldValue, newValue, event) {
	googlejson = null;
	googleplist = null;
	if (plugins_list.indexOf('FCM Push Notifications') != -1) {
		elements.googlejson.visible = true;
		elements.googleplist.visible = true;
	} else {
		elements.googlejson.visible = false;
		elements.googleplist.visible = false;
	}

	//if we are using both plugins we need to remove and give a warning
	if (plugins_list.includes('Bar Code Scanner') && plugins_list.includes('QR Code Scanner')) {
		var arr = plugins_list.split('\n');
		var tmpArr = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != 'Bar Code Scanner' && arr[i] != 'QR Code Scanner') {
				tmpArr.push(arr[i])
			}
		}
		if (tmpArr.length > 0) {
			plugins_list = tmpArr.join('\n')
		} else {
			plugins_list = '';
		}
		elements.pluginslist.visible = false;
		application.executeLater(refreshPlugins, 0);		
		plugins.webnotificationsToastr.info('Cannot use both Bar Code Scanner and QR Code Scanner.','INFO');

	}

	//if we are using either plugin and the zebra scanner, we must remove it
	if (plugins_list.includes('Bar Code Scanner') || plugins_list.includes('QR Code Scanner') || plugins_list.includes('Camera')) {
		arr = plugins_list.split('\n');
		tmpArr = [];
		var zebraFound = false;
		for (i = 0; i < arr.length; i++) {
			if (arr[i] != 'Zebra Scanner (Android Only)') {
				tmpArr.push(arr[i])
			} else {
				zebraFound = true;
			}
		}
		if (tmpArr.length > 0 && zebraFound) {
			plugins_list = tmpArr.join('\n')
			elements.pluginslist.visible = false;
			application.executeLater(refreshPlugins, 0);
			plugins.webnotificationsToastr.info('Cannot use Zebra Scanner with these plugins.','INFO');
		}
	}
	
	if (app_url.includes('http://')) {
		//if we are using either plugin and the zebra scanner, we must remove it
		if (!plugins_list.includes('Clear Text Traffic')) {
			arr = plugins_list.split('\n');
			arr.push('Clear Text Traffic (Android Only)');
			plugins_list = arr.join('\n');
			elements.pluginslist.visible = false;
			application.executeLater(refreshPlugins, 0);
			plugins.webnotificationsToastr.info('The app URL used is not secure (https).  Adding the "Clear Text Traffic" plugin to support non-https endpoint.',"INFO");			
		}
	}
	
	return true
}

/**
 * @properties={typeid:24,uuid:"9DE4965E-F806-409D-926A-63D02FD7D4B0"}
 */
function refreshPlugins() {
	elements.pluginslist.visible = true;
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"67D74457-2761-4F1B-AD89-E217CAD45D71"}
 */
function onDataChange$fcmfiles(oldValue, newValue, event) {
	elements[event.getElementName()].addStyleClass('added');
	var fn = this[event.getSource().getDataProviderID() + '_filename'];
	elements[event.getElementName()].uploadText = fn + ' added successfully.';
	return true;
}

/**
 * @properties={typeid:24,uuid:"6518773D-3EF0-48D5-BFCD-0D06403E4BF0"}
 */
function setBuildID() {
	build_id = application.getUUID().toString().split('-')[0];
	build_dir = plugins.file.convertToJSFile("build_" + build_id);
	b_dir = "build_" + build_id;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Function} cb
 * @private
 * @return
 * @properties={typeid:24,uuid:"846F44DB-9C0A-4D88-92DD-420947BCE716"}
 */
function onAction$getLocalBuild(event, cb) {
	if (!cb) {
		setBuildID();
	}

	if (!img) {
		plugins.webnotificationsToastr.info('Please upload an icon for your app.')
		return null;
	}

	if (!app_name || !app_url || !app_version || !appid) {
		plugins.webnotificationsToastr.info('Please fill some of details first.')
		return null;
	}

	if (appid.split('.').length < 3) {
		plugins.webnotificationsToastr.info('Your App ID must be in the following naming convention: com.mobile.appname')
		return null;
	}

	if (plugins_list.indexOf('FCM Push Notifications') != -1) {
		if (!googlejson && !googleplist) {
			plugins.webnotificationsToastr.info('Must upload google-services.json and/or GoogleService-Info.plist if using FCM plugin.')
			return null;
		}
	}
	plugins.svyBlockUI.spinner = 'Wandering Cubes';
	plugins.svyBlockUI.show('Compilation will take a few minutes...');
	plugins.file.createFolder(b_dir);
	plugins.file.createFolder(plugins.file.convertToJSFile(b_dir + "/www"));
	plugins.file.createFolder(plugins.file.convertToJSFile(b_dir + "/www/js"));
	plugins.file.createFolder(plugins.file.convertToJSFile(b_dir + "/www/res"));
	plugins.file.createFolder(plugins.file.convertToJSFile(b_dir + "/www/res/icon"));
	plugins.file.createFolder(plugins.file.convertToJSFile(b_dir + "/www/res/icon/ios"));
	plugins.file.createFolder(plugins.file.convertToJSFile(b_dir + "/www/res/icon/android"));
	plugins.file.createFolder(plugins.file.convertToJSFile(b_dir + "/www/res/screen"));
	plugins.file.createFolder(plugins.file.convertToJSFile(b_dir + "/www/res/screen/ios"));
	plugins.file.createFolder(plugins.file.convertToJSFile(b_dir + "/www/res/screen/android"));
	createIconAndSplash();

	if (errors) {
		plugins.svyBlockUI.stop();
		plugins.dialogs.showInfoDialog('INFO', errors);
		return null;
	}

	createConfig();
	createIndexHTML();
	if (googlejson) createFile(b_dir + '/google-services.json', googlejson, null);
	if (googleplist) createFile(b_dir + '/GoogleService-Info.plist', googleplist, null);
	build_file = zip(build_dir);
	var url = createRemoteFile(build_file);

	if (!cb) {
		application.showURL(url, '_blank');
	}

	if (cb) {
		var res = cb(build_file, keyObj);
	}
	
	if (res) return res;
	return null;
}

/**
 * @properties={typeid:24,uuid:"CB877E30-7A7E-49A8-B050-B59BCFBB7327"}
 */
function removeTempFiles(){
	plugins.file.deleteFolder(b_dir, false);
	plugins.file.deleteFile(build_file.getAbsolutePath())
	var dt = new Date();
	dt.setSeconds(dt.getSeconds() + 10);
	plugins.scheduler.addJob('removeFile', dt, removeFile, [b_dir]);
	
	//clean up existing directory
	try {

		var temp = plugins.file.getFolderContents(plugins.file.getDefaultUploadLocation());

		var currentDate = new Date();
		for (var i = 0; i < temp.length; i++) {
			var hours = Math.abs(currentDate - temp[i].lastModified()) / 36e5;
			if (hours > 1 && (temp[i].getName().split('.')[1] == 'aab' || temp[i].getName().split('.')[1] == 'apk' || temp[i].getName().split('.')[1] == 'ipa')) {
				temp[i].deleteFile();
			}
		}
				
		for (i = 0; i < temp.length; i++) {
			hours = Math.abs(currentDate - temp[i].lastModified()) / 36e5;
			
			if (hours > 24) {
				application.executeProgram('rm',['-r',temp[i].getAbsolutePath()])
			}
		}
	} catch (e) {

	}
	
}
/**
 * @properties={typeid:24,uuid:"374EE099-0701-4F88-905F-E3BDC0DF37B4"}
 */
function createIconAndSplash() {
	//generate default icon
	createFile(b_dir + "/www/res/icon/icon.png", createImageResize(img, 1024, 1024, false, true));

	//generate IOS icons
	createFile(b_dir + "/www/res/icon/ios/icon.png", createImageResize(img, 57, 57, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon@2x.png", createImageResize(img, 114, 114, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-20.png", createImageResize(img, 20, 20, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-24@2x.png", createImageResize(img, 48, 48, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-27.5@2x.png", createImageResize(img, 55, 55, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-40.png", createImageResize(img, 40, 40, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-40@2x.png", createImageResize(img, 80, 80, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-44@2x.png", createImageResize(img, 88, 88, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-50.png", createImageResize(img, 50, 50, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-50@2x.png", createImageResize(img, 100, 100, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-60.png", createImageResize(img, 60, 60, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-60@2x.png", createImageResize(img, 120, 120, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-60@3x.png", createImageResize(img, 180, 180, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-72.png", createImageResize(img, 72, 72, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-72@2x.png", createImageResize(img, 144, 144, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-76.png", createImageResize(img, 76, 76, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-76@2x.png", createImageResize(img, 152, 152, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-83.5@2x.png", createImageResize(img, 167, 167, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-86@2x.png", createImageResize(img, 172, 172, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-98@2x.png", createImageResize(img, 196, 196, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-small.png", createImageResize(img, 29, 29, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-small@2x.png", createImageResize(img, 58, 58, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-small@3x.png", createImageResize(img, 87, 87, false, true));

	//generate IOS Splash Screen
	createFile(b_dir + "/www/res/screen/ios/Default-568h@2x~iphone.png", createImageResize(img, 640, 1136, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default-667h.png", createImageResize(img, 750, 1334, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default-736h.png", createImageResize(img, 1242, 2208, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default-Landscape-736h.png", createImageResize(img, 1242, 2208, true, true));
	createFile(b_dir + "/www/res/screen/ios/Default-Landscape@2x~ipad.png", createImageResize(img, 2048, 1536, true, true));
	createFile(b_dir + "/www/res/screen/ios/Default-Landscape~ipad.png", createImageResize(img, 1024, 768, true, true));
	createFile(b_dir + "/www/res/screen/ios/Default-Portrait@2x~ipad.png", createImageResize(img, 1536, 2048, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default-Portrait~ipad.png", createImageResize(img, 768, 1024, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default@2x~iphone.png", createImageResize(img, 640, 960, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default~iphone.png", createImageResize(img, 480, 320, false, true));

	//generate Android Icons
	createFile(b_dir + "/www/res/icon/android/drawable-ldpi-icon.png", createImageResize(img, 192, 192));
	createFile(b_dir + "/www/res/icon/android/drawable-mdpi-icon.png", createImageResize(img, 192, 192));
	createFile(b_dir + "/www/res/icon/android/drawable-hdpi-icon.png", createImageResize(img, 192, 192));
	createFile(b_dir + "/www/res/icon/android/drawable-xhdpi-icon.png", createImageResize(img, 192, 192));
	createFile(b_dir + "/www/res/icon/android/drawable-xxhdpi-icon.png", createImageResize(img, 192, 192));
	createFile(b_dir + "/www/res/icon/android/drawable-xxxhdpi-icon.png", createImageResize(img, 192, 192));

	//generate Android Splash Screen
	createFile(b_dir + "/www/res/screen/android/drawable-land-ldpi-screen.png", createImageResize(img, 207, 368, true));
	createFile(b_dir + "/www/res/screen/android/drawable-land-mdpi-screen.png", createImageResize(img, 248, 442, true));
	createFile(b_dir + "/www/res/screen/android/drawable-land-hdpi-screen.png", createImageResize(img, 311, 552, true));
	createFile(b_dir + "/www/res/screen/android/drawable-land-xhdpi-screen.png", createImageResize(img, 414, 736, true));
	createFile(b_dir + "/www/res/screen/android/drawable-land-xxhdpi-screen.png", createImageResize(img, 621, 1104, true));
	createFile(b_dir + "/www/res/screen/android/drawable-land-xxxhdpi-screen.png", createImageResize(img, 1242, 2208, true));

	createFile(b_dir + "/www/res/screen/android/drawable-port-ldpi-screen.png", createImageResize(img, 207, 368));
	createFile(b_dir + "/www/res/screen/android/drawable-port-mdpi-screen.png", createImageResize(img, 248, 442));
	createFile(b_dir + "/www/res/screen/android/drawable-port-hdpi-screen.png", createImageResize(img, 311, 552));
	createFile(b_dir + "/www/res/screen/android/drawable-port-xhdpi-screen.png", createImageResize(img, 414, 736));
	createFile(b_dir + "/www/res/screen/android/drawable-port-xxhdpi-screen.png", createImageResize(img, 621, 1104));
	createFile(b_dir + "/www/res/screen/android/drawable-port-xxxhdpi-screen.png", createImageResize(img, 1242, 2208));
}

/**
 * @param i
 * @param w
 * @param h
 * @param [rotate]
 * @param [removeTransparency]
 * @return {Array<byte>}
 * @properties={typeid:24,uuid:"0A7DCB1F-A48F-464F-B3F7-FF7BCB00C5FA"}
 */
function createImageResize(i, w, h, rotate, removeTransparency) {
	var input = Packages.java.io.File.createTempFile(b_dir + '_tmp',null);
	
	var fos = new java.io.FileOutputStream(input);
	fos.write(i);
	var im = Packages.javax.imageio.ImageIO.read(input);

	if (!im) {
		errors = 'The image cannot be converted for use as an app icon.  Please upload an image that has no transparency layer (ex. jpeg).';
		return null;
	}

	var tmp = im.getScaledInstance(w, h, Packages.java.awt.Image.SCALE_SMOOTH);
	var res = new java.awt.image.BufferedImage(w, h, java.awt.image.BufferedImage.TYPE_INT_ARGB);
	var g2d = res.createGraphics();
	g2d.drawImage(tmp, 0, 0, null);
	g2d.dispose();
	var baos = new java.io.ByteArrayOutputStream();

	//remove transparency
	if (removeTransparency) {
		var cc = new java.awt.image.BufferedImage(res.getWidth(), res.getHeight(), java.awt.image.BufferedImage.TYPE_INT_RGB);
		g2d = cc.createGraphics();
		g2d.setColor(java.awt.Color.WHITE);
		g2d.fillRect(0, 0, res.getWidth(), res.getHeight());
		g2d.drawImage(tmp, 0, 0, null);
		g2d.dispose();
		Packages.javax.imageio.ImageIO.write(cc, "png", baos);
	} else {
		Packages.javax.imageio.ImageIO.write(res, "png", baos);
	}

	baos.flush();
	var bytes = baos.toByteArray();
	baos.close();	
	input.deleteOnExit();
	input.delete();

	var image = plugins.images.getImage(bytes);
	if (rotate) {
		image = image.rotate(90);
	}

	bytes = image.getData();//gets the image bytes
	return bytes;

}

/**
 * @properties={typeid:24,uuid:"2EDC46E5-A9C8-4349-A87A-2FDAB39413E3"}
 */
function removeFile(fname) {
	var file = plugins.file.convertToRemoteJSFile('/' + fname + '.zip');
	application.output('remove file ' + fname + ' ' + plugins.file.deleteFile(file));
}
/**
 * @properties={typeid:24,uuid:"ECF90525-0B1B-4178-8E49-8A69822BAE41"}
 */
function removeMiscFile(fname) {
	plugins.file.convertToJSFile(fname).deleteFile();
	var file = plugins.file.convertToRemoteJSFile('/' + fname);
	application.output('remove file ' + fname + ' ' + plugins.file.deleteFile(file));
}

/**
 * @return {String}
 * @properties={typeid:24,uuid:"A611E6DF-B090-4A41-92CE-EE5E15C3F07B"}
 * @SuppressWarnings(wrongparameters)
 */
function formatVersion() {
	var msg = '<widget android-versionCode="10000000" id="' + appid + '" ios-CFBundleversion="100000" version="' + app_version + '" xmlns="http://www.w3.org/ns/widgets" xmlns:gap="http://phonegap.com/ns/1.0" xmlns:android="http://schemas.android.com/apk/res/android"> \n';
	var deVersion = 'versionCode="' + app_version.replace('.', 0).replace('.', 0) + '"';
	msg = msg.replace(/versionCode="\d+\d+\d+\d+\d+"/, deVersion);
	deVersion = 'CFBundleversion="' + app_version.replace('.', 0).replace('.', 0) + '"';
	msg = msg.replace(/CFBundleversion="\d+\d+\d+\d+\d+"/, deVersion);
	return msg;
}

/**
 * @properties={typeid:24,uuid:"0C1A301F-0E06-43AA-A477-928DA769768F"}
 */
function createConfig() {
	var temp_app_url = '';
	//setup deeplink for phonegap
	if (app_url.indexOf('?') != -1) {
		temp_app_url = app_url + '&phonegap=true';
	} else {
		temp_app_url = app_url.split('?')[0] + '?phonegap=true'
	}

	//replace ampersands with proper escape characters
	temp_app_url = utils.stringReplace(temp_app_url, '&', '&#38;')
	var addAndroidX = false;

	if (plugins_list.indexOf('Bar Code Scanner') != -1 || plugins_list.indexOf('Camera') != -1 || plugins_list.indexOf('Camera Preview') != -1 || plugins_list.indexOf('QR Code Scanner') != -1) {
		addAndroidX = true;
	}

	//create config.xml for build
	var xml = '';
	xml = "<?xml version='1.0' encoding='utf-8'?>\n";
	xml += formatVersion();
	xml += '<name>' + app_name + '</name>\n';
	xml += '<description>' + app_desc + '</description>\n';
	xml += '<author email="' + app_email + '">' + app_author + '</author>\n';
	xml += '<content src="' + temp_app_url + '" />\n'
	xml += '<access origin="*" />\n'
	xml += '<allow-navigation href="*" />\n'
	xml += '<allow-intent href="https://*/*" />\n'
	xml += '<preference name="swift-version" value="5" />\n'
	xml += '<preference name="target-device" value="universal" />\n'
	xml += '<preference name="DisallowOverscroll" value="true" />\n'
	xml += '<preference name="InAppBrowserStorageEnabled" value="true" />\n'
	xml += '<preference name="Orientation" value="' + app_orientation + '" />\n'
	xml += '<platform name="android">\n'
	if (plugins_list.indexOf('Clear Text Traffic (Android Only)') != -1) {
		xml += '<allow-navigation href="https://*"/>'
		xml += '<preference name="Scheme" value="https" />\n'
		xml += '<edit-config file="app/src/main/AndroidManifest.xml" mode="merge" target="/manifest/application">\n'
		xml += '<application android:usesCleartextTraffic="true" />\n'
		xml += '</edit-config>\n'
	}

	if (plugins_list.indexOf('QR Code Scanner') != -1) xml += '<hook src="hooks/qrscanner_add_barcode/301_android.js" type="after_prepare" ></hook>'

	xml += '<icon src="www/res/icon.png" width="1024" height="1024"/>\n'
	xml += '<allow-intent href="market:*" />\n'
	if (googlejson) xml += '<resource-file src="google-services.json" target="google-services.json" />\n'
	if (googlejson) xml += '<resource-file src="google-services.json" target="app/google-services.json" />\n'

	// add support for target level 31
	xml += '<preference name="android-targetSdkVersion" value="31"/>\n'
	//add android exported option to main activity
	xml += '<custom-preference name="android-manifest/application/activity/@android:exported" value="true"/>\n'
	//if we are using camera plugins, add the appropriate permissions
	if (plugins_list.indexOf('camera') != -1 || plugins_list.indexOf('Scanner') != -1) {
		xml += '<custom-preference name="android-manifest/uses-permission/[@android:name=' + "'android.hardware.camera']" + '" delete="true"' + ' />\n'
		xml += '<custom-preference name="android-manifest/uses-permission/[@android:name=' + "'android.hardware.camera']" + '" delete="true"' + ' />\n'
		xml += '<custom-config-file target="AndroidManifest.xml" parent="./" mode="add">\n'
		xml += '<uses-feature android:name="android.hardware.camera" android:required="true" />\n'
		xml += '</custom-config-file>\n'
	}

	xml += '<preference name="AndroidLaunchMode" value="singleInstance" />\n'
	xml += '<preference name="ShowSplashScreenSpinner" value="false" />\n'
	xml += '<preference name="AutoHideSplashScreen " value="true" />\n'
	xml += '<preference name="SplashShowOnlyFirstTime" value="false" />\n'
	xml += '<preference name="backgroundColor" value="0x00000000" />\n'
	xml += '<preference name="SplashScreenDelay" value="10000" />\n'
	xml += '<preference name="loadUrlTimeoutValue" value="999999999" />'
	if (addAndroidX) {
		xml += '<preference name="AndroidXEnabled" value="true" />\n'
	}
	xml += '<icon density="ldpi" src="www/res/icon/android/drawable-ldpi-icon.png" />\n'
	xml += '<icon density="mdpi" src="www/res/icon/android/drawable-mdpi-icon.png" />\n'
	xml += '<icon density="hdpi" src="www/res/icon/android/drawable-hdpi-icon.png" />\n'
	xml += '<icon density="xhdpi" src="www/res/icon/android/drawable-xhdpi-icon.png" />\n'
	xml += '<icon density="xxhdpi" src="www/res/icon/android/drawable-xxhdpi-icon.png" />\n'
	xml += '<icon density="xxxhdpi" src="www/res/icon/android/drawable-xxxhdpi-icon.png" />\n'
	xml += '<splash density="land-ldpi" src="www/res/screen/android/drawable-land-ldpi-screen.png" />\n'
	xml += '<splash density="land-mdpi" src="www/res/screen/android/drawable-land-mdpi-screen.png" />\n'
	xml += '<splash density="land-hdpi" src="www/res/screen/android/drawable-land-hdpi-screen.png" />\n'
	xml += '<splash density="land-xhdpi" src="www/res/screen/android/drawable-land-xhdpi-screen.png" />\n'
	xml += '<splash density="land-xxhdpi" src="www/res/screen/android/drawable-land-xxhdpi-screen.png" />\n'
	xml += '<splash density="land-xxxhdpi" src="www/res/screen/android/drawable-land-xxxhdpi-screen.png" />\n'
	xml += '<splash density="port-ldpi" src="www/res/screen/android/drawable-port-ldpi-screen.png" />\n'
	xml += '<splash density="port-mdpi" src="www/res/screen/android/drawable-port-mdpi-screen.png" />\n'
	xml += '<splash density="port-hdpi" src="www/res/screen/android/drawable-port-hdpi-screen.png" />\n'
	xml += '<splash density="port-xhdpi" src="www/res/screen/android/drawable-port-xhdpi-screen.png" />\n'
	xml += '<splash density="port-xxhdpi" src="www/res/screen/android/drawable-port-xxhdpi-screen.png" />\n'
	xml += '<splash density="port-xxxhdpi" src="www/res/screen/android/drawable-port-xxxhdpi-screen.png" />\n'

	xml += '</platform>\n'
	xml += '<platform name="ios">\n'

	if (plugins_list.indexOf('QR Code Scanner') != -1) xml += '<hook src="hooks/qrscanner_add_barcode/301_ios.js" type="after_prepare" ></hook>'

	if (plugins_list.indexOf('Location') != -1) {
		xml += '<edit-config target="NSLocationAlwaysUsageDescription" file="*-Info.plist" mode="merge" overwrite="true">\n'
		xml += '<string>Require Location for showing Map</string>\n'
		xml += '</edit-config>\n'
		xml += '<edit-config target="NSLocationWhenInUseUsageDescription" file="*-Info.plist" mode="merge" overwrite="true">\n'
		xml += '<string>Require Location for showing Map</string>\n'
		xml += '</edit-config>\n'
	}

	if (addAndroidX) {
		xml += '<edit-config target="NSPhotoLibraryUsageDescription" file="*-Info.plist" mode="merge" overwrite="true" >\n'
		xml += '<string>Required for showing gallery</string>\n'
		xml += '</edit-config>\n'
		xml += '<edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge" overwrite="true">\n'
		xml += '<string>Required for capturing camera images.</string>\n'
		xml += '</edit-config>\n'
		xml += '<preference name="AndroidXEnabled" value="true" />\n'
	}

	if (plugins_list.indexOf('IDTech CR') != -1) {
		xml += '<edit-config target="NSMicrophoneUsageDescription" file="*-Info.plist" mode="merge" overwrite="true" >\n'
		xml += '<string>This app needs microphone access</string>\n'
		xml += '</edit-config>\n'
	}

	if (googleplist) xml += '<resource-file src="GoogleService-Info.plist" />\n'
	xml += '<allow-intent href="itms:*" />\n'
	xml += '<allow-intent href="itms-apps:*" />\n'
	xml += '<feature name="CDVWKWebViewEngine">\n'
	xml += '<param name="ios-package" value="CDVWKWebViewEngine" />\n'
	xml += '</feature>\n'
	if (addAndroidX) {
		xml += '<preference name="AndroidXEnabled" value="true" />\n'
	}
	xml += '<preference name="WKWebViewOnly" value="true" />\n'
	xml += '<preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine" />\n'
	xml += '<preference name="ScrollEnabled" value="true" />'
	xml += '<preference name="SplashScreenDelay" value="1000" />\n'
	xml += '<preference name="StatusBarOverlaysWebView" value="true" />\n'
	xml += '<preference name="AutoHideSplashScreen" value="true" />\n'
	xml += '<preference name="backgroundColor" value="0x00000000" />\n'
	xml += '<icon height="20" platform="ios" src="www/res/icon/ios/icon-20.png" width="20" />\n'
	xml += '<icon height="48" platform="ios" src="www/res/icon/ios/icon-24@2x.png" width="48" />\n'
	xml += '<icon height="55" platform="ios" src="www/res/icon/ios/icon-27.5@2x.png" width="55" />\n'
	xml += '<icon height="88" platform="ios" src="www/res/icon/ios/icon-44@2x.png" width="88" />\n'
	xml += '<icon height="167" platform="ios" src="www/res/icon/ios/icon-83.5@2x.png" width="167" />\n'
	xml += '<icon height="172" platform="ios" src="www/res/icon/ios/icon-86@2x.png" width="172" />\n'
	xml += '<icon height="196" platform="ios" src="www/res/icon/ios/icon-98@2x.png" width="196" />\n'
	xml += '<icon height="57" platform="ios" src="www/res/icon/ios/icon.png" width="57" />\n'
	xml += '<icon height="114" platform="ios" src="www/res/icon/ios/icon@2x.png" width="114" />\n'
	xml += '<icon height="40" platform="ios" src="www/res/icon/ios/icon-40.png" width="40" />\n'
	xml += '<icon height="80" platform="ios" src="www/res/icon/ios/icon-40@2x.png" width="80" />\n'
	xml += '<icon height="50" platform="ios" src="www/res/icon/ios/icon-50.png" width="50" />\n'
	xml += '<icon height="100" platform="ios" src="www/res/icon/ios/icon-50@2x.png" width="100" />\n'
	xml += '<icon height="60" platform="ios" src="www/res/icon/ios/icon-60.png" width="60" />\n'
	xml += '<icon height="120" platform="ios" src="www/res/icon/ios/icon-60@2x.png" width="120" />\n'
	xml += '<icon height="180" platform="ios" src="www/res/icon/ios/icon-60@3x.png" width="180" />\n'
	xml += '<icon height="72" platform="ios" src="www/res/icon/ios/icon-72.png" width="72" />\n'
	xml += '<icon height="144" platform="ios" src="www/res/icon/ios/icon-72@2x.png" width="144" />\n'
	xml += '<icon height="76" platform="ios" src="www/res/icon/ios/icon-76.png" width="76" />\n'
	xml += '<icon height="152" platform="ios" src="www/res/icon/ios/icon-76@2x.png" width="152" />\n'
	xml += '<icon height="29" platform="ios" src="www/res/icon/ios/icon-small.png" width="29" />\n'
	xml += '<icon height="58" platform="ios" src="www/res/icon/ios/icon-small@2x.png" width="58" />\n'
	xml += '<icon height="87" platform="ios" src="www/res/icon/ios/icon-small@3x.png" width="87" />\n'
	xml += '<icon src="www/res/icon/icon.png" width="1024" height="1024"/>\n'
	xml += '<splash height="1136" platform="ios" src="www/res/screen/ios/Default-568h@2x~iphone.png" width="640" />\n'
	xml += '<splash height="1334" platform="ios" src="www/res/screen/ios/Default-667h.png" width="750" />\n'
	xml += '<splash height="2208" platform="ios" src="www/res/screen/ios/Default-736h.png" width="1242" />\n'
	xml += '<splash height="1242" platform="ios" src="www/res/screen/ios/Default-Landscape-736h.png" width="2208" />\n'
	xml += '<splash height="1536" platform="ios" src="www/res/screen/ios/Default-Landscape@2x~ipad.png" width="2048" />\n'
	xml += '<splash height="768" platform="ios" src="www/res/screen/ios/Default-Landscape~ipad.png" width="1024" />\n'
	xml += '<splash height="2048" platform="ios" src="www/res/screen/ios/Default-Portrait@2x~ipad.png" width="1536" />\n'
	xml += '<splash height="1024" platform="ios" src="www/res/screen/ios/Default-Portrait~ipad.png" width="768" />\n'
	xml += '<splash height="960" platform="ios" src="www/res/screen/ios/Default@2x~iphone.png" width="640" />\n'
	xml += '<splash height="480" platform="ios" src="www/res/screen/ios/Default~iphone.png" width="320" />\n'
	xml += '</platform>\n'
	xml += '<plugin name="cordova-plugin-statusbar" spec="^2.4.2" />\n'
	xml += '<plugin name="cordova-plugin-whitelist" spec="^1.3.3" />\n'
	xml += '<plugin name="cordova-plugin-appversion" spec="https://github.com/tuanway/cordova-plugin-app-version" />\n'

	xml += '<plugin name="cordova-plugin-device" spec="^1.1.7" />\n'
	xml += '<plugin name="cordova-plugin-file" spec="^4.3.3" />\n'
	xml += '<plugin name="cordova-plugin-ionic-webview" source="npm" />\n'
	xml += '<plugin name="cordova-plugin-ionic-keyboard" source="npm" />\n'
	xml += '<plugin name="cordova-custom-config" source="https://github.com/dpa99c/cordova-custom-config" />\n'

	if (plugins_list.indexOf('IDTech CR') != -1) {
		xml += '<plugin name="com.idtechproducts.uniMagPlugin" spec="https://github.com/tuanway/unimag" />\n'
	}

	if (plugins_list.indexOf('Printer') != -1) {
		xml += '<plugin name="cordova-plugin-printer" spec="^0.7.3" />\n'
		xml += '<plugin name="cordova-print-pdf-plugin" spec="https://github.com/sarahgoldman/cordova-print-pdf-plugin" />\n'
	}
	if (addAndroidX) {
		xml += '<plugin name="cordova-androidx-build" source="npm" />\n'
	}
	if (plugins_list.indexOf('Bar Code Scanner') != -1) xml += '<plugin name="phonegap-plugin-barcodescanner" spec="^8.0.1" />\n'
	if (plugins_list.indexOf('QR Code Scanner') != -1) xml += '<plugin name="cordova-plugin-qrscanner" spec="https://github.com/tuanway/cordova-plugin-qrscanner" />\n'
	if (plugins_list.indexOf('Camera Preview') != -1) xml += '<plugin name="cordova-plugin-camera-preview" source="npm" />\n'
	if (plugins_list.indexOf('Camera') != -1) xml += '<plugin name="cordova-plugin-camera" spec="^2.4.1" />\n'
	if (plugins_list.indexOf('Network Information') != -1) xml += '<plugin name="cordova-plugin-network-information" spec="^1.3.4" />\n'
	if (plugins_list.indexOf('Network Interface') != -1) xml += '<plugin name="cordova-plugin-networkinterface" spec="^2.0.0" />\n'
	if (plugins_list.indexOf('Location') != -1)xml += '<plugin name="cordova-plugin-geolocation" spec="^2.4.3" />\n'
	if (plugins_list.indexOf('Full screen') != -1)xml += '<plugin name="it.innowatio.cordova.ios-fullscreen" spec="https://github.com/tuanway/cordova-ios-fullscreen" />\n'
	if (plugins_list.indexOf('Zebra Scanner') != -1)xml += '<plugin name="com.jkt.zebra.barcode.plugin" spec="https://github.com/tuanway/zebra" />\n'
	if (plugins_list.indexOf('Fingerprint') != -1) xml += '<plugin name="cordova-plugin-fingerprint-aio" spec="^1.6.0" />\n'
	if (plugins_list.indexOf('FCM Push Notifications') != -1) xml += '<plugin name="cordova-plugin-fcm-with-dependecy-updated" spec="https://github.com/tuanway/cordova-plugin-fcm-with-dependecy-updated-12" />\n'
	if (plugins_list.indexOf('In-App Browser') != -1) xml += '<plugin name="cordova-plugin-inappbrowser" spec="^4.1.0"/>\n'
	if (plugins_list.indexOf('Screen Orientation') != -1) xml += '<plugin name="cordova-plugin-screen-orientation" source="npm" />\n'
	if (plugins_list.indexOf('Vibration') != -1) xml += '<plugin name="cordova-plugin-vibration" source="npm" />\n'
	if (plugins_list.indexOf('Launch Navigator') != -1) xml += '<plugin name="uk.co.workingedge.phonegap.plugin.launchnavigator" source="npm" > <variable name="GOOGLE_API_KEY_FOR_ANDROID" value="{your_api_key}" /> </plugin>\n'
	if (plugins_list.indexOf('Clear Text Traffic (Android Only)') != -1) xml += '<plugin name="cordova-plugin-enable-cleartext-traffic" spec="^2.1.0" />\n'

	//can only use Bar code scanner or QR Code Scanner, not both.

	xml += '</widget>'
	createFile(b_dir + '/config.xml', null, xml);
}

/**
 * @properties={typeid:24,uuid:"793BC847-C14E-4118-9EA3-8F77A278D280"}
 */
function createIndexHTML() {
	var htm = '';
	htm += '<html>';
	htm += '<style>';
	htm += 'html, body {';
	htm += 'border: 0px;';
	htm += 'margin: 0px;';
	htm += 'padding: 0px;';
	htm += '}';
	htm += '</style>';
	htm += '<head>'
	htm += '<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover">'
	htm += '</head>'
	htm += '<body>'
	htm += '</body>'
	htm += '</html>'
	createFile(b_dir + '/www/index.html', null, htm);
}

/**
 * @param {String} fname
 * @param [bytes]
 * @param {String} [text]
 * @return {plugins.file.JSFile}
 * @properties={typeid:24,uuid:"17641DD7-A355-450A-BCEC-EB2966C7454B"}
 */
function createFile(fname, bytes, text) {
	var file = plugins.file.createFile(fname);
	if (bytes) {
		file.createNewFile();
		file.setBytes(bytes);
	}

	if (text) {
		plugins.file.writeTXTFile(file, text)
	}
	return file;
}

/**
 * @param {String} fname
 * @param [bytes]
 * @param {String} [text]
 * @return {plugins.file.JSFile}
 * @properties={typeid:24,uuid:"E0C86A07-505C-4930-9697-F5FB9A1ABE7B"}
 */
function createTempFile(fname, bytes, text){
	var file = plugins.file.createTempFile(fname.split('.')[0],'.'+fname.split('.')[1]);
	if (bytes) {
		file.createNewFile();
		file.setBytes(bytes);
	}

	if (text) {
		plugins.file.writeTXTFile(file, text)
	}
	return file;
}

/**
 * @param file
 * @return {String}
 * @properties={typeid:24,uuid:"BCCDCC5B-B0E5-4615-9720-FADDE868297D"}
 */
function createRemoteFile(file) {
	var path = "/";
	if (application.getOSName() == 'Linux') {
		/** @type {String} */
		var fileName = file.getPath().split('/');
	} else {
		fileName = file.getPath().split('\\');
	}
	fileName = fileName[fileName.length - 1];
	var remoteFile = plugins.file.convertToRemoteJSFile(path + encodeURIComponent(fileName));
	remoteFile.setBytes(file.getBytes(), true);
	return plugins.file.getUrlForRemoteFile(path + encodeURIComponent(fileName));
}

/**
 * Zips the given file or directory<br>
 * <br>
 * The zip file will either be written to the given target file<br>
 * or a zip file is created using the same name and location as the original file<br>
 * <br>
 * NOTE: if the target file already exists, it will be <b>deleted</b>
 *
 * @public
 *
 * @param {plugins.file.JSFile} fileToZip
 * @param {plugins.file.JSFile} [targetFile]
 * @param {Array<String>} [filenamesToStoreUncompressed] array of file names that should be stored uncompressed in the archive
 *
 * @return {plugins.file.JSFile} zipFile
 *
 * @throws {Error}
 *
 * @properties={typeid:24,uuid:"9D6CECAE-ACD0-497F-9994-355861A2DE24"}
 */
function zip(fileToZip, targetFile, filenamesToStoreUncompressed) {
	var filePath = fileToZip.getAbsolutePath();
	if (!targetFile) {
		targetFile = plugins.file.convertToJSFile(filePath + '.zip');

	}

	if (targetFile.exists()) {
		if (!targetFile.deleteFile()) {
			return null;
		}
	}

	try {
		/** @type {java.util.zip.ZipOutputStream} */
		var zos = new java.util.zip.ZipOutputStream(new java.io.FileOutputStream(targetFile.getAbsolutePath()));

		/** @type {java.nio.channels.WritableByteChannel} */
		var outputChannel = java.nio.channels.Channels.newChannel(zos);

		/**
		 * @param {plugins.file.JSFile} file
		 * @param {plugins.file.JSFile} base
		 * @param {java.util.zip.ZipOutputStream} zipOutputStream
		 */
		function zipFile(file, base, zipOutputStream) {
			if (file.isDirectory()) {
				var files = file.listFiles();
				for (var i = 0; i < files.length; i++) {
					var singleFile = files[i];
					zipFile(singleFile, base, zipOutputStream);
				}
				if (!files || files.length == 0) {
					// empty directory
					zipOutputStream.putNextEntry(new java.util.zip.ZipEntry(file.getPath().substring(base.getPath().length + 1) + '/'));
				}
			} else {
				/** @type {java.io.InputStream} */
				var is = new java.io.FileInputStream(file);
				var entryPath;
				if (file.getAbsolutePath() == base.getAbsolutePath()) {
					entryPath = file.getName();
				} else {
					entryPath = file.getPath().substring(base.getPath().length + 1);
				}
				entryPath = utils.stringReplace(entryPath, java.io.File.separator, '/');
				var entry = new java.util.zip.ZipEntry(entryPath);

				if (filenamesToStoreUncompressed && filenamesToStoreUncompressed.indexOf(file.getName()) != -1) {
					entry.setMethod(java.util.zip.ZipEntry.STORED);
					entry.setSize(file.size());
					var crc = new java.util.zip.CRC32();
					crc.update(file.getBytes());
					entry.setCrc(crc.getValue());
				}

				zipOutputStream.putNextEntry(entry);

				/** @type {java.nio.channels.ReadableByteChannel} */
				var inputChannel = java.nio.channels.Channels.newChannel(is);

				channelCopy(inputChannel, outputChannel);

				is.close();
			}
		}

		zipFile(fileToZip, fileToZip, zos);

		outputChannel.close();
		outputChannel = null;

		zos.close();
		zos = null;
	} catch (e) {
		application.output('Error zipping file :' + fileToZip.getAbsolutePath() + ' ' + e.message);
		throw e;
	} finally {
		try {
			if (outputChannel != null) {
				outputChannel.close();
			}
			if (zos != null) {
				zos.close();
			}
		} catch (e) {
		}
	}

	return targetFile;
}

/**
 * Copies streams
 *
 * @private
 *
 * @param {java.nio.channels.ReadableByteChannel} src
 * @param {java.nio.channels.WritableByteChannel} dest
 *
 * @properties={typeid:24,uuid:"8E3DD438-43FB-4499-A7B4-0D00F4956E90"}
 */
function channelCopy(src, dest) {
	var buffer = java.nio.ByteBuffer.allocateDirect(16 * 1024);
	while (src.read(buffer) != -1) {
		// prepare the buffer to be drained
		buffer.flip();
		// write to the channel, may block
		dest.write(buffer);
		// If partial transfer, shift remainder down
		// If buffer is empty, same as doing clear()
		buffer.compact();
	}
	// EOF will leave buffer in fill state
	buffer.flip();
	// make sure the buffer is fully drained.
	while (buffer.hasRemaining()) {
		dest.write(buffer);
	}

	src.close();
}

/**
 * @return {Boolean}
 * @properties={typeid:24,uuid:"39181E26-0B58-4B7C-9CB3-C62FE6533BDB"}
 */
function addKeys() {
	var keys = forms.cordova_keys.show();
	if (keys.android_keystore || (keys.ios_cert && keys.ios_provision)) {
		plugins.svyBlockUI.show('Adding keys..');
		//we have keys to add, let's update local vars
		android_title = (keys.android_title == null || keys.android_title == '') ? appid : keys.android_title;
		android_alias = keys.android_alias;
		android_keystore = keys.android_keystore;
		android_key_pass = keys.android_key_pass;
		android_key_store_pass = keys.android_key_store_pass;
		ios_cert = keys.ios_cert;
		ios_cert_pass = keys.ios_cert_pass;
		ios_provision = keys.ios_provision;
		ios_title = (keys.ios_title == null || keys.ios_title == '') ? appid : keys.ios_title;
		if (keys.android_keystore) {
			keyObj.android = addAndroidKey();
		}

		if (keys.ios_cert && keys.ios_provision) {
			keyObj.ios = addIOSKey();
		}
	}
	return forms.cordova_keys.selected;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"87172287-5C65-4EEE-A837-43C099F502BF"}
 */
function onAction$getCloudBuild(event) {

	function containsSpecialCharacters(str) {
		var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/g;
		return regex.test(str);
	}
	
	function onlyNumbersAndPeriods(str){
		var regex = /^[0-9.]*$/;
		return regex.test(str);
	}

	if (!img) {
		plugins.webnotificationsToastr.info('Please upload an icon for your app.')
		return;
	}

	if (!app_name || !app_url || !app_version || !appid) {
		plugins.webnotificationsToastr.info('Please fill out some of the details first.')
		return;
	}

	if (appid.split('.').length < 3) {
		plugins.webnotificationsToastr.info('Your App ID must be in the following naming convention: com.mobile.appname')
		return;
	}

	if (!isNaN(app_name.charAt(0))) {
		plugins.webnotificationsToastr.info('Your App Name must not start with a number')
		return;
	}

	if (!isNaN(appid.charAt(0))) {
		plugins.webnotificationsToastr.info('Your App ID must not start with a number')
		return;
	}

	if (containsSpecialCharacters(appid)) {
		plugins.webnotificationsToastr.info('Your App ID must not contain special characters')
		return;
	}
	
	if (!onlyNumbersAndPeriods(app_version)) {
		plugins.webnotificationsToastr.info('Your App Version can only have numbers and periods.')
		return;
	}
	
	if (app_url.indexOf('http')==-1) {
		plugins.webnotificationsToastr.info('Please enter a valid url.')
		return;
	}

	if (plugins_list.indexOf('FCM Push Notifications') != -1) {
		if (!googlejson && !googleplist) {
			plugins.webnotificationsToastr.info('Must upload google-services.json and/or GoogleService-Info.plist if using FCM plugin.');
			return;
		}
	}
	;

	setBuildID();
	if (!scopes.cordovaAuth.authenticated) {
		if (forms.cordova_auth.show()) {
			if (!addKeys()) return;
			onAction$getLocalBuild(event, scopes.cordovaAuth.createApp);
		}
	} else {
		if (!addKeys()) return;
		onAction$getLocalBuild(event, scopes.cordovaAuth.createApp);
	}
	return;
}

/**
 * @return {Object}
 * @properties={typeid:24,uuid:"C2FD3F83-2BA1-4D25-ADCC-E756F0AB31C1"}
 */
function addAndroidKey() {
	var f = createFile(b_dir + 'android.keystore', android_keystore);
	return scopes.cordovaAuth.addAndroidKey(f, appid, android_alias, android_key_pass, android_key_store_pass);
}

/**
 * @return {Object}
 * @properties={typeid:24,uuid:"0B1FD978-BCF2-4656-A9A6-8602C64FD070"}
 */
function addIOSKey() {
	var f_cert = createFile(b_dir + 'ios.p12', ios_cert);
	var f_prov = createFile(b_dir + 'ios.mobileprovision', ios_provision);
	return scopes.cordovaAuth.addIOSKey(f_cert, f_prov, appid, ios_cert_pass);
}

/**
 * @param url
 * @return {String}
 * @properties={typeid:24,uuid:"061A79AA-3595-4A86-87C6-99F8257AFDFF"}
 */
function cleanRemoteUrl(url) {
	url = utils.stringReplace(url, 'localhost:8080', scopes.cordovaAuth.apiURL);
	url = utils.stringReplace(url, 'localhost:', scopes.cordovaAuth.apiURL);
	url = utils.stringReplace(url, 'localhost', scopes.cordovaAuth.apiURL);
	return url;
}
/**
 * @properties={typeid:24,uuid:"F8C626B5-E6AC-473A-8B61-E4623668C990"}
 */
function getAndroid(res) {
	// download APK
	if (res.androidURL && res.androidURL != '' && res.androidURL.length > 5) {
		res.androidURL = cleanRemoteUrl(res.androidURL);		
		var f = createFile('build_' + build_id + '.apk', plugins.http.createNewHttpClient().createGetRequest(res.androidURL).executeRequest().getMediaData())
		application.showURL(createRemoteFile(f), '_blank');
		
	}
	if (res.androidBundleURL) {
		res.androidBundleURL = cleanRemoteUrl(res.androidBundleURL);
		f = createFile('build_' + build_id + '.aab', plugins.http.createNewHttpClient().createGetRequest(res.androidBundleURL).executeRequest().getMediaData())
		application.showURL(createRemoteFile(f), '_blank');
	}
	if (!res.iosURL) {
		plugins.svyBlockUI.stop();
	}
	f.deleteFile()
	plugins.webnotificationsToastr.success('Android Build Complete');

}

/**
 * @properties={typeid:24,uuid:"AC62A4CC-C848-4655-BFAD-51190EDF2767"}
 */
function getIOS(res) {
	// download IPA
	res.iosURL = cleanRemoteUrl(res.iosURL);
	var f = createFile('build_' + build_id + '.ipa', plugins.http.createNewHttpClient().createGetRequest(res.iosURL).executeRequest().getMediaData())
	application.showURL(createRemoteFile(f), '_blank');
	f.deleteFile()
	plugins.svyBlockUI.stop();
	plugins.webnotificationsToastr.success('IOS Build Complete');
}

/**
 * @param os
 * @param msg
 *
 * @properties={typeid:24,uuid:"41451058-A2A5-45F1-9541-09F059A9C081"}
 */
function getBuildLog(os, msg) {
	var f = createFile(os + '_build_' + build_id + '.log', null, msg)
	application.showURL(createRemoteFile(f), '_blank');
}
/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4BA7D4D4-9345-41ED-8A20-B5AFC8C7F1BC"}
 */
function onAction$uploadMobileBuild(event) {
	elements.multifileupload.openModal();
}

/**
 * @param {JSUpload} jsUpload
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7B2E3EEB-D57A-48D4-A72A-C0DC7A148A57"}
 */
function onFileUploaded(jsUpload) {
	setBuildID();
	var uploadBuildFile = plugins.file.convertToJSFile('build_' + build_id + '.zip');
	uploadBuildFile.setBytes(jsUpload.getBytes(), true);
	elements.multifileupload.reset();
	if (!scopes.cordovaAuth.authenticated) {
		if (forms.cordova_auth.show()) {
			if (!addKeys()) return;
			plugins.svyBlockUI.spinner = 'Wandering Cubes';
			plugins.svyBlockUI.show('Compilation will take a few minutes...');
			scopes.cordovaAuth.createApp(null, keyObj, uploadBuildFile);
		}
	} else {
		if (!addKeys()) return;
		plugins.svyBlockUI.spinner = 'Wandering Cubes';
		plugins.svyBlockUI.show('Compilation will take a few minutes...');
		scopes.cordovaAuth.createApp(null, keyObj, uploadBuildFile);
	}
	return;
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DD9CA09E-1A4C-48FE-8212-00EA7B56F7B4"}
 */
function onDataChange$url(oldValue, newValue, event) {
	if (app_url.includes('http://')) {
		//if we are using either plugin and the zebra scanner, we must remove it
		if (!plugins_list.includes('Clear Text Traffic')) {
			var arr = plugins_list.split('\n');
			arr.push('Clear Text Traffic (Android Only)');
			plugins_list = arr.join('\n');
			plugins.dialogs.showInfoDialog('INFO', 'The app URL used is not secure (https).  Adding the "Clear Text Traffic" plugin to support non-https endpoint.')
		}
	}
	
	//remove # from address as that doesn't parse well
	if (app_url.includes('#')) {
		app_url = app_url.split('#')[0]				
	}	
	
	if (app_url.includes('?phonegap')){
		app_url = app_url.split('?phonegap')[0];
		plugins.dialogs.showInfoDialog('INFO', 'phonegap parameter not required.')
	}
	
	if (app_url.includes('&phonegap')){
		app_url = app_url.split('&phonegap')[0];
		plugins.dialogs.showInfoDialog('INFO', 'phonegap parameter not required.')
	}
	
	return true
}
