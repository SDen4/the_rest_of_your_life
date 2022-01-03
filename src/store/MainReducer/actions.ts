import { OPEN_FORM, CHOSE_COUNTRY } from './constants';

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

type openFormType = ReturnType<typeof openForm>;
type choseCountryType = ReturnType<typeof choseCountry>;

export type ActionsType = openFormType | choseCountryType;
