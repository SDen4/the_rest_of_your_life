import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '../../../store/RootReducer';

export const selectSearchItem = createSelector(
  (store: AppStateType) => store.search.searchItem,
  (searchItem) => searchItem,
);

export const selectLoadingFlag = createSelector(
  (store: AppStateType) => store.search.loadingFlag,
  (loadingFlag) => loadingFlag,
);

export const selectChosenSex = createSelector(
  (store: AppStateType) => store.search.chosenSex,
  (chosenSex) => chosenSex,
);

export const selectChosenLang = createSelector(
  (store: AppStateType) => store.search.chosenLang,
  (chosenLang) => chosenLang,
);
