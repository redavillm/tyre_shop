import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartBtn } from "../CartBtns/CartBtn";

// Контейнер Header
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 29px;
  background-color: var(--bg-grey);
`;

// Стили для логотипа
const LogoLink = styled(Link)`
  display: inline-block;
  img {
    max-height: 50px;
    @media (max-width: 768px) {
      max-height: 40px;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <LogoLink to="/">
        <img src="/img/flame_tyre_logo.png" alt="Flame Tyre Logo" />
      </LogoLink>
      <input />
      <h5>Контакты</h5>
      <h5>+7 (931) 341-58-57</h5>
      <CartBtn />
    </StyledHeader>
  );
};
