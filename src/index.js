import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './state/store';
import { Provider } from 'react-redux';
import './libs/cart/api';

//import { fetchProducts} from './state/product/action';
//import { fetchCart} from './state/cart/action';
//import { addCart} from './state/cart/action';
//import * as productApi from './libs/product/api';

//Listing products on console
//productApi.fetchAll().then((products)=>console.log('All Products',products)); 

const store = configureStore({});

//store.dispatch(fetchCart());
//store.dispatch(addCart('5a80c18da4d4de7d09e7655b', 88));

//console.log(store.getState());

ReactDOM.render(
				<Provider store={store}>
				<App />
				</Provider>, 
				document.getElementById('root')
			);
