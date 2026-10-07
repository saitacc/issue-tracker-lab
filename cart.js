function checkout(cart) {
  return cart.items.reduce((sum, i) => sum + i.price, 0);
}
function getOrderHistory(userId) { return []; }
