/**
 * Returns the calculated total of the order all items + freight
 * @properties={type:8,typeid:36,uuid:"77C37B33-DD28-4C5B-BF29-37AF434FC8A0"}
 */
function order_total()
{
	var total = 0;
	for (var i = 1; i <= orders_to_order_details.getSize(); i++) {
		var record = orders_to_order_details.getRecord(i);
		total += record.subtotal;
	}
	return total + freight;
}
