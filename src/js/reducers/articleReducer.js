import {
    FETCH_ARTICLE,
    FETCH_ARTICLE_SUCCESS,
    FETCH_ARTICLE_FAILURE
} from "../actions/actionTypes";


export default function reducer(state = {
    products: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_ARTICLE: {
            return { ...state, fetching: true }
        }
        case FETCH_ARTICLE_FAILURE: {
            return { ...state, fetching: false, error: action.payload }
        }
        case FETCH_ARTICLE_SUCCESS: {
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
