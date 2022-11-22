import { ORDER_LIST_MY_ACTION_TYPES } from "./order_list.types";
import axios from 'axios';
import  createAction  from "../../utils/action";

export const fetchmyordertart = () => createAction(ORDER_LIST_MY_ACTION_TYPES.ORDER_LIST_MY_REQUEST);

export const fetchmyordersuccess = (order) => createAction(ORDER_LIST_MY_ACTION_TYPES.ORDER_LIST_MY_SUCCESS, order);

export const fetchmyordererror = (error) => createAction(ORDER_LIST_MY_ACTION_TYPES.ORDER_LIST_MY_FAIL, error);

export const my_order_reset = () => createAction(ORDER_LIST_MY_ACTION_TYPES.ORDER_LIST_MY_RESET); 

export const listMyOrders = () => {
    return async(dispatch, getState) => {
        dispatch(fetchmyordertart());
        try{

            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            const { data } = await axios.get(`/api/orders/myorders` ,config);

            dispatch(fetchmyordersuccess(data));

        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(fetchmyordererror(error_payload));
        }
    }
}

export const reset_my_order = () => { 
    return async(dispatch) => {
       try{
            dispatch(my_order_reset())
       }catch(error){
           let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
           dispatch(fetchmyordererror(error_payload));
       }
    }
   }