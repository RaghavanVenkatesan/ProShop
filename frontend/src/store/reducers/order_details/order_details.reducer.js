import { ORDER_DETAILS_ACTION_TYPES } from "./order_details.types";

const ORDER_INITIAL_STATE = {
    loading: true,
    orderItems: [],
    shippingAddress: {},
    order: {},
    error: null
}

export const orderDetailsReducer = (state = ORDER_INITIAL_STATE, action = {}) => {
    const { type, payload} = action;

    switch (type) {
      case ORDER_DETAILS_ACTION_TYPES.ORDER_DETAILS_REQUEST:
        return { ...state, loading: true };
      case ORDER_DETAILS_ACTION_TYPES.ORDER_DETAILS_SUCCESS:
        return { ...state, loading: false, order: payload };
      case ORDER_DETAILS_ACTION_TYPES.ORDER_DETAILS_FAIL:
        return { ...state, loading: false, error: payload} 
        default:
        return state;   
    }
}