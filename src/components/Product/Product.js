import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { picture, name, price } = product;
    return (
        <div className='product'>
            <img src={picture} alt=""></img>
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;