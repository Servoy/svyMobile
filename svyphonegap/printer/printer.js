angular.module('svyphonegapPrinter', ['servoy']).factory("svyphonegapPrinter", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapPrinter');
		return {
			print: function(content, type, options, cb) {
				switch (type) {
				case 'text':
					cordova.plugins.printer.print(content, options, function(r) {
							$window.executeInlineScript(cb.formname, cb.script, [r]);
						});
					break;
				case 'html':
					cordova.plugins.printer.print(content, options, function(r) {
							$window.executeInlineScript(cb.formname, cb.script, [r]);
						});
					break;
				case 'base64':
					cordova.plugins.printer.print(content, options, function(r) {
							$window.executeInlineScript(cb.formname, cb.script, [r]);
						});
					break;
				default:
					break;
				}
			},
			pick: function(options, cb) {
				cordova.plugins.printer.pick(options, function(r) {
						$window.executeInlineScript(cb.formname, cb.script, [r]);
					});
			}
		}
	}).run(function($rootScope, $services) { })