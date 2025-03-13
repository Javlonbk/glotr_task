import React, { useState } from "react";
import { ConfirmContainer } from "./style";

const ConfirmOrder = ({ setIsConfirmed }) => {
  const [code, setCode] = useState("");

  return (
    <>
      <ConfirmContainer.Title>Подтвердите заказ</ConfirmContainer.Title>
      <ConfirmContainer.Description>
        Для подтверждения заказа мы вам отправили код на ваш номер
        <br />
        <ConfirmContainer.PhoneNumber>+998 90 909 90 90</ConfirmContainer.PhoneNumber>
      </ConfirmContainer.Description>
      <ConfirmContainer.Input
        type="text"
        placeholder="Код"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <ConfirmContainer.Timer>
        Получить код повторно можно через: <strong>1:52</strong>
      </ConfirmContainer.Timer>
      <ConfirmContainer.ConfirmButton onClick={() => setIsConfirmed(true)}>
        Подтвердить заказ
      </ConfirmContainer.ConfirmButton>
      <ConfirmContainer.CancelButton>
        Отменить
      </ConfirmContainer.CancelButton>
    </>
  );
};

export default ConfirmOrder;
