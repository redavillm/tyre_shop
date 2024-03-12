import { useState } from "react";
import styled from "styled-components";
import { SearchByParams } from "./searchByParams/SearchByParams";
import { SearchByCar } from "./searchByCar/SearchByCar";
import { TyresList } from "./tyresList/tyresList";

const StyledTyrePageCatalogButtons = styled.div`
  display: flex;
  margin-top: 30px;
  & button {
    border: 1px solid #344c11;
    cursor: pointer;
    padding: 15px 60px;
    transition: all 400ms ease;
    background-color: #aec09a;
    color: #1a2902;
    font-size: 22px;
    &: hover {
      color: white;
    }
  }
`;

export const TyrePage = () => {
  const [isByParams, setIsByParams] = useState(true);

  return (
    <div>
      <div>
        <StyledTyrePageCatalogButtons>
          <button
            onClick={() => {
              setIsByParams(true);
            }}
          >
            По параметрам
          </button>
          <button
            onClick={() => {
              setIsByParams(false);
            }}
          >
            По авто
          </button>
        </StyledTyrePageCatalogButtons>
      </div>
      {isByParams ? <SearchByParams /> : <SearchByCar />}
      <TyresList />
    </div>
  );
};
