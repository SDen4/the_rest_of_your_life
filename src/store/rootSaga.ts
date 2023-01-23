import { fork, all } from 'redux-saga/effects';

import { rootSearchSaga } from './Search/sagas/saga';

export function* rootSaga(): Generator<unknown> {
  yield all([fork(rootSearchSaga)]);
}
