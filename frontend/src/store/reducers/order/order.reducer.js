import { ORDER_ACTION_TYPES } from "./order.types";

const ORDER_INITIAL_STATE = {
    loading: false,
    success: false,
    error: null,
    order: {}
}

export const orderCreateReducer = (state = ORDER_INITIAL_STATE, action = {}) => {
    const { type, payload} = action;

    switch (type) {
      case ORDER_ACTION_TYPES.ORDER_CREATE_REQUEST:
        return { ...state, loading: true };
      case ORDER_ACTION_TYPES.ORDER_CREATE_SUCCESS:
        return { ...state, loading: false, success: true, order: payload };
      case ORDER_ACTION_TYPES.ORDER_CREATE_FAIL:
        return { ...state, loading: false, error: payload}
      case ORDER_ACTION_TYPES.ORDER_CREATE_RESET:
        return {}  
        default:
        return state;   
    }
}