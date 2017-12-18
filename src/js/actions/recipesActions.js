import axios from "axios";
import {database, snapshotToArray} from "../fire";

import {
	FETCH_RECIPES,
	FETCH_RECIPE,
	FETCH_RECIPES_SUCCESS,
	FETCH_RECIPE_SUCCESS,
	FETCH_RECIPES_FAILURE,
	FETCH_FEATURED_RECIPES_FULFILLED,
} from "./actionTypes";

export function fetchFeaturedRecipes() {
	return function (dispatch) {
		dispatch({ type: FETCH_RECIPES });

		database.ref('recipes').orderByChild('featured').equalTo(true).once('value', snap => {
			const db = snap.val();
			dispatch({type: FETCH_RECIPES_SUCCESS, payload: db})
		})
		.catch((err) => {
			dispatch({ type: FETCH_RECIPES_FAILURE, error: err })
		})
	}
}

export function fetchRecipe(slug) {
	return function (dispatch) {
		dispatch({ type: FETCH_RECIPE });
		database.ref('recipes').orderByChild('slug').equalTo(slug).on('value', snap => {

			const db = snapshotToArray(snap);
			dispatch({ type: FETCH_RECIPE_SUCCESS, payload: db[0] })
		})
		// .catch((err) => {
		// 	dispatch({ type: FETCH_RECIPE_FAILURE, error: err })
		// });
	}
}

export function setRecipeName(name) {
    return {
        type: 'SET_RECIPE_NAME',
        payload: name,
    }
}

export function setRecipeAge(age) {
    return {
        type: 'SET_RECIPE_AGE',
        payload: age,
    }
}

// export function fetchRecipes() {
export function fetchRecipes() {
	return database.ref('/').once('value', snap => {
		const db = snap.val();
		dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: snapshotToArray(db.recipes) })
	});
}