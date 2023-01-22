import { PRODUCT_TOP_ACTIONS } from "./top_product.types";
import createAction from "../../utils/action";
import axios from 'axios';

export const topstart = () => createAction(PRODUCT_TOP_ACTIONS.PRODUCT_TOP_REQUEST);

export const topsuccess = (data) => createAction(PRODUCT_TOP_ACTIONS.PRODUCT_TOP_SUCCESS, data);

export const toperror = (error) => createAction(PRODUCT_TOP_ACTIONS.PRODUCT_TOP_FAIL, error);

export const listTopProducts = () => {
    return async (dispatch) => {
        dispatch(topstart());
        try{
            const { data } = await axios.get(`/api/products/top`);
            
             dispatch(topsuccess(data)); 
        }catch(error){
              let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
              dispatch(toperror(error_payload));
        }
    }
}