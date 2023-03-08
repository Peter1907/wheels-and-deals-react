import { React } from 'react';
import PropTypes from 'prop-types';

const ModelSelect = ({ value, onChange, models }) => {
  

  return (
    <select
      required
      className="border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2 w-full max-w-xs min-w-64 lg:m-6"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">MODEL</option>
      {models.map((model) => (
        <option key={model.name} value={model.id}>
          {model.name}
        </option>
      ))}
    </select>
  );
};

ModelSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  models: PropTypes.object.isRequired
};

export default ModelSelect;
