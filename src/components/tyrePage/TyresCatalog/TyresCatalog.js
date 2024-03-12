import styled from "styled-components";
import { TyreCard } from "./TyreCard/TyreCard";

const StyledTyresCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TyresCatalog = () => {
  return (
    <StyledTyresCatalog>
      <TyreCard />
      <TyreCard />
      <TyreCard />
      <TyreCard />
      <TyreCard />
      <TyreCard />
      <TyreCard />
      <TyreCard />
      <TyreCard />
      <TyreCard />
      <TyreCard />
      <TyreCard />
    </StyledTyresCatalog>
  );
};
