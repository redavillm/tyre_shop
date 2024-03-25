import { useState } from "react";
import styled from "styled-components";
import {
  brandOptionCreator,
  diametrOptionCreator,
  mountOptionCreator,
  typeOptionCreator,
} from "./optionCreators/optionCreators";
import { disksFilter } from "../../../scripts/disksFilter";

const EMPTY_LIST = {
  diametr: "-",
  mount: "-",
  brand: "-",
  type: "-",
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

  const handleSelectDiameter = (event) => {
    setSelectedOption({ ...selectedOption, diametr: event.target.value });
  };
  const handleSelectMount = (event) => {
    setSelectedOption({ ...selectedOption, mount: event.target.value });
  };
  const handleSelectBrand = (event) => {
    setSelectedOption({ ...selectedOption, brand: event.target.value });
  };
  const handleSelectType = (event) => {
    setSelectedOption({ ...selectedOption, type: event.target.value });
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
              onChange={handleSelectDiameter}
            >
              <option>-</option>
              {diametrOptionCreator().map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Крепление
            <select value={selectedOption.mount} onChange={handleSelectMount}>
              <option>-</option>
              {mountOptionCreator().map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Производитель
            <select value={selectedOption.brand} onChange={handleSelectBrand}>
              <option>-</option>
              {brandOptionCreator().map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Тип
            <select value={selectedOption.type} onChange={handleSelectType}>
              <option>-</option>
              {typeOptionCreator().map((el, index) => (
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
