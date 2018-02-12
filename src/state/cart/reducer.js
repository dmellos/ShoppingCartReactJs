import {
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  ADD_CART,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
} from '../actionTypes';


const initialState = {
	isLoading: false,
	cart:[],
	error:null,
};

export default (state = initialState, action) => {
	switch(action.type){
		
		case FETCH_CART:
		case ADD_CART:
			return{
				...state,
				isLoading: true,
			};

		case FETCH_CART_SUCCESS:
		case ADD_CART_SUCCESS:
			return{
				...state,
				isLoading: false,
				cart: action.cart,
			};

		case FETCH_CART_FAILURE:
		case ADD_CART_FAILURE: 
			return{
				...state,
				isLoading: false,
				error: action.error,
			};
		default:
			return state;
	}
}