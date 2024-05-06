import styled from "styled-components";
import { TyreCard } from "./TyreCard/TyreCard";

const StyledTyresCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TyresList = ({ tyresList }) => {
  return (
    <StyledTyresCatalog>
      {tyresList.map(({ id }) => (
        <TyreCard id={id} />
      ))}
    </StyledTyresCatalog>
  );
};
