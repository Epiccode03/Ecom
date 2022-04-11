import React from 'react'
import Navbar from './Navbar';
import Filter from './Filter';
import Products from './Products';
import Footer from './Footer';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <header>
                <Navbar />
                <div className='homepage'>
                    <span><Link to="/">Homepage</Link></span>
                    <span>/</span>
                    <span>Fruits and vegetables</span>
                </div>
                <Filter />
            </header>
            <main>
                <Products />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Home