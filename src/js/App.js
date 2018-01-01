import React, { Component } from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux"

// import firebase, { auth, provider } from './fire.js';

import store from "./store"

import Layout from "./pages/Layout";
import LayoutSidebar from "./pages/LayoutSidebar";

import Featured from "./pages/Featured";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ProductDetail from './pages/ProductDetail';
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Order from "./pages/Order";
import MyOrders from "./pages/MyOrders";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Home}></Route>
          <Route path="/" component={LayoutSidebar} login={this.login} logout={this.logout}>
            <Route path="shop" name="shop" component={Shop}></Route>
          </Route>
          <Route path="/" component={Layout} login={this.login} logout={this.logout}>
            <Route path="shop/checkout" name="checkout" component={Checkout}></Route>
            <Route path="shop/checkout/order" name="checkout" component={Order}></Route>
            <Route path="shop/:product" name="ProductDetail" component={ProductDetail}></Route>
            <Route path="recipes" name="recipes" component={Recipes}></Route>
            <Route path="recipe/:recipe" name="recipedetail" component={RecipeDetail}></Route>
            <Route path="contact" name="contact" component={Contact}></Route>
            <Route path="myorders" name="myorders" component={MyOrders}></Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}
export default App;
