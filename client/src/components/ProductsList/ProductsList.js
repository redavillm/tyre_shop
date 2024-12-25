import { useState } from "react";
import { Card } from "../Card/Card";
import { Container, StyledProductList } from "../Styles/mainStyeles";
import { StyledSorting } from "../Styles/StyledCatalog";

export const ProductsList = ({ productsList, type }) => {
  const [sortType, setSortType] = useState("-");

  const handleSort = (event) => {
    setSortType(event.target.value);
  };

  const sortedProducts = [...productsList].sort((a, b) => {
    if (sortType === "Дешевле") {
      return a.price - b.price; // Сортировка по возрастанию цены
    }
    if (sortType === "Дороже") {
      return b.price - a.price; // Сортировка по убыванию цены
    }
    return 0; // Без сортировки
  });

  return (
    <Container>
      <StyledSorting>
        Сортировать:
        <select value={sortType} onChange={handleSort}>
          <option>-</option>
          <option>Дешевле</option>
          <option>Дороже</option>
        </select>
      </StyledSorting>
      <StyledProductList>
        {sortedProducts.length > 0 ? (
          sortedProducts?.map((product) => {
            return <Card product={product} key={product._id} type={type} />;
          })
        ) : (
          <p>Список пуст.</p>
        )}
      </StyledProductList>
    </Container>
  );
};
