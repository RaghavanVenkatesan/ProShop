import { SHIPPING_ACTION_TYPES } from './shipping.types';

const INITIAL_STATE = {
   shippingAddress : {}
};

export const ShippingReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHIPPING_ACTION_TYPES.SHIPPING_ADDRESS_ACTION:
      return { ...state,  shippingAddress: payload };      
    default:
      return state;
  }
};