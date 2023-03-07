import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/createUsers';
import loginReducer from './reducers/loginUsers';
import reservationReducer from './reducers/reservation';
import { carsReducer } from './reducers/cars';

const store = configureStore({
  reducer: {
    usersCreate: usersReducer,
    loginUsers: loginReducer,
    reservations: reservationReducer,
    cars: carsReducer,
  },
});

export default store;
