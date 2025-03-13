import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import products from '../util/db';
import ShowMore from '../components/show-more/ShowMore';
import { Paragraph } from '../ui/Text';
import ProductImages from '../components/product-details/ProductImages';
import DeliverMethods from '../components/product-details/DeliverMethods';
import PaymentMethods from '../components/product-details/PaymentMethods';
import ProductInfo from '../components/product-details/ProductInfo';
import ProductSpecifications from '../components/product-details/ProductSpecifications';
import Seller from '../components/product-details/Seller';

const ProductDetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 40px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fcfcfc;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ProductImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FullWidthSection = styled.div`
  grid-column: 1 / -1;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
`;

const ProductDescription = styled.div`
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  margin-top: 10px;
`;

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (product?.images?.length > 0) {
            setSelectedImage(product.images[0]);
        }
    }, [product]);

    if (!product) {
        return <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Product Not Found</h2>;
    }

    return (
        <ProductDetailWrapper>
            {/* Left: Product Images */}
            <ProductImagesWrapper>
                <ProductImages images={product.images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            </ProductImagesWrapper>

            {/* Right: Product Info */}
            <ProductInfoWrapper>
                <ProductInfo product={product} />
                <Seller />
            </ProductInfoWrapper>

            {/* Full Width Sections */}
            {product.read_more && (
                <FullWidthSection>
                    <ProductDescription>
                        <Paragraph>Описание</Paragraph>
                        <ShowMore>{product.read_more}</ShowMore>
                    </ProductDescription>
                </FullWidthSection>
            )}

            <FullWidthSection>
                <ProductSpecifications />
            </FullWidthSection>

            <FullWidthSection>
                <PaymentMethods />
            </FullWidthSection>

            <FullWidthSection>
                <DeliverMethods />
            </FullWidthSection>

            
        </ProductDetailWrapper>
    );
};

export default ProductDetail;
