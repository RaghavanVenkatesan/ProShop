import { ORDER_DELIVER_ACTION } from "./order_delivered.types";
import axios from 'axios';
import  createAction  from "../../utils/action";
import { logout } from "../user/user.action";

export const  start = () => createAction(ORDER_DELIVER_ACTION.ORDER_DELIVER_REQUEST);

export const  success = (data) => createAction(ORDER_DELIVER_ACTION.ORDER_DELIVER_SUCCESS, data);

export const  error = (error) => createAction(ORDER_DELIVER_ACTION.ORDER_DELIVER_FAIL, error);

export const reset = () => createAction(ORDER_DELIVER_ACTION.ORDER_DELIVER_RESET); 

export const deliverOrder = (order) => {
    return async(dispatch, getState) => {
        dispatch(start());
        try{

            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            const { data } = await axios.put(`/api/orders/${order._id}/deliver`, {}, config)

            dispatch(success(data));

        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
           
            if (error_payload === 'Not authorized, token failed') {
                dispatch(logout())
              }
           
            dispatch(error(error_payload));
        }
    }
}

export const deliverreset = () => { 
    return async(dispatch) => {
       try{
            dispatch(reset())
       }catch(error){
           let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
           dispatch(error(error_payload));
       }
    }
   }