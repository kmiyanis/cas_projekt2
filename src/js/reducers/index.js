import { combineReducers } from "redux"

import products from "./productReducer"
import recipes from "./recipesReducer"

export default combineReducers({
    products,
    recipes,
})
