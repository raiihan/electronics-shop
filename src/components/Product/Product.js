import React from 'react';
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
                Add to Cart
            </button>
        </div>
    );
};

export default Product;