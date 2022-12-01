import { USER_DELETE_ACTION_TYPES } from "./user_delete.types";
import createAction from "../../utils/action";
import axios from 'axios';
import { logout } from "../user/user.action";

export const fetchdeletestart = () => createAction(USER_DELETE_ACTION_TYPES.USER_DELETE_REQUEST);

export const fetchdeletesuccess = () => createAction(USER_DELETE_ACTION_TYPES.USER_DELETE_SUCCESS);

export const fetchdeleteerror = (error) => createAction(USER_DELETE_ACTION_TYPES.USER_DELETE_FAIL, error);

export const deleteUser = (id) => {
    return async(dispatch, getState) => {
        dispatch(fetchdeletestart());
        try{

            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            await axios.delete(`/api/users/${id}`, config)

            dispatch(fetchdeletesuccess());

        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message

            if (error_payload === 'Not authorized, token failed') {
                dispatch(logout())
              }

            dispatch(fetchdeleteerror(error_payload));
        }
    }
}