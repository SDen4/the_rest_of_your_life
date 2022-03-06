import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const search = 'search';

// Actions ==========================
export const searchRequest = createAction<string>(`${search}/SEARCH_REQUEST`);
export const searchAdd = createAction<string>(`${search}/SEARCH_ADD`);

// Reducers ==========================

const searchItem = createReducer('', {
  [searchAdd.toString()]: (_state, action) => action.payload,
});

// Root Reducer
const searchRootReducer = combineReducers({ searchItem });

export default searchRootReducer;
