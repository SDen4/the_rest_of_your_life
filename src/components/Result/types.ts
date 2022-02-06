import { InitialMainReducerType } from '../../store/MainReducer/types';

export interface IResult {
  store: InitialMainReducerType;
}

export type StateItemType = 'table' | 'years' | 'weeks' | 'final';

export type StateType = StateItemType[];
