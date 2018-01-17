import axios from "axios";
import { database, storage, snapshotToArray } from "../fire";

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
  UDPATE_PRODUCT_FAILURE,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  EMPTY_PRODUCT,
} from "./actionTypes";


export function fetchCategories() {
  return function (dispatch) {
    dispatch({ type: FETCH_CATEGORIES });

    database.ref('products_categories').once('value', snap => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: snapshotToArray(snap) })
    })
      .catch((err) => {
        dispatch({ type: FETCH_CATEGORIES_FAILURE, error: err })
      })
  }
}

export function fetchProducts() {
  return function (dispatch) {
    dispatch({ type: FETCH_PRODUCTS });

    database.ref('products').on('value', snap => {
      const db = snap.val();
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: db })
    });
  }
}

export function fetchProduct(slug) {
  return function (dispatch) {
    dispatch({ type: FETCH_PRODUCT });

    database.ref(`/products/${slug}`).on('value', snap => {
      console.log('fetchProduct snap.val()',snap.val());
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: snap.val() })
    });
  }
}

export function updateProduct(_product, file, action) {
  return function (dispatch) {
    let product = null;
    if(action === 'create') {
      const newPostKey = database.ref().child('products').push().key;
      product = {
        _id : newPostKey,
        ..._product
      }
    } else {
      product = _product;
    }

    if (file) {
      const storageRef = storage.ref('products/' + file.name);
      storageRef.put(file).then(function (snapshot) {
        const update = {};
        update['/products/' + product._id + '/picture'] = snapshot.downloadURL;
        database.ref().update(update);
      });
    }

    dispatch({ type: UDPATE_PRODUCT });
    database.ref('/products/' + product._id).set(product, () => {
      dispatch({ type: UDPATE_PRODUCT_SUCCESS, payload: product });

    }).then(() => {
      dispatch({ type: ORDER_COMPLETED })

    }).catch((err) => {
      dispatch({ type: UDPATE_PRODUCT_FAILURE, error: err })
    })
  }
}

export function deleteProduct(_id) {
  return function (dispatch) {
    dispatch({ type: DELETE_PRODUCT });

    database.ref('/products/' + _id).set(null, () => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS })
    });
  }
}
export function emptyProduct() {
  return function (dispatch) {
    dispatch({ type: EMPTY_PRODUCT });
  }
}