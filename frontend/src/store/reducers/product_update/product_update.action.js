import { PRODUCT_UPDATE_ACTION_TYPES } from "./product_update.types";
import  createAction  from "../../utils/action";
import axios from 'axios';
import { logout } from "../user/user.action";

export const Start = () =>
createAction(PRODUCT_UPDATE_ACTION_TYPES.PRODUCT_UPDATE_REQUEST);

export const Success = (productsarray) => 
createAction(PRODUCT_UPDATE_ACTION_TYPES.PRODUCT_UPDATE_SUCCESS, productsarray);

export const Failure = (error) => 
createAction(PRODUCT_UPDATE_ACTION_TYPES.PRODUCT_UPDATE_FAIL, error);

export const Reset = () => 
createAction(PRODUCT_UPDATE_ACTION_TYPES.PRODUCT_UPDATE_RESET);


export const updateProduct = (product) => {
    return async (dispatch, getState) => {
        dispatch(Start());
        try{
            const {
                userLogin: { userInfo },
              } = getState()
          
              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${userInfo.token}`,
                },
              }
          
              const { data } = await axios.put(
                `/api/products/${product._id}`,
                product,
                config
              )

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

export const productUpdateReset = () => {
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