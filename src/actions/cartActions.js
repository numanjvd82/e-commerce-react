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

export const totalProductCost = () => {
  return { type: 'TOTAL_PRODUCT_COST' };
};

export const clearCart = () => {
  return { type: 'CLEAR_ALL_CART' };
};
