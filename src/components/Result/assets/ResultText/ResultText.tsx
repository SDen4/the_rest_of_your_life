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
      {resultIn[store.currentLang]} {store.chosenCountry}{' '}
      {resultText1[store.currentLang]}{' '}
      {store.chosenSex === formSexList.rus[0] ||
      store.chosenSex === formSexList.eng[0]
        ? resultTextMan[store.currentLang]
        : ''}
      {store.chosenSex === formSexList.rus[1] ||
      store.chosenSex === formSexList.eng[1]
        ? resultTextWoman[store.currentLang]
        : ''}
      {store.chosenSex === formSexList.eng[2] ||
      store.chosenSex === formSexList.rus[2]
        ? ''
        : ''}{' '}
      {resultTextIs[store.currentLang]}{' '}
      <span className={styles.color}>{store.valueYears}</span>{' '}
      {resultTextYears[store.currentLang]}.
      <br />
      {resultTextData[store.currentLang]} {resultTextWho[store.currentLang]}{' '}
      {resultTextFor[store.currentLang]} {store.statYear}{' '}
      {resultTextYearRus[store.currentLang]}.
      <br />
      {store.chosenSex === formSexList.rus[0] ||
      store.chosenSex === formSexList.eng[0] ||
      store.chosenSex === formSexList.eng[2] ||
      store.chosenSex === formSexList.rus[2]
        ? resultTextLivedMan[store.currentLang]
        : ''}{' '}
      {store.chosenSex === formSexList.rus[1] ||
      store.chosenSex === formSexList.eng[1]
        ? resultTextLivedWoman[store.currentLang]
        : ''}{' '}
      <span className={styles.color}>{store.userYears.toFixed(1)}</span>{' '}
      {resultTextYears[store.currentLang]}, {resultTextCons[store.currentLang]}{' '}
      <span className={styles.color}>
        {((store.userYears / store.valueYears) * 100).toFixed(1)}%
      </span>{' '}
      {resultTextAfterPers[store.currentLang]}.
    </h2>
  );
};

export default ResultText;
