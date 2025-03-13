import React from 'react';
import styled from 'styled-components';
import { ButtonContainer, Button } from '../../ui/Buttons';
import messageIcon from '../../assets/png/message.png';

const ProductDetails = styled.div`
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #e8ebec;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  height: fit-content; 
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

const ProductInfo = ({ product }) => {
  return (
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
  );
};

export default ProductInfo;
