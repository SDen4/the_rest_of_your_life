import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

import data from '../../../data/data.json';

const main = 'main';

const dataCountriesList = Array.from(
  new Set(data.fact.map((el) => el.dims.COUNTRY)),
);

// Actions ==========================
export const choseCountry = createAction<string>(`${main}/CHOSE_COUNTRY`);

// Reducers ==========================

const choseCountryItem = createReducer(dataCountriesList[0], {
  [choseCountry.toString()]: (_state, action) => action.payload,
});

// Root Reducer
const testReducer = combineReducers({ choseCountryItem });

export default testReducer;
