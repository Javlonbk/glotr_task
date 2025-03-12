import React from 'react'
import styled from 'styled-components'
import loveIcon from '../../assets/svg/love.svg'
import shoppingIcon from '../../assets/svg/shopping-cart.svg'
import accountIcon from '../../assets/svg/account.svg'

const ActionsBoxContainer = styled.div`
    display: flex;
`
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
    img{
        width: 25px;
        height: 25px;
    }
`

const AccountActions = () => {
  return (
    <div>
        <ActionsBoxContainer>
            <ActionBox>
                <img src={loveIcon} alt="" />
            </ActionBox>
            <ActionBox>
                <img src={shoppingIcon} alt="" />
            </ActionBox>
            <ActionBox>
                <img src={accountIcon} alt="" />
            </ActionBox>
        </ActionsBoxContainer>
    </div>
  )
}

export default AccountActions