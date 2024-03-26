import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  border-bottom: 1px solid #aec09a;
`;

const StyledNavEl = styled.div`
  border-bottom: 1px solid transparent;
  transition: all 400ms ease;
  &:hover {
    border-bottom: 1px solid white;
    transform: scale(1.1);
  }
  &:focus {
    border-bottom: 1px solid black;
  }
  & a:focus {
    border-bottom: 1px solid black;
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavEl>
        <Link to="/">Шины</Link>
      </StyledNavEl>
      <StyledNavEl>
        <Link to="/disks">Диски</Link>
      </StyledNavEl>
      <StyledNavEl>
        <Link to="/accumulators">Аккумуляторы</Link>
      </StyledNavEl>
      <StyledNavEl>
        <Link to="/contacts">Контакты</Link>
      </StyledNavEl>
    </StyledNavbar>
  );
};
