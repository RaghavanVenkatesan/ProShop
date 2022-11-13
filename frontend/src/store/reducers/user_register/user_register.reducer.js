import { USER_REGISTER_ACTION_TYPES } from "./user_register.types";

const INITIAL_STATE = {
    loading: false,
    userInfo: null,
    error: null
}

export const userRegisterLogin = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type){
        case USER_REGISTER_ACTION_TYPES.USER_REGISTER_REQUEST:
             return {...state, loading: true};

        case USER_REGISTER_ACTION_TYPES.USER_REGISTER_SUCCESS:
             return {...state, loading: false, userInfo: payload};

        case USER_REGISTER_ACTION_TYPES.USER_REGISTER_FAIL:
             return {...state, loading: false, error: payload};

         default:
             return state;              
    }
} 