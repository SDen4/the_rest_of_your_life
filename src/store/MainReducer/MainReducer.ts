import { OPEN_FORM } from './constants';

import { InitialMainReducerType } from './types';

import { ActionsType } from './actions';

const InitialState: InitialMainReducerType = {
  formFlag: false,
};

export const MainReducer = (
  state = InitialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case OPEN_FORM:
      return {
        ...state,
        formFlag: action.formFlag,
      };

    default:
      return state;
  }
};
