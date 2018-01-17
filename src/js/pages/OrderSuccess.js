import React from 'react';
import {connect} from "react-redux"
import {completeOrder} from "../actions/orderActions"
import {emptyCart} from "../actions/cartActions"

@connect((store) => {
  return {
  };
})

export default class OrderSuccess extends React.Component {
  componentDidMount() {
    //this.props.dispatch(completeOrder());

  }

  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{
          __html: `
          .cd-cart-container { display: none }
        `}} />
        <div class="content content--bg-white">
          <div class="order-success">
            <p class="order-success__title">Vielen Dank für Ihre Bestellung!</p>
            <img class="order-success__img" src="/assets/img/fukusuke.svg"/>
          </div>
        </div>
      </div>
    );
  }
}