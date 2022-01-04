import React from 'react';
import { useSelector } from 'react-redux';
import { InitialMainReducerType } from '../../store/MainReducer/types';

import { AppStateType } from '../../store/RootReducer';

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
