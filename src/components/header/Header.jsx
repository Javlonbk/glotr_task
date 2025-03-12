import React from 'react'
import logoIcon from '../../assets/svg/g-logo.svg'
import styled from 'styled-components'
import SearchPanel from './SearchPanel'
import AccountActions from './AccountActions'
import Container from '../container/Container'

const StyledHeader = styled.div`
width: 100%;
padding: 15px 0px;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
nav{
    img{
    width: 149px;
    height: 35px;
}
}

`

const Header = () => {
  return (
    <StyledHeader>
        <nav>
            <img src={logoIcon} alt="" />
        </nav>
        <SearchPanel/>
        <AccountActions/>
    </StyledHeader>
  )
}

export default Header