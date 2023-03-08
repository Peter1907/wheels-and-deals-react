import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/login';
const POST_LOGIN = 'wheels_and_deals/login/POST_LOGIN';

const initailState = {
  token: null,
  signed: !!sessionStorage.getItem('token'),
  message: null,
};

const loginReducer = (state = initailState, action) => {
  switch (action.type) {
    case `${POST_LOGIN}/fulfilled`:
      sessionStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        signed: true,
        message: 'Login Successful',
      };
    case `${POST_LOGIN}/rejected`:
      return {
        ...state,
        token: null,
        signed: false,
        message: 'Login Failed',
      };
    default:
      return state;
  }
};

export const postLogin = createAsyncThunk(POST_LOGIN, async (user) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Unable to create user');
  }
  const data = await response.json();
  sessionStorage.setItem('userName', data.user_name);
  return data;
});

export default loginReducer;
