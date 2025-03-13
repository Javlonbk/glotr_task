import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../ui/Text';
import ShowMore from '../show-more/ShowMore';

const DeliveryMethodsWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #e8ebec;
  padding: 15px;
  border-radius: 8px;
`;

const DeliveryMethods = () => {
  return (
    <DeliveryMethodsWrapper>
      <Paragraph>Способы доставки</Paragraph>
      <ShowMore>
        <ul>
          <li>- Доставка курьером</li>
          <li>- Доставка почтой</li>
        </ul>
      </ShowMore>
    </DeliveryMethodsWrapper>
  );
};

export default DeliveryMethods;
