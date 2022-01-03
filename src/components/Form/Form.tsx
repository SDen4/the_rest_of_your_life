import React from 'react';

import { formNames, formTitle } from '../../constants/form';

// import data from '../../data/data.json';

import styles from './Form.module.css';
import { IForm } from './types';

const Form: React.FC<IForm> = ({ countriesList }) => {
  return (
    <>
      <h2>{formTitle.rus}</h2>
      <form className={styles.formWrapper}>
        <label>{formNames.rus}</label>
        <select>
          {countriesList.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default Form;
