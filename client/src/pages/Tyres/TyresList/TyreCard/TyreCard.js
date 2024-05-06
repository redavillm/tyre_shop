import styled from "styled-components";
import { fetchTyre } from "../../../../scripts";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyeledCard = styled.span`
  width: 260px;
  margin: 20px 10px;
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

export const TyreCard = ({ id }) => {
  const [counter, setCounter] = useState(2);

  const increaseCounter = () => {
    if (counter >= 40) {
      return;
    }
    setCounter(counter + 2);
  };
  const decreaseCounter = () => {
    if (counter <= 2) {
      return;
    }
    setCounter(counter - 2);
  };

  const tyre = fetchTyre(id);

  return (
    <StyeledCard>
      <Link to={`/tyres/${id}`} key={id}>
        <img src={tyre.imgSrc} alt="tyre img" />
        <h6>
          {tyre.brand + " " + tyre.model + " "}
          {tyre.season === "winter" ? (
            <i className="fa fa-snowflake-o" aria-hidden="true" />
          ) : (
            <i className="fa fa-sun-o" aria-hidden="true" />
          )}
        </h6>
        <p>
          {tyre.size.width + "x" + tyre.size.height + "x" + tyre.size.radius}
        </p>
        <p>{tyre.price * counter} руб.</p>
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
        <StyledCardButton>В коризину</StyledCardButton>
        <StyledCardButton>Купить</StyledCardButton>
      </Flex>
    </StyeledCard>
  );
};
