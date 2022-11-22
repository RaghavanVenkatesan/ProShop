import { ORDER_PAY_ACTION_TYPES } from "./order_pay.types";

const ORDER_INITIAL_STATE = {
    loading: false,
    success: false,
    error: null,
}

export const orderPayReducer = (state = ORDER_INITIAL_STATE, action = {}) => {
    const { type, payload} = action;

    switch (type) {
      case ORDER_PAY_ACTION_TYPES.ORDER_PAY_REQUEST:
        return { ...state, loading: true };
      case ORDER_PAY_ACTION_TYPES.ORDER_PAY_SUCCESS:
        return { ...state, loading: false, success: true };
      case ORDER_PAY_ACTION_TYPES.ORDER_PAY_FAIL:
        return { ...state, loading: false, error: payload};
      case ORDER_PAY_ACTION_TYPES.ORDER_PAY_RESET:
        return {...state, loading: false, success: false, error: null};  
        default:
        return state;   
    }
}