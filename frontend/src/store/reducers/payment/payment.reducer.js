import { PAYMENT_ACTION_TYPES } from "./payment.types";

const INITIAL_STATE = {
    paymentMethod : null
};

export const PaymentReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PAYMENT_ACTION_TYPES.CART_SAVE_PAYMENT_METHOD:
      return { ...state,  paymentMethod: payload };      
    default:
      return state;
  }
};