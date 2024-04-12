import styled from "styled-components";
import { useState } from "react";
import { tyresfilter, optionsCreator } from "../../../scripts";
import { TYRES } from "../../../db/TYRES";

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

const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  & input {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
`;

const EMPTY_LIST = {
  width: "-",
  height: "-",
  radius: "-",
  brand: "-",
};

export const SearchByParams = ({
  setTyresList,
  isWinter,
  setIsWinter,
  setIsWinterIcon,
}) => {
  const [selectedOption, setSelectedOption] = useState(EMPTY_LIST);

  const handleSelectChange = (key) => (event) => {
    setSelectedOption((prevOptions) => ({
      ...prevOptions,
      [key]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { tyresArrResult, isWinterIcon } = tyresfilter(
      selectedOption,
      isWinter
    );
    setTyresList(tyresArrResult);
    setIsWinterIcon(isWinterIcon);
  };

  const handleChanegeCheckbox = () => {
    setIsWinter(!isWinter);
  };

  return (
    <StyledCatalogByParams>
      <form onSubmit={handleSubmit}>
        <Flex>
          <StyledCatalogEl>
            Ширина
            <select
              value={selectedOption.width}
              onChange={handleSelectChange("width")}
            >
              <option>-</option>
              {optionsCreator("width", TYRES).map((width, index) => {
                return <option key={index}>{width}</option>;
              })}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Высота
            <select
              value={selectedOption.height}
              onChange={handleSelectChange("height")}
            >
              <option>-</option>
              {optionsCreator("height", TYRES).map((height, index) => {
                return <option key={index}>{height}</option>;
              })}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Диаметр
            <select
              value={selectedOption.radius}
              onChange={handleSelectChange("radius")}
            >
              <option>-</option>
              {optionsCreator("radius", TYRES).map((radius, index) => {
                return <option key={index}>{radius}</option>;
              })}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Производитель
            <select
              value={selectedOption.brand}
              onChange={handleSelectChange("brand")}
            >
              <option>-</option>
              {optionsCreator("brand", TYRES).map((width, index) => {
                return <option key={index}>{width}</option>;
              })}
            </select>
          </StyledCatalogEl>
          <StyledCheckbox>
            Зима
            <input
              type="checkbox"
              value="isWinter"
              onChange={handleChanegeCheckbox}
            />
            <span></span>
          </StyledCheckbox>
        </Flex>
        <button type="submit">Поиск</button>
      </form>
    </StyledCatalogByParams>
  );
};
