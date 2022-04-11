import React from 'react'
import EcomProduct from './EcomProduct'
import { FaStar, FaAngleDown } from 'react-icons/fa';

function Products() {
    return (
        <>
            <div className="container" >
                <div className="sideBar">
                    <div className="categories1">
                        <h3>Categories</h3>
                        <ul className="myUl">
                            <div className="category">
                                <li>Category Name</li>
                                <span className='svg'>320</span>
                            </div>
                            <div className="category">
                                <li>Category Name</li>
                                <span className='svg'>112</span>
                            </div>
                            <div className="category">
                                <li>Category Name</li>
                                <span className='svg'>32</span>
                            </div>
                            <div className="category">
                                <li>Category Name</li>
                                <span className='svg'>48</span>
                            </div>
                        </ul>
                    </div>
                    <div className="brands">
                        <h3>Brands</h3>
                        <ul className="myUl">
                            <div className="brandItems">
                                <input type="checkbox" name="check_input" id="check_input5" />
                                <label className="square_box" htmlFor='check_input5'></label>
                                <li>Filter by brand item</li>
                            </div>
                            <div className="brandItems">
                                <input type="checkbox" name="check_input" id="check_input6" />
                                <label className="square_box" htmlFor='check_input6'></label>
                                <li>Filter by brand item</li>
                            </div>
                            <div className="brandItems">
                                <input type="checkbox" name="check_input" id="check_input7" />
                                <label className="square_box" htmlFor='check_input7'></label>
                                <li>Filter by brand item</li>
                            </div>
                            <div className="brandItems">
                                <input type="checkbox" name="check_input" id="check_input8" />
                                <label className="square_box" htmlFor='check_input8'></label>
                                <li>Filter by brand item</li>
                            </div>
                            <div className="brandItems">
                                <input type="checkbox" name="check_input" id="check_input9" />
                                <label className="square_box" htmlFor='check_input9'></label>
                                <li>Filter by brand item</li>
                            </div>
                        </ul>
                    </div>
                    <div className="ratings">
                        <h3>Rating</h3>
                        <ul className="myUl">
                            <div className="rating">
                                <input type="checkbox" name="check_input" id="check_input10" />
                                <label className="square_box" htmlFor='check_input10'></label>
                                <li><FaStar className='golden' /><FaStar className='golden' /><FaStar className='golden' /><FaStar className='golden' /><FaStar className='golden' /></li>
                            </div>
                        </ul>
                        <ul className="myUl">
                            <div className="rating">
                                <input type="checkbox" name="check_input" id="check_input11" />
                                <label className="square_box" htmlFor='check_input11'></label>
                                <li><FaStar className='golden' /><FaStar className='golden' /><FaStar className='golden' /><FaStar className='golden' /><FaStar className="white" /></li>
                            </div>
                        </ul>
                        <ul className="myUl">
                            <div className="rating">
                                <input type="checkbox" name="check_input" id="check_input12" />
                                <label className="square_box" htmlFor='check_input12'></label>
                                <li><FaStar className='golden' /><FaStar className='golden' /><FaStar className='golden' /><FaStar className="white" /><FaStar className="white" /></li>
                            </div>
                        </ul>
                        <ul className="myUl">
                            <div className="rating">
                                <input type="checkbox" name="check_input" id="check_input13" />
                                <label className="square_box" htmlFor='check_input13'></label>
                                <li><FaStar className='golden' /><FaStar className='golden' /><FaStar className="white" /><FaStar className="white" /><FaStar className="white" /></li>
                            </div>
                        </ul>
                        <ul className="myUl">
                            <div className="rating">
                                <input type="checkbox" name="check_input" id="check_input14" />
                                <label className="square_box" htmlFor='check_input14'></label>
                                <li><FaStar className='golden' /><FaStar className="white" /><FaStar className="white" /><FaStar className="white" /><FaStar className="white" /></li>
                            </div>
                        </ul>
                    </div>
                    <div className="prices">
                        <h3>Price</h3>
                        <div className="priceRelated">
                            <input type="range" id="ranger" min={5} max={10000} />
                        </div>
                        <div className="minAndMax">
                            <div className="min">
                                <span>Min</span>
                                <input type="text" id="minimum" placeholder='5' />
                            </div>
                            <div className="max">
                                <span>Max</span>
                                <input type="text" id="maximum" placeholder='1000' />
                            </div>
                        </div>
                        <div className="buttons1">
                            <button className='flexButton'>Apply</button>
                            <button className='flexButton1'>Reset</button>
                        </div>
                    </div>
                </div>

                <div className="products">
                    <EcomProduct />
                    <EcomProduct />
                    <EcomProduct />
                    <EcomProduct />
                    <EcomProduct />
                </div>

            </div >
            <div className="endPart">
                <div className="page">
                    <span>Page:</span>
                    <span>1</span>
                    <span>2</span>
                    <span className='activeLink'>3</span>
                    <span>4</span>
                </div>
                <div className="button">
                    <button className='flexButton'>Show More Products <FaAngleDown /></button>
                </div>
                <div className="sth">
                    <span className='svg'>336</span>
                    <span style={{ color: '#b0b1b3' }}> Products</span>
                </div>
            </div>
        </>
    )
}

export default Products