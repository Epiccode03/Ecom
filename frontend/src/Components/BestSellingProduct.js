import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

function BestSellingProduct() {
    return (
        <>
            <div className="container2">
                <div className="productsMenu">
                    <h3>Best Selling Products</h3>
                    <ul className="myUl1">
                        <li><a href="/">Kitchen</a></li>
                        <li><a href="/">Meat and Fish</a></li>
                        <li><a href="/">Special nutrition</a></li>
                        <li><a href="/">Pharmacy</a></li>
                        <li><a href="/">Baby</a></li>
                    </ul>
                    <button className="moreProductsBtn">
                        <span>More products</span>
                        <FaAngleRight />
                    </button>
                </div>
                <div className="images">
                    <div className="image2">
                        <div className="colouredImage"></div>
                        <div className="titleAndDescription">
                            <span>Product Title</span>
                            <p>Space for a small description</p>
                        </div>
                        <div className="priceAndBtn">
                            <span>1.48 USD</span>
                            <button className='flexButton'>Buy Now</button>
                        </div>
                    </div>
                    <div className="image2">
                        <div className="colouredImage"></div>
                        <div className="titleAndDescription">
                            <span>Product Title</span>
                            <p>Space for a small description</p>
                        </div>
                        <div className="priceAndBtn">
                            <span>1.48 USD</span>
                            <button className='flexButton'>Buy Now</button>
                        </div>
                    </div>
                    <div className="image2">
                        <div className="colouredImage"></div>
                        <div className="titleAndDescription">
                            <span>Product Title</span>
                            <p>Space for a small description</p>
                        </div>
                        <div className="priceAndBtn">
                            <span>1.48 USD</span>
                            <button className='flexButton'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSellingProduct