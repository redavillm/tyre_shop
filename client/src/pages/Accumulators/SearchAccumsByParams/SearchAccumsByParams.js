import { useState } from "react";
import styled from "styled-components";
import { accumFilter } from "../../../scripts/accumFilte";
import { accumsOptionCreator } from "../../../scripts";

const EMPTY_LIST = {
  size: "all",
  polarity: "all",
  capacity: "all",
  brand: "all",
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
  const [selectedOptions, setSelectedOptions] = useState(EMPTY_LIST);

  const handleSelectChange = (key) => (event) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [key]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("selectedOptions ==>", selectedOptions);
    setAccumList(accumFilter(selectedOptions));
  };

  return (
    <StyledCatalogByParams>
      <form onSubmit={handleSubmit}>
        <Flex>
          <StyledCatalogEl>
            Размер
            <select
              value={selectedOptions.size}
              onChange={handleSelectChange("size")}
            >
              <option>all</option>
              {accumsOptionCreator("size").map((el, index) => (
                <option id={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Полярность
            <select
              value={selectedOptions.polarity}
              onChange={handleSelectChange("polarity")}
            >
              <option>all</option>
              {accumsOptionCreator("polarity").map((el, index) => (
                <option id={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Емкость
            <select
              value={selectedOptions.capacity}
              onChange={handleSelectChange("capacity")}
            >
              <option>all</option>
              {accumsOptionCreator("capacity").map((el, index) => (
                <option id={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Производитель
            <select
              value={selectedOptions.brand}
              onChange={handleSelectChange("brand")}
            >
              <option>all</option>
              {accumsOptionCreator("brand").map((el, index) => (
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
