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
    render: () => (
      <Space size="middle">
        <Link>Редактировать</Link>
        <Link>Удалить</Link>
      </Space>
    ),
  },
];

export const Accumulators = () => (
  <ProductList columns={columns} type={"accumulators"} />
);
