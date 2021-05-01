import { data } from '../mock/data';

const initialState = {
  data,
};

export const cartReducers = (state = initialState, action) => {
  if (action.type === 'PRINT_SOMETHING') {
    console.log('print something');
  }

  return state;
};
