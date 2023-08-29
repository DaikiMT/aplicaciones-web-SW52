import { SalesOrder } from './sales/domain/model/sales-order.js';

const order = new SalesOrder({ customer: 1 });

order.addItem({ productID: 1, quantity: 2, unitPrice: 100 });
order.addItem({ productID: 2, quantity: 1, unitPrice: 50 });

console.log('Sales Order Total Price is ${order.calculateTotalPrice()}');
