import { Link } from 'react-router-dom';

const Details = () => {
  const car = {
    id: 1,
    name: 'BMW',
    description: 'BMW is one of the best-selling luxury vehicle brands in the world, as of 2019, with 2,279,503 vehicles sold globally.',
    photo: './cars/bmw.png',
    price: 100000,
    reservation_fee: 1000,
  };

  const {
    name,
    description,
    photo,
    price,
  } = car;

  return (
    <div className="details-page text-center h-screen lg:overflow-hidden">
      <div className="navigation hidden border-r border-gray-300 float-left inset-0 py-8 min-h-screen w-[250px] bg-slate-100 lg:block">
        <Link to="/">
          <img className="w-24 mx-auto" src="./logo.svg" alt="logo" />
        </Link>
        <ul className="flex flex-col mt-16 ml-4 text-left">
          <li className="cursor-pointer py-4 text-2xl font-semibold pl-8 bg-green text-white">MODELS</li>
          <li className="cursor-pointer py-4 text-2xl font-semibold pl-8">LIFESTYLE</li>
          <li className="cursor-pointer py-4 text-2xl font-semibold pl-8">SHOP</li>
          <li className="cursor-pointer py-4 text-2xl font-semibold pl-8">TEST DRIVE</li>
        </ul>
      </div>
      <div className="details-container flex flex-col items-center justify-center min-h-screen md:flex-row">
        <div className="car-image mx-auto flex-nowrap w-80 h-80 self-end relative flex flex-col justify-center md:w-[750px] md:h-[750px]">
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
              <span className="text-sm font-light">{`$${car.reservation_fee}`}</span>
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
          <button type="button" className="bg-green self-center text-white py-2 px-8 rounded-full mt-4 mt-26 md:text-2xl">Reserve</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
