import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Select from '../../ui/Select';

import { selectChosenLang } from '../../../store/Search/selectors/selectors';
import { choseLang } from '../../../store/Search/ducks';

import type { constType } from '../../../model/types';

import { appLang } from '../../../constants/app';

import styles from './styles.module.css';

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();

  const lang = useSelector(selectChosenLang);

  const changeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) {
      const value =
        event.target.value === 'Eng'
          ? Object.keys(appLang)[1]
          : Object.keys(appLang)[0];

      dispatch(choseLang(value as keyof constType));
    }
  };

  return (
    <header className={styles.header}>
      <Select
        onChange={changeLang}
        list={Object.values(appLang)}
        currentValue={
          lang === 'eng' ? Object.values(appLang)[1] : Object.values(appLang)[0]
        }
      />
    </header>
  );
};
