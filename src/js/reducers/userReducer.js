import {
  FETCH_USER,
  LOGIN_USER,
  LOGGED_IN_USER_SUCCESS,
  LOGGED_IN_USER_FAILURE,
  LOGGED_IN_USER,
  LOGOUT_USER,
  USER_FETCHED,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  CREATE_LOCAL_USER,
  CREATE_LOCAL_USER_SUCCESS,
  CREATE_LOCAL_USER_FAILURE,
  GET_LOCAL_USER,
  GET_LOCAL_USER_SUCCESS,
  GET_LOCAL_USER_FAILURE,
} from "../actions/actionTypes";

export default function (state = {
  created: false,
  creating: false,
  loggedin: false,
  loading: false,
  user: []
}, action) {
  switch (action.type) {
    case CREATE_USER:
    case CREATE_LOCAL_USER:
      return {
        ...state,
        creating: true
      };
    case GET_LOCAL_USER:
    case FETCH_USER:
      return {
        ...state,
        loading: true
      };
    case CREATE_USER_SUCCESS:
    case GET_LOCAL_USER_SUCCESS:
    case CREATE_LOCAL_USER_SUCCESS:
      return {
        ...state,
        created: true,
        user: action.payload
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
    case LOGGED_IN_USER_SUCCESS:
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
    case CREATE_LOCAL_USER_FAILURE:
    case GET_LOCAL_USER_FAILURE:
    case CREATE_LOCAL_USER_FAILURE:
    case LOGGED_IN_USER_FAILURE:
      return { ...state, created: false, error: action.payload }
    default:
      return state;
  }
}