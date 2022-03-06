import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { choseBirthDate, choseSex } from '../../store/MainReducer/actions';
import Button from '../../ui/Button';
import Select from '../../ui/Select';

import { searchRequest } from '../../store/Search/ducks';

import { choseCountry } from '../../store/MainReducer/ducks/duck';

import { selectCountry } from '../../store/MainReducer/selectors/selectors';

import { IForm } from './types';

import styles from './Form.module.css';

const Form: React.FC<IForm> = ({ store }) => {
  const dispatch = useDispatch();

  const country = useSelector(selectCountry);

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
    dispatch(searchRequest(store.chosenSex));
  };

  return (
    <div className={styles.formComponent}>
      <h2 className={styles.subTitle}>{formTitle[store.currentLang]}</h2>

      <form className={styles.formWrapper}>
        <div className={styles.formRow}>
          <Select
            onChange={choseNewCountry}
            list={store.countriesList}
            currentValue={country}
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
