import {
  OPEN_FORM,
  CHOSE_COUNTRY,
  CHOSE_SEX,
  SAVE_RESULT,
  CHOSE_BIRTH_DATE,
  OPEN_RESULT,
} from './constants';
import { formSexList } from '../../constants/form';

import data from '../../data/data.json';

import { InitialMainReducerType } from './types';

import { ActionsType } from './actions';

const dataCountriesList = Array.from(
  new Set(data.fact.map((el) => el.dims.COUNTRY)),
);

const InitialState: InitialMainReducerType = {
  formFlag: false,
  resultFlag: false,
  countriesList: dataCountriesList,
  chosenCountry: dataCountriesList[0],
  chosenSex: formSexList.rus[0],
  valueYears: 0,
  statYear: 0,
  currentDate: new Date(),
  birthDate: new Date(),
};

export const MainReducer = (
  state = InitialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case OPEN_FORM:
      return { ...state, formFlag: action.formFlag };

    case OPEN_RESULT:
      return { ...state, resultFlag: action.resultFlag };

    case CHOSE_COUNTRY:
      return { ...state, chosenCountry: action.chosenCountry };

    case CHOSE_SEX:
      return { ...state, chosenSex: action.chosenSex };

    case SAVE_RESULT:
      return {
        ...state,
        valueYears: action.valueYears,
        statYear: action.statYear,
      };

    case CHOSE_BIRTH_DATE:
      return { ...state, birthDate: action.birthDate };

    default:
      return state;
  }
};
