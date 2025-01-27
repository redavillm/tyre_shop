export const totalPrice = (items, products) => {
  try {
    return items.reduce((total, item) => {
      const product = products.find((el) => el._id === item.id);
      if (product) {
        total += product.price * item.count;
      }

      return total;
    }, 0);
  } catch (error) {
    console.error("Ошибка при расчете стоимости товаров: ", error);
  }
};
