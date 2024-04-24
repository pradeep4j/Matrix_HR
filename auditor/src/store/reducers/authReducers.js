import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT             
  } from "../actiontypes/authConstants";
  export const userLoginReducer = (state= {}, action) => {
    switch(action.type) {
            case USER_LOGIN_REQUEST: return { loadings:true };
            case USER_LOGIN_SUCCESS: return { loadings:false, userInfo: action.payload };
            case USER_LOGIN_FAIL: return { loadings:false, error: action.payload };
            case USER_LOGOUT: return {};
            default: return state;
    }
}
