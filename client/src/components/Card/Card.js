import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProductData } from "../ProductsList/getProductData/getProductData";

const StyeledCard = styled.span`
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

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCounter = styled.div`
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

const StyledCardButton = styled.button`
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

const StyledIcon = styled.i`
  margin-left: 5px;
`;

export const Card = ({ product, type }) => {
  const { _id, price, imgSrc } = product;
  const { title, params, counterStep, season } = getProductData(product, type);

  const [counter, setCounter] = useState(counterStep);

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
        <StyledIcon className="fa fa-snowflake-o" aria-hidden="true" />
      ) : (
        <StyledIcon className="fa fa-sun-o" aria-hidden="true" />
      );
    }
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
      <Flex>
        <StyledCardButton>В коризину</StyledCardButton>
        <StyledCardButton>Купить</StyledCardButton>
      </Flex>
    </StyeledCard>
  );
};
