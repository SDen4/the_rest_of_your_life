import { combineReducers } from 'redux';
import testReducer from './MainReducer/ducks/duck';
import { MainReducer } from './MainReducer/MainReducer';
import { searchRootReducer } from './Search/ducks';

export const RootReducer = combineReducers({
  main: MainReducer,
  test: testReducer,
  search: searchRootReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
