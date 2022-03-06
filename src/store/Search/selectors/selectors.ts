import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '../../../store/RootReducer';

export const selectSearchItem = createSelector(
  (store: AppStateType) => store.search.searchItem,
  (searchItem) => searchItem,
);

export const selectChosenSex = createSelector(
  (store: AppStateType) => store.search.chosenSex,
  (chosenSex) => chosenSex,
);

export const selectChosenLang = createSelector(
  (store: AppStateType) => store.search.chosenLang,
  (chosenLang) => chosenLang,
);

export const selectLoadingFlag = createSelector(
  (store: AppStateType) => store.search.loadingFlag,
  (loadingFlag) => loadingFlag,
);

export const selectFormFlag = createSelector(
  (store: AppStateType) => store.search.formFlag,
  (formFlag) => formFlag,
);

export const selectResultFlag = createSelector(
  (store: AppStateType) => store.search.resultFlag,
  (resultFlag) => resultFlag,
);

export const selectValueYears = createSelector(
  (store: AppStateType) => store.search.savedResult.valueYears,
  (valueYears) => valueYears,
);

export const selectStatYear = createSelector(
  (store: AppStateType) => store.search.savedResult.statYear,
  (chosenLang) => chosenLang,
);
