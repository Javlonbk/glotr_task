import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  background-color: ${({ darker }) => (darker ? '#F24236' : '#f7a19b')};
  color: ${({ darker }) => (darker ? '#fff' : '#F24236')};
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: ${({ darker }) => (darker ? '#d13028' : '#f5a8a2')};
  }
`;
