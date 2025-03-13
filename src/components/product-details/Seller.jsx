import React, { useState } from "react";
import styled from "styled-components";
import { FaCaretDown, FaCaretUp, FaClock, FaPhone, FaGlobe } from "react-icons/fa";
import companyIcon from "../../assets/png/Amazon.png";
import { Button, ButtonContainer } from "../../ui/Buttons";

const SellerContainer = styled.div`
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #e8ebec;
  padding: 15px;
  border-radius: 8px;
  height: fit-content;
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

const ContactSection = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #444;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ShowMoreButton = styled.span`
  color: #1D9EF9;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 500;
  color: #1D9EF9;
  margin-top: 10px;
`;

const WebsiteLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f24236;
  font-weight: 500;
  margin-top: 10px;
  text-decoration: none;
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
        <FaClock size={18} color="#F24236" />
        Сегодня работает до 18:00
        <ShowMoreButton onClick={toggleShowMore}>
          {isExpanded ? "Скрыть график" : "Весь график"} {isExpanded ? <FaCaretUp /> : <FaCaretDown />}
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
        <FaPhone size={18} color="#F24236" />
        <span>+998 99 ... показать номер</span>
      </PhoneNumber>

      <WebsiteLink href="https://amazon.com" target="_blank">
        <FaGlobe size={18} />
        amazon.com
      </WebsiteLink>

      <ButtonContainer>
        <Button style={{ width: "47%" }} darker>
          Все товары продавца
        </Button>
        <Button style={{ width: "47%" }}>
          Заказать звонок
        </Button>
      </ButtonContainer>
    </SellerContainer>
  );
};

export default Seller;
