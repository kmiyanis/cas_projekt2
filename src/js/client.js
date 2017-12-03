import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux"

import store from "./store"

import Layout from "./pages/Layout";
import LayoutSidebar from "./pages/LayoutSidebar";

import Featured from "./pages/Featured";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

import ProductDetail from './pages/ProductDetail';

import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home}>
      </Route>
      <Route path="/" component={LayoutSidebar}>
        <IndexRoute component={Featured}></IndexRoute>
        <Route path="shop" name="shop" component={Shop}></Route>
        <Route path="shop/:product" name="ProductDetail" component={ProductDetail}></Route>
      </Route>
      <Route path="/" component={Layout}>
        <Route path="recipes" name="recipes" component={Recipes}></Route>
        <Route path="recipe/:recipe" name="recipedetail" component={RecipeDetail}></Route>
        <Route path="contact" name="contact" component={Contact}></Route>
      </Route>
    </Router>
  </Provider>,
app);
