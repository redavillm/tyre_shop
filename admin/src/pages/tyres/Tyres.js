import { Button, Space } from "antd";
import { ProductList } from "../../components/ProductList";
import { EditModal } from "../../components/Modals/EditModal";
import { DeleteModal, NewTyreModal } from "../../components/Modals";
import { useTyreModal } from "./useTyreModal";
import { useState } from "react";
import { sendNewTyre } from "./sendNewTyre";

export const Tyres = () => {
  const {
    isEditModal,
    editModalOptions,
    isDeleteModal,
    deleteModalOptions,
    isNewTyreModal,
    newTyreModalOptions,
  } = useTyreModal();

  const [currentProduct, setCurrentProduct] = useState(null);

  const handlerNewTyreSubmit = async (newTyre) => {
    const formData = new FormData();

    console.log("newTyre from frontend ==>", newTyre);

    formData.append("brand", newTyre.brand);
    formData.append("model", newTyre.model);
    formData.append("season", newTyre.season);
    formData.append("price", newTyre.price);
    formData.append("size[width]", newTyre.size.width);
    formData.append("size[height]", newTyre.size.height);
    formData.append("size[radius]", newTyre.size.radius);

    // Добавьте файл только если он существует
    if (newTyre.imgSrc) {
      formData.append("imgSrc", newTyre.imgSrc);
    }

    sendNewTyre(formData);
    newTyreModalOptions.accept();
  };

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    editModalOptions.show();
  };

  const handleEditSubmit = (updatedProduct) => {
    console.log("Updated Product:", updatedProduct);
    editModalOptions.accept();
    setCurrentProduct(null);
  };

  const handleDeleteClick = (product) => {
    setCurrentProduct(product); // Устанавливаем текущий товар для удаления
    deleteModalOptions.show(); // Открываем модалку
  };

  const handleDeleteSubmit = () => {
    console.log("delete => ", currentProduct._id);
    deleteModalOptions.accept();
  };

  const columns = [
    {
      title: "ID в базе",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Бренд",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Модель",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Размеры",
      key: "size",
      dataIndex: "size",
      render: (size) => (
        <div>
          <span>{size.width}</span>/<span>{size.height}</span>/
          <span>{size.radius}</span>R
        </div>
      ),
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Количество",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Action",
      key: "action",
      render: (product) => (
        <Space size="middle">
          <Button onClick={() => handleEditClick(product)}>
            Редактировать
          </Button>
          <Button onClick={() => handleDeleteClick(product)}>Удалить</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Button onClick={newTyreModalOptions.show}>Добавить новый товра</Button>
      <ProductList columns={columns} type={"tyres"} />
      <EditModal
        open={isEditModal}
        product={currentProduct}
        onOk={handleEditSubmit}
        onCancel={() => {
          editModalOptions.cancel();
          setCurrentProduct(null);
        }}
      />
      <DeleteModal
        open={isDeleteModal}
        onOk={handleDeleteSubmit} // Подтверждение удаления
        onCancel={() => {
          deleteModalOptions.cancel();
          setCurrentProduct(null);
        }}
      />
      <NewTyreModal
        open={isNewTyreModal}
        onOk={handlerNewTyreSubmit}
        onCancel={newTyreModalOptions.cancel}
      />
    </>
  );
};
