import { delay } from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';

function fetchApi() {
  return fetch('https://picsum.photos/200/200/?random')
    .then(res => res.url)
    .then(img => img);
}

function* fetchPost() {
  try {
    yield put(actions.fetchSagaLoading(true));
    yield delay(1000);
    const data = yield call(fetchApi);
    yield put(actions.fetchSaga(data));
    yield put(actions.fetchSagaLoading(false));
  } catch (error) {
    yield put(actions.fetchSagaError(true));
  }
}

export default function* watchFetch() {
  yield takeEvery('FETCH_SAGA', fetchPost);
}
