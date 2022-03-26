import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [raffled, setRaffld] = useState([]);
    console.log(raffled);
    // console.log(cart)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddCart = addedProduct => {
        if (cart.length < 4) {
            if (addedProduct) {
                const newCart = [...cart, addedProduct]
                setCart(newCart)
            }
        }
        else {
            alert('You can not add more than 4 items');
            return;
        }
    }

    const handleChooseBtn = () => {
        const raffledItem = [...cart];
        if (raffledItem.length === 0) {
            alert('Your cart is empty please add to cart a product');
            return;
        } else {
            const index = Math.floor(Math.random() * raffledItem.length)
            setRaffld(raffledItem[index])
        }
    }

    const handleRemoveBtn = () => {
        setCart([])
        setRaffld([])
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
                <h3 className='cart-title'>Your Selected Products</h3>
                {
                    cart.map(singleCart => <Cart
                        key={singleCart.id}
                        cart={singleCart}
                    />)
                }
                <div>
                    {raffled.name ? 'You Can Buy this item ' + raffled.name : ''}
                </div>
                <div className="btn">
                    <button onClick={handleChooseBtn} id='choose-for-me' className='choose-btn'>CHOSSE 1 FOR ME</button>
                    <button onClick={handleRemoveBtn} className="choose-btn">CHOSSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;