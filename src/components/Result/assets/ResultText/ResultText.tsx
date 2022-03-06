import React from 'react';
import { useSelector } from 'react-redux';
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
  resultTextLucky,
  resultTextMan,
  resultTextWho,
  resultTextWoman,
  resultTextYearRus,
} from '../../../../constants/result';

import { IResultText } from './types';

import styles from './ResultText.module.css';
import inflection from '../../../../utils/inflection';
import { selectSearchItem } from '../../../../store/Search/selectors/selectors';

const ResultText: React.FC<IResultText> = ({ store }) => {
  const country: string = useSelector(selectSearchItem);

  return (
    <h2>
      {resultIn[store.currentLang]} {country} {resultText1[store.currentLang]}{' '}
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
      <span className={styles.color}>
        {inflection(store.valueYears, store.currentLang)}
      </span>
      .
      <br />
      {resultTextData[store.currentLang]} {resultTextWho[store.currentLang]}{' '}
      {resultTextFor[store.currentLang]} {store.statYear}{' '}
      {resultTextYearRus[store.currentLang]}.
      <br />
      {store.userYears > store.valueYears &&
        resultTextLucky[store.currentLang]}{' '}
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
      <span className={styles.color}>
        {inflection(store.userYears, store.currentLang)}
      </span>
      , {resultTextCons[store.currentLang]}{' '}
      <span className={styles.color}>
        {((store.userYears / store.valueYears) * 100).toFixed(1)}%
      </span>{' '}
      {resultTextAfterPers[store.currentLang]}.
    </h2>
  );
};

export default ResultText;
