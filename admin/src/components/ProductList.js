import { Table } from "antd";
import { useEffect } from "react";

export const ProductList = ({
  columns,
  type,
  productsList,
  setProductsList,
}) => {
  useEffect(() => {
    fetch(`http://localhost:3001/${type}`)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .then((data) => setProductsList(data.items))
      .catch((e) => {
        console.log("Error: " + e.message);
      });
  }, [type, setProductsList]);

  return productsList ? (
    <Table columns={columns} dataSource={productsList} />
  ) : null;
};
