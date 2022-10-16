import { PRODUCT_ACTION_TYPES } from "./product.type";
import  createAction  from "../../utils/action";
import axios from 'axios';

export const fectProductsStart = () =>
createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START);

export const fetchProductsSuccess = (productsarray) => 
createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS, productsarray);

export const fetchProductsFailure = (error) => 
createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED, error);

export const fetchProductsStartAsync = () => {
    return async (dispatch) => {
        dispatch(fectProductsStart());
        try{
             const { data } = await axios.get('/api/products');
             dispatch(fetchProductsSuccess(data)); 
        }catch(error){
              let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
              dispatch(fetchProductsFailure(error_payload));
        }
    }
}

