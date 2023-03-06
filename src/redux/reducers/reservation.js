import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/reservations';
const DELETE_RESERVATION = 'wheels_and_deals/reservations/DELETE_RESERVATION';
const ADD_RESERVATION = 'wheels_and_deals/reservations/ADD_RESERVATION';
const GET_RESERVATIONS = 'wheels_and_deals/reservations/GET_RESERVATIONS';

const initailState = [
  {
    city: null,
    country: null,
    date: null,
    name: null,
    photo: null,
    price: null,
  },
];

const reservationReducer = (state = initailState, action) => {
  switch (action.type) {
    case `${DELETE_RESERVATION}/fulfilled`:
      return state.filter((reservation) => reservation.id !== action.payload);
    case `${ADD_RESERVATION}/fulfilled`:
      return [...state, action.payload];
    case `${GET_RESERVATIONS}/fulfilled`:
      return action.payload;
    case `${GET_RESERVATIONS}/rejected`:
      return state;
    default:
      return state;
  }
};

export const deleteReservation = createAsyncThunk(DELETE_RESERVATION, async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return id;
});

export const addReservation = createAsyncThunk(ADD_RESERVATION, async (reservation) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
    body: JSON.stringify(reservation),
  });
  return response.json();
});

export const getReservations = createAsyncThunk(GET_RESERVATIONS, async () => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Unable to render reservations');
  }

  return response.json();
});

export default reservationReducer;
