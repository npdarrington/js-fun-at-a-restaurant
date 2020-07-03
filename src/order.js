function takeOrder(order, deliveryOrders) {
  return (deliveryOrders.length !== 3 ? deliveryOrders.push(order) :
  null)
}

function refundOrder(orderNumber, deliveryOrders) {
  return (deliveryOrders = deliveryOrders.filter(order => order.orderNumber !== orderNumber));
}

function listItems(deliveryOrder) {
  let deliveryOrderItems = '';
  deliveryOrder.forEach((order, i) => {
    deliveryOrder.length - 1 === i ?
      deliveryOrderItems += `${order.item}` : deliveryOrderItems += `${order.item}, `;
  });

  deliveryOrderItems.trim();

  return deliveryOrderItems;
}

function searchOrder(deliveryOrders, orderItem) {
  let orderFound;
  for(const order of deliveryOrders) {
    orderFound = order.item === orderItem ?
      true :
      orderFound || false
  }
  return orderFound;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
