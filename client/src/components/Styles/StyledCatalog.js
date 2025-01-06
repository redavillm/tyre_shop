import styled from "styled-components";

export const StyledCatalogButtons = styled.div`
  display: flex;
  margin-top: 30px;
  & button {
    border: 1px solid var(--borders);
    cursor: pointer;
    padding: 15px 60px;
    transition: all 400ms ease;
    background-color: var(--grey);
    color: var(--main_font);
    font-size: 22px;
    &: hover {
      color: var(--white);
    }
  }
`;

export const StyledCatalogByParams = styled.div`
  border-bottom: 1px solid var(--grey);
  padding-bottom: 20px;
  position: relative;
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

export const StyledCatalogEl = styled.div`
  margin: 20px 40px 20px 0px;
  & select {
    outline: 0;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    color: var(--font);
  }
`;

export const StyledCatalog = styled.div`
  border-bottom: 1px solid var(--grey);
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

export const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-top: 50px;
  margin-right: 30px;
  & input {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: var(--white);
  }
`;

export const StyledSorting = styled.div`
  font-size: 22px;
  & select {
    padding: 5px 0px;
    margin-left: 5px;
    border: none;
    outline: 0;
  }
`;
