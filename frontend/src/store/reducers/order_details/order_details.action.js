import { ORDER_DETAILS_ACTION_TYPES } from './order_details.types';
import axios from 'axios';
import  createAction  from "../../utils/action";

export const fetchorderdetailstart = () => createAction(ORDER_DETAILS_ACTION_TYPES.ORDER_DETAILS_REQUEST);

export const fetchorderdetailsuccess = (order) => createAction(ORDER_DETAILS_ACTION_TYPES.ORDER_DETAILS_SUCCESS, order);

export const fetchorderdetailerror = (error) => createAction(ORDER_DETAILS_ACTION_TYPES.ORDER_DETAILS_FAIL, error);

export const getOrderDetails = (id) => {
    return async(dispatch, getState) => {
        dispatch(fetchorderdetailstart());
        try{

            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            const { data } = await axios.get(`/api/orders/${id}`, config)

            dispatch(fetchorderdetailsuccess(data));

        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(fetchorderdetailerror(error_payload));
        }
    }
}