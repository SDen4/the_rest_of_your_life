import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

import { formSexList } from '../../../constants/form';
import { appLang } from '../../../constants/app';

const search = 'search';

// Actions ==========================
export const searchRequest = createAction<{ sex: string; lang: string }>(
  `${search}/SEARCH_REQUEST`,
);
export const searchAdd = createAction<string>(`${search}/SEARCH_ADD`);
export const loading = createAction<boolean>(`${search}/LOADING`);
export const choseSex = createAction<string>(`${search}/CHOSE_SEX`);
export const choseLang = createAction<string>(`${search}/CHOSE_LANG`);

// Reducers ==========================

const searchItem = createReducer('', {
  [searchAdd.toString()]: (_state, action) => action.payload,
});

const loadingFlag = createReducer(false, {
  [loading.toString()]: (_state, action) => action.payload,
});

const chosenSex = createReducer(formSexList.rus[0], {
  [choseSex.toString()]: (_state, action) => action.payload,
});

const chosenLang = createReducer(Object.keys(appLang)[0], {
  [choseLang.toString()]: (_state, action) => action.payload,
});

// Root Reducer
const searchRootReducer = combineReducers({
  searchItem,
  loadingFlag,
  chosenSex,
  chosenLang,
});

export default searchRootReducer;
