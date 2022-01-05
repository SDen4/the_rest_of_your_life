import React from 'react';
import { formSexList } from '../../../../constants/form';

import {
  resultIn,
  resultText1,
  resultTextAfterPers,
  resultTextCons,
  resultTextData,
  resultTextFor,
  resultTextIs,
  resultTextLivedMan,
  resultTextLivedWoman,
  resultTextMan,
  resultTextWho,
  resultTextWoman,
  resultTextYearRus,
  resultTextYears,
} from '../../../../constants/result';

import { IResultText } from './types';

import styles from './ResultText.module.css';

const ResultText: React.FC<IResultText> = ({ store }) => {
  return (
    <h2>
      {resultIn.rus} {store.chosenCountry} {resultText1.rus}{' '}
      {store.chosenSex === formSexList.rus[0] ||
      store.chosenSex === formSexList.eng[0]
        ? resultTextMan.rus
        : ''}
      {store.chosenSex === formSexList.rus[1] ||
      store.chosenSex === formSexList.eng[1]
        ? resultTextWoman.rus
        : ''}
      {store.chosenSex === formSexList.eng[2] ||
      store.chosenSex === formSexList.rus[2]
        ? ''
        : ''}{' '}
      {resultTextIs.rus}{' '}
      <span className={styles.color}>{store.valueYears}</span>{' '}
      {resultTextYears.rus}.
      <br />
      {resultTextData.rus} {resultTextWho.rus} {resultTextFor.rus}{' '}
      {store.statYear} {resultTextYearRus.rus}.
      <br />
      {store.chosenSex === formSexList.rus[0] ||
      store.chosenSex === formSexList.eng[0] ||
      store.chosenSex === formSexList.eng[2] ||
      store.chosenSex === formSexList.rus[2]
        ? resultTextLivedMan.rus
        : ''}{' '}
      {store.chosenSex === formSexList.rus[1] ||
      store.chosenSex === formSexList.eng[1]
        ? resultTextLivedWoman.rus
        : ''}{' '}
      <span className={styles.color}>{store.userYears.toFixed(1)}</span>{' '}
      {resultTextYears.rus}, {resultTextCons.rus}{' '}
      <span className={styles.color}>
        {((store.userYears / store.valueYears) * 100).toFixed(1)}%
      </span>{' '}
      {resultTextAfterPers.rus}.
    </h2>
  );
};

export default ResultText;
