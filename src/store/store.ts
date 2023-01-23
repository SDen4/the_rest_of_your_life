import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
  devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleWare.run(rootSaga);
