import React from "react";
import { ReadyOrderContainer } from "./style";
import { FiCheckCircle, FiClock, FiMapPin, FiPhone, FiGlobe } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import companyLogo from '../../assets/png/Amazon.png'

const ReadyOrder = () => {
  return (
    <ReadyOrderContainer>

      <ReadyOrderContainer.CompanyInfo>
        <img src={companyLogo} alt="Company Logo" />
        <div>
          <strong>E-bidet Uzbekistan</strong>
          <p>Ташкент, Шайхонтохурский район</p>
        </div>
      </ReadyOrderContainer.CompanyInfo>

      <ReadyOrderContainer.SuccessBox>
        <ReadyOrderContainer.CheckIcon>
          <FiCheckCircle size={22} />
        </ReadyOrderContainer.CheckIcon>
        <div>
          <strong>Номер заказа: 3957</strong>
          <p>Ваш заказ успешно принят и передан на обработку продавцу.</p>
        </div>
      </ReadyOrderContainer.SuccessBox>

      <ReadyOrderContainer.Details>
        <ReadyOrderContainer.Row>
          <span><FaBuilding /> Компания</span>
          <strong>E-bidet Uzbekistan</strong>
        </ReadyOrderContainer.Row>
        <ReadyOrderContainer.Row>
          <span><FiMapPin /> Адрес</span>
          <strong>г. Ташкент, ул. Сапароска 35 В два строя</strong>
        </ReadyOrderContainer.Row>
        <ReadyOrderContainer.Row>
          <span><FiClock /> График работы</span>
          <ReadyOrderContainer.WorkTime>Посмотреть</ReadyOrderContainer.WorkTime>
        </ReadyOrderContainer.Row>
        <ReadyOrderContainer.Row>
          <span><FiPhone /> Номер телефона</span>
          <strong>+998 90 909 90 90</strong>
        </ReadyOrderContainer.Row>
        <ReadyOrderContainer.Row>
          <span><FiGlobe /> Сайт</span>
          <a href="https://wellbidet.uz" target="_blank" rel="noopener noreferrer">
            wellbidet.uz
          </a>
        </ReadyOrderContainer.Row>
      </ReadyOrderContainer.Details>

      <ReadyOrderContainer.ConfirmButton>Все товары продавца</ReadyOrderContainer.ConfirmButton>
    </ReadyOrderContainer>
  );
};

export default ReadyOrder;
