import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appLang } from '../../constants/app';

import { choseLang } from '../../store/MainReducer/actions';

import { AppStateType } from '../../store/RootReducer';
import { InitialMainReducerType } from '../../store/MainReducer/types';

import Select from '../../ui/Select';

import Disclaimer from '../Disclaimer';
import Form from '../Form';
import Result from '../Result';

import styles from './App.module.css';
import { searchRequest } from '../../store/Search/ducks';

function App() {
  const dispatch = useDispatch();

  const storeState = useSelector<AppStateType, InitialMainReducerType>(
    (store) => store.main,
  );

  const changeLang = (event: any) => {
    if (event.target.value) {
      dispatch(choseLang(event.target.value));
    }
  };

  useEffect(() => {
    dispatch(searchRequest('Germany'));
  }, [dispatch]);

  return (
    <div className={styles.appWrapper}>
      <header className={styles.header}>
        <Select
          onChange={changeLang}
          list={Object.values(appLang)}
          currentValue={
            storeState.currentLang === 'eng'
              ? Object.values(appLang)[1]
              : Object.values(appLang)[0]
          }
        />
      </header>

      {!storeState.formFlag && !storeState.resultFlag && (
        <Disclaimer lang={storeState.currentLang} />
      )}

      {storeState.formFlag && !storeState.resultFlag && (
        <Form store={storeState} />
      )}

      {!storeState.formFlag && storeState.resultFlag && (
        <Result store={storeState} />
      )}
    </div>
  );
}

export default App;
