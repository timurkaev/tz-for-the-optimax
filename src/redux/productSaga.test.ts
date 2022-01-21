import {ProductsActionType} from './types/productsAction';
import {initialState, productsReducer} from './reducers/productsReducer';

describe('actions', () => {
  let items: [];
  test('should FETCH_PRODUCTS_SUCCESS action', () => {
    const action = {
      type: ProductsActionType.FETCH_PRODUCTS_SUCCESS,
      payload: items
    };
    expect(productsReducer(initialState, action));
  });
});
