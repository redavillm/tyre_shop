import { SearchAccumsByParams } from "./SearchAccumsByParams/SearchAccumsByParams";
// import { SearchAccumsByCar } from "./SearchAccumsByCar/SearchAccumsByCar";
import { Loader, Navbar, ProductsList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAccumulatorsFromServer } from "../../store/actions/action_creators/accumulators/get_accumulators_from_server";
import { selectIsLoading } from "../../store/selectors/mainSelector";
// import {
//   CHANGE_ACCUMULATORS_BY_PARAMS_FALSE,
//   CHANGE_ACCUMULATORS_BY_PARAMS_TRUE,
// } from "../../store/actions/action_creators/accumulators/is_by_params";
import {
  selectAccumulatorsList,
  selectAccumulatorsOptions,
  // selectIsAccumulatorsByParams,
} from "../../store/selectors/accumulators/accumulators_selectors";
import { accumFilter } from "../../utilities/accum/accumFilte";

export const Accumulators = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccumulatorsFromServer());
  }, [dispatch]);

  // const isByParams = useSelector(selectIsAccumulatorsByParams);
  const isLoading = useSelector(selectIsLoading);
  const selectedOption = useSelector(selectAccumulatorsOptions);

  const accumulatorsList = accumFilter(
    useSelector(selectAccumulatorsList),
    selectedOption
  );

  // const setSearchByParams = () => {
  //   dispatch(CHANGE_ACCUMULATORS_BY_PARAMS_TRUE);
  // };

  // const setSearchByCar = () => {
  //   dispatch(CHANGE_ACCUMULATORS_BY_PARAMS_FALSE);
  // };
  return (
    <div>
      <Navbar />
      <SearchAccumsByParams />
      {!isLoading ? (
        <ProductsList productsList={accumulatorsList} type="accumulators" />
      ) : (
        <Loader />
      )}
    </div>
  );
};
