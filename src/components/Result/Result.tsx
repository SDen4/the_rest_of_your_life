import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import {
  resultButton,
  resultTextFinal,
  resultTextFinalLucky,
  resultTextOr,
  resultTextWeek,
  resultTextOr2,
  resultYearsTextinTheTable,
  resultYearsTextInTheTableLuckyMan,
  resultYearsTextInTheTableLuckyWooman
} from '../../constants/result';
import { formSexList } from '../../constants/form';

import {
  selectChosenSex,
  selectChosenLang,
  selectValueYears,
  selectUserYears
} from '../../store/Search/selectors/selectors';

import { form, result } from '../../store/Search/ducks';

import inflection from '../../utils/inflection';

import Button from '../../ui/Button';
import WeeksTable from '../WeeksTable';

import ResultText from './assets/ResultText';
import { StateItemType, StateType } from './types';

import styles from './Result.module.css';

const Result: React.FC = () => {
  const dispatch = useDispatch();

  const sex: string = useSelector(selectChosenSex);
  const lang: string = useSelector(selectChosenLang);
  const valueYears: number = useSelector(selectValueYears);
  const userYears: number = useSelector(selectUserYears);

  const height =
    userYears < valueYears
      ? `${valueYears * 7 - 1}px`
      : `${userYears * 7 - 1}px`;

  const states: StateType = ['table', 'years', 'weeks', 'final'];
  const [show, setShow] = useState<StateItemType>(states[0]);

  const backHandler = () => {
    dispatch(result(false));
    dispatch(form(true));
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
      <ResultText />
      <div
        className={clsx(
          styles.tableWrapper,
          show === 'table' && styles.tableWrapperAnime
        )}
        onClick={changeResultInfo}
      >
        {show === 'table' && (
          <WeeksTable valueYears={valueYears} userYears={userYears} />
        )}

        {show === 'years' && (
          <div className={styles.showInfoWrapper} style={{ height: height }}>
            {userYears < valueYears ? (
              <h2>
                {resultYearsTextinTheTable[lang]}
                <span>{inflection(valueYears - userYears, lang)}</span>
                {resultTextOr2[lang]}
              </h2>
            ) : (
              <h2>
                {sex === formSexList.rus[0] ||
                sex === formSexList.eng[0] ||
                sex === formSexList.eng[2] ||
                sex === formSexList.rus[2]
                  ? resultYearsTextInTheTableLuckyMan[lang]
                  : resultYearsTextInTheTableLuckyWooman[lang]}
                <span>{inflection(userYears - valueYears, lang)}</span>
              </h2>
            )}
          </div>
        )}

        {show === 'weeks' && (
          <div className={styles.showInfoWrapper} style={{ height: height }}>
            {userYears < valueYears ? (
              <h2>
                {resultTextOr[lang]}
                <span>{((valueYears - userYears) * 52).toFixed()}</span>
                {resultTextWeek[lang]}
              </h2>
            ) : (
              <h2>
                {resultTextOr[lang]}
                <span>{((userYears - valueYears) * 52).toFixed()}</span>
                {resultTextWeek[lang]}
              </h2>
            )}
          </div>
        )}

        {show === 'final' && (
          <div className={styles.showInfoWrapper} style={{ height: height }}>
            {userYears < valueYears ? (
              <h2>{resultTextFinal[lang]}</h2>
            ) : (
              <h2>{resultTextFinalLucky[lang]}</h2>
            )}
          </div>
        )}
      </div>

      <Button
        buttonText={resultButton[lang]}
        buttonOnClickHandler={backHandler}
      />
    </div>
  );
};

export default Result;
