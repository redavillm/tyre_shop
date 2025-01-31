import { selectAccumulatorById } from "../../store/selectors/accumulators/accumulators_selectors";
import { ProductPage } from "../../components/ProductPage/ProductPage";
import { fetchProductById } from "../../utilities/fetchProductById";

const apiUrl = process.env.REACT_APP_API_URL;

export const Accumulator = () => {
  const formatAccumulatorDescription = (accumulator) => ({
    Ширина: accumulator.width + " cm",
    Высота: accumulator.height + " cm",
    Длинна: accumulator.length + " cm",
    Ёмкость: accumulator.capacity,
    Полярность: accumulator.polarity,
  });

  const getAccumulatorById = fetchProductById(
    `${apiUrl}/accumulators`,
    "GET_ACCUMULATOR_BY_ID"
  );

  return (
    <ProductPage
      fetchProductById={getAccumulatorById}
      selectProductById={selectAccumulatorById}
      formatDescription={formatAccumulatorDescription}
      type="accumulators"
    />
  );
};
