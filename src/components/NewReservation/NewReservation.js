import React from 'react';
import { NavLink } from 'react-router-dom';
import ReservationForm from './ReservationForm';

const NewReservation = () => {
  const currentUser = sessionStorage.getItem('userName');

  const handleLogout = () => {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="mb-2 text-white flex flex-col items-center justify-center absolute w-full bg-cover bg-center bg-[url('/src/assets/form_reservation_bg01.png')] object-cover h-full">
      <div id="heading" className="fixed px-4 py-2 font-bold text-base w-full flex items-center justify-between top-0 left-0 right-0">
        <div className="border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2 text-center">{currentUser}</div>
        <button
          className="border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2 text-center"
          type="button"
          onClick={handleLogout}
        >
          LOG OUT
        </button>
      </div>
      <div className="w-full block flex justify-center">
        <NavLink to="/" className="items-center self-center ">
          <img className="w-16 mt-4 rounded-full ring-2 ring-emerald-500 focus:ring-2 sm:w-20" src="./logo_green.svg" alt="logo" />
        </NavLink>
      </div>

      <section className="w-[95%] mt-8 lg:w-3/4">
        <h1 className="text-2xl w-[100%] font-bold text-center lg:tracking-wider lg:text-4xl">BOOK A WHEELS&DEALS TEST-RIDE</h1>
        <span className="block h-0.5 w-full bg-white m-2 lg:m-6" />
        <p className="font-ibm pt-2 text-center text-sm tracking-wide lg:text-base">
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
