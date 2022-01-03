import React from 'react';
import { useSelector } from 'react-redux';
import { InitialMainReducerType } from '../../store/MainReducer/types';

import { AppStateType } from '../../store/RootReducer';

import Disclaimer from '../Disclaimer';
import Form from '../Form';

import styles from './App.module.css';

function App() {
  const storeState = useSelector<AppStateType, InitialMainReducerType>(
    (store) => store.main,
  );

  return (
    <div className={styles.appWrapper}>
      {!storeState.formFlag ? (
        <Disclaimer />
      ) : (
        <Form countriesList={storeState.countriesList} />
      )}
    </div>
  );
}

export default App;
