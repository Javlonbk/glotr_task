import React from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const StyledProductImages = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; /* Hide grid layout on small screens */
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
  flex-grow: 1;
  width: 100%;
  border: 1px solid #e8ebec;
  overflow: hidden;
  padding: 8px;
`;

const BigImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const CarouselWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ResponsiveImages = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  img{
    width: 100%;
    border-radius: 8px;
    background-color: #fff;
  }
`

const ProductImages = ({ images, selectedImage, setSelectedImage }) => {
  const carouselItems = images.map((img, index) => (
    <ResponsiveImages>
      key={index}
      <img src={img}
      alt="Product"/>
      </ResponsiveImages>
  ));

  return (
    <>
      {/* Desktop View */}
      <StyledProductImages>
        <ImagesColumn>
          {images.map((img, index) => (
            <SmallImage key={index} src={img} onClick={() => setSelectedImage(img)} />
          ))}
        </ImagesColumn>
        <BigImageWrapper>
          {selectedImage && <BigImage src={selectedImage} alt="Product" />}
        </BigImageWrapper>
      </StyledProductImages>

      {/* Mobile View - AliceCarousel (Shows only 1 image at a time) */}
      <CarouselWrapper>
        <AliceCarousel
          items={carouselItems}
          autoPlayInterval={3000}
          mouseTracking
          infinite={true}
          autoPlay={true}
          centerMode
          disableButtonsControls={true}
        />
      </CarouselWrapper>
    </>
  );
};

export default ProductImages;
