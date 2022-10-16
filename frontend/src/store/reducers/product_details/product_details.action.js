import { PRODUCT_Details_ACTION_TYPES } from "./product_details.types";
import  createAction  from "../../utils/action";
import axios from 'axios';

export const fectProductDetailsStart = () =>
createAction(PRODUCT_Details_ACTION_TYPES.FETCH_PRODUCT_Details_START);

export const fetchProductDetailsSuccess = (productobject) => 
createAction(PRODUCT_Details_ACTION_TYPES.FETCH_PRODUCT_Details_SUCCESS, productobject);

export const fetchProductDetailsFailure = (error) => 
createAction(PRODUCT_Details_ACTION_TYPES.FETCH_PRODUCT_Details_FAILED, error);

export const fetchProductDetailsStartAsync = (id) => {
    return async (dispatch) => {
        dispatch(fectProductDetailsStart());
        try{
            const { data } = await axios.get(`/api/products/${id}`);
             dispatch(fetchProductDetailsSuccess(data)); 
        }catch(error){
              let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
              dispatch(fetchProductDetailsFailure(error_payload));
        }
    }
}

