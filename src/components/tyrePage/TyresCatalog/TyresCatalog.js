import styled from "styled-components";
import { TyreCard } from "./TyreCard/TyreCard";

const StyledTyresCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TyresCatalog = ({ tyresList, isWinterIcon }) => {
  return (
    <StyledTyresCatalog>
      {tyresList.map((el) => (
        <TyreCard
          title={el.brand + " " + el.model}
          tyreParams={el.width + " " + el.height + " " + el.radius}
          price={el.price}
          imgSrc="https://xn--j1apr.xn--p1ai/wp-content/uploads/2020/09/11r22.5-kama-nf-701.png"
          isWinterIcon={isWinterIcon}
        />
      ))}
    </StyledTyresCatalog>
  );
};
