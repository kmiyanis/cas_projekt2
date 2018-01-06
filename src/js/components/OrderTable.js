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
                  <Link to={"/shop/product/" + item.productId}>
                  <img src={item.product.picture} alt={item.product.title} />
                </Link>
              </div>
              <div class="product-details">
                <h3 class="cd-product-title"><Link to={"/shop/product/" + item.productId}>{item.quantity} x {item.product.title}</Link></h3>
                    <span class="product-price">CHF {item.product.price}</span>
                  <span class="price">CHF {(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
            <div class="flex-row shipping"><p class="flex-row__item">Versandkosten</p><p class="flex-row__item"> CHF 8</p></div>
            <div class="flex-row"><p class="order-total">Total</p> <p class="order-total">CHF {cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 8).toFixed(2)}</p></div>

        </div>
      </div>
    );
  }
}