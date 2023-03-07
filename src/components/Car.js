import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar } from '../redux/reducers/cars';

const Car = ({ data }) => {
  const facebook = './icons/facebook.svg';
  const twitter = './icons/twitter.svg';
  const instagram = './icons/instagram.svg';
  const remove = './icons/remove.svg';

  const dispatch = useDispatch();
  const permission = useSelector((store) => store.cars.permission);

  const displayMessage = () => {
    const messageContainer = document.querySelector('.message-container');
    messageContainer.classList.remove('hidden');
    setTimeout(() => {
      messageContainer.classList.add('hidden');
    }, 4000);
  };

  const removeCar = (id) => () => {
    dispatch(deleteCar(id));
    displayMessage();
  };

  return (
    <div className="car relative flex flex-col gap-4 justify-start items-center text-center bg-orange rounded-xl ease-in-out duration-300 hover:scale-[102%] hover:shadow-2xl">
      {permission && (
        <button
          className="absolute right-4 top-4 flex bg-white bg-opacity-50 rounded-full h-8 w-8 md:h-10 md:w-10"
          type="button"
          onClick={removeCar(data.id)}
        >
          <img src={remove} alt="remove" className="m-auto w-4 md:w-6" />
        </button>
      )}
      <Link to={`/details/${data.id}`} className="flex flex-col items-center">
        <div className="car-image w-56 h-56 relative flex flex-col justify-center md:w-64 md:h-64">
          <img src={data.photo} alt={`${data.name}`} className="z-10 rounded-full" />
          <div className="absolute inset-10 bg-black bg-opacity-40 rounded-full z-0 bg-blend-multiply md:inset-12" />
        </div>
        <div className="info-container text-gray-700 mx-2 flex flex-col w-72 gap-4 justify-start md:w-80">
          <h1 className="name text-xl font-semibold md:text-2xl md:font-bold">{data.name}</h1>
          <hr className="w-24 self-center border-t-white md:w-52 md:my-2" />
          <p className="description text-sm font-light">
            {data.description.length > 100
              ? data.description.slice(0, 100).concat('...')
              : data.description}
          </p>
        </div>
      </Link>
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
    </div>
  );
};

Car.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Car;
