import { USER_DETAILS_ACTION_TYPES } from "./user_details.types";
import createAction from "../../utils/action";
import axios from 'axios';

export const fetchdetailstart = () => createAction(USER_DETAILS_ACTION_TYPES.USER_DETAILS_REQUEST);

export const fetchdetailsuccess = (userinfo) => createAction(USER_DETAILS_ACTION_TYPES.USER_DETAILS_SUCCESS, userinfo);

export const fetchdetailerror = (error) => createAction(USER_DETAILS_ACTION_TYPES.USER_DETAILS_FAIL, error);

export const user_reset = () => createAction(USER_DETAILS_ACTION_TYPES.USER_DETAILS_RESET); 

export const fetchuserasyncstart = (id) => {
    return async(dispatch, getState) => {
        dispatch(fetchdetailstart());
        try{

            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            const { data } = await axios.get(`/api/users/${id}`, config);

            dispatch(fetchdetailsuccess(data));

        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(fetchdetailerror(error_payload));
        }
    }
}

export const reset_user = () => { 
    return async(dispatch) => {
       try{
            dispatch(user_reset())
       }catch(error){
           let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
           dispatch(fetchdetailerror(error_payload));
       }
    }
   }