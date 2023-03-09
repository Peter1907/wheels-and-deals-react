import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://wheels-and-deals.onrender.com/api/users';
const POST_USER = 'wheels_and_deals/users/POST_USER';

const initialState = {
  message: null,
  created: false,
};

const usersReducer = (state = initialState, action) => {
  let object;
  switch (action.type) {
    case `${POST_USER}/fulfilled`:
      object = `${Object.keys(action.payload)[0]} ${Object.values(action.payload.email)[0]}`;
      return {
        ...state,
        message: object.includes('id') ? 'Your account has been created' : object,
        created: true,
      };
    case `${POST_USER}/rejected`:
      return {
        ...state,
        message: "Couldn't create your account",
        created: false,
      };
    default:
      return state;
  }
};

export const postUser = createAsyncThunk(POST_USER, async (user) => {
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

  return response.json();
});

export default usersReducer;
