import {
  ADD_ORDER,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  ORDER_COMPLETED,
} from "../actions/actionTypes";


export default function reducer(state = {
  orders: [],
  fetching: false,
  fetched: false,
  pushing: false,
  pushed: false,
  error: null,
}, action) {

  switch (action.type) {
    case ADD_ORDER: {
      return {
        ...state,
        pushing: true
      }
    }
    case ADD_ORDER_FAILURE: {
      return {
        ...state,
        pushing: false,
        error: action.payload
      }
    }
    case ADD_ORDER_SUCCESS: {
      return {
        ...state,
        pushing: false,
        pushed: true,
      }
    }
    case ORDER_COMPLETED: {
      return {
        ...state,
        pushed: false,
      }
    }
    case FETCH_ORDERS: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_ORDERS_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case FETCH_ORDERS_SUCCESS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        orders: action.payload
      }
    }
  }

  return state
}
