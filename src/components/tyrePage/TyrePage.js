import { useState } from "react";
import styled from "styled-components";
import { SearchByParams } from "./searchByParams/SearchByParams";
import { SearchByCar } from "./searchByCar/SearchByCar";
import { TyresCatalog } from "./TyresCatalog/TyresCatalog";
import { WINTER_TYRES } from "../../db/WINTER_TYRES";
import { SUMMER_TYRES } from "../../db/SUMMER_TYRES";
import { Navbar } from "../Navbar/Navbar";

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
  const [isWinter, setIsWinter] = useState(false);
  const [isWinterIcon, setIsWinterIcon] = useState(false);
  const [tyresList, setTyresList] = useState(
    !isWinter ? SUMMER_TYRES : WINTER_TYRES
  );

  return (
    <div>
      <Navbar />
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
      {isByParams ? (
        <SearchByParams
          setTyresList={setTyresList}
          isWinter={isWinter}
          setIsWinter={setIsWinter}
          setIsWinterIcon={setIsWinterIcon}
        />
      ) : (
        <SearchByCar />
      )}
      <TyresCatalog tyresList={tyresList} isWinterIcon={isWinterIcon} />
    </div>
  );
};
