import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './Cart.css'

const Cart = ({ cart, handleDeleteCart }) => {
    const { img, name } = cart;
    return (
        <div className='cart'>
            <img src={img} alt="product" />
            <h5>{name}</h5>
            <button onClick={() => handleDeleteCart(cart)} className='delete-btn'>
                <MdDeleteForever size={'2rem'} />
            </button>
        </div>
    );
};

export default Cart;