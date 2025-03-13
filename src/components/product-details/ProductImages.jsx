import React from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ProductImagesWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const StyledProductImages = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImagesColumn = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  gap: 10px;
`;

const SmallImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid #e8ebec;
  padding: 5px;
  border-radius: 4px;
  transition: transform 0.2s, opacity 0.2s;
  background-color: #fff;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const BigImageWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 600px;
  max-height: 480px;
  border: 1px solid #e8ebec;
  overflow: hidden;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BigImage = styled.img`
  width: 80%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const CarouselWrapper = styled.div`
  display: none;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const ResponsiveImage = styled.div`
  width: 100%;
  max-width: 100%; 
  height: auto;
  padding:30px  20px;
  padding-bottom: 0px;
  box-sizing: border-box;
  div{
    width: 100%;
    border: 1px solid red;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    box-sizing: border-box;
    img {
      width: 80%;
      max-width: 70%;
      height: auto;
      border-radius: 8px;
    }
  }
`;


const ProductImages = ({ images, selectedImage, setSelectedImage }) => {
  const carouselItems = images.map((img, index) => (
    <ResponsiveImage key={index}>
      <div>
        <img src={img}
          alt="Product" />
      </div>
    </ResponsiveImage>
  ));

  return (
    <ProductImagesWrapper>
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
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <AliceCarousel
            mouseTracking
            items={carouselItems}
            infinite={true}
            autoPlay={true}
            disableButtonsControls={true} // Try removing centerMode
          />
        </div>


        {/* <ResponsiveImage key={'1'}>
          <img src={images[0]}
            alt="Product" />
        </ResponsiveImage> */}
      </CarouselWrapper>

    </ProductImagesWrapper >
  );
};

export default ProductImages;
