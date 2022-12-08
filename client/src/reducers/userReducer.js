import {
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAIL,
  CLEAR_ERRORS,
} from '../constants/userConstants';

export const authReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_USER_REQUEST:
    case SIGNIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case SIGNUP_USER_SUCCESS:
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload,
      };
    case SIGNOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case SIGNUP_USER_FAIL:
    case SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: payload,
      };
    case SIGNOUT_FAIL:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default: {
      return state;
    }
  }
};
