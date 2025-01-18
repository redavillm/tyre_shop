import { Button, Space } from "antd";
import { ProductList } from "../../components/ProductList";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";
import { senderNewItem } from "../../services/senderNewItem";
import { itemUpdater } from "../../services/itemUpdater";
import { deleteProduct } from "../../services/deleteProduct";
import { DeleteModal } from "../../components/Modals";
import { EditAccumulatorModal } from "./modals/EditAccumulatorModal";
import { NewAccumulatorModal } from "./modals/NewAccumulatorModal";

export const Accumulators = () => {
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
      title: "Ширина",
      dataIndex: "width",
      key: "width",
    },
    {
      title: "Высота",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Длинна",
      dataIndex: "length",
      key: "length",
    },
    {
      title: "Полярность",
      dataIndex: "polarity",
      key: "polarity",
    },
    {
      title: "Емкость",
      dataIndex: "capacity",
      key: "capacity",
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

  const handlerNewItemSubmit = async (newAccumulator) => {
    const formData = new FormData();

    formData.append("brand", newAccumulator.brand);
    formData.append("model", newAccumulator.model);
    formData.append("width", newAccumulator.width);
    formData.append("height", newAccumulator.height);
    formData.append("length", newAccumulator.length);
    formData.append("polarity", newAccumulator.polarity);
    formData.append("capacity", newAccumulator.capacity);
    formData.append("price", newAccumulator.price);

    if (newAccumulator.imgSrc) {
      formData.append("imgSrc", newAccumulator.imgSrc);
    }

    const addedProduct = await senderNewItem(formData, "accumulators");
    setProductsList((prev) => [...prev, addedProduct.product]);
    newProductModalOptions.close();
  };

  const handleEditOpenModal = (product) => {
    setCurrentProduct({ ...product });
    editModalOptions.show();
  };

  const handleEditSubmit = async (updatedAccumulator) => {
    const formData = new FormData();

    formData.append("_id", updatedAccumulator._id);
    formData.append("deleteImg", updatedAccumulator.deleteImg);
    //добавить

    if (updatedAccumulator.imgSrc) {
      formData.append("imgSrc", updatedAccumulator.imgSrc);
    }

    const updatedProduct = await itemUpdater(formData, "accumulators");
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
      await deleteProduct(currentProduct._id, "accumulators");
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
      {productsList.length}
      <ProductList
        columns={columns}
        type={"accumulators"}
        productsList={productsList}
        setProductsList={setProductsList}
      />
      <EditAccumulatorModal
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
      <NewAccumulatorModal
        open={isNewProductModal}
        onOk={handlerNewItemSubmit}
        onCancel={newProductModalOptions.close}
      />
    </>
  );
};
