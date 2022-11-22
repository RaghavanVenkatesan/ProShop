import { ORDER_LIST_MY_ACTION_TYPES } from "./order_list.types";

const ORDER_INITIAL_STATE = {
    loading: false,
    error: null,
    orders: []
}

export const orderListMyReducer = (state = ORDER_INITIAL_STATE, action = {}) => {
    const { type, payload} = action;

    switch (type) {
      case ORDER_LIST_MY_ACTION_TYPES.ORDER_LIST_MY_REQUEST:
        return { ...state, loading: true };
      case ORDER_LIST_MY_ACTION_TYPES.ORDER_LIST_MY_SUCCESS:
        return { ...state, loading: false, orders: payload };
      case ORDER_LIST_MY_ACTION_TYPES.ORDER_LIST_MY_FAIL:
        return { ...state, loading: false, error: payload};
      case ORDER_LIST_MY_ACTION_TYPES.ORDER_LIST_MY_RESET:
        return {...state, orders: [] }   
        default:
        return state;   
    }
}