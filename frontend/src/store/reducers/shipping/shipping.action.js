import { SHIPPING_ACTION_TYPES } from "./shipping.types";
import  createAction  from "../../utils/action";

const fetchaddress = (data) => createAction(SHIPPING_ACTION_TYPES.SHIPPING_ADDRESS_ACTION, data); 

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch(fetchaddress(data));
    localStorage.setItem('shippingAddress', JSON.stringify(data))
  }