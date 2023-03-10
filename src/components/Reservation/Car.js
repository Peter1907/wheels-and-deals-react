import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../redux/reducers/reservation';

const Car = ({ data }) => {
  const dispatch = useDispatch();
  const remove = './icons/remove.svg';

  const deleteCar = (id) => {
    dispatch(deleteReservation(id));
  };

  return (
    <article className="car flex flex-col md:flex-row items-center justify-start text-center bg-orange rounded-xl px-4">
      <div className="car-image w-45 md:w-56 h-45 md:h-56 relative flex flex-col justify-center md:w-64 md:h-64">
        <img src={data.photo} alt={`${data.name}`} className="z-10 rounded-full" />
        <div className="absolute inset-10 bg-black bg-opacity-40 rounded-full z-0 bg-blend-multiply md:inset-12" />
      </div>
      <div className="info-container text-gray-700 mx-2 flex flex-col w-72 md:wd-0 gap-4 justify-start md:w-80">
        <h1 className="name text-xl font-semibold md:text-2xl md:font-bold">{data.name}</h1>
        <hr className="w-24 self-center border-t-white md:w-52 md:my-2" />
        <p className="description text-sm font-light">
          {`${data.city}-${data.country}`}
        </p>
        <p className="description text-sm font-light">
          {data.date}
        </p>
      </div>
      <div className="social mt-8 mb-4 flex gap-4 rounded-full bg-white bg-opacity-50 py-2 px-6">
        <button className="btn btn-primary" type="button" onClick={() => deleteCar(data.id)}>
          <img src={remove} alt="remove" className="w-4 md:w-6" />
        </button>
      </div>
    </article>
  );
};

Car.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Car;
