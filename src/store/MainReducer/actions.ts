import { OPEN_FORM, CHOSE_COUNTRY, CHOSE_SEX, SAVE_RESULT } from './constants';

export const openForm = (formFlag: boolean) => {
  return {
    type: OPEN_FORM,
    formFlag,
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

type openFormType = ReturnType<typeof openForm>;
type choseCountryType = ReturnType<typeof choseCountry>;
type choseSexType = ReturnType<typeof choseSex>;
type saveResultType = ReturnType<typeof saveResult>;

export type ActionsType =
  | openFormType
  | choseCountryType
  | choseSexType
  | saveResultType;
