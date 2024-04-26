import styled from "styled-components";
import { TyreCard } from "./TyreCard/TyreCard";
import { Link } from "react-router-dom";

const StyledTyresCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  & a {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const TyresList = ({ tyresList }) => {
  return (
    <StyledTyresCatalog>
      {tyresList.map(({ id }) => (
        <Link to={`/tyres/${id}`} key={id}>
          <TyreCard id={id} />
        </Link>
      ))}
    </StyledTyresCatalog>
  );
};
