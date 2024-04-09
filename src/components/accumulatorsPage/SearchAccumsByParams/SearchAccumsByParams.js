import { useState } from "react";
import styled from "styled-components";
import {
  brandOptionCreator,
  capacityOptionCreator,
  polarityOptionCreator,
  sizeOptionCombiner,
} from "./optionCreators/optionCreators";

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

  const handleSelectSize = (event) => {
    setSelectedOption({ ...selectedOption, size: event.target.value });
  };
  const handleSelectPolarity = (event) => {
    setSelectedOption({
      ...selectedOption,
      polarity: event.target.value,
    });
  };
  const handleSelectСapacity = (event) => {
    setSelectedOption({ ...selectedOption, capacity: event.target.value });
  };
  const handleSelectBrand = (event) => {
    setSelectedOption({ ...selectedOption, brand: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAccumList();
  };

  return (
    <StyledCatalogByParams>
      <form onSubmit={handleSubmit}>
        <Flex>
          <StyledCatalogEl>
            Размер
            <select value={selectedOption.size} onChange={handleSelectSize}>
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
              onChange={handleSelectPolarity}
            >
              <option>-</option>
              {polarityOptionCreator().map((el, index) => (
                <option id={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Емкость
            <select
              value={selectedOption.capacity}
              onChange={handleSelectСapacity}
            >
              <option>-</option>
              {capacityOptionCreator().map((el, index) => (
                <option id={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Производитель
            <select value={selectedOption.brand} onChange={handleSelectBrand}>
              <option>-</option>
              {brandOptionCreator().map((el, index) => (
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
