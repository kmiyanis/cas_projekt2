import {
  ADD_ORDER,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
} from "../actions/actionTypes";


export default function reducer(state = {
  pushing: false,
  pushed: false,
  error: null,
}, action) {

  switch (action.type) {
    case ADD_ORDER:
      {
        return {
          ...state,
          pushing: true
        }
      }
    case ADD_ORDER_FAILURE:
      {
        return {
          ...state,
          pushing: false,
          error: action.payload
        }
      }
    case ADD_ORDER_SUCCESS:
      {
        return {
          ...state,
          pushing: false,
          pushed: true,
        }
      }
  }

  return state
}
