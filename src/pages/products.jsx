import React, { useEffect, useState } from 'react'
import Card from './card'
import Filter from './filter'
import { getData } from '../repository'
import { get_product_list_API } from '../api'

const Products = () => {
    const [isFilterVisible, setIsFilterVisible] = useState(false)
    const [products, setProduct] = useState([])
    useEffect(() => {
        productList()
    }, [])
    const productList = async () => {
        try {
            const response = await getData(get_product_list_API)
            setProduct(response)
        }
        catch (error) {

        }
    }
    return (
        <div>
            <div className='content-center'>
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p className='marginTop-20'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus</p>
                <p className='marginTop-10'>scelerisque.Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
            <div className='products-container'>
                <hr />
                <div className='content-between '>
                    <div className='hide-filter cursor' onClick={() => setIsFilterVisible(!isFilterVisible)}>
                        {
                            isFilterVisible ?
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M14 19l-7-7 7-7"></path>
                                    </svg>
                                    <u>HIDE FILTER</u>
                                </>
                                :
                                <>
                                    <u>SHOW FILTER</u>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M10 5l7 7-7 7"></path>
                                    </svg>
                                </>
                        }


                    </div>
                    <div>
                        <label className="dropdown">
                            <div className="dd-button">
                                RECOMMENDED
                            </div>
                            <input type="checkbox" className="dd-input" id="test" />
                            <ul className="dd-menu">
                                <li>NEWEST FIRST</li>
                                <li>POPULAR</li>
                                <li>PRICE : HIGH TO LOW</li>
                                <li>PRICE : LOW TO HIGH</li>
                            </ul>
                        </label>
                    </div>

                </div>
                <hr />

                <div className="container">
                    <main className="main-content">
                        {isFilterVisible && (
                            <Filter />
                        )}

                        <section className="products-grid">
                            {
                                products?.map((item) =>
                                    <Card item={item} />
                                )
                            }
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Products