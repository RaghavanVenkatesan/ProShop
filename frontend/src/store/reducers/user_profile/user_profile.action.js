import { USER_PROFILE_ACTION_TYPES } from "./user_profile.types";
import createAction from "../../utils/action";
import axios from 'axios';

export const fetchupdatestart = () => createAction(USER_PROFILE_ACTION_TYPES.USER_PROFILE_REQUEST);

export const fetchupdatesuccess = (userinfo) => createAction(USER_PROFILE_ACTION_TYPES.USER_PROFILE_SUCCESS, userinfo);

export const fetchupdateerror = (error) => createAction(USER_PROFILE_ACTION_TYPES.USER_PROFILE_FAIL, error);

export const updateuserasyncstart = (user) => {
    return async(dispatch, getState) => {
        dispatch(fetchupdatestart());
        try{

            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            const { data } = await axios.put(`/api/users/profile`, user ,config);

            dispatch(fetchupdatesuccess(data));

        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(fetchupdateerror(error_payload));
        }
    }
}