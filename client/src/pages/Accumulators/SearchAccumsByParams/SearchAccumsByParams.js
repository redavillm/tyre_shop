import { useDispatch, useSelector } from "react-redux";
import { selectAccumulatorsOptions } from "../../../store/selectors/accumulators/accumulators_selectors";
import { setAccumulatorsSerachOptions } from "../../../store/actions/action_creators/accumulators/set_search_options";
import { Flex } from "../../../components/Card/StyledCard";
import { StyledCatalogByParams, StyledCatalogEl } from "../../../components";
import { useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export const SearchAccumsByParams = () => {
  const [options, setOptions] = useState({});
  const dispatch = useDispatch();

  const searchOptions = useSelector(selectAccumulatorsOptions);

  const handleSelectChange = (key) => (event) => {
    dispatch(
      setAccumulatorsSerachOptions({
        ...searchOptions,
        [key]: event.target.value,
      })
    );
  };

  useEffect(() => {
    fetch(`${apiUrl}/accumulators/unique-parameters`)
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
        <Flex>
          <StyledCatalogEl>
            Размер
            <select
              value={searchOptions.size}
              onChange={handleSelectChange("size")}
            >
              <option>all</option>
              {options.size?.map((el, index) => (
                <option key={index}>{el}</option>
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
              {options.polarity?.map((el, index) => (
                <option key={index}>{el}</option>
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
              {options.capacity?.map((el, index) => (
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
              {options.brand?.map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
        </Flex>
      </form>
    </StyledCatalogByParams>
  );
};
