import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';

function CartPage() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Cart />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default CartPage