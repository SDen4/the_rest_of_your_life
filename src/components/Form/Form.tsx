import React from 'react';
import { useDispatch } from 'react-redux';

import {
  formButton,
  formNames,
  formSex,
  formSexList,
  formTitle,
} from '../../constants/form';

import { choseCountry, choseSex } from '../../store/MainReducer/actions';
import Button from '../../ui/Button';

import styles from './Form.module.css';
import { IForm } from './types';

const Form: React.FC<IForm> = ({ countriesList }) => {
  const dispatch = useDispatch();

  const choseNewCountry = (event: any) => {
    if (event.target.value) {
      dispatch(choseCountry(event.target.value));
    }
  };

  const choseNewSex = (event: any) => {
    if (event.target.value) {
      dispatch(choseSex(event.target.value));
    }
  };

  return (
    <div className={styles.formComponent}>
      <h2 className={styles.subTitle}>{formTitle.rus}</h2>

      <form className={styles.formWrapper}>
        <div className={styles.formRow}>
          <label>{formNames.rus}</label>
          <select onChange={choseNewCountry}>
            {countriesList.map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formRow}>
          <label>{formSex.rus}</label>
          <select onChange={choseNewSex}>
            {formSexList.rus.map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
      </form>

      <Button buttonText={formButton.rus} buttonOnClickHandler={() => null} />
    </div>
  );
};

export default Form;
