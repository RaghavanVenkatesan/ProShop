    import { ORDER_DELIVER_ACTION } from "./order_delivered.types";

    const ORDER_INITIAL_STATE = {
        loading: false,
        success: false,
        error: null,
        deliver: null
    }
    
    export const orderDeliverReducer = (state = ORDER_INITIAL_STATE, action = {}) => {
        const { type, payload} = action;
    
        switch (type) {
          case ORDER_DELIVER_ACTION.ORDER_DELIVER_REQUEST:
            return { ...state, loading: true };
          case ORDER_DELIVER_ACTION.ORDER_DELIVER_SUCCESS:
            return { ...state, loading: false, success: true, deliver: payload };
          case ORDER_DELIVER_ACTION.ORDER_DELIVER_FAIL:
            return { ...state, loading: false, error: payload};
          case ORDER_DELIVER_ACTION.ORDER_DELIVER_RESET:
            return { }   
            default:
            return state;   
        }
    }