export class SalesOrderItem {
	constructor({ orderId, productId, quantity, unitPrice }) {
		this._orderId = orderId;
		this._productId = productId;
		this._quantity = quantity;
		this._unitProice = unitPrice;
	}

	calculateItemPrice() {
		return this._unitPrice * this._quantity;
	}
}
