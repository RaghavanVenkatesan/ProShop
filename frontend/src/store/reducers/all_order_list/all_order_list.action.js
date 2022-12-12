import { ORDER_LIST_ACTION } from "./all_order_list.types";
import axios from 'axios';
import  createAction  from "../../utils/action";

export const  start = () => createAction(ORDER_LIST_ACTION.ORDER_LIST_REQUEST);

export const  success = (data) => createAction(ORDER_LIST_ACTION.ORDER_LIST_SUCCESS, data);

export const  error = (error) => createAction(ORDER_LIST_ACTION.ORDER_LIST_FAIL, error);

export const listOrders = () => {
    return async(dispatch, getState) => {
        dispatch(start());
        try{

            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            const { data } = await axios.get(`/api/orders`, config)

            dispatch(success(data));

        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
           
            dispatch(error(error_payload));
        }
    }
}