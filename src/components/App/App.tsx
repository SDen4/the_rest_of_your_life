import React from 'react';
import { useSelector } from 'react-redux';

import { appLang } from '../../constants/app';

import { AppStateType } from '../../store/RootReducer';
import { InitialMainReducerType } from '../../store/MainReducer/types';

import Select from '../../ui/Select';

import Disclaimer from '../Disclaimer';
import Form from '../Form';
import Result from '../Result';

import styles from './App.module.css';

function App() {
  const storeState = useSelector<AppStateType, InitialMainReducerType>(
    (store) => store.main,
  );

  return (
    <div className={styles.appWrapper}>
      <header className={styles.header}>
        <Select
          onChange={() => null}
          list={appLang}
          currentValue={appLang[0]}
        />
      </header>

      {!storeState.formFlag && !storeState.resultFlag && <Disclaimer />}

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
