import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '../../rootReducer';

export const selectSearchItem = createSelector(
  (store: AppStateType) => store.main.searchItem,
  (searchItem) => searchItem
);

export const selectChosenSex = createSelector(
  (store: AppStateType) => store.main.chosenSex,
  (chosenSex) => chosenSex
);

export const selectChosenLang = createSelector(
  (store: AppStateType) => store.main.chosenLang,
  (chosenLang) => chosenLang
);

export const selectIsLoading = createSelector(
  (store: AppStateType) => store.main.isLoading,
  (isLoading) => isLoading
);

export const selectIsForm = createSelector(
  (store: AppStateType) => store.main.isForm,
  (isForm) => isForm
);

export const selectIsResult = createSelector(
  (store: AppStateType) => store.main.isResult,
  (isResult) => isResult
);

export const selectValueYears = createSelector(
  (store: AppStateType) => store.main.savedResult.valueYears,
  (valueYears) => valueYears
);

export const selectStatYear = createSelector(
  (store: AppStateType) => store.main.savedResult.statYear,
  (chosenLang) => chosenLang
);

export const selectBirthDate = createSelector(
  (store: AppStateType) => store.main.savedBirthDate.birthDate,
  (birthDate) => birthDate
);

export const selectUserYears = createSelector(
  (store: AppStateType) => store.main.savedBirthDate.userYears,
  (userYears) => userYears
);

export const selectCurrentDate = createSelector(
  (store: AppStateType) => store.main.savedInitData.currentDate,
  (currentDate) => currentDate
);

export const selectCountriesList = createSelector(
  (store: AppStateType) => store.main.savedInitData.countriesList,
  (countriesList) => countriesList
);

export const selectCountry = createSelector(
  (store: AppStateType) => store.main.choseCountryItem,
  (choseCountryItem) => choseCountryItem
);
