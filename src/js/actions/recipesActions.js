import { database, snapshotToArray } from "../fire";

import {
  FETCH_RECIPES,
  FETCH_RECIPE,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPES_FAILURE,
  FETCH_FEATURED_RECIPES_FULFILLED,
  ADD_RATING,
  ADD_RATING_SUCCESS,
  ADD_RATING_FAILURE,
  DELETE_RATING,
  DELETE_RATING_SUCCESS,
  DELETE_RATING_FAILURE,
  FETCH_RATINGS,
  FETCH_RATINGS_SUCCESS,
  FETCH_RATINGS_FAILURE,
  FETCH_RATINGS_BY_USER,
  FETCH_RATINGS_BY_USER_SUCCESS,
  FETCH_RATINGS_BY_USER_FAILURE
} from "./actionTypes";

export function fetchFeaturedRecipes() {
  return function (dispatch) {
    dispatch({ type: FETCH_RECIPES });

    database.ref('recipes').orderByChild('featured').equalTo(true).on('value', snap => {
      const db = snap.val();
      dispatch({ type: FETCH_RECIPES_SUCCESS, payload: db })
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

// export function fetchRecipes() {
export function fetchRecipes() {
  return database.ref('/').once('value', snap => {
    const db = snap.val();
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: snapshotToArray(db.recipes) })
  });
}


export function fetchRatings(slug) {
  return function (dispatch) {
    dispatch({ type: FETCH_RATINGS_BY_USER });
    database.ref('ratings').orderByChild('slug').equalTo(slug).on('value', snap => {
      const db = snap.val();
      dispatch({ type: FETCH_RATINGS_BY_USER_SUCCESS, payload: db })
    })
  }
  // return function (dispatch) {
  //   dispatch({ type: FETCH_RATINGS });

  //   database.ref('ratings').orderByChild('slug').equalTo(slug).once('value', snap => {
  //     const db = snap.val();
  //     dispatch({ type: FETCH_RATINGS_SUCCESS, payload: db })
  //   })
  //     .catch((err) => {
  //       dispatch({ type: FETCH_RATINGS_FAILURE, error: err })
  //     })
  // }
}

export function fetchRatingsByUser(email) {
  return function (dispatch) {
    dispatch({ type: FETCH_RATINGS_BY_USER });
    database.ref('ratings').orderByChild('email').equalTo(email).on('value', snap => {
      const db = snap.val();
      dispatch({ type: FETCH_RATINGS_BY_USER_SUCCESS, payload: db })
    })
      .catch((err) => {
        dispatch({ type: FETCH_RATINGS_BY_USER_FAILURE, error: err })
      })
  }
}


export function addRating(rating) {
  return function (dispatch) {
    dispatch({ type: ADD_RATING });

    database.ref('/ratings').push(rating, () => {
      database.ref('recipes').orderByChild('slug').equalTo(rating.slug).once('value', snap => {
        const recipe = snapshotToArray(snap);
        const r = recipe[0];

        const newTotalRatings = r.totalRatings + 1
        const newAvgRating = r.avgRating + ((rating.star - r.avgRating) / newTotalRatings)

        database.ref('/recipes/' + r.slug).update({
          totalRatings: newTotalRatings,
          avgRating: newAvgRating
        });
      });

      dispatch({ type: ADD_RATING_SUCCESS })
    })
      .catch((err) => {
        dispatch({ type: ADD_RATING_FAILURE, error: err })
      })
  }
}


export function deleteRating(_id) {
  return function (dispatch) {
    dispatch({ type: DELETE_RATING });
    database.ref('/ratings/' + _id).set(null, () => {
      dispatch({ type: DELETE_RATING_SUCCESS })
    })
      .catch((err) => {
        dispatch({ type: DELETE_RATING_FAILURE, error: err })
      })
  }
}