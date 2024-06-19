import { SearchTyreByParams } from "./searchByParams/SearchByParams";
import { SearchByCar } from "./searchByCar/SearchByCar";
import { Navbar, ProductsList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTyresFromServer } from "../../store/actions/action_creators/tyres/get_tyres_from_server";
import { selectIsLoading } from "../../store/selectors/isLoading";
import { CHANGE_REFRESH_LIST_FLAG } from "../../store/actions";
import {
  CHANGE_TYRES_BY_PARAMS_FALSE,
  CHANGE_TYRES_BY_PARAMS_TRUE,
} from "../../store/actions/action_creators/tyres/is_by_params";
import {
  selectIsTyresByParams,
  selectIsWinter,
  selectTyresFilteredList,
  selectTyresList,
} from "../../store/selectors/tyres/tyres_selectors";
import { Loader, StyledTyreCatalogButtons } from "./tyres_styles";

export const Tyres = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTyresFromServer());
    dispatch(CHANGE_REFRESH_LIST_FLAG); //???
  }, [dispatch]);

  const isWinter = useSelector(selectIsWinter);
  const isByParams = useSelector(selectIsTyresByParams);
  const isLoading = useSelector(selectIsLoading);
  const tyresList = useSelector(selectTyresList)?.filter((el) => {
    return !isWinter ? el.season === "summer" : el.season === "winter";
  });
  const filtredList = useSelector(selectTyresFilteredList);
  const listToDisplay = filtredList.length === 0 ? tyresList : filtredList;

  const setSearchByParams = () => {
    dispatch(CHANGE_TYRES_BY_PARAMS_TRUE);
  };

  const setSearchByCar = () => {
    dispatch(CHANGE_TYRES_BY_PARAMS_FALSE);
  };

  return (
    <div>
      <Navbar />
      <div>
        <StyledTyreCatalogButtons>
          <button id="byParams" onClick={setSearchByParams}>
            По параметрам
          </button>
          <button id="byCar" onClick={setSearchByCar}>
            По авто
          </button>
        </StyledTyreCatalogButtons>
      </div>
      {isByParams ? <SearchTyreByParams /> : <SearchByCar />}
      {!isLoading ? (
        <ProductsList productsList={listToDisplay} type="tyres" />
      ) : (
        <Loader />
      )}
    </div>
  );
};
