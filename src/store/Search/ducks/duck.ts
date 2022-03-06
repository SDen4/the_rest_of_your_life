import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

import { formSexList } from '../../../constants/form';
import { appLang } from '../../../constants/app';

import data from '../../../data/data.json';

const dataCountriesList = Array.from(
  new Set(data.fact.map((el) => el.dims.COUNTRY)),
);

const main = 'main';

// Actions ==========================
export const searchRequestSaga = createAction(`${main}/SEARCH_REQUEST`);
export const birthDateSaga = createAction<Date>(`${main}/BIRTH_DATE`);

export const searchAdd = createAction<string>(`${main}/SEARCH_ADD`);
export const choseCountry = createAction<string>(`${main}/CHOSE_COUNTRY`);
export const choseSex = createAction<string>(`${main}/CHOSE_SEX`);
export const choseLang = createAction<string>(`${main}/CHOSE_LANG`);
export const saveResult = createAction<{
  valueYears: number;
  statYear: number;
}>(`${main}/SAVE_RESULT`);
export const saveBirthDate = createAction<{
  birthDate: Date;
  userYears: number;
}>(`${main}/SAVE_BIRTH`);

export const loading = createAction<boolean>(`${main}/LOADING`);
export const form = createAction<boolean>(`${main}/FORM_FLAG`);
export const result = createAction<boolean>(`${main}/RESULT_FLAG`);

// Reducers ==========================
const searchItem = createReducer('', {
  [searchAdd.toString()]: (_state, action) => action.payload,
});

const choseCountryItem = createReducer(dataCountriesList[0], {
  [choseCountry.toString()]: (_state, action) => action.payload,
});

const chosenSex = createReducer(formSexList.rus[0], {
  [choseSex.toString()]: (_state, action) => action.payload,
});

const chosenLang = createReducer(Object.keys(appLang)[0], {
  [choseLang.toString()]: (_state, action) => action.payload,
});

const savedResult = createReducer(
  {
    valueYears: 0,
    statYear: 0,
  },
  {
    [saveResult.toString()]: (_state, action) => action.payload,
  },
);

const savedBirthDate = createReducer(
  {
    birthDate: new Date(),
    userYears: 0,
  },
  {
    [saveBirthDate.toString()]: (_state, action) => action.payload,
  },
);

const savedInitData = createReducer(
  {
    currentDate: new Date(),
    countriesList: dataCountriesList,
  },
  {},
);

const loadingFlag = createReducer(false, {
  [loading.toString()]: (_state, action) => action.payload,
});

const formFlag = createReducer(false, {
  [form.toString()]: (_state, action) => action.payload,
});

const resultFlag = createReducer(false, {
  [result.toString()]: (_state, action) => action.payload,
});

// Root Reducer
const mainRootReducer = combineReducers({
  searchItem,
  chosenSex,
  choseCountryItem,
  chosenLang,
  savedResult,
  savedBirthDate,
  savedInitData,
  loadingFlag,
  formFlag,
  resultFlag,
});

export default mainRootReducer;
