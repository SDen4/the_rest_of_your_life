import * as CONST from './constants';

export const openForm = (formFlag: boolean) => {
  return {
    type: CONST.OPEN_FORM,
    formFlag,
  } as const;
};

export const openResult = (resultFlag: boolean) => {
  return {
    type: CONST.OPEN_RESULT,
    resultFlag,
  } as const;
};

export const choseSex = (chosenSex: string) => {
  return {
    type: CONST.CHOSE_SEX,
    chosenSex,
  } as const;
};

export const saveResult = (valueYears: number, statYear: number) => {
  return {
    type: CONST.SAVE_RESULT,
    valueYears,
    statYear,
  } as const;
};

export const choseBirthDate = (birthDate: Date) => {
  return {
    type: CONST.CHOSE_BIRTH_DATE,
    birthDate,
  } as const;
};

export const choseLang = (chosenLang: string) => {
  return {
    type: CONST.CHOSE_LANG,
    chosenLang,
  } as const;
};

type openFormType = ReturnType<typeof openForm>;
type openResultType = ReturnType<typeof openResult>;
type choseSexType = ReturnType<typeof choseSex>;
type saveResultType = ReturnType<typeof saveResult>;
type choseBirthDateType = ReturnType<typeof choseBirthDate>;
type choseLangType = ReturnType<typeof choseLang>;

export type ActionsType =
  | openFormType
  | openResultType
  | choseSexType
  | saveResultType
  | choseBirthDateType
  | choseLangType;
