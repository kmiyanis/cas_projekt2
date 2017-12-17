import React from "react"
import {connect} from "react-redux"

import CartTable from "../components/CartTable";
import {fetchProducts} from "../actions/productsActions";
import {fetchCart} from "../actions/cartActions"

@connect((store) => {
    return {
        products: store.products.products,
        productsFetched: store.products.fetched,
        cart: populateCartItems(store.cart.cart, store.products.products),
        cartFetched: store.cart.fetched,
    };
})

export default class CartMini extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            opened: false,
        };
        this.toggleClass = this.toggleClass.bind(this);
    }
    toggleClass() {
        this.setState({ opened: !this.state.opened });
    };

    componentWillMount() {
        this.props.dispatch(fetchProducts())
        this.props.dispatch(fetchCart())
    }

    render() {
        const {
            products,
            productsFetched,
            cart,
            fetched
        } = this.props;
        console.log('items.length = ', cart.items.length);
        return (
            <div class={`cd-cart-container ${this.state.opened ? 'cart-open' : ''} ${cart.items.length === 0 ? 'empty' : ''}`}>
                <a onClick={this.toggleClass} class="cd-cart-trigger">
                    Warenkorb
                    <ul class="count">
                        <li>{cart.items.length}</li>
                        <li>0</li>
                    </ul>
                </a>

                <div class="cd-cart">
                    <div class="wrapper">
                        <header>
                            <h2>Cart</h2>
                            <span class="undo">Item removed. <a >Undo</a></span>
                        </header>

                        <div class="body">


                            {fetched ? (
                                "Loading..."
                            ) : (

                                <CartTable
                                    cart={cart}
                                />

                            )}

                        </div>

                        <footer>
                            <a href="#" class="checkout"><em>Checkout - CHF <span>0</span></em></a>
                        </footer>
                    </div>
                </div>
            </div>

        )
    }
}

const getProductById = (products, productId) => products.find(p => p._id === productId);

const populateCartItems = (cart, products) => ({
    ...cart,
    items: cart.items.map(item => ({
        ...item,
        product: getProductById(products, item.productId),
    })),
});
