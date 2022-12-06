import { USER_DETAILS_UPDATE_ACTION_TYPES } from "./user_detail_update.types"
import  createAction  from "../../utils/action";
import axios from 'axios';
import { fetchdetailsuccess } from "../user_details/user_details.action";
import { logout } from "../user/user.action";
import { reset_user } from "../user_details/user_details.action";

export const updateuserstart = () => {
    return createAction(USER_DETAILS_UPDATE_ACTION_TYPES.USER_UPDATE_REQUEST);
}

export const updateusersuccess = () => {
   return createAction(USER_DETAILS_UPDATE_ACTION_TYPES.USER_UPDATE_SUCCESS);
}

export const updateusererror = (error) => {
   return createAction(USER_DETAILS_UPDATE_ACTION_TYPES.USER_UPDATE_FAIL, error);
}

export const user_update_reset = () => createAction(USER_DETAILS_UPDATE_ACTION_TYPES.USER_UPDATE_RESET); 


export const updateUser = (user) => {
    
    return async(dispatch, getState) => {

        dispatch(updateuserstart())

        try{
            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
    
            const { data } = await axios.put(`/api/users/${user._id}`, user, config)

            dispatch(updateusersuccess());

            dispatch(fetchdetailsuccess(data));

            dispatch(reset_user());
        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
    
            if (error_payload === 'Not authorized, token failed') {
               dispatch(logout())
                }

            dispatch(updateusererror(error_payload));
        }
    }
}

export const update_user_reset = () => { 
    return async(dispatch) => {
       try{
            dispatch(user_update_reset())
       }catch(error){
           let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
           dispatch(updateusererror(error_payload));
       }
    }
   }