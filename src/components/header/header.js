import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  border-bottom: solid 1px #aec09a;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div>Tyreshop</div>
      <button>Вход</button>
    </StyledHeader>
  );
};
