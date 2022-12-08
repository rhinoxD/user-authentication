import axios from 'axios';

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

// Signup
export const signup = (userData) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_USER_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('/api/users/signup', userData, config);
    console.log(data);
    dispatch({
      type: SIGNUP_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SIGNUP_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Signin
export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNIN_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users/signin',
      { email, password },
      config
    );
    console.log(data);
    dispatch({ type: SIGNIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: SIGNIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Signout
export const signout = () => async (dispatch) => {
  try {
    await axios.post('/api/users/signout');
    dispatch({ type: SIGNOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: SIGNOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
