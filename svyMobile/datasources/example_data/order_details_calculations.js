/**
 * @properties={type:8,typeid:36,uuid:"E59739AC-C578-429C-8E3D-0AED01DB9923"}
 */
function subtotal()
{
	var amt = quantity * unitprice * (1-discount);
	return parseFloat(amt.toFixed(2));
}
