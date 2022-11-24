import { USER_LIST_ACTION_TYPES } from "./user_list.types";
import createAction from "../../utils/action";
import axios from 'axios';

export const fetchliststart = () => createAction(USER_LIST_ACTION_TYPES.USER_LIST_REQUEST);

export const fetchlistsuccess = (userinfo) => createAction(USER_LIST_ACTION_TYPES.USER_LIST_SUCCESS, userinfo);

export const fetchlisterror = (error) => createAction(USER_LIST_ACTION_TYPES.USER_LIST_FAIL, error);

export const list_reset = () => createAction(USER_LIST_ACTION_TYPES.USER_LIST_RESET); 

export const listUsers = () => {
    return async(dispatch, getState) => {
        dispatch(fetchliststart());
        try{

            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            const { data } = await axios.get(`/api/users`, config);

            console.log("data: ", data);

            dispatch(fetchlistsuccess(data));

        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(fetchlisterror(error_payload));
        }
    }
}

export const reset_list = () => { 
    return async(dispatch) => {
       try{
            dispatch(list_reset())
       }catch(error){
           let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
           dispatch(fetchlisterror(error_payload));
       }
    }
   }