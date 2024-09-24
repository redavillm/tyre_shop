import styled from "styled-components";

export const StyeledCard = styled.span`
  width: 260px;
  margin: 20px 10px;
  padding: 10px 0px 0px 0px;
  background-color: #aec670;
  text-align: center;
  cursor: pointer;
  box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);

  h6 {
    margin: 5px 5px;
    color: #1a2902;
  }

  p {
    font-size: 18px;
    margin: 5px 5px;
    color: #344c11;
  }

  img {
    width: 180px;
  }

  &:hover {
    box-shadow: 1px 2px 19px 1px rgba(0, 0, 0, 0.68);
    -webkit-box-shadow: 1px 2px 19px 1px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 1px 2px 19px 1px rgba(0, 0, 0, 0.68);
  }

  & i {
    color: white;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCounter = styled.div`
  & button {
    padding: 10px 20px 10px 20px;
    background-color: #aec09a;
    border: solid transparent 1px;
    color: white;
    cursor: pointer;
    &:hover {
      border: solid white 1px;
    }
  }
  & span {
    text-align: center;
    margin: 0px 20px 0px 20px;
  }
`;

export const StyledCardButton = styled.button`
  background: rgba(52, 76, 17, 0.5);
  padding: 10px;
  margin: 10px 10px;
  cursor: pointer;
  border: solid 1px transparent;
  text-transform: uppercase;
  font-size: 12px;
  color: white;
  &:hover {
    border: solid 1px white;
  }
`;

export const StyledCardIcon = styled.i`
  margin-left: 5px;
`;
