import { PRODUCT_CREATE_ACTION_TYPES } from "./product_create.types";

const INITIAL_STATE = {
  product: [],
  Loading: false,
  success: false,
  error: null,
};

export const productCreateReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_CREATE_ACTION_TYPES.PRODUCT_CREATE_REQUEST:
      return { ...state, Loading: true };
    case PRODUCT_CREATE_ACTION_TYPES.PRODUCT_CREATE_SUCCESS:
        return { ...state, Loading: false, success: true, product: payload};
    case PRODUCT_CREATE_ACTION_TYPES.PRODUCT_CREATE_FAIL:
        return { ...state, Loading: false, error: payload };
    case PRODUCT_CREATE_ACTION_TYPES.PRODUCT_CREATE_RESET:
         return {}          
    default:
      return state;
  }
};