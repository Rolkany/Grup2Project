import React from "react";
import Select from "react-select";

const LocationSelector = ({ options, value, onChange }) => {
  return (
    <div className="item custom-select__multi-value">
      <label className="custom-select__multi-value__label" htmlFor="location">
        Location:
      </label>
      <Select
        classNamePrefix="custom-select"
        isMulti
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LocationSelector;
