import React from 'react';

import { ISelect } from './types';

const Select: React.FC<ISelect> = ({
  title,
  choseNewSex,
  formSexList,
  currentValue,
}) => {
  return (
    <>
      <label>{title}</label>
      <select onChange={choseNewSex} value={currentValue}>
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
