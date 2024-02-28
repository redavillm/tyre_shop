import styled from "styled-components";
import {
  TYRE_COMPANY,
  TYRE_DIAMETER,
  TYRE_HEIGHT,
  TYRE_WIDTH,
} from "../../../db/db";
import { useState } from "react";

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

export const CatalogByParams = () => {
  const [selectedOption, setSelectedOption] = useState({
    width: "-",
    height: "-",
    diameter: "-",
    company: "all",
  });

  const handleSelectChangeWidth = (event) => {
    setSelectedOption({ ...selectedOption, width: event.target.value });
  };
  const handleSelectChangeHeight = (event) => {
    setSelectedOption({ ...selectedOption, height: event.target.value });
  };
  const handleSelectChangeDiameter = (event) => {
    setSelectedOption({ ...selectedOption, diameter: event.target.value });
  };
  const handleSelectChangeCompany = (event) => {
    setSelectedOption({ ...selectedOption, company: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOption);
    //send data to filter or somewhere else
  };

  return (
    <StyledCatalogByParams>
      <form onSubmit={handleSubmit}>
        <Flex>
          <StyledCatalogEl>
            Ширина
            <select
              value={selectedOption.width}
              onChange={handleSelectChangeWidth}
            >
              {TYRE_WIDTH.map((width, index) => {
                return <option key={index}>{width}</option>;
              })}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Высота
            <select
              value={selectedOption.height}
              onChange={handleSelectChangeHeight}
            >
              {TYRE_HEIGHT.map((width, index) => {
                return <option key={index}>{width}</option>;
              })}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Диаметр
            <select
              value={selectedOption.diameter}
              onChange={handleSelectChangeDiameter}
            >
              {TYRE_DIAMETER.map((width, index) => {
                return <option key={index}>{width}</option>;
              })}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Производитель
            <select
              value={selectedOption.company}
              onChange={handleSelectChangeCompany}
            >
              {TYRE_COMPANY.map((width, index) => {
                return <option key={index}>{width}</option>;
              })}
            </select>
          </StyledCatalogEl>
        </Flex>
        <button type="submit">Принять</button>
      </form>
    </StyledCatalogByParams>
  );
};
