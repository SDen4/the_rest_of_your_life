import type { FC } from 'react';
import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { format } from 'date-fns';

import { Button } from '../../ui/Button';
import Select from '../../ui/Select';

import {
  selectBirthDate,
  selectChosenLang,
  selectChosenSex,
  selectCountriesList,
  selectCountry
} from '../../../store/Search/selectors/selectors';
import {
  birthDateSaga,
  choseCountry,
  choseSex,
  searchRequestSaga
} from '../../../store/Search/ducks';

import {
  formButton,
  formDate,
  formNames,
  formSex,
  formSexList,
  formTitle
} from '../../../constants/form';

import styles from './styles.module.css';

const Form: FC = () => {
  const dispatch = useDispatch();

  const sex = useSelector(selectChosenSex);
  const lang = useSelector(selectChosenLang);
  const countriesList = useSelector(selectCountriesList);
  const birthDate = useSelector(selectBirthDate);
  const country = useSelector(selectCountry);

  const choseNewCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) {
      dispatch(choseCountry(event.target.value));
    }
  };

  const choseNewSex = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) {
      dispatch(choseSex(event.target.value));
    }
  };

  const [localBirthDate, setLocalBirthDate] = useState(
    format(birthDate, 'yyyy-MM-dd')
  );

  const choseNewBirthDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.valueAsDate) {
      dispatch(birthDateSaga(event.target.valueAsDate));
      setLocalBirthDate(() =>
        format(event.target.valueAsDate as Date, 'yyyy-MM-dd')
      );
    }
  };

  const calculateHandler = () => {
    dispatch(searchRequestSaga());
  };

  return (
    <section className={styles.formComponent}>
      <h2 className={styles.subTitle}>{formTitle[lang]}</h2>

      <form className={styles.formWrapper}>
        <div className={styles.formRow}>
          <Select
            onChange={choseNewCountry}
            list={countriesList}
            currentValue={country}
            title={formNames[lang]}
          />
        </div>

        <div className={styles.formRow}>
          <Select
            onChange={choseNewSex}
            list={formSexList[lang]}
            currentValue={sex}
            title={formSex[lang]}
          />
        </div>

        <div className={clsx(styles.formRow, styles.dateWrapper)}>
          <label>{formDate[lang]}</label>
          <input
            type="date"
            onChange={choseNewBirthDate}
            value={localBirthDate}
          />
        </div>
      </form>

      <Button
        buttonText={formButton[lang]}
        buttonOnClickHandler={calculateHandler}
      />
    </section>
  );
};

export default memo(Form);
