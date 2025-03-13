import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const ActionsBoxContainer = styled.div`
  display: flex;
`;

const ActionBox = styled.a`
  width: 48px;
  height: 48px;
  padding: 12px;
  box-sizing: border-box;
  background-color: #f4f4f6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-size: 24px;
  color: #333;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const AccountActions = () => {
  return (
    <ActionsBoxContainer>
      <ActionBox>
        <FaHeart />
      </ActionBox>
      <ActionBox>
        <FaShoppingCart />
      </ActionBox>
      <ActionBox>
        <FaUser />
      </ActionBox>
    </ActionsBoxContainer>
  );
};

export default AccountActions;
