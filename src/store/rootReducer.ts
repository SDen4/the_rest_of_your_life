import { combineReducers } from '@reduxjs/toolkit';

import { mainRootReducer } from './Search/ducks';

export const rootReducer = combineReducers({
  main: mainRootReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;
