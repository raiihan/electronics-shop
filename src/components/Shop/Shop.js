import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddCart = addedProduct => {
        if (addedProduct) {
            const newCart = [...cart, addedProduct]
            setCart(newCart)
        }
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
                <h3 className='title'>Your Selected Products</h3>
                {
                    cart.map(singleCart => <Cart
                        key={singleCart.id}
                        cart={singleCart}
                    />)
                }
            </div>
        </div>
    );
};

export default Shop;