import { PRODUCT_UPDATE_ACTION_TYPES } from "./product_update.types";

const INITIAL_STATE = {
  product: {},
  Loading: false,
  success: false,
  error: null,
};

export const productUpdateReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_UPDATE_ACTION_TYPES.PRODUCT_UPDATE_REQUEST:
      return { ...state, Loading: true };
    case PRODUCT_UPDATE_ACTION_TYPES.PRODUCT_UPDATE_SUCCESS:
        return { ...state, Loading: false, success: true, products: payload};
    case PRODUCT_UPDATE_ACTION_TYPES.PRODUCT_UPDATE_FAIL:
        return { ...state, Loading: false, error: payload };
    case PRODUCT_UPDATE_ACTION_TYPES.PRODUCT_UPDATE_RESET:
        return{ product: {} }          
    default:
      return state;
  }
};