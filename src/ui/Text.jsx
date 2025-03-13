import styled from "styled-components";



export const StyledParagraph = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 15px;
`

import React from 'react'

export const Paragraph = ({children}) => {
  return (
    <StyledParagraph>{children}</StyledParagraph>
  )
}

