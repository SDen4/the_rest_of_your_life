import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const search = 'search';

// Actions ==========================
export const searchRequest = createAction<{ sex: string; lang: string }>(
  `${search}/SEARCH_REQUEST`,
);
export const searchAdd = createAction<string>(`${search}/SEARCH_ADD`);
export const loading = createAction<boolean>(`${search}/LOADING`);

// Reducers ==========================

const searchItem = createReducer('', {
  [searchAdd.toString()]: (_state, action) => action.payload,
});

const loadingFlag = createReducer(false, {
  [loading.toString()]: (_state, action) => action.payload,
});

// Root Reducer
const searchRootReducer = combineReducers({ searchItem, loadingFlag });

export default searchRootReducer;
