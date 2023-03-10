import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCarInfo } from '../../redux/reducers/cars';
import MobileNavigation from '../MobileNavigation';
import Navigation from '../Navigation';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector((store) => store.cars.details) || {};

  useEffect(() => {
    dispatch(getCarInfo(id));
  }, [dispatch, id]);

  const handleReserve = () => {
    sessionStorage.setItem('id', id);
  };

  const {
    name,
    description,
    photo,
    price,
    reservationFee,
  } = car;

  return (
    <div className="details-page text-center h-screen lg:overflow-hidden">
      <Navigation />
      <MobileNavigation />
      <div className="lg:ml-[250px] details-container flex flex-col items-center justify-center min-h-screen md:flex-row">
        <div className="car-image mx-auto flex-nowrap w-80 h-80 relative flex flex-col justify-center md:w-[750px] md:h-[750px]">
          <img src={photo} alt={`${name}`} className="z-10 rounded-full" />
          <div className="hidden absolute inset-32 bg-black bg-opacity-30 rounded-full z-0 xl:block" />
        </div>
        <div className="info-container my-4 text-gray-700 mx-2 flex flex-col w-72 gap-4 justify-start md:mr-8 md:w-80 max-h-[100%] overfolw-scroll">
          <h1 className="name text-xl font-semibold md:text-2xl md:font-bold lg:text-4xl">{name}</h1>
          <hr className="w-24 self-center border-t-white md:w-52 md:my-2" />
          <ul className="flex flex-col">
            <li className="flex justify-between p-3 bg-gray-200">
              <span className="text-sm font-light">Price</span>
              <span className="text-sm font-light">{`$${price}`}</span>
            </li>
            <li className="flex justify-between p-3">
              <span className="text-sm font-light">Reservation Fee</span>
              <span className="text-sm font-light">{`$${reservationFee}`}</span>
            </li>
            <li className="flex justify-between p-3 bg-gray-200">
              <span className="text-sm font-light">Delivery</span>
              <span className="text-sm font-light">Free</span>
            </li>
            <li className="flex justify-between p-3">
              <span className="text-sm font-light">Warranty</span>
              <span className="text-sm font-light">1 year</span>
            </li>
          </ul>
          <p className="description mt-4 text-left text-sm font-light md:text-base">
            {description}
          </p>
          <Link to="/cars" className="text-sm mt-4 self-end">BROWSE MORE MODELS &#10148;</Link>
          <Link
            to="/new-reservation"
            type="button"
            className="bg-green self-center text-white py-2 px-8 rounded-full mt-4 mt-26 md:text-2xl"
            onClick={handleReserve}
          >
            Reserve
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
