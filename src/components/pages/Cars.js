import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getCars } from '../../redux/reducers/cars';
import Car from '../Car';
import MobileNavigation from '../MobileNavigation';
import Navigation from '../Navigation';

const Cars = () => {
  const crossIcon = <FontAwesomeIcon icon={faXmark} />;
  const data = useSelector((store) => store.cars.items);
  const message = useSelector((store) => store.cars.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const removeMessage = () => {
    const messageContainer = document.querySelector('.message-container');
    messageContainer.classList.add('hidden');
  };

  const width = window.innerWidth;
  return (
    <div className="cars-page pt-8">
      <MobileNavigation />
      <Navigation />
      <div className="lg:ml-[250px] main-section flex flex-col justify-center">
        <div className="message-container hidden bg-green text-white text-center py-2 px-4 rounded-md absolute top-2 right-2">
          <span className="message font-semibold text-sm lg:text-base">{message}</span>
          <button
            type="button"
            onClick={() => removeMessage()}
            className="ml-4"
          >
            {crossIcon}
          </button>
        </div>
        <h1 className="text-3xl text-gray-800 tracking-wider font-bold text-center mt-6 md:text-5xl md:tracking-widest md:mt-12">LATEST MODELS</h1>
        <h4 className="text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4">We have the best cars in the world</h4>
        <hr className="w-24 self-center m-4 border-t-black md:w-52 md:m-8" />
        <div className="max-w-min w-[100%] self-center">
          <div className={`cars-container m-2 px-4 py-4 flex gap-8 w-[${width}px] overflow-scroll md:mt-8`}>
            {data.map((car) => (
              <Car data={car} key={car.id} />
            ))}
          </div>
          <div className="navigation text-white text-4xl">
            <button
              type="button"
              className="absolute left-0 top-1/2 mt-8 bg-green rounded-r-2xl py-1 px-4 z-20"
              onClick={() => { document.querySelector('.cars-container').scrollLeft -= 330; }}
            >
              &#8656;
            </button>
            <button
              type="button"
              className="absolute right-0 top-1/2 mt-8 bg-green rounded-l-2xl py-1 px-4 z-20"
              onClick={() => { document.querySelector('.cars-container').scrollLeft += 330; }}
            >
              &#8658;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
