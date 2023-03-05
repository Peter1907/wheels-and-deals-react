import React from 'react';
import ReservationForm from './ReservationForm';

const NewReservation = () => {
  const currentUser = 'Cindy Dorantes';

  return (
    <div className="text-white flex flex-col items-center justify-center absolute w-full h-full object-cover bg-cover bg-center bg-[url('/src/assets/form_reservation_bg01.png')]">
      <div id="heading" className="p-4 font-bold text-base w-full flex center fixed top-0 left-0 right-0">
        <div className="border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2 mr-4">{currentUser}</div>
        <div className="border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2">LOG OUT</div>
      </div>
      <section className="w-3/4 mt-8">
        <h1 className="text-3xl font-bold tracking-wider text-center">BOOK A WHEELS&DEALS TEST-RIDE</h1>
        <span className="block h-0.5 w-full bg-white m-2.5" />
        <p className="text-center text-base font-semibold tracking-wide">
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
