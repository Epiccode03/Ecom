import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import CategoryMenu from './CategoryMenu';
import BestSellingProduct from './BestSellingProduct'
import BestFromFarmers from './BestFromFarmers';
import Section from './Section';
import BlogPost from './BlogPost';

function HomePage() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <CategoryMenu />
                <BestSellingProduct />
                <BestFromFarmers />
                <Section />
                <BlogPost />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default HomePage