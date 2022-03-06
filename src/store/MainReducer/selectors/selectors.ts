import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '../../../store/RootReducer';

// export const selectSex = createSelector(
//   (store: AppStateType) => store.main.chosenSex,
//   (MainReducer) => MainReducer,
// );

export const selectCountry = createSelector(
  (store: AppStateType) => store.test.choseCountryItem,
  (choseCountryItem) => choseCountryItem,
);
