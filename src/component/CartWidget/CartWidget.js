import React from 'react';
import  cart from '../assets/cart.jpeg';

const CartWidget = () => {
    return(
        <div >
           <img src={ cart} style= {{color:'green'}} className="cartWidget" />
        </div>
    )
    
} 

export default CartWidget ;