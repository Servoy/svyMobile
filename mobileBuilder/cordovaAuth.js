/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"026180CC-D618-41D3-A17D-49D89EAFEEEE"}
 */
var apiURL = '';

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"93326293-6439-437C-9DE2-A4CF6D4B5615",variableType:-4}
 */
var authenticated = false;

/**
 *
 * @properties={typeid:24,uuid:"7CA7EA12-0BF5-4854-9917-622D674357F8"}
 */
function authenticate() {
	authenticated = true;
}

/**
 * @type {plugins.http.HttpClient}
 *
 * @properties={typeid:35,uuid:"CB517867-7F77-4D31-8B91-1F835A1D3E42",variableType:-4}
 */
var c;

/**
 * @properties={typeid:24,uuid:"E09C56D9-D184-490F-A019-DCA1B1B1EAB5"}
 */
function createApp(f, key) {
	apiURL = application.getUserProperty('pgURL');
	//	apiURL = '192.168.1.24:8183';
	//	apiURL = '192.168.1.24:8081/ws';
	c = plugins.http.createNewHttpClient();
	var req = c.createPostRequest('http://' + apiURL + '/servoy-service/rest_ws/ws/cordova');

	if (key.android && key.android['android.keystore'] && key.android['android.keystore'].exists()) req.addFile('android_key_store', 'android.keystore', key.android['android.keystore']);
	if (key.ios && key.ios['ios.p12'] && key.ios['ios.p12'].exists()) req.addFile('ios_cert', 'ios.p12', key.ios['ios.p12']);
	if (key.ios && key.ios['ios.mobileprovision'] && key.ios['ios.mobileprovision'].exists()) req.addFile('ios_profile', 'ios.mobileprovision', key.ios['ios.mobileprovision']);
	if (key.android) {
		req.addParameter('android_title', key.android.title == null ? '' : key.android.title);
		req.addParameter('alias', key.android.alias == null ? '' : key.android.alias);
		req.addParameter('key_pw', key.android.key_pw == null ? '' : key.android.key_pw);
		req.addParameter('keystore_pw', key.android.keystore_pw == null ? '' : key.android.keystore_pw);
	} else {
		req.addParameter('android_title', '');
		req.addParameter('alias', '');
		req.addParameter('key_pw', '');
		req.addParameter('keystore_pw', '');
	}
	if (key.ios) {
		req.addParameter('ios_title', key.ios.title == null ? '' : key.ios.title);
		req.addParameter('ios_pw', key.ios.password == null ? '' : key.ios.password);
	} else {
		req.addParameter('ios_title', '');
		req.addParameter('ios_pw', '');
	}
	if (f && f.exists()) req.addFile('build', 'app.zip', f);
	req.addHeader('Accept', 'application/json; charset=UTF-16');
	req.executeRequest()
	//set up a scheduler to get files
	var d = new Date();
	d.setMinutes(d.getMinutes() + 2);
	plugins.scheduler.addJob('getBuildJob', d, getBuildJob)
	return null;
}

/**
 *
 * @properties={typeid:24,uuid:"544F5938-5E5D-42EE-922C-0B3EAB2853C6"}
 */
function getBuildJob() {
	c = plugins.http.createNewHttpClient();
	var req = c.createGetRequest('http://' + apiURL + '/servoy-service/rest_ws/ws/cordova?build_num=' + forms.main.build_id);
	req.addHeader('build_num', forms.main.build_id)
	var res = req.executeRequest();
	if (res) {
		try {
			/** @type {{result:{android:string,ios:string}}} */
			var r = JSON.parse(res.getResponseBody())
			r = JSON.parse(r['data']);
			if (r && r.result) {
				plugins.scheduler.removeJob('getBuildJob');
				plugins.svyBlockUI.stop();
			}
			if (r && r.result.android == 'SUCCESS') {
				forms.main.getAndroid(r);
			} else {
				plugins.webnotificationsToastr.error('Could not compile Android build')
			}
			if (r && r.result.ios == 'SUCCESS') {
				if (forms.main.ios_cert || forms.main.ios_provision || forms.main.ios_cert_pass) {
					forms.main.getIOS(r);
				}
			} else if (forms.main.ios_cert) {
				plugins.webnotificationsToastr.error('Failed to compile IOS build')
			}
		} catch (e) {

		}

	}

}

/**
 * @properties={typeid:24,uuid:"064DBB02-2A84-400E-99EE-0A9644E84652"}
 */
function addAndroidKey(f, _title, _alias, _key_pw, _key_store_pw) {
	var androidKeyObj = { };
	if (f) {
		androidKeyObj['android.keystore'] = f;
	}
	androidKeyObj.title = _title
	androidKeyObj.alias = _alias
	androidKeyObj.key_pw = _key_pw
	androidKeyObj.keystore_pw = _key_store_pw
	return androidKeyObj;
}

/**
 * @properties={typeid:24,uuid:"BD140257-4CED-428A-893C-B3D6844839A8"}
 */
function addIOSKey(f_cert, f_prov, _title, _cert_pass) {
	var iosKeyObj = { };
	if (f_cert && f_cert.exists()) iosKeyObj['ios.p12'] = f_cert;
	if (f_prov && f_prov.exists()) iosKeyObj['ios.mobileprovision'] = f_prov;

	iosKeyObj.title = _title;
	iosKeyObj.password = _cert_pass;
	return iosKeyObj;
}
