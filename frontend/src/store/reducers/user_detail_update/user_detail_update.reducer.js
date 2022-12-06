import { USER_DETAILS_UPDATE_ACTION_TYPES } from "./user_detail_update.types";

const INITIAL_STATE = {
    loading: false,
    user: {},
    error: null,
    success: false
}

export const userUpdateReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type){
        case USER_DETAILS_UPDATE_ACTION_TYPES.USER_UPDATE_REQUEST:
            return { ...state, loading: true};
         
        case USER_DETAILS_UPDATE_ACTION_TYPES.USER_UPDATE_SUCCESS:
            return { ...state, loading: false, success: true};
            
        case USER_DETAILS_UPDATE_ACTION_TYPES.USER_UPDATE_FAIL:
            return { ...state, loading: false, error: payload};
         
        case USER_DETAILS_UPDATE_ACTION_TYPES.USER_UPDATE_RESET:
            return { ...state, user: {} }    
        default:
            return state;    
    }
}