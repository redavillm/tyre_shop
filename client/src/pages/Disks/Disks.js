import styled from "styled-components";
import { SearchDiskByParams } from "./SearchDiskByParams/SearchDiskByParams";
import { SearchDiskByCar } from "./SearchDiskByCar/SearchDiskByCar";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDisksFromServer } from "../../store/actions/action_creators/disks/get_disks_from_server";
import {
  CHANGE_IS_BY_PARAMS_FALSE,
  CHANGE_IS_BY_PARAMS_TRUE,
  CHANGE_REFRESH_LIST_FLAG,
} from "../../store/actions";
import { selectIsTyresByParams } from "../../store/selectors/tyres/tyres_selectors";
import { selectIsLoading } from "../../store/selectors/isLoading";

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

export const Disks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDisksFromServer());
    dispatch(CHANGE_REFRESH_LIST_FLAG);
  });

  const isByParams = useSelector(selectIsTyresByParams);
  const isLoading = useSelector(selectIsLoading);

  const tyresList = useSelector(selectTyresList);

  const filtredList = useSelector(selectFilteredList);
  const listToDisplay = filtredList.length === 0 ? tyresList : filtredList;

  const setSearchByParams = () => {
    dispatch(CHANGE_IS_BY_PARAMS_TRUE);
  };

  const setSearchByCar = () => {
    dispatch(CHANGE_IS_BY_PARAMS_FALSE);
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
      <ProductsList productsList={disksList} type="disks" />
    </div>
  );
};
