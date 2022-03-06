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

type openFormType = ReturnType<typeof openForm>;
type openResultType = ReturnType<typeof openResult>;
type saveResultType = ReturnType<typeof saveResult>;
type choseBirthDateType = ReturnType<typeof choseBirthDate>;

export type ActionsType =
  | openFormType
  | openResultType
  | saveResultType
  | choseBirthDateType;
