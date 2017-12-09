import { combineReducers } from "redux"

import cart from "./cartReducer"
import products from "./productReducer"
import recipes from "./recipesReducer"
import articles from "./articleReducer"

export default combineReducers({
    cart,
    products,
    recipes,
    articles,
})
