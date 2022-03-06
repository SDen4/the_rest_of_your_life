import { combineReducers } from 'redux';

import { mainRootReducer } from './Search/ducks';

export const RootReducer = combineReducers({
  main: mainRootReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
