import { SearchDiskByParams } from "./SearchDiskByParams/SearchDiskByParams";
// import { SearchDiskByCar } from "./SearchDiskByCar/SearchDiskByCar";
import { Loader, Navbar, ProductsList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDisksFromServer } from "../../store/actions/action_creators/disks/get_disks_from_server";
import { selectIsLoading } from "../../store/selectors/mainSelector";
import {
  selectDisksList,
  selectDisksOptions,
  // selectIsDisksByParams,
} from "../../store/selectors/disks/disks_selectors";
import { disksFilter } from "../../utilities/disk/disksFilter";
// import {
//   DISKS_BY_PARAMS_FALSE,
//   DISKS_BY_PARAMS_TRUE,
// } from "../../store/actions/action_creators/disks/is_by_params";

export const Disks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDisksFromServer());
  }, [dispatch]);

  // const isByParams = useSelector(selectIsDisksByParams);
  const isLoading = useSelector(selectIsLoading);
  const selectedOption = useSelector(selectDisksOptions);

  // const setSearchByParams = () => {
  //   dispatch(DISKS_BY_PARAMS_TRUE);
  // };

  // const setSearchByCar = () => {
  //   dispatch(DISKS_BY_PARAMS_FALSE);
  // };

  const disksList = disksFilter(useSelector(selectDisksList), selectedOption);

  return (
    <div>
      <Navbar />
      <SearchDiskByParams />
      {!isLoading ? (
        <ProductsList productsList={disksList} type="disks" />
      ) : (
        <Loader />
      )}
    </div>
  );
};
