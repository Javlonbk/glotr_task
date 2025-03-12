import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 15px;
    box-sizing: border-box;
`

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
