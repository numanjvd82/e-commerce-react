import { data } from '../mock/data';

const initialState = {
  product: data,
  total: 0,
  productTotal: 0,
};

export const cartReducers = (state = initialState, action) => {
  if (action.type === 'INCREASE_QUANTITY') {
    const tempCart = state.product.map((item) => {
      if (item.id === action.id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    return { ...state, product: tempCart };
  }

  if (action.type === 'DECREASE_QUANTITY') {
    const tempCart = state.product.map((item) => {
      if (item.id === action.id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });

    return { ...state, product: tempCart };
  }

  return state;
};
