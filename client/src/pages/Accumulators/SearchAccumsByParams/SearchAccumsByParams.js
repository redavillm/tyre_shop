import styled from "styled-components";
import { accumFilter } from "../../../scripts/accum/accumFilte";
import { accumsOptionCreator } from "../../../scripts/accum/accumsOptionCreator";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccumulatorsFilteredList,
  selectAccumulatorsList,
  selectAccumulatorsOptions,
} from "../../../store/selectors/accumulators/accumulators_selectors";
import { setAccumulatorsSerachOptions } from "../../../store/actions/action_creators/accumulators/set_search_options";

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

export const SearchAccumsByParams = () => {
  const dispatch = useDispatch();

  const searchOptions = useSelector(selectAccumulatorsOptions);

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
    dispatch(
      selectAccumulatorsFilteredList(
        accumFilter(accumulatorsList, searchOptions)
      )
    );
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
              {accumsOptionCreator("size").map((el, index) => (
                <option id={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Полярность
            <select
              value={searchOptions.polarity}
              onChange={handleSelectChange("polarity")}
            >
              <option>all</option>
              {accumsOptionCreator("polarity").map((el, index) => (
                <option id={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Емкость
            <select
              value={searchOptions.capacity}
              onChange={handleSelectChange("capacity")}
            >
              <option>all</option>
              {accumsOptionCreator("capacity").map((el, index) => (
                <option id={index}>{el}</option>
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
              {accumsOptionCreator("brand").map((el, index) => (
                <option id={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
        </Flex>
        <button type="submit">Поиск</button>
      </form>
    </StyledCatalogByParams>
  );
};
