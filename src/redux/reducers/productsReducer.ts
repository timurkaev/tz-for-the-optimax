import {ProductsState} from '../types/productsState';
import {ProductsActions, ProductsActionType} from '../types/productsAction';

export const initialState: ProductsState = {
  items: [],
  loading: false
};

export const productsReducer = (state = initialState, action: ProductsActions) => {
  switch (action.type) {
    case ProductsActionType.FETCH_PRODUCTS_START:
      return {...state, loading: true};
    case ProductsActionType.FETCH_PRODUCTS_SUCCESS:
      return {...state, items: action.payload, loading: false};
    default: return state;
  }
};
