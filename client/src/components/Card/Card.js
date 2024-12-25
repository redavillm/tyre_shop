import { useState } from "react";
import { Link } from "react-router-dom";
import { getProductParams } from "../ProductsList/utilities/getProductParams";
import { StyeledCard, StyledCardButton, StyledCounter } from "./StyledCard";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../store/actions";
import { Toast } from "../Toast/Toast";

export const Card = ({ product, type }) => {
  const { _id, price, imgSrc } = product;
  const { title, params, counterStep, season } = getProductParams(
    product,
    type
  );
  const [counter, setCounter] = useState(counterStep);
  const [toastMessage, setToastMessage] = useState(null);

  const dispatch = useDispatch();

  const increaseCounter = () => {
    if (counter >= 40) {
      return;
    }
    setCounter(counter + counterStep);
  };
  const decreaseCounter = () => {
    if (counter <= counterStep) {
      return;
    }
    setCounter(counter - counterStep);
  };

  const isSeasonIcon = () => {
    if (season) {
      return season === "winter" ? (
        <i className="fa fa-snowflake-o" aria-hidden="true" />
      ) : (
        <i className="fa fa-sun-o" aria-hidden="true" />
      );
    }
  };

  const handlerAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(ADD_TO_CART(_id, type, counter));
    setToastMessage("Товар добавлен");
  };

  return (
    <StyeledCard>
      <Link to={`/${type}/${_id}`}>
        <div>
          <img src={imgSrc} alt="Product img" />
          <h6>
            {title}
            {isSeasonIcon()}
          </h6>
          <p>{params}</p>
          <p>{price * counter} руб.</p>
        </div>
      </Link>
      <StyledCounter>
        <button onClick={decreaseCounter}>
          <i className="fa fa-minus" aria-hidden="true" />
        </button>
        <span>{counter}</span>
        <button onClick={increaseCounter}>
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
      </StyledCounter>
      <div>
        <StyledCardButton onClick={handlerAddToCart}>
          В коризину
        </StyledCardButton>
        {/* <StyledCardButton>Купить</StyledCardButton> */}
      </div>
      {toastMessage && (
        <Toast
          message={toastMessage}
          duration={3000}
          onClose={() => setToastMessage(null)}
        />
      )}
    </StyeledCard>
  );
};
