/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"84989504-8370-4EFF-B829-455EAD633D73"}
 */
var locImg = 'media:///location.png';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3AA46076-24E5-4BE3-B5CE-FB29B97D25EF"}
 */
var chartImg = 'media:///charts.png';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3C0F5929-5223-4108-92CA-FB10C1A5C686"}
 */
var tblImg = 'media:///table.png';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3422A236-8EF1-4D97-9837-A3CE871B8848"}
 */
var mediaImg = 'media:///media.png';

/**
 * @param {JSEvent} event
 * @param {String} type
 * @private
 *
 * @properties={typeid:24,uuid:"F2366CB2-D69A-4707-BE46-C5E4EDECB3CD"}
 */
function onAction$show(event,type) {
	forms.main.onClick$menuItem(event, { itemId: type })
}