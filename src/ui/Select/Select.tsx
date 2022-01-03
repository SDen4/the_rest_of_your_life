import React from 'react';

import { ISelect } from './types';

const Select: React.FC<ISelect> = ({ title, choseNewSex, formSexList }) => {
  return (
    <>
      <label>{title}</label>
      <select onChange={choseNewSex}>
        {formSexList.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
