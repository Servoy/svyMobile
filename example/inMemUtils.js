/**
 * @private
 * @type {Boolean}
 * @properties={typeid:35,uuid:"4E69D361-F651-4959-8E93-86E12BD6C3C6",variableType:-4}
 */
var verbose = false;

/**
 * @param {Boolean} enabled
 *
 * @public
 * @properties={typeid:24,uuid:"58DF5E6B-4895-4FAB-9F74-C805302DBC9C"}
 */
function setVerboseLogging(enabled) {
	verbose = enabled;
}

/**
 * Generates a date object corrected to the current specified offset
 *
 * @public
 * @param {String} dateString
 * @return {Date}
 * @see !i18n.sit.system.timeZoneOffset
 *
 * @properties={typeid:24,uuid:"E77C9D66-1A18-4684-9F7C-A3DA132F66BC"}
 */
function generateDate(dateString) {
	var regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T(\d{2}):(\d{2})/
	if (!regex.test(dateString)) {
		dateString = dateString + 'T00:00:00.000'
	}
	//	if(dateString.length == 23){
	//		dateString += i18n.getI18NMessage('sit.system.timeZoneOffset');
	//	}
	//	var d = new Date(dateString);
	//	return d;

	var targetTime = new Date(dateString);
	var sitTimeZone = i18n.getI18NMessage('sit.system.timeZoneOffset');
	// TODO check if is summer time or legal time ?

	var tzDifference = sitTimeZone * 60 + targetTime.getTimezoneOffset();
	var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000);
	return offsetTime
}

/**
 * @param inMemDataSource
 * @param {Boolean} [verboseLogging]
 *
 * @return {Array<String>}
 * @protected
 *
 * @properties={typeid:24,uuid:"E0B0E1F2-61A0-480D-A3A9-B0C47D26BA77"}
 */
function getInMemColumnList(inMemDataSource, verboseLogging) {

	var table = databaseManager.getTable(inMemDataSource);
	var columns = table.getColumnNames();
	var print = "["

	for (var i = 0; verboseLogging && i < columns.length; i++) {
		if (i > 0) print += ",\n";
		print += "'" + columns[i] + "'";
	}
	print += "]";

	if (verboseLogging) {
		application.output(print)
	}

	if (columns.indexOf('_sv_rowid') != -1) {
		columns.splice(columns.indexOf('_sv_rowid'), 1)
	}

	return columns;
}

/**
 * @param inMemDataSource
 * @param {Object} item
 * @param {Function} [parserFunction]
 * @param {Boolean} [verboseLogging]
 * @protected
 *
 * @properties={typeid:24,uuid:"BCA06608-75FF-43D7-A789-6B1047CF19B7"}
 * @SuppressWarnings(deprecated)
 */
function getInMemDataSetRow(inMemDataSource, item, parserFunction, verboseLogging) {

	var columns = getInMemColumnList(inMemDataSource, verboseLogging);

	/** @type {Array} */
	var row = [];

	var print = "[ application.getUUID()";

	for (var i = 0; i < columns.length; i++) {
		print += ",\n";

		var col = columns[i];
		var capitalizedName = getFieldNameFromColumn(col);
		print += "item." + capitalizedName;

		var value = null;
		if (!item.hasOwnProperty(capitalizedName)) {
			if (parserFunction) {
				value = parserFunction.call(this, col, value, item);
			}
			if (value === undefined) {
				// TODO log property not found
				application.output("Could not find field {} for datasource {}" + capitalizedName + inMemDataSource);
				value = null;
			}
		} else {

			value = item[capitalizedName];

			if (parserFunction) {
				value = parserFunction.call(this, col, value, item);
			}

			// parse the type
			var jsColumn = databaseManager.getTable(inMemDataSource).getColumn(col);
			switch (jsColumn.getType()) {
			case JSColumn.DATETIME:
				// TODO FIXME
				if (value && value instanceof String) { // parse it if is a string
					value = generateDate(value.toString());
					//					var regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T(\d{2}):(\d{2})/
					//					if (regex.test(value)) {
					//						value = value ? utils.parseDate("" + value, "yyyy-MM-dd'T'HH:mm:ss.S") : null;
					//						log.info(value);
					//					} else {
					//						value = value ? utils.parseDate("" + value, "yyyy-MM-dd") : null;
					//					}
				}
				break;
			case JSColumn.INTEGER:
				if (value === "") {
					value = null;
				} else if (value == true || value == "true") {
					value = 1;
				} else if (!isNaN(value)) {
					value = utils.stringToNumber(value);
				} else {
					value = 0;
				}
				break;
			case JSColumn.NUMBER:
			default:
				break;
			}

		}
		row.push(value);
	}
	print += "]";

	if (verboseLogging) {
		application.output(print);
		application.output(row);
	}
	return row;
}

/**
 * Populate the in memory datasource automatically. It requires the field to be mapped from CamelCase to lowercase_underscore_separated
 * @param {String} dataSource
 * @param {Array} items
 * @param {Function} [parserFunction]
 *
 * @public
 *
 * @properties={typeid:24,uuid:"F5BB2A14-E370-4A40-90C7-40B5E9AFCDF1"}
 */
function populateInMemoryDS(dataSource, items, parserFunction) {
	items = capitalizePropertyNames(items);
	var ds = databaseManager.createEmptyDataSet(0, getInMemColumnList(dataSource));

	for (var i = 0; items && items[0] && i < items.length; i++) {
		ds.addRow(getInMemDataSetRow(dataSource, items[i], parserFunction, verbose));
	}
	ds.createDataSource(dataSource.replace("mem:", ""));
}

/**
 * @private
 * @param {String} fieldName
 * @return {String}
 *
 * @properties={typeid:24,uuid:"0C3E9100-B6D3-4902-A946-4B332097E361"}
 */
function getColumnNameFromField(fieldName) {
	// get the column Name
	var columnName = fieldName.toLowerCase()[0];

	for (var i = 1; i < fieldName.length; i++) {
		/** @type {String} */
		var letter = fieldName[i];
		if (letter === letter.toUpperCase()) {
			columnName += "_" + letter.toLowerCase();
		} else {
			columnName += letter;
		}
	}

	if (Packages.com.servoy.j2db.util.keyword.Ident.checkIfKeyword(columnName)) {
		columnName = "svy_" + columnName;
	}
	return columnName;
}

/**
 * @private
 * @param {String} columnName
 * @return {String}
 *
 * @properties={typeid:24,uuid:"F3155621-FE5E-4CF6-929E-DE3A381EFA23"}
 */
function getFieldNameFromColumn(columnName) {
	if (columnName.indexOf("svy_") === 0) {
		columnName = columnName.substr(4);
	}
	var capitalizedName = columnName.split("_").map(function capitalize(text, elementIndex, traversedArray) {
		return text.charAt(0).toUpperCase() + text.substr(1);
	}).join('');

	return capitalizedName;
}

/**
 * save the in-memory datasource
 * @public
 *
 * @param {String} dataSource
 * @param {Array} items
 *
 * @properties={typeid:24,uuid:"9882E3FC-E59D-48B8-BF2C-E116FF8A3BB6"}
 */
function saveInMemoryDS(dataSource, items) {
	var item = items[0];

	var ds = databaseManager.createEmptyDataSet();
	var pk = dataSource + "_id";

	// TODO how can i make the column an UUID ?
	var columnTypes = [JSColumn.TEXT];
	ds.addColumn(pk);

	/** @type {String} */
	var name;
	for (name in item) {

		// get the column Name
		var columnName = getColumnNameFromField(name);

		ds.addColumn(columnName)

		// try to understand the type
		var value = item[name];
		var columnType = JSColumn.TEXT;

		if (value instanceof Boolean) { // check if is a boolean
			columnType = JSColumn.INTEGER;
		} else if (value instanceof Number) { // check if is a number
			columnType = JSColumn.NUMBER;
		} else if (value instanceof String) { // check if is a date
			var regexDateTime = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T(\d{2}):(\d{2})/
			var regexDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
			if (regexDate.test(value) || regexDateTime.test(value)) {
				columnType = JSColumn.DATETIME;
			}
		}

		columnTypes.push(columnType);
	}

	//
	if (!databaseManager.dataSourceExists("mem" + dataSource)) {
		ds.createDataSource(dataSource, columnTypes, [pk]);
		servoyDeveloper.save("mem:" + dataSource);
	} else {
		throw "datasource already exists, will be possible to update it since version 8.4 of Servoy"
		//		servoyDeveloper.updateInMemDataSource("mem:" + dataSource, ds, columnTypes)
	}

}

/**
 * @public
 * @param {JSRecord} record
 * @param {Boolean} [skipPks] default is true
 *
 * @properties={typeid:24,uuid:"EF327E99-9A40-4DB0-8E41-ECCB4B64E23F"}
 */
function getJSONFromRecord(record, skipPks) {
	var table = databaseManager.getTable(record.getDataSource());
	var columnNames = table.getColumnNames();
	var pkNames = table.getRowIdentifierColumnNames();

	var jsonObject = new Object();
	for (var i = 0; i < columnNames.length; i++) {
		var columnName = columnNames[i];
		if (skipPks !== false && pkNames.indexOf(columnName) != -1) {
			continue;
		}

		//		var capitalizedName = columnName.split("_").map(function capitalize(text, elementIndex, traversedArray) {
		//			return text.charAt(0).toUpperCase() + text.substr(1);
		//		}).join('');
		var capitalizedName = getFieldNameFromColumn(columnName);

		var value = record[columnName];
		//if (value != null && value != undefined && value != "") { //is this necessary?
		var columnType = table.getColumn(columnName).getType();
		var dateFormat = "yyyy-MM-dd";
		switch (columnType) {
		case JSColumn.DATETIME:
			jsonObject[capitalizedName] = utils.dateFormat(value, dateFormat)
			break;
		case JSColumn.INTEGER:
		case JSColumn.NUMBER:
		case JSColumn.TEXT:
			jsonObject[capitalizedName] = value;
			break;
		default:
			jsonObject[capitalizedName] = value;
			break;
		}
		//}
		// TODO handle booleans

		// TODO parsing here
	}
	//remove standard svy key.
	delete jsonObject['SvRowid'];
	return jsonObject;
}

/**
 * @param arr
 *
 * @properties={typeid:24,uuid:"36E17BF4-69C1-4EF2-8234-EDDF39B76960"}
 */
function capitalizePropertyNames(arr) {
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	for (var j = 0; j < arr.length; j++) {
		var obj = arr[j]
		var ar = Object.keys(obj);
		for (var i = 0; i < ar.length; i++) {
			var name = ar[i];
			ar[i] = capitalizeFirstLetter(ar[i].toLocaleLowerCase());
			if (name == ar[i]) continue;
			obj[ar[i]] = obj[name];
			delete obj[name];
		}
	}
	return arr;
}

/**
 * @properties={typeid:24,uuid:"8CC6D3FF-2516-42EB-98AE-E2C1AC149F87"}
 */
function test() {
	var resp = {
		"response": {
			"_retVal": "0",
			"wt_InstanceAttr": {
				"wt_InstanceAttr": [{
					"wono": 2,
					"PackId": "rc0705-1",
					"AttrCode": "color",
					"AttrValue": "blue",
					"Mandatory": true,
					"Validated": false,
					"CheckedIn": true
				}, {
					"wono": 2,
					"PackId": "rc0705-2",
					"AttrCode": "color",
					"AttrValue": "red",
					"Mandatory": true,
					"Validated": false,
					"CheckedIn": true
				}]
			}
		}
	}
	verbose = false;

	populateInMemoryDS(datasources.mem.temp.getDataSource(), resp.response.wt_InstanceAttr.wt_InstanceAttr)

	var f = datasources.mem.temp.getFoundSet();
	f.loadAllRecords();
	for (var i = 1; i <= f.getSize(); i++) {
		var record = f.getRecord(i);
		//foundset record
		application.output(record);
		
		//get JSON result back
		var jsonResult = getJSONFromRecord(record, false);
		application.output(jsonResult);
	}

	f.deleteAllRecords();

}
