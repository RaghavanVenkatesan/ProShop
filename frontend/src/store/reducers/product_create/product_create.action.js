import { PRODUCT_CREATE_ACTION_TYPES } from "./product_create.types";
import  createAction  from "../../utils/action";
import axios from 'axios';
import { logout } from "../user/user.action";

export const Start = () =>
createAction(PRODUCT_CREATE_ACTION_TYPES.PRODUCT_CREATE_REQUEST);

export const Success = (productsarray) => 
createAction(PRODUCT_CREATE_ACTION_TYPES.PRODUCT_CREATE_SUCCESS, productsarray);

export const Failure = (error) => 
createAction(PRODUCT_CREATE_ACTION_TYPES.PRODUCT_CREATE_FAIL, error);

export const Reset = () => 
createAction(PRODUCT_CREATE_ACTION_TYPES.PRODUCT_CREATE_RESET);


export const createProduct = () => {
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

             const { data } = await axios.post(`/api/products`, {}, config);

             dispatch(Success(data)); 
        }catch(error){
              let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
             
              if (error_payload === 'Not authorized, token failed') {
                dispatch(logout())
              }

              dispatch(Failure(error_payload));
        }
    }
}

export const productReset = () => {
    return async (dispatch) => {
   try{
    dispatch(Reset());

   } catch(error) {
    let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
             
    if (error_payload === 'Not authorized, token failed') {
      dispatch(logout())
    }

    dispatch(Failure(error_payload));
   }
    }
}