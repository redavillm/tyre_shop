import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-top: solid 1px var(--grey);
  font-size: 14px;
  padding: 30px 10px;
`;

const StyledFooterBtn = styled.i`
  font-size: 26px;
  color: var(--white);
  transition: all 400ms ease;
  &:hover {
    font-size: 30px;
  }
`;

const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  text-align: right;
  & a {
    margin-bottom: 5px;
    border-bottom: 1px solid transparent;
    transition: all 400ms ease;
  }
  & a:hover {
    border-bottom: 1px solid var(--font_2);
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://github.com/redavillm/tyre_shop">
        <StyledFooterBtn className="fa fa-github" aria-hidden="true" />
      </a>
      <StyledContacts>
        <Link to="https://yandex.com/maps/-/CDRBqMKR">
          Санкт-Петербург, ул. Фучика 74 корпус 3
        </Link>
        <Link to="/contacts">+7(981)122-23-444</Link>
        <Link to="/contacts">info@tyre-shop.ru</Link>
      </StyledContacts>
    </StyledFooter>
  );
};
