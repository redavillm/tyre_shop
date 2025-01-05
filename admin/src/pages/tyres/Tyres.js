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
    render: () => (
      <Space size="middle">
        <Link>Редактировать</Link>
        <Link>Удалить</Link>
      </Space>
    ),
  },
];

export const Tyres = () => <ProductList columns={columns} type={"tyres"} />;
