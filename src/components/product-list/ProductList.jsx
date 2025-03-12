import React from 'react'
import styled from 'styled-components'
import ProductItem from '../product-item/ProductItem'
import products from '../../util/db'

const ProductGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    padding: 15px;
    background-color: #f5f6f8;
    box-sizing: border-box;
    justify-content: center;
    place-items: center;
`

const ProductList = () => {

  return (
    <ProductGrid>
      {products.map((product, index) => {
        const imgUrl = product.images[0];
        return <ProductItem product={{ ...product, imgUrl }} key={index} />;
      })}
    </ProductGrid>

  )
}

export default ProductList
