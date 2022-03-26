import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Modals from '../Modal/Modal';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [raffled, setRaffld] = useState([]);
    const [isDisabled, setDisabled] = useState(false)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddCart = addedProduct => {
        if (cart.length < 4) {
            const exist = cart.find(cartItem => cartItem.id === addedProduct.id);
            if (!exist) {
                const newCart = [...cart, addedProduct]
                setCart(newCart)
            }
            else (
                alert('You already added this item')
            )
        }
        else {
            alert('You can not add more than 4 items')
            return;
        }
    }

    const handleChooseBtn = (openModal) => {
        const raffledItem = [...cart];
        if (raffledItem.length === 0) {
            alert('Your cart is empty please add to Product in cart')
            return;
        } else {
            const index = Math.floor(Math.random() * raffledItem.length)
            setRaffld(raffledItem[index])
        }
        setDisabled(true)
        openModal()
    }

    const handleRemoveBtn = () => {
        setCart([])
        setRaffld([])
        setDisabled(false)
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

                <div className="btn">
                    <Modals
                        handleChooseBtn={handleChooseBtn}
                        raffleDraw={raffled}
                        isDisabled={isDisabled} />

                    <button onClick={handleRemoveBtn} className="choose-btn">CHOSSE AGAIN</button>
                </div>

            </div>
        </div>
    );
};

export default Shop;