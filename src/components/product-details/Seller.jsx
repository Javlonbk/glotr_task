import React, { useState } from "react";
import styled from "styled-components";
import { FaCaretDown, FaCaretUp, FaEthernet, FaFirefoxBrowser, FaIntercom, FaInternetExplorer, FaPhone } from "react-icons/fa";
import companyIcon from '../../assets/png/Amazon.png'
import { Button, ButtonContainer } from "../../ui/Buttons";

const SellerContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e8ebec;
  padding: 15px;
  border-radius: 8px;
  width: 40%;
`;

const SellerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
`;

const SellerLink = styled.span`
  color: #f24236;
  cursor: pointer;
  font-weight: 500;
`;

const SellerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const SellerDetails = styled.p`
  font-size: 14px;
  color: #444;
  span {
    display: block;
    font-size: 12px;
    color: #777;
  }
`;

const ShowMoreButton = styled.span`
  color: #1D9EF9;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ContactSection = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #444;
`;

const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 500;
  color: #1D9EF9;
`;

const Seller = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleShowMore = () => setIsExpanded(!isExpanded);

    return (
        <SellerContainer>
            <SellerHeader>
                <p>Продавец</p>
                <SellerLink>Перейти на сайт</SellerLink>
            </SellerHeader>

            <SellerInfo>
                <img src={companyIcon} alt="Company Logo" width={40} height={40} />
                <SellerDetails>
                    Amazon <span>г. Ташкент, Узбекистан</span>
                </SellerDetails>
            </SellerInfo>

            <ContactSection>
                Сегодня работает до 18:00
                <ShowMoreButton onClick={toggleShowMore}>
                    {isExpanded ? "Скрыть график" : "Весь график"}{" "}
                    {isExpanded ? <FaCaretUp /> : <FaCaretDown />}
                </ShowMoreButton>
            </ContactSection>

            {isExpanded && (
                <ContactSection>
                    <p>Понедельник - Пятница: 9:00 - 18:00</p>
                    <p>Суббота: 10:00 - 16:00</p>
                    <p>Воскресенье: Выходной</p>
                </ContactSection>
            )}

            <PhoneNumber>
                <FaPhone />
                <span>+998 99 ... показать номер</span>
            </PhoneNumber>

            <SellerLink style={{ display: "block", marginTop: "10px" }}>
                <FaFirefoxBrowser />
                amazon.com
            </SellerLink>
            <ButtonContainer>
                <Button darker>
                <SellerLink style={{ display: "block", marginTop: "5px" }}>
                    Все товары продавца
                </SellerLink>
                </Button>
                <Button>
                <SellerLink style={{ display: "block", marginTop: "5px" }}>
                    Заказать звонок
                </SellerLink>
                </Button>
            </ButtonContainer>
        </SellerContainer>
    );
};

export default Seller;
