import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartBtn } from "../CartBtns/CartBtn";

// Контейнер Header
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-grey);
  padding: 10px 20px;
`;

// Стили для логотипа
const LogoLink = styled(Link)`
  display: inline-block;
  img {
    max-height: 80px;
    @media (max-width: 768px) {
      max-height: 40px;
    }
  }
`;

const SearchBar = styled.input`
  padding: 5px;
  width: 300px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <LogoLink to="/">
        <img src="/img/flame_tyre_logo.png" alt="Flame Tyre Logo" />
      </LogoLink>
      <SearchBar placeholder="Поиск..." />
      <Link href="#">Контакты</Link>
      <Link href="tel:+79313415857">+7 (931) 341-58-57</Link>
      <CartBtn />
    </StyledHeader>
  );
};
