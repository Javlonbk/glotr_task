import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import SearchPanel from './SearchPanel';
import AccountActions from './AccountActions';
import logoIcon from '../../assets/svg/g-logo.svg'
import { Link } from 'react-router';

const StyledHeader = styled.header`
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 149px;
    height: 35px;
  }

  .menu-icon {
    display: none;
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }
    img{
      display: none;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <Logo to={'/'}>
        <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
        <img src={logoIcon} alt="Logo" />
      </Logo>
      <SearchPanel />
      <AccountActions />
    </StyledHeader>
  );
};

export default Header;
