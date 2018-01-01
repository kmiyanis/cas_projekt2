import React from "react";

export default class OrderTable extends React.Component {
  render() {
    var divStyle = {
      marginBottom: '5rem'
    };

    const { cart, order } = this.props;
    return (
      <div class="checkout-content myorders" style={divStyle}>
        Bestellung vom &nbsp; {Date(order.created_at).toString()}
        <div class="checkout__products">
          {cart.items.map((item, index) => (
            <div class="product" key={item.productId}>
              <div class="product-image">
                <a href="#0">
                  <img src={item.product.picture} alt={item.product.title} />
                </a>
              </div>
              <div class="product-details">
                <h3 class="cd-product-title"><a>{item.quantity} x {item.product.title}</a></h3>
                    <span class="product-price">CHF {item.product.price}</span>
                  <span class="price">CHF {(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
          <p class="order-total">Total: {cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)}</p>
        </div>
      </div>
    );
  }
}