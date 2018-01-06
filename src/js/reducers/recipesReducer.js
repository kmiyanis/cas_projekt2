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
  FETCH_RATINGS_BY_USER_FAILURE,
  FETCH_RATINGS_BY_USER_SUCCESS,
} from "../actions/actionTypes";

export default function reducer(state = {
  recipes: [],
  recipe: [],
  fetching: false,
  fetched: false,
  error: null,
  pushing: false,
  pushed: false,
  ratings: [],
}, action) {

  switch (action.type) {
    case FETCH_RECIPES: {
      return { ...state, fetching: true }
    }
    case FETCH_RECIPES_FAILURE: {
      return { ...state, fetching: false, error: action.payload }
    }
    case FETCH_RECIPES_SUCCESS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        recipes: action.payload,
      }
    }
    // FEATURED
    case FETCH_FEATURED_RECIPES_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        recipes: action.payload,
      }
    }

    // SINGLE RECIPE
    case FETCH_RECIPE_SUCCESS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        recipe: action.payload,
      }
    }

    case ADD_RATING:
    case DELETE_RATING:
      {
        return {
          ...state,
          pushing: true
        }
      }
    case ADD_RATING_FAILURE:
    case DELETE_RATING_FAILURE:
      {
        return {
          ...state,
          pushing: false,
          error: action.payload
        }
      }
    case ADD_RATING_SUCCESS:
    case DELETE_RATING_SUCCESS:
      {
        return {
          ...state,
          pushing: false,
          pushed: true,
        }
      }
    case FETCH_RATINGS_BY_USER:
    case FETCH_RATINGS:
      {
        return { ...state, fetching: true }
      }
    case FETCH_RATINGS_BY_USER_FAILURE:
    case FETCH_RATINGS_FAILURE:
      {
        return { ...state, fetching: false, error: action.payload }
      }
    case FETCH_RATINGS_BY_USER_SUCCESS:
    case FETCH_RATINGS_SUCCESS:
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          ratings: action.payload,
        }
      }
    // case "ADD_RECEPIE": {
    //     return {
    //         ...state,
    //         recipes: [...state.recipes, action.payload],
    //     }
    // }
    // case "UPDATE_RECEPIE": {
    //     const { id, text } = action.payload
    //     const newRecepies = [...state.recipes]
    //     const recepieToUpdate = newRecepies.findIndex(recepie => recepie.id === id)
    //     newrecipes[recepieToUpdate] = action.payload;

    //     return {
    //         ...state,
    //         recipes: newrecipes,
    //     }
    // }
    // case "DELETE_RECEPIE": {
    //     return {
    //         ...state,
    //         recipes: state.recipes.filter(recepie => recepie.id !== action.payload),
    //     }
    // }
  }

  return state
}
