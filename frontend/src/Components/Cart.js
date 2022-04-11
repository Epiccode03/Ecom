import React, { useState } from 'react'
import { BsFillCartXFill } from "react-icons/bs";
import { Link } from 'react-router-dom'

function Cart() {
    const [value, setValue] = useState(1);
    const Increment = () => { setValue(value + 1) }
    const Decrement = () => {
        setValue(value - 1);
        if (value <= 1) {
            setValue(1);
        }
    }
    return (
        <>
            {/* <div className="cartImg">
                <BsFillCartXFill />
                <h2>Your cart is empty</h2>
                <p>Looks like you have not added anything to your cart.Go ahead and explore top categories</p>
                <div className="flexButton"><Link to="/">Go to Home</Link></div>
            </div> */}
            <div className="container9">
                <div className="cartItems">
                    <div className="ProductName">
                        <span>Product title</span>
                    </div>
                    <div className="ProductImg">
                        <div className="productImage"></div>
                    </div>
                    <div className="ProductDescription">
                        <div className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, culpa?</div>
                    </div>
                    <div className="productPrice">
                        <span>{10 * value} USD</span>
                    </div>
                    <div className="productQuantity">
                        <div className="qty">
                            <span className='decrement' onClick={() => Decrement()}>-</span>
                            <span>{value}</span>
                            <span className='increment' onClick={() => Increment()}>+</span>
                        </div>
                    </div>
                    <div className="deleteOrBuy">
                        <button className='flexButton'>Buy</button>
                        <button className='flexButton1'>Remove</button>
                    </div>
                </div>
                <div className="cartItems">
                    <div className="ProductName">
                        <span>Product title</span>
                    </div>
                    <div className="ProductImg">
                        <div className="productImage"></div>
                    </div>
                    <div className="ProductDescription">
                        <div className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, culpa?</div>
                    </div>
                    <div className="productPrice">
                        <span>{10 * value} USD</span>
                    </div>
                    <div className="productQuantity">
                        <div className="qty">
                            <span className='decrement' onClick={() => Decrement()}>-</span>
                            <span>{value}</span>
                            <span className='increment' onClick={() => Increment()}>+</span>
                        </div>
                    </div>
                    <div className="deleteOrBuy">
                        <button className='flexButton'>Buy</button>
                        <button className='flexButton1'>Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart