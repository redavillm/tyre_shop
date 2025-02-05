import { SearchTyreByParams } from "./searchByParams/SearchByParams";
import { Loader, Navbar, ProductsList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTyresFromServer } from "../../store/actions/action_creators/tyres/get_tyres_from_server";
import { selectIsLoading } from "../../store/selectors/mainSelector";
import {
  selectTyresList,
  selectTyresOptions,
} from "../../store/selectors/tyres/tyres_selectors";
import { tyresFilter } from "../../utilities/tyre";

export const Tyres = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTyresFromServer());
  }, [dispatch]);

  const selectedOption = useSelector(selectTyresOptions);
  const isLoading = useSelector(selectIsLoading);
  const tyresList = tyresFilter(useSelector(selectTyresList), selectedOption);

  return (
    <div>
      <Navbar />
      <SearchTyreByParams />
      {!isLoading ? (
        <ProductsList productsList={!tyresList ? [] : tyresList} type="tyres" />
      ) : (
        <Loader />
      )}
    </div>
  );
};
