import { PRODUCT_TOP_ACTIONS } from "./top_product.types";

const INITIAL_STATE = {
    loading: false,
    products: [],
    error: null
}

export const productTopRatedReducer = (state = INITIAL_STATE, action) => {
    
    const { type, payload } = action;

    switch (type) {
      case PRODUCT_TOP_ACTIONS.PRODUCT_TOP_REQUEST:
        return { loading: true }
      case PRODUCT_TOP_ACTIONS.PRODUCT_TOP_SUCCESS:
        return { loading: false, products: payload }
      case PRODUCT_TOP_ACTIONS.PRODUCT_TOP_FAIL:
        return { loading: false, error: payload }
      default:
        return state
    }
  }