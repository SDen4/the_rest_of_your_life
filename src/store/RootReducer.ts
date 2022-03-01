import { combineReducers } from 'redux';
import { MainReducer } from './MainReducer/MainReducer';
import { searchRootReducer } from './Search/ducks';

export const RootReducer = combineReducers({
  main: MainReducer,
  search: searchRootReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
