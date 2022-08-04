import React, { memo } from 'react';

import { ISelect } from './types';

import styles from './Select.module.css';

const Select: React.FC<ISelect> = ({ title, onChange, list, currentValue }) => {
  return (
    <>
      {title && <label className={styles.label}>{title}</label>}
      <select
        onChange={onChange}
        value={currentValue}
        className={styles.select}
      >
        {list.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
    </>
  );
};

export default memo(Select);
