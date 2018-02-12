import {
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  ADD_CART,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE
} from '../actionTypes';


export const fetchCart = () => ({
  type: FETCH_CART
});

export const fetchCartSuccess = (cart) => ({
  type: FETCH_CART_SUCCESS,
  cart
});

export const fetchCartFailure = (error) => ({
  type: FETCH_CART_FAILURE,
  error
});

export const addCart = (productId, quantity) => ({
  type: ADD_CART,
  productId,
  quantity 
});

export const addCartSuccess = (cart) => ({
  type: ADD_CART_SUCCESS,
  cart
});

export const addCartFailure = (error) => ({
  type: ADD_CART_FAILURE,
  error
});
