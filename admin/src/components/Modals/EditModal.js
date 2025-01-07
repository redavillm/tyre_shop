import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

export const EditModal = ({ open, product, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const [currentPhoto, setCurrentPhoto] = useState(product?.imgSrc || "");

  const [newPhoto, setNewPhoto] = useState(null);

  const handlePhotoUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setNewPhoto(file);
      setCurrentPhoto(reader.result); // Показываем предпросмотр
    };
    reader.readAsDataURL(file);
    return false; // Останавливаем автоматическую загрузку
  };

  // Удаление текущего фото
  const handleDeletePhoto = () => {
    setCurrentPhoto("");
    setNewPhoto(null);
  };

  // Передача данных формы и фото в родительский компонент
  const handleFinish = () => {
    form
      .validateFields()
      .then((values) => {
        onOk({ ...values, newPhoto }); // Передаем данные формы и новое фото
        form.resetFields();
        setNewPhoto(null);
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  return (
    <Modal
      title="Редактирование товара"
      open={open}
      onOk={handleFinish}
      onCancel={() => {
        form.resetFields();
        setNewPhoto(null);
        onCancel();
      }}
    >
      {/* <img
        src={product?.imgSrc}
        alt="Текущее фото"
        style={{
          maxWidth: "100%",
          maxHeight: "200px",
          marginBottom: "8px",
        }}
      /> */}

      <div style={{ marginBottom: "16px", textAlign: "center" }}>
        <img
          src={product?.imgSrc}
          alt="Текущее фото"
          style={{
            maxWidth: "100%",
            maxHeight: "200px",
            marginBottom: "8px",
          }}
        />
        <Button danger icon={<DeleteOutlined />} onClick={handleDeletePhoto}>
          Удалить фото
        </Button>
      </div>

      {/* Форма редактирования товара */}
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          brand: product?.brand,
          model: product?.model,
          price: product?.price,
          count: product?.count,
        }}
      >
        <Form.Item
          name="brand"
          label="Бренд"
          rules={[{ required: true, message: "Введите бренд" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="model"
          label="Модель"
          rules={[{ required: true, message: "Введите модель" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Цена"
          rules={[{ required: true, message: "Введите цену" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="count"
          label="Количество"
          rules={[{ required: true, message: "Введите количество" }]}
        >
          <Input type="number" />
        </Form.Item>

        {/* Загрузка нового фото */}
        <Form.Item label="Загрузить новое фото">
          <Upload
            beforeUpload={handlePhotoUpload}
            accept="image/*"
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Загрузить фото</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};
