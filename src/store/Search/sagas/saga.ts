import { put, takeEvery } from 'redux-saga/effects';

import { searchAdd, searchRequest } from '../ducks';

import { API } from '../../../utils/api';

async function getData(countryName: string) {
  const params: any = {
    // method: 'POST',
    body: JSON.stringify({
      q: countryName,
      source: 'en',
      target: 'es',
    }),
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await API.post('translate', params).then((res) => res.data);
  console.log(response);
  return response;
}

function* getSearchItem(action: any) {
  yield console.log(action);

  const translatedItem: string = yield getData(action.payload);

  yield console.log(translatedItem);

  yield put({
    type: searchAdd.toString(),
    payload: translatedItem,
  });
}

export function* rootSearchSaga() {
  yield takeEvery(searchRequest, getSearchItem);
}
