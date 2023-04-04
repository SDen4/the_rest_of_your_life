import { combineReducers, createAction, createReducer } from '@reduxjs/toolkit';

import type { saveBirthDateType, saveResultType } from '../../../model/types';
import type { constType } from '../../../model/types';

import { appLang } from '../../../constants/app';
import { formSexList } from '../../../constants/form';

import data from '../../../data/data.json';

const dataCountriesList = Array.from(
  new Set(data.fact.map((el) => el.dims.COUNTRY))
);

const main = 'main';

// Actions ==========================
export const searchRequestSaga = createAction(`${main}/SEARCH_REQUEST`);
export const birthDateSaga = createAction<Date>(`${main}/BIRTH_DATE`);
export const searchAdd = createAction<string>(`${main}/SEARCH_ADD`);
export const choseCountry = createAction<string>(`${main}/CHOSE_COUNTRY`);
export const choseSex = createAction<string>(`${main}/CHOSE_SEX`);
export const choseLang = createAction<keyof constType>(`${main}/CHOSE_LANG`);
export const saveResult = createAction<saveResultType>(`${main}/SAVE_RESULT`);
export const saveBirthDate = createAction<saveBirthDateType>(
  `${main}/SAVE_BIRTH`
);
export const loading = createAction<boolean>(`${main}/IS_LOADING`);
export const form = createAction<boolean>(`${main}/IS_FORM`);
export const result = createAction<boolean>(`${main}/IS_RESULT`);

// Reducers ==========================
const searchItem = createReducer('', {
  [searchAdd.toString()]: (_state, action) => action.payload
});

const choseCountryItem = createReducer(dataCountriesList[0], {
  [choseCountry.toString()]: (_state, action) => action.payload
});

const chosenSex = createReducer(formSexList.rus[0], {
  [choseSex.toString()]: (_state, action) => action.payload
});

const chosenLang = createReducer(Object.keys(appLang)[0] as keyof constType, {
  [choseLang.toString()]: (_state, action) => action.payload
});

const savedResult = createReducer(
  {
    valueYears: 0,
    statYear: 0
  },
  {
    [saveResult.toString()]: (_state, action) => action.payload
  }
);

const savedBirthDate = createReducer(
  {
    birthDate: new Date(),
    userYears: 0
  },
  {
    [saveBirthDate.toString()]: (_state, action) => action.payload
  }
);

const savedInitData = createReducer(
  {
    currentDate: new Date(),
    countriesList: dataCountriesList
  },
  {}
);

const isLoading = createReducer(false, {
  [result.toString()]: () => false,
  [loading.toString()]: (_state, action) => action.payload
});

const isForm = createReducer(false, {
  [form.toString()]: (_state, action) => action.payload
});

const isResult = createReducer(false, {
  [result.toString()]: (_state, action) => action.payload,
  [loading.toString()]: () => false
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
  isLoading,
  isForm,
  isResult
});

export default mainRootReducer;
