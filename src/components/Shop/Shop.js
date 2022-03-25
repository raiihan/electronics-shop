import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-conatainer">
                <h1>producty</h1>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
            <div className="cart-container">
                <h4>Cart</h4>
            </div>
        </div>
    );
};

export default Shop;