function checkout(cart) {
  if (!cart || !cart.items || cart.items.length === 0) {
    throw new Error('Корзина пуста');
  }
  return cart.items.reduce((sum, i) => sum + i.price, 0);
}
