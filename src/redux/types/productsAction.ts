import {Action} from 'redux';
import {ProductsState} from './productsState';

export enum ProductsActionType {
    FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
}

export interface IFetchProductsInterface extends Action <ProductsActionType> {
    type: ProductsActionType.FETCH_PRODUCTS_START
}
export const fetchProductsStart = (): IFetchProductsInterface => ({
  type: ProductsActionType.FETCH_PRODUCTS_START
});

export interface IFetchProductsSuccess extends Action <ProductsActionType> {
    type: ProductsActionType.FETCH_PRODUCTS_SUCCESS,
    payload: ProductsState['items']
}

export const fetchProductsSuccess = (payload: ProductsState['items']): IFetchProductsSuccess => ({
  type: ProductsActionType.FETCH_PRODUCTS_SUCCESS,
  payload
});

export type ProductsActions = IFetchProductsInterface | IFetchProductsSuccess
