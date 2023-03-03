import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Car = ({ data }) => {
  const facebook = './icons/facebook.svg';
  const twitter = './icons/twitter.svg';
  const instagram = './icons/instagram.svg';

  return (
    <Link to="/details" className="car flex flex-col gap-4 justify-start items-center text-center bg-orange rounded-xl ease-in-out duration-300 hover:scale-[102%] hover:shadow-2xl">
      <div className="car-image w-56 h-56 relative flex flex-col justify-center md:w-64 md:h-64">
        <img src={data.photo} alt={`${data.name}`} className="z-10 rounded-full" />
        <div className="absolute inset-10 bg-black bg-opacity-40 rounded-full z-0 bg-blend-multiply md:inset-12" />
      </div>
      <div className="info-container text-gray-700 mx-2 flex flex-col w-72 gap-4 justify-start md:w-80">
        <h1 className="name text-xl font-semibold md:text-2xl md:font-bold">{data.name}</h1>
        <hr className="w-24 self-center border-t-white md:w-52 md:my-2" />
        <p className="description text-sm font-light">
          {data.description.slice(0, 100)}
          ...
        </p>
      </div>
      <div className="social mt-8 mb-4 flex gap-4 rounded-full bg-white bg-opacity-50 py-2 px-6">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src={facebook} alt="facebook" className="w-4 md:w-6" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" className="w-4 md:w-6" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" className="w-4 md:w-6" />
        </a>
      </div>
    </Link>
  );
};

Car.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Car;
