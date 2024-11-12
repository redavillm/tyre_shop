import { accumsOptionCreator } from "../../../utilities/accum/accumsOptionCreator";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccumulatorsList,
  selectAccumulatorsOptions,
  selectIsAccumulatorsFilter,
} from "../../../store/selectors/accumulators/accumulators_selectors";
import { setAccumulatorsSerachOptions } from "../../../store/actions/action_creators/accumulators/set_search_options";
import { Flex } from "../../../components/Card/StyledCard";
import { CHANGE_ACCUMULATORS_FILTRED_TRUE } from "../../../store/actions/action_creators/accumulators/is_filter";
import { StyledCatalogByParams, StyledCatalogEl } from "../../../components";

export const SearchAccumsByParams = () => {
  const dispatch = useDispatch();

  const searchOptions = useSelector(selectAccumulatorsOptions);
  const isFilter = useSelector(selectIsAccumulatorsFilter);

  const accumulatorsList = useSelector(selectAccumulatorsList);

  const handleSelectChange = (key) => (event) => {
    dispatch(
      setAccumulatorsSerachOptions({
        ...searchOptions,
        [key]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(CHANGE_ACCUMULATORS_FILTRED_TRUE);
    console.log("isFilter in searchBar => ", isFilter);
  };

  return (
    <StyledCatalogByParams>
      <form onSubmit={handleSubmit}>
        <Flex>
          <StyledCatalogEl>
            Размер
            <select
              value={searchOptions.size}
              onChange={handleSelectChange("size")}
            >
              <option>all</option>
              {accumsOptionCreator(accumulatorsList, "size").map(
                (el, index) => (
                  <option key={index}>{el}</option>
                )
              )}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Полярность
            <select
              value={searchOptions.polarity}
              onChange={handleSelectChange("polarity")}
            >
              <option>all</option>
              {accumsOptionCreator(accumulatorsList, "polarity").map(
                (el, index) => (
                  <option key={index}>{el}</option>
                )
              )}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Емкость
            <select
              value={searchOptions.capacity}
              onChange={handleSelectChange("capacity")}
            >
              <option>all</option>
              {accumsOptionCreator(accumulatorsList, "capacity").map(
                (el, index) => (
                  <option key={index}>{el}</option>
                )
              )}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Производитель
            <select
              value={searchOptions.brand}
              onChange={handleSelectChange("brand")}
            >
              <option>all</option>
              {accumsOptionCreator(accumulatorsList, "brand").map(
                (el, index) => (
                  <option key={index}>{el}</option>
                )
              )}
            </select>
          </StyledCatalogEl>
        </Flex>
        <button type="submit">Поиск</button>
      </form>
    </StyledCatalogByParams>
  );
};
