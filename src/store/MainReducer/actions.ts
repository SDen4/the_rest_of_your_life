import { OPEN_FORM } from './constants';

export const openForm = (formFlag: boolean) => {
  return {
    type: OPEN_FORM,
    formFlag,
  } as const;
};

type openFormType = ReturnType<typeof openForm>;

export type ActionsType = openFormType;
