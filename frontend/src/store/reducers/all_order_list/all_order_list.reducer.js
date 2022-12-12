import { ORDER_LIST_ACTION } from "./all_order_list.types";

const ORDER_INITIAL_STATE = {
    loading: false,
    error: null,
    orders: []
}

export const orderListReducer = (state = ORDER_INITIAL_STATE, action = {}) => {
    const { type, payload} = action;

    switch (type) {
      case ORDER_LIST_ACTION.ORDER_LIST_REQUEST:
        return { ...state, loading: true };
      case ORDER_LIST_ACTION.ORDER_LIST_SUCCESS:
        return { ...state, loading: false, orders: payload };
      case ORDER_LIST_ACTION.ORDER_LIST_FAIL:
        return { ...state, loading: false, error: payload};
        default:
        return state;   
    }
}