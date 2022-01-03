import { combineReducers } from 'redux';
import { MainReducer } from './MainReducer/MainReducer';

export const RootReducer = combineReducers({
  main: MainReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
