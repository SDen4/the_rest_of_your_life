import type { FC } from 'react';
import React, { memo } from 'react';

import styles from './styles.module.css';

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  list: string[];
  currentValue: string;
  title?: string;
}

const Select: FC<IProps> = ({ title, onChange, list, currentValue }) => {
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
