import {
	FETCH_CART,
	FETCH_CART_SUCCESS,
	FETCH_CART_FAILURE,
	ADD_TO_CART,
	ADD_TO_CART_SUCCESS,
	ADD_TO_CART_FAILURE,
} from "./actionTypes";

import * as cartAPI from "./cartAPI";

export function fetchCart() {
	return function (dispatch) {
		dispatch({ type: FETCH_CART });
		
		cartAPI.fetch()
			.then((response) => {
				dispatch({ type: FETCH_CART_SUCCESS, cart: { items: response.items }})
			})
			.catch((err) => {
				dispatch({ type: FETCH_CART_FAILURE, error: err })
			})

		// return {
		// 	type: FETCH_CART,
		// 	payload: fetchRecipes().payload
		// 		.filter((recipe) => {
		// 			return recipe.featured;
		// 		})
		// }
	}
}

export const fetchCartSuccess = (cart) => ({
	type: FETCH_CART_SUCCESS,
	cart,
});

export const fetchCartFailure = (error) => ({
	type: FETCH_CART_FAILURE,
	error
});

export function addToCart(productId, quantity) {
	return function (dispatch) {
		console.log('productId',productId);
		dispatch({
			type: ADD_TO_CART,
			productId,
			quantity,
		});

		cartAPI.addToCart(productId, quantity)
			.then((response) => {
				dispatch({ type: ADD_TO_CART_SUCCESS, cart: { items: response.items } })
			})
			.catch((err) => {
				dispatch({ type: ADD_TO_CART_FAILURE, error: err })
			})
	}
}

export const addToCartSuccess = (cart) => ({
	type: ADD_TO_CART_SUCCESS,
	cart,
});

export const addToCartFailure = (error) => ({
	type: ADD_TO_CART_FAILURE,
	error,
});
