import { React, useState } from 'react';
import CitySelect from './CitySelect';
import CountrySelect from './CountrySelect';

const ReservationForm = (onSubmit) => {
  const [model, setModel] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(model, country);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="placeholder:text-white border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2"
          type="text"
          value={model}
          placeholder="MODEL"
          onChange={(e) => setModel(e.target.value)}
        />

        <CountrySelect value={country} onChange={setCountry} />
        <CitySelect value={city} onChange={setCity} country={country} />

        <button className="text-lime-500 font-bold border-white border-2 bg-white rounded-full px-4 py-2 mt-2" type="submit">
          BOOK NOW
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
