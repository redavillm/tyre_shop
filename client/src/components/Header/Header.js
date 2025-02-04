import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartBtn } from "../CartBtns/CartBtn";

// Контейнер Header
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #ccc;
`;

// Левый блок: логотип и слоган
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
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

// Слоган
const Slogan = styled.p`
  font-size: 14px;
  color: #777;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <LogoLink to="/">
          <img src="/img/flame_tyre_logo.png" alt="Flame Tyre Logo" />
        </LogoLink>
        <Slogan>На рынке с 1994 года.</Slogan>
      </LogoContainer>
      <CartBtn />
    </StyledHeader>
  );
};
