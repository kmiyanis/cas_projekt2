import { auth, database, provider } from '../fire';
import {
  FETCH_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOGGED_IN_USER,
  LOGGED_IN_USER_SUCCESS,
  LOGGED_IN_USER_FAILURE,
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
  FETCH_ALL_USERS,
  FETCH_ALL_USERS_SUCCESS,
  MAKE_ADMIN,
  MAKE_USER,
} from "../actions/actionTypes";


export function fetch() {
  return function (dispatch) {
    dispatch({ type: FETCH_USER });
    auth.onAuthStateChanged(user => {
      if (user) {
        let userId = auth.currentUser.uid;
        database.ref('/users/' + userId).once('value').then(function (snapshot) {
          dispatch({
            type: LOGGED_IN_USER,
            payload: snapshot.val()
          })
        });
      } else {
        dispatch(logout());
      }
    });
  }
}

export function fetchAllUsers() {
  return function (dispatch) {
    dispatch({ type: FETCH_ALL_USERS });
    database.ref('/users/').on('value', snap => {
      const db = snap.val();
      dispatch({ type: FETCH_ALL_USERS_SUCCESS, payload: db })
    })
  }
}

export function login(credentials) {

  return function (dispatch) {
    dispatch({ type: LOGIN_USER });
    auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch({ type: LOGGED_IN_USER_SUCCESS })
        dispatch({ type: GET_LOCAL_USER });
        let userId = auth.currentUser.uid;
        database.ref('/users/' + userId).once('value').then(function (snapshot) {
          dispatch({ type: GET_LOCAL_USER_SUCCESS, payload: snapshot.val() })
        });
      })
      .catch(error => {
        dispatch({ type: LOGGED_IN_USER_FAILURE, payload: error })
      });
  }
}

export function logout() {
  return function (dispatch) {
    auth.signOut().then(() => {
      dispatch({ type: LOGOUT_USER });
    });
  }
}

export function createAccount(credentials) {
  return function (dispatch) {
    dispatch({ type: CREATE_USER });
    auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {

        database.ref('/users/' + response.uid).set({
          id: response.uid,
          firstname: credentials.firstname,
          lastname: credentials.lastname,
          email: credentials.email,
        }, () => {
          dispatch({ type: CREATE_LOCAL_USER_SUCCESS, payload: credentials });
        })
          .catch(error => {
            dispatch({ type: CREATE_LOCAL_USER_FAILURE, payload: error })
          });
        dispatch({ type: CREATE_USER_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: CREATE_USER_FAILURE, payload: error })
      });
  }
}

export function deleteUser(_id) {
  return function (dispatch) {
    dispatch({ type: MAKE_ADMIN });
    database.ref('/users/' + _id).update({
      deleted: true,
    });
  }
}

export function makeAdmin(_id) {
  return function (dispatch) {
    dispatch({ type: MAKE_ADMIN });
    database.ref('/users/' + _id).update({
      role: 'ADMIN',
    });
  }
}

export function makeUser(_id) {
  return function (dispatch) {
    dispatch({ type: MAKE_USER });
    database.ref('/users/' + _id).update({
      role: 'USER',
    });
  }
}

