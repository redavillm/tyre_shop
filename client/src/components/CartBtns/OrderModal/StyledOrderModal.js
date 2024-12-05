import styled from "styled-components";

export const StyledOrderWrapper = styled.div`
  margin: 20px auto;
  padding: 20px 60px;
  & input {
    all: unset;
    padding: 5px 10px;
    margin-bottom: 20px;
    border: 1px solid black;
    font-size: 18px;
    box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
    -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
  }
`;

export const StyledOrderButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
`;
