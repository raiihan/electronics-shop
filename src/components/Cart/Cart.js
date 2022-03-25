import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const { img, name } = cart;
    return (
        <div className='cart'>
            <img src={img} alt="product" />
            <h4>{name}</h4>
        </div>
    );
};

export default Cart;