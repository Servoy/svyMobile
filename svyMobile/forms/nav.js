/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"76DC6B23-868C-4D94-9F24-D6B09F32AA74"}
 */
var title = 'Main Menu'
/**
 * @param formName
 * @override
 *
 * @properties={typeid:24,uuid:"2577F0EC-7ADE-4D2B-B928-84DF8EE26945"}
 */
function openForm(formName) {
	elements.content.containedForm = formName;
}

/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"45FA0891-1A9F-4DE6-90C1-B456FA4DE155"}
 */
function onLoad(event) {
	scopes.mobileBase.gotoForm(event, 'home', 'Main Menu')
	return _super.onLoad(event)
}

/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"3FF1C800-2FE0-4FB5-8EC6-A7092614499F"}
 */
function navListener(event) {
	title = event.getNavigationItem().text;
	if (title == 'Main Menu') {
		elements.back.visible = false;
	} else {
		elements.back.visible = true;
	}
}
