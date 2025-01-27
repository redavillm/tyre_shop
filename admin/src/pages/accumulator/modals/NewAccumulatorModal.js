import { Button, Card, Form, Input, Modal, Select, Space, Upload } from "antd";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

export const NewAccumulatorModal = ({ open, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const [newImg, setNewImg] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);

  const handleDeletePhoto = () => {
    setCurrentImg("");
    setNewImg(null);
  };

  const handlePhotoUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setNewImg(file);
      setCurrentImg(reader.result); // Показываем предпросмотр
    };
    reader.readAsDataURL(file);
    return false; // Останавливаем автоматическую загрузку
  };

  const handleFinish = () => {
    form
      .validateFields()
      .then((values) => {
        onOk({ ...values, imgSrc: newImg }); // Передаем данные формы и новое фото
        form.resetFields();
        setNewImg(null);
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  return (
    <Modal
      title="Добавление нового товара"
      open={open}
      onOk={handleFinish}
      onCancel={() => {
        form.resetFields();
        setNewImg(null);
        onCancel();
      }}
    >
      <Card
        style={{ marginBottom: "16px", textAlign: "center" }}
        cover={
          <img
            src={currentImg}
            alt="Текущее фото"
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              objectFit: "contain", // добавляем для более корректного отображения изображений
            }}
          />
        }
      ></Card>
      <Space direction="vertical" align="end" style={{ width: "100%" }}>
        <Button danger icon={<DeleteOutlined />} onClick={handleDeletePhoto}>
          Удалить фото
        </Button>
      </Space>
      {/* Форма добавления нового товара */}
      <Form form={form} layout="vertical">
        <Form.Item label="Загрузить новое фото">
          <Upload
            beforeUpload={handlePhotoUpload}
            accept="image/*"
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Загрузить фото</Button>
          </Upload>
        </Form.Item>
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
          name="width"
          label="Ширина"
          rules={[{ required: true, message: "Введите модель" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="height"
          label="Высота"
          rules={[{ required: true, message: "Введите модель" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="length"
          label="Длинна"
          rules={[{ required: true, message: "Введите модель" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="polarity"
          label="Полярность"
          rules={[{ required: true, message: "Введите модель" }]}
        >
          <Select placeholder="Выберите значение">
            <Select.Option value="Обратная">Обратная</Select.Option>
            <Select.Option value="Прямая">Прямая</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="capacity"
          label="Ёмкость"
          rules={[{ required: true, message: "Введите модель" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Цена"
          rules={[{ required: true, message: "Введите цену" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item name="count" label="Количество">
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
