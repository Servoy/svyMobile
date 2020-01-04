/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C71494F5-92F0-42EB-AABC-FD2B3586DBFF"}
 */
var app_orientation = 'default';

/**
 * @properties={typeid:35,uuid:"692CB251-083A-43E2-BC6D-8D8F2C835831",variableType:-4}
 */
var splash_img;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3E6FC647-7479-4DAC-AA73-CD97E7CF53E2"}
 */
var app_url = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1F45F84D-BFBC-425D-9C7C-15D974B1EC16"}
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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A317224A-FF1F-40A8-A7B9-7B298EE505FA"}
 */
var android_key_id = null;

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
 * @properties={typeid:35,uuid:"F4EED9B4-4750-4F5A-912D-4A913910C338"}
 */
var ios_key_id = null;

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
	var b64 = new Packages.org.apache.commons.codec.binary.Base64();
	//display the image.
	elements.icon_preview.text = '<img src="data:image/png;base64,' + b64.encodeAsString(newValue) + '"/>'
	elements.icon_preview.visible = true;
	elements.icon_upload.visible = false;
	elements.clear_icon.visible = true;
	return true;
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
 * @properties={typeid:24,uuid:"77D6E062-B6B3-4779-8C8C-AE8ED481853F"}
 */
function onDataChangeSplash(oldValue, newValue, event) {
	var b64 = new Packages.org.apache.commons.codec.binary.Base64();
	//display the image.
	elements.splash_preview.text = '<img src="data:image/png;base64,' + b64.encodeAsString(newValue) + '"/>'
	elements.splash_preview.visible = true;
	elements.splash_upload.visible = false;
	elements.clear_splash.visible = true;
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C69D7167-3887-4925-AE0F-83333BCB2DD9"}
 */
function onAction$clearSplash(event) {
	elements.splash_upload.visible = true;
	elements.splash_preview.text = '';
	elements.splash_preview.visible = false;
	elements.clear_splash.visible = false;
	splash_img = null;
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
	elements.splash_preview.visible = false;
	elements.clear_icon.visible = false;
	elements.clear_splash.visible = false;
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
		"showDuration": 30000,
		"hideDuration": 1000,
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
	return true
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
 *
 * @properties={typeid:24,uuid:"846F44DB-9C0A-4D88-92DD-420947BCE716"}
 */
function onAction$getLocalBuild(event, cb) {
	if (!cb) {
		setBuildID();
	}
	if (!img || !splash_img) {
		plugins.dialogs.showInfoDialog('INFO', 'Please upload an icon and splashscreen.');
		return null;
	}

	if (!app_name || !app_url || !app_version || !appid) {
		plugins.dialogs.showInfoDialog('INFO', 'Please fill out all details first.')
		return null;
	}

	if (plugins_list.indexOf('FCM Push Notifications') != -1) {
		if (!googlejson || !googleplist) {
			plugins.dialogs.showInfoDialog('INFO', 'Must upload google-services.json & GoogleService-Info.plist if using FCM plugin.')
			return null;
		}
	}
	plugins.svyBlockUI.spinner = 'Wave';
	plugins.svyBlockUI.show('Generating build...');
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
	createConfig();
	createIndexHTML();	
	if (googlejson) createFile(b_dir + '/google-services.json', googlejson, null);
	if (googleplist) createFile(b_dir + '/GoogleService-Info.plist', googleplist, null);
	var build_file = zip(build_dir);
	var url = createRemoteFile(build_file);

	if (!cb) {
		application.showURL(url, '_blank');
	}

	if (cb) {
		var res = cb(build_file, { android: android_key_id, ios: ios_key_id });
	}

	plugins.file.deleteFolder(b_dir, false);
	plugins.file.deleteFile(build_file.getAbsolutePath())
	var dt = new Date();
	dt.setSeconds(dt.getSeconds() + 10);
	plugins.scheduler.addJob('removeFile', dt, removeFile, [b_dir])
	plugins.svyBlockUI.stop();
	if (res) return res;
	return null;
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
	createFile(b_dir + "/www/res/icon/ios/icon-40.png", createImageResize(img, 40, 40, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-40@2x.png", createImageResize(img, 80, 80, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-50.png", createImageResize(img, 50, 50, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-50@2x.png", createImageResize(img, 100, 100, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-60.png", createImageResize(img, 60, 60, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-60@2x.png", createImageResize(img, 120, 120, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-60@3x.png", createImageResize(img, 180, 180, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-72.png", createImageResize(img, 72, 72, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-72@2x.png", createImageResize(img, 144, 144, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-76.png", createImageResize(img, 76, 76, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-76@2x.png", createImageResize(img, 152, 152, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-small.png", createImageResize(img, 29, 29, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-small@2x.png", createImageResize(img, 58, 58, false, true));
	createFile(b_dir + "/www/res/icon/ios/icon-small@3x.png", createImageResize(img, 87, 87, false, true));

	//generate IOS Splash Screen
	createFile(b_dir + "/www/res/screen/ios/Default-568h@2x~iphone.png", createImageResize(splash_img, 640, 1136, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default-667h.png", createImageResize(splash_img, 750, 1334, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default-736h.png", createImageResize(splash_img, 1242, 2208, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default-Landscape-736h.png", createImageResize(splash_img, 1242, 2208, true, true));
	createFile(b_dir + "/www/res/screen/ios/Default-Landscape@2x~ipad.png", createImageResize(splash_img, 2048, 1536, true, true));
	createFile(b_dir + "/www/res/screen/ios/Default-Landscape~ipad.png", createImageResize(splash_img, 1024, 768, true, true));
	createFile(b_dir + "/www/res/screen/ios/Default-Portrait@2x~ipad.png", createImageResize(splash_img, 1536, 2048, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default-Portrait~ipad.png", createImageResize(splash_img, 768, 1024, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default@2x~iphone.png", createImageResize(splash_img, 640, 960, false, true));
	createFile(b_dir + "/www/res/screen/ios/Default~iphone.png", createImageResize(splash_img, 480, 320, false, true));

	//generate Android Icons
	createFile(b_dir + "/www/res/icon/android/drawable-ldpi-icon.png", createImageResize(img, 192, 192));
	createFile(b_dir + "/www/res/icon/android/drawable-mdpi-icon.png", createImageResize(img, 192, 192));
	createFile(b_dir + "/www/res/icon/android/drawable-hdpi-icon.png", createImageResize(img, 192, 192));
	createFile(b_dir + "/www/res/icon/android/drawable-xhdpi-icon.png", createImageResize(img, 192, 192));
	createFile(b_dir + "/www/res/icon/android/drawable-xxhdpi-icon.png", createImageResize(img, 192, 192));
	createFile(b_dir + "/www/res/icon/android/drawable-xxxhdpi-icon.png", createImageResize(img, 192, 192));

	//generate Android Splash Screen
	createFile(b_dir + "/www/res/screen/android/drawable-land-ldpi-screen.png", createImageResize(splash_img, 207, 368, true));
	createFile(b_dir + "/www/res/screen/android/drawable-land-mdpi-screen.png", createImageResize(splash_img, 248, 442, true));
	createFile(b_dir + "/www/res/screen/android/drawable-land-hdpi-screen.png", createImageResize(splash_img, 311, 552, true));
	createFile(b_dir + "/www/res/screen/android/drawable-land-xhdpi-screen.png", createImageResize(splash_img, 414, 736, true));
	createFile(b_dir + "/www/res/screen/android/drawable-land-xxhdpi-screen.png", createImageResize(splash_img, 621, 1104, true));
	createFile(b_dir + "/www/res/screen/android/drawable-land-xxxhdpi-screen.png", createImageResize(splash_img, 1242, 2208, true));

	createFile(b_dir + "/www/res/screen/android/drawable-port-ldpi-screen.png", createImageResize(splash_img, 207, 368));
	createFile(b_dir + "/www/res/screen/android/drawable-port-mdpi-screen.png", createImageResize(splash_img, 248, 442));
	createFile(b_dir + "/www/res/screen/android/drawable-port-hdpi-screen.png", createImageResize(splash_img, 311, 552));
	createFile(b_dir + "/www/res/screen/android/drawable-port-xhdpi-screen.png", createImageResize(splash_img, 414, 736));
	createFile(b_dir + "/www/res/screen/android/drawable-port-xxhdpi-screen.png", createImageResize(splash_img, 621, 1104));
	createFile(b_dir + "/www/res/screen/android/drawable-port-xxxhdpi-screen.png", createImageResize(splash_img, 1242, 2208));
}

/**
 * @param i
 * @param w
 * @param h
 * @param [rotate]
 * @param [removeTransparency]
 * @properties={typeid:24,uuid:"0A7DCB1F-A48F-464F-B3F7-FF7BCB00C5FA"}
 */
function createImageResize(i, w, h, rotate, removeTransparency) {
	var input = new java.io.File(b_dir + '_tmp');
	var fos = new java.io.FileOutputStream(input);
	fos.write(i);
	var im = Packages.javax.imageio.ImageIO.read(input);
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
	application.output(fname)
	plugins.file.convertToJSFile(fname).deleteFile();
	var file = plugins.file.convertToRemoteJSFile('/' + fname);
	application.output('remove file ' + fname + ' ' + plugins.file.deleteFile(file));
}

/**
 * @properties={typeid:24,uuid:"0C1A301F-0E06-43AA-A477-928DA769768F"}
 */
function createConfig() {
	//create config.xml for build
	var xml = '';
	xml = "<?xml version='1.0' encoding='utf-8'?>\n";
	xml += '<widget android-versionCode="10000000" id="' + appid + '" ios-CFBundleversion="100000" version="' + app_version + '" xmlns="http://www.w3.org/ns/widgets" xmlns:gap="http://phonegap.com/ns/1.0">\n';
	xml += '<name>' + app_name + '</name>\n';
	xml += '<description>' + app_desc + '</description>\n';
	xml += '<author email="' + app_email + '">' + app_author + '</author>\n';
	xml += '<content src="' + app_url + '" />\n'
	xml += '<access origin="*" />\n'
	xml += '<allow-navigation href="*" />\n'
	xml += '<allow-intent href="https://*/*" />\n'
	xml += '<preference name="swift-version" value="3.2" />\n'
	xml += '<preference name="target-device" value="universal" />\n'
	xml += '<preference name="DisallowOverscroll" value="true" />\n'
	xml += '<preference name="InAppBrowserStorageEnabled" value="true" />\n'
	xml += '<preference name="Orientation" value="' + app_orientation + '" />\n'
	if (plugins_list.indexOf('Zebra Scanner') != -1) { xml += '<preference name="phonegap-version" value="cli-7.1.0" />\n'} 
		else { xml += '<preference name="phonegap-version" value="cli-9.0.0" />\n'	}
	xml += '<platform name="android">\n'
	xml += '<icon src="www/res/icon.png" width="1024" height="1024"/>\n'
	xml += '<allow-intent href="market:*" />\n'
	if (googlejson) xml += '<resource-file src="google-services.json" target="google-services.json" />\n'
	if (googlejson) xml += '<resource-file src="google-services.json" target="app/google-services.json" />\n'
	xml += '<preference name="android-targetSdkVersion" value="28"/>\n'
	xml += '<preference name="AndroidLaunchMode" value="singleInstance" />\n'
	xml += '<preference name="ShowSplashScreenSpinner" value="false" />\n'
	xml += '<preference name="AutoHideSplashScreen " value="true" />\n'
	xml += '<preference name="SplashShowOnlyFirstTime" value="false" />\n'
	xml += '<preference name="backgroundColor" value="0x00000000" />\n'
	xml += '<preference name="SplashScreenDelay" value="10000" />\n'
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
	xml += '<edit-config target="NSLocationAlwaysUsageDescription" file="*-Info.plist" mode="merge" overwrite="true">\n'
	xml += '<string>Require Location for showing Map</string>\n'
	xml += '</edit-config>\n'
	xml += '<edit-config target="NSLocationWhenInUseUsageDescription" file="*-Info.plist" mode="merge" overwrite="true">\n'
	xml += '<string>Require Location for showing Map</string>\n'
	xml += '</edit-config>\n'
	xml += '<edit-config target="NSPhotoLibraryUsageDescription" file="*-Info.plist" mode="merge" overwrite="true" >\n'
	xml += '<string>Required for showing gallery</string>\n'
	xml += '</edit-config>\n'
	xml += '<edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge" overwrite="true">\n'
	xml += '<string>Required for capturing camera images.</string>\n'
	xml += '</edit-config>\n'
	if (googleplist) xml += '<resource-file src="GoogleService-Info.plist" />\n'
	xml += '<allow-intent href="itms:*" />\n'
	xml += '<allow-intent href="itms-apps:*" />\n'
	xml += '<feature name="CDVWKWebViewEngine">\n'
	xml += '<param name="ios-package" value="CDVWKWebViewEngine" />\n'
	xml += '</feature>\n'
	xml += '<preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine" />\n'
	xml += '<preference name="SplashScreenDelay" value="10000" />\n'
	xml += '<preference name="StatusBarOverlaysWebView" value="true" />\n'
	xml += '<preference name="AutoHideSplashScreen" value="false" />\n'
	xml += '<preference name="backgroundColor" value="0x00000000" />\n'
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
	xml += '<plugin name="cordova-plugin-cleartext" spec="https://github.com/tuanway/cordova-plugin-cleartext" />\n'
	if (plugins_list.indexOf('Ionic WebView') != -1) {
		xml += '<plugin name="cordova-plugin-ionic-webview" source="npm" />'
		xml += '<plugin name="cordova-plugin-ionic-keyboard" source="npm" />'
	}
	if (plugins_list.indexOf('Bar Code Scanner') != -1) xml += '<plugin name="phonegap-plugin-barcodescanner" spec="^8.0.1" />\n'
	if (plugins_list.indexOf('Camera') != -1) xml += '<plugin name="cordova-plugin-camera" spec="^2.4.1" />\n'
	if (plugins_list.indexOf('Network Information') != -1) xml += '<plugin name="cordova-plugin-network-information" spec="^1.3.4" />\n'
	if (plugins_list.indexOf('Network Interface') != -1) xml += '<plugin name="cordova-plugin-networkinterface" spec="^2.0.0" />\n'
	if (plugins_list.indexOf('Location') != -1)xml += '<plugin name="cordova-plugin-geolocation" spec="^2.4.3" />\n'
	if (plugins_list.indexOf('Filesystem') != -1) xml += '<plugin name="cordova-plugin-file" spec="^4.3.3" />\n'
	if (plugins_list.indexOf('Full screen') != -1)xml += '<plugin name="it.innowatio.cordova.ios-fullscreen" spec="https://github.com/tuanway/cordova-ios-fullscreen" />\n'
	if (plugins_list.indexOf('Zebra Scanner') != -1)xml += '<plugin name="com.jkt.zebra.barcode.plugin" spec="https://github.com/tuanway/zebra.git" />\n'
	if (plugins_list.indexOf('In-App Browser') != -1)xml += '<plugin name="cordova-plugin-inappbrowser" spec="^1.7.2" />\n'
	if (plugins_list.indexOf('Device Information') != -1) xml += '<plugin name="cordova-plugin-device" spec="^1.1.7" />\n'
	if (plugins_list.indexOf('Fingerprint') != -1) xml += '<plugin name="cordova-plugin-fingerprint-aio" spec="^1.6.0" />\n'
	if (plugins_list.indexOf('FCM Push Notifications') != -1) xml += '<plugin name="cordova-plugin-fcm-with-dependecy-updated" spec="https://github.com/tuanway/cordova-plugin-fcm-with-dependecy-updated" />\n'
	if (plugins_list.indexOf('Screen Orientation') != -1) xml += '<plugin name="cordova-plugin-screen-orientation"     source="npm" />\n'
	if (plugins_list.indexOf('Launch Navigator') != -1) xml += '<plugin name="uk.co.workingedge.phonegap.plugin.launchnavigator" source="npm" > <variable name="GOOGLE_API_KEY_FOR_ANDROID" value="{your_api_key}" /> </plugin>\n'
	
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
 * @param file
 *
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
 * @properties={typeid:24,uuid:"39181E26-0B58-4B7C-9CB3-C62FE6533BDB"}
 */
function addKeys() {
	var keys = forms.phonegap_keys.show();
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
			android_key_id = addAndroidKey()['id'];
		}

		if (keys.ios_cert && keys.ios_provision) {
			ios_key_id = addIOSKey()['id'];
		}
	}
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
	setBuildID();
	if (!scopes.phonegapAuth.authenticated) {
		if (forms.phonegap_auth.show()) {
			addKeys();
			var res = onAction$getLocalBuild(event, scopes.phonegapAuth.createApp);
		}
	} else {
		addKeys();
		res = onAction$getLocalBuild(event, scopes.phonegapAuth.createApp);
	}

	if (res && res.id) {
		application.output('Created App with ID:' + res.id)
		getAndroid();
		getIOS();
	}
}

/**
 * @properties={typeid:24,uuid:"C2FD3F83-2BA1-4D25-ADCC-E756F0AB31C1"}
 */
function addAndroidKey() {
	var f = createFile(b_dir + 'android.keystore', android_keystore);
	var keys = scopes.phonegapAuth.getKeys('android');
	for (var i = 0; i < keys.length; i++) {
		if (keys[i].title == android_title) {
			//if we already added this key (based on title) , let's remove it first
			scopes.phonegapAuth.deleteKey('android', keys[i].id);
		}
	}
	return scopes.phonegapAuth.addAndroidKey(f, appid, android_alias, android_key_pass, android_key_store_pass);
}

/**
 * @properties={typeid:24,uuid:"0B1FD978-BCF2-4656-A9A6-8602C64FD070"}
 */
function addIOSKey() {
	var f_cert = createFile(b_dir + 'ios.p12', ios_cert);
	var f_prov = createFile(b_dir + 'ios.mobileprovision', ios_provision);
	var keys = scopes.phonegapAuth.getKeys('ios');
	for (var i = 0; i < keys.length; i++) {
		if (keys[i].title == ios_title) {
			//if we already added this key (based on title) , let's remove it first
			scopes.phonegapAuth.deleteKey('ios', keys[i].id);
		}
	}
	return scopes.phonegapAuth.addIOSKey(f_cert, f_prov, appid, ios_cert_pass);
}

/**
 * @properties={typeid:24,uuid:"F8C626B5-E6AC-473A-8B61-E4623668C990"}
 */
function getAndroid() {
	plugins.svyBlockUI.show('Getting Android Binary..');
	// download APK
	var androidFile = null;
	while (!androidFile) {
		if (scopes.phonegapAuth.getApps()[0].status.android == 'error') {
			plugins.svyBlockUI.stop();
			plugins.dialogs.showInfoDialog('INFO', 'Failed to get Android Binary, please refer to cloud build logs.')
			return;
		}
		if (scopes.phonegapAuth.getApps()[0].status.android == 'complete') {
			androidFile = scopes.phonegapAuth.downloadAndroid(b_dir);
			application.output('get android : ' + androidFile);
		}
	}
	var url = createRemoteFile(androidFile);
	application.showURL(url, '_blank');
	var dt = new Date()
	dt.setSeconds(dt.getSeconds() + 15);
	plugins.scheduler.addJob('removeandroid', dt, removeMiscFile, [androidFile])
	plugins.svyBlockUI.stop();
	plugins.webnotificationsToastr.success('Android Build Complete');

}

/**
 * @properties={typeid:24,uuid:"AC62A4CC-C848-4655-BFAD-51190EDF2767"}
 */
function getIOS() {
	plugins.svyBlockUI.show('Getting IOS Binary..');
	// download APK
	var iosFile = null;
	while (!iosFile) {
		if (scopes.phonegapAuth.getApps()[0].status.ios == 'error') {
			plugins.svyBlockUI.stop();
			plugins.dialogs.showInfoDialog('INFO', 'Failed to get IOS Binary, please refer to cloud build logs.')
			return;
		}
		if (scopes.phonegapAuth.getApps()[0].status.ios == 'complete') {
			iosFile = scopes.phonegapAuth.downloadIOS(b_dir);
			application.output('get ios : ' + iosFile);
		}
	}
	var url = createRemoteFile(iosFile);
	application.showURL(url, '_blank');
	var dt = new Date()
	dt.setSeconds(dt.getSeconds() + 15);
	plugins.scheduler.addJob('removeios', dt, removeMiscFile, [iosFile])
	plugins.svyBlockUI.stop();
	plugins.webnotificationsToastr.success('IOS Build Complete');
}
