import React from 'react';
import {connect} from "react-redux"
import {completeOrder} from "../actions/orderActions"

@connect((store) => {
  return {
  };
})

export default class OrderSuccess extends React.Component {
  componentWillMount() {
    this.props.dispatch(completeOrder());
  }

  render() {
    return (
      <div class="content content--bg-white">
        <div class="order-success">
          <p class="order-success__title">Vielen Dank für Ihre Bestellung!</p>
          <img class="order-success__img" src="/assets/img/fukusuke.svg"/>
        </div>
      </div>
    );
  }
}