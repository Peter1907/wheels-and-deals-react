import React from 'react';
import PropTypes from 'prop-types';

const CountrySelect = ({ value, onChange }) => {
  const countries = ['United States', 'Mexico', 'Ecuador', 'Egypt'];

  return (
    <select
      required
      className="border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2 w-full max-w-xs min-w-64 lg:m-6"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">COUNTRY</option>
      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

CountrySelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CountrySelect;
