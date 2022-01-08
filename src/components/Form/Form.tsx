import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import clsx from 'clsx';

import {
  formButton,
  formDate,
  formNames,
  formSex,
  formSexList,
  formTitle,
} from '../../constants/form';

import data from '../../data/data.json';

import {
  choseBirthDate,
  choseCountry,
  choseSex,
  openForm,
  openResult,
  saveResult,
} from '../../store/MainReducer/actions';
import Button from '../../ui/Button';
import Select from '../../ui/Select';
import currentSexForSearch from '../../utils/currentSexForSearch';

import { IForm } from './types';

import styles from './Form.module.css';

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

  const [localBirthDate, setLocalBirthDate] = useState(
    format(store.birthDate, 'yyyy-MM-dd'),
  );

  const choseNewBirthDate = (event: any) => {
    if (event.target.valueAsDate) {
      dispatch(choseBirthDate(event.target.valueAsDate));
    }
    if (event.target.valueAsDate)
      setLocalBirthDate(() => format(event.target.valueAsDate, 'yyyy-MM-dd'));
  };

  const calculateHandler = () => {
    let currentSex = currentSexForSearch(store.chosenSex);

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
    dispatch(openForm(false));
    dispatch(openResult(true));
  };

  return (
    <div className={styles.formComponent}>
      <h2 className={styles.subTitle}>{formTitle[store.currentLang]}</h2>

      <form className={styles.formWrapper}>
        <div className={styles.formRow}>
          <Select
            onChange={choseNewCountry}
            list={store.countriesList}
            currentValue={store.chosenCountry}
            title={formNames[store.currentLang]}
          />
        </div>

        <div className={styles.formRow}>
          <Select
            onChange={choseNewSex}
            list={formSexList[store.currentLang]}
            currentValue={store.chosenSex}
            title={formSex[store.currentLang]}
          />
        </div>

        <div className={clsx(styles.formRow, styles.dateWrapper)}>
          <label>{formDate[store.currentLang]}</label>
          <input
            type="date"
            onChange={choseNewBirthDate}
            value={localBirthDate}
          />
        </div>
      </form>

      <Button
        buttonText={formButton[store.currentLang]}
        buttonOnClickHandler={calculateHandler}
      />
    </div>
  );
};

export default Form;