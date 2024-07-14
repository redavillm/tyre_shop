import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsWinter,
  selectTyresList,
  selectTyresOptions,
} from "../../../store/selectors/tyres/tyres_selectors";
import { tyresOptionsCreator } from "../../../scripts/tyre/tyresOptionsCreator";
import { CHANGE_IS_WINTER } from "../../../store/actions/action_creators/tyres/is_winter";
import { setTyresSearchOptions } from "../../../store/actions/action_creators/tyres/set_search_options";
import { CHANGE_TYRES_IS_FILTER } from "../../../store/actions/action_creators/tyres";
import {
  FlexCenter,
  StyledCatalogByParams,
  StyledCatalogEl,
} from "../../../components/Styles/Styles";

const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-top: 40px;
  & input {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
`;

const StyledSorting = styled.div`
  font-size: 22px;
  position: absolute;
  right: 0;
  bottom: 0;
  & select {
    padding: 5px 0px;
    margin-left: 5px;
    border: 0;
    // appearance: none;
    // -webkit-appearance: none;
    // -moz-appearance: none;
  }
`;

export const SearchTyreByParams = () => {
  const dispatch = useDispatch();

  const searchOptions = useSelector(selectTyresOptions);
  const isWinter = useSelector(selectIsWinter);

  const tyresList = useSelector(selectTyresList)?.filter((el) => {
    return !isWinter ? el.season === "summer" : el.season === "winter";
  });

  const handleSelectChange = (key) => (event) => {
    dispatch(
      setTyresSearchOptions({
        ...searchOptions,
        [key]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(CHANGE_TYRES_IS_FILTER);
  };

  const handleChanegeCheckbox = () => {
    dispatch(CHANGE_IS_WINTER);
  };

  return (
    <StyledCatalogByParams>
      <form onSubmit={handleSubmit}>
        <FlexCenter>
          <StyledCatalogEl>
            Ширина
            <select
              value={searchOptions.width}
              onChange={handleSelectChange("width")}
            >
              <option>all</option>
              {tyresOptionsCreator(tyresList, "width")?.map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Высота
            <select
              value={searchOptions.height}
              onChange={handleSelectChange("height")}
            >
              <option>all</option>
              {tyresOptionsCreator(tyresList, "height")?.map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCatalogEl>
            Диаметр
            <select
              value={searchOptions.radius}
              onChange={handleSelectChange("radius")}
            >
              <option>all</option>
              {tyresOptionsCreator(tyresList, "radius")?.map((el, index) => (
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
              {tyresOptionsCreator(tyresList, "brand")?.map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
          <StyledCheckbox>
            Зима
            <input
              type="checkbox"
              value="isWinter"
              onChange={handleChanegeCheckbox}
            />
          </StyledCheckbox>
        </FlexCenter>
        <button type="submit">Поиск</button>
      </form>
      <StyledSorting>
        Сортировать:
        <select>
          <option>По популяроности</option>
          <option>Дешевле</option>
          <option>Дороже</option>
        </select>
      </StyledSorting>
    </StyledCatalogByParams>
  );
};
