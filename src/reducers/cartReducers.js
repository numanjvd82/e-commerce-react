import { data } from '../mock/data';

const initialState = {
  product: data,
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

  if (action.type === 'SINGLE_PRODUCT_TOTAL') {
    const tempCart = state.product.map((item) => {
      if (item.id === action.id) {
        return { ...item, total: item.price * item.amount };
      }
      return item;
    });

    return { ...state, product: tempCart };
  }

  if (action.type === 'DELETE_PRODUCT') {
    const tempCart = state.product.filter((item) => {
      return item.id !== action.id;
    });

    return { ...state, product: tempCart };
  }

  if (action.type === 'TOTAL_PRODUCT_COST') {
    const tempCart = state.product.reduce((cartVal, item) => {
      return cartVal + item.total;
    }, 0);

    return { ...state, productTotal: tempCart };
  }

  return state;
};
