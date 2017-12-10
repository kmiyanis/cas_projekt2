import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {Provider} from "react-redux"

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

import {theme, clearfix} from './style/styleUtils';

import {ThemeProvider} from 'styled-components';


const app = document.getElementById('app');


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Home}></Route>
                <Route path="/" component={LayoutSidebar}>
                    <Route component={Featured}></Route>
                    <Route path="shop" name="shop" component={Shop}></Route>
                    <Route path="shop/:product" name="ProductDetail" component={ProductDetail}></Route>
                </Route>
                <Route path="/" component={Layout}>
                    <Route path="recipes" name="recipes" component={Recipes}></Route>
                    <Route path="recipe/:recipe" name="recipedetail" component={RecipeDetail}></Route>
                    <Route path="contact" name="contact" component={Contact}></Route>
                </Route>
            </Router>
        </Provider>
    </ThemeProvider>,
    app);
