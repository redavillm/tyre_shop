import styled from "styled-components";
import { useState } from "react";
import { tyresfilter, tyresOptionsCreator } from "../../../scripts";

const StyledCatalogByParams = styled.div`
  border-bottom: 1px solid #aec09a;
  padding-bottom: 20px;
  & button {
    width: 150px;
    padding: 10px 20px;
    background-color: white;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: rgb(190, 190, 190);
    }
  }
  & form {
    display: flex;
    flex-direction: column;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCatalogEl = styled.div`
  margin: 20px 40px 20px 0px;
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
  margin-top: 40px;
  & input {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
`;

const Filter = styled.div`
  font-size: 22px;
`;

const EMPTY_OPTIONS_LIST = {
  width: "all",
  height: "all",
  radius: "all",
  brand: "all",
};

export const SearchByParams = ({ setTyresList, isWinter, setIsWinter }) => {
  const [selectedOptions, setSelectedOptions] = useState(EMPTY_OPTIONS_LIST);

  const handleSelectChange = (key) => (event) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [key]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTyresList(tyresfilter(selectedOptions, isWinter));
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
              value={selectedOptions.width}
              onChange={handleSelectChange("width")}
            >
              <option>all</option>
              {tyresOptionsCreator("width").map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Высота
            <select
              value={selectedOptions.height}
              onChange={handleSelectChange("height")}
            >
              <option>all</option>
              {tyresOptionsCreator("height").map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Диаметр
            <select
              value={selectedOptions.radius}
              onChange={handleSelectChange("radius")}
            >
              <option>all</option>
              {tyresOptionsCreator("radius").map((el, index) => (
                <option key={index}>{el}</option>
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
              {tyresOptionsCreator("brand").map((el, index) => (
                <option key={index}>{el}</option>
              ))}
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
      <Filter>
        Фильтр:
        <select>
          <option>По популяроности</option>
          <option>Дешевле</option>
          <option>Дороже</option>
        </select>
      </Filter>
    </StyledCatalogByParams>
  );
};
