import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd) => total + prd.price,0);

    let total = 0;
    for (let i = 0; i < cart.length ;i++) {
        const product = cart[i];
        total = Math.round(total + product.price);
        
    }

    let shipping = 0;
    if(total>35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = total / 10;
    const grandTotal = (total) + shipping+Number(tax);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4 className="text-primary">Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {formatNumber(total)}</p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            <Link to="/review">
            <button className="main-button">Review order</button>
            </Link>
        </div>
    );
};

export default Cart;