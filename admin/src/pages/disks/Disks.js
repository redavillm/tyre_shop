import { Space } from "antd";
import { Link } from "react-router-dom";
import { ProductList } from "../../components/ProductList";

const columns = [
  {
    title: "ID в базе",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Тип",
    dataIndex: "type",
    key: "type",
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
    dataIndex: "diametr",
    key: "diametr",
  },
  {
    title: "Разболтовка или что-то такое",
    dataIndex: "mount",
    key: "mount",
  },
  {
    title: "Вынос",
    dataIndex: "offset",
    key: "offset",
  },
  {
    title: "Цвет",
    dataIndex: "color",
    key: "color",
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
    render: () => (
      <Space size="middle">
        <Link>Редактировать</Link>
        <Link>Удалить</Link>
      </Space>
    ),
  },
];

export const Disks = () => <ProductList columns={columns} type={"disks"} />;
