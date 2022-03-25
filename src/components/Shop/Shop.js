import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddCart = addedProduct => {
        console.log(addedProduct);
    }
    return (
        <div className='shop-container'>
            <div className="product-conatainer">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddCart={handleAddCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart />
            </div>
        </div>
    );
};

export default Shop;