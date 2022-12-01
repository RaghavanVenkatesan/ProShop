import { USER_DELETE_ACTION_TYPES } from "./user_delete.types";

const INITIAL_STATE = {
    loading: false,
    success: false,
    error: ""
}

export const userDeleteReducer = (state= INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type){
        case USER_DELETE_ACTION_TYPES.USER_DELETE_REQUEST:
        return {...state, loading: true}

        case USER_DELETE_ACTION_TYPES.USER_DELETE_SUCCESS:
            return {...state, loading: false, success: true}

        case USER_DELETE_ACTION_TYPES.USER_DELETE_FAIL:
            return {...state, loading: false, error: payload}
            
        default:
            return state;    
    }    
}