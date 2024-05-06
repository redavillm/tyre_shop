import { useState } from "react";
import { AccumulatorsList } from "./AccumulatorsList/AccumulatorsList";
import styled from "styled-components";
import { SearchAccumsByParams } from "./SearchAccumsByParams/SearchAccumsByParams";
import { SearchAccumsByCar } from "./SearchAccumsByCar/SearchAccumsByCar";
import { Navbar } from "../../components/Navbar/Navbar";
import { ACCUMULATORS } from "../../db/ACCUMULATORS";

const StyledAccumsCatalogButtons = styled.div`
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

export const Accumulators = (setCartItems) => {
  const [isByParams, setIsByParams] = useState(true);
  const [accumList, setAccumList] = useState(ACCUMULATORS);
  return (
    <div>
      <Navbar />
      <div>
        <StyledAccumsCatalogButtons>
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
        </StyledAccumsCatalogButtons>
      </div>
      {isByParams ? (
        <SearchAccumsByParams setAccumList={setAccumList} />
      ) : (
        <SearchAccumsByCar setAccumList={setAccumList} />
      )}
      <AccumulatorsList accumList={accumList} />
    </div>
  );
};
