import { OPEN_FORM, CHOSE_COUNTRY } from './constants';

import data from '../../data/data.json';

import { InitialMainReducerType } from './types';

import { ActionsType } from './actions';

const dataCountriesList = Array.from(
  new Set(data.fact.map((el) => el.dims.COUNTRY)),
);

const InitialState: InitialMainReducerType = {
  formFlag: false,
  countriesList: dataCountriesList,
  chosenCountry: dataCountriesList[0],
};

export const MainReducer = (
  state = InitialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case OPEN_FORM:
      return { ...state, formFlag: action.formFlag };

    case CHOSE_COUNTRY:
      return { ...state, chosenCountry: action.chosenCountry };

    default:
      return state;
  }
};
