import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  border-bottom: 1px solid var(--grey);
`;

const StyledNavEl = styled.div`
  border-bottom: 2px solid transparent;
  transition: all 400ms ease;
  &:hover {
    border-bottom: 2px solid var(--white);
    transform: scale(1.1);
  }
  &:focus {
    border-bottom: 2px solid var(--white);
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavEl>
        <NavLink to="/">Шины</NavLink>
      </StyledNavEl>
      <StyledNavEl>
        <NavLink to="/disks">Диски</NavLink>
      </StyledNavEl>
      <StyledNavEl>
        <NavLink to="/accumulators">Аккумуляторы</NavLink>
      </StyledNavEl>
      <StyledNavEl>
        <NavLink to="/contacts">Контакты</NavLink>
      </StyledNavEl>
    </StyledNavbar>
  );
};
