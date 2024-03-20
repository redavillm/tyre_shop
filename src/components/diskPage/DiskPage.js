import { useState } from "react";
import styled from "styled-components";
import { SearchDiskByParams } from "./SearchDiskByParams/SearchDiskByParams";
import { SearchDiskByCar } from "./SearchDiskByCar/SearchDiskByCar";
import { DiskCatalog } from "./DiskCatalog/DiskCatalog";

const StyledDiskPageCatalogButtons = styled.div`
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

export const DiskPage = () => {
  const [isByParams, setIsByParams] = useState(true);
  return (
    <div>
      <div>
        <StyledDiskPageCatalogButtons>
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
        </StyledDiskPageCatalogButtons>
      </div>
      {isByParams ? <SearchDiskByParams /> : <SearchDiskByCar />}
      <DiskCatalog />
    </div>
  );
};
