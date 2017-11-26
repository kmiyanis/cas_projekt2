import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux"

import store from "./store"

import Layout from "./pages/Layout";
import LayoutSidebar from "./pages/LayoutSidebar";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";

import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={LayoutSidebar}>
        <IndexRoute component={Featured}></IndexRoute>
        <Route path="shop" name="shop" component={Shop}></Route>
      </Route>
      <Route path="/" component={Layout}>
        <Route path="recipes" name="recipes" component={Recipes}></Route>
        <Route path="recipe/:recipe" name="recipedetail" component={RecipeDetail}></Route>
        <Route path="contact" name="contact" component={Contact}></Route>
        <Route path="archives(/:product)" name="archives" component={Archives}></Route>
        <Route path="settings" name="settings" component={Settings}></Route>
      </Route>
    </Router>
  </Provider>,
app);
