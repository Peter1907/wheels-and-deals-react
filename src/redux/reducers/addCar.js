import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/cars';
const ADD_CAR = 'wheels_and_deals/cars/ADD_CAR';

const initailState = [
  {
    name: null,
    photo: null,
    price: null,
    description: null,
  },
];

const addCarReducer = (state = initailState, action) => {
  switch (action.type) {
    case `${ADD_CAR}/fulfilled`:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const addCar = createAsyncThunk(ADD_CAR, async (car) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
    body: JSON.stringify(car),
  });
  return response.json();
});

export default addCarReducer;
