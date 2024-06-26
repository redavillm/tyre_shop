import styled from "styled-components";
import { Link } from "react-router-dom";
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
          <Link to="/">Tyreshop</Link>
        </h3>
        <p>На рынке с 1994 года.</p>
      </div>
      <Flex>
        <Link to="/cart">
          <StyledLogInBtn className="fa fa-shopping-cart" aria-hidden="true" />
        </Link>
        <Link to="/auth">
          <StyledLogInBtn className="fa fa-sign-in" aria-hidden="true" />
        </Link>
        <Button>
          <Link to="/auth">Вход</Link>
        </Button>
        /
        <Button>
          <Link to="/registration">Регистрация</Link>
        </Button>
      </Flex>
    </StyledHeader>
  );
};
