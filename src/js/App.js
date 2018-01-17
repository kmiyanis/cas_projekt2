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
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import MyRatings from "./pages/MyRatings";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AdminUsers from "./pages/admin/Users";
import AdminProducts from "./pages/admin/Products";
import AdminProduct from "./pages/admin/Product";
import AdminNewProduct from "./pages/admin/ProductFormNew";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Home}></Route>
          <Route path="/" component={LayoutSidebar} login={this.login} logout={this.logout}>
            <Route path="shop" name="shop" component={Shop}></Route>
            <Route path="shop/:filter" name="shop" component={Shop}></Route>
          </Route>
          <Route path="/" component={Layout} login={this.login} logout={this.logout}>
            <Route path="checkout" name="checkout" component={Checkout}></Route>
            <Route path="checkout/order" name="checkout" component={Order}></Route>
            <Route path="checkout/order/orderSuccess" name="orderSuccess" component={OrderSuccess}></Route>
            <Route path="shop/product/:product" name="ProductDetail" component={ProductDetail}></Route>
            <Route path="recipes" name="recipes" component={Recipes}></Route>
            <Route path="recipe/:recipe" name="recipedetail" component={RecipeDetail}></Route>
            <Route path="contact" name="contact" component={Contact}></Route>
            <Route path="myorders" name="myorders" component={MyOrders}></Route>
            <Route path="myratings" name="myorders" component={MyRatings}></Route>
            <Route path="signup" name="signup" component={SignUp}></Route>
            <Route path="login" name="login" component={Login}></Route>
            <Route path="admin/users" name="admin/users" component={AdminUsers}></Route>
            <Route path="admin/products" name="admin/products" component={AdminProducts}></Route>
            <Route path="admin/products/:filter" name="admin/products" component={AdminProducts}></Route>
            <Route path="admin/addProduct" name="admin/newProduct" component={AdminNewProduct}></Route>
            <Route path="admin/product/:product" name="admin/editProduct" component={AdminProduct}></Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}
export default App;
