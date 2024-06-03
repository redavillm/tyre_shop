import styled from "styled-components";
import { SearchDiskByParams } from "./SearchDiskByParams/SearchDiskByParams";
import { SearchDiskByCar } from "./SearchDiskByCar/SearchDiskByCar";
import { Navbar, ProductsList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDisksFromServer } from "../../store/actions/action_creators/disks/get_disks_from_server";
import { selectIsLoading } from "../../store/selectors/isLoading";
import { CHANGE_REFRESH_LIST_FLAG } from "../../store/actions";
import {
  CHANGE_DISKS_BY_PARAMS_FALSE,
  CHANGE_DISKS_BY_PARAMS_TRUE,
} from "../../store/actions/action_creators/disks/is_by_params";
import {
  selectDisksFilteredList,
  selectDisksList,
  selectIsDisksByParams,
} from "../../store/selectors/disks/disks_selectors";

const StyledDisksCatalogButtons = styled.div`
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

export const Disks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDisksFromServer());
    dispatch(CHANGE_REFRESH_LIST_FLAG); //???
  }, [dispatch]);

  const isByParams = useSelector(selectIsDisksByParams);
  const isLoading = useSelector(selectIsLoading);

  const disksList = useSelector(selectDisksList);

  const filtredList = useSelector(selectDisksFilteredList);
  const listToDisplay = filtredList.length === 0 ? disksList : filtredList;

  const setSearchByParams = () => {
    dispatch(CHANGE_DISKS_BY_PARAMS_TRUE);
  };

  const setSearchByCar = () => {
    dispatch(CHANGE_DISKS_BY_PARAMS_FALSE);
  };

  return (
    <div>
      <Navbar />
      <div>
        <StyledDisksCatalogButtons>
          <button id="byParams" onClick={setSearchByParams}>
            По параметрам
          </button>
          <button id="byCar" onClick={setSearchByCar}>
            По авто
          </button>
        </StyledDisksCatalogButtons>
      </div>
      {isByParams ? <SearchDiskByParams /> : <SearchDiskByCar />}
      {!isLoading ? (
        <ProductsList productsList={listToDisplay} type="disks" />
      ) : (
        <Loader />
      )}
    </div>
  );
};
