import { PRODUCT_REVIEW } from "./user_review.type";

const INITIAL_STATE = {
    loading: false,
    success: null,
    error: null
}

export const productReviewCreateReducer = (state = INITIAL_STATE, action) => {
    
    const { type, payload } = action;

    switch (type) {
      case PRODUCT_REVIEW.PRODUCT_CREATE_REVIEW_REQUEST:
        return { loading: true }
      case PRODUCT_REVIEW.PRODUCT_CREATE_REVIEW_SUCCESS:
        return { loading: false, success: true }
      case PRODUCT_REVIEW.PRODUCT_CREATE_REVIEW_FAIL:
        return { loading: false, error: payload }
      case PRODUCT_REVIEW.PRODUCT_CREATE_REVIEW_RESET:
        return {}
      default:
        return state
    }
  }