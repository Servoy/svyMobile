/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A1680D86-13BA-43CF-8A91-38FE35B8857E"}
 */
var token;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"68FC5564-84F0-4247-8C60-57698DE9D676"}
 */
var tokenURL = 'https://build.phonegap.com/token';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DF7A6CF1-18FF-4A5F-80CD-C6CE6F1F2C3C"}
 */
var apiURL = 'https://build.phonegap.com/api/v1/apps/';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6FD26B4A-B25B-4D71-A455-D33AE3CFB152"}
 */
var keyURL = 'https://build.phonegap.com/api/v1/keys';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DE6F81F4-08B1-4141-85A6-F26E93F92A38"}
 */
var username;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"66F89180-A63D-4396-8157-4A43431961FE"}
 */
var password;

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"93326293-6439-437C-9DE2-A4CF6D4B5615",variableType:-4}
 */
var authenticated = false;

/**
 * Authenticate with phonegap, grab token
 * @param user
 * @param pass
 *
 * @properties={typeid:24,uuid:"7CA7EA12-0BF5-4854-9917-622D674357F8"}
 */
function authenticate(user, pass) {
	var c = plugins.http.createNewHttpClient();
	var req = c.createPostRequest(tokenURL);
	var e = req.executeRequest(user, pass)
	token = JSON.parse(e.getResponseBody())['token']
	if (token) {
		authenticated = true;
	}
	username = user;
	password = pass;
	c.close();
}

/**
 * @properties={typeid:24,uuid:"2139A471-CB4D-4AF0-BA98-657CFC26A942"}
 */
function getApps() {
	var c = plugins.http.createNewHttpClient();
	//get users app
	var req = c.createGetRequest(apiURL);
	var res = req.executeRequest(username, password);

	if (res) {
		var apps = JSON.parse(res.getResponseBody())['apps']
		c.close();
		return apps;
	}
	c.close();
	return [];
}

/**
 * @properties={typeid:24,uuid:"B5ABEB84-709B-4D17-A8CC-EBB3D88895C3"}
 */
function getKeys(platform) {
	var c = plugins.http.createNewHttpClient();
	//get users app
	var req = c.createGetRequest(keyURL + '/' + platform);
	var res = req.executeRequest(username, password);

	if (res) {
		var keys = JSON.parse(res.getResponseBody())['keys'];
		application.output(keys)
		c.close();
		return keys;
	}
	c.close();
	return [];
}

/**
 * @properties={typeid:24,uuid:"68A3CBED-89BB-4280-94F3-ABB86AF7B3BC"}
 */
function deleteKey(platform, id) {
	var c = plugins.http.createNewHttpClient();
	//get users app
	var req = c.createDeleteRequest(keyURL + '/' + platform + '/' + id);
	var res = req.executeRequest(username, password);
	if (res) {
		var result = JSON.parse(res.getResponseBody());
		application.output(result)
		c.close();
		return result;
	}
	c.close();
	return [];
}

/**
 * @properties={typeid:24,uuid:"D3EDCDF3-53F9-4146-84AE-6A7E4EDD7BE1"}
 */
function deleteApp(id) {
	var c = plugins.http.createNewHttpClient();
	//get users app
	var req = c.createDeleteRequest(apiURL + '/' + id);
	var res = req.executeRequest(username, password);
	if (res) {
		var result = JSON.parse(res.getResponseBody())
		application.output(result)
		c.close();
		return result;
	}
	c.close();
	return [];
}

/**
 * @properties={typeid:24,uuid:"E09C56D9-D184-490F-A019-DCA1B1B1EAB5"}
 */
function createApp(f, keys) {
	var c = plugins.http.createNewHttpClient();
	//delete the first app we have, to make room for new. (this could be changed for those with paid accounts)
	var apps = getApps();
	if (apps && apps[0]) deleteApp(apps[0].id);
	var req = c.createPostRequest(apiURL);

	var keyObj = { }
	if (keys.ios) {
		keyObj.ios = keys.ios
	}
	if (keys.android) {
		keyObj.android = keys.android;
	}	
	req.addParameter('keys', JSON.stringify(keyObj));
	req.addParameter('create_method', 'file');
	if (f && f.exists()) req.addFile('file', 'app.zip', f);
	var res = req.executeRequest(username, password);
	if (res) {
		var result = JSON.parse(res.getResponseBody())
		application.output(result)
		c.close();
		return result;
	}
	c.close();
	return null;
}

/**
 * @param {String} b_id
 * @properties={typeid:24,uuid:"2F420607-3095-4011-B10D-E4578ED97827"}
 */
function downloadAndroid(b_id) {
	var c = plugins.http.createNewHttpClient();
	var apps = getApps();
	if (apps && apps[0]) {
		//get users app
		var req = c.createGetRequest(apiURL + '/' + apps[0].id + '/android');
		var res = req.executeRequest(username, password);
		if (res && (res.getStatusCode() == 200)) {
			var bytes = res.getMediaData();
			var f = plugins.file.createFile('android_'+b_id+'.apk');
			f.createNewFile();
			f.setBytes(bytes);
			c.close();
			return f;
		}
		return null;
	}
	c.close();
	return null;
}

/**
 * @param {String} b_id
 * @properties={typeid:24,uuid:"EA343CD0-BEF4-4819-BCB7-D153719F976F"}
 */
function downloadIOS(b_id) {
	var c = plugins.http.createNewHttpClient();
	var apps = getApps();
	if (apps && apps[0]) {
		//get users app
		var req = c.createGetRequest(apiURL + '/' + apps[0].id + '/ios');
		var res = req.executeRequest(username, password);		
		application.output(res.getStatusCode())
		if (res && (res.getStatusCode() == 200)) {
			var bytes = res.getMediaData();
			var f = plugins.file.createFile('ios_'+b_id+'.ipa');
			f.createNewFile();
			f.setBytes(bytes);
			c.close();
			return f;
		}
		return null;
	}
	c.close();
	return null;
}

/**
 * @properties={typeid:24,uuid:"064DBB02-2A84-400E-99EE-0A9644E84652"}
 */
function addAndroidKey(f, _title, _alias, _key_pw, _key_store_pw) {
	var c = plugins.http.createNewHttpClient();
	var req = c.createPostRequest(keyURL + '/android');
	
	if (f && f.exists()) req.addFile('keystore', 'android.keystore', f);
	req.addParameter("title", _title)
	req.addParameter("alias", _alias)
	req.addParameter("key_pw", _key_pw)
	req.addParameter("keystore_pw", _key_store_pw)

	var res = req.executeRequest(username, password);
	if (res) {
		var result = JSON.parse(res.getResponseBody())
		application.output(result)
		c.close();
		f.deleteFile();
		return result;
	}
	c.close();
	return null;
}

/**
 * @properties={typeid:24,uuid:"BD140257-4CED-428A-893C-B3D6844839A8"}
 */
function addIOSKey(f_cert, f_prov, _title, _cert_pass) {
	var c = plugins.http.createNewHttpClient();
	var req = c.createPostRequest(keyURL + '/ios');

	if (f_cert && f_cert.exists()) req.addFile('cert', 'ios.p12', f_cert);
	if (f_prov && f_prov.exists()) req.addFile('profile', 'ios.mobileprovision', f_prov);

	req.addParameter("title", _title)
	req.addParameter("password", _cert_pass)

	var res = req.executeRequest(username, password);
	if (res) {
		var result = JSON.parse(res.getResponseBody())
		application.output(result)
		c.close();
		f_cert.deleteFile();
		f_prov.deleteFile();
		return result;
	}
	c.close();
	return null;
}
