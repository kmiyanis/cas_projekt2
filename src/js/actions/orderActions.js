import axios from "axios";
import { database, snapshotToArray } from "../fire";
import { emptyCart } from "./cartAPI";

import {
  ADD_ORDER,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
} from "./actionTypes";

export function addOrder(order) {
  return function (dispatch) {
    dispatch({ type: ADD_ORDER });
    console.log('addOrder', order)
    database.ref('/orders').push(order, () => {
      dispatch({ type: ADD_ORDER_SUCCESS })
      emptyCart();
    })
      // .catch((err) => {
      //   dispatch({ type: ADD_ORDER_FAILURE, error: err })
      // })
  }
}