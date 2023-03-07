import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/createUsers';
import loginReducer from './reducers/loginUsers';
import reservationReducer from './reducers/reservation';
import addCarReducer from './reducers/addCar';

const store = configureStore({
  reducer: {
    usersCreate: usersReducer,
    loginUsers: loginReducer,
    reservations: reservationReducer,
    newCar: addCarReducer,
  },
});

export default store;
