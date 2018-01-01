import { combineReducers } from "redux"

import cart from "./cartReducer"
import products from "./productReducer"
import recipes from "./recipesReducer"
import articles from "./articleReducer"
import user from "./userReducer"
import order from "./orderReducer"

export default combineReducers({
    cart,
    products,
    recipes,
    articles,
    user,
    order,
})
