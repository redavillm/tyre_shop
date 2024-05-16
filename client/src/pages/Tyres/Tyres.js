import styled from "styled-components";
import { SearchByParams } from "./searchByParams/SearchByParams";
import { SearchByCar } from "./searchByCar/SearchByCar";
import { Navbar, ProductsList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTyres,
  selectIsTyresByParams,
  selectIsLoading,
  selectIsWinter,
} from "../../store/selectors";
import {
  CHANGE_IS_BY_PARAMS_FALSE,
  CHANGE_IS_BY_PARAMS_TRUE,
} from "../../store/actions";

const StyledTyreCatalogButtons = styled.div`
  display: flex;
  margin-top: 30px;
  & button {
    border: 1px solid #344c11;
    cursor: pointer;
    padding: 15px 60px;
    transition: all 400ms ease;
    background-color: #aec09a;
    color: #1a2902;
    font-size: 22px;
    &: hover {
      color: white;
    }
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

export const Tyres = ({ setCartItems, cartItems }) => {
  const dispatch = useDispatch();
  const isWinter = useSelector(selectIsWinter);
  const isByParams = useSelector(selectIsTyresByParams);
  const isLoading = useSelector(selectIsLoading);
  const tyresList = useSelector(selectTyres)?.filter((el) => {
    return !isWinter ? el.season === "summer" : el.season === "winter";
  });

  return (
    <div>
      <Navbar />
      <div>
        <StyledTyreCatalogButtons>
          <button
            onClick={() => {
              dispatch(CHANGE_IS_BY_PARAMS_TRUE);
            }}
          >
            По параметрам
          </button>
          <button
            onClick={() => {
              dispatch(CHANGE_IS_BY_PARAMS_FALSE);
            }}
          >
            По авто
          </button>
        </StyledTyreCatalogButtons>
      </div>
      {isByParams ? <SearchByParams /> : <SearchByCar />}
      {!isLoading ? (
        <ProductsList
          productsList={tyresList}
          type="tyres"
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};
