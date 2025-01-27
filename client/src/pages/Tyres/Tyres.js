import { SearchTyreByParams } from "./searchByParams/SearchByParams";
// import { SearchByCar } from "./searchByCar/SearchByCar";
import {
  Loader,
  Navbar,
  ProductsList,
  // StyledCatalogButtons,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTyresFromServer } from "../../store/actions/action_creators/tyres/get_tyres_from_server";
import { selectIsLoading } from "../../store/selectors/mainSelector";
// import {
//   CHANGE_TYRES_BY_PARAMS_FALSE,
//   CHANGE_TYRES_BY_PARAMS_TRUE,
// } from "../../store/actions/action_creators/tyres/is_by_params";
import {
  selectIsSpiked,
  // selectIsTyresByParams,
  selectIsWinter,
  selectTyresList,
  selectTyresOptions,
} from "../../store/selectors/tyres/tyres_selectors";
import { tyresfilter } from "../../utilities/tyre";

export const Tyres = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTyresFromServer());
  }, [dispatch]);

  const isWinter = useSelector(selectIsWinter);
  const isSpiked = useSelector(selectIsSpiked);
  const selectedOption = useSelector(selectTyresOptions);
  // const isByParams = useSelector(selectIsTyresByParams);
  const isLoading = useSelector(selectIsLoading);
  const tyresList = tyresfilter(
    useSelector(selectTyresList)?.filter((el) => {
      return !isWinter ? el.season === "summer" : el.season === "winter";
    }),
    selectedOption,
    isSpiked,
    isWinter
  );

  // const setSearchByParams = () => {
  //   dispatch(CHANGE_TYRES_BY_PARAMS_TRUE);
  // };

  // const setSearchByCar = () => {
  //   dispatch(CHANGE_TYRES_BY_PARAMS_FALSE);
  // };

  // const displayList = !isFilter
  //   ? tyresList
  //   : tyresfilter(tyresList, selectedOption, isSpiked, isWinter);

  return (
    <div>
      <Navbar />
      {/* <div>
        <StyledCatalogButtons>
          <button id="byParams" onClick={setSearchByParams}>
            По параметрам
          </button>
          <button id="byCar" onClick={setSearchByCar}>
            По авто
          </button>
        </StyledCatalogButtons>
      </div> */}
      {/* {isByParams ? <SearchTyreByParams /> : <SearchByCar />} */}
      <SearchTyreByParams />
      {!isLoading ? (
        <ProductsList productsList={!tyresList ? [] : tyresList} type="tyres" />
      ) : (
        <Loader />
      )}
    </div>
  );
};
