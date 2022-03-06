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

import Button from '../../ui/Button';
import Select from '../../ui/Select';

import { searchRequest } from '../../store/Search/ducks';

import { choseCountry } from '../../store/MainReducer/ducks/duck';

import { selectCountry } from '../../store/MainReducer/selectors/selectors';
import {
  selectChosenSex,
  selectChosenLang,
} from '../../store/Search/selectors/selectors';

import { choseSex } from '../../store/Search/ducks/duck';
import { choseBirthDate } from '../../store/MainReducer/actions';

import { IForm } from './types';

import styles from './Form.module.css';

const Form: React.FC<IForm> = ({ store }) => {
  const dispatch = useDispatch();

  const sex: string = useSelector(selectChosenSex);
  const lang: string = useSelector(selectChosenLang);

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
    dispatch(searchRequest({ sex: sex, lang: lang }));
  };

  return (
    <div className={styles.formComponent}>
      <h2 className={styles.subTitle}>{formTitle[lang]}</h2>

      <form className={styles.formWrapper}>
        <div className={styles.formRow}>
          <Select
            onChange={choseNewCountry}
            list={store.countriesList}
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
    </div>
  );
};

export default Form;
