import styled from "styled-components";

const StyledButton = styled.div`
color: black
  font-size: 18px;
  border-bottom: none;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 400ms ease;
  &:hover {
    border-bottom: 1px solid var(--white);
  }
`;

export const Button = ({ children }) => {
  return (
    <StyledButton>
      <a href="/">{children}</a>
    </StyledButton>
  );
};
