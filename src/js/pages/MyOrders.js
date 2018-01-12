import firebase, { auth, provider } from '../fire.js';
import React from "react";
import { Link, Redirect } from "react-router";
import { connect } from "react-redux"

import OrderTable from "../components/OrderTable";
import { fetchOrders } from "../actions/orderActions";
import * as userActions from "../actions/userActions"

@connect((store) => {
  return {
    orders: store.order.orders,
    fetched: store.order.fetched,
    user: store.user.user,
    loggedin: store.user.loggedin,
  };
})

export default class MyOrders extends React.Component {
  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.dispatch(fetchOrders(user.email))
      }
    });
    // this.props.dispatch(userActions.fetch())
  }


  render() {
    const {
      orders,
      fetched,
      user,
      loggedin
    } = this.props;


    const renderedOrders = [];
    if(orders != null) {
      Object.keys(orders).map(function (key) {
        renderedOrders.push(<OrderTable order={orders[key]} cart={orders[key].cart} key={key} />)
      })
    }

    const h1 = <h1 class="title">Meine Bestellungen</h1>
    if (fetched) {
      if (renderedOrders.length > 0) {
        return (
          <div>
            {h1}
            {renderedOrders}
          </div>
        )
      } else {
        return (
          <div>
            {h1}
            <div class="content content--bg-white"><p>Bisher noch keine Bestellung ausgeführt</p></div>
          </div>
        )
      }
    } else {
      return (
        <div>
          {h1}
          <div class="content content--bg-white"><p>Loading...</p></div>
        </div>
      )
    }

  }
}
