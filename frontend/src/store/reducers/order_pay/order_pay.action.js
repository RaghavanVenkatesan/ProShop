import { ORDER_PAY_ACTION_TYPES } from './order_pay.types';
import axios from 'axios';
import  createAction  from "../../utils/action";

export const fetchorderpaystart = () => createAction(ORDER_PAY_ACTION_TYPES.ORDER_PAY_REQUEST);

export const fetchorderpaysuccess = (order) => createAction(ORDER_PAY_ACTION_TYPES.ORDER_PAY_SUCCESS, order);

export const fetchorderpayerror = (error) => createAction(ORDER_PAY_ACTION_TYPES.ORDER_PAY_FAIL, error);

export const order_reset = () => createAction(ORDER_PAY_ACTION_TYPES.ORDER_PAY_RESET); 

export const payOrder = (orderId, paymentResult) => {
    return async(dispatch, getState) => {
        dispatch(fetchorderpaystart());
        try{

            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            const { data } = await axios.put(
                `/api/orders/${orderId}/pay`,
                paymentResult,
                config
              )
                

            dispatch(fetchorderpaysuccess(data));

        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(fetchorderpayerror(error_payload));
        }
    }
}

export const reset_order = () => { 
 return async(dispatch) => {
    try{
         dispatch(order_reset())
    }catch(error){
        let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch(fetchorderpayerror(error_payload));
    }
 }
}