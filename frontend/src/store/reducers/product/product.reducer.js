import { PRODUCT_ACTION_TYPES } from './product.type';

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
};

export const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START:
      return { ...state, isLoading: true };
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS:
        return { ...state, isLoading: false, products: payload};
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED:
        return { ...state, isLoading: false, error: payload };      
    default:
      return state;
  }
};