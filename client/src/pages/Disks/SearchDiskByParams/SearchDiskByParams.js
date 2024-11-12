import { disksOptionsCreator } from "../../../utilities/disk/disksOptionsCreator";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDisksList,
  selectDisksOptions,
} from "../../../store/selectors/disks/disks_selectors";
import { setDisksSearchOptions } from "../../../store/actions/action_creators/disks/set_search_options";
import { CHANGE_DISKS_FILTRED_TRUE } from "../../../store/actions/action_creators/disks/is_filter";
import {
  FlexCenter,
  StyledCatalogByParams,
  StyledCatalogEl,
} from "../../../components";

export const SearchDiskByParams = () => {
  const dispatch = useDispatch();

  const searchOptions = useSelector(selectDisksOptions);

  const disksList = useSelector(selectDisksList);

  const handleSelectChange = (key) => (event) => {
    dispatch(
      setDisksSearchOptions({
        ...searchOptions,
        [key]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(CHANGE_DISKS_FILTRED_TRUE);
  };

  return (
    <StyledCatalogByParams>
      <form onSubmit={handleSubmit}>
        <FlexCenter>
          <StyledCatalogEl>
            Диаметр
            <select
              value={searchOptions.diametr}
              onChange={handleSelectChange("diametr")}
            >
              <option>all</option>
              {disksOptionsCreator(disksList, "diametr").map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Крепление
            <select
              value={searchOptions.mount}
              onChange={handleSelectChange("mount")}
            >
              <option>all</option>
              {disksOptionsCreator(disksList, "mount").map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Производитель
            <select
              value={searchOptions.brand}
              onChange={handleSelectChange("brand")}
            >
              <option>all</option>
              {disksOptionsCreator(disksList, "brand").map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Тип
            <select
              value={searchOptions.type}
              onChange={handleSelectChange("type")}
            >
              <option>all</option>
              {disksOptionsCreator(disksList, "type").map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
        </FlexCenter>
        <button type="submit">Поиск</button>
      </form>
    </StyledCatalogByParams>
  );
};
