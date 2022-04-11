import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function CategoryMenu() {
    return (
        <>
            <div className="container1">
                <div className="categoryMenu">
                    <h3>Category Menu</h3>
                    <ul className="myUl1">
                        <li><a href="/">Bakery</a></li>
                        <li><Link to="/products">Fruits and vegetables</Link></li>
                        <li><a href="/">Meat and fish</a></li>
                        <li><a href="/">Drinks</a></li>
                        <li><a href="/">Kitchen</a></li>
                    </ul>
                    <button className="categoriesBtn">
                        <span>More categories</span>
                        <FaAngleRight />
                    </button>
                </div>
                <div className="images">
                    <div className="image1">
                        <div className="heading">
                            <p>Banner subfocus</p>
                            <h3>Space for heading</h3>
                        </div>
                        <div className="recipeDiv">
                            <button className='recipeBtn'>
                                <span>Read recepies</span>
                                <FaAngleRight />
                            </button>
                        </div>
                    </div>
                    <div className="image1">
                        <div className="heading">
                            <p>Banner subfocus</p>
                            <h3>Space for heading</h3>
                        </div>
                        <div className="recipeDiv">
                            <button className='recipeBtn'>
                                <span>Read recepies</span>
                                <FaAngleRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryMenu