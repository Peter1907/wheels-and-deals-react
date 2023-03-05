import React from 'react';
import PropTypes from 'prop-types';

const ModelSelect = ({ value, onChange }) => {
  const models = ['BMW', 'Mercedes', 'Bugatti', 'Lamborghini'];

  return (
    <select
      required
      className="border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2 w-48"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">MODEL</option>
      {models.map((model) => (
        <option key={model} value={model}>
          {model}
        </option>
      ))}
    </select>
  );
};

ModelSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ModelSelect;
