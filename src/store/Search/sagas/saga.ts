import { put, takeEvery } from 'redux-saga/effects';

import { searchAdd, searchRequest } from '../ducks';

import { API } from '../../../utils/api';

async function getData(countryName: string) {
  const params = new URLSearchParams();
  params.append('source_language', 'en');
  params.append('target_language', 'ru');
  params.append('text', countryName);

  const config = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      'x-rapidapi-key': '98974f94fdmshf0e666910f99f56p166f4ejsn57d787efb8c9',
    },
  };

  const response = await API.post('translate', params, config).then(
    (res) => res.data,
  );
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
