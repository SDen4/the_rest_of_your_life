import { all, put, select, takeEvery } from 'redux-saga/effects';

import {
  form,
  result,
  saveBirthDate,
  saveResult,
  searchAdd,
  searchRequestSaga
} from '../ducks';

import data from '../../../data/data.json';

import { API } from '../../../utils/api';
import currentSexForSearch from '../../../utils/currentSexForSearch';

import {
  selectChosenSex,
  selectChosenLang,
  selectCurrentDate,
  selectCountry
} from '../../Search/selectors/selectors';

import { loading, birthDateSaga } from '../ducks';

import { getBirthDateSagaType, translatedItemType } from '../types/typesSearch';

async function getData(countryName: string) {
  const params = new URLSearchParams();
  params.append('source_language', 'en');
  params.append('target_language', 'ru');
  params.append('text', `In ${countryName}`);

  const config = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      'x-rapidapi-key': '98974f94fdmshf0e666910f99f56p166f4ejsn57d787efb8c9'
    }
  };

  const response = await API.post('translate', params, config).then(
    (res) => res.data
  );
  return response;
}

function* getSearchItem() {
  const country: string = yield select(selectCountry);
  const sex: string = yield select(selectChosenSex);
  const lang: string = yield select(selectChosenLang);

  let finalCountry: string = yield `In ${country}`;

  if (lang === 'rus') {
    yield put({ type: loading.toString(), payload: true });

    const translatedItem: translatedItemType = yield getData(country);

    if (
      translatedItem.status === 'success' &&
      translatedItem.data.translatedText
    ) {
      finalCountry = yield translatedItem.data.translatedText;
    }
  }

  yield put({
    type: searchAdd.toString(),
    payload: finalCountry
  });

  // from Form
  const currentSex: string = yield currentSexForSearch(sex);

  // range of relevant data by years
  const relevantRange = data.fact.filter(
    (el) =>
      el.dims.COUNTRY === country &&
      el.dims.SEX === currentSex &&
      el.dims.GHO === 'Life expectancy at birth (years)'
  );

  // find the data for the latest year of the range
  const totalData = relevantRange.sort((a, b) =>
    a.dims.YEAR > b.dims.YEAR ? -1 : 1
  )[0];

  const valueYears = Number(totalData.Value);
  const statYear = Number(totalData.dims.YEAR);

  yield all([
    put({ type: saveResult.toString(), payload: { valueYears, statYear } }),
    put({ type: form.toString(), payload: false }),
    put({ type: result.toString(), payload: true })
  ]);
}

function* getBirthDate(action: getBirthDateSagaType) {
  const birthDate: Date = yield action.payload;

  const end: Date = yield select(selectCurrentDate);
  const start: Date = yield birthDate;

  const userYears: number = yield (end.getTime() - start.getTime()) /
    1000 /
    60 /
    60 /
    24 /
    365;

  yield put({
    type: saveBirthDate.toString(),
    payload: { birthDate, userYears }
  });
}

export function* rootSearchSaga(): Generator<unknown> {
  yield takeEvery(searchRequestSaga, getSearchItem);
  yield takeEvery(birthDateSaga, getBirthDate);
}
