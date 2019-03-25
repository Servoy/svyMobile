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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E567EE44-7BE7-486B-8A23-F4736F690516"}
 */
var pushImg = 'media:///push.png';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4F78CD5A-4187-4FFB-83E0-188F7E27D83F"}
 */
var fingerImg = 'media:///fingerprint.png';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2D3E6532-958C-4CA8-9174-2084BE9D8A75"}
 */
var networkImg = "media:///network.png";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"03F41A50-B2FE-42D2-9A85-6A8726723680"}
 */
var fileImg = "media:///files.png"

/**
 * @param {JSEvent} event
 * @param {String} type
 * @private
 *
 * @properties={typeid:24,uuid:"F2366CB2-D69A-4707-BE46-C5E4EDECB3CD"}
 */
function onAction$show(event, type) {
	forms.main.onClick$menuItem(event, { itemId: type })
}
