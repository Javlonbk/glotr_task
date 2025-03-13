import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const StyledSearchPanel = styled.div`
  width: 40%;
  height: 40px;
  position: relative;
  font-size: 16px;
  margin-left: 15px;
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 8px 15px;
    box-sizing: border-box;
    border: 1px solid #e8ebec;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #999;
    font-size: 18px;
    transition: opacity 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 100%;

    input {
      padding: 8px 15px 8px 40px;
    }

    .search-icon {
      left: 10px;
      right: auto;
    }
  }
`;

const SearchPanel = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <StyledSearchPanel>
      <input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Искать на Glotr"
      />
      {searchValue.length === 0 && <FaSearch className="search-icon" />}
    </StyledSearchPanel>
  );
};

export default SearchPanel;
