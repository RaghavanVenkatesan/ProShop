import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    loading: false,
    userInfo: null,
    error: ""
}

export const userLoginReducer = (state= INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type){
        case USER_ACTION_TYPES.USER_LOGIN_REQUEST:
        return {...state, loading: true}

        case USER_ACTION_TYPES.USER_LOGIN_SUCCESS:
            return {...state, loading: false, userInfo: payload}

        case USER_ACTION_TYPES.USER_LOGIN_FAIL:
            return {...state, loading: false, error: payload}

        case USER_ACTION_TYPES.USER_LOGOUT:
            return {...state, loading: false, userInfo: null}
            
        default:
            return state;    
    }    
}