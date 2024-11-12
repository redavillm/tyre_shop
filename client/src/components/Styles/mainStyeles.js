import styled from "styled-components";

export const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border: 5px solid var(--white);
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

export const Flex = styled.div`
  display: flex;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledProductList = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1400px) {
    margin: 0px auto;
    max-width: 1130px;
  }
  @media (max-width: 1120px) {
    margin: 0px auto;
    max-width: 850px;
  }
  @media (max-width: 840px) {
    margin: 0px auto;
    max-width: 560px;
  }
  @media (max-width: 660px) {
    margin: 0px auto;
    max-width: 100%;
    justify-content: center;
  }
`;

export const Container = styled.div`
  margin: 0px auto;
`;
