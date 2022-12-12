import { PRODUCT_DELETE_ACTION_TYPES } from "./prdouct_delete.types";
import  createAction  from "../../utils/action";
import axios from 'axios';
import { logout } from "../user/user.action";

export const Start = () =>
createAction(PRODUCT_DELETE_ACTION_TYPES.PRODUCT_DELETE_REQUEST);

export const Success = (productsarray) => 
createAction(PRODUCT_DELETE_ACTION_TYPES.PRODUCT_DELETE_SUCCESS, productsarray);

export const Failure = (error) => 
createAction(PRODUCT_DELETE_ACTION_TYPES.PRODUCT_DELETE_FAIL, error);

export const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        dispatch(Start());
        try{
            const {
                userLogin: { userInfo },
              } = getState()
          
              const config = {
                headers: {
                  Authorization: `Bearer ${userInfo.token}`,
                },
              }

             await axios.delete(`/api/products/${id}`, config)

             dispatch(Success()); 
        }catch(error){
              let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message

              if (error_payload === 'Not authorized, token failed') {
                dispatch(logout())
              }

              dispatch(Failure(error_payload));
        }
    }
}