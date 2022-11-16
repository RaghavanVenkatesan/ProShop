import { PAYMENT_ACTION_TYPES } from "./payment.types";
import  createAction  from "../../utils/action";

const fetchpayment = (data) => createAction(PAYMENT_ACTION_TYPES.CART_SAVE_PAYMENT_METHOD, data);

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch(fetchpayment(data));
    localStorage.setItem('paymentMethod', JSON.stringify(data));
}