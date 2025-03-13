import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../ui/Text';
import ShowMore from '../show-more/ShowMore';

const PaymentMethodsWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #e8ebec;
  padding: 15px;
  border-radius: 8px;
`;

const PaymentMethods = () => {
  return (
    <PaymentMethodsWrapper>
      <Paragraph>Способы оплаты</Paragraph>
      <ShowMore>
        <ul>
          <li>- Наличными</li>
          <li>- Перечислением</li>
          <li>- Терминал UzCard</li>
          <li>- Терминал HUMO</li>
          <li>- POS терминал</li>
          <li>- Payme</li>
        </ul>
      </ShowMore>
    </PaymentMethodsWrapper>
  );
};

export default PaymentMethods;
