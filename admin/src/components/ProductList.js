import { Table } from "antd";
import { useEffect } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProductList = ({
  columns,
  type,
  productsList,
  setProductsList,
}) => {
  useEffect(() => {
    fetch(`${apiUrl}/${type}`)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .then((data) => {
        const dataWithKeys = data.items.map((item) => ({
          ...item,
          key: item.id || item._id || Math.random().toString(),
        }));
        setProductsList(dataWithKeys);
      })
      .catch((e) => {
        console.log("Error: " + e.message);
      });
  }, [type, setProductsList]);

  return productsList ? (
    <Table columns={columns} dataSource={productsList} />
  ) : null;
};
