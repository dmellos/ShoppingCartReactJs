import { put, fork, takeLatest, call } from 'redux-saga/effects';

import {
FETCH_CART,
ADD_CART,  
} from '../actionTypes';

import { 
  fetchCartSuccess, 
  fetchCartFailure,
  addCartSuccess,
  addCartFailure } from './action';

import * as cartApi from '../../libs/cart/api';

export function* fetchCart() {
  try {
    	const cart = yield call(cartApi.fetch);
    	yield put(fetchCartSuccess(cart));
  	  }
  catch(error) {
    	yield put(fetchCartFailure(error));
  	  }
}

export function* addCart(action) {
  try {
      const cart = yield call(cartApi.addToCart, action.productId, action.quantity);
      yield put(addCartSuccess(cart));
      }
  catch(error) {
      yield put(addCartFailure(error));
      }
}

export function* watchFetchCart() {
  yield takeLatest(FETCH_CART, fetchCart);
}

export function* watchAddCart() {
  yield takeLatest(ADD_CART, addCart);
}

export default function* () {
  yield fork(watchFetchCart);
  yield fork(watchAddCart);
}