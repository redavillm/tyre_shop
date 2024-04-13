import { useState } from "react";
import styled from "styled-components";
import { SearchDiskByParams } from "./SearchDiskByParams/SearchDiskByParams";
import { SearchDiskByCar } from "./SearchDiskByCar/SearchDiskByCar";
import { DisksList } from "./DisksList/DisksList";
import { DISKS } from "../../db/DISKS";
import { Navbar } from "../../components/Navbar/Navbar";

const StyledDisksCatalogButtons = styled.div`
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

export const Disks = () => {
  const [isByParams, setIsByParams] = useState(true);
  const [disksList, setDisksList] = useState(DISKS);
  return (
    <div>
      <Navbar />
      <div>
        <StyledDisksCatalogButtons>
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
        </StyledDisksCatalogButtons>
      </div>
      {isByParams ? (
        <SearchDiskByParams setDisksList={setDisksList} />
      ) : (
        <SearchDiskByCar setDisksList={setDisksList} />
      )}
      <DisksList disksList={disksList} />
    </div>
  );
};
