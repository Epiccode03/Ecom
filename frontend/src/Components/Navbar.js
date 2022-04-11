import React from 'react'
import { FaAngleDown, FaSearch, FaUser, FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="head">
                <div className="contact">
                    <ul>
                        <li className='activeLink'>Chat with us</li>
                        <li>+420 336 775 664</li>
                        <li>info@freshnessecom.com</li>
                    </ul>
                </div>
                <div className="navItems">
                    <ul>
                        <li>Blog</li>
                        <li>About Us</li>
                        <li>Carrers</li>
                    </ul>
                </div>
            </div>
            <div className="head1">
                <h1 className='name'><Link to="/"> Freshnessecom</Link></h1>
                <div className="searchBar">
                    <div className="categories">
                        <span>All Categories</span>
                        <FaAngleDown className='angleDown' />
                        <div className="dropDown">
                            <ul>
                                <li>Category</li>
                                <li>Category</li>
                                <li>Category</li>
                                <li>Category</li>
                                <li>Category</li>
                            </ul>
                        </div>
                    </div>
                    <div className="input">
                        <input type="text" placeholder='Search Products,Categories...' />
                        <FaSearch />
                    </div>
                </div>
                <div className="icons">
                    <FaUser />
                    <FaShoppingBasket />
                    <Link to="/cart"> <FaShoppingCart /></Link>
                </div>
            </div>
            <div className="head2">
                <ul>
                    <li>
                        <span>Bakery</span>
                        <FaAngleDown />
                    </li>
                    <li>
                        <span><Link to="/products">Fruits and vegetables</Link></span>
                        <FaAngleDown />
                    </li>
                    <li>
                        <span>Meat and fish</span>
                        <FaAngleDown />
                    </li>
                    <li>
                        <span>Drinks</span>
                        <FaAngleDown />
                    </li>
                    <li>
                        <span>Kicthen</span>
                        <FaAngleDown />
                    </li>
                    <li>
                        <span>Special nutrition</span>
                        <FaAngleDown />
                    </li>
                    <li>
                        <span>Baby</span>
                        <FaAngleDown />
                    </li>
                    <li>
                        <span>Pharmacy</span>
                        <FaAngleDown />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar