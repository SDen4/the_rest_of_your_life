import * as CONST from './constants';

export const choseBirthDate = (birthDate: Date) => {
  return {
    type: CONST.CHOSE_BIRTH_DATE,
    birthDate,
  } as const;
};

type choseBirthDateType = ReturnType<typeof choseBirthDate>;

export type ActionsType = choseBirthDateType;
