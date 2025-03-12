import React from 'react'
import styled from 'styled-components'
import searchIcon from '../../assets/svg/search.svg'

const StyledSearchPanel = styled.div`
    width: 40%;
    height: 40px;
    position: relative;
    font-size: 16px;
    input{
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 8px 15px;
        box-sizing: border-box;
        border-radius: 5px;
        top: 0px;
        left: 0px;
    }
    img{
        width: 20px;
        height: 20px;
        position: absolute;
        top: 10px;
        right: 8px;
    }
`

const SearchPanel = () => {
  return (
    <StyledSearchPanel>
        <input type="search" placeholder='Qidirish'  />
        <img src={searchIcon} alt="" />
    </StyledSearchPanel>
  )
}

export default SearchPanel