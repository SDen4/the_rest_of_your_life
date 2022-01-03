import { OPEN_FORM, CHOSE_COUNTRY, CHOSE_SEX } from './constants';

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

type openFormType = ReturnType<typeof openForm>;
type choseCountryType = ReturnType<typeof choseCountry>;
type choseSexType = ReturnType<typeof choseSex>;

export type ActionsType = openFormType | choseCountryType | choseSexType;
