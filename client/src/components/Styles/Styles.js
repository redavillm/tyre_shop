import styled from "styled-components";

export const StyledCatalogButtons = styled.div`
  display: flex;
  margin-top: 30px;
  & button {
    border: 1px solid #344c11;
    cursor: pointer;
    padding: 15px 60px;
    transition: all 400ms ease;
    background-color: #aec09a;
    color: #1a2902;
    font-size: 22px;
    &: hover {
      color: white;
    }
  }
`;

export const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border: 5px solid white;
  border-radius: 50%;
  border-left-color: transparent;
  animation: loader 1s infinite;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledCatalogByParams = styled.div`
  border-bottom: 1px solid #aec09a;
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

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCatalogEl = styled.div`
  margin: 20px 40px 20px 0px;
  & select {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    color: black;
  }
`;
