import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  ADD_TO_CART,
  SET_DEFAULT_TOAST_MESSAGE,
  SET_TOAST_MESSAGE,
} from "../../store/actions";
import { Toast } from "../Toast/Toast";
import { selectToastMessage } from "../../store/selectors/mainSelector";

const Flex = styled.div`
  height: 500px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  padding: 15px 30px 15px 30px;
  margin-top: 30px;
  border: solid var(--font) 1px;
  color: var(--font);
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  background-color: var(--btn_card_bg);
`;

const StyledProductInfo = styled.div`
  color: var(--font);
  width: 50%;
  & h2 {
    padding-bottom: 15px;
    border-bottom: 1px solid var(--font);
    margin-bottom: 30px;
  }
  & p {
    font-size: 18px;
    margin-bottom: 10px;
  }
  & li {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const StyledImg = styled.div`
  margin: 0px auto;
`;

const StyledCounter = styled.div`
  display: flex;
  margin-top: 30px;
  & button {
    width: 36px;
    background-color: var(--btn_card_bg);
    border: solid var(--font) 1px;
    color: var(--font);
    cursor: pointer;
  }
  & span {
    margin: 0px 10px 0px 10px;
    width: 30px;
    text-align: center;
  }
  & div {
    margin-left: 10px;
  }
`;

export const ItemPage = ({
  img,
  title,
  description,
  price,
  minProdVal,
  id,
  type,
}) => {
  const [counter, setCounter] = useState(minProdVal);
  const toastMessage = useSelector(selectToastMessage);

  const dispatch = useDispatch();

  const increaseCounter = () => {
    if (counter >= 40) {
      return;
    }
    setCounter(counter + minProdVal);
  };
  const decreaseCounter = () => {
    if (counter <= minProdVal) {
      return;
    }
    setCounter(counter - minProdVal);
  };

  const handlerAddToCart = () => {
    dispatch(ADD_TO_CART(id, type, counter));
    dispatch(SET_TOAST_MESSAGE("Товар добавлен"));
  };

  return (
    <Flex>
      <StyledImg>
        <img src={img} alt="product_picture" width="300px" />
      </StyledImg>
      <StyledProductInfo>
        <h2>{title}</h2>
        <ul>
          {Object.entries(description).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
        <p>Цена: {price} руб.</p>

        <StyledCounter>
          <button onClick={decreaseCounter}>
            <i className="fa fa-minus" aria-hidden="true" />
          </button>
          <span>{counter}</span>
          <button onClick={increaseCounter}>
            <i className="fa fa-plus" aria-hidden="true" />
          </button>
          <div>Итог: {counter * price} руб.</div>
        </StyledCounter>
        <StyledButton onClick={handlerAddToCart}>В корзину</StyledButton>
      </StyledProductInfo>
      {toastMessage && (
        <Toast
          message={toastMessage}
          duration={3000}
          onClose={() => dispatch(SET_DEFAULT_TOAST_MESSAGE)}
        />
      )}
    </Flex>
  );
};
