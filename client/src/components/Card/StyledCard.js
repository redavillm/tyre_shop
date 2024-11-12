import styled from "styled-components";

export const StyeledCard = styled.span`
  width: 260px;
  margin: 20px 10px;
  padding: 10px 0px 0px 0px;
  background-color: var(--bg_2);
  text-align: center;
  cursor: pointer;
  box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);

  h6 {
    margin: 5px 5px;
    color: var(--font);
  }

  p {
    font-size: 18px;
    margin: 5px 5px;
    color: var(--font_2);
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
    color: var(--font_2);
    margin-left: 5px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCounter = styled.div`
  & button {
    padding: 10px 20px 10px 20px;
    background-color: var(--grey);
    border: solid transparent 1px;
    color: var(--font_2);
    cursor: pointer;
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
    border: solid 1px var(--font_2);
  }
`;
