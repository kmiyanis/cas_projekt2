import { database, snapshotToArray } from "../fire";

import {
    FETCH_ARTICLES,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE
} from "./actionTypes";

export const asyncFetchArticle = async () => fetchStaticArticle();

export function fetchArticles() {
    return function (dispatch) {
        dispatch({ type: FETCH_ARTICLES });

        database.ref('articles').once('value', snap => {
            console.log(snap.val())
            dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: snapshotToArray(snap) })
        })
        .catch((err) => {
            dispatch({ type: FETCH_ARTICLES_FAILURE, error: err })
        })
    }
}