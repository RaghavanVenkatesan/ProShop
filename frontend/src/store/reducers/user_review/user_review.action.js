import { PRODUCT_REVIEW } from "./user_review.type";
import createAction from "../../utils/action";
import axios from 'axios';

export const reviewstart = () => createAction(PRODUCT_REVIEW.PRODUCT_CREATE_REVIEW_REQUEST);

export const reviewsuccess = () => createAction(PRODUCT_REVIEW.PRODUCT_CREATE_REVIEW_SUCCESS);

export const reviewerror = (error) => createAction(PRODUCT_REVIEW.PRODUCT_CREATE_REVIEW_FAIL, error);

export const resetreview = () => createAction(PRODUCT_REVIEW.PRODUCT_CREATE_REVIEW_RESET);

export const createProductReview = (productId, review) => {
    return async(dispatch, getState) => {
        dispatch(reviewstart());
        try{

            const { userLogin: { userInfo } } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            await axios.post(`/api/products/${productId}/reviews`, review, config)


            dispatch(reviewsuccess());

        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(reviewerror(error_payload));
        }
    }
}

export const review_reset = () => {
    return async(dispatch) => {
         dispatch(resetreview())
    }
}