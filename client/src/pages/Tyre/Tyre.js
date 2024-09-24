import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading } from "../../store/selectors/isLoading";
import { CHANGE_REFRESH_LIST_FLAG } from "../../store/actions";
import { getTyreById } from "../../store/actions/action_creators/tyres/get_tyre_by_id";
import { selectTyreById } from "../../store/selectors/tyres/tyres_selectors";
import { ProductNotFound } from "../ProductNotFound/ProductNotFound";
import { Loader } from "../../components/Styles/Styles";
import { BackArrow, ItemPage, Navbar } from "../../components";

export const Tyre = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const isLoading = useSelector(selectIsLoading);

  const handleBackArrow = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getTyreById(id));
    dispatch(CHANGE_REFRESH_LIST_FLAG);
  }, [dispatch, id]);

  const tyre = useSelector(selectTyreById);

  const { brand, model, imgSrc, season, price, size } = tyre || [];

  const { width, height, radius } = size || [];

  const description = {
    Ширина: width + " " + "cm",
    Высота: height + " " + "cm",
    Радиус: radius + " " + "cm",
    Сезон: season === "summer" ? "Лето" : "Зима",
  };

  if (tyre.length === 0) {
    return <ProductNotFound />;
  }

  return (
    <>
      <Navbar />
      <BackArrow handler={handleBackArrow} />
      {!isLoading ? (
        <ItemPage
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
