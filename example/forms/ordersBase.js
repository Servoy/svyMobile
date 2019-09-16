//business logic for orders

//variables

/**
 * @param {String} el
 * @override
 *
 * @properties={typeid:24,uuid:"A2E8E7E2-ECFF-44D9-B259-AE187C3D884D"}
 */
function validateDP(el) {
	var dp = this[el];
	switch (el) {
	case 'customer_id':
		if (!dp || dp == '') {
			return 'customer ID cannot be empty.'
		}
		break;
	case 'employee_id':
		if (!dp || dp == '') {
			return 'EmployeeID cannot be empty.'
		}
		break;
	default:
		break;
	}

	return _super.validateDP(el);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @public 
 *
 * @properties={typeid:24,uuid:"18A7FCA9-D6A1-4744-9257-72D9078D46EB"}
 */
function onShow(firstShow, event) {
	scopes.nav.header_title = 'Orders'
}
