/**
 * @public
 * Show form
 * @properties={typeid:24,uuid:"9603F647-3467-4A99-9E4F-3877A277B617"}
 */
function show(){
	controller.show();
}

/**
 * @public 
 * @properties={typeid:24,uuid:"187A1616-716A-4CB6-A1CB-501B043FF105"}
 */
function getFS(){
	return foundset;
}

/**
 * @public 
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"79985692-4A58-4EF3-8D8C-7731A0D1EF26"}
 */
function goToExamples(event){
	forms.main.onClick$menuItem(event,{itemId:'examples'})
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @public 
 *
 * @properties={typeid:24,uuid:"969E7484-A39B-436D-AA0D-FD2BA9876415"}
 */
function onShow(firstShow, event) {	
}
