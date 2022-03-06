import { combineReducers } from 'redux';

import { searchRootReducer } from './Search/ducks';

export const RootReducer = combineReducers({
  search: searchRootReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
