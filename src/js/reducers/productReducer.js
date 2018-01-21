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
  UDPATE_PRODUCT_COMPLETED,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  EMPTY_PRODUCT,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_COMPLETED,
} from "../actions/actionTypes";


export default function reducer(state = {
  products: [],
  product: null,
  categories: [],
  fetching: false,
  fetched: false,
  updated: false,
  error: null,
  deleted: null,
  deletedproduct:null,
  catFetching: false,
  catFetched: false,
  catUpdated: false,
  catError: null,
  catDeleted: null,
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
    case DELETE_PRODUCT_FAILURE:
    case FETCH_PRODUCT_FAILURE:
    case FETCH_PRODUCTS_FAILURE:
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
          deletedproduct: action.payload,
        }
      }
    case DELETE_PRODUCT_COMPLETED:
    {
      return {
        ...state,
        deleted: false,
        deletedproduct: null
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
    case UDPATE_PRODUCT_COMPLETED:
    {
      return {
        ...state,
        updated: false,
        product: null
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
    case EMPTY_PRODUCT:
    {
      return {
        ...state,
        product: [],
        fetched: false,
      }
    }
    case FETCH_CATEGORIES:
    {
      return { ...state, catFetching: true }
    }
    case FETCH_CATEGORIES_FAILURE:
    {
      return { ...state, catFetching:false, catError: action.payload }
    }
    case FETCH_CATEGORIES_SUCCESS:
      {
        return {
          ...state,
          catFetching: false,
          catFetched: true,
          categories: action.payload,
        }
      }

  }

  return state
}
