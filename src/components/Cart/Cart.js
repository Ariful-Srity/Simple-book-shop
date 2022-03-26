import React from 'react';
import './Cart.css'

const Cart = ({ cart, randomChoice, handleChooseAgain }) => {

    return (
        <div className='cart'>
            <h1> Selected Books</h1>
            {
                cart.map(ct => <p>{ct.name}</p>)
            }

            <button className='choose-btn'>
                <p onClick={randomChoice} className='btn-text'>CHOOSE 1 FOR ME</p>
            </button>
            <button onClick={handleChooseAgain} className='choose-again-btn'>CHOOSE AGAIN</button>

        </div >
    );
};

export default Cart;