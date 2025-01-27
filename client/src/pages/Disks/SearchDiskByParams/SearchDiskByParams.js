import { useDispatch, useSelector } from "react-redux";
import { selectDisksOptions } from "../../../store/selectors/disks/disks_selectors";
import { setDisksSearchOptions } from "../../../store/actions/action_creators/disks/set_search_options";
import { StyledCatalogByParams, StyledCatalogEl } from "../../../components";
import { useEffect, useState } from "react";
import { Flex } from "../../../components/Card/StyledCard";

export const SearchDiskByParams = () => {
  const [options, setOptions] = useState({});
  const dispatch = useDispatch();

  const searchOptions = useSelector(selectDisksOptions);

  const handleSelectChange = (key) => (event) => {
    dispatch(
      setDisksSearchOptions({
        ...searchOptions,
        [key]: event.target.value,
      })
    );
  };

  useEffect(() => {
    fetch("http://localhost:3001/disks/unique-parameters")
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
            Диаметр
            <select
              value={searchOptions.diametr}
              onChange={handleSelectChange("diametr")}
            >
              <option>all</option>
              {options.diametr?.map((el, index) => (
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
              {options.mount?.map((el, index) => (
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
          <StyledCatalogEl>
            Тип
            <select
              value={searchOptions.type}
              onChange={handleSelectChange("type")}
            >
              <option>all</option>
              {options.type?.map((el, index) => (
                <option key={index}>{el}</option>
              ))}
            </select>
          </StyledCatalogEl>
        </Flex>
      </form>
    </StyledCatalogByParams>
  );
};
