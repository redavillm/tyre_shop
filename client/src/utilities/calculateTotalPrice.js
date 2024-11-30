export const totalPrice = (items, products) => {
  return items.reduce((total, item) => {
    const product = products.find((el) => el._id === item.id);
    if (product) {
      total += product.price * item.count;
    }

    return total;
  }, 0);
};
