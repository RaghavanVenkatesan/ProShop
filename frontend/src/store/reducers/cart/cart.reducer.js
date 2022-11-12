import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
    cartItems: []
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload} = action;

    switch (type) {
      case CART_ACTION_TYPES.ADD_PRODUCT_CART:
        return { ...state, cartItems: payload };
      case CART_ACTION_TYPES.REMOVE_PRODUCT_CART:
        return { ...state, cartItems: payload };
      default:
        return state;   
    }
}