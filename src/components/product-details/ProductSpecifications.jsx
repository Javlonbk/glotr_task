import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../ui/Text';
import ShowMore from '../show-more/ShowMore';

const SpecificationsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableCell = styled.td`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #ddd;
  color: #333;
`;

const ProductSpecifications = () => {
  return (
    <div>
      <Paragraph>Характеристики</Paragraph>
      <ShowMore>
        <SpecificationsTable>
          <tbody>
            <tr><TableCell>Код товара</TableCell><TableCell>MGN93RU/A</TableCell></tr>
            <tr><TableCell>Производитель</TableCell><TableCell>Apple</TableCell></tr>
            <tr><TableCell>Разрешение экрана</TableCell><TableCell>2560x1600</TableCell></tr>
          </tbody>
        </SpecificationsTable>
      </ShowMore>
    </div>
  );
};

export default ProductSpecifications;
