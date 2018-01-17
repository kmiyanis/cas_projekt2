import {
	FETCH_CART,
	FETCH_CART_SUCCESS,
	FETCH_CART_FAILURE,
	ADD_TO_CART,
	ADD_TO_CART_SUCCESS,
	ADD_TO_CART_FAILURE,
  EMPTY_CART,
  EMPTY_CART_SUCCESS,
  EMPTY_CART_FAILURE,
} from "../actions/actionTypes";

const initialState = {
	isLoading: false,
	fetched: false,
	cart: { items : [] },
	error: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CART:
		case ADD_TO_CART:
		case EMPTY_CART:
			return {
				...state,
				isLoading: true,
			}
		case EMPTY_CART:
			return {
				...state,
				isLoading: true,
			}
	
		case FETCH_CART_SUCCESS:
		case ADD_TO_CART_SUCCESS:
			return {
				...state,
				isLoading: false,
				fetched: true,
				cart: action.cart,
			}
	
		case EMPTY_CART_SUCCESS:
			return {
				...state,
				isLoading: false,
				fetched: true,
        cart: { items : [] }
			}

		case FETCH_CART_FAILURE:
		case FETCH_CART_FAILURE:
		case EMPTY_CART_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.error,
			}

		default:
			return state;
	}
}