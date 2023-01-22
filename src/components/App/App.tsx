import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appLang } from '../../constants/app';

import { choseLang } from '../../store/Search/ducks';

import {
  selectIsLoading,
  selectChosenLang,
  selectIsForm,
  selectIsResult
} from '../../store/Search/selectors/selectors';

import Disclaimer from '../Disclaimer';

import Select from '../../ui/Select';
import Loader from '../../ui/Loader';

import styles from './App.module.css';

const LazyResult = React.lazy(() => import('../Result'));
const LazyForm = React.lazy(() => import('../Form'));

function App(): JSX.Element {
  const dispatch = useDispatch();

  const lang = useSelector(selectChosenLang);
  const isLoading = useSelector(selectIsLoading);
  const isForm = useSelector(selectIsForm);
  const isResult = useSelector(selectIsResult);

  // app height
  const [appHeight, setAppHeight] = useState(0);
  useEffect(() => {
    setAppHeight(window.innerHeight);
  }, []);

  const changeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) {
      dispatch(
        choseLang(
          event.target.value === 'Eng'
            ? Object.keys(appLang)[1]
            : Object.keys(appLang)[0]
        )
      );
    }
  };

  useEffect(() => {
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      event.returnValue = '';
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className={styles.appWrapper} style={{ minHeight: appHeight }}>
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

          {!isForm && !isResult && <Disclaimer lang={lang} />}

          {isForm && !isResult && (
            <Suspense fallback={<Loader />}>
              <LazyForm />
            </Suspense>
          )}

          {!isForm && isResult && (
            <Suspense fallback={<Loader />}>
              <LazyResult />
            </Suspense>
          )}
        </main>
      )}
    </>
  );
}

export default App;
