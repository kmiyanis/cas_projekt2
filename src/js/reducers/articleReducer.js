import {
    FETCH_ARTICLES,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE
} from "../actions/actionTypes";


export default function reducer(state = {
    products: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_ARTICLES: {
            return { ...state, fetching: true }
        }
        case FETCH_ARTICLES_FAILURE: {
            return { ...state, fetching: false, error: action.payload }
        }
        case FETCH_ARTICLES_SUCCESS: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                products: action.payload,
            }
        }
    }

    return state
}
