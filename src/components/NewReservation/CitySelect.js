import React from 'react';
import PropTypes from 'prop-types';

const CitySelect = ({ value, onChange, country }) => {
  const cities = {
    'United States': ['New York', 'Detroit', 'Los Angeles', 'Miami'],
    Mexico: ['Mexico City', 'Monterrey', 'Guadalajara'],
    Ecuador: ['Quito', 'Guayaquil', 'Cuenca'],
  };

  const countryCities = cities[country] || [];

  return (
    <select
      className="border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2 w-48"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">CITY</option>
      {countryCities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

CitySelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
};

export default CitySelect;
