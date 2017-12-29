import { auth, provider } from '../fire';
import {
  FETCH_USER,
  LOGIN_USER,
  LOGOUT_USE,
  LOGGED_IN_USER,
  USER_FETCHED,
} from "../actions/actionTypes";


export function fetch() {
  console.log('fetch called')
  return function (dispatch) {
    dispatch({ type: FETCH_USER });
    auth.onAuthStateChanged((user) => {
      console.log('onAuthStateChanged', user)
      dispatch({
        type: LOGGED_IN_USER,
        payload: user
      });
    });
  }
}

export function login() {
  return function (dispatch) {
    dispatch({ type: LOGIN_USER });
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result)
        dispatch({ type: LOGGED_IN_USER, payload: result.additionalUserInfo.profile })
      });
  }
}
// export function login(email, password) {
//   dispatch({ type: LOGIN_USER });
//   return dispatch => auth.signInWithEmailAndPassword(email, password);
// }

export function logout() {
  dispatch({ type: LOGOUT_USER });

  return dispatch => auth.signOut();
}

export function createAccount(email, password) {
  return dispatch => auth.createUserWithEmailAndPassword(email, password);
}