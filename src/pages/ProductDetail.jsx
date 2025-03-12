import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import messageIcon from '../assets/png/message.png';
import products from '../util/db';
import ShowMore from '../components/show-more/ShowMore';
import { Paragraph } from '../ui/Text';
import Seller from '../components/seller/Seller';
import { ButtonContainer, Button } from '../ui/Buttons';

const ProductDetailWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  margin-top: 40px;
  padding: 20px;
  flex-wrap: wrap;
  .red-text{
    color: #f24236;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-left: 10px;
  }
`;

const ImagesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SmallImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid #e8ebec;
  padding: 5px;
  border-radius: 4px;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const BigImageWrapper = styled.div`
  width: 50%;
  max-width: 450px;
  background-color: #fff;
  border: 1px solid #e8ebec;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const BigImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;

const ProductDetails = styled.div`
  flex: 1;
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #e8ebec;
  padding: 15px;
  border-radius: 8px;
`;

const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 22px;
  color: #f24236;
  margin-top: 20px;
`;

const Availability = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  color: rgba(44, 44, 44, 0.6);
  span {
    border-radius: 5px;
    color: #18bf6f;
    background-color: rgba(24, 191, 111, 0.1);
    padding: 2px 5px;
  }
`;

const ProductDescription = styled.div`
  width: 40%;
  background-color: #fff;
  border: 1px solid #e8ebec;
  padding: 15px;
  border-radius: 8px;
  ul{
    li{
        padding: 10px;
        font-size: 14px;
        font-weight: 500;
    }
  }
`;

const SpecificationsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.tr`
  background-color: ${({ index }) => (index % 2 === 0 ? "#ffffff" : "#f5f6f8")};
`;

const TableCell = styled.td`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #ddd;
  color: #333;
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
            {/* Left: Small Images Column */}
            <ImagesColumn>
                {product.images.map((img, index) => (
                    <SmallImage key={index} src={img} onClick={() => setSelectedImage(img)} />
                ))}
            </ImagesColumn>

            {/* Center: Big Image Display */}
            <BigImageWrapper>
                {selectedImage && <BigImage className="visible" src={selectedImage} alt="Product" />}
            </BigImageWrapper>

            {/* Right: Product Details */}
            <ProductDetails>
                <ProductTitle>{product.name}</ProductTitle>
                <Availability>
                    <span>{product.exist}</span> Код: P-0894259
                </Availability>
                <Price>{product.price} so'm / dona</Price>
                <ButtonContainer>
                    <Button style={{ width: '80%' }} darker>
                        Уточнить наличие
                    </Button>
                    <img style={{ width: '18%' }} src={messageIcon} alt="Message Icon" />
                </ButtonContainer>
            </ProductDetails>

            {product.read_more && (
                <ProductDescription>
                    <Paragraph>Описание</Paragraph>
                    <ShowMore>{product.read_more}</ShowMore>
                </ProductDescription>
            )}

            <ProductDescription>
                <Paragraph>Характеристики</Paragraph>
                <ShowMore>
                    <SpecificationsTable>
                        <tbody>
                            <TableRow index={0}>
                                <TableCell>Код товара</TableCell>
                                <TableCell>MGN93RU/A</TableCell>
                            </TableRow>
                            <TableRow index={1}>
                                <TableCell>Производитель</TableCell>
                                <TableCell>Apple</TableCell>
                            </TableRow>
                            <TableRow index={2}>
                                <TableCell>Разрешение экрана</TableCell>
                                <TableCell>2560x1600</TableCell>
                            </TableRow>
                            <TableRow index={3}>
                                <TableCell>Количество ядер процессора</TableCell>
                                <TableCell>8</TableCell>
                            </TableRow>
                            <TableRow index={4}>
                                <TableCell>Оптический привод</TableCell>
                                <TableCell>Отсутствует</TableCell>
                            </TableRow>
                        </tbody>
                    </SpecificationsTable>
                </ShowMore>
            </ProductDescription>

            <ProductDescription>
                <Paragraph>Способы оплаты</Paragraph>
                <ShowMore>
                    <ul>
                        <li>- Наличными</li>
                        <li>- Перечислением</li>
                        <li>- Терминал UzCard</li>
                        <li>- Терминал HUMO</li>
                        <li>- POS терминал</li>
                        <li>- Рayme</li>
                        <li></li>
                    </ul>
                </ShowMore>
            </ProductDescription>

            <ProductDescription>
                <Paragraph>Способы доставки</Paragraph>
                <ShowMore>
                    <ul>
                        <li>- Доставка куръером</li>
                        <li>- Доставка почтой</li>
                        <li>- Доставка куръером</li>
                        <li>- Доставка почтой</li>
                    </ul>
                </ShowMore>
            </ProductDescription>
            <Seller />
        </ProductDetailWrapper>
    );
};

export default ProductDetail;
