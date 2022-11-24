import { USER_LIST_ACTION_TYPES } from "./user_list.types";

const INITIAL_STATE = {
    loading: false,
    users: [],
    error: null
}

export const userListReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type){
        case USER_LIST_ACTION_TYPES.USER_LIST_REQUEST:
            return { ...state, loading: true};
         
        case USER_LIST_ACTION_TYPES.USER_LIST_SUCCESS:
            return { ...state, loading: false, users: payload};
            
        case USER_LIST_ACTION_TYPES.USER_LIST_FAIL:
            return { ...state, loading: false, error: payload};
         
        case USER_LIST_ACTION_TYPES.USER_LIST_RESET:
            return { ...state, users: [] }    
        
        default:
            return state;    
    }
}