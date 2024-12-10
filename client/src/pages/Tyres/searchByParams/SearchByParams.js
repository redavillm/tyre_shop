import { useDispatch, useSelector } from "react-redux";
import {
  selectIsWinter,
  selectTyresOptions,
} from "../../../store/selectors/tyres/tyres_selectors";
import { CHANGE_IS_WINTER } from "../../../store/actions/action_creators/tyres/is_winter";
import { setTyresSearchOptions } from "../../../store/actions/action_creators/tyres/set_search_options";
import {
  StyledCatalogByParams,
  StyledCatalogEl,
  StyledCheckbox,
  StyledSorting,
} from "../../../components/Styles/StyledCatalog";
import { FlexCenter } from "../../../components";
import { TYRES_FILTERED_TRUE } from "../../../store/actions/action_creators/tyres/is_filter";
import { useEffect, useState } from "react";

export const SearchTyreByParams = () => {
  const [options, setOptions] = useState({});
  const dispatch = useDispatch();

  const searchOptions = useSelector(selectTyresOptions);
  const isWinter = useSelector(selectIsWinter);

  const handleSelectChange = (key) => (event) => {
    dispatch(
      setTyresSearchOptions({
        ...searchOptions,
        [key]: event.target.value,
      })
    );
  };

  useEffect(() => {
    fetch("http://localhost:3001/tyres/unique-parameters")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .then((data) => setOptions(data))
      .catch((error) => console.log("Error: " + error.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(TYRES_FILTERED_TRUE);
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
              {options.widths?.map((el, index) => (
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
              {options.heights?.map((el, index) => (
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
              {options.radius?.map((el, index) => (
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
              {options.brands?.map((el, index) => (
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
              checked={isWinter}
            />
          </StyledCheckbox>
        </FlexCenter>
        <button type="submit">Поиск</button>
      </form>
      <StyledSorting>
        Сортировать:
        <select>
          <option>Дешевле</option>
          <option>Дороже</option>
        </select>
      </StyledSorting>
    </StyledCatalogByParams>
  );
};
