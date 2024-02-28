import { useState } from "react";
import styled from "styled-components";
import { TYRES_BY_CAR } from "../../../db/db";

const StyledCatalog = styled.div`
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

export const CatalogByCar = () => {
  const [selectedOption, setSelectedOption] = useState({
    brand: "-",
    model: "-",
    year: "-",
    modification: "-",
  });
  const [currentBrand, setCurrentBrand] = useState();
  const [currentModel, setCurrentModel] = useState();
  const [currentYear, setCurrentYear] = useState();

  const createModelsOptions = (brand) => {
    if (brand === "-") return <option>-</option>;
    return currentBrand.models?.map((model, index) => (
      <option key={index}>{model.name}</option>
    ));
  };

  const createYearsOpitons = (model) => {
    if (model === "-") return <option>-</option>;
    return currentModel.years?.map((year, index) => (
      <option key={index}>{year.num}</option>
    ));
  };

  const createModificationsOpitons = (year) => {
    if (year === "-") return <option>-</option>;
    return currentYear?.modification?.map((mod, index) => (
      <option key={index}>{mod}</option>
    ));
  };

  const handleSelectChangeBrand = (event) => {
    setSelectedOption({ ...selectedOption, brand: event.target.value });
    setCurrentBrand(
      TYRES_BY_CAR.find((car) => car.brand === event.target.value)
    );
  };

  const handleSelectChangeModel = (event) => {
    setSelectedOption({ ...selectedOption, model: event.target.value });
    setCurrentModel(
      currentBrand.models.find((model) => model.name === event.target.value)
    );
  };

  const handleSelectChangeYear = (event) => {
    setSelectedOption({ ...selectedOption, year: event.target.value });
    setCurrentYear(
      currentModel.years.find((year) => year.num === +event.target.value)
    );
  };

  const handleSelectChangeModification = (event) => {
    setSelectedOption({ ...selectedOption, modification: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "отправляем для фильрации следующие параметры =>",
      selectedOption
    );
  };

  return (
    <StyledCatalog>
      <form onSubmit={handleSubmit}>
        <Flex>
          <StyledCatalogEl>
            Марка
            <select
              value={selectedOption.brand}
              onChange={handleSelectChangeBrand}
            >
              {TYRES_BY_CAR.map((car, index) => {
                return <option key={index}>{car.brand}</option>;
              })}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Модель
            <select
              value={selectedOption.model}
              onChange={handleSelectChangeModel}
            >
              {createModelsOptions(selectedOption.brand)}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Год выпуска
            <select
              value={selectedOption.year}
              onChange={handleSelectChangeYear}
            >
              {createYearsOpitons(selectedOption.model)}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Модификация
            <select
              value={selectedOption.modification}
              onChange={handleSelectChangeModification}
            >
              {createModificationsOpitons(selectedOption.year)}
            </select>
          </StyledCatalogEl>
        </Flex>
        <button type="submit">Принять</button>
      </form>
    </StyledCatalog>
  );
};
