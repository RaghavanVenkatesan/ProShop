import { USER_REGISTER_ACTION_TYPES } from "./user_register.types";
import createAction from "../../utils/action";
import axios from 'axios';
import { fetchusersuccess } from "../user/user.action";

export const fetchregisterstart = () => createAction(USER_REGISTER_ACTION_TYPES.USER_REGISTER_REQUEST);

export const fetchregistersuccess = (userinfo) => createAction(USER_REGISTER_ACTION_TYPES.USER_REGISTER_SUCCESS, userinfo);

export const fetchregistererror = (error) => createAction(USER_REGISTER_ACTION_TYPES.USER_REGISTER_FAIL, error);

export const registerasyncstart = (name, email, password) => {
    return async(dispatch) => {
        dispatch(fetchregisterstart());
        try{

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const { data } = await axios.post('/api/users', {name, email, password}, config)
            dispatch(fetchregistersuccess(data));

            // in the header we are changing the userinfo using login
            // so we are using the user login method here

            dispatch(fetchusersuccess(data));

            localStorage.setItem('userInfo', JSON.stringify(data));
        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(fetchregistererror(error_payload));    
        }
    }
}