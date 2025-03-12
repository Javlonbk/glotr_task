import React from 'react'
import Container from '../components/container/Container'
import Banner from '../components/banner/Banner'
import ProductList from '../components/product-list/ProductList'

const Home = () => {
    return (
        <div>
            <Container>
                <Banner />
            </Container>
            <ProductList />
        </div>
    )
}

export default Home