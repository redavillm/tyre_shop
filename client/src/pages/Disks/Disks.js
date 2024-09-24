import { SearchDiskByParams } from "./SearchDiskByParams/SearchDiskByParams";
import { SearchDiskByCar } from "./SearchDiskByCar/SearchDiskByCar";
import { Navbar, ProductsList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDisksFromServer } from "../../store/actions/action_creators/disks/get_disks_from_server";
import { selectIsLoading } from "../../store/selectors/isLoading";
import {
  CHANGE_DISKS_BY_PARAMS_FALSE,
  CHANGE_DISKS_BY_PARAMS_TRUE,
} from "../../store/actions/action_creators/disks/is_by_params";
import {
  selectDisksList,
  selectDisksOptions,
  selectIsDisksByParams,
  selectIsDisksFilter,
} from "../../store/selectors/disks/disks_selectors";
import { Loader, StyledCatalogButtons } from "../../components/Styles/Styles";
import { disksFilter } from "../../scripts/disk/disksFilter";

export const Disks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDisksFromServer());
  }, [dispatch]);

  const isByParams = useSelector(selectIsDisksByParams);
  const isLoading = useSelector(selectIsLoading);
  const isFilter = useSelector(selectIsDisksFilter);
  const selectedOption = useSelector(selectDisksOptions);

  const setSearchByParams = () => {
    dispatch(CHANGE_DISKS_BY_PARAMS_TRUE);
  };

  const setSearchByCar = () => {
    dispatch(CHANGE_DISKS_BY_PARAMS_FALSE);
  };

  const disksList = useSelector(selectDisksList);

  const displayList = !isFilter
    ? disksList
    : disksFilter(disksList, selectedOption);

  return (
    <div>
      <Navbar />
      <div>
        <StyledCatalogButtons>
          <button id="byParams" onClick={setSearchByParams}>
            По параметрам
          </button>
          <button id="byCar" onClick={setSearchByCar}>
            По авто
          </button>
        </StyledCatalogButtons>
      </div>
      {isByParams ? <SearchDiskByParams /> : <SearchDiskByCar />}
      {!isLoading ? (
        <ProductsList productsList={displayList} type="disks" />
      ) : (
        <Loader />
      )}
    </div>
  );
};
