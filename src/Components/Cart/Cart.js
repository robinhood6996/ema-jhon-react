import React from 'react';
// import { getStoredCart } from '../../utilities/fakedb';
// import Product from '../Product/Product';
import './Cart.css';


const Cart = (props) => {


    const { cart } = props;
    console.log(cart)
    // let total = 0;
    // for (const product of cart) {
    //     total += product.price;
    // }
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
    }
    // cart.reduce((previous, product) => previous + product.price, 0)
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    // const cartItems = getStoredCart();
    // console.log(cartItems);
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Ordered: {totalQuantity}</h4>
            <h5>Total: {total.toFixed(2)}</h5>
            <h5>Shipping: {shipping.toFixed(2)}</h5>
            <h5>Tax: {tax.toFixed(2)}</h5>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;