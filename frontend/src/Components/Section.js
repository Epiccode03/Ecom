import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import randomImage from './image.jpg'

function Section() {
    return (
        <>
            <div className="container3">
                <h3>Our Customer says</h3>
                <button className="btn">
                    <span>Button</span>
                    <FaAngleRight />
                </button>
            </div>
            <div className="container4">
                <div className="slider">
                    <div className="customer">
                        <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur?</p>
                        <span>Name and surname</span>
                        <img src={randomImage} alt="person" />
                    </div>
                    <div className="customer">
                        <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur?</p>
                        <span>Name and surname</span>
                        <img src={randomImage} alt="person" />
                    </div>
                    <div className="customer">
                        <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur?</p>
                        <span>Name and surname</span>
                        <img src={randomImage} alt="person" />
                    </div>
                    <div className="customer">
                        <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur?</p>
                        <span>Name and surname</span>
                        <img src={randomImage} alt="person" />
                    </div>
                    <div className="customer">
                        <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur?</p>
                        <span>Name and surname</span>
                        <img src={randomImage} alt="person" />
                    </div>
                    <div className="customer">
                        <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur?</p>
                        <span>Name and surname</span>
                        <img src={randomImage} alt="person" />
                    </div>
                    <div className="customer">
                        <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur?</p>
                        <span>Name and surname</span>
                        <img src={randomImage} alt="person" />
                    </div>
                    <div className="customer">
                        <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur?</p>
                        <span>Name and surname</span>
                        <img src={randomImage} alt="person" />
                    </div>
                    <div className="customer">
                        <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur?</p>
                        <span>Name and surname</span>
                        <img src={randomImage} alt="person" />
                    </div>
                </div>
            </div>
            <div className="container5">
                <h3>Section headline</h3>
                <button className="btn">
                    <span>Button</span>
                    <FaAngleRight />
                </button>
            </div>
            <div className="container6">
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

export default Section