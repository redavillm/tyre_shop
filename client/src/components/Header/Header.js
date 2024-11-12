import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartBtn } from "../CartBtns/CartBtn";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  border-bottom: solid 1px var(--grey);
  & p {
    margin: 0px 0px;
    font-size: 12px;
  }
  & h3 {
    margin: 0px 0px;
  }
  & i {
    margin-right: 10px;
    cursor: pointer;
  }
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
      <CartBtn />
    </StyledHeader>
  );
};
