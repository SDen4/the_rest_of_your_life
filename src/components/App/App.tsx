import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appLang } from '../../constants/app';

import { choseLang } from '../../store/Search/ducks';

import {
  selectLoadingFlag,
  selectChosenLang,
  selectFormFlag,
  selectResultFlag
} from '../../store/Search/selectors/selectors';

import Disclaimer from '../Disclaimer';

import Select from '../../ui/Select';
import Loader from '../../ui/Loader';

import styles from './App.module.css';

const LazyResult = React.lazy(() => import('../Result'));
const LazyForm = React.lazy(() => import('../Form'));

function App(): JSX.Element {
  const dispatch = useDispatch();

  const lang: string = useSelector(selectChosenLang);
  const loading: boolean = useSelector(selectLoadingFlag);
  const formFlag: boolean = useSelector(selectFormFlag);
  const resultFlag: boolean = useSelector(selectResultFlag);

  // app height
  const [appHeight, setAppHeight] = useState<number>(0);
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

  return (
    <>
      {loading ? (
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

          {!formFlag && !resultFlag && <Disclaimer lang={lang} />}

          {formFlag && !resultFlag && (
            <Suspense fallback={<Loader />}>
              <LazyForm />
            </Suspense>
          )}

          {!formFlag && resultFlag && (
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
