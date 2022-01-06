import React from 'react';
import { useDispatch } from 'react-redux';

import { resultButton } from '../../constants/result';

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

  return (
    <div className={styles.resultWrapper}>
      <ResultText store={store} />
      <div className={styles.tableWrapper}>
        <WeeksTable valueYears={store.valueYears} userYears={store.userYears} />
      </div>

      <Button
        buttonText={resultButton[store.currentLang]}
        buttonOnClickHandler={backHandler}
      />
    </div>
  );
};

export default Result;
