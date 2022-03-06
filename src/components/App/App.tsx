import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appLang } from '../../constants/app';

import { AppStateType } from '../../store/RootReducer';
import { InitialMainReducerType } from '../../store/MainReducer/types';

import { choseLang } from '../../store/Search/ducks';

import {
  selectLoadingFlag,
  selectChosenLang,
  selectFormFlag,
  selectResultFlag,
} from '../../store/Search/selectors/selectors';

import Select from '../../ui/Select';
import Disclaimer from '../Disclaimer';
import Form from '../Form';
import Result from '../Result';
import Loader from '../../ui/Loader';

import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();

  const lang: string = useSelector(selectChosenLang);
  const loading: boolean = useSelector(selectLoadingFlag);
  const formFlag: boolean = useSelector(selectFormFlag);
  const resultFlag: boolean = useSelector(selectResultFlag);

  const storeState = useSelector<AppStateType, InitialMainReducerType>(
    (store) => store.main,
  );

  const changeLang = (event: any) => {
    if (event.target.value) {
      dispatch(
        choseLang(
          event.target.value === 'Eng'
            ? Object.keys(appLang)[1]
            : Object.keys(appLang)[0],
        ),
      );
    }
  };

  console.log('App render');

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.appWrapper}>
          <header className={styles.header}>
            <Select
              onChange={changeLang}
              list={Object.values(appLang)}
              currentValue={
                lang === 'eng'
                  ? Object.values(appLang)[1]
                  : Object.values(appLang)[0]
              }
            />
          </header>

          {!formFlag && !resultFlag && <Disclaimer lang={lang} />}

          {formFlag && !resultFlag && <Form store={storeState} />}

          {!formFlag && resultFlag && <Result store={storeState} />}
        </div>
      )}
    </>
  );
}

export default App;
