import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNotFound = styled.div`
  margin: 50px;
  & a {
    border-bottom: 1px solid white;
  }
`;

export const ProductNotFound = () => {
  return (
    <StyledNotFound>
      <h2>Похожу что товара не существует.</h2>
      <Link to="/">Перейти на главную?</Link>
    </StyledNotFound>
  );
};
