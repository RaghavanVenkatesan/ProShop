import { USER_ACTION_TYPES } from "./user.types";
import  createAction  from "../../utils/action";
import axios from 'axios';

export const fetchuserstart = () => {
    return createAction(USER_ACTION_TYPES.USER_LOGIN_REQUEST);
}

export const fetchusersuccess = (userinfo) => {
   return createAction(USER_ACTION_TYPES.USER_LOGIN_SUCCESS, userinfo);
}

export const fetchusererror = (error) => {
   return createAction(USER_ACTION_TYPES.USER_LOGIN_FAIL, error);
}

export const fetchlogout = () => {
    return createAction(USER_ACTION_TYPES.USER_LOGOUT);
}

export const loginasyncstart = (email, password) => {
    
    return async(dispatch) => {
        dispatch(fetchuserstart());
        try{

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const { data } = await axios.post('/api/users/login', {email, password}, config)
            dispatch(fetchusersuccess(data));

            localStorage.setItem('userInfo', JSON.stringify(data));
        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(fetchusererror(error_payload));  
        }
    }
}

export const logout = () => {
    return async(dispatch) => {
        localStorage.removeItem('userInfo');
        dispatch(fetchlogout());
    }
}