import { Button, Space } from "antd";
import { ProductList } from "../../components/ProductList";
import { DeleteModal } from "../../components/Modals";
import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { EditDiskModal } from "./modals/EditDiskModal";
import { NewDiskModal } from "./modals/NewDiskModal";
import { senderNewItem } from "../../services/senderNewItem";
import { itemUpdater } from "../../services/itemUpdater";
import { deleteProduct } from "../../services/deleteProduct";

export const Disks = () => {
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
      title: "Диаметр",
      key: "diametr",
      dataIndex: "diametr",
    },
    {
      title: "Разболтовка",
      key: "mount",
      dataIndex: "mount",
    },
    {
      title: "Ширина",
      key: "width",
      dataIndex: "width",
    },
    {
      title: "Вынос",
      key: "offset",
      dataIndex: "offset",
    },
    {
      title: "Цвет",
      key: "color",
      dataIndex: "color",
    },
    {
      title: "Тип диска",
      key: "type",
      dataIndex: "type",
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

  const handlerNewItemSubmit = async (newDisk) => {
    const formData = new FormData();

    formData.append("brand", newDisk.brand);
    formData.append("model", newDisk.model);
    formData.append("type", newDisk.type);
    formData.append("price", newDisk.price);
    formData.append("diametr", newDisk.diametr);
    formData.append("mount", newDisk.mount);
    formData.append("width", newDisk.width);
    formData.append("offset", newDisk.offset);
    formData.append("color", newDisk.color);
    formData.append("count", newDisk.count);

    if (newDisk.imgSrc) {
      formData.append("imgSrc", newDisk.imgSrc);
    }

    const addedProduct = await senderNewItem(formData, "disks");
    setProductsList((prev) => [...prev, addedProduct.product]);
    newProductModalOptions.close();
  };

  const handleEditOpenModal = (product) => {
    setCurrentProduct({ ...product });
    editModalOptions.show();
  };

  const handleEditSubmit = async (updatedDisk) => {
    const formData = new FormData();

    formData.append("_id", updatedDisk._id);
    formData.append("brand", updatedDisk.brand);
    formData.append("model", updatedDisk.model);
    formData.append("type", updatedDisk.type);
    formData.append("price", updatedDisk.price);
    formData.append("diametr", updatedDisk.diametr);
    formData.append("mount", updatedDisk.mount);
    formData.append("width", updatedDisk.width);
    formData.append("offset", updatedDisk.offset);
    formData.append("color", updatedDisk.color);
    formData.append("deleteImg", updatedDisk.deleteImg || false);
    formData.append("count", updatedDisk?.count);

    if (updatedDisk.imgSrc && updatedDisk.imgSrc !== currentProduct?.imgSrc) {
      formData.append("imgSrc", updatedDisk.imgSrc);
    }

    const updatedProduct = await itemUpdater(formData, "disks");

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
      await deleteProduct(currentProduct._id, "disks");
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
        type={"disks"}
        productsList={productsList}
        setProductsList={setProductsList}
      />
      <EditDiskModal
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
        onOk={handleDeleteSubmit} // Подтверждение удаления
        onCancel={() => {
          deleteModalOptions.close();
          setCurrentProduct(null);
        }}
      />
      <NewDiskModal
        open={isNewProductModal}
        onOk={handlerNewItemSubmit}
        onCancel={newProductModalOptions.close}
      />
    </>
  );
};
