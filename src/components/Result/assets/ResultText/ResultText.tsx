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
import {
  selectSearchItem,
  selectChosenSex,
  selectChosenLang,
} from '../../../../store/Search/selectors/selectors';

const ResultText: React.FC<IResultText> = ({ store }) => {
  const country: string = useSelector(selectSearchItem);
  const sex: string = useSelector(selectChosenSex);
  const lang: string = useSelector(selectChosenLang);

  return (
    <h2>
      {resultIn[lang]} {country} {resultText1[lang]}{' '}
      {sex === formSexList.rus[0] || sex === formSexList.eng[0]
        ? resultTextMan[lang]
        : ''}
      {sex === formSexList.rus[1] || sex === formSexList.eng[1]
        ? resultTextWoman[lang]
        : ''}
      {sex === formSexList.eng[2] || sex === formSexList.rus[2] ? '' : ''}{' '}
      {resultTextIs[lang]}{' '}
      <span className={styles.color}>{inflection(store.valueYears, lang)}</span>
      .
      <br />
      {resultTextData[lang]} {resultTextWho[lang]} {resultTextFor[lang]}{' '}
      {store.statYear} {resultTextYearRus[lang]}.
      <br />
      {store.userYears > store.valueYears && resultTextLucky[lang]}{' '}
      {sex === formSexList.rus[0] ||
      sex === formSexList.eng[0] ||
      sex === formSexList.eng[2] ||
      sex === formSexList.rus[2]
        ? resultTextLivedMan[lang]
        : ''}{' '}
      {sex === formSexList.rus[1] || sex === formSexList.eng[1]
        ? resultTextLivedWoman[lang]
        : ''}{' '}
      <span className={styles.color}>{inflection(store.userYears, lang)}</span>,{' '}
      {resultTextCons[lang]}{' '}
      <span className={styles.color}>
        {((store.userYears / store.valueYears) * 100).toFixed(1)}%
      </span>{' '}
      {resultTextAfterPers[lang]}.
    </h2>
  );
};

export default ResultText;
