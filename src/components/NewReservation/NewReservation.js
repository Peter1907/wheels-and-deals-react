import React from 'react';
import { NavLink } from 'react-router-dom';
import ReservationForm from './ReservationForm';

const NewReservation = () => {
  const currentUser = sessionStorage.getItem('userName');

  return (
    <div className="mb-2 text-white flex flex-col items-center justify-center absolute w-full bg-cover bg-center bg-[url('/src/assets/form_reservation_bg01.png')] object-cover h-full">
      <div id="heading" className="fixed p-4 font-bold text-base w-full flex items-center justify-between top-0 left-0 right-0">
        <div className="border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2 text-center">{currentUser}</div>
        <div className="border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2 text-center">LOG OUT</div>
      </div>
      <div className="w-full block flex justify-center">
        <NavLink to="/" className="items-center self-center ">
          <img className="w-16 mt-4 rounded-full ring-2 ring-emerald-500 focus:ring-2 sm:w-20" src="./logo_green.svg" alt="logo" />
        </NavLink>
      </div>

      <section className="w-3/4 mt-8">
        <h1 className="text-3xl font-bold text-center lg:tracking-wider">BOOK A WHEELS&DEALS TEST-RIDE</h1>
        <span className="block h-0.5 w-full bg-white m-2.5" />
        <p className="font-ibm text-center text-base tracking-wide">
          We have showrooms all over the globe which some include test-riding facilities.
          <br />
          If you wish to find out if a test is available in your area, please fill out this form.
        </p>
        <ReservationForm />
      </section>
    </div>
  );
};

export default NewReservation;
