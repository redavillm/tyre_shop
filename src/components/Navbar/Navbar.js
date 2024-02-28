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
        <a href="/">Шины</a>
      </StyledNavEl>
      <StyledNavEl>
        <a href="/">Диски</a>
      </StyledNavEl>
      <StyledNavEl>
        <a href="/">Аккумуляторы</a>
      </StyledNavEl>
      <StyledNavEl>
        <a href="/">Контакты</a>
      </StyledNavEl>
    </StyledNavbar>
  );
};
