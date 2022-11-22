import { USER_DETAILS_ACTION_TYPES } from "./user_details.types";

const INITIAL_STATE = {
    loading: false,
    user: {},
    error: null
}

export const userDetailsReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type){
        case USER_DETAILS_ACTION_TYPES.USER_DETAILS_REQUEST:
            return { ...state, loading: true};
         
        case USER_DETAILS_ACTION_TYPES.USER_DETAILS_SUCCESS:
            return { ...state, loading: false, user: payload};
            
        case USER_DETAILS_ACTION_TYPES.USER_DETAILS_FAIL:
            return { ...state, loading: false, error: payload};
         
        case USER_DETAILS_ACTION_TYPES.USER_DETAILS_RESET:
            return { ...state, user: {} }    
        default:
            return state;    
    }
}