import { PRODUCT_DELETE_ACTION_TYPES } from "./prdouct_delete.types";

const INITIAL_STATE = {
  success: false,
  Loading: false,
  error: null,
};

export const productDeleteReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
      case PRODUCT_DELETE_ACTION_TYPES.PRODUCT_DELETE_REQUEST:
        return { Loading: true }
      case PRODUCT_DELETE_ACTION_TYPES.PRODUCT_DELETE_SUCCESS:
        return { Loading: false, success: true }
      case PRODUCT_DELETE_ACTION_TYPES.PRODUCT_DELETE_FAIL:
        return { Loading: false, error: payload }
      default:
        return state
    }
  }