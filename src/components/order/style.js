import styled from "styled-components";

export const ConfirmContainer = styled.div`
  width: 100px;
  height: 40px;
  background: #00b2bf;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 1000;
  transition: background 0.3s ease;

  &:hover {
    background: #008a98;
  }
`;

ConfirmContainer.ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 999;
`;

ConfirmContainer.ModalContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 280px;
  height: 100vh;
  background: #f7f8fa;
  padding: 20px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
`;

ConfirmContainer.CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

ConfirmContainer.Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

ConfirmContainer.Description = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 10px;
`;

ConfirmContainer.PhoneNumber = styled.span`
  font-weight: bold;
  color: #333;
`;

ConfirmContainer.Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 10px;
`;

ConfirmContainer.Timer = styled.p`
  font-size: 14px;
  color: red;
  margin-bottom: 10px;
`;

ConfirmContainer.ConfirmButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #d9534f;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #c9302c;
  }
`;

ConfirmContainer.CancelButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #ccc;
  color: #333;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #bbb;
  }
`;
