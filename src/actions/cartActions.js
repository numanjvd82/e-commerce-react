export const increaseQuantity = (id) => {
  return { type: 'INCREASE_QUANTITY', id };
};

export const decreaseQuantity = (id) => {
  return { type: 'DECREASE_QUANTITY', id };
};

export const productTotal = (id) => {
  return { type: 'SINGLE_PRODUCT_TOTAL', id };
};

export const deleteProduct = (id) => {
  return { type: 'DELETE_PRODUCT', id };
};
