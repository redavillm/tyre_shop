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

  .image-wrapper {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5; /* Фон, если картинка не заполняет всё пространство */
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
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
  & button:hover {
    border: solid 1px var(--font_2);
  }
  & span {
    text-align: center;
    margin: 0px 20px 0px 20px;
  }
`;

export const StyledCardButton = styled.button`
  background: var(--btn_card_bg);
  padding: 10px;
  margin: 10px 10px;
  cursor: pointer;
  border: solid 1px transparent;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--font_2);
  &:hover {
    border: solid 1px var(--font_2);
  }
`;
