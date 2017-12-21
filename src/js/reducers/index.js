import { combineReducers } from "redux"

import cart from "./cartReducer"
import products from "./productReducer"
import recipes from "./recipesReducer"
import articles from "./articleReducer"
import user from "./userReducer"

export default combineReducers({
    cart,
    products,
    recipes,
    articles,
    user,
})
