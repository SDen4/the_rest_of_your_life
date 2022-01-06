import {
  OPEN_FORM,
  CHOSE_COUNTRY,
  CHOSE_SEX,
  SAVE_RESULT,
  CHOSE_BIRTH_DATE,
  OPEN_RESULT,
  CHOSE_LANG,
} from './constants';
import { formSexList } from '../../constants/form';
import { appLang } from '../../constants/app';

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
  userYears: 0,
  currentLang: Object.keys(appLang)[0],
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
      const end = state.currentDate.getTime();
      const start = action.birthDate.getTime();
      const userYears = (end - start) / 1000 / 60 / 60 / 24 / 365;
      return { ...state, birthDate: action.birthDate, userYears: userYears };

    case CHOSE_LANG:
      return {
        ...state,
        currentLang:
          action.chosenLang === 'Eng'
            ? Object.keys(appLang)[1]
            : Object.keys(appLang)[0],
      };

    default:
      return state;
  }
};
