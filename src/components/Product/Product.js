import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import './Product.css'

const Product = ({ product }) => {
    const { id, name, img, price } = product;
    return (
        <div className='cart'>
            <img src={img} alt="Product" />
            <div className="product-info">
                <h2 className='product-name'>{name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
                <BsCart4 size={'1.5rem'} style={{ marginLeft: '6px' }} />
            </button>
        </div>
    );
};

export default Product;