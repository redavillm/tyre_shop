import { Table } from "antd";
import { useEffect, useState } from "react";

export const ProductList = ({ columns, type }) => {
  const [productData, setProductsData] = useState([]);

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
      .then((data) => setProductsData(data.items))
      .catch((e) => {
        console.log("Error: " + e.message);
      });
  }, [type]);

  return productData ? (
    <Table columns={columns} dataSource={productData} />
  ) : null;
};
