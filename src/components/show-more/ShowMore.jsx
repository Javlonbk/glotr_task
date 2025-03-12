import React, { useState } from "react";
import styled from "styled-components";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const StyledContainer = styled.div`
  width: 90%;
  max-width: 600px;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

const ContentWrapper = styled.div`
  height: ${({ isExpanded }) => (isExpanded ? "auto" : "100px")}; 
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

const StyledShowMore = styled.span`
  color: #1D9EF9;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: block;
  margin-top: 10px;
`;

const ShowMore = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledContainer>
      <ContentWrapper isExpanded={isExpanded}>{children}</ContentWrapper>
      <StyledShowMore onClick={toggleShowMore}>
        {isExpanded ? "Скрыть" : "Показать больше"} {isExpanded ? <FaCaretUp /> : <FaCaretDown />}
      </StyledShowMore>
    </StyledContainer>
  );
};

export default ShowMore;
