import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  selectIsLoading,
  selectChosenLang,
  selectIsForm,
  selectIsResult
} from '../../store/Search/selectors/selectors';

import { Disclaimer } from '../Disclaimer';
import { Header } from '../Header';
import { Loader } from '../../ui/Loader';

import styles from './App.module.css';

const LazyResult = React.lazy(() => import('../Result'));
const LazyForm = React.lazy(() => import('../Form'));

function App(): JSX.Element {
  const lang = useSelector(selectChosenLang);
  const isLoading = useSelector(selectIsLoading);
  const isForm = useSelector(selectIsForm);
  const isResult = useSelector(selectIsResult);

  // app height
  const [appHeight, setAppHeight] = useState(0);
  useEffect(() => {
    setAppHeight(window.innerHeight);
  }, []);

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
          <Header />

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
