import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ProductNotFound } from "../../pages/ProductNotFound/ProductNotFound";
import { Navbar } from "../Navbar/Navbar";
import { BackArrow } from "../BackArrow/BackArrow";
import { ItemPage } from "../ItemPage/ItemPage";
import { Loader } from "../Styles/mainStyeles";
import { selectIsLoading } from "../../store/selectors/mainSelector";

export const ProductPage = ({
  fetchProductById,
  selectProductById,
  formatDescription,
  type,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  const id = params.id;

  const isLoading = useSelector(selectIsLoading);

  const handleBackArrow = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const product = useSelector(selectProductById);

  if (!isLoading && !product) {
    return <ProductNotFound />;
  }

  const description = product ? formatDescription(product) : {};
  const { brand, model, price, imgSrc } = product || {};

  return (
    <>
      <Navbar />
      <BackArrow handler={handleBackArrow} />
      {!isLoading ? (
        <ItemPage
          id={id}
          type={type}
          img={imgSrc}
          title={`${brand} ${model}`}
          description={description}
          price={price}
          minProdVal={type === "accumulators" ? 1 : 2}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};
