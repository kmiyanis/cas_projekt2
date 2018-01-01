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
    this.props.dispatch(userActions.fetch())
  }


  render() {
    const {
      orders,
      fetched,
      user,
      loggedin
    } = this.props;


    const renderedOrders = []
    Object.keys(orders).map(function (key) {
      renderedOrders.push(<OrderTable order={orders[key]} cart={orders[key].cart} key={key} />)
    })

    if (orders.length === 0 && fetched) {
      return (
        <div>
          <h1 class="title">Meine Bestellungen</h1>
          <b>Bisher noch keine Bestellung ausgeführt</b>
        </div>
      )
    }

    return (
      <div>
        <h1 class="title">Meine Bestellungen</h1>
        {renderedOrders}
      </div>
    )


  }
}
