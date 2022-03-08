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
 * @param {plugins.file.JSFile} f
 * @param {Object} key
 * @param {plugins.file.JSFile} uploadBuild
 * @return {Object}
 * @properties={typeid:24,uuid:"E09C56D9-D184-490F-A019-DCA1B1B1EAB5"}
 */
function createApp(f, key, uploadBuild) {
	apiURL = 'mobile-builder.servoy.com/ws';
	c = plugins.http.createNewHttpClient();
	var req = c.createPostRequest('https://' + apiURL + '/servoy-service/rest_ws/ws/cordova');

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
	if (uploadBuild && uploadBuild.exists()) {
		req.addFile('importBuild', uploadBuild.getName(), uploadBuild);
	}

	req.addHeader('Accept', 'application/json; charset=UTF-16');
	var res = req.executeRequest();
	try {
		if (res.getResponseBody())
			var body = JSON.parse(res.getResponseBody());
	} catch (e) {
		application.output(e, LOGGINGLEVEL.INFO)
	}
	application.output('POST:')
	application.output(res.getResponseBody(), LOGGINGLEVEL.INFO)
	if (body && body['data'] == 'Different job in progress.') {
		//set up a scheduler to get setup job later
		plugins.scheduler.removeJob('checkJob');
		var d = new Date();
		d.setSeconds(d.getSeconds() + 15);
		plugins.scheduler.addJob('checkJob', d, checkJob, [f, key, uploadBuild]);
		return null;
	} else {
		//set up a scheduler to get files
		plugins.scheduler.removeJob('getBuildJob');
		d = new Date();
		d.setSeconds(d.getSeconds() + 15);
		plugins.scheduler.addJob('getBuildJob', d, getBuildJob);
	}

	return null;
}

/**
 * @param f
 * @param key
 * @param uploadBuild
 *
 * @properties={typeid:24,uuid:"6381EE21-9935-4BFB-AAD9-441D50480F72"}
 */
function checkJob(f, key, uploadBuild) {
	c = plugins.http.createNewHttpClient();
	var req = c.createGetRequest('https://' + apiURL + '/servoy-service/rest_ws/ws/cordova?build_num=' + forms.main.build_id);
	req.addHeader('build_num', forms.main.build_id)
	//	application.output('get build ' + forms.main.build_id);
	var res = req.executeRequest();
	if (res) {
		try {
			if (res.getResponseBody())
				var body = JSON.parse(res.getResponseBody());
		} catch (e) {
			application.output(e, LOGGINGLEVEL.INFO)
		}
	}
	application.output('CHECK:')
	application.output(res.getResponseBody(), LOGGINGLEVEL.INFO)
	if (body) {
		switch (body['data']) {
		case 'This job not yet started. Another job is in progress.':
			//set up a scheduler to get setup job later
			plugins.scheduler.removeJob('checkJob');
			var d = new Date();
			d.setSeconds(d.getSeconds() + 15);
			plugins.scheduler.addJob('checkJob', d, checkJob, [f, key, uploadBuild]);
			break;
		case 'Job not yet started.':
			//try to create job again since queue is open
			createApp(f, key, uploadBuild);
			break;

		default:
			break;
		}
	}
}

/**
 *
 * @properties={typeid:24,uuid:"544F5938-5E5D-42EE-922C-0B3EAB2853C6"}
 */
function getBuildJob() {
	c = plugins.http.createNewHttpClient();
	var req = c.createGetRequest('https://' + apiURL + '/servoy-service/rest_ws/ws/cordova?build_num=' + forms.main.build_id);
	req.addHeader('build_num', forms.main.build_id)
	//	application.output('get build ' + forms.main.build_id);
	var res = req.executeRequest();
	if (res) {
		application.output('GET:');
		if (res.getStatusCode() == 404) {
			plugins.scheduler.removeJob('getBuildJob')
			var d = new Date();
			d.setSeconds(d.getSeconds() + 25);
			plugins.scheduler.addJob('getBuildJob', d, getBuildJob);
			return;
		}
		try {
			/** @type {{result:{android:String,ios:String},log:String,data:String}} */
			var r = JSON.parse(res.getResponseBody())
			if (r.data) {
				try {
					r = JSON.parse(r.data);
				} catch (e) {
					r = JSON.parse(res.getResponseBody())
					if (r.data)
						r = r.data
				}
			}

			if (r && r.result) {
				//if results are ready stop the job
				plugins.scheduler.removeJob('getBuildJob');
				plugins.svyBlockUI.stop();
			}

			if (r && !r.result) {
				application.output(res.getResponseBody(), LOGGINGLEVEL.INFO)
				switch (r) {
				case 'This job not yet started. Another job is in progress.':
					plugins.scheduler.removeJob('getBuildJob')
					d = new Date();
					d.setSeconds(d.getSeconds() + 25);
					plugins.scheduler.addJob('getBuildJob', d, getBuildJob);
					break;
				case 'Job is in progress.':
					plugins.scheduler.removeJob('getBuildJob')
					d = new Date();
					d.setSeconds(d.getSeconds() + 25);
					plugins.scheduler.addJob('getBuildJob', d, getBuildJob);
					break;
				default:
					break;
				}
				return;
			}
			application.output('Job finished');
			if (r && r.result.android == 'SUCCESS') {
				plugins.svyBlockUI.show('Downloading Android build...');
				forms.main.getAndroid(r);
			} else {
				var msg = 'Could not compile Android build. \n'
				if (r.log.length < 5) {
					msg += 'Build Server is down...';
				} else {
					if (r.log.indexOf('Keystore was tampered with, or password was incorrect') != -1) {
						msg += 'Keystore was tampered with or password was incorrect.'
					}

					if (r.log.indexOf('No key with alias') != -1) {
						msg += 'No key with alias ' + forms.main.android_alias + ' found in keystore.';
					}

					if (r.log.indexOf('Current working directory is not a Cordova-based project') != -1) {
						msg += 'Current working directory is not a Cordova-based project.  Check the structure of your mobile upload.'
					}

					if (r.log.indexOf('Source path does not exist') != -1) {
						msg += r.log.substring(r.log.indexOf('Source path does not exist'), r.log.indexOf('Source path does not exist') + 100)
					}
					//					application.output(r.log)
				}
				plugins.webnotificationsToastr.error(msg)
				var vl = plugins.dialogs.showErrorDialog('ERROR', msg, 'View Build Log', 'Close');
				if (vl == 'View Build Log') {
					forms.main.getBuildLog('android', r.log.substring(r.log.indexOf('ANDROID STARTING BUILD'), r.log.indexOf('ANDROID END BUILD')))
				}
			}
			if (r && r.result.ios == 'SUCCESS') {
				if (forms.main.ios_cert || forms.main.ios_provision || forms.main.ios_cert_pass) {
					plugins.svyBlockUI.show('Downloading iOS build...');
					forms.main.getIOS(r);
				}
			} else if (forms.main.ios_cert) {
				msg = 'Failed to compile IOS build. \n'
				if (r.log.length < 5) {
					msg += 'Build Server is down...';
				} else {
					if (r.log.indexOf('IOS certificate or password is invalid') != -1) {
						msg += 'IOS certificate or password is invalid'
					}

					if (r.log.indexOf('Code Signing Error:') != -1) {
						msg += 'There is an issue with code signing, \n'
						if (r.log.indexOf('which does not match the bundle ID') != -1) {
							msg += 'the provisioning profile does not match bundle ID ' + forms.main.appid + '.\n';
						}

						msg += 'Make sure that you are using the proper certificate and provisioning file(s) that pertain to either development or distribution.'
					}
					//					application.output(r.log)
				}
				plugins.webnotificationsToastr.error('Failed to compile IOS build');
				vl = plugins.dialogs.showErrorDialog('ERROR', msg, 'View Build Log', 'Close');
				if (vl == 'View Build Log') {
					forms.main.getBuildLog('ios', r.log.substring(r.log.indexOf('IOS STARTING BUILD'), r.log.indexOf('IOS END BUILD')))
				}
			}
		} catch (e) {
			application.output(res.getResponseBody(), LOGGINGLEVEL.INFO)
		}

	}

}

/**
 * @return {Object}
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
 * @return {Object}
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

/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"D6D0979F-1772-475E-A6A5-10365E071BA6"}
 */
function onSolutionOpen(arg, queryParams) {
	plugins.ngclientutils.setViewportMetaDefaultForMobileAwareSites()
}
