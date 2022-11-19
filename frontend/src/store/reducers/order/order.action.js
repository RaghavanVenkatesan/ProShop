import { ORDER_ACTION_TYPES } from "./order.types";
import axios from 'axios';
import  createAction  from "../../utils/action";

export const fetchordertart = () => createAction(ORDER_ACTION_TYPES.ORDER_CREATE_REQUEST);

export const fetchordersuccess = (order) => createAction(ORDER_ACTION_TYPES.ORDER_CREATE_SUCCESS, order);

export const fetchordererror = (error) => createAction(ORDER_ACTION_TYPES.ORDER_CREATE_FAIL, error);

export const createOrder = (order) => {
    return async(dispatch, getState) => {
        dispatch(fetchordertart());
        try{

            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            const { data } = await axios.post(`/api/orders`, order ,config);

            dispatch(fetchordersuccess(data));

        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(fetchordererror(error_payload));
        }
    }
}