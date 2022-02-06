import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  resultButton,
  resultTextFinal,
  resultTextFinalLucky,
  resultTextOr,
  resultTextWeek,
  resultTextYears,
  resultTextYears2,
  resultYearsTextinTheTable,
  resultYearsTextInTheTableLuckyMan,
  resultYearsTextInTheTableLuckyWooman,
} from '../../constants/result';

import { openForm, openResult } from '../../store/MainReducer/actions';

import Button from '../../ui/Button';
import WeeksTable from '../WeeksTable';

import { IResult, StateItemType, StateType } from './types';

import styles from './Result.module.css';
import ResultText from './assets/ResultText';
import { formSexList } from '../../constants/form';
import clsx from 'clsx';

const Result: React.FC<IResult> = ({ store }) => {
  const dispatch = useDispatch();

  const height =
    store.userYears < store.valueYears
      ? `${store.valueYears * 7 - 1}px`
      : `${store.userYears * 7 - 1}px`;

  const states: StateType = ['table', 'years', 'weeks', 'final'];
  const [show, setShow] = useState<StateItemType>(states[0]);

  const backHandler = () => {
    dispatch(openResult(false));
    dispatch(openForm(true));
  };

  const changeResultInfo = () => {
    if (show === states[states.length - 1]) {
      setShow(states[0]);
    } else {
      const curIndex = states.indexOf(show);
      setShow(states[curIndex + 1]);
    }
  };

  return (
    <div className={styles.resultWrapper}>
      <ResultText store={store} />
      <div
        className={clsx(
          styles.tableWrapper,
          show === 'table' && styles.tableWrapperAnime,
        )}
        onClick={changeResultInfo}
      >
        {show === 'table' && (
          <WeeksTable
            valueYears={store.valueYears}
            userYears={store.userYears}
          />
        )}

        {show === 'years' && (
          <div className={styles.showInfoWrapper} style={{ height: height }}>
            {store.userYears < store.valueYears ? (
              <h2>
                {resultYearsTextinTheTable[store.currentLang]}
                <span>{(store.valueYears - store.userYears).toFixed(1)}</span>
                {resultTextYears2[store.currentLang]}
              </h2>
            ) : (
              <h2>
                {store.chosenSex === formSexList.rus[0] ||
                store.chosenSex === formSexList.eng[0] ||
                store.chosenSex === formSexList.eng[2] ||
                store.chosenSex === formSexList.rus[2]
                  ? resultYearsTextInTheTableLuckyMan[store.currentLang]
                  : resultYearsTextInTheTableLuckyWooman[store.currentLang]}
                <span>{(store.userYears - store.valueYears).toFixed(1)}</span>
                {resultTextYears[store.currentLang]}
              </h2>
            )}
          </div>
        )}

        {show === 'weeks' && (
          <div className={styles.showInfoWrapper} style={{ height: height }}>
            {store.userYears < store.valueYears ? (
              <h2>
                {resultTextOr[store.currentLang]}
                <span>
                  {((store.valueYears - store.userYears) * 52).toFixed()}
                </span>
                {resultTextWeek[store.currentLang]}
              </h2>
            ) : (
              <h2>
                {resultTextOr[store.currentLang]}
                <span>
                  {((store.userYears - store.valueYears) * 52).toFixed()}
                </span>
                {resultTextWeek[store.currentLang]}
              </h2>
            )}
          </div>
        )}

        {show === 'final' && (
          <div className={styles.showInfoWrapper} style={{ height: height }}>
            {store.userYears < store.valueYears ? (
              <h2>{resultTextFinal[store.currentLang]}</h2>
            ) : (
              <h2>{resultTextFinalLucky[store.currentLang]}</h2>
            )}
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
