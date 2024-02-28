import styled from "styled-components";
import { Button } from "../Button/Button";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  border-bottom: solid 1px #aec09a;
  & p {
    margin: 0px 0px;
    font-size: 12px;
  }
  & h3 {
    margin: 0px 0px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogInBtn = styled.i`
  margin-right: 10px;
  cursor: pointer;
`;
export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h3>
          <a href="/">Tyreshop</a>
        </h3>
        <p>На рынке с 1994 года.</p>
      </div>
      <Flex>
        <StyledLogInBtn
          className="fa fa-sign-in"
          aria-hidden="true"
        ></StyledLogInBtn>
        <Button>
          <a href="/">Вход</a>
        </Button>
        /
        <Button>
          <a href="/">Регистрация</a>
        </Button>
      </Flex>
    </StyledHeader>
  );
};
