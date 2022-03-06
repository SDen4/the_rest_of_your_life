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
