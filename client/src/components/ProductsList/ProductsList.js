import styled from "styled-components";
import { getProductData } from "./getProductData/getProductData";
import { Card } from "../Card/Card";

const StyledProductList = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1400px) {
    margin: 0px auto;
    max-width: 1130px;
  }
  @media (max-width: 1120px) {
    margin: 0px auto;
    max-width: 850px;
  }
  @media (max-width: 840px) {
    margin: 0px auto;
    max-width: 560px;
  }
  @media (max-width: 660px) {
    margin: 0px auto;
    max-width: 100%;
    justify-content: center;
  }
`;

const Container = styled.div`
  margin: 0px auto;
`;

export const ProductsList = ({ productsList, type }) => {
  return (
    <Container>
      <StyledProductList>
        {productsList?.map((product) => {
          const { title, params, counterStep, season } = getProductData(
            product,
            type
          );
          return (
            <Card
              key={product.id}
              id={product.id}
              title={title}
              params={params}
              price={product.price}
              imgSrc={product.imgSrc}
              counterStep={counterStep}
              season={season}
            />
          );
        })}
      </StyledProductList>
    </Container>
  );
};
