import { useState } from "react";
import styled from "styled-components";
import { disksFilter, disksOptionsCreator } from "../../../scripts";

const EMPTY_LIST = {
  diametr: "all",
  mount: "all",
  brand: "all",
  type: "all",
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

export const SearchDiskByParams = ({ setDisksList }) => {
  const [selectedOption, setSelectedOption] = useState(EMPTY_LIST);

  const handleSelectChange = (key) => (event) => {
    setSelectedOption((prevOptions) => ({
      ...prevOptions,
      [key]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisksList(disksFilter(selectedOption));
  };

  return (
    <StyledCatalogByParams>
      <form onSubmit={handleSubmit}>
        <Flex>
          <StyledCatalogEl>
            Диаметр
            <select
              value={selectedOption.diametr}
              onChange={handleSelectChange("diametr")}
            >
              <option>all</option>
              {disksOptionsCreator("diametr").map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Крепление
            <select
              value={selectedOption.mount}
              onChange={handleSelectChange("mount")}
            >
              <option>all</option>
              {disksOptionsCreator("mount").map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Производитель
            <select
              value={selectedOption.brand}
              onChange={handleSelectChange("brand")}
            >
              <option>all</option>
              {disksOptionsCreator("brand").map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Тип
            <select
              value={selectedOption.type}
              onChange={handleSelectChange("type")}
            >
              <option>all</option>
              {disksOptionsCreator("type").map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
        </Flex>
        <button type="submit">Поиск</button>
      </form>
    </StyledCatalogByParams>
  );
};
