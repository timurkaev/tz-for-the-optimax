import {initialState, productsReducer} from './productsReducer';
import {ProductsActionType} from '../types/productsAction';

describe('Product reducer', () => {
  test('Test SET_PRODUCT', () => {
    expect(productsReducer(initialState, {type: ProductsActionType.FETCH_PRODUCTS_SUCCESS, payload: [
      {id: 1, name: 'Apple iPhone 13 Pro Sierra', price: 999, image: 'https://img.mvideo.ru/Big/30059058bb.jpg', amount: 4},
      {id: 2, name: 'Apple iPhone 13 Pro Max Sierra', price: 1099, image: 'https://img.mvideo.ru/Big/30059075bb.jpg', amount: 2},
      {id: 3, name: 'Apple iPhone 11 Black', price: 499, image: 'https://img.mvideo.ru/Big/30052942bb.jpg', amount: 8},
      {id: 4, name: 'Apple Macbook Pro 14 M1-Pro Space Gray', price: 1999, image: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/66add95ac3b39da11b500aa8fd6ab3c1/fa875d2a8c1e2a14e57fc50a510f75fc8e5e39a1d1e6fcb63dfae6433a4e7cf2.jpg.webp', amount: 3},
      {id: 5, name: 'Apple Macbook Pro 13 M1 Space Gray', price: 1299, image: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/64c83e30f4756bc944d1c0f5e488533c/7f5831d22271da8408efa91a72bab8778f8653a4c4a871021c487e4c12da17bc.jpg.webp', amount: 3},
      {id: 6, name: 'AirPods Pro', price: 249, image: 'https://img.mvideo.ru/Big/small_pic/480/50165904bb2.jpg', amount: 10}
    ]})).toEqual({
      ...initialState,
      items: [
        {id: 1, name: 'Apple iPhone 13 Pro Sierra', price: 999, image: 'https://img.mvideo.ru/Big/30059058bb.jpg', amount: 4},
        {id: 2, name: 'Apple iPhone 13 Pro Max Sierra', price: 1099, image: 'https://img.mvideo.ru/Big/30059075bb.jpg', amount: 2},
        {id: 3, name: 'Apple iPhone 11 Black', price: 499, image: 'https://img.mvideo.ru/Big/30052942bb.jpg', amount: 8},
        {id: 4, name: 'Apple Macbook Pro 14 M1-Pro Space Gray', price: 1999, image: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/66add95ac3b39da11b500aa8fd6ab3c1/fa875d2a8c1e2a14e57fc50a510f75fc8e5e39a1d1e6fcb63dfae6433a4e7cf2.jpg.webp', amount: 3},
        {id: 5, name: 'Apple Macbook Pro 13 M1 Space Gray', price: 1299, image: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/64c83e30f4756bc944d1c0f5e488533c/7f5831d22271da8408efa91a72bab8778f8653a4c4a871021c487e4c12da17bc.jpg.webp', amount: 3},
        {id: 6, name: 'AirPods Pro', price: 249, image: 'https://img.mvideo.ru/Big/small_pic/480/50165904bb2.jpg', amount: 10}
      ],
      loading: false

    });
  });
  test('Test SET_PRODUCTS_START', () => {
    expect(
        productsReducer(initialState, {
          type: ProductsActionType.FETCH_PRODUCTS_START,
        })
    ).toEqual({
      ...initialState,
      loading: true
    });
  });
});
