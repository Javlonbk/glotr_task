import React from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components';
import banner1Image from '../../assets/png/banner1.png'
import banner2Image from '../../assets/png/banner2.png'
import bannerRightImage from '../../assets/png/advertisement.png'

const StyledBanner = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    img{
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
`
const StyledBannerLeft = styled.div`
    width: 74%;
    height: 100%;
`
const StyledBannerCard = styled.a`
    width: 100%;
    height: 100%;
`
const StyledBannerRight = styled.a`
    width: 24%;
`

const Banner = () => {

    const banner = [
        { id: 1, imgUrl: banner1Image },
        { id: 2, imgUrl: banner2Image }
    ]

    const cards = banner.map(card => {
        return (
            <StyledBannerCard key={card.id}>
                <img src={card.imgUrl} alt="" />
            </StyledBannerCard>
        )
    })

    return (
        <StyledBanner>
            <StyledBannerLeft>
                <AliceCarousel
                    mouseTracking
                    items={cards}
                    infinite={true}
                    autoPlay={true}
                    centerMode
                    disableButtonsControls={true}
                />
            </StyledBannerLeft>
            <StyledBannerRight>
                <img src={bannerRightImage} alt="" />
            </StyledBannerRight>
        </StyledBanner>
    )
}

export default Banner