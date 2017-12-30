import {
  FETCH_USER,
  LOGIN_USER,
  LOGGED_IN_USER,
  LOGOUT_USER,
  USER_FETCHED,
} from "../actions/actionTypes";

export default function (state = {
  loggedin: false,
  loading: false
}, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loading: true
      };
    case USER_FETCHED:
      return {
        ...state,
        user: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: true
      };
    case LOGGED_IN_USER:
      return {
        ...state,
        loggedin: true,
        user: action.payload
      };
    case LOGOUT_USER:
      return {
        loggedin: false,
        loading: false,
        ...action.payload
      };
    default:
      return state;
  }
}