import {all} from 'redux-saga/effects';
import {productsSaga} from './productSaga';

export default function* rootSaga() {
  yield all([
    productsSaga()
  ]);
}
