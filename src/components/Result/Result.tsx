import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { resultButton, resultTextYears } from '../../constants/result';

import { openForm, openResult } from '../../store/MainReducer/actions';

import Button from '../../ui/Button';
import WeeksTable from '../WeeksTable';

import { IResult } from './types';

import styles from './Result.module.css';
import ResultText from './assets/ResultText';

const Result: React.FC<IResult> = ({ store }) => {
  const dispatch = useDispatch();

  const backHandler = () => {
    dispatch(openResult(false));
    dispatch(openForm(true));
  };

  const [show, setShow] = useState<boolean>(false);

  const changeResultInfo = () => {
    setShow(!show);
  };

  const height = `${store.valueYears * 7 - 1}px`;

  return (
    <div className={styles.resultWrapper}>
      <ResultText store={store} />
      <div className={styles.tableWrapper} onClick={changeResultInfo}>
        {!show && (
          <WeeksTable
            valueYears={store.valueYears}
            userYears={store.userYears}
          />
        )}

        {show && (
          <div className={styles.showInfoWrapper} style={{ height: height }}>
            <h2>
              Тебе осталось прожить примерно
              <span>{(store.valueYears - store.userYears).toFixed(1)}</span>
              {resultTextYears[store.currentLang]}
            </h2>
          </div>
        )}
      </div>

      <Button
        buttonText={resultButton[store.currentLang]}
        buttonOnClickHandler={backHandler}
      />
    </div>
  );
};

export default Result;
