import React from 'react';

import { ISelect } from './types';

const Select: React.FC<ISelect> = ({ title, onChange, list, currentValue }) => {
  return (
    <>
      {title && <label>{title}</label>}
      <select onChange={onChange} value={currentValue}>
        {list.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
