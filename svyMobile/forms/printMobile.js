/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"20595E44-9A03-477F-B641-7A54C3DCF1ED"}
 */
var content;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"119E1A14-AB42-42D8-B853-0D547BC7CA18"}
 */
var messages = null;

/**
 * @param e
 *
 * @properties={typeid:24,uuid:"CAA9FD49-804F-44A1-8C4A-42B191860CFF"}
 */
function readErr(e) {
	application.output(e);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 * @override
 *
 * @properties={typeid:24,uuid:"381FD0B1-66AB-41C7-BC37-1CB3B71F2D04"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event);
	if (!scopes.globals.phonegapEnabled) {
		plugins.dialogs.showInfoDialog('INFO', 'Cannot run this solution via web.');
		scopes.mobileBase.goBack(event);
	}
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8FD3B3DA-94A7-41CB-BDF3-42E089C81567"}
 */
function onAction$printImage(event) {
	//print an base64 image
	content = '<img style="width:100%;height:auto" src="data:image/jpeg;base64,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"/>';
	plugins.svyBlockUI.show('Loading...');
	plugins.svyBlockUI.stop(1500);
	plugins.svyphonegapPrinter.print(content, { name: "image" }, callback)
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1E2ECB37-587C-4F1A-A90B-D64167D42945"}
 */
function onAction$printPDF(event) {
	//print a base64 encoded pdf
	content = 'JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg==';
	plugins.svyphonegapPrinter.printPDF(content, callback)
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E28A214B-12A4-4272-A537-FDBD06762C21"}
 */
function onAction$printWebsite(event) {
	//print a website
	content = 'https://www.google.com/';
	plugins.svyBlockUI.show('Loading...');
	plugins.svyBlockUI.stop(1500);
	plugins.svyphonegapPrinter.print(content, { name: "web" }, callback)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"BD72921B-669F-4DD7-92B1-3E44AF88598B"}
 */
function onAction$printText(event) {
	//print some text
	content = '<h1>Lorem Ipsum</h1> <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sagittis orci. In placerat scelerisque mi vel venenatis. In sagittis neque vitae est convallis, sed porta tellus imperdiet. Vestibulum condimentum ligula odio. Aenean vel mi orci. Maecenas id odio maximus, iaculis leo in, semper dui. Integer in eros dignissim, interdum turpis vitae, finibus quam. Morbi accumsan, dui a placerat maximus, lectus arcu tristique dui, a semper nibh arcu nec felis. Nulla facilisi. Donec sit amet nunc dictum felis consequat tincidunt. Aliquam erat volutpat. Nullam ornare at nibh in feugiat. Nulla elit velit, mollis a cursus nec, sodales id urna. Curabitur nec diam in nulla accumsan rhoncus non at leo. Ut velit mi, tempor at arcu non, auctor consequat massa.'
	plugins.svyBlockUI.show('Loading...');
	plugins.svyBlockUI.stop(1500);
	plugins.svyphonegapPrinter.print(content, { name: "text" }, callback)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"AA616B4F-6062-45F0-AA4E-733761FE9B01"}
 */
function onAction$Run(event) {
	//print whatever is in content
	plugins.svyBlockUI.show('Loading...');
	plugins.svyBlockUI.stop(1500);
	plugins.svyphonegapPrinter.print(content, { name: "run" }, callback)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param data
 *
 * @properties={typeid:24,uuid:"DEE83867-556F-4967-96C8-4316D9D64E9F"}
 */
function callback(data) {	
	plugins.svyBlockUI.stop();
	application.output('Printed Something');
}