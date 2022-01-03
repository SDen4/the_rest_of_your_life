import React from 'react';
import { useDispatch } from 'react-redux';

import {
  formButton,
  formNames,
  formSex,
  formSexList,
  formTitle,
} from '../../constants/form';

import data from '../../data/data.json';

import {
  choseCountry,
  choseSex,
  saveResult,
} from '../../store/MainReducer/actions';
import Button from '../../ui/Button';

import styles from './Form.module.css';
import { IForm } from './types';

const Form: React.FC<IForm> = ({ store }) => {
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

  const calculateHandler = () => {
    let currentSex = store.chosenSex;

    if (
      currentSex.toLocaleLowerCase() === 'male' ||
      currentSex.toLocaleLowerCase() === 'муж'
    ) {
      currentSex = 'Male';
    } else if (
      currentSex.toLocaleLowerCase() === 'female' ||
      currentSex.toLocaleLowerCase() === 'жен'
    ) {
      currentSex = 'Female';
    } else {
      currentSex = 'Both sexes';
    }

    // range of relevant data by years
    const releventRange = data.fact.filter(
      (el) =>
        el.dims.COUNTRY === store.chosenCountry &&
        el.dims.SEX === currentSex &&
        el.dims.GHO === 'Life expectancy at birth (years)',
    );

    // find the data for the latest year of the range
    const totalData = releventRange.sort((a, b) =>
      a.dims.YEAR > b.dims.YEAR ? -1 : 1,
    )[0];

    const valueYears = Number(totalData.Value);
    const statYear = Number(totalData.dims.YEAR);

    dispatch(saveResult(valueYears, statYear));
  };

  return (
    <div className={styles.formComponent}>
      <h2 className={styles.subTitle}>{formTitle.rus}</h2>

      <form className={styles.formWrapper}>
        <div className={styles.formRow}>
          <label>{formNames.rus}</label>
          <select onChange={choseNewCountry}>
            {store.countriesList.map((el) => (
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

      <Button
        buttonText={formButton.rus}
        buttonOnClickHandler={calculateHandler}
      />
    </div>
  );
};

export default Form;
