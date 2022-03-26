import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const handleChooseAgain = () => {
        const removeCart = [];
        setCart(removeCart);
    }
    const randomChoice = () => {
        const random = cart[Math.floor(Math.random() * cart.length)];
        setCart([random]);
    }

    return (
        <div className='store-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart key={cart.id} cart={cart} handleChooseAgain={handleChooseAgain} randomChoice={randomChoice}></Cart>
            </div>
        </div>
    );
};

export default Shop;