import { data } from '../mock/data';

const initialState = {
  product: data,
  total: 0,
  productTotal: 0,
};

export const cartReducers = (state = initialState, action) => {
  if (action.type === 'INCREASE_QUANTITY') {
    console.log('increase');
    const { amount } = product;
    return { ...state, amount: amount + 1 };
  }

  return state;
};
