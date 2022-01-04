import {
  OPEN_FORM,
  CHOSE_COUNTRY,
  CHOSE_SEX,
  SAVE_RESULT,
  CHOSE_BIRTH_DATE,
  OPEN_RESULT,
} from './constants';

export const openForm = (formFlag: boolean) => {
  return {
    type: OPEN_FORM,
    formFlag,
  } as const;
};

export const openResult = (resultFlag: boolean) => {
  return {
    type: OPEN_RESULT,
    resultFlag,
  } as const;
};

export const choseCountry = (chosenCountry: string) => {
  return {
    type: CHOSE_COUNTRY,
    chosenCountry,
  } as const;
};

export const choseSex = (chosenSex: string) => {
  return {
    type: CHOSE_SEX,
    chosenSex,
  } as const;
};

export const saveResult = (valueYears: number, statYear: number) => {
  return {
    type: SAVE_RESULT,
    valueYears,
    statYear,
  } as const;
};

export const choseBirthDate = (birthDate: Date) => {
  return {
    type: CHOSE_BIRTH_DATE,
    birthDate,
  } as const;
};

type openFormType = ReturnType<typeof openForm>;
type openResultType = ReturnType<typeof openResult>;
type choseCountryType = ReturnType<typeof choseCountry>;
type choseSexType = ReturnType<typeof choseSex>;
type saveResultType = ReturnType<typeof saveResult>;
type choseBirthDateType = ReturnType<typeof choseBirthDate>;

export type ActionsType =
  | openFormType
  | openResultType
  | choseCountryType
  | choseSexType
  | saveResultType
  | choseBirthDateType;
