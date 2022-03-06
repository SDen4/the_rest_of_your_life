import * as CONST from './constants';

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

type saveResultType = ReturnType<typeof saveResult>;
type choseBirthDateType = ReturnType<typeof choseBirthDate>;

export type ActionsType = saveResultType | choseBirthDateType;
