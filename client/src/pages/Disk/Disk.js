import { selectDiskById } from "../../store/selectors/disks/disks_selectors";
import { ProductPage } from "../../components/ProductPage/ProductPage";
import { fetchProductById } from "../../utilities/fetchProductById";

export const Disk = () => {
  const formatAccumulatorDescription = (disk) => ({
    Диамтр: disk.diametr + " cm",
    Разболтовка: disk.mount,
  });

  const getDiskById = fetchProductById(
    "http://localhost:3001/disks",
    "GET_DISK_BY_ID"
  );

  return (
    <ProductPage
      fetchProductById={getDiskById}
      selectProductById={selectDiskById}
      formatDescription={formatAccumulatorDescription}
      type="disks"
    />
  );
};
