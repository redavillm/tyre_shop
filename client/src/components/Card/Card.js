import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProductTypeById } from "../../scripts";

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

export const Card = ({
  id,
  title,
  params,
  price,
  imgSrc,
  season,
  counterStep,
  setCartItems,
  cartItems,
}) => {
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

  const StyledIcon = styled.i`
    margin-left: 5px;
  `;

  const isSeasonIcon = () => {
    if (season) {
      return season === "winter" ? (
        <StyledIcon className="fa fa-snowflake-o" aria-hidden="true" />
      ) : (
        <StyledIcon className="fa fa-sun-o" aria-hidden="true" />
      );
    }
  };

  const addCartItemHandler = () => {
    setCartItems({ ...cartItems });
  };

  return (
    <StyeledCard>
      <Link to={`/${getProductTypeById(id)}s/${id}`} key={id}>
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
          <i class="fa fa-minus" aria-hidden="true" />
        </button>
        <span>{counter}</span>
        <button onClick={increaseCounter}>
          <i class="fa fa-plus" aria-hidden="true" />
        </button>
      </StyledCounter>
      <Flex>
        <StyledCardButton onClick={addCartItemHandler()}>
          В коризину
        </StyledCardButton>
        <StyledCardButton>Купить</StyledCardButton>
      </Flex>
    </StyeledCard>
  );
};
