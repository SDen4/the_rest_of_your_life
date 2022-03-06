import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appLang } from '../../constants/app';

import { choseLang } from '../../store/MainReducer/actions';

import { AppStateType } from '../../store/RootReducer';
import { InitialMainReducerType } from '../../store/MainReducer/types';

import { selectLoadingFlag } from '../../store/Search/selectors/selectors';

import Select from '../../ui/Select';
import Disclaimer from '../Disclaimer';
import Form from '../Form';
import Result from '../Result';
import Loader from '../../ui/Loader';

import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();

  const loading: boolean = useSelector(selectLoadingFlag);

  const storeState = useSelector<AppStateType, InitialMainReducerType>(
    (store) => store.main,
  );

  const changeLang = (event: any) => {
    if (event.target.value) {
      dispatch(choseLang(event.target.value));
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
      )}
    </>
  );
}

export default App;
