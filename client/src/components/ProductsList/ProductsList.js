import styled from "styled-components";
import { getProductData } from "./getProductData/getProductData";
import { Card } from "../Card/Card";

const StyledProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductsList = ({ productsList, type }) => {
  return (
    <StyledProductList>
      {productsList.map((product) => {
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
  );
};
