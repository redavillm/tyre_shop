import styled from "styled-components";
import { SearchAccumsByParams } from "./SearchAccumsByParams/SearchAccumsByParams";
import { SearchAccumsByCar } from "./SearchAccumsByCar/SearchAccumsByCar";
import { Navbar, ProductsList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAccumulatorsFromServer } from "../../store/actions/action_creators/accumulators/get_accumulators_from_server";
import { selectIsLoading } from "../../store/selectors/isLoading";
import { CHANGE_REFRESH_LIST_FLAG } from "../../store/actions";
import {
  CHANGE_ACCUMULATORS_BY_PARAMS_FALSE,
  CHANGE_ACCUMULATORS_BY_PARAMS_TRUE,
} from "../../store/actions/action_creators/accumulators/is_by_params";
import {
  selectAccumulatorsFilteredList,
  selectAccumulatorsList,
  selectIsAccumulatorsByParams,
} from "../../store/selectors/accumulators/accumulators_selectors";

const StyledAccumsCatalogButtons = styled.div`
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

export const Accumulators = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccumulatorsFromServer());
    dispatch(CHANGE_REFRESH_LIST_FLAG); //???
  }, [dispatch]);

  const isByParams = useSelector(selectIsAccumulatorsByParams);
  const isLoading = useSelector(selectIsLoading);

  const accumulatorsList = useSelector(selectAccumulatorsList);

  const filtredList = useSelector(selectAccumulatorsFilteredList);
  const listToDisplay =
    filtredList.length === 0 ? accumulatorsList : filtredList;

  const setSearchByParams = () => {
    dispatch(CHANGE_ACCUMULATORS_BY_PARAMS_TRUE);
  };

  const setSearchByCar = () => {
    dispatch(CHANGE_ACCUMULATORS_BY_PARAMS_FALSE);
  };
  return (
    <div>
      <Navbar />
      <div>
        <StyledAccumsCatalogButtons>
          <button id="byParams" onClick={setSearchByParams}>
            По параметрам
          </button>
          <button id="byCar" onClick={setSearchByCar}>
            По авто
          </button>
        </StyledAccumsCatalogButtons>
      </div>
      {isByParams ? <SearchAccumsByParams /> : <SearchAccumsByCar />}
      {!isLoading ? (
        <ProductsList productsList={listToDisplay} type="accumulators" />
      ) : (
        <Loader />
      )}
    </div>
  );
};
