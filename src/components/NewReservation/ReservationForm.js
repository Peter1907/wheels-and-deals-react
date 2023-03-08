import { useEffect, React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { getCars } from '../../redux/reducers/cars';
import { addReservation } from '../../redux/reducers/reservation';
import 'react-datepicker/dist/react-datepicker.css';
import CitySelect from './CitySelect';
import CountrySelect from './CountrySelect';
import ModelSelect from './ModelSelect';

const ReservationForm = () => {
  const models = useSelector((store) => store.cars.items);
  const dispatch = useDispatch();
  let selectedModel = '';

  if (sessionStorage.getItem('id')) {
    selectedModel = sessionStorage.getItem('id');
  }

  const [model, setModel] = useState(selectedModel);
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [reservDate, setReservDate] = useState(new Date());

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservationData = {
      date: reservDate,
      city,
      country,
      car_id: model,
    };
    dispatch(addReservation(reservationData));
  };

  return (
    <div className="mt-8">
      <form className="flex flex-wrap justify-center content-center" onSubmit={handleSubmit}>
        <ModelSelect value={model} onChange={setModel} models={models} />
        <CountrySelect value={country} onChange={setCountry} />
        <CitySelect value={city} onChange={setCity} country={country} />
        <div className="mt-2 w-full max-w-xs min-w-64 lg:m-6">
          <DatePicker
            className="placeholder:text-white border-white border-2 bg-lime-500 rounded-full px-4 py-2 w-full"
            selected={reservDate}
            onChange={(date) => setReservDate(date)}
            minDate={new Date()}
            placeholderText="DATE"
          />
        </div>

        <button className="text-lime-500 font-bold border-white border-2 bg-white rounded-full px-4 py-2 mt-2 w-full max-w-xs min-w-64 lg:m-6 hover:ring-neutral-600 focus:ring-2" type="submit">
          BOOK NOW
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
