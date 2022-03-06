import { put, select, takeEvery } from 'redux-saga/effects';

import { searchAdd, searchRequest } from '../ducks';

import data from '../../../data/data.json';

import { API } from '../../../utils/api';
import currentSexForSearch from '../../../utils/currentSexForSearch';

import { selectCountry } from '../../MainReducer/selectors/selectors';

import { openForm, openResult, saveResult } from '../../MainReducer/actions';

import { loading } from '../ducks/duck';

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
  return response;
}

function* getSearchItem(action: any) {
  const country: string = yield select(selectCountry);
  let finalCountry: string = yield country;

  if (action.payload.lang === 'rus') {
    yield put({ type: loading.toString(), payload: true });
    const translatedItem: {
      data: { translatedText: string };
      status: 'success' | 'error';
    } = yield getData(country);

    if (
      translatedItem.status === 'success' &&
      translatedItem.data.translatedText
    ) {
      finalCountry = yield translatedItem.data.translatedText;
    }
  }

  yield put({
    type: searchAdd.toString(),
    payload: finalCountry,
  });

  // from Form
  const curSex: string = yield action.payload.sex;
  let currentSex: string = yield currentSexForSearch(curSex);

  // range of relevant data by years
  const relevantRange = data.fact.filter(
    (el) =>
      el.dims.COUNTRY === country &&
      el.dims.SEX === currentSex &&
      el.dims.GHO === 'Life expectancy at birth (years)',
  );

  // find the data for the latest year of the range
  const totalData = relevantRange.sort((a, b) =>
    a.dims.YEAR > b.dims.YEAR ? -1 : 1,
  )[0];

  const valueYears = Number(totalData.Value);
  const statYear = Number(totalData.dims.YEAR);

  yield put(saveResult(valueYears, statYear));
  yield put(openForm(false));
  yield put(openResult(true));
  yield put({ type: loading.toString(), payload: false });
}

export function* rootSearchSaga() {
  yield takeEvery(searchRequest, getSearchItem);
}
