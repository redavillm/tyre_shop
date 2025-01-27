import { Button, Space } from "antd";
import { ProductList } from "../../components/ProductList";
import { DeleteModal } from "../../components/Modals";
import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { EditTyreModal } from "./modals/EditTyreModal";
import { NewTyreModal } from "./modals/NewTyreModal";
import { senderNewItem } from "../../services/senderNewItem";
import { itemUpdater } from "../../services/itemUpdater";
import { deleteProduct } from "../../services/deleteProduct";

export const Tyres = () => {
  const {
    isEditModal,
    editModalOptions,
    isDeleteModal,
    deleteModalOptions,
    isNewProductModal,
    newProductModalOptions,
  } = useModal();

  const [productsList, setProductsList] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

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
      title: "Сезон",
      dataIndex: "season",
      key: "season",
      render: (season) => (season === "winter" ? "Зима" : "Лето"),
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
          <Button onClick={() => handleEditOpenModal(product)}>
            Редактировать
          </Button>
          <Button onClick={() => handleDeleteOpenModal(product)}>
            Удалить
          </Button>
        </Space>
      ),
    },
  ];

  const handlerNewItemSubmit = async (newTyre) => {
    const formData = new FormData();

    formData.append("brand", newTyre.brand);
    formData.append("model", newTyre.model);
    formData.append("season", newTyre.season);
    formData.append("count", newTyre?.count);
    formData.append("price", newTyre.price);
    formData.append("isSpiked", newTyre?.isSpiked);
    formData.append("size[width]", newTyre.size.width);
    formData.append("size[height]", newTyre.size.height);
    formData.append("size[radius]", newTyre.size.radius);

    if (newTyre.imgSrc) {
      formData.append("imgSrc", newTyre.imgSrc);
    }

    const addedProduct = await senderNewItem(formData, "tyres");
    setProductsList((prev) => [...prev, addedProduct.product]);
    newProductModalOptions.close();
  };

  const handleEditOpenModal = (product) => {
    setCurrentProduct({ ...product });
    editModalOptions.show();
  };

  const handleEditSubmit = async (updatedTyre) => {
    const formData = new FormData();

    formData.append("_id", updatedTyre._id);
    formData.append("brand", updatedTyre.brand);
    formData.append("model", updatedTyre.model);
    formData.append("season", updatedTyre.season);
    formData.append("isSpiked", updatedTyre?.isSpiked);
    formData.append("count", updatedTyre?.count);
    formData.append("price", updatedTyre.price);
    formData.append("deleteImg", updatedTyre.deleteImg);
    formData.append("size[width]", updatedTyre.size.width);
    formData.append("size[height]", updatedTyre.size.height);
    formData.append("size[radius]", updatedTyre.size.radius);

    if (updatedTyre.imgSrc) {
      formData.append("imgSrc", updatedTyre.imgSrc);
    }

    const updatedProduct = await itemUpdater(formData, "tyres");
    setProductsList((prev) =>
      prev.map((prod) =>
        prod._id === updatedProduct.product._id ? updatedProduct.product : prod
      )
    );
    setCurrentProduct(null);
    editModalOptions.close();
  };

  const handleDeleteOpenModal = (product) => {
    setCurrentProduct({ ...product }); // Устанавливаем текущий товар для удаления
    deleteModalOptions.show(); // Открываем модалку
  };

  const handleDeleteSubmit = async () => {
    try {
      await deleteProduct(currentProduct._id, "tyres");
      setProductsList((prev) =>
        prev.filter((prod) => prod._id !== currentProduct._id)
      );
      deleteModalOptions.close();
    } catch (error) {
      console.error("Ошибка при удалении товара:", error);
    }
  };

  return (
    <>
      <Button onClick={newProductModalOptions.show}>
        Добавить новый товра
      </Button>
      Колличество: {productsList.length}
      <ProductList
        columns={columns}
        type={"tyres"}
        productsList={productsList}
        setProductsList={setProductsList}
      />
      <EditTyreModal
        open={isEditModal}
        product={currentProduct}
        onOk={handleEditSubmit}
        onCancel={() => {
          editModalOptions.close();
          setCurrentProduct(null);
        }}
      />
      <DeleteModal
        open={isDeleteModal}
        onOk={handleDeleteSubmit}
        onCancel={() => {
          deleteModalOptions.close();
          setCurrentProduct(null);
        }}
      />
      <NewTyreModal
        open={isNewProductModal}
        onOk={handlerNewItemSubmit}
        onCancel={newProductModalOptions.close}
      />
    </>
  );
};
