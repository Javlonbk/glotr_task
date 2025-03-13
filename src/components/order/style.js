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

ConfirmContainer.Header = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`

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
  max-width: 350px;
  height: 100vh;
  background: #f7f8fa;
  padding: 20px;
  box-sizing: border-box;
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
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

ConfirmContainer.Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: left;
`;

ConfirmContainer.Description = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 10px;
  text-align: left;
`;

ConfirmContainer.PhoneNumber = styled.span`
  font-weight: bold;
  color: #333;
`;

ConfirmContainer.Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin: 10px 0px;
`;

ConfirmContainer.Timer = styled.p`
  font-size: 14px;
  color: #000;
  margin-bottom: 30px;
  strong{
    color: red;
  }
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
ConfirmContainer.CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  div {
    text-align: left;
  }

  strong {
    font-size: 16px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 35px;
      height: 35px;
    }
  }
`;

export const ReadyOrderContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
 
  @media (max-width: 480px) {
    padding: 15px;
    max-width: 100%;
  }
`;

ReadyOrderContainer.Title = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
`;

ReadyOrderContainer.CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  div {
    text-align: left;
  }

  strong {
    font-size: 16px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 35px;
      height: 35px;
    }
  }
`;

ReadyOrderContainer.SuccessBox = styled.div`
  width: 100%;
  padding: 15px;
  background: #e6f7e6;
  border: 1px solid #b3e6b3;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  strong {
    font-size: 16px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
  }
`;

ReadyOrderContainer.CheckIcon = styled.div`
  width: 30px;
  height: 30px;
  background: #4caf50;
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

ReadyOrderContainer.Details = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

ReadyOrderContainer.Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  color: #333;

  span {
    font-weight: bold;
    color: #555;
}

strong {
    font-size: 14px;
    color: #333;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 13px;
  }
`;

ReadyOrderContainer.WorkTime = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

ReadyOrderContainer.WebsiteLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

ReadyOrderContainer.ConfirmButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #d9534f;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #c9302c;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }
`;