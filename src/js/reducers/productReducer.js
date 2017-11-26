import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from "../actions/actionTypes";


export default function reducer(state = {
    products: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_PRODUCTS: {
            return { ...state, fetching: true }
        }
        case FETCH_PRODUCTS_FAILURE: {
            return { ...state, fetching: false, error: action.payload }
        }
        case FETCH_PRODUCTS_SUCCESS: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                products: action.payload,
            }
        }
        // case "ADD_PRODUCT": {
        //     return {
        //         ...state,
        //         products: [...state.products, action.payload],
        //     }
        // }
        // case "UPDATE_PRODUCT": {
        //     const { id, text } = action.payload
        //     const newProducts = [...state.products]
        //     const productToUpdate = newProducts.findIndex(product => product.id === id)
        //     newProducts[productToUpdate] = action.payload;

        //     return {
        //         ...state,
        //         products: newProducts,
        //     }
        // }
        // case "DELETE_PRODUCT": {
        //     return {
        //         ...state,
        //         products: state.products.filter(product => product.id !== action.payload),
        //     }
        // }
    }

    return state
}
