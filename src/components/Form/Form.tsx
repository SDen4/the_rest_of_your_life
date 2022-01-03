import React from 'react';
import { useDispatch } from 'react-redux';

import { formNames, formTitle } from '../../constants/form';

import { choseCountry } from '../../store/MainReducer/actions';

import styles from './Form.module.css';
import { IForm } from './types';

const Form: React.FC<IForm> = ({ countriesList }) => {
  const dispatch = useDispatch();

  const choseNewCountry = (event: any) => {
    if (event.target.value) {
      dispatch(choseCountry(event.target.value));
    }
  };

  return (
    <>
      <h2>{formTitle.rus}</h2>
      <form className={styles.formWrapper}>
        <label>{formNames.rus}</label>
        <select onChange={choseNewCountry}>
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
