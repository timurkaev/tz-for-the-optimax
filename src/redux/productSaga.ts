import {call, put, takeLatest} from 'redux-saga/effects';
import {getProducts} from '../api/api';
import {fetchProductsSuccess, ProductsActionType} from './types/productsAction';


export function* fetchProducts() {
  try {
    const response: any[] = yield call(getProducts);
    yield put(fetchProductsSuccess(response));
  } catch {
    console.log('ERROR');
  }
}

export function* productsSaga() {
  yield takeLatest(ProductsActionType.FETCH_PRODUCTS_START, fetchProducts);
}
