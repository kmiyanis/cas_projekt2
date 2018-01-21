import axios from "axios";
import { database, snapshotToArray } from "../fire";
import { emptyCart } from "./cartAPI";

import {
  ADD_ORDER,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  ORDER_COMPLETED,
  EMPTY_CART_SUCCESS
} from "./actionTypes";


export function addOrder(order) {
  return function (dispatch) {
    dispatch({ type: ADD_ORDER });

    database.ref('/orders').push(order, () => {
      dispatch({ type: ADD_ORDER_SUCCESS })
      emptyCart();
      dispatch({ type: EMPTY_CART_SUCCESS })

    }).then(() => {
      dispatch({ type: ORDER_COMPLETED })
    });

  }
}

export function fetchOrders(email) {
  return function (dispatch) {
    dispatch({ type: FETCH_ORDERS });

    database.ref('orders').orderByChild('email').equalTo(email).once('value', snap => {
      const db = snap.val();
      dispatch({ type: FETCH_ORDERS_SUCCESS, payload: db })
    })
      .catch((err) => {
        dispatch({ type: FETCH_ORDERS_FAILURE, error: err })
      })

  }
}

export function completeOrder() {
  return function (dispatch) {
    dispatch({ type: ORDER_COMPLETED });

  }
}
