import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { fetchDisk } from "../../scripts";

const BackArrow = styled.i`
  font-size: 48px;
  cursor: pointer;
`;

const Flex = styled.div`
  height: 500px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  padding: 15px 30px 15px 30px;
  margin-top: 30px;
  border: solid white 1px;
  color: #778d45;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  background-color: white;
`;

const StyledProductInfo = styled.div`
  width: 50%;
  & h2 {
    padding-bottom: 15px;
    border-bottom: 1px solid white;
    margin-bottom: 30px;
  }
  & p {
    font-size: 18px;
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
    background-color: #778d45;
    border: solid white 1px;
    color: white;
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

export const Disk = (setCartItems) => {
  const [counter, setCounter] = useState(2);
  const navigate = useNavigate();

  const handleBackArrow = () => {
    navigate(-1);
  };

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

  const params = useParams();

  const id = params.id;

  const { brand, model, diametr, mount, price, imgSrc } = fetchDisk(+id);

  return (
    <>
      <Navbar />
      <BackArrow>
        <i
          className="fa fa-long-arrow-left"
          aria-hidden="true"
          onClick={handleBackArrow}
        />
      </BackArrow>
      <Flex>
        <StyledImg>
          <img src={imgSrc} alt="product pictur" width="300px" />
        </StyledImg>
        <StyledProductInfo>
          <h2>{brand + " " + model}</h2>
          <p>Диаметр: {diametr}</p>
          <p>Размер: {mount}</p>
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
          <StyledButton>В корзину</StyledButton>
        </StyledProductInfo>
      </Flex>
    </>
  );
};
