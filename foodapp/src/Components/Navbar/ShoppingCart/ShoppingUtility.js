export const getTotal = (data) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  data.cart?.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return { totalPrice, totalQuantity };
};