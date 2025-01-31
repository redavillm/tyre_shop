import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading } from "../../store/selectors/mainSelector";
import { selectTyreById } from "../../store/selectors/tyres/tyres_selectors";
import { ProductNotFound } from "../ProductNotFound/ProductNotFound";
import { BackArrow, ItemPage, Loader, Navbar } from "../../components";
import { fetchProductById } from "../../utilities/fetchProductById";
// import { ProductPage } from "../../components/ProductPage/ProductPage";

const apiUrl = process.env.REACT_APP_API_URL;

export const Tyre = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const isLoading = useSelector(selectIsLoading);

  const handleBackArrow = () => {
    navigate(-1);
  };

  const getTyreById = fetchProductById(`${apiUrl}/tyres`, "GET_TYRES_BY_ID");

  useEffect(() => {
    dispatch(getTyreById(id));
  }, [dispatch, id]);

  const tyre = useSelector(selectTyreById);

  const { brand, model, imgSrc, season, price, size } = tyre || [];

  const { width, height, radius } = size || [];

  const description = {
    Ширина: width + " cm",
    Высота: height + " cm",
    Радиус: radius + " cm",
    Сезон: season === "summer" ? "Лето" : "Зима",
  };

  if (!isLoading && !tyre) {
    return <ProductNotFound />;
  }

  // const formatTyresDescription = (tyre) => ({
  //   Ширина: tyre.size.width + " cm",
  //   Высота: tyre.size.height + " cm",
  //   Радиус: tyre.size.radius + " cm",
  //   Сезон: tyreseason === "summer" ? "Лето" : "Зима",
  // });

  // return (
  //   <ProductPage
  //     fetchProductById={getTyreById}
  //     selectProductById={selectTyreById}
  //     formatDescription={formatTyresDescription}
  //     type="accumulators"
  //   />
  // );

  return (
    <>
      <Navbar />
      <BackArrow handler={handleBackArrow} />
      {!isLoading ? (
        <ItemPage
          id={id}
          type={"tyres"}
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
