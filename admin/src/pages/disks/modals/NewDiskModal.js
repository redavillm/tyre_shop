import { Button, Card, Form, Input, Modal, Select, Space, Upload } from "antd";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

export const NewDiskModal = ({ open, onOk, onCancel }) => {
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
      title="Редактирование товара"
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

      {/* Форма редактирования товара */}
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
        <Form.Item name="type" label="Тип диска">
          <Select placeholder="Выберите значение">
            <Select.Option value={"stamp"}>Штамповка</Select.Option>
            <Select.Option value={"alloy"}>Литьё</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="diametr"
          label="Диаметр"
          rules={[{ required: true, message: "Введите значение диаметра" }]}
        >
          <Input type="number" placeholder="Диаметр" />
        </Form.Item>
        <Form.Item
          name="mount"
          label="Разболтовка"
          rules={[{ required: true, message: "Введите значение" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="width"
          label="Ширина"
          rules={[{ required: true, message: "Введите значение" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="offset"
          label="Вынос"
          rules={[{ required: true, message: "Введите значение" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="color"
          label="Цвет"
          rules={[{ required: true, message: "Введите значение" }]}
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
        <Form.Item name="count" label="Количество">
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
