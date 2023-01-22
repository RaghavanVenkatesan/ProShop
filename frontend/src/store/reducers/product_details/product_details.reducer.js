import { PRODUCT_Details_ACTION_TYPES } from './product_details.types';

const INITIAL_STATE = {
  product: {
    reviews: []
  },
  isLoading: false,
  error: null,
};

export const productDetailsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_Details_ACTION_TYPES.FETCH_PRODUCT_Details_START:
      return { ...state, isLoading: true };
    case PRODUCT_Details_ACTION_TYPES.FETCH_PRODUCT_Details_SUCCESS:
        return { ...state, isLoading: false, product: payload};
    case PRODUCT_Details_ACTION_TYPES.FETCH_PRODUCT_Details_FAILED:
        return { ...state, isLoading: false, error: payload };      
    default:
      return state;
  }
};