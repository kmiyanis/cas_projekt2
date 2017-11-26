import axios from "axios";

export function fetchProducts() {
    return function (dispatch) {
        dispatch({ type: "FETCH_PRODUCTS" });
        
        axios.get("http://rest.learncode.academy/api/reacttest/tweets")
            .then((response) => {
                dispatch({ type: "FETCH_PRODUCTS_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_PRODUCTS_REJECTED", payload: err })
            })
    }
}

export function addProduct(id, text) {
    return {
        type: 'ADD_PRODUCT',
        payload: {
            id,
            text,
        },
    }
}

export function updateProduct(id, text) {
    return {
        type: 'UPDATE_PRODUCT',
        payload: {
            id,
            text,
        },
    }
}

export function deleteProduct(id) {
    return { type: 'DELETE_PRODUCT', payload: id }
}
