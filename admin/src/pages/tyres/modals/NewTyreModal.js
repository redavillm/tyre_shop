import { Button, Card, Form, Input, Modal, Select, Space, Upload } from "antd";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

export const NewTyreModal = ({ open, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const [newImg, setNewImg] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [showSpikes, setShowSpikes] = useState(false);

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
        console.log("values => ", values);
        onOk({ ...values, imgSrc: newImg }); // Передаем данные формы и новое фото
        form.resetFields();
        setNewImg(null);
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  const handleIsWinter = (value) => {
    return value === "winter" ? setShowSpikes(true) : setShowSpikes(false);
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
          name="season"
          label="Сезон"
          rules={[{ required: true, message: "Укажите сезон" }]}
        >
          <Select placeholder="Выберите значение" onChange={handleIsWinter}>
            <Select.Option value="summer">Лето</Select.Option>
            <Select.Option value="winter">Зима</Select.Option>
          </Select>
        </Form.Item>

        {showSpikes ? (
          <Form.Item
            name="isSpiked"
            label="Тип зимней резины"
            rules={[{ required: true, message: "Введите тип зимней шины" }]}
          >
            <Select placeholder="Выберите значение">
              <Select.Option value={true}>С шипами</Select.Option>
              <Select.Option value={false}>Без шипов</Select.Option>
            </Select>
          </Form.Item>
        ) : null}

        <Form.Item label="Размеры товара">
          <Space.Compact>
            <Form.Item
              name={["size", "width"]}
              noStyle
              rules={[{ required: true, message: "Введите ширину" }]}
            >
              <Input
                type="number"
                style={{ width: "33%" }}
                placeholder="Ширина"
              />
            </Form.Item>
            <Form.Item
              name={["size", "height"]}
              noStyle
              rules={[{ required: true, message: "Введите высоту" }]}
            >
              <Input
                type="number"
                style={{ width: "33%" }}
                placeholder="Высота"
              />
            </Form.Item>
            <Form.Item
              name={["size", "radius"]}
              noStyle
              rules={[{ required: true, message: "Введите радиус" }]}
            >
              <Input
                type="number"
                style={{ width: "33%" }}
                placeholder="Радиус"
              />
            </Form.Item>
          </Space.Compact>
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
