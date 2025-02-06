import React from 'react'
import Header from '../component/header'
import Products from '../pages/products'
import Footer from '../component/footer'

const Layout = () => {
    return (
        <div>
            <Header />
            <Products />
            <Footer />
        </div>
    )
}

export default Layout