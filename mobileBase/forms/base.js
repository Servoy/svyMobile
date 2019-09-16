/**
 * Field Validation
 * @properties={typeid:24,uuid:"27A02016-1DDA-4509-894D-A225A1D1A163"}
 */
function validate(el) {
	var validation_message = validateDP(el);
	if (validation_message != '') {
		elements[el].requestFocus();
		elements[el].addStyleClass('validate_focus')
		forms.validate_popup.show(validation_message, elements[el]);
		return false;
	}
	return true;
}

/**
 * @param {String} el
 *
 * @properties={typeid:24,uuid:"7E53DE57-2F8A-48DD-A1DF-26247CFD936B"}
 */
function validateDP(el) {
	return '';
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E03EF071-205A-4501-BA18-79FABE89EF1B"}
 */
function inputMoveNext(event) {
	resetValidation();
	//if validation fails, don't move to next element.
	if (!validate(event.getElementName())) {
		return;
	}

	//move to next element
	var tabseq = controller.getTabSequence();
	var tabIndex = tabseq.indexOf(event.getElementName())
	//are we at the last item?
	if (tabseq.length == (tabIndex + 1)) {
		//goto submit if we are on last item.
		submit();
		return;
	}
	if (tabseq.length > 1) {
		// If there is more than one field in the tab sequence,
		// focus the second one and skip over readonly fields.
		controller.focusField(tabseq[tabIndex + 1], true);
	} else {
		// If there is at most one field in the tab sequence, then focus
		// whatever field is first, and don't bother to skip over readonly fields.
		controller.focusField(null, false);
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @public
 *
 *
 * @properties={typeid:24,uuid:"68E6BDB3-3B11-466D-8BF6-FCFD8B901883"}
 */
function onDataChange(oldValue, newValue, event) {
	inputMoveNext(event);
	return true
}

/**
 * @properties={typeid:24,uuid:"448D966D-D175-44F1-A8BC-B38474D2B687"}
 */
function resetValidation() {
	for (var i = 0; i < elements.allnames.length; i++) {
		var name = elements.allnames[i];
		var elem = elements[name];
		elem.removeStyleClass('validate_focus');
	}
	//hide popup
	plugins.window.cancelFormPopup();
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"CA85BBA6-7EA4-4677-900B-3D9388F76EB4"}
 */
function runValidation(event) {
	resetValidation();
	validate(event.getElementName());
}

/**
 * Update User Interface
 * @properties={typeid:24,uuid:"43AB9D67-8882-4AD3-94E5-B7ABC6F2DA4E"}
 */
function updateUI() { }

/**
 * @properties={typeid:24,uuid:"20BB89FC-3C5C-47CE-ADAE-FF348107FE05"}
 */
function submit() {
	resetValidation()
	for (var i = 0; i < elements.allnames.length; i++) {
		var name = elements.allnames[i];
		if (!validate(name)) {
			return false;
		}
	}
	return true;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @public
 *
 * @properties={typeid:24,uuid:"45935E75-C8B7-4A51-8FC0-9E238B2FE23A"}
 */
function onLoad(event) {	
	scopes.svyApplicationCore.addDataBroadcastListener(dataBroadcastEventListener);
}

/**
 * @param {String} dataSource
 * @param {Number} action
 * @param {JSDataSet} pks
 * @param {Boolean} cached
 * @properties={typeid:24,uuid:"1E3FB978-0CCC-4B3F-A3AC-BADCE6966261"}
 */
function dataBroadcastEventListener(dataSource, action, pks, cached) {
	refreshData(dataSource, action, pks);
//	refreshData(dataSource, action, pks,[foundset1,fooundset2]); optional
}

/**
 * @param {String} dataSource
 * @param {Number} action
 * @param {JSDataSet} pks
 * @param {Array<JSFoundSet>} [foundsets] if we need additional foundsets refreshed
 * @properties={typeid:24,uuid:"B7C3E80C-E058-4B2F-88A3-B0B14547B9FE"}
 */
function refreshData(dataSource, action, pks, foundsets) {
	if (foundsets) {
		for (var i = 0; i < foundsets.length; i++) {
			databaseManager.refreshRecordFromDatabase(foundsets[i], -1);
		}
	}

	if (foundset) {
		if (dataSource == foundset.getDataSource()) {
			//by default just refresh current client cache for selected record
			databaseManager.refreshRecordFromDatabase(foundset, -1);
			//override if we need more than the current foundset
		}
	}
}

/**
 * @param {String} dataSource
 * @param {String} table
 * @param {Array} pks
 * @param {Number} action
 * @properties={typeid:24,uuid:"20FC24DB-F37B-4A88-B4DD-91A44E342410"}
 */
function broadCastChange(dataSource, table, pks, action) {
	
	//if we don't have a default action
	if (!action) {
		if (foundset.getSelectedRecord().isNew()){
			action = SQL_ACTION_TYPES.INSERT_ACTION;
		} else {
			action = SQL_ACTION_TYPES.UPDATE_ACTION;
		}
	}
	
	//get pks from current record
	if (!pks) {
		pks = foundset.getSelectedRecord().getPKs();
	}
	//get current datasource from foundset
	if (!dataSource) {
		dataSource = databaseManager.getDataSourceServerName(controller.getDataSource())
	}
	//get current tablename from foundset
	if (!table) {
		table = databaseManager.getTable(foundset).getSQLName();
	}

	var pksdataset = databaseManager.convertToDataSet(pks);
	return plugins.rawSQL.notifyDataChange(dataSource, table, pksdataset, action);
}
