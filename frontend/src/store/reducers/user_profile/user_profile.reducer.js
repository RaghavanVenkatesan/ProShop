import { USER_PROFILE_ACTION_TYPES } from "./user_profile.types";

const INITIAL_STATE = {
    loading: false,
    userInfo: null,
    success: false,
    error: ""
}

export const userUpdateProfileReducer = (state= INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type){
        case USER_PROFILE_ACTION_TYPES.USER_PROFILE_REQUEST:
        return {...state, loading: true}

        case USER_PROFILE_ACTION_TYPES.USER_PROFILE_SUCCESS:
            return {...state, loading: false, success: true, userInfo: payload}

        case USER_PROFILE_ACTION_TYPES.USER_PROFILE_FAIL:
            return {...state, loading: false, error: payload}
            
        default:
            return state;    
    }    
}