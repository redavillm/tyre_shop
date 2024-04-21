import { useState } from "react";
import styled from "styled-components";
import { ACCUMULATORS } from "../../../db/ACCUMULATORS";
import {
  sizeOptionCombiner,
  AccumsOptionCreator,
} from "./optionCreators/AccumsOptionCreator";
import { accumFilter } from "../../../scripts/accumFilte";

const EMPTY_LIST = {
  size: "-",
  polarity: "-",
  capacity: "-",
  brand: "-",
};

const StyledCatalogByParams = styled.div`
  border-bottom: 1px solid #aec09a;
  padding-bottom: 20px;
  & button {
    width: 150px;
    padding: 5px 20px;
  }
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCatalogEl = styled.div`
  margin: 20px 40px;
  & select {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    color: black;
  }
`;

export const SearchAccumsByParams = ({ setAccumList }) => {
  const [selectedOption, setSelectedOption] = useState(EMPTY_LIST);

  const handleSelectChange = (key) => (event) => {
    setSelectedOption((prevOptions) => ({
      ...prevOptions,
      [key]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAccumList(accumFilter(selectedOption));
  };

  return (
    <StyledCatalogByParams>
      <form onSubmit={handleSubmit}>
        <Flex>
          <StyledCatalogEl>
            Размер
            <select
              value={selectedOption.size}
              onChange={handleSelectChange("size")}
            >
              <option>-</option>
              {sizeOptionCombiner().map((el, index) => (
                <option id={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Полярность
            <select
              value={selectedOption.polarity}
              onChange={handleSelectChange("polarity")}
            >
              <option>-</option>
              {AccumsOptionCreator("polarity", ACCUMULATORS).map(
                (el, index) => (
                  <option id={index}>{el}</option>
                )
              )}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Емкость
            <select
              value={selectedOption.capacity}
              onChange={handleSelectChange("capacity")}
            >
              <option>-</option>
              {AccumsOptionCreator("capacity", ACCUMULATORS, "number").map(
                (el, index) => (
                  <option id={index}>{el}</option>
                )
              )}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Производитель
            <select
              value={selectedOption.brand}
              onChange={handleSelectChange("brand")}
            >
              <option>-</option>
              {AccumsOptionCreator("brand", ACCUMULATORS).map((el, index) => (
                <option id={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
        </Flex>
        <button type="submit">Поиск</button>
      </form>
    </StyledCatalogByParams>
  );
};
