import { useDispatch, useSelector } from "react-redux";
import { selectTyresOptions } from "../../../store/selectors/tyres/tyres_selectors";
import { setTyresSearchOptions } from "../../../store/actions/action_creators/tyres/set_search_options";
import {
  StyledCatalogByParams,
  StyledCatalogEl,
} from "../../../components/Styles/StyledCatalog";
import { FlexCenter } from "../../../components";
import { useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3001";

export const SearchTyreByParams = () => {
  const [options, setOptions] = useState({});
  const dispatch = useDispatch();

  const searchOptions = useSelector(selectTyresOptions);

  const { season } = searchOptions;

  const handleSelectChange = (key) => (event) => {
    dispatch(
      setTyresSearchOptions({
        ...searchOptions,
        [key]: event.target.value,
      })
    );
  };

  useEffect(() => {
    fetch(`${apiUrl}/tyres/unique-parameters`)
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

  return (
    <StyledCatalogByParams>
      <form>
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
          <StyledCatalogEl>
            Сезон
            <select
              value={searchOptions.season}
              onChange={handleSelectChange("season")}
            >
              <option>all</option>
              <option>Лето</option>
              <option>Зима</option>
            </select>
          </StyledCatalogEl>

          {season === "Зима" ? (
            <StyledCatalogEl>
              Шипы
              <select
                value={searchOptions.spiked}
                onChange={handleSelectChange("spiked")}
              >
                <option>all</option>
                <option>С шипами</option>
                <option>Без шипов</option>
              </select>
            </StyledCatalogEl>
          ) : null}
        </FlexCenter>
      </form>
    </StyledCatalogByParams>
  );
};
