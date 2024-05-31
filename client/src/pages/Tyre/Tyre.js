import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectIsLoading } from "../../store/selectors/isLoading";
import { CHANGE_REFRESH_LIST_FLAG } from "../../store/actions";
import { getTyreById } from "../../store/actions/action_creators/tyres/get_tyre_by_id";
import { selectTyreById } from "../../store/selectors/tyres/tyres_selectors";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { ProductNotFound } from "../ProductNotFound/ProductNotFound";

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

const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border: 5px solid white;
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

export const Tyre = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const [counter, setCounter] = useState(2);

  const isLoading = useSelector(selectIsLoading);

  const handleBackArrow = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getTyreById(id));
    dispatch(CHANGE_REFRESH_LIST_FLAG);
  }, [dispatch, id]);

  const tyre = useSelector(selectTyreById);

  const { brand, model, imgSrc, season, price, size } = tyre || [];

  const { width, height, radius } = size || [];

  if (tyre.length === 0) {
    return <ProductNotFound />;
  }

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

  return (
    <>
      <Navbar />
      <BackArrow handler={handleBackArrow} />
      {!isLoading ? (
        <Flex>
          <StyledImg>
            <img src={imgSrc} alt="product pictur" width="300px" />
          </StyledImg>
          <StyledProductInfo>
            <h2>{brand + " " + model}</h2>
            <p>Ширина: {width}</p>
            <p>Высота: {height}</p>
            <p>Радиус: {radius}</p>
            <p>Сезон: {season === "winter" ? "Зима" : "Лето"}</p>
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
      ) : (
        <Loader />
      )}
    </>
  );
};
