export const increaseQuantity = (id) => {
  return { type: 'INCREASE_QUANTITY', id };
};

export const decreaseQuantity = (id) => {
  return { type: 'DECREASE_QUANTITY', id };
};
