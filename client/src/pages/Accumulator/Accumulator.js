import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccumulatorById } from "../../store/actions/action_creators/accumulators/get_accumulator_by_id";
import { selectAccumulatorById } from "../../store/selectors/accumulators/accumulators_selectors";
import { ProductNotFound } from "../ProductNotFound/ProductNotFound";
import { BackArrow, ItemPage, Loader, Navbar } from "../../components";
import { selectIsLoading } from "../../store/selectors/mainSelector";

export const Accumulator = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  const id = params.id;

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAccumulatorById(id));
    return;
  }, [dispatch, id]);

  const accumulator = useSelector(selectAccumulatorById);

  if (accumulator.length === 0) {
    return <ProductNotFound />;
  }

  const handleBackArrow = () => {
    navigate(-1);
  };

  const {
    brand,
    model,
    width,
    height,
    length,
    price,
    capacity,
    polarity,
    imgSrc,
  } = accumulator || [];

  const description = {
    Ширина: width + " cm",
    Высота: height + " cm",
    Длинна: length + " cm",
    Ёмкость: capacity,
    Полярность: polarity,
  };

  return (
    <>
      <Navbar />
      <BackArrow handler={handleBackArrow} />
      {!isLoading ? (
        <ItemPage
          id={id}
          type={"accumulators"}
          img={imgSrc}
          title={brand + " " + model}
          description={description}
          price={price}
          minProdVal={1}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};
