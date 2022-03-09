import React from 'react';
import { useSelector } from 'react-redux';
import { formSexList } from '../../../../constants/form';

import {
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
  resultTextYearRus
} from '../../../../constants/result';

import styles from './ResultText.module.css';
import inflection from '../../../../utils/inflection';
import {
  selectSearchItem,
  selectChosenSex,
  selectChosenLang,
  selectValueYears,
  selectStatYear,
  selectUserYears
} from '../../../../store/Search/selectors/selectors';

const ResultText: React.FC = () => {
  const country: string = useSelector(selectSearchItem);
  const sex: string = useSelector(selectChosenSex);
  const lang: string = useSelector(selectChosenLang);
  const valueYears: number = useSelector(selectValueYears);
  const statYears: number = useSelector(selectStatYear);
  const userYears: number = useSelector(selectUserYears);

  return (
    <h2>
      {country} {resultText1[lang]}{' '}
      {sex === formSexList.rus[0] || sex === formSexList.eng[0]
        ? resultTextMan[lang]
        : ''}
      {sex === formSexList.rus[1] || sex === formSexList.eng[1]
        ? resultTextWoman[lang]
        : ''}
      {sex === formSexList.eng[2] || sex === formSexList.rus[2] ? '' : ''}{' '}
      {resultTextIs[lang]}{' '}
      <span className={styles.color}>{inflection(valueYears, lang)}</span>
      .
      <br />
      {resultTextData[lang]} {resultTextWho[lang]} {resultTextFor[lang]}{' '}
      {statYears} {resultTextYearRus[lang]}.
      <br />
      {userYears > valueYears && resultTextLucky[lang]}{' '}
      {sex === formSexList.rus[0] ||
      sex === formSexList.eng[0] ||
      sex === formSexList.eng[2] ||
      sex === formSexList.rus[2]
        ? resultTextLivedMan[lang]
        : ''}{' '}
      {sex === formSexList.rus[1] || sex === formSexList.eng[1]
        ? resultTextLivedWoman[lang]
        : ''}{' '}
      <span className={styles.color}>{inflection(userYears, lang)}</span>,{' '}
      {resultTextCons[lang]}{' '}
      <span className={styles.color}>
        {((userYears / valueYears) * 100).toFixed(1)}%
      </span>{' '}
      {resultTextAfterPers[lang]}.
    </h2>
  );
};

export default ResultText;
