import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductCard = styled(Link)`
    width: 100%;
    max-width: 240px;
    border-radius: 8px;
    padding: 20px 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
`

const ProductImage = styled.img`
    width: 90%;
    height: auto;
    max-height: 150px;
    object-fit: contain;
`

const ProductName = styled(Link)`
    font-weight: 500;
    font-size: 14px;
    color: #2f2f2f;
    margin-top: 10px;
    display: block;
    text-decoration: none;
`

const Availability = styled.span`
    font-weight: 500;
    font-size: 12px;
    color: #18bf6f;
    margin-top: 5px;
`

const Price = styled.div`
    font-weight: 700;
    font-size: 18px;
    color: #f24236;
    margin-top: 12px;
    
    span {
        font-weight: 500;
        font-size: 16px;
    }
`
const ReadMore = styled.div`
    
`

const SellerInfo = styled.div`
    margin-top: 10px;
`

const SellerName = styled(Link)`
    font-weight: 500;
    font-size: 14px;
    color: #2f2f2f;
    text-decoration: none;
`

const Location = styled.span`
    font-weight: 500;
    font-size: 12px;
    color: #7d7d7d;
    display: block;
    margin-top: 6px;
`

const ProductItem = ({ product }) => {
    const { id, imgUrl, name, exist, price, seller, location } = product;

    return (
        <ProductCard to={`/products/${id}`}>
            <ProductImage src={imgUrl} alt={name} />
            <ProductName to={`/products/${id}`}>{name}</ProductName>
            <Availability>{exist}</Availability>
            <Price>{price}<span> so'm</span></Price>
            <SellerInfo>
                <SellerName to={`/seller/${seller}`}>{seller}</SellerName>
                <Location>{location}</Location>
            </SellerInfo>
        </ProductCard>
    )
}

export default ProductItem
