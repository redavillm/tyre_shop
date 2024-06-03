import styled from "styled-components";
import { disksFilter } from "../../../scripts/disk/disksFilter";
import { disksOptionsCreator } from "../../../scripts/disk/disksOptionsCreator";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDisksFilteredList,
  selectDisksList,
  selectDisksOptions,
} from "../../../store/selectors/disks/disks_selectors";
import { setDisksSearchOptions } from "../../../store/actions/action_creators/disks/set_search_options";

const StyledCatalogByParams = styled.div`
  border-bottom: 1px solid #aec09a;
  padding-bottom: 20px;
  & button {
    width: 150px;
    padding: 5px 20px;
  }
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCatalogEl = styled.div`
  margin: 20px 40px;
  & select {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    color: black;
  }
`;

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
    dispatch(selectDisksFilteredList(disksFilter(disksList, searchOptions)));
  };

  return (
    <StyledCatalogByParams>
      <form onSubmit={handleSubmit}>
        <Flex>
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
        </Flex>
        <button type="submit">Поиск</button>
      </form>
    </StyledCatalogByParams>
  );
};
