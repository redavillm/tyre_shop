import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../store/selectors/mainSelector";
import { getDiskById } from "../../store/actions/action_creators/disks/get_disk_by_id";
import { selectDiskById } from "../../store/selectors/disks/disks_selectors";
import { ProductNotFound } from "../ProductNotFound/ProductNotFound";
import { BackArrow, ItemPage, Loader, Navbar } from "../../components";

export const Disk = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  const id = params.id;

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getDiskById(id));
  }, [dispatch, id]);

  const disk = useSelector(selectDiskById);

  if (disk.length === 0) {
    return <ProductNotFound />;
  }

  const handleBackArrow = () => {
    navigate(-1);
  };

  const { brand, model, imgSrc, diametr, price, mount } = disk || [];

  const description = {
    Диамтр: diametr + " " + "cm",
    Разболтовка: mount,
  };

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
          minProdVal={2}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};
