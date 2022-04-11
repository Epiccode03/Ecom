import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import authorImg from './image.jpg'

function BlogPost() {
    return (
        <>
            <div className="container7">
                <h3>Read our blog posts</h3>
                <button className="btn">
                    <span>Go to blog</span>
                    <FaAngleRight />
                </button>
            </div>
            <div className="container8">
                <div className="bigImg">
                    <span className='tips'>Dinner tips</span>
                    <div className="author">
                        <h2>Our chef tips for a great and tasty dinner ready in 20 minutes</h2>
                        <div className='authorImg'>
                            <img src={authorImg} alt="" />
                            <span>Author</span>
                            <span>17.6.2020</span>
                        </div>
                    </div>
                </div>
                <div className="smallImg">
                    <div className="img"></div>
                    <div className="author1">
                        <span className='tip1'>Vegetable</span>
                        <h2>Which vegetable your family will love and want's eat each day</h2>
                        <div className="aboutAuthor">
                            <span>Author</span>
                            <span>15.6.2020</span>
                        </div>
                    </div>
                </div>
                <div className="foods">
                    <div className="food">
                        <div className="aboutFood">
                            <span className="text">Salad is kinda good start to your morning routines</span>
                            <div className="aboutAuthor1">
                                <span>Author</span>
                                <span>14.1.2020</span>
                            </div>
                        </div>
                        <div className="foodImg"></div>
                    </div>
                    <div className="food">
                        <div className="aboutFood">
                            <span className="text">Our chef tips for a great and healty breakfast</span>
                            <div className="aboutAuthor1">
                                <span>Author</span>
                                <span>14.1.2020</span>
                            </div>
                        </div>
                        <div className="foodImg"></div>
                    </div>
                    <div className="food">
                        <div className="aboutFood">
                            <span className="text">Prepare a simple and delicious breads</span>
                            <div className="aboutAuthor1">
                                <span>Author</span>
                                <span>14.1.2020</span>
                            </div>
                        </div>
                        <div className="foodImg"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPost