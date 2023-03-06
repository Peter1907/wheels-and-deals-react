import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MobileNavigation from '../MobileNavigation';
import Navigation from '../Navigation';

import { getReservations } from '../../redux/reducers/reservation';
import Car from './Car';

const ReservedCars = () => {
  const states = useSelector((state) => state);
  const data = states.reservations;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  if (states.loginUsers.signed) {
    return (
      <div className="reserved-cars">
        <Navigation />
        <MobileNavigation />
        <div className="main-section flex flex-col relative justify-center lg:ml-[250px]">
          <h1 className="text-3xl text-gray-800 tracking-wider font-bold text-center mt-6 md:text-5xl md:tracking-widest md:mt-12">RESERVED MODELS</h1>
          <h4 className="text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4">Here are the models you have reserved</h4>
          <hr className="w-24 self-center m-4 border-t-black md:w-52 md:m-8" />
          <h4 className="text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4">No reservations yet</h4>
          <div className="max-w-min w-[100%] self-center">
            <div className="cars-container m-2 flex flex-col gap-4 md:mt-8">
              {data.map((car) => (
                <Car data={car} key={data.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reserved-cars">
      <Navigation />
      <MobileNavigation />
      <div className="main-section flex flex-col relative justify-center">
        <h1 className="text-3xl text-gray-800 tracking-wider font-bold text-center mt-6 md:text-5xl md:tracking-widest md:mt-12">RESERVED MODELS</h1>
        <h4 className="text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4">Here are the models you have reserved</h4>
        <hr className="w-24 self-center m-4 border-t-black md:w-52 md:m-8" />
        <h4 className="text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4">You are not logged</h4>
      </div>
    </div>
  );
};

export default ReservedCars;
