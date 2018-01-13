import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  UDPATE_PRODUCT,
  UDPATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
} from "../actions/actionTypes";


export default function reducer(state = {
  products: [],
  categories: [],
  fetching: false,
  fetched: false,
  updated: false,
  error: null,
  deleted: null,
}, action) {

  switch (action.type) {
    case UDPATE_PRODUCT:
    case FETCH_PRODUCT:
    case FETCH_CATEGORIES:
    case FETCH_PRODUCTS:
    case DELETE_PRODUCT:
      {
        return { ...state, fetching: true }
      }
    case FETCH_PRODUCT_FAILURE:
    case FETCH_PRODUCTS_FAILURE:
    case FETCH_CATEGORIES_FAILURE:
      {
        return { ...state, fetching: false, error: action.payload }
      }
    case FETCH_PRODUCT_SUCCESS:
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          product: action.payload,
        }
      }
    case DELETE_PRODUCT_SUCCESS:
      {
        return {
          fetching: false,
          deleted: true,
        }
      }
    case UDPATE_PRODUCT_SUCCESS:
      {
        return {
          ...state,
          updated: true,
          product: action.payload,
        }
      }
    case FETCH_PRODUCTS_SUCCESS:
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          products: action.payload,
        }
      }
    case FETCH_CATEGORIES_SUCCESS:
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          categories: action.payload,
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
