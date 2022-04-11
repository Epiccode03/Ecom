import React from 'react'
import { FaStar, FaAngleRight, FaHeart } from 'react-icons/fa';

function EcomProduct() {
    return (
        <div className="mainProduct">
            <div className="image"></div>
            <div className="flex">
                <div className="aboutProduct">
                    <h3>Product Title</h3>
                    <p>Space for a small description</p>
                    <FaStar /><FaStar /><FaStar /><FaStar />
                    <div className="about">
                        <ul>
                            <li>Freshness</li>
                            <li>Farm</li>
                            <li>Delivery</li>
                            <li>Stock</li>
                        </ul>
                        <ul>
                            <li><span className='activeLink'>New</span><span>(Extra Fresh)</span></li>
                            <li>Grocery Tarm fields</li>
                            <li>Europe</li>
                            <li><span className='activeLink'>320pcs</span></li>
                        </ul>
                    </div>
                </div>
                <div className="details">
                    <div className="price">
                        <h3>36.9 USD</h3>
                        <span>48.56</span>
                    </div>
                    <div className="ship">
                        <span>Free Shipping</span>
                        <span>Delivery in 1 day</span>
                    </div>
                    <div className="buttons">
                        <button className="flexButton">
                            <span>Product Detail</span><FaAngleRight />
                        </button>
                        <button className="flexButton1">
                            <FaHeart />
                            <span>Add to wish list</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcomProduct