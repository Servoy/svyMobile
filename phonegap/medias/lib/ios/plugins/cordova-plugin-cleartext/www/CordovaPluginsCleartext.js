cordova.define("cordova-plugin-cleartext.CordovaPluginsCleartext", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'CordovaPluginsCleartext', 'coolMethod', [arg0]);
};

});
